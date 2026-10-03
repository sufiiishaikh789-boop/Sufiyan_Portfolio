import { ArrowUp } from 'lucide-react'
import { site } from '@/data/site'
import { socials } from '@/components/socials'

export function Footer({ basePath = '' }: { basePath?: string }) {
  return (
    <footer className="border-t border-border px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="font-semibold tracking-tight">{site.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {'\u00A9'} {new Date().getFullYear()} · Built with Next.js
          </p>
        </div>
        <div className="flex items-center gap-2">
          <ul className="flex items-center gap-1" aria-label="Social links">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="inline-flex size-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`${basePath}#home`}
            className="ml-2 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to top
            <ArrowUp className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
