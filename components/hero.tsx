'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { HeroVisual } from '@/components/hero-visual'
import { LinkButton } from '@/components/link-button'
import { ResumeButton } from '@/components/resume-button'
import { socials } from '@/components/socials'

const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
})

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { stiffness: 60, damping: 20 })
  const y = useSpring(rawY, { stiffness: 60, damping: 20 })

  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType !== 'mouse' || !sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    rawX.set((e.clientX - rect.left) / rect.width - 0.5)
    rawY.set((e.clientY - rect.top) / rect.height - 0.5)
    sectionRef.current.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
    sectionRef.current.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      onPointerMove={onPointerMove}
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-svh items-center overflow-hidden pt-24 pb-20 md:pt-28"
    >
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 hidden md:block"
        style={{
          background:
            'radial-gradient(500px circle at var(--spot-x, 70%) var(--spot-y, 40%), color-mix(in oklch, var(--primary) 9%, transparent), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
        <div className="order-2 lg:order-1">
          <motion.p
            {...fadeUp(0.05)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase backdrop-blur"
          >
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Computer Science Engineering · Bengaluru
          </motion.p>

          <motion.p {...fadeUp(0.12)} className="mb-3 text-xl font-medium text-muted-foreground md:text-2xl">
            {"Hi, I'm Sufiyan."}
          </motion.p>

          <motion.h1
            {...fadeUp(0.2)}
            id="hero-title"
            className="text-balance text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            I build software,{' '}
            <span className="bg-gradient-to-r from-primary to-violet bg-clip-text text-transparent">AI & GPU-powered</span>{' '}
            solutions.
          </motion.h1>

          <motion.p {...fadeUp(0.3)} className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Computer Science Engineering student focused on software development, artificial intelligence, machine
            learning, and GPU-accelerated computing.
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="mt-9 flex flex-wrap items-center gap-3">
            <LinkButton href="#projects" size="lg">
              Explore My Work
              <ArrowRight aria-hidden="true" className="group-hover:translate-x-1" />
            </LinkButton>
            <ResumeButton size="lg" />
          </motion.div>

          <motion.ul {...fadeUp(0.5)} className="mt-10 flex items-center gap-2" aria-label="Social links">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  <Icon className="size-4 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="order-1 mx-auto w-full max-w-xs sm:max-w-sm lg:order-2 lg:max-w-none">
          <HeroVisual pointer={{ x, y }} />
        </div>
      </div>

      <a
        href="#highlights"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase transition-colors hover:text-foreground md:flex"
      >
        Scroll to explore
        <ArrowDown className="animate-scroll-cue size-4" aria-hidden="true" />
      </a>
    </section>
  )
}
