import Image from 'next/image'
import { ArrowRight, MapPin } from 'lucide-react'
import { currentlyExploring, site } from '@/data/site'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading id="about-title" index="01" eyebrow="About" title="A little about me" />

        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <figure className="relative mx-auto max-w-sm lg:mx-0">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-violet/20 blur-xl" aria-hidden="true" />
              <div className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-border bg-[#1c1d20]">
                <Image
                  src="/profile/sufiyan.png"
                  alt={`${site.name}, professional headshot`}
                  fill
                  sizes="(min-width: 1024px) 384px, 90vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 text-primary" aria-hidden="true" />
                {site.location}
              </figcaption>
            </figure>
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  {"I'm "}
                  <span className="font-medium text-foreground">{site.name}</span>, a B.Tech Computer Science Engineering
                  student at Presidency University, Bengaluru, currently holding a CGPA of{' '}
                  <span className="font-medium text-foreground">8.58 / 10</span>.
                </p>
                <p>
                  My work sits at the intersection of software development, artificial intelligence and machine learning,
                  and GPU computing. I enjoy turning ideas into hands-on projects, such as IntelliPrint Nexus, a smart
                  printing management system with CUDA-based acceleration and real-time hardware telemetry.
                </p>
                <p>
                  Through the AI/ML internship at the NVIDIA Accelerated AI Center of Excellence, Presidency University, I
                  gained practical exposure to deep learning, computer vision, generative AI, LLMs and GPU-enabled
                  development. I&apos;m most interested in building practical systems that solve real problems.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 rounded-2xl border border-border bg-card p-6">
                <h3 className="font-mono text-xs tracking-[0.18em] text-primary uppercase">Currently exploring</h3>
                <ul className="mt-4 grid gap-1 sm:grid-cols-2">
                  {currentlyExploring.map((topic) => (
                    <li
                      key={topic}
                      className="group flex items-center gap-3 rounded-lg px-2 py-2 text-foreground transition-colors hover:bg-muted"
                    >
                      <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
