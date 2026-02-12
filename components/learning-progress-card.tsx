import { BookOpen } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const skills = [
  { name: "HTML & CSS", progress: 90 },
  { name: "JavaScript", progress: 75 },
  { name: "React", progress: 60 },
  { name: "Next.js", progress: 40 },
]

export function LearningProgressCard() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-neon/40">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neon/10">
          <BookOpen className="h-5 w-5 text-neon" />
        </div>
        <h2 className="text-lg font-semibold text-card-foreground">
          Learning Progress
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-card-foreground">
                {skill.name}
              </span>
              <span className="text-xs font-mono text-neon">
                {skill.progress}%
              </span>
            </div>
            <Progress
              value={skill.progress}
              className="h-2 bg-secondary"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
