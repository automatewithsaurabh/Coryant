-- Run this in the Supabase SQL editor (Dashboard → SQL Editor → New query).
-- Supabase Auth handles the users table — no need to create it manually.

-- ── purchases ────────────────────────────────────────────────────────────────

create table if not exists public.purchases (
  id                          uuid primary key default gen_random_uuid(),
  user_id                     uuid not null references auth.users(id) on delete cascade,
  pack_slug                   text not null,
  stripe_checkout_session_id  text not null unique,   -- unique prevents double-grants on webhook retry
  stripe_customer_id          text,
  stripe_payment_intent_id    text,
  amount_total                integer,                 -- in cents
  currency                    text,
  created_at                  timestamptz not null default now()
);

-- One purchase record per user per pack — prevents duplicate rows from double-clicks or retries.
alter table public.purchases
  add constraint if not exists purchases_user_pack_unique unique (user_id, pack_slug);

-- Index for the most common query: "has this user bought this pack?"
create index if not exists purchases_user_pack_idx
  on public.purchases (user_id, pack_slug);

-- ── Row Level Security ────────────────────────────────────────────────────────
-- Always enable RLS. Tables without RLS are publicly readable by default.

alter table public.purchases enable row level security;

-- Users can only read their own purchases.
create policy "users can read own purchases"
  on public.purchases
  for select
  using (auth.uid() = user_id);

-- Only the service role (used by the Stripe webhook) can insert.
-- No client-side INSERT is allowed, preventing fake purchase records.
create policy "service role can insert purchases"
  on public.purchases
  for insert
  with check (auth.role() = 'service_role');

-- No updates or deletes allowed from any role — purchases are immutable records.
-- Issue refunds in Stripe; handle access revocation separately if needed.
