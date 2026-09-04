import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CatalogClient } from "@/components/catalog/CatalogClient";
import { CULTURE_LIST, CULTURES } from "@/lib/data/cultures";
import { requestIngredients } from "@/app/ingredients/actions";

export const metadata = {
  title: "Postpartum Ingredients | Mama Nest",
  description: "Shop ingredients for your own postpartum meals, matched to your culture — no account needed to browse.",
};

export default async function IngredientsPage({
  searchParams,
}: {
  searchParams: Promise<{ culture?: string }>;
}) {
  const { culture: cultureParam } = await searchParams;
  const initialCulture = cultureParam && cultureParam in CULTURES ? cultureParam : "yoruba";
  const cultures = CULTURE_LIST.map((c) => ({ key: c.key, label: c.label }));
  const itemsByCulture = Object.fromEntries(
    CULTURE_LIST.map((c) => [c.key, c.ingredients.map((name) => ({ name }))])
  );

  return (
    <main className="bg-[#F8F5F0] text-[#302824]">
      <Header />
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40">
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9B6664]">Ingredients</p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-7 font-heading text-5xl leading-[1.05] tracking-[-0.02em] sm:text-6xl">
                Stock your own <span className="italic text-[#9B6664]">kitchen.</span>
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#655B56]">
                Browse ingredients for your postpartum meals, matched to your culture — no account needed.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <CatalogClient
              cultures={cultures}
              initialCulture={initialCulture}
              itemsByCulture={itemsByCulture}
              submitAction={requestIngredients}
              submitLabel="Request these ingredients"
            />
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
