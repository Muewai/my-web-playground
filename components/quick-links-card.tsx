import { Github, Globe, Video, ArrowUpRight } from "lucide-react"

const links = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Github,
  },
  {
    name: "Vercel",
    href: "https://vercel.com",
    icon: Globe,
  },
  {
    name: "TikTok",
    href: "https://tiktok.com",
    icon: Video,
  },
]

export function QuickLinksCard() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-neon/40">
      <h2 className="text-lg font-semibold text-card-foreground">Quick Links</h2>
      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center justify-between rounded-xl border border-border bg-secondary/50 px-4 py-3 transition-colors hover:border-neon/40 hover:bg-secondary"
          >
            <div className="flex items-center gap-3">
              <link.icon className="h-4 w-4 text-neon" />
              <span className="text-sm font-medium text-card-foreground">
                {link.name}
              </span>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-neon" />
          </a>
        ))}
      </div>
    </div>
  )
}
