'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { motion, useReducedMotion, useTransform, type MotionValue } from 'motion/react'
import { useTheme } from 'next-themes'
import { site } from '@/data/site'
import { cn } from '@/lib/utils'

const OrbScene = dynamic(() => import('@/components/orb-scene'), { ssr: false })

const orbitTech = [
  { name: 'Python', note: 'IntelliPrint Nexus & internship', pos: 'left-[2%] top-[14%]', depth: 1.2 },
  { name: 'PyTorch', note: 'CUDA acceleration & AI work', pos: 'right-[4%] top-[8%]', depth: 0.8 },
  { name: 'CUDA', note: 'GPU acceleration in IntelliPrint', pos: 'right-[-2%] top-[40%]', depth: 1.4 },
  { name: 'React', note: 'Web development', pos: 'right-[6%] bottom-[16%]', depth: 1 },
  { name: 'Java', note: 'Programming language', pos: 'left-[30%] bottom-[2%]', depth: 0.7 },
  { name: 'C++', note: 'Programming language', pos: 'left-[-3%] top-[44%]', depth: 1.1 },
  { name: 'Git', note: 'Version control', pos: 'left-[6%] bottom-[18%]', depth: 0.9 },
  { name: 'AI', note: 'AI/ML · GenAI · LLMs', pos: 'left-[44%] top-[0%]', depth: 1.3 },
]

function useCan3D() {
  const [enabled, setEnabled] = useState(false)
  useEffect(() => {
    const wide = window.matchMedia('(min-width: 768px)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const cores = navigator.hardwareConcurrency ?? 4
    let webgl = false
    try {
      const canvas = document.createElement('canvas')
      webgl = Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'))
    } catch {
      webgl = false
    }
    setEnabled(wide && !reduced && cores >= 4 && webgl)
  }, [])
  return enabled
}

type Pointer = { x: MotionValue<number>; y: MotionValue<number> }

function TechChip({ tech, index, pointer }: { tech: (typeof orbitTech)[number]; index: number; pointer: Pointer }) {
  const reduce = useReducedMotion()
  const strength = reduce ? 0 : tech.depth * 26
  const x = useTransform(pointer.x, (v) => v * strength)
  const y = useTransform(pointer.y, (v) => v * strength)

  return (
    <motion.div className={cn('absolute z-20', tech.pos)} style={{ x, y }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, y: [0, -7, 0] }}
        transition={{
          opacity: { delay: 0.6 + index * 0.06, duration: 0.5 },
          scale: { delay: 0.6 + index * 0.06, duration: 0.5 },
          y: { duration: 4 + (index % 3), repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 },
        }}
      >
        <div className="group relative">
          <span
            tabIndex={0}
            className="inline-flex cursor-default items-center gap-1.5 rounded-full border border-border bg-card/80 px-3 py-1.5 font-mono text-xs font-medium text-foreground shadow-sm backdrop-blur-md transition-all duration-200 group-hover:-translate-y-1 group-hover:border-primary/50 group-hover:shadow-[0_8px_24px_-6px] group-hover:shadow-primary/40 focus-visible:-translate-y-1 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
            aria-describedby={`tech-tip-${index}`}
          >
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            {tech.name}
          </span>
          <span
            id={`tech-tip-${index}`}
            role="tooltip"
            className="pointer-events-none absolute top-full left-1/2 mt-2 -translate-x-1/2 rounded-lg bg-foreground px-2.5 py-1.5 text-[11px] whitespace-nowrap text-background opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100"
          >
            {tech.note}
          </span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function HeroVisual({ pointer }: { pointer: Pointer }) {
  const can3D = useCan3D()
  const reduce = useReducedMotion()
  const { resolvedTheme } = useTheme()
  const dark = resolvedTheme === 'dark'
  const px = useTransform(pointer.x, (v) => (reduce ? 0 : v * -10))
  const py = useTransform(pointer.y, (v) => (reduce ? 0 : v * -10))

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div
        className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_35%_30%,color-mix(in_oklch,var(--primary)_28%,transparent),transparent_60%),radial-gradient(circle_at_70%_75%,color-mix(in_oklch,var(--violet)_22%,transparent),transparent_60%)] blur-2xl"
        aria-hidden="true"
      />
      <div className="absolute inset-[4%] rounded-full border border-dashed border-primary/20" aria-hidden="true" />
      <div className="absolute inset-[16%] rounded-full border border-violet/20" aria-hidden="true" />

      {can3D ? (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <OrbScene primary={dark ? '#7aa2ff' : '#2f5bea'} violet={dark ? '#b49cff' : '#7c4ddb'} />
        </motion.div>
      ) : null}

      <motion.div
        className="absolute top-1/2 left-1/2 z-10 w-[58%] -translate-x-1/2 -translate-y-1/2"
        style={{ x: px, y: py }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[2rem] border border-white/40 bg-card/40 p-2 shadow-[0_30px_80px_-30px] shadow-primary/40 backdrop-blur-xl dark:border-white/10"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-[#1c1d20]">
            <Image
              src="/profile/sufiyan.png"
              alt={`Portrait of ${site.name}`}
              fill
              priority
              sizes="(min-width: 768px) 300px, 60vw"
              className="object-cover object-[50%_20%]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12">
              <p className="text-sm font-semibold text-white">{site.name}</p>
              <p className="font-mono text-[11px] text-white/70">B.Tech CSE · Presidency University</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {orbitTech.map((tech, i) => (
        <TechChip key={tech.name} tech={tech} index={i} pointer={pointer} />
      ))}
    </div>
  )
}
