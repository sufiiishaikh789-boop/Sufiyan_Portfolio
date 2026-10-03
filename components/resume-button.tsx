import { Download } from 'lucide-react'
import { site } from '@/data/site'
import { linkButtonClass, type LinkButtonSize, type LinkButtonVariant } from '@/components/link-button'
import { cn } from '@/lib/utils'

type ResumeButtonProps = {
  variant?: LinkButtonVariant
  size?: LinkButtonSize
  label?: string
  className?: string
}

export function ResumeButton({ variant = 'outline', size = 'md', label = 'Download Resume', className }: ResumeButtonProps) {
  if (site.resumeUrl) {
    return (
      <a href={site.resumeUrl} download className={linkButtonClass(variant, size, className)}>
        {label}
        <Download aria-hidden="true" className="group-hover:translate-y-0.5" />
      </a>
    )
  }

  return (
    <button
      type="button"
      aria-disabled="true"
      title="Resume coming soon"
      className={cn(linkButtonClass(variant, size, className), 'cursor-not-allowed opacity-70 hover:translate-y-0')}
    >
      {label}
      <span className="rounded-full bg-muted px-2 py-0.5 font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
        Soon
      </span>
    </button>
  )
}
