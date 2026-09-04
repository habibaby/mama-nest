-- Standalone meal / ingredient / product ordering — guest-friendly, same
-- pattern as custom_requests: no account needed to browse or request,
-- insert-only from the public, only the service role (internal ops) reads.
-- These are order *requests*, not paid orders — no pricing is confirmed
-- for meals/ingredients/products yet, so Mama Nest follows up directly.

create table if not exists public.meal_orders (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  culture text check (culture is null or culture in ('yoruba', 'igbo', 'hausa', 'edo', 'delta')),
  items text[] not null default '{}',
  notes text,
  status text not null default 'new' check (status in ('new', 'confirmed', 'fulfilled', 'cancelled')),
  created_at timestamptz not null default now()
);

create table if not exists public.ingredient_orders (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  culture text check (culture is null or culture in ('yoruba', 'igbo', 'hausa', 'edo', 'delta')),
  items text[] not null default '{}',
  notes text,
  status text not null default 'new' check (status in ('new', 'confirmed', 'fulfilled', 'cancelled')),
  created_at timestamptz not null default now()
);

create table if not exists public.product_orders (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  items text[] not null default '{}',
  notes text,
  status text not null default 'new' check (status in ('new', 'confirmed', 'fulfilled', 'cancelled')),
  created_at timestamptz not null default now()
);

alter table public.meal_orders enable row level security;
alter table public.ingredient_orders enable row level security;
alter table public.product_orders enable row level security;

drop policy if exists "meal_orders_insert_anyone" on public.meal_orders;
create policy "meal_orders_insert_anyone" on public.meal_orders
  for insert with check (true);

drop policy if exists "ingredient_orders_insert_anyone" on public.ingredient_orders;
create policy "ingredient_orders_insert_anyone" on public.ingredient_orders
  for insert with check (true);

drop policy if exists "product_orders_insert_anyone" on public.product_orders;
create policy "product_orders_insert_anyone" on public.product_orders
  for insert with check (true);

-- No select policy for anon/authenticated on any of the three: readable
-- only via the service role, same as custom_requests.
