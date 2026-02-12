"use client"

import { useEffect, useRef, useState } from "react"
import { Home, Users, Shield } from "lucide-react"

const stats = [
  {
    icon: Home,
    value: 1500,
    suffix: "+",
    label: "โครงการที่ติดตั้งแล้ว",
  },
  {
    icon: Users,
    value: 3200,
    suffix: "+",
    label: "ลูกค้าทั่วประเทศ",
  },
  {
    icon: Shield,
    value: 24,
    suffix: "/7",
    label: "ศูนย์ดูแลตลอด 24 ชม.",
  },
]

function StatCard({
  icon: Icon,
  value,
  suffix,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>
  value: number
  suffix: string
  label: string
}) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const duration = 2000
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * value))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, value])

  return (
    <div
      ref={ref}
      className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <span className="text-4xl font-bold text-foreground lg:text-5xl">
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className="mt-2 text-muted-foreground">{label}</span>
    </div>
  )
}

export function TrustStats() {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
