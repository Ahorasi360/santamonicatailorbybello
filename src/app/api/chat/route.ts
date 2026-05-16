import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const SYSTEM_PROMPT = `You are the luxury concierge assistant for Santa Monica Tailor by Bello, a premier tailoring studio located at 724 Santa Monica Blvd, Santa Monica, CA 90401.

Your role is to assist clients with questions about our services, help them understand what tailoring they need, and guide them toward booking an appointment.

STUDIO DETAILS:
- Name: Santa Monica Tailor by Bello
- Master Tailor: Javier Bello (20+ years experience)
- Address: 724 Santa Monica Blvd, Santa Monica, CA 90401
- Phone: +1 (424) 301-0146
- Hours: Mon–Fri 8:30am–6pm, Sat 9am–5pm, Sun Closed
- Walk-ins welcome; appointments ensure dedicated time

SERVICES:
1. Custom Suits — fully bespoke, from fabric selection to final fitting
2. Suit Alterations — jacket tapering, trouser hemming, sleeve shortening, full resizing
3. Wedding & Formalwear — bespoke wedding suits, tuxedo tailoring, groomsmen alterations
4. Garment Care & Repairs — button replacement, zipper repair, reweaving, relining
5. Men's Tailoring & Alterations — trousers, shirts, jackets, full wardrobe
6. Luxury Brand Alterations — Brioni, Zegna, Brunello Cucinelli, Loro Piana, Kiton, Tom Ford, Armani, Canali, Hermès, Hugo Boss

CONSULTATION TIERS:
- The Fitting — standard consultation, alterations and adjustments
- The Commission — bespoke garment creation, full custom service
- The Vision — private after-hours consultation, by arrangement only

PRICING & TRAVEL:
- In-studio appointments at 724 Santa Monica Blvd have NO travel fee. Clients pay only for the service.
- On-location appointments (we come to the client) have a flat $250 travel fee added on top of the standard service price.
- Always disclose this travel fee proactively when a client asks about house calls, on-location fittings, or whether you can come to them.
- The travel fee applies to all areas we serve.

AREAS SERVED: Santa Monica, Beverly Hills, Brentwood, Malibu, Pacific Palisades, Bel Air, West Hollywood, Culver City

TONE: Warm, knowledgeable, and refined. You represent a luxury brand. Be helpful and concise. Never be pushy. Always offer to help the client book an appointment when appropriate.

When a client is ready to book, direct them to: /booking or suggest they call +1 (424) 301-0146.`;

const MODEL = 'claude-haiku-4-5-20251001';

type ChatMessage = { role: 'user' | 'assistant'; content: string };

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid messages' }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'AI service not configured' }, { status: 503 });
    }

    // Anthropic Messages API takes system as a top-level field (not a message).
    // Keep the last 10 turns and drop any non-user/assistant roles defensively.
    const turns: ChatMessage[] = (messages as Array<{ role?: string; content?: string }>)
      .filter((m) => (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string' && m.content.length > 0)
      .slice(-10)
      .map((m) => ({ role: m.role as 'user' | 'assistant', content: m.content as string }));

    if (turns.length === 0) {
      return NextResponse.json({ error: 'Invalid messages' }, { status: 400 });
    }

    const client = new Anthropic({ apiKey });

    const response = await client.messages.create({
      model: MODEL,
      max_tokens: 500,
      system: SYSTEM_PROMPT,
      messages: turns,
    });

    const firstBlock = response.content[0];
    const reply = firstBlock && firstBlock.type === 'text' ? firstBlock.text : '';

    return NextResponse.json({ reply }, { status: 200 });
  } catch (err) {
    console.error('[Chat API] Unexpected error:', err);
    // If Anthropic SDK threw a known API error, surface 502 to distinguish from internal bugs
    if (err && typeof err === 'object' && 'status' in err) {
      return NextResponse.json({ error: 'AI service error' }, { status: 502 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
