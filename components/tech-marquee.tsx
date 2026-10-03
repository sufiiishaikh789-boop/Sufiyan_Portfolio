import { showcaseTech } from '@/data/site'

function Item({ name }: { name: string }) {
  return (
    <li className="flex shrink-0 items-center gap-3 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary">
      <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
      {name}
    </li>
  )
}

export function TechMarquee() {
  return (
    <section aria-label="Technologies I work with" className="border-y border-border py-10">
      <p className="mb-6 text-center font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
        Technologies I work with
      </p>

      <ul className="flex gap-3 overflow-x-auto px-5 pb-2 md:hidden">
        {showcaseTech.map((t) => (
          <Item key={t} name={t} />
        ))}
      </ul>

      <div className="hidden overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] md:block">
        <ul className="animate-marquee flex w-max gap-3 hover:[animation-play-state:paused]">
          {[...showcaseTech, ...showcaseTech].map((t, i) => (
            <Item key={`${t}-${i}`} name={t} />
          ))}
        </ul>
      </div>
    </section>
  )
}
