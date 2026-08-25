import { ArrowRight, Check } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Tell us your due date, or your baby’s birthday",
    text: "A couple of quick questions — that’s all we need to time everything correctly.",
  },
  {
    number: "02",
    title: "Your test kit arrives right on time",
    text: "Sent to reach you around week six, so it’s ready when you need it — not one more thing to order later.",
  },
  {
    number: "03",
    title: "Do your at-home test",
    text: "Iron, thyroid, vitamin D — the things your six-week check never looks at. A simple finger-prick, done at home. Send it back in the post.",
  },
  {
    number: "04",
    title: "A clinician reviews your results",
    text: "Not just numbers on a page — a real read from a qualified reviewer.",
  },
  {
    number: "05",
    title: "Get a plan, not just numbers",
    text: "Reassurance, or exactly what to raise with your GP. Either way, you’ll know.",
  },
];

export const metadata = {
  title: "How It Works | Mama Nest",
  description:
    "How Mama Nest works — a simple at-home health check for new mothers, timed to week six, with results that tell you what to do next.",
};

export default function HowItWorksPage() {
  return (
    <main className="bg-[#F8F5F0] text-[#302824]">
      <Header />

      {/* HERO */}

      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#D9B8A5]/20 blur-[110px]"
        />

        <Container className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9B6664]">
                How it works
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-7 font-heading text-5xl leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-8xl">
                A health check
                <br />
                <span className="italic text-[#9B6664]">
                  designed around you.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#655B56]">
                A simple at-home health check for new mothers, timed to week
                six, with results that tell you what to do next.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* STEPS */}

      <section className="bg-[#302824] py-24 text-[#F8F5F0] lg:py-32">
        <Container>
          <div className="mx-auto max-w-5xl">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 70}>
                <div className="grid gap-8 border-t border-[#514742] py-12 md:grid-cols-[100px_1fr] lg:grid-cols-[130px_1fr] lg:py-16">
                  <div>
                    <span className="font-mono text-xs tracking-[0.2em] text-[#D1A39A]">
                      {step.number}
                    </span>
                  </div>

                  <div className="max-w-3xl">
                    <h2 className="font-heading text-3xl leading-tight italic sm:text-4xl lg:text-5xl">
                      {step.title}
                    </h2>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-[#C9BFBA] sm:text-base">
                      {step.text}
                    </p>

                    {index === 2 && (
                      <div className="mt-7 flex flex-wrap gap-3">
                        {["Iron", "Thyroid", "Vitamin D"].map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-[#806C65] px-4 py-2 text-xs text-[#EBD3CC]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    )}

                    {index === 4 && (
                      <div className="mt-7 flex items-center gap-3 text-sm text-[#EBD3CC]">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#806C65]">
                          <Check size={14} />
                        </span>
                        Clear next steps after your results
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}

      <section className="bg-[#EFE7E0] py-24 lg:py-32">
        <Container className="text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9B6664]">
              Mama Nest
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mx-auto mt-7 max-w-3xl font-heading text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Someone should check on
              <br />
              <span className="italic text-[#9B6664]">you too.</span>
            </h2>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-10">
              <Button
                href="/start"
                size="lg"
                icon={ArrowRight}
                className="rounded-full bg-[#302824] px-9 text-[#F8F5F0] hover:bg-[#453A35]"
              >
                Get started
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <Footer />
    </main>
  );
}