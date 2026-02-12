"use client"

import { useState } from "react"
import { Beaker } from "lucide-react"
import { Button } from "@/components/ui/button"

const colors = [
  { name: "Blue", class: "bg-blue-500 hover:bg-blue-400 text-white" },
  { name: "Emerald", class: "bg-emerald-500 hover:bg-emerald-400 text-white" },
  { name: "Amber", class: "bg-amber-500 hover:bg-amber-400 text-white" },
  { name: "Rose", class: "bg-rose-500 hover:bg-rose-400 text-white" },
  { name: "Cyan", class: "bg-cyan-500 hover:bg-cyan-400 text-white" },
]

export function InteractiveLabCard() {
  const [colorIndex, setColorIndex] = useState(0)
  const [clickCount, setClickCount] = useState(0)

  const handleClick = () => {
    setColorIndex((prev) => (prev + 1) % colors.length)
    setClickCount((prev) => prev + 1)
  }

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-neon/40">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neon/10">
          <Beaker className="h-5 w-5 text-neon" />
        </div>
        <h2 className="text-lg font-semibold text-card-foreground">
          Interactive Lab
        </h2>
      </div>
      <p className="text-sm text-muted-foreground">
        Click the button to cycle through colors. A simple experiment with React state.
      </p>
      <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-secondary/50 p-6">
        <Button
          onClick={handleClick}
          className={`${colors[colorIndex].class} px-8 py-3 text-sm font-semibold transition-all`}
        >
          {colors[colorIndex].name}
        </Button>
        <span className="text-xs font-mono text-muted-foreground">
          Clicks: {clickCount}
        </span>
      </div>
    </div>
  )
}
