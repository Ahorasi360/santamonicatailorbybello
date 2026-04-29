import { Resend } from 'resend';

// Lazy-init: avoid throwing at module load (build time) when RESEND_API_KEY isn't set.
let _resend: Resend | null = null;
function getResend(): Resend {
  if (_resend) return _resend;
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('Missing RESEND_API_KEY environment variable.');
  }
  _resend = new Resend(apiKey);
  return _resend;
}

const FROM_EMAIL = process.env.FROM_EMAIL || 'hello@santamonicatailorbybello.com';
const OWNER_EMAIL = process.env.OWNER_EMAIL || 'javier@santamonicatailorbybello.com';
const SITE_NAME = 'Santa Monica Tailor by Bello';

// ─── OWNER NOTIFICATION ────────────────────────────────────────────────────────

type OwnerNotificationData = {
  name: string;
  email?: string;
  phone?: string;
  service?: string;
  preferred_date?: string;
  preferred_time?: string;
  message?: string;
  source_page?: string;
};

export async function sendOwnerNotification(data: OwnerNotificationData) {
  const { name, email, phone, service, preferred_date, preferred_time, message, source_page } = data;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Georgia, serif; background: #0a0a0a; color: #e8e0d0; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 24px; }
    .header { border-bottom: 1px solid rgba(200,170,100,0.2); padding-bottom: 24px; margin-bottom: 32px; }
    .logo { font-size: 13px; letter-spacing: 0.2em; text-transform: uppercase; color: #c8aa64; }
    .title { font-size: 24px; font-weight: 400; margin: 16px 0 0; color: #e8e0d0; }
    .badge { display: inline-block; background: rgba(200,170,100,0.15); border: 1px solid rgba(200,170,100,0.3); color: #c8aa64; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; padding: 4px 12px; margin-bottom: 24px; }
    .field { margin-bottom: 16px; }
    .label { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: #c8aa64; margin-bottom: 4px; }
    .value { font-size: 15px; color: #e8e0d0; line-height: 1.6; }
    .divider { border: none; border-top: 1px solid rgba(200,170,100,0.1); margin: 24px 0; }
    .footer { font-size: 11px; color: rgba(200,190,170,0.4); margin-top: 32px; }
    .cta { display: inline-block; background: #c8aa64; color: #0a0a0a; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; padding: 12px 24px; text-decoration: none; margin-top: 24px; font-weight: 600; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <p class="logo">${SITE_NAME}</p>
      <h1 class="title">New Appointment Request</h1>
    </div>
    <div class="badge">New Lead</div>
    <div class="field">
      <p class="label">Client Name</p>
      <p class="value">${name}</p>
    </div>
    ${email ? `<div class="field"><p class="label">Email</p><p class="value"><a href="mailto:${email}" style="color:#c8aa64">${email}</a></p></div>` : ''}
    ${phone ? `<div class="field"><p class="label">Phone</p><p class="value"><a href="tel:${phone}" style="color:#c8aa64">${phone}</a></p></div>` : ''}
    ${service ? `<div class="field"><p class="label">Service Requested</p><p class="value">${service}</p></div>` : ''}
    ${preferred_date ? `<div class="field"><p class="label">Preferred Date</p><p class="value">${preferred_date}</p></div>` : ''}
    ${preferred_time ? `<div class="field"><p class="label">Preferred Time</p><p class="value">${preferred_time}</p></div>` : ''}
    ${message ? `<hr class="divider"><div class="field"><p class="label">Message</p><p class="value">${message}</p></div>` : ''}
    ${source_page ? `<hr class="divider"><div class="field"><p class="label">Source Page</p><p class="value" style="font-size:12px;color:rgba(200,190,170,0.6)">${source_page}</p></div>` : ''}
    ${email ? `<a href="mailto:${email}" class="cta">Reply to ${name}</a>` : ''}
    <p class="footer">${SITE_NAME} · 724 Santa Monica Blvd, Santa Monica, CA 90401</p>
  </div>
</body>
</html>`;

  return getResend().emails.send({
    from: `${SITE_NAME} <${FROM_EMAIL}>`,
    to: OWNER_EMAIL,
    subject: `New Appointment Request — ${name}${service ? ` (${service})` : ''}`,
    html,
  });
}

// ─── CLIENT CONFIRMATION ───────────────────────────────────────────────────────

type ClientConfirmationData = {
  name: string;
  email: string;
  service?: string;
  preferred_date?: string;
  preferred_time?: string;
};

export async function sendClientConfirmation(data: ClientConfirmationData) {
  const { name, email, service, preferred_date, preferred_time } = data;

  const firstName = name.split(' ')[0];

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Georgia, serif; background: #0a0a0a; color: #e8e0d0; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 24px; }
    .header { border-bottom: 1px solid rgba(200,170,100,0.2); padding-bottom: 24px; margin-bottom: 32px; text-align: center; }
    .logo { font-size: 13px; letter-spacing: 0.2em; text-transform: uppercase; color: #c8aa64; }
    .ornament { font-size: 10px; color: rgba(200,170,100,0.4); margin: 8px 0; letter-spacing: 0.3em; }
    .title { font-size: 24px; font-weight: 400; margin: 16px 0 0; color: #e8e0d0; }
    .body-text { font-size: 15px; line-height: 1.9; color: rgba(200,190,170,0.75); margin-bottom: 20px; }
    .highlight { color: #c8aa64; }
    .details-box { border: 1px solid rgba(200,170,100,0.15); background: rgba(200,170,100,0.04); padding: 24px; margin: 28px 0; }
    .detail-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid rgba(200,170,100,0.08); font-size: 13px; }
    .detail-label { color: rgba(200,190,170,0.5); }
    .detail-value { color: #e8e0d0; }
    .cta { display: block; text-align: center; background: #c8aa64; color: #0a0a0a; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; padding: 14px 24px; text-decoration: none; margin: 28px 0; font-weight: 600; }
    .contact { text-align: center; font-size: 12px; color: rgba(200,190,170,0.5); line-height: 1.8; }
    .contact a { color: #c8aa64; }
    .footer { font-size: 11px; color: rgba(200,190,170,0.3); margin-top: 32px; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <p class="logo">${SITE_NAME}</p>
      <p class="ornament">◆ ◆ ◆</p>
      <h1 class="title">Your Request Has Been Received</h1>
    </div>
    <p class="body-text">Dear <span class="highlight">${firstName}</span>,</p>
    <p class="body-text">
      Thank you for reaching out to Santa Monica Tailor by Bello. We have received your appointment request and will be in touch within 24 hours to confirm your booking.
    </p>
    ${(service || preferred_date || preferred_time) ? `
    <div class="details-box">
      ${service ? `<div class="detail-row"><span class="detail-label">Service</span><span class="detail-value">${service}</span></div>` : ''}
      ${preferred_date ? `<div class="detail-row"><span class="detail-label">Preferred Date</span><span class="detail-value">${preferred_date}</span></div>` : ''}
      ${preferred_time ? `<div class="detail-row"><span class="detail-label">Preferred Time</span><span class="detail-value">${preferred_time}</span></div>` : ''}
    </div>` : ''}
    <p class="body-text">
      If you have any questions in the meantime, please do not hesitate to call us directly.
    </p>
    <a href="tel:+14243010146" class="cta">+1 (424) 301-0146</a>
    <div class="contact">
      <p>724 Santa Monica Blvd · Santa Monica, CA 90401</p>
      <p>Mon–Fri 9am–6pm · Sat 10am–5pm</p>
      <p><a href="https://www.santamonicatailorbybello.com">santamonicatailorbybello.com</a></p>
    </div>
    <p class="footer">${SITE_NAME} · All rights reserved</p>
  </div>
</body>
</html>`;

  return getResend().emails.send({
    from: `${SITE_NAME} <${FROM_EMAIL}>`,
    to: email,
    subject: `Your Appointment Request — ${SITE_NAME}`,
    html,
  });
}
