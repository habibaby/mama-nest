import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CultureSelector } from "@/components/home/CultureSelector";

const avatars = [
  { src: "/images/culture-hausa.jpg", label: "Hausa" },
  { src: "/images/culture-igbo.jpg", label: "Igbo" },
  { src: "/images/culture-yoruba.jpg", label: "Yoruba" },
  { src: "/images/culture-fulani.jpg", label: "Fulani" },
  { src: "/images/culture-efik.jpg", label: "Efik" },
  { src: "/images/culture-edo.jpg", label: "Edo" },
  { src: "/images/culture-delta.jpg", label: "Delta" },
];

const services = [
  { title: "Postpartum Care", text: "Book a Mama Nest Aunty for practical support at home.", href: "/care", cta: "Explore care" },
  { title: "Postpartum Meals", text: "Order culturally familiar meals prepared for you.", href: "/meals", cta: "See meals" },
  { title: "Ingredients", text: "Shop ingredients for your postpartum meals.", href: "/ingredients", cta: "Shop ingredients" },
  { title: "Postpartum Products", text: "Shop products for your preparation and recovery.", href: "/products", cta: "Shop products" },
  { title: "Custom Care", text: "Need something different? Request a personalised quote.", href: "/booking", cta: "Request a quote" },
  { title: "Overnight Care", text: "Request additional or overnight postpartum support.", href: "/booking", cta: "Request overnight care" },
  { title: "Postpartum Test", text: "Check your iron, thyroid and vitamin D levels from home.", href: "/start", cta: "About the test" },
];

const dishes = [
  { name: "Ji Mmiri Oku", note: "Igbo · yam pepper soup" },
  { name: "Kunun Kanwa", note: "Hausa · warm sour gruel" },
  { name: "Miyan Kuka", note: "Hausa · baobab-leaf soup" },
  { name: "Owo Soup", note: "Delta · palm-oil soup & starch" },
];

export default function HomePage() {
  return (
    <main className="bg-[#F8F5F0] text-[#302824]">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-20 text-center lg:pt-40 lg:pb-28">
        <Container className="relative">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#9B6664]">
              Postpartum support for mothers in the UK
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mx-auto mt-6 max-w-2xl font-heading text-5xl leading-[1.05] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
              Welcome, Mama.
              <br />
              <span className="italic text-[#9B6664]">You deserve to be pampered.</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-[#655B56] sm:text-lg">
              Culturally familiar postpartum support, nourishing meals and practical help — for mothers across the UK.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/booking" size="lg" icon={ArrowRight}>
                Get started
              </Button>
              <Button href="/care" variant="ghost" size="lg">
                Explore Postpartum Care
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-16 flex flex-wrap justify-center gap-6 sm:gap-8">
              {avatars.map((a) => (
                <div key={a.label} className="flex flex-col items-center gap-2.5">
                  <img
                    src={a.src}
                    alt={`${a.label} portrait`}
                    className="h-20 w-20 rounded-full border-2 border-[#C6A06A] object-cover shadow-lg shadow-[#A24F65]/10 sm:h-24 sm:w-24"
                  />
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-[#655B56]">{a.label}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 font-heading text-lg italic text-[#655B56]">
              Care that feels familiar, whichever home you come from.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ABOUT */}
      <section className="border-y border-[#DED6D0] py-24 lg:py-32">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9B6664]">What is Mama Nest?</p>
                <h2 className="mt-6 font-heading text-4xl leading-[1.05] sm:text-5xl">Postpartum support that feels like home.</h2>
                <p className="mt-6 max-w-lg text-base leading-7 text-[#655B56]">
                  Mama Nest helps you prepare for and receive culturally familiar postpartum support in the UK — home-cooked
                  meals, practical help around the house, and a trained Mama Nest Aunty when you book care. An optional
                  health check (thyroid, vitamin D and iron) is available too.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative aspect-[4/3.6] overflow-hidden rounded-[32px]">
                <img
                  src="/images/feature-caregiver.jpg"
                  alt="A Mama Nest caregiver visiting a new mother and her baby at home"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="py-24 lg:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9B6664]">Choose your care</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-heading text-4xl sm:text-5xl">What can we help you with?</h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-4 text-base leading-7 text-[#655B56]">Pick what you need — browsing is always free, no account required.</p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 50}>
                <a
                  href={s.href}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-rose/10 bg-offwhite p-6 shadow-xl shadow-rose-deep/5 transition-transform hover:-translate-y-1"
                >
                  <h3 className="font-heading text-xl italic text-rose-deep">{s.title}</h3>
                  <p className="text-sm leading-6 text-ink/65">{s.text}</p>
                  <span className="mt-auto text-xs font-semibold uppercase tracking-wide text-rose">{s.cta} →</span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={services.length * 50}>
            <CultureSelector />
          </Reveal>
        </Container>
      </section>

      {/* MEALS */}
      <section className="border-y border-[#DED6D0] py-24 lg:py-32">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="relative aspect-[4/3.6] overflow-hidden rounded-[32px]">
                <img
                  src="/images/feature-cooking.jpg"
                  alt="A Mama Nest cook preparing a postpartum meal in the kitchen"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9B6664]">A taste of home</p>
                <h2 className="mt-6 font-heading text-4xl leading-[1.05] sm:text-5xl">Meals worth resting for.</h2>
                <p className="mt-4 text-base leading-7 text-[#655B56]">Order them prepared, or shop the ingredients yourself.</p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {dishes.map((d) => (
                    <div key={d.name} className="rounded-2xl bg-blush/40 px-4 py-3">
                      <p className="font-heading text-base italic text-rose-deep">{d.name}</p>
                      <p className="mt-0.5 text-xs text-ink/60">{d.note}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button href="/meals" variant="outline" size="md">
                    See the full menu →
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CTA BAND */}
      <section className="py-24 lg:py-32">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl rounded-[32px] border border-rose/10 bg-offwhite px-8 py-14 text-center shadow-xl shadow-rose-deep/5">
              <h2 className="font-heading text-4xl italic text-rose-deep">Ready to begin?</h2>
              <p className="mt-3 text-base text-ink/65">Book your postpartum care, or explore what&apos;s available first.</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button href="/booking" size="lg">
                  Start your booking
                </Button>
                <Button href="/account" variant="ghost" size="lg">
                  View my dashboard
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* FAQ TEASER */}
      <section className="bg-[#9B6664] py-24 text-[#F8F5F0] lg:py-32">
        <Container className="text-center">
          <Reveal>
            <h2 className="font-heading text-4xl sm:text-5xl">Got questions?</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-4 max-w-xl text-base text-[#F3DDD7]">
              Booking, culture, what&apos;s included, birth activation — it&apos;s all in our FAQ.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-9">
              <Button href="/faq" size="lg" className="rounded-full bg-[#F8F5F0] px-9 text-[#302824] hover:bg-white">
                Read the FAQ →
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
