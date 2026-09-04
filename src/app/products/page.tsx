import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CatalogClient } from "@/components/catalog/CatalogClient";
import { PRODUCTS } from "@/lib/data/products";
import { requestProducts } from "@/app/products/actions";

export const metadata = {
  title: "Postpartum Products | Mama Nest",
  description: "Shop products for your postpartum preparation and recovery — no care package required.",
};

export default function ProductsPage() {
  return (
    <main className="bg-[#F8F5F0] text-[#302824]">
      <Header />
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40">
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9B6664]">Postpartum Products</p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-7 font-heading text-5xl leading-[1.05] tracking-[-0.02em] sm:text-6xl">
                Shop for your <span className="italic text-[#9B6664]">recovery.</span>
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#655B56]">
                Products for postpartum preparation and recovery — no care package required.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <CatalogClient
              cultures={[]}
              initialCulture="all"
              itemsByCulture={{ all: PRODUCTS }}
              submitAction={requestProducts}
              submitLabel="Request this order"
            />
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
