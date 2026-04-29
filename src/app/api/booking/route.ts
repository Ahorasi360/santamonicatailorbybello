import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase';
import { sendOwnerNotification, sendClientConfirmation } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      service,
      preferred_date,
      preferred_time,
      message,
      source_page,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
    } = body;

    // Validate required fields
    if (!name || name.trim().length < 2) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    // Get referrer from headers
    const referrer = req.headers.get('referer') || undefined;

    // Insert into Supabase
    const supabase = createServerSupabaseClient();
    const { data, error } = await supabase
      .from('bookings')
      .insert([{
        name: name.trim(),
        email: email?.trim() || null,
        phone: phone?.trim() || null,
        service: service || null,
        preferred_date: preferred_date || null,
        preferred_time: preferred_time || null,
        message: message?.trim() || null,
        source_page: source_page || null,
        utm_source: utm_source || null,
        utm_medium: utm_medium || null,
        utm_campaign: utm_campaign || null,
        utm_term: utm_term || null,
        utm_content: utm_content || null,
        referrer: referrer || null,
        status: 'new',
      }])
      .select()
      .single();

    if (error) {
      console.error('[Booking API] Supabase error:', error);
      return NextResponse.json({ error: 'Failed to save booking' }, { status: 500 });
    }

    // Send emails (fire-and-forget — do not block the response)
    Promise.all([
      sendOwnerNotification({ name, email, phone, service, preferred_date, preferred_time, message, source_page }),
      email ? sendClientConfirmation({ name, email, service, preferred_date, preferred_time }) : Promise.resolve(),
    ]).catch((err) => {
      console.error('[Booking API] Email error:', err);
    });

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (err) {
    console.error('[Booking API] Unexpected error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
