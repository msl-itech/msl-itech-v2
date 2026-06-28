import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  try {
    const url = new URL(req.url);
    let token: string | null = null;
    if (req.method === "GET") {
      token = url.searchParams.get("token");
    } else {
      const body = await req.json().catch(() => ({}));
      token = body?.token ?? null;
    }
    if (!token || !/^[0-9a-f-]{36}$/i.test(token)) {
      return new Response(JSON.stringify({ error: "invalid_token" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );
    const { data: seq } = await supabase
      .from("lead_sequences")
      .select("id, email, status, tool_slug")
      .eq("unsubscribe_token", token)
      .maybeSingle();
    if (!seq) {
      return new Response(JSON.stringify({ error: "not_found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (req.method === "POST") {
      await supabase
        .from("lead_sequences")
        .update({
          status: "stopped",
          unsubscribed_at: new Date().toISOString(),
          next_send_at: null,
        })
        .eq("id", seq.id);
    }
    return new Response(
      JSON.stringify({
        email: seq.email,
        tool_slug: seq.tool_slug,
        already: seq.status === "stopped",
        unsubscribed: req.method === "POST" || seq.status === "stopped",
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (e) {
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "unknown" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});