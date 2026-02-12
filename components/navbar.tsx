"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "หน้าแรก", href: "#" },
  { label: "บริการ", href: "#services" },
  { label: "แพ็กเกจ", href: "#packages" },
  { label: "ผลงาน", href: "#portfolio" },
  { label: "บทความ", href: "#blog" },
  { label: "ติดต่อเรา", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">L</span>
            </div>
            <span className="text-xl font-bold text-foreground">
              LET<span className="text-primary">care</span>
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:020001234"
            className="flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <Phone className="h-4 w-4 text-primary" />
            02-000-1234
          </a>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            ขอประเมินฟรี
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-border bg-background px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              ขอประเมินฟรี
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
