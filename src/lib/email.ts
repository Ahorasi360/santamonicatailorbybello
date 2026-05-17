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

// FROM_EMAIL must be on a Resend-verified sending domain or Resend will reject.
// Default falls back to the verified MS360 domain used across the agency.
const FROM_EMAIL = process.env.FROM_EMAIL || 'leads@out.multiservicios360.net';
// OWNER_EMAIL supports a comma-separated list so you can notify multiple
// recipients (e.g., flashpreviews@gmail.com,javierbello689@gmail.com) without
// any code change — update the Vercel env var and redeploy.
const OWNER_EMAILS = (process.env.OWNER_EMAIL || 'flashpreviews@gmail.com')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);
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

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light only">
  <meta name="supported-color-schemes" content="light">
  <title>New Appointment Request</title>
</head>
<body style="margin:0;padding:0;background:#f5f1ea;font-family:Georgia,'Times New Roman',serif;color:#1a1a1a;-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f5f1ea;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid #e8dec8;">
          <!-- Header -->
          <tr>
            <td style="padding:32px 32px 20px;border-bottom:1px solid #e8dec8;">
              <p style="margin:0;font-family:Georgia,serif;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;color:#9d7b2e;font-weight:600;">${SITE_NAME}</p>
              <h1 style="margin:12px 0 0;font-family:Georgia,serif;font-size:26px;font-weight:400;color:#1a1a1a;line-height:1.2;">New Appointment Request</h1>
              <div style="margin-top:12px;">
                <span style="display:inline-block;background:#faf6ec;border:1px solid #9d7b2e;color:#9d7b2e;font-family:Georgia,serif;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;padding:4px 12px;font-weight:600;">New Lead</span>
              </div>
            </td>
          </tr>
          <!-- Details table -->
          <tr>
            <td style="padding:24px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #e8dec8;width:35%;vertical-align:top;">
                    <p style="margin:0;font-family:Georgia,serif;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#9d7b2e;font-weight:600;">Client Name</p>
                  </td>
                  <td style="padding:10px 0;border-bottom:1px solid #e8dec8;vertical-align:top;">
                    <p style="margin:0;font-family:Georgia,serif;font-size:15px;color:#1a1a1a;line-height:1.5;">${name}</p>
                  </td>
                </tr>
                ${email ? `<tr>
                  <td style="padding:10px 0;border-bottom:1px solid #e8dec8;width:35%;vertical-align:top;">
                    <p style="margin:0;font-family:Georgia,serif;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#9d7b2e;font-weight:600;">Email</p>
                  </td>
                  <td style="padding:10px 0;border-bottom:1px solid #e8dec8;vertical-align:top;">
                    <p style="margin:0;font-family:Georgia,serif;font-size:15px;line-height:1.5;"><a href="mailto:${email}" style="color:#9d7b2e;text-decoration:underline;">${email}</a></p>
                  </td>
                </tr>` : ''}
                ${phone ? `<tr>
                  <td style="padding:10px 0;border-bottom:1px solid #e8dec8;width:35%;vertical-align:top;">
                    <p style="margin:0;font-family:Georgia,serif;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#9d7b2e;font-weight:600;">Phone</p>
                  </td>
                  <td style="padding:10px 0;border-bottom:1px solid #e8dec8;vertical-align:top;">
                    <p style="margin:0;font-family:Georgia,serif;font-size:15px;line-height:1.5;"><a href="tel:${phone}" style="color:#9d7b2e;text-decoration:underline;">${phone}</a></p>
                  </td>
                </tr>` : ''}
                ${service ? `<tr>
                  <td style="padding:10px 0;border-bottom:1px solid #e8dec8;width:35%;vertical-align:top;">
                    <p style="margin:0;font-family:Georgia,serif;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#9d7b2e;font-weight:600;">Service</p>
                  </td>
                  <td style="padding:10px 0;border-bottom:1px solid #e8dec8;vertical-align:top;">
                    <p style="margin:0;font-family:Georgia,serif;font-size:15px;color:#1a1a1a;line-height:1.5;">${service}</p>
                  </td>
                </tr>` : ''}
                ${preferred_date ? `<tr>
                  <td style="padding:10px 0;border-bottom:1px solid #e8dec8;width:35%;vertical-align:top;">
                    <p style="margin:0;font-family:Georgia,serif;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#9d7b2e;font-weight:600;">Preferred Date</p>
                  </td>
                  <td style="padding:10px 0;border-bottom:1px solid #e8dec8;vertical-align:top;">
                    <p style="margin:0;font-family:Georgia,serif;font-size:15px;color:#1a1a1a;line-height:1.5;">${preferred_date}</p>
                  </td>
                </tr>` : ''}
                ${preferred_time ? `<tr>
                  <td style="padding:10px 0;border-bottom:1px solid #e8dec8;width:35%;vertical-align:top;">
                    <p style="margin:0;font-family:Georgia,serif;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#9d7b2e;font-weight:600;">Preferred Time</p>
                  </td>
                  <td style="padding:10px 0;border-bottom:1px solid #e8dec8;vertical-align:top;">
                    <p style="margin:0;font-family:Georgia,serif;font-size:15px;color:#1a1a1a;line-height:1.5;">${preferred_time}</p>
                  </td>
                </tr>` : ''}
                ${message ? `<tr>
                  <td colspan="2" style="padding:16px 0 8px;">
                    <p style="margin:0;font-family:Georgia,serif;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#9d7b2e;font-weight:600;">Message</p>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding:0 0 12px;border-bottom:1px solid #e8dec8;">
                    <p style="margin:0;font-family:Georgia,serif;font-size:15px;color:#1a1a1a;line-height:1.7;white-space:pre-wrap;">${message}</p>
                  </td>
                </tr>` : ''}
                ${source_page ? `<tr>
                  <td colspan="2" style="padding:14px 0 0;">
                    <p style="margin:0;font-family:Georgia,serif;font-size:11px;color:#8a7a5a;">Source page: ${source_page}</p>
                  </td>
                </tr>` : ''}
              </table>
              ${email ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:24px;">
                <tr><td>
                  <a href="mailto:${email}" style="display:inline-block;background:#9d7b2e;color:#ffffff;font-family:Georgia,serif;font-size:13px;letter-spacing:0.12em;text-transform:uppercase;padding:12px 28px;text-decoration:none;font-weight:600;">Reply to ${name.split(' ')[0]}</a>
                </td></tr>
              </table>` : ''}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:20px 32px;border-top:1px solid #e8dec8;background:#faf6ec;">
              <p style="margin:0;font-family:Georgia,serif;font-size:11px;color:#8a7a5a;line-height:1.6;">${SITE_NAME} · 724 Santa Monica Blvd, Santa Monica, CA 90401</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = `${SITE_NAME}
NEW APPOINTMENT REQUEST

Client Name: ${name}
${email ? `Email: ${email}\n` : ''}${phone ? `Phone: ${phone}\n` : ''}${service ? `Service: ${service}\n` : ''}${preferred_date ? `Preferred Date: ${preferred_date}\n` : ''}${preferred_time ? `Preferred Time: ${preferred_time}\n` : ''}${message ? `\nMessage:\n${message}\n` : ''}${source_page ? `\nSource page: ${source_page}` : ''}

—
${SITE_NAME}
724 Santa Monica Blvd, Santa Monica, CA 90401`;

  return getResend().emails.send({
    from: `${SITE_NAME} <${FROM_EMAIL}>`,
    to: OWNER_EMAILS,
    subject: `New Appointment Request — ${name}${service ? ` (${service})` : ''}`,
    html,
    text,
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

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light only">
  <meta name="supported-color-schemes" content="light">
  <title>Your Appointment Request — ${SITE_NAME}</title>
</head>
<body style="margin:0;padding:0;background:#f5f1ea;font-family:Georgia,'Times New Roman',serif;color:#1a1a1a;-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f5f1ea;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid #e8dec8;">
          <!-- Header -->
          <tr>
            <td align="center" style="padding:40px 32px 24px;border-bottom:1px solid #e8dec8;">
              <p style="margin:0;font-family:Georgia,serif;font-size:13px;letter-spacing:0.2em;text-transform:uppercase;color:#9d7b2e;font-weight:600;">${SITE_NAME}</p>
              <p style="margin:8px 0 0;font-size:10px;color:#bfa770;letter-spacing:0.3em;">◆ &nbsp; ◆ &nbsp; ◆</p>
              <h1 style="margin:16px 0 0;font-family:Georgia,serif;font-size:26px;font-weight:400;color:#1a1a1a;line-height:1.2;">Your Request Has Been Received</h1>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              <p style="margin:0 0 20px;font-family:Georgia,serif;font-size:16px;line-height:1.7;color:#1a1a1a;">Dear <span style="color:#9d7b2e;font-weight:600;">${firstName}</span>,</p>
              <p style="margin:0 0 20px;font-family:Georgia,serif;font-size:15px;line-height:1.8;color:#3a3a3a;">
                Thank you for reaching out to Santa Monica Tailor by Bello. We have received your appointment request and will be in touch within 24 hours to confirm your booking.
              </p>
              ${(service || preferred_date || preferred_time) ? `
              <!-- Details box -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:28px 0;background:#faf6ec;border:1px solid #e8dec8;">
                <tr><td style="padding:20px 24px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                    ${service ? `<tr>
                      <td style="padding:8px 0;border-bottom:1px solid #e8dec8;font-family:Georgia,serif;font-size:13px;color:#7a6a4a;width:40%;">Service</td>
                      <td style="padding:8px 0;border-bottom:1px solid #e8dec8;font-family:Georgia,serif;font-size:14px;color:#1a1a1a;text-align:right;">${service}</td>
                    </tr>` : ''}
                    ${preferred_date ? `<tr>
                      <td style="padding:8px 0;border-bottom:1px solid #e8dec8;font-family:Georgia,serif;font-size:13px;color:#7a6a4a;width:40%;">Preferred Date</td>
                      <td style="padding:8px 0;border-bottom:1px solid #e8dec8;font-family:Georgia,serif;font-size:14px;color:#1a1a1a;text-align:right;">${preferred_date}</td>
                    </tr>` : ''}
                    ${preferred_time ? `<tr>
                      <td style="padding:8px 0;font-family:Georgia,serif;font-size:13px;color:#7a6a4a;width:40%;">Preferred Time</td>
                      <td style="padding:8px 0;font-family:Georgia,serif;font-size:14px;color:#1a1a1a;text-align:right;">${preferred_time}</td>
                    </tr>` : ''}
                  </table>
                </td></tr>
              </table>` : ''}
              <p style="margin:24px 0 28px;font-family:Georgia,serif;font-size:15px;line-height:1.8;color:#3a3a3a;">
                If you have any questions in the meantime, please do not hesitate to call us directly.
              </p>
              <!-- CTA button -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center">
                    <a href="tel:+14243010146" style="display:inline-block;background:#9d7b2e;color:#ffffff;font-family:Georgia,serif;font-size:14px;letter-spacing:0.12em;text-transform:uppercase;padding:14px 32px;text-decoration:none;font-weight:600;">+1 (424) 301-0146</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td align="center" style="padding:24px 32px 32px;border-top:1px solid #e8dec8;background:#faf6ec;">
              <p style="margin:0 0 6px;font-family:Georgia,serif;font-size:13px;color:#3a3a3a;line-height:1.7;">724 Santa Monica Blvd &nbsp;·&nbsp; Santa Monica, CA 90401</p>
              <p style="margin:0 0 6px;font-family:Georgia,serif;font-size:13px;color:#3a3a3a;line-height:1.7;">Mon–Fri 8:30am–6pm &nbsp;·&nbsp; Sat 9am–5pm</p>
              <p style="margin:8px 0 0;font-family:Georgia,serif;font-size:12px;"><a href="https://www.santamonicatailorbybello.com" style="color:#9d7b2e;text-decoration:none;">santamonicatailorbybello.com</a></p>
              <p style="margin:16px 0 0;font-family:Georgia,serif;font-size:11px;color:#8a7a5a;">${SITE_NAME} · All rights reserved</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = `${SITE_NAME}

YOUR REQUEST HAS BEEN RECEIVED

Dear ${firstName},

Thank you for reaching out to Santa Monica Tailor by Bello. We have received your appointment request and will be in touch within 24 hours to confirm your booking.
${service ? `\nService: ${service}` : ''}${preferred_date ? `\nPreferred Date: ${preferred_date}` : ''}${preferred_time ? `\nPreferred Time: ${preferred_time}` : ''}

If you have any questions in the meantime, please call us directly at +1 (424) 301-0146.

724 Santa Monica Blvd
Santa Monica, CA 90401
Mon–Fri 8:30am–6pm · Sat 9am–5pm
https://www.santamonicatailorbybello.com`;

  return getResend().emails.send({
    from: `${SITE_NAME} <${FROM_EMAIL}>`,
    to: email,
    subject: `Your Appointment Request — ${SITE_NAME}`,
    html,
    text,
  });
}
