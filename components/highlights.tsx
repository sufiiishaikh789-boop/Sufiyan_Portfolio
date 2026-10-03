import { BrainCircuit, Cpu, GraduationCap, Trophy } from 'lucide-react'
import { highlights } from '@/data/site'
import { Reveal } from '@/components/reveal'

const icons = [Trophy, GraduationCap, BrainCircuit, Cpu]

export function Highlights() {
  return (
    <section id="highlights" aria-label="Highlights" className="relative px-5 pb-8 md:px-8">
      <ul className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item, i) => {
          const Icon = icons[i]
          return (
            <li key={item.label}>
              <Reveal delay={i * 0.08} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[0_1px_2px] shadow-foreground/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_20px_40px_-20px] hover:shadow-primary/30">
                  <div
                    className="absolute -top-16 -right-16 size-40 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">{item.label}</p>
                    <span className="flex size-9 items-center justify-center rounded-xl bg-accent text-primary">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                  </div>
                  <p className="mt-6 text-2xl font-semibold tracking-tight">{item.value}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                </div>
              </Reveal>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
