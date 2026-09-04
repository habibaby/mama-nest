"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export type CatalogItem = { name: string; note?: string; price?: string };
export type CultureOption = { key: string; label: string };

export type CatalogSubmitPayload = {
  culture?: string;
  items: string[];
  name: string;
  email: string;
  notes: string;
};

export function CatalogClient({
  cultures,
  initialCulture,
  itemsByCulture,
  submitAction,
  submitLabel,
}: {
  cultures: CultureOption[];
  initialCulture: string;
  itemsByCulture: Record<string, CatalogItem[]>;
  submitAction: (payload: CatalogSubmitPayload) => Promise<{ error?: string }>;
  submitLabel: string;
}) {
  const [culture, setCulture] = useState(initialCulture);
  const [selected, setSelected] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function toggle(itemName: string) {
    setSelected((s) => (s.includes(itemName) ? s.filter((x) => x !== itemName) : [...s, itemName]));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const result = await submitAction({
      culture: cultures.length > 0 ? culture : undefined,
      items: selected,
      name,
      email,
      notes,
    });
    setSubmitting(false);
    if (result.error) {
      setError(result.error);
      return;
    }
    setDone(true);
  }

  const items = itemsByCulture[culture] ?? [];

  if (done) {
    return (
      <div className="rounded-3xl bg-blush px-6 py-10 text-center">
        <p className="font-heading text-2xl italic text-rose-deep">Thank you!</p>
        <p className="mt-2 text-sm text-ink/70">We&apos;ll be in touch to confirm your order.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {cultures.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2">
          {cultures.map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => {
                setCulture(c.key);
                setSelected([]);
              }}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                culture === c.key ? "border-rose bg-rose text-offwhite" : "border-rose/20 text-ink/60 hover:border-rose/50"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <button
            key={item.name}
            type="button"
            onClick={() => toggle(item.name)}
            className={`rounded-2xl border-2 p-4 text-left transition-colors ${
              selected.includes(item.name) ? "border-rose bg-blush" : "border-rose/15 hover:border-rose/40"
            }`}
          >
            <p className="font-heading text-lg italic text-rose-deep">{item.name}</p>
            {item.note && <p className="mt-1 text-xs text-ink/60">{item.note}</p>}
            {item.price && <p className="mt-1 text-xs font-semibold text-rose">{item.price}</p>}
          </button>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto flex w-full max-w-md flex-col gap-3 rounded-3xl border border-rose/10 bg-offwhite p-6 shadow-xl shadow-rose-deep/5"
      >
        <p className="text-sm font-medium text-ink/80">Request your order</p>
        <input
          required
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-xl border border-rose/20 bg-offwhite px-4 py-2.5 text-sm outline-none focus:border-rose"
        />
        <input
          required
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-xl border border-rose/20 bg-offwhite px-4 py-2.5 text-sm outline-none focus:border-rose"
        />
        <textarea
          placeholder="Notes (optional)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={2}
          className="rounded-xl border border-rose/20 bg-offwhite px-4 py-2.5 text-sm outline-none focus:border-rose"
        />
        {error && <p className="text-sm text-rose">{error}</p>}
        <Button size="md" disabled={submitting}>
          {submitting ? "Sending…" : submitLabel}
        </Button>
      </form>
    </div>
  );
}
