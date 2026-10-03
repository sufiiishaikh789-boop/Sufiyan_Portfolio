import Link from 'next/link'
import { cn } from '@/lib/utils'

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 outline-none focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform'

const variants = {
  primary:
    'bg-primary text-primary-foreground shadow-[0_8px_24px_-8px] shadow-primary/50 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-10px] hover:shadow-primary/60',
  outline: 'border border-border bg-card/70 text-foreground backdrop-blur hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card',
  ghost: 'text-muted-foreground hover:bg-muted hover:text-foreground',
}

const sizes = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
  icon: 'size-10',
}

export type LinkButtonVariant = keyof typeof variants
export type LinkButtonSize = keyof typeof sizes

export function linkButtonClass(variant: LinkButtonVariant = 'primary', size: LinkButtonSize = 'md', className?: string) {
  return cn(base, variants[variant], sizes[size], className)
}

type LinkButtonProps = {
  href: string
  variant?: LinkButtonVariant
  size?: LinkButtonSize
  external?: boolean
  className?: string
  children: React.ReactNode
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>

export function LinkButton({ href, variant, size, external, className, children, ...rest }: LinkButtonProps) {
  const classes = linkButtonClass(variant, size, className)
  if (external || href.startsWith('mailto:') || href.startsWith('#')) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  )
}
