import { Resend } from 'resend';
import React from 'react';
import PlaybookEmail from '@/emails/PlaybookEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, utmSource, utmMedium, utmCampaign } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'A valid email address is required.' });
  }

  const downloadUrl = `https://drive.google.com/file/d/17gM6wDSSUJsOc37qtqr_8n97toao1Cr6/view?usp=sharing`;
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'noreply@mfayaz.live';

  try {
    const { error: emailError } = await resend.emails.send({
      from: `Fayaz <${fromEmail}>`,
      to: email,
      subject: 'Your AI Product Readiness Checklist',
      react: React.createElement(PlaybookEmail, { downloadUrl }),
    });

    if (emailError) throw emailError;

    // Store contact (best-effort — errors are logged but don't block the response)
    resend.contacts.create({ email }).catch((err) =>
      console.error('[send-pdf] contact create failed:', err?.message)
    );

    console.log('[send-pdf]', { email, utmSource, utmMedium, utmCampaign });
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('[send-pdf]', err?.message || err);
    return res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
}
