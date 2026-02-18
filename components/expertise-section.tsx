"use client";

import { useEffect, useRef, useState } from "react";

const expertiseData = [
  { label: "จูนเครื่องยนต์", value: 90 },
  { label: "งานดัดแปลง/สร้างอะไหล่", value: 85 },
  { label: "ซ่อมบำรุงทั่วไป", value: 95 },
];

function AnimatedBar({ label, value }: { label: string; value: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Delay slightly for staggered feel
          setTimeout(() => setWidth(value), 100);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="font-heading text-base font-bold tracking-wide text-foreground uppercase sm:text-lg">
          {label}
        </span>
        <span className="text-sm font-semibold tabular-nums text-primary">
          {width}%
        </span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export function ExpertiseSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl uppercase">
            Our <span className="text-primary">Expertise</span>
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Years of hands-on experience across every discipline.
          </p>
        </div>

        {/* Progress bars */}
        <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
          <div className="flex flex-col gap-8">
            {expertiseData.map((item) => (
              <AnimatedBar
                key={item.label}
                label={item.label}
                value={item.value}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
