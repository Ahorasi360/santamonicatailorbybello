import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are the luxury concierge assistant for Santa Monica Tailor by Bello, a premier tailoring studio located at 724 Santa Monica Blvd, Santa Monica, CA 90401.

Your role is to assist clients with questions about our services, help them understand what tailoring they need, and guide them toward booking an appointment.

STUDIO DETAILS:
- Name: Santa Monica Tailor by Bello
- Master Tailor: Javier Bello (20+ years experience)
- Address: 724 Santa Monica Blvd, Santa Monica, CA 90401
- Phone: +1 (424) 301-0146
- Hours: Mon–Fri 9am–6pm, Sat 10am–5pm, Sun Closed
- Walk-ins welcome; appointments ensure dedicated time

SERVICES:
1. Custom Suits — fully bespoke, from fabric selection to final fitting
2. Suit Alterations — jacket tapering, trouser hemming, sleeve shortening, full resizing
3. Wedding & Formalwear — bespoke wedding suits, tuxedo tailoring, groomsmen alterations
4. Garment Care & Repairs — button replacement, zipper repair, reweaving, relining
5. Men's Tailoring & Alterations — trousers, shirts, jackets, full wardrobe
6. Luxury Brand Alterations — Brioni, Tom Ford, Armani, Kiton, Canali, Hermès

CONSULTATION TIERS:
- The Fitting — standard consultation, alterations and adjustments
- The Commission — bespoke garment creation, full custom service
- The Vision — private after-hours consultation, by arrangement only

AREAS SERVED: Santa Monica, Beverly Hills, Brentwood, Malibu, Pacific Palisades, Bel Air, West Hollywood, Culver City

TONE: Warm, knowledgeable, and refined. You represent a luxury brand. Be helpful and concise. Never be pushy. Always offer to help the client book an appointment when appropriate.

When a client is ready to book, direct them to: /booking or suggest they call +1 (424) 301-0146.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid messages' }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'AI service not configured' }, { status: 503 });
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages.slice(-10), // Keep last 10 messages for context
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('[Chat API] OpenAI error:', err);
      return NextResponse.json({ error: 'AI service error' }, { status: 502 });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content;

    return NextResponse.json({ reply }, { status: 200 });
  } catch (err) {
    console.error('[Chat API] Unexpected error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
