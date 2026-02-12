import { HeroSection } from "@/components/hero-section"
import { ProjectsCard } from "@/components/projects-card"
import { QuickLinksCard } from "@/components/quick-links-card"
import { LearningProgressCard } from "@/components/learning-progress-card"
import { InteractiveLabCard } from "@/components/interactive-lab-card"
import { TodoList } from "@/components/todo-list"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 pb-8 md:px-6">
      <HeroSection />

      {/* Bento Grid */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Projects - spans 2 rows on lg */}
        <div className="lg:row-span-2">
          <ProjectsCard />
        </div>

        {/* Quick Links */}
        <QuickLinksCard />

        {/* Learning Progress */}
        <LearningProgressCard />

        {/* Interactive Lab */}
        <div className="md:col-span-2 lg:col-span-1">
          <InteractiveLabCard />
        </div>
      </section>

      {/* Mini Tool Section */}
      <TodoList />

      {/* Footer */}
      <Footer />
    </main>
  )
}
