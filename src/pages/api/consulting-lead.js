export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, phone, utmSource, utmMedium, utmCampaign } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "A valid email address is required." });
  }

  const lead = {
    email,
    phone: phone || null,
    utmSource: utmSource || "direct",
    utmMedium: utmMedium || "organic",
    utmCampaign: utmCampaign || "consulting",
    timestamp: new Date().toISOString(),
  };

  // TODO: Replace the console.log below with your preferred lead storage:
  //   Option A — Google Sheets webhook: POST to NEXT_PUBLIC_LEAD_WEBHOOK_URL
  //   Option B — Resend: import { Resend } from 'resend'; send a notification email
  //   Option C — Mailchimp: POST to /3.0/lists/{list_id}/members
  //   Option D — ConvertKit: POST to /v3/forms/{form_id}/subscribe
  //
  // Example (Google Sheets webhook):
  //   const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  //   if (webhookUrl) await fetch(webhookUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(lead) });

  console.log("[Consulting Lead]", lead);

  return res.status(200).json({ success: true });
}
