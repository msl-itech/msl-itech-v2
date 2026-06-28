import { createClient } from "npm:@supabase/supabase-js@2";
const corsHeaders = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type" };
import { sendMail, wrapHtml } from "../_shared/smtp.ts";
import { getStep, type ToolSlug } from "../_shared/sequence-content.ts";

const SITE = "https://msl-itech-v2.lovable.app";
const BATCH_SIZE = 50;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data: due, error } = await supabase
      .from("lead_sequences")
      .select("*")
      .eq("status", "active")
      .lte("next_send_at", new Date().toISOString())
      .limit(BATCH_SIZE);
    if (error) throw error;

    let processed = 0;
    let sent = 0;
    let failed = 0;

    for (const seq of due ?? []) {
      processed++;
      const step = getStep(seq.tool_slug as ToolSlug, seq.current_step);
      if (!step) {
        await supabase
          .from("lead_sequences")
          .update({ status: "completed", next_send_at: null })
          .eq("id", seq.id);
        continue;
      }
      const firstName = seq.lead_name ?? "";
      const subject = step.subject(firstName);
      const unsubUrl = `${SITE}/email/desinscription?token=${seq.unsubscribe_token}`;
      const html = wrapHtml({
        heading: subject,
        bodyHtml: step.html(firstName),
        ctaLabel: step.cta?.label,
        ctaUrl: step.cta?.url,
        unsubscribeUrl: unsubUrl,
      });

      let status: "sent" | "failed" = "sent";
      let err: string | null = null;
      try {
        await sendMail({ to: seq.email, subject, html });
        sent++;
      } catch (e) {
        status = "failed";
        err = e instanceof Error ? e.message : String(e);
        failed++;
        console.error("SMTP error", err);
      }

      await supabase.from("lead_sequence_sends").insert({
        sequence_id: seq.id,
        step: seq.current_step,
        kind: "sequence",
        recipient: seq.email,
        subject,
        status,
        error: err,
      });

      const nextStep = getStep(seq.tool_slug as ToolSlug, seq.current_step + 1);
      const next = nextStep
        ? new Date(Date.now() + nextStep.delayDays * 24 * 60 * 60 * 1000).toISOString()
        : null;
      await supabase
        .from("lead_sequences")
        .update({
          current_step: seq.current_step + 1,
          next_send_at: next,
          status: next ? "active" : "completed",
        })
        .eq("id", seq.id);
    }

    return new Response(JSON.stringify({ processed, sent, failed }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("process-lead-sequences error", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "unknown" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});