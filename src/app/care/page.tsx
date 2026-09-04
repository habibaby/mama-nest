import { ArrowRight, Check } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const packages = [
  {
    number: "01",
    title: "7-Day Care",
    text: "7 consecutive days of postpartum support: meal preparation, baby support, cultural care routines, and help with the kitchen and the room you and your baby are using.",
    note: "Whole-house cleaning isn't included.",
  },
  {
    number: "02",
    title: "14-Day Care",
    text: "14 consecutive days — a genuine two weeks, not seven days with reduced visits after. Week 1 is intensive daily support; Week 2 continues daily support as you transition into your routine.",
  },
  {
    number: "03",
    title: "30-Day Care",
    text: "Daily support for the first two weeks, then reduced-frequency support — around three visits a week — for weeks three and four. Exact visit times and tasks are set out in your package terms.",
  },
  {
    number: "04",
    title: "Custom Care",
    text: "Not quite fitting a standard package? Tell us what you need and we'll send a personalised quote — no fixed pricing assumed.",
  },
  {
    number: "05",
    title: "Overnight Care",
    text: "Extended or overnight support, available on request. Availability depends on your location, caregiver availability and the service requested.",
  },
];

const aunty = [
  { title: "Cook", text: "Prepares your agreed postpartum meals." },
  { title: "Baby Support", text: "Agreed practical newborn support, including baby bathing where included." },
  { title: "Postpartum Support", text: "Agreed practical support for you as you recover." },
  { title: "Cultural Support", text: "Follows your chosen Mama Nest cultural pathway." },
  { title: "Kitchen Support", text: "Helps keep the kitchen used for your care clean and organised." },
  { title: "Mother & Baby Space", text: "Helps maintain the room you and your baby are using." },
];

export const metadata = {
  title: "Postpartum Care | Mama Nest",
  description:
    "Book a trained Mama Nest Aunty for practical postpartum support at home — 7-day, 14-day, 30-day, custom or overnight care.",
};

export default function CarePage() {
  return (
    <main className="bg-[#F8F5F0] text-[#302824]">
      <Header />

      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#D9B8A5]/20 blur-[110px]"
        />
        <Container className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9B6664]">Postpartum Care</p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-7 font-heading text-5xl leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                Practical support,
                <br />
                <span className="italic text-[#9B6664]">on your terms.</span>
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#655B56]">
                Book a trained Mama Nest Aunty. You choose your culture and your package — Mama Nest arranges the rest. You don&apos;t browse or pick a caregiver yourself.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10">
                <Button href="/booking" size="lg" icon={ArrowRight} className="rounded-full bg-[#302824] px-8 text-[#F8F5F0] hover:bg-[#453A35]">
                  Book your care
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#302824] py-24 text-[#F8F5F0] lg:py-32">
        <Container>
          <div className="mx-auto max-w-5xl">
            {packages.map((p, index) => (
              <Reveal key={p.number} delay={index * 70}>
                <div className="grid gap-8 border-t border-[#514742] py-12 md:grid-cols-[100px_1fr] lg:grid-cols-[130px_1fr] lg:py-16">
                  <div>
                    <span className="font-mono text-xs tracking-[0.2em] text-[#D1A39A]">{p.number}</span>
                  </div>
                  <div className="max-w-3xl">
                    <h2 className="font-heading text-3xl leading-tight italic sm:text-4xl lg:text-5xl">{p.title}</h2>
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-[#C9BFBA] sm:text-base">{p.text}</p>
                    {p.note && (
                      <p className="mt-4 text-xs italic text-[#9B8A82]">{p.note}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#EFE7E0] py-24 lg:py-32">
        <Container>
          <Reveal>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#9B6664]">What a Mama Nest Aunty does</p>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aunty.map((a, i) => (
              <Reveal key={a.title} delay={i * 60}>
                <div className="rounded-3xl border border-[#DED6D0] bg-[#F8F5F0] p-6">
                  <h3 className="font-heading text-xl italic text-[#9B6664]">{a.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#655B56]">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={aunty.length * 60}>
            <div className="mx-auto mt-10 flex max-w-5xl items-start gap-3 rounded-2xl bg-[#F0C7BE]/30 px-6 py-5 text-sm leading-6 text-[#5A2F2E]">
              <Check size={18} className="mt-0.5 shrink-0" />
              <p>
                <strong>In an emergency:</strong> call 999 or 112. A Mama Nest Aunty provides practical, non-clinical support and does not diagnose or treat medical conditions — Mama Nest does not replace NHS or other professional medical care.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-[#9B6664] py-24 text-[#F8F5F0] lg:py-32">
        <Container className="text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#EBD3CC]">Mama Nest</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mx-auto mt-7 max-w-3xl font-heading text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">Ready to book your care?</h2>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-10">
              <Button href="/booking" size="lg" icon={ArrowRight} className="rounded-full bg-[#F8F5F0] px-9 text-[#302824] hover:bg-white">
                Book your care
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
