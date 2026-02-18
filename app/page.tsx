import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { BentoGrid } from "@/components/bento-grid";
import { ExpertiseSection } from "@/components/expertise-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <div id="parts">
          <BentoGrid />
        </div>
        <div id="expertise">
          <ExpertiseSection />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
