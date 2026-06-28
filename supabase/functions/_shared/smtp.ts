// SMTP sender shared helper — uses Office 365 / generic SMTP via denomailer.
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

let client: SMTPClient | null = null;

function getClient(): SMTPClient {
  if (client) return client;
  const hostname = Deno.env.get("SMTP_HOST")!;
  const port = Number(Deno.env.get("SMTP_PORT") ?? "587");
  const username = Deno.env.get("SMTP_USERNAME")!;
  const password = Deno.env.get("SMTP_PASSWORD")!;
  client = new SMTPClient({
    connection: {
      hostname,
      port,
      tls: port === 465,
      auth: { username, password },
    },
  });
  return client;
}

export type SendArgs = {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
};

export async function sendMail(args: SendArgs): Promise<void> {
  const from = Deno.env.get("SMTP_FROM")!;
  const fromName = Deno.env.get("SMTP_FROM_NAME") ?? "MSL-iTECH";
  const c = getClient();
  await c.send({
    from: `${fromName} <${from}>`,
    to: args.to,
    subject: args.subject,
    content: args.text ?? "Veuillez ouvrir cet email au format HTML.",
    html: args.html,
    replyTo: args.replyTo,
  });
}

export function wrapHtml(opts: {
  preheader?: string;
  heading: string;
  bodyHtml: string;
  ctaLabel?: string;
  ctaUrl?: string;
  unsubscribeUrl?: string;
  recipientName?: string;
}): string {
  const {
    preheader = "",
    heading,
    bodyHtml,
    ctaLabel,
    ctaUrl,
    unsubscribeUrl,
  } = opts;
  return `<!doctype html>
<html lang="fr"><head><meta charset="utf-8"><title>${escapeHtml(heading)}</title></head>
<body style="margin:0;padding:0;background:#f5f1ea;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#0a1929;">
  <span style="display:none;visibility:hidden;opacity:0;height:0;width:0;overflow:hidden;">${escapeHtml(preheader)}</span>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f5f1ea;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="560" cellspacing="0" cellpadding="0" border="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 40px -20px rgba(15,63,74,0.18);">
        <tr><td style="padding:28px 32px 8px 32px;border-bottom:1px solid #ece6d8;">
          <div style="font-family:'Courier New',monospace;font-size:11px;letter-spacing:0.22em;color:#0f3f4a;text-transform:uppercase;">MSL-iTECH · Le journal</div>
        </td></tr>
        <tr><td style="padding:28px 32px 8px 32px;">
          <h1 style="margin:0 0 16px 0;font-size:22px;line-height:1.3;color:#0a1929;font-weight:700;">${escapeHtml(heading)}</h1>
          <div style="font-size:15px;line-height:1.6;color:#2b3a45;">${bodyHtml}</div>
        </td></tr>
        ${ctaUrl && ctaLabel ? `<tr><td style="padding:8px 32px 28px 32px;">
          <a href="${escapeAttr(ctaUrl)}" style="display:inline-block;background:#FFDD57;color:#0a1929;font-weight:700;text-decoration:none;padding:14px 26px;border-radius:999px;font-size:15px;">${escapeHtml(ctaLabel)}</a>
        </td></tr>` : ""}
        <tr><td style="padding:20px 32px 24px 32px;border-top:1px solid #ece6d8;font-size:12px;color:#6b7785;line-height:1.5;">
          MSL-iTECH · Partenaire Odoo au Maroc · <a href="https://msl-itech-v2.lovable.app" style="color:#0f3f4a;">msl-itech-v2.lovable.app</a><br/>
          ${unsubscribeUrl ? `<a href="${escapeAttr(unsubscribeUrl)}" style="color:#6b7785;text-decoration:underline;">Se désinscrire de cette séquence</a>` : ""}
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
function escapeAttr(s: string): string {
  return escapeHtml(s);
}