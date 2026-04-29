'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

type Message = { role: 'user' | 'assistant'; content: string };

const WELCOME: Message = {
  role: 'assistant',
  content: 'Good day. I am the concierge for Santa Monica Tailor by Bello. How may I assist you today — are you looking for a suit alteration, a custom garment, or something else?',
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput('');
    const next: Message[] = [...messages, { role: 'user', content: text }];
    setMessages(next);
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next.filter((m) => m.role !== 'assistant' || m !== WELCOME) }),
      });
      const data = await res.json();
      setMessages([...next, { role: 'assistant', content: data.reply || 'I apologise — please call us directly at +1 (424) 301-0146.' }]);
    } catch {
      setMessages([...next, { role: 'assistant', content: 'I apologise — please call us directly at +1 (424) 301-0146.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open concierge chat"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9999,
          width: '52px',
          height: '52px',
          background: 'oklch(73% 0.08 75)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 24px oklch(73% 0.08 75 / 0.35)',
        }}
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M2 2L16 16M16 2L2 16" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: '88px',
            right: '24px',
            zIndex: 9998,
            width: '340px',
            maxHeight: '520px',
            display: 'flex',
            flexDirection: 'column',
            background: 'oklch(8% 0.005 240)',
            border: '1px solid oklch(73% 0.08 75 / 0.2)',
            boxShadow: '0 20px 60px oklch(0% 0 0 / 0.6)',
          }}
        >
          {/* Header */}
          <div style={{ padding: '14px 16px', borderBottom: '1px solid oklch(95% 0.01 85 / 0.07)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'oklch(73% 0.08 75)', flexShrink: 0 }} />
            <div>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(73% 0.08 75)', margin: 0 }}>Bello Concierge</p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', color: 'oklch(55% 0.005 240)', margin: 0 }}>Santa Monica Tailor by Bello</p>
            </div>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '85%',
                  padding: '10px 13px',
                  background: m.role === 'user' ? 'oklch(73% 0.08 75)' : 'oklch(12% 0.005 240)',
                  border: m.role === 'assistant' ? '1px solid oklch(95% 0.01 85 / 0.07)' : 'none',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  lineHeight: 1.7,
                  color: m.role === 'user' ? 'oklch(8% 0 0)' : 'oklch(75% 0.005 240)',
                }}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ padding: '10px 13px', background: 'oklch(12% 0.005 240)', border: '1px solid oklch(95% 0.01 85 / 0.07)' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'oklch(55% 0.005 240)' }}>···</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick actions */}
          <div style={{ padding: '8px 12px', borderTop: '1px solid oklch(95% 0.01 85 / 0.06)', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {['Book appointment', 'Suit alterations', 'Custom suit'].map((q) => (
              <button
                key={q}
                onClick={() => { setInput(q); }}
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.08em', color: 'oklch(73% 0.08 75)', background: 'oklch(73% 0.08 75 / 0.08)', border: '1px solid oklch(73% 0.08 75 / 0.2)', padding: '4px 10px', cursor: 'pointer' }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div style={{ padding: '12px', borderTop: '1px solid oklch(95% 0.01 85 / 0.07)', display: 'flex', gap: '8px' }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Ask a question..."
              style={{
                flex: 1,
                background: 'oklch(12% 0.005 240)',
                border: '1px solid oklch(95% 0.01 85 / 0.1)',
                color: 'oklch(85% 0.005 240)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                padding: '8px 12px',
                outline: 'none',
              }}
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              style={{
                background: 'oklch(73% 0.08 75)',
                border: 'none',
                width: '36px',
                height: '36px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: loading || !input.trim() ? 0.5 : 1,
                flexShrink: 0,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Footer CTA */}
          <div style={{ padding: '10px 12px', borderTop: '1px solid oklch(95% 0.01 85 / 0.06)', textAlign: 'center' }}>
            <Link href="/booking" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(73% 0.08 75)', textDecoration: 'none' }}>
              Book an Appointment →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
