import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Highlights } from '@/components/highlights'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { TechMarquee } from '@/components/tech-marquee'
import { Experience } from '@/components/experience'
import { Education } from '@/components/education'
import { Certifications } from '@/components/certifications'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Highlights />
        <About />
        <Skills />
        <Projects />
        <TechMarquee />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
