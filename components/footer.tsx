import { Github, Globe, Video, Code2, User } from "lucide-react" // เพิ่ม User icon มาเล่นๆ ได้ครับ
import Link from "next/link" // <--- 1. เพิ่มบรรทัดนี้

const socials = [
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "Vercel", href: "https://vercel.com", icon: Globe },
  { name: "TikTok", href: "https://tiktok.com", icon: Video },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <Code2 className="h-5 w-5 text-neon" />
          <span className="text-sm font-medium text-foreground">
            Web Playground
          </span>
        </div>
        
        {/* 2. ส่วนปุ่ม Social เดิมของคุณ */}
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-colors hover:border-neon/40 hover:text-neon"
              aria-label={social.name}
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        {/* 3. เพิ่มลิงก์ไปหน้า About ตรงนี้ */}
        <div className="flex items-center gap-4">
           <Link 
            href="/about" 
            className="text-xs text-muted-foreground hover:text-neon transition-colors"
          >
            About Me (หน้า 2)
          </Link>
          <p className="text-xs text-muted-foreground">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}