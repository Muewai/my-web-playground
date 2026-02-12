import { FolderGit2, ArrowUpRight } from "lucide-react"

const projects = [
  {
    name: "Portfolio Site",
    description: "Personal portfolio built with Next.js",
    status: "In Progress",
  },
  {
    name: "Weather App",
    description: "Real-time weather dashboard using APIs",
    status: "Completed",
  },
  {
    name: "Chat Interface",
    description: "Real-time messaging with WebSockets",
    status: "Planned",
  },
]

export function ProjectsCard() {
  return (
    <div className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-neon/40">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neon/10">
          <FolderGit2 className="h-5 w-5 text-neon" />
        </div>
        <h2 className="text-lg font-semibold text-card-foreground">My Projects</h2>
      </div>
      <div className="flex flex-1 flex-col gap-3">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex items-start justify-between rounded-xl border border-border bg-secondary/50 p-4 transition-colors hover:bg-secondary"
          >
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-card-foreground">
                {project.name}
              </span>
              <span className="text-xs text-muted-foreground">
                {project.description}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                  project.status === "Completed"
                    ? "bg-emerald-500/10 text-emerald-400"
                    : project.status === "In Progress"
                      ? "bg-neon/10 text-neon"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {project.status}
              </span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
