import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-20">
      <Container className="mx-auto max-w-lg text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-primary">404</span>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          This page doesn&apos;t exist
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          The page you&apos;re looking for may have been moved or no longer
          exists. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/">Back to Home</Button>
          <Button href="/contact" variant="secondary">
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
