import { Mail } from 'lucide-react'
import { site } from '@/data/site'
import { GitHubIcon, LinkedInIcon } from '@/components/brand-icons'

export const socials = [
  { label: 'GitHub', href: site.github, icon: GitHubIcon },
  { label: 'LinkedIn', href: site.linkedin, icon: LinkedInIcon },
  { label: 'Email', href: `mailto:${site.email}`, icon: Mail },
]
