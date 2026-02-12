import { Terminal } from "lucide-react"

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 py-20 text-center md:py-28">
      <div className="flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5">
        <Terminal className="h-4 w-4 text-neon" />
        <span className="text-sm font-mono text-muted-foreground">
          developer playground
        </span>
      </div>
      <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground md:text-7xl">
        My Web{" "}
        <span className="text-neon">Playground</span>
      </h1>
      <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
        Learning Next.js, one component at a time.
      </p>
      <div className="flex items-center gap-3 pt-2">
        <div className="h-2 w-2 animate-pulse rounded-full bg-neon" />
        <span className="text-sm font-mono text-muted-foreground">
          Currently building...
        </span>
      </div>
    </section>
  )
}
