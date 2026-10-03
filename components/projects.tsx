import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Check, Plus } from 'lucide-react'
import { projects } from '@/data/projects'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { LinkButton } from '@/components/link-button'
import { ProjectSchematic } from '@/components/project-schematic'
import { GitHubIcon } from '@/components/brand-icons'

export function TechChips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {items.map((t) => (
        <li key={t} className="rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
          {t}
        </li>
      ))}
    </ul>
  )
}

export function Projects() {
  const featured = projects.find((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" aria-labelledby="projects-title" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="projects-title"
          index="03"
          eyebrow="Projects"
          title="Selected work"
          description="Hands-on projects spanning software, AI and GPU computing, and embedded hardware."
        />

        {featured ? (
          <Reveal>
            <article className="group/feature relative overflow-hidden rounded-[2rem] border border-border bg-card p-6 md:p-10">
              <div
                className="absolute -top-32 -right-32 size-96 rounded-full bg-primary/10 blur-3xl transition-opacity duration-700 group-hover/feature:opacity-150"
                aria-hidden="true"
              />
              <div className="relative grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
                <div className="flex flex-col">
                  <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">Featured project</p>
                  <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{featured.title}</h3>
                  <p className="mt-1 text-lg text-muted-foreground">{featured.subtitle}</p>
                  <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">{featured.summary}</p>
                  {featured.role ? (
                    <p className="mt-6 text-sm">
                      <span className="text-muted-foreground">Role · </span>
                      <span className="font-medium">{featured.role}</span>
                    </p>
                  ) : null}

                  <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
                    {featured.features.slice(0, 6).map((f) => (
                      <li key={f} className="flex gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <TechChips items={featured.technologies} />
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3 pt-10">
                    <LinkButton href={`/projects/${featured.slug}`}>
                      View Case Study
                      <ArrowRight aria-hidden="true" className="group-hover:translate-x-1" />
                    </LinkButton>
                    {featured.liveDemo ? (
                      <LinkButton href={featured.liveDemo} external variant="outline">
                        Live Demo
                        <ArrowUpRight aria-hidden="true" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </LinkButton>
                    ) : null}
                    {featured.github ? (
                      <LinkButton href={featured.github} external variant="outline">
                        <GitHubIcon aria-hidden="true" />
                        GitHub
                      </LinkButton>
                    ) : null}
                  </div>
                </div>

                <div className="transition-transform duration-500 group-hover/feature:-translate-y-1 lg:self-center">
                  <ProjectSchematic />
                </div>
              </div>
            </article>
          </Reveal>
        ) : null}

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {others.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08} className="h-full">
              <article className="group relative flex h-full flex-col rounded-[1.5rem] border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_40px_-24px] hover:shadow-primary/40 md:p-8">
                <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">{project.subtitle}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
                    {project.title}
                  </Link>
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{project.summary}</p>
                <div className="mt-6">
                  <TechChips items={project.technologies} />
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-medium text-primary">
                  View details
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </article>
            </Reveal>
          ))}

          <Reveal delay={0.16} className="h-full">
            <div className="flex h-full min-h-56 flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-border p-8 text-center">
              <span className="flex size-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
                <Plus className="size-4" aria-hidden="true" />
              </span>
              <p className="mt-4 font-medium">More projects on the way</p>
              <p className="mt-1 text-sm text-muted-foreground">New work will be added here as it ships.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
