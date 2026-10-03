import Image from 'next/image'
import { ArrowUpRight, Award, Plus } from 'lucide-react'
import { certifications } from '@/data/certifications'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { LinkButton } from '@/components/link-button'

export function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certifications-title" className="bg-muted/40 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading id="certifications-title" index="06" eyebrow="Certifications" title="Certificates & recognition" />

        <div className="grid gap-6 lg:grid-cols-2">
          {certifications.map((cert) => (
            <Reveal key={cert.id} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px] hover:shadow-primary/40">
                {cert.image ? (
                  <div className="relative aspect-[800/563] overflow-hidden border-b border-border bg-muted">
                    <Image
                      src={cert.image}
                      alt={`${cert.type}: ${cert.title}, ${cert.issuer}`}
                      fill
                      sizes="(min-width: 1024px) 600px, 95vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                ) : null}
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <p className="flex items-center gap-2 font-mono text-xs tracking-[0.16em] text-primary uppercase">
                    <Award className="size-4" aria-hidden="true" />
                    {cert.type}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">{cert.title}</h3>
                  {cert.subtitle ? <p className="mt-1 text-muted-foreground italic">{cert.subtitle}</p> : null}
                  <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <dt className="text-muted-foreground">Issued by</dt>
                      <dd className="mt-0.5 font-medium">{cert.issuer}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">Date</dt>
                      <dd className="mt-0.5 font-medium">{cert.date}</dd>
                    </div>
                  </dl>
                  {cert.url ? (
                    <div className="mt-auto pt-8">
                      <LinkButton href={cert.url} external variant="outline" size="sm">
                        View Certificate
                        <ArrowUpRight aria-hidden="true" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </LinkButton>
                    </div>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal delay={0.1} className="h-full">
            <div className="flex h-full min-h-64 flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-border p-8 text-center">
              <span className="flex size-10 items-center justify-center rounded-full bg-card text-muted-foreground">
                <Plus className="size-4" aria-hidden="true" />
              </span>
              <p className="mt-4 font-medium">More certificates coming soon</p>
              <p className="mt-1 max-w-xs text-sm text-muted-foreground">
                Including the NVIDIA AI CoE internship certificate once issued.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
