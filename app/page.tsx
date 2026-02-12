import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TrustStats } from "@/components/trust-stats"
import { WhyChoose } from "@/components/why-choose"
import { SolarSecurity } from "@/components/solar-security"
import { PackagesSection } from "@/components/packages-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BlogSection } from "@/components/blog-section"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TrustStats />
      <WhyChoose />
      <SolarSecurity />
      <PackagesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <BlogSection />
      <FinalCta />
      <Footer />
    </main>
  )
}
