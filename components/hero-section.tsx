import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-parts.jpg')" }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 flex max-w-4xl flex-col items-center gap-6">
        {/* Tagline */}
        <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium tracking-wider text-primary uppercase">
          Automotive Excellence
        </span>

        {/* Main headline */}
        <h1 className="font-heading text-6xl font-bold tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-9xl text-balance uppercase">
          Direct<span className="text-primary">Drive</span>
        </h1>

        {/* Sub-headline */}
        <p className="max-w-xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
          Performance Parts & Expert Service
        </p>

        {/* CTA buttons */}
        <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base font-semibold tracking-wide uppercase cursor-pointer"
          >
            Request a Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-border text-foreground hover:bg-secondary h-14 px-8 text-base cursor-pointer"
          >
            Browse Parts
          </Button>
        </div>

        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            500+ Parts In Stock
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Expert Technicians
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Warranty Included
          </span>
        </div>
      </div>
    </section>
  );
}
