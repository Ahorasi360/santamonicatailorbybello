-- Santa Monica Tailor by Bello — Supabase Schema
-- Run this in your Supabase SQL editor to set up the database

-- ─── BOOKINGS / LEADS TABLE ────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS bookings (
  id              BIGSERIAL PRIMARY KEY,
  created_at      TIMESTAMPTZ DEFAULT NOW() NOT NULL,

  -- Contact info
  name            TEXT NOT NULL,
  email           TEXT,
  phone           TEXT,

  -- Appointment details
  service         TEXT,
  preferred_date  TEXT,
  preferred_time  TEXT,
  message         TEXT,

  -- CRM / tracking
  source_page     TEXT,
  utm_source      TEXT,
  utm_medium      TEXT,
  utm_campaign    TEXT,
  utm_term        TEXT,
  utm_content     TEXT,
  referrer        TEXT,

  -- Status
  status          TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'booked', 'completed', 'cancelled')),
  notes           TEXT,

  -- Timestamps
  updated_at      TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_bookings_updated_at
  BEFORE UPDATE ON bookings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ─── INDEXES ───────────────────────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS bookings_created_at_idx ON bookings (created_at DESC);
CREATE INDEX IF NOT EXISTS bookings_status_idx ON bookings (status);
CREATE INDEX IF NOT EXISTS bookings_email_idx ON bookings (email);

-- ─── ROW LEVEL SECURITY ────────────────────────────────────────────────────────
-- Enable RLS — only service role (server-side) can read/write
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Allow server-side inserts (service role bypasses RLS by default)
-- For anon inserts from API routes, create a policy:
CREATE POLICY "Allow insert from API" ON bookings
  FOR INSERT
  WITH CHECK (true);

-- Only authenticated admin users can read bookings
-- (Adjust this policy based on your auth setup)
CREATE POLICY "Allow admin read" ON bookings
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- ─── JOURNAL / BLOG POSTS (optional CMS) ───────────────────────────────────────
-- Uncomment if you want to manage blog posts from Supabase
/*
CREATE TABLE IF NOT EXISTS journal_posts (
  id          BIGSERIAL PRIMARY KEY,
  created_at  TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at  TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  slug        TEXT UNIQUE NOT NULL,
  title       TEXT NOT NULL,
  excerpt     TEXT,
  body        TEXT,
  category    TEXT,
  image_url   TEXT,
  published   BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMPTZ
);

ALTER TABLE journal_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read published posts" ON journal_posts
  FOR SELECT
  USING (published = TRUE);
*/
