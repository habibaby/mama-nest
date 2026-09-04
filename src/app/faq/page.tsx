import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const faqs: [string, string][] = [
  ["When should I book Mama Nest?", "Most mothers book during pregnancy, once their due date is confirmed, so care can be arranged in advance."],
  ["Can I book before my baby is born?", "Yes — the booking flow is designed to be completed before birth. You activate your care once your baby arrives."],
  ["What happens if my baby arrives early?", "Activate your care from your dashboard as soon as you're ready and we'll begin arranging your Mama Nest Aunty."],
  ["Do I choose my caregiver?", "No. You choose your culture, preferences and service — Mama Nest handles caregiver allocation internally."],
  ["How does Mama Nest arrange my caregiver?", "Once your care is activated, our team matches a trained Mama Nest Aunty based on your location, culture, language and package."],
  ["What does a Mama Nest Aunty do?", "Practical postpartum support: cooking, baby support, help around the kitchen and your space, following your cultural pathway."],
  ["What is included in 7-day care?", "7 consecutive days of support — meals, baby support, cultural care routines and help with the kitchen and your space."],
  ["What is included in 14-day care?", "14 consecutive days of support. Week 1 is intensive; Week 2 continues daily support as you transition into your routine."],
  ["What is included in 30-day care?", "Daily support for two weeks, then reduced-frequency support (e.g. three visits a week) for weeks three and four."],
  ["Can I request overnight care?", "Yes — overnight and extended care is available on request, as a custom quote based on location and availability."],
  ["Can I order meals without booking care?", "Meal and ingredient ordering are coming soon as standalone options — for now, meals are part of a care booking."],
  ["Can I choose my culture?", "Yes — Yoruba, Igbo, Hausa, Edo and Delta pathways are currently supported."],
  ["Can I request custom care?", "Yes — book the Custom Care option and tell us what you need; we'll send a personalised quote."],
  ["Does Mama Nest provide medical care?", "No. Mama Nest provides non-clinical postpartum support and does not replace NHS or professional medical care."],
  ["What happens in an emergency?", "If there is an emergency or someone is in immediate danger, call 999 or 112 and seek appropriate emergency care."],
  ["How does the postpartum test work?", "A £99 at-home kit checks thyroid, vitamin D and iron. Results come back with a clear next step."],
  ["When should I take the postpartum test?", "The kit is timed to arrive around your sixth week, when standard NHS checks focus on your baby rather than you."],
  ["How does birth activation work?", "Once your baby arrives, select \"I've Given Birth\" on your dashboard. We're notified and begin arranging your care — no need to rebook."],
];

export const metadata = {
  title: "FAQ | Mama Nest",
  description: "Answers on booking, culture, the postpartum test, birth activation and what Mama Nest does and doesn't do.",
};

export default function FaqPage() {
  return (
    <main className="bg-[#F8F5F0] text-[#302824]">
      <Header />

      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-24">
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9B6664]">FAQ</p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-7 font-heading text-5xl leading-[1.05] tracking-[-0.02em] sm:text-6xl">
                Frequently asked <span className="italic text-[#9B6664]">questions.</span>
              </h1>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col divide-y divide-[#DED6D0]">
            {faqs.map(([q, a], i) => (
              <Reveal key={q} delay={Math.min(i * 30, 300)}>
                <div className="py-6">
                  <h2 className="font-heading text-lg italic text-[#9B6664]">{q}</h2>
                  <p className="mt-2 text-sm leading-6 text-[#655B56]">{a}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-[#F0C7BE]/30 px-6 py-5 text-center text-sm text-[#5A2F2E]">
            <strong>In an emergency:</strong> call 999 or 112.
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
