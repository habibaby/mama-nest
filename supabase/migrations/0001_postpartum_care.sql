-- Postpartum care model — adds culture pathways to the existing pregnancy
-- record, a bookings table for the new care-package flow, and a guest-
-- friendly custom_requests table for Custom Care / Overnight Care quotes.
--
-- Deliberately NOT touched here: profiles, pregnancies (existing columns),
-- orders, reminders, kits — these already exist and are wired to the real
-- Stripe checkout for the £99 Postpartum Test. Care packages (7/14/30-day,
-- custom, overnight) do NOT have confirmed pricing yet, so bookings below
-- are booking *requests* — no amount_pence, no Stripe — Mama Nest follows
-- up directly to arrange payment once pricing is set.

-- ---------------------------------------------------------------------
-- pregnancies: add the cultural pathway + language preference
-- ---------------------------------------------------------------------
alter table public.pregnancies
  add column if not exists culture text
    check (culture is null or culture in ('yoruba', 'igbo', 'hausa', 'edo', 'delta')),
  add column if not exists preferred_language text;

-- ---------------------------------------------------------------------
-- bookings: postpartum care package requests
-- ---------------------------------------------------------------------
create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  pregnancy_id uuid references public.pregnancies(id) on delete set null,
  service text not null check (service in ('care_7', 'care_14', 'care_30', 'custom', 'overnight')),
  add_test boolean not null default false,
  baby_bath boolean not null default true,
  dietary text,
  location text,
  notes text,
  status text not null default 'requested'
    check (status in ('requested', 'birth_activated', 'care_scheduled', 'care_active', 'care_completed', 'cancelled')),
  birth_activated_at timestamptz,
  created_at timestamptz not null default now()
);

alter table public.bookings enable row level security;

drop policy if exists "bookings_select_own" on public.bookings;
create policy "bookings_select_own" on public.bookings
  for select using (auth.uid() = user_id);

drop policy if exists "bookings_insert_own" on public.bookings;
create policy "bookings_insert_own" on public.bookings
  for insert with check (auth.uid() = user_id);

drop policy if exists "bookings_update_own" on public.bookings;
create policy "bookings_update_own" on public.bookings
  for update using (auth.uid() = user_id);

-- ---------------------------------------------------------------------
-- custom_requests: Custom Care / Overnight Care quote requests.
-- Guest-friendly by design — no account needed to ask for a quote.
-- Insert-only from the public; only the service role (internal ops) reads.
-- ---------------------------------------------------------------------
create table if not exists public.custom_requests (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('custom', 'overnight')),
  name text not null,
  email text not null,
  phone text,
  postcode text,
  target_date date,
  culture text check (culture is null or culture in ('yoruba', 'igbo', 'hausa', 'edo', 'delta')),
  preferred_language text,
  support_needed text,
  preferred_dates text,
  preferred_hours text,
  overnight boolean not null default false,
  notes text,
  status text not null default 'new' check (status in ('new', 'quoted', 'accepted', 'declined')),
  created_at timestamptz not null default now()
);

alter table public.custom_requests enable row level security;

drop policy if exists "custom_requests_insert_anyone" on public.custom_requests;
create policy "custom_requests_insert_anyone" on public.custom_requests
  for insert with check (true);

-- No select policy for anon/authenticated roles on purpose: quote requests
-- are only readable via the service role (internal ops), same pattern as
-- the Stripe webhook uses SUPABASE_SERVICE_ROLE_KEY to write orders.
