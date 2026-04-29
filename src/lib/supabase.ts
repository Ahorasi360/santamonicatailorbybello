import { createClient, SupabaseClient } from '@supabase/supabase-js';

// ─── ENV ACCESSORS (read on demand, not at module load) ────────────────────────
// Reading env at module load breaks `next build` when env vars aren't set yet
// (e.g., on a fresh Vercel project before the env tab is configured).

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `Missing required environment variable: ${name}. ` +
      `Set it in your .env.local (dev) or Vercel project settings (production).`
    );
  }
  return value;
}

// ─── CLIENT-SIDE (anon key, RLS-protected) ─────────────────────────────────────
let _browserClient: SupabaseClient | null = null;

export function getSupabaseBrowser(): SupabaseClient {
  if (_browserClient) return _browserClient;
  _browserClient = createClient(
    requireEnv('NEXT_PUBLIC_SUPABASE_URL'),
    requireEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY')
  );
  return _browserClient;
}

// ─── SERVER-SIDE (service role key, bypasses RLS — API routes ONLY) ────────────
export function createServerSupabaseClient(): SupabaseClient {
  return createClient(
    requireEnv('NEXT_PUBLIC_SUPABASE_URL'),
    requireEnv('SUPABASE_SERVICE_ROLE_KEY'),
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
}

// ─── DATABASE TYPES ────────────────────────────────────────────────────────────
// NOTE: `status` values must match the CHECK constraint in supabase/schema.sql.
export interface BookingRecord {
  id?: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  preferred_date: string;
  preferred_time: string;
  message?: string;
  source_page?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  referrer?: string;
  status?: 'new' | 'contacted' | 'booked' | 'completed' | 'cancelled';
  notes?: string;
  created_at?: string;
  updated_at?: string;
}
