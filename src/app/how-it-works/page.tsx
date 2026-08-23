import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const steps = [
  {
    title: "Tell us your due date, or your baby's birthday",
    body: "A couple of quick questions — that's all we need to time everything correctly.",
  },
  {
    title: "Your kit arrives before she does",
    body: "Sent during your due-date month, so it's ready and waiting, not one more thing to order later.",
  },
  {
    title: "We check on you, not just the baby",
    body: "Gentle reminders to actually use your care kit, timed to when you'd realistically need them.",
  },
  {
    title: "Do your at-home test in week six",
    body: "Iron, thyroid, vitamin D and more — the things your six-week check never looks at. Send it back in the post.",
  },
  {
    title: "Get a plan, not just numbers",
    body: "Your results come with a clear next step: reassurance, or exactly what to raise with your GP.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <div className="relative bg-blush/40 pb-4 pt-28">
        <Header />
        <Container>
          <h1 className="mx-auto max-w-xl text-balance text-center font-heading text-4xl italic text-rose-deep">
            How Mama Nest works
          </h1>
        </Container>
      </div>
      <section className="bg-offwhite py-16">
        <Container className="max-w-2xl">
          <ol className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose text-sm font-semibold text-offwhite">
                  {i + 1}
                </span>
                <div>
                  <p className="font-heading text-lg italic text-rose-deep">{step.title}</p>
                  <p className="mt-1 text-sm text-ink/65">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-12 flex justify-center">
            <Button href="/start" size="lg">
              Get started
            </Button>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}
