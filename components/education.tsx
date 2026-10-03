import { education } from '@/data/education'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading id="education-title" index="05" eyebrow="Education" title="Academic journey" />

        <ol className="relative grid gap-6">
          {education.map((item, i) => (
            <li key={item.institution}>
              <Reveal delay={i * 0.08}>
                <article className="group grid gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_16px_32px_-24px] hover:shadow-primary/40 md:grid-cols-[180px_1fr_auto] md:items-center md:gap-8 md:p-8">
                  <div>
                    <p className="font-mono text-sm text-primary">{item.period}</p>
                    <p className="mt-1 font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">{item.level}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{item.degree}</h3>
                    <p className="mt-1 text-muted-foreground">{item.institution}</p>
                    {item.board ? <p className="mt-1 text-sm text-muted-foreground">{item.board}</p> : null}
                  </div>
                  <p className="justify-self-start rounded-full bg-accent px-4 py-2 font-mono text-sm font-medium text-accent-foreground md:justify-self-end">
                    {item.score}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
