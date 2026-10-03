import { Building2, Calendar, FileBadge } from 'lucide-react'
import { experiences } from '@/data/experience'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { TechChips } from '@/components/projects'

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="bg-muted/40 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading id="experience-title" index="04" eyebrow="Experience" title="Internship experience" />

        {experiences.map((exp) => (
          <Reveal key={exp.id}>
            <article className="overflow-hidden rounded-[2rem] border border-border bg-card">
              <header className="flex flex-col gap-6 border-b border-border p-6 md:flex-row md:items-start md:justify-between md:p-10">
                <div>
                  <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">{exp.role}</p>
                  <h3 className="mt-3 text-balance text-2xl font-semibold tracking-tight md:text-3xl">{exp.organization}</h3>
                  <p className="mt-2 flex items-center gap-2 text-muted-foreground">
                    <Building2 className="size-4" aria-hidden="true" />
                    {exp.institution}
                  </p>
                </div>
                <p className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-border bg-background px-4 py-2 font-mono text-xs text-muted-foreground">
                  <Calendar className="size-3.5" aria-hidden="true" />
                  {exp.start} – {exp.end}
                </p>
              </header>

              <div className="grid gap-10 p-6 md:p-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
                <div>
                  <h4 className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">Learning progression</h4>
                  <ol className="relative mt-6 space-y-5 border-l border-border pl-6">
                    {exp.learningProgression.map((step, i) => (
                      <li key={step} className="group relative">
                        <span
                          className="absolute top-1.5 -left-[29px] size-2.5 rounded-full border-2 border-card bg-primary ring-4 ring-primary/15 transition-transform group-hover:scale-125"
                          aria-hidden="true"
                        />
                        <p className="flex items-baseline gap-3">
                          <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
                          <span className="font-medium">{step}</span>
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">Focus areas</h4>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {exp.focusAreas.map((f) => (
                        <li key={f} className="rounded-full bg-accent px-3 py-1.5 text-sm text-accent-foreground">
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">Practical exposure</h4>
                    <ul className="mt-4 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
                      {exp.exposure.map((e) => (
                        <li key={e} className="flex items-center gap-2">
                          <span className="size-1 rounded-full bg-primary" aria-hidden="true" />
                          <span className="first-letter:uppercase">{e}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-4 font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">Technologies</h4>
                    <TechChips items={exp.technologies} />
                  </div>
                  {exp.certificateUrl ? (
                    <a href={exp.certificateUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                      <FileBadge className="size-4" aria-hidden="true" />
                      View internship certificate
                    </a>
                  ) : (
                    <p className="inline-flex items-center gap-2 rounded-xl border border-dashed border-border px-4 py-3 text-sm text-muted-foreground">
                      <FileBadge className="size-4" aria-hidden="true" />
                      Internship certificate: to be updated
                    </p>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
