import Image from "next/image";
import {
  Wrench,
  ShieldCheck,
  Search,
  ArrowRight,
} from "lucide-react";

function BentoCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:bg-card/80 ${className}`}
    >
      {children}
    </div>
  );
}

export function BentoGrid() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl uppercase">
            What We <span className="text-primary">Offer</span>
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Everything you need to keep your ride performing at its best.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {/* Large card - Used Parts Catalog */}
          <BentoCard className="sm:col-span-2 lg:row-span-2 flex flex-col justify-between min-h-[400px]">
            <div className="relative z-10">
              <span className="mb-3 inline-block rounded-md bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase">
                Catalog
              </span>
              <h3 className="font-heading text-2xl font-bold text-foreground uppercase sm:text-3xl">
                Used Parts Catalog
              </h3>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground leading-relaxed">
                Browse our extensive inventory of certified pre-owned parts for
                cars and motorcycles. Every part inspected and tested.
              </p>
              <button className="mt-4 flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80 cursor-pointer">
                Browse Catalog
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/engine-parts.jpg"
                alt="High-performance engine parts displayed in professional automotive setting"
                fill
                className="object-cover opacity-30 transition-opacity duration-300 group-hover:opacity-40"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
            </div>
          </BentoCard>

          {/* Repair & Installation */}
          <BentoCard className="sm:col-span-1 lg:col-span-2 min-h-[192px]">
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground uppercase">
                Repair & Installation Services
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Expert mechanics ready to install your parts or diagnose and fix
                any issue. From engine rebuilds to custom fabrication.
              </p>
              <button className="mt-auto flex items-center gap-2 pt-4 text-sm font-medium text-primary transition-colors hover:text-primary/80 cursor-pointer">
                Book Service
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            <Image
              src="/images/repair-service.jpg"
              alt="Expert mechanic performing engine repairs in professional workshop"
              fill
              className="absolute inset-0 object-cover opacity-15 transition-opacity duration-300 group-hover:opacity-25"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-card via-card/80 to-transparent" />
          </BentoCard>

          {/* Trust & Warranty */}
          <BentoCard className="min-h-[192px]">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <ShieldCheck className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mt-4 font-heading text-lg font-bold text-foreground uppercase">
              Trust & Warranty
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              100% Genuine Parts. Every item comes with our quality guarantee and
              warranty coverage.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                Verified
              </span>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                Guaranteed
              </span>
            </div>
          </BentoCard>

          {/* Sourcing Service */}
          <BentoCard className="min-h-[192px]">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Search className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mt-4 font-heading text-lg font-bold text-foreground uppercase">
              Sourcing Service
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {"Can't find a part? We'll find it for you. Our global network ensures you get what you need."}
            </p>
            <button className="mt-4 flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80 cursor-pointer">
              Request a Part
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
