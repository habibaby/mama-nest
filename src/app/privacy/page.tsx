import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export default function PrivacyPage() {
  return (
    <>
      <div className="relative bg-blush/40 pb-6 pt-28">
        <Header />
      </div>
      <Container className="max-w-2xl py-16">
        <h1 className="font-heading text-3xl italic text-rose-deep">Privacy</h1>
        <p className="mt-4 text-sm leading-relaxed text-ink/65">
          Placeholder — replace with a full privacy policy covering how health and personal
          data (including test results) is collected, stored, and protected before this site
          takes real customer data.
        </p>
      </Container>
      <Footer />
    </>
  );
}
