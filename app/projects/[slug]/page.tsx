import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight, Check, ImageIcon } from 'lucide-react'
import { getProject, projects } from '@/data/projects'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Reveal } from '@/components/reveal'
import { LinkButton } from '@/components/link-button'
import { TechChips } from '@/components/projects'
import { ProjectSchematic } from '@/components/project-schematic'
import { GitHubIcon } from '@/components/brand-icons'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: `${project.title}: ${project.subtitle}`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
  }
}

function DetailSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <section className="grid gap-4 border-t border-border py-10 md:grid-cols-[220px_1fr] md:gap-10">
        <h2 className="font-mono text-xs tracking-[0.18em] text-primary uppercase">{title}</h2>
        <div className="text-pretty leading-relaxed text-muted-foreground">{children}</div>
      </section>
    </Reveal>
  )
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2.5 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-foreground">
          <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  return (
    <>
      <Navbar basePath="/" />
      <main id="main" className="px-5 pt-28 pb-24 md:px-8 md:pt-36">
        <article className="mx-auto max-w-5xl">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            Back to projects
          </Link>

          <Reveal>
            <header className="mt-8">
              <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">{project.subtitle}</p>
              <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-6xl">{project.title}</h1>
              <p className="mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">{project.summary}</p>
              {project.role ? (
                <p className="mt-6 text-sm">
                  <span className="text-muted-foreground">Role · </span>
                  <span className="font-medium">{project.role}</span>
                </p>
              ) : null}
              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveDemo ? (
                  <LinkButton href={project.liveDemo} external>
                    Live Demo
                    <ArrowUpRight aria-hidden="true" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </LinkButton>
                ) : null}
                {project.github ? (
                  <LinkButton href={project.github} external variant="outline">
                    <GitHubIcon aria-hidden="true" />
                    View on GitHub
                  </LinkButton>
                ) : null}
              </div>
            </header>
          </Reveal>

          {project.slug === 'intelliprint-nexus' ? (
            <Reveal className="my-14">
              <ProjectSchematic />
            </Reveal>
          ) : (
            <div className="my-14" />
          )}

          {project.overview ? (
            <DetailSection title="Overview">
              <p>{project.overview}</p>
            </DetailSection>
          ) : null}
          {project.problem ? (
            <DetailSection title="Problem">
              <p>{project.problem}</p>
            </DetailSection>
          ) : null}
          {project.solution ? (
            <DetailSection title="Solution">
              <p>{project.solution}</p>
            </DetailSection>
          ) : null}
          {project.architecture?.length ? (
            <DetailSection title="Architecture">
              <ol className="grid gap-3">
                {project.architecture.map((layer, i) => (
                  <li key={layer.name} className="flex gap-4 rounded-xl border border-border bg-card p-4">
                    <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <p className="font-medium text-foreground">{layer.name}</p>
                      <p className="mt-0.5 text-sm">{layer.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </DetailSection>
          ) : null}
          {project.features.length ? (
            <DetailSection title="Key features">
              <CheckList items={project.features} />
            </DetailSection>
          ) : null}
          <DetailSection title="Tech stack">
            <TechChips items={project.technologies} />
          </DetailSection>
          {project.gpu?.length ? (
            <DetailSection title="GPU implementation">
              <CheckList items={project.gpu} />
            </DetailSection>
          ) : null}
          {project.testing?.length ? (
            <DetailSection title="Testing">
              <CheckList items={project.testing} />
            </DetailSection>
          ) : null}
          <DetailSection title="Screenshots">
            {project.screenshots.length ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {project.screenshots.map((s) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={s.src} src={s.src} alt={s.alt} className="rounded-xl border border-border" />
                ))}
              </div>
            ) : (
              <p className="inline-flex items-center gap-2 rounded-xl border border-dashed border-border px-4 py-3 text-sm">
                <ImageIcon className="size-4" aria-hidden="true" />
                Screenshots will be added soon.
              </p>
            )}
          </DetailSection>
        </article>
      </main>
      <Footer basePath="/" />
    </>
  )
}
