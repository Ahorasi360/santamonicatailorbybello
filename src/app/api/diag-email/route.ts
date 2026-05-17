import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function GET() {
  const envSummary = {
    FROM_EMAIL_set: !!process.env.FROM_EMAIL,
    FROM_EMAIL_value: process.env.FROM_EMAIL ? `${process.env.FROM_EMAIL.slice(0, 4)}...len=${process.env.FROM_EMAIL.length}` : '(empty/undefined)',
    OWNER_EMAIL_set: !!process.env.OWNER_EMAIL,
    OWNER_EMAIL_value: process.env.OWNER_EMAIL ? `${process.env.OWNER_EMAIL.slice(0, 4)}...len=${process.env.OWNER_EMAIL.length}` : '(empty/undefined)',
    RESEND_API_KEY_set: !!process.env.RESEND_API_KEY,
    RESEND_API_KEY_prefix: process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.slice(0, 6) : '(empty)',
    NODE_ENV: process.env.NODE_ENV,
  };

  // Now try to actually send an email and report the exact response
  let sendResult: unknown = '(not attempted)';
  try {
    if (!process.env.RESEND_API_KEY) {
      sendResult = { error: 'RESEND_API_KEY missing — cannot test send' };
    } else {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const FROM = process.env.FROM_EMAIL || 'leads@out.multiservicios360.net';
      const TO_LIST = (process.env.OWNER_EMAIL || 'flashpreviews@gmail.com')
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);

      const result = await resend.emails.send({
        from: `Santa Monica Tailor by Bello <${FROM}>`,
        to: TO_LIST,
        subject: `DIAGNOSTIC — ${new Date().toISOString()}`,
        html: `<p>Diagnostic test fired from /api/diag-email at ${new Date().toISOString()}.</p><p>FROM resolved to: ${FROM}</p><p>TO resolved to: ${JSON.stringify(TO_LIST)}</p>`,
      });

      sendResult = result;
    }
  } catch (err) {
    sendResult = {
      caught_error: true,
      name: err instanceof Error ? err.name : 'unknown',
      message: err instanceof Error ? err.message : String(err),
    };
  }

  return NextResponse.json({ env: envSummary, sendResult }, { status: 200 });
}
