export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatGBP(pence: number) {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(
    pence / 100
  );
}

/** Weeks pregnant, given an EDD (assumes a standard 40-week/280-day term). */
export function weeksPregnantFromEdd(edd: string, today = new Date()): number {
  const eddDate = new Date(edd);
  const msPerDay = 1000 * 60 * 60 * 24;
  const daysUntilEdd = Math.round((eddDate.getTime() - today.getTime()) / msPerDay);
  const daysPregnant = 280 - daysUntilEdd;
  return Math.max(0, Math.min(42, Math.round(daysPregnant / 7)));
}

export function daysSince(dateStr: string, today = new Date()): number {
  const date = new Date(dateStr);
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.round((today.getTime() - date.getTime()) / msPerDay);
}
