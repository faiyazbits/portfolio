import { Resend } from 'resend';
import React from 'react';
import WelcomeEmail from '@/emails/WelcomeEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'A valid email address is required.' });
  }

  const blogUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blog`;
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'noreply@mfayaz.live';

  try {
    const { error: emailError } = await resend.emails.send({
      from: `Faiyaz <${fromEmail}>`,
      to: email,
      subject: 'Welcome — glad you subscribed',
      react: React.createElement(WelcomeEmail, { blogUrl }),
    });

    if (emailError) throw emailError;

    resend.contacts.create({ email }).catch((err) =>
      console.error('[subscribe] contact create failed:', err?.message)
    );

    console.log('[subscribe]', { email });
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('[subscribe]', err?.message || err);
    return res.status(500).json({ error: 'Failed to subscribe. Please try again.' });
  }
}
