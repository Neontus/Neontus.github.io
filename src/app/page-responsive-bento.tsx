import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

/**
 * RESPONSIVE BENTO LAYOUT (Option B)
 * Desktop: Bento grid (all content in 100vh)
 * Mobile: Traditional vertical scroll
 *
 * To use: Replace the content in src/app/page.tsx with this
 */

export default function Home() {
  return (
    <main>
      {/* Desktop bento layout (hidden on mobile) */}
      <div className="hidden lg:grid lg:h-screen lg:grid-cols-2 lg:gap-8 lg:p-8 lg:overflow-hidden">
        {/* Left column: Hero section */}
        <div className="flex flex-col justify-center overflow-y-auto">
          <Hero />
        </div>

        {/* Right column: About, Projects, Contact stacked */}
        <div className="flex flex-col gap-12 overflow-y-auto pr-4">
          <About />
          <div className="flex-1">
            <Projects />
          </div>
          <Contact />
        </div>
      </div>

      {/* Mobile vertical layout (shown on mobile) */}
      <div className="lg:hidden">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
