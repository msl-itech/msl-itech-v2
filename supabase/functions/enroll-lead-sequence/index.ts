import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { sendMail, wrapHtml } from "../_shared/smtp.ts";
import { getStep, hotLeadEmail, type ToolSlug } from "../_shared/sequence-content.ts";

const SITE = "https://msl-itech-v2.lovable.app";
const HOT_THRESHOLD = 75;

function isToolSlug(v: unknown): v is ToolSlug {
  return (
    typeof v === "string" &&
    ["conformite-dgi", "roi-erp", "diagnostic-digital", "comparateur-sage-odoo"].includes(v)
  );
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  try {
    const body = await req.json();
    const email = String(body.email ?? "").trim().toLowerCase();
    const toolSlug = body.tool_slug;
    if (!email || !/.+@.+\..+/.test(email) || !isToolSlug(toolSlug)) {
      return new Response(JSON.stringify({ error: "invalid_input" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const score = Number(body.score ?? 0);
    const segment = String(body.segment ?? "froid");
    const firstName = body.first_name ? String(body.first_name) : null;
    const company = body.company ? String(body.company) : null;
    const phone = body.phone ? String(body.phone) : null;
    const templateData = body.template_data ?? {};

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    // Upsert sequence (1 active per email × tool)
    const { data: existing } = await supabase
      .from("lead_sequences")
      .select("id, status")
      .eq("tool_slug", toolSlug)
      .ilike("email", email)
      .maybeSingle();

    let seqId: string;
    let unsubToken: string;
    if (existing) {
      seqId = existing.id;
      // Restart only if stopped
      await supabase
        .from("lead_sequences")
        .update({
          status: "active",
          current_step: 0,
          next_send_at: null,
          lead_name: firstName,
          company,
          phone,
          score,
          segment,
          template_data: templateData,
        })
        .eq("id", seqId);
      const { data: row } = await supabase
        .from("lead_sequences").select("unsubscribe_token").eq("id", seqId).single();
      unsubToken = row!.unsubscribe_token;
    } else {
      const { data, error } = await supabase
        .from("lead_sequences")
        .insert({
          email,
          tool_slug: toolSlug,
          segment,
          score,
          lead_name: firstName,
          company,
          phone,
          template_data: templateData,
          current_step: 0,
          next_send_at: null,
          status: "active",
        })
        .select("id, unsubscribe_token")
        .single();
      if (error) throw error;
      seqId = data.id;
      unsubToken = data.unsubscribe_token;
    }

    // Send J+0 immediately
    const step0 = getStep(toolSlug, 0)!;
    const subject = step0.subject(firstName ?? "");
    const unsubUrl = `${SITE}/email/desinscription?token=${unsubToken}`;
    const html = wrapHtml({
      heading: subject,
      bodyHtml: step0.html(firstName ?? ""),
      ctaLabel: step0.cta?.label,
      ctaUrl: step0.cta?.url,
      unsubscribeUrl: unsubUrl,
      recipientName: firstName ?? undefined,
    });

    let sendStatus: "sent" | "failed" = "sent";
    let sendError: string | null = null;
    try {
      await sendMail({ to: email, subject, html });
    } catch (e) {
      sendStatus = "failed";
      sendError = e instanceof Error ? e.message : String(e);
      console.error("SMTP J+0 error", sendError);
    }

    await supabase.from("lead_sequence_sends").insert({
      sequence_id: seqId,
      step: 0,
      kind: "sequence",
      recipient: email,
      subject,
      status: sendStatus,
      error: sendError,
    });

    // Schedule next step
    const nextStep = getStep(toolSlug, 1);
    const next = nextStep
      ? new Date(Date.now() + nextStep.delayDays * 24 * 60 * 60 * 1000).toISOString()
      : null;
    await supabase
      .from("lead_sequences")
      .update({
        current_step: 1,
        next_send_at: next,
        status: next ? "active" : "completed",
      })
      .eq("id", seqId);

    // Hot lead notification
    if (score >= HOT_THRESHOLD) {
      const notifyTo = (Deno.env.get("HOT_LEAD_NOTIFY_EMAILS") ?? "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      if (notifyTo.length > 0) {
        const { subject: hSub, html: hHtml } = hotLeadEmail({
          score,
          segment,
          toolSlug,
          email,
          firstName: firstName ?? undefined,
          company: company ?? undefined,
          phone: phone ?? undefined,
          answers: templateData?.answers,
        });
        try {
          await sendMail({ to: notifyTo, subject: hSub, html: hHtml, replyTo: email });
          await supabase.from("lead_sequence_sends").insert({
            sequence_id: seqId,
            step: 0,
            kind: "hot_lead_notification",
            recipient: notifyTo.join(","),
            subject: hSub,
            status: "sent",
          });
        } catch (e) {
          await supabase.from("lead_sequence_sends").insert({
            sequence_id: seqId,
            step: 0,
            kind: "hot_lead_notification",
            recipient: notifyTo.join(","),
            subject: hSub,
            status: "failed",
            error: e instanceof Error ? e.message : String(e),
          });
        }
      }
    }

    return new Response(JSON.stringify({ ok: true, sequence_id: seqId }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("enroll-lead-sequence error", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "unknown" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});