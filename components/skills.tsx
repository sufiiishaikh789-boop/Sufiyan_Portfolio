'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { CheckCircle2 } from 'lucide-react'
import { skillCategories } from '@/data/skills'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function Skills() {
  const [activeId, setActiveId] = useState(skillCategories[0].id)
  const active = skillCategories.find((c) => c.id === activeId) ?? skillCategories[0]

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const idx = skillCategories.findIndex((c) => c.id === activeId)
    const next = (idx + (e.key === 'ArrowRight' ? 1 : -1) + skillCategories.length) % skillCategories.length
    setActiveId(skillCategories[next].id)
    document.getElementById(`skill-tab-${skillCategories[next].id}`)?.focus()
  }

  return (
    <section id="skills" aria-labelledby="skills-title" className="relative bg-muted/40 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="skills-title"
          index="02"
          eyebrow="Skills"
          title="Technical toolkit"
          description="Organized by domain. Where a skill has been applied in a project or the internship, it is noted on the card."
        />

        <Reveal>
          <div
            role="tablist"
            aria-label="Skill categories"
            onKeyDown={onKeyDown}
            className="-mx-5 mb-8 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:px-0"
          >
            {skillCategories.map((category) => {
              const selected = category.id === activeId
              return (
                <button
                  key={category.id}
                  id={`skill-tab-${category.id}`}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls="skill-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveId(category.id)}
                  className={cn(
                    'relative shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none',
                    selected
                      ? 'border-transparent text-primary-foreground'
                      : 'border-border bg-card text-muted-foreground hover:text-foreground',
                  )}
                >
                  {selected ? (
                    <motion.span
                      layoutId="skill-tab-pill"
                      className="absolute inset-0 rounded-full bg-primary"
                      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                    />
                  ) : null}
                  <span className="relative">{category.label}</span>
                </button>
              )
            })}
          </div>
        </Reveal>

        <div id="skill-panel" role="tabpanel" aria-labelledby={`skill-tab-${active.id}`}>
          <AnimatePresence mode="wait">
            <motion.ul
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
            >
              {active.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_16px_32px_-20px] hover:shadow-primary/40"
                >
                  <p className="font-semibold tracking-tight">{skill.name}</p>
                  {skill.evidence?.length ? (
                    <ul className="mt-3 flex flex-wrap gap-1.5" aria-label={`Applied in`}>
                      {skill.evidence.map((ev) => (
                        <li
                          key={ev}
                          className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs text-accent-foreground"
                        >
                          <CheckCircle2 className="size-3 text-primary" aria-hidden="true" />
                          {ev}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 text-xs text-muted-foreground">Coursework & self-study</p>
                  )}
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
