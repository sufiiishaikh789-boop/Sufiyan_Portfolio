import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: string
  description?: string
  id?: string
  className?: string
}

export function SectionHeading({ index, eyebrow, title, description, id, className }: SectionHeadingProps) {
  return (
    <Reveal className={cn('mb-12 max-w-2xl md:mb-16', className)}>
      <p className="mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-primary uppercase">
        <span>{index}</span>
        <span className="h-px w-8 bg-primary/40" aria-hidden="true" />
        <span>{eyebrow}</span>
      </p>
      <h2 id={id} className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p> : null}
    </Reveal>
  )
}
