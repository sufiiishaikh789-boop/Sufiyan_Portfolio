export type ArchitectureLayer = {
  name: string
  description: string
}

export type Project = {
  slug: string
  title: string
  subtitle: string
  summary: string
  featured: boolean
  role?: string
  technologies: string[]
  features: string[]
  github?: string
  liveDemo?: string
  overview?: string
  problem?: string
  solution?: string
  architecture?: ArchitectureLayer[]
  gpu?: string[]
  testing?: string[]
  screenshots: { src: string; alt: string }[]
}

export const projects: Project[] = [
  {
    slug: 'intelliprint-nexus',
    title: 'IntelliPrint Nexus',
    subtitle: 'Smart Printing Management System',
    summary:
      'A smart printing management platform that allows students to submit, pay for, track, and manage printing jobs while providing administrators with queue, payment, print-job, analytics, and hardware monitoring capabilities.',
    featured: true,
    role: 'Full-Stack Developer & AI/GPU Implementation',
    technologies: ['Python', 'Streamlit', 'SQLite', 'NVIDIA CUDA', 'PyTorch', 'GPU Computing', 'Git/GitHub', 'pytest'],
    features: [
      'Student and Admin dashboards',
      'Print-job submission and queue management',
      'Payment and refund management',
      'Automated refund rules based on printing status',
      'Real-time GPU and hardware monitoring',
      'NVIDIA GPU detection and CUDA-based acceleration',
      'GPU benchmarking and profiling',
      'CPU fallback for non-CUDA systems',
      'Hardware telemetry',
      'Admin analytics and monitoring',
      'Testing and reproducibility documentation',
    ],
    github: 'https://github.com/sufiiishaikh789-boop/IntelliPrint-Nexus',
    liveDemo: 'https://lnkd.in/p/gNXJYpDR',
    overview:
      'IntelliPrint Nexus is a smart printing management platform with dedicated experiences for students and administrators, covering the full print-job lifecycle from submission and payment to queue management, refunds, analytics, and hardware monitoring.',
    problem:
      'Students need a simple way to submit, pay for, and track print jobs, while administrators need visibility into queues, payments, refunds, and the health of the hardware running the system.',
    solution:
      'A unified Streamlit application with separate Student and Admin dashboards, backed by SQLite, with automated refund rules tied to printing status and a GPU module that detects NVIDIA hardware, applies CUDA-based acceleration, and falls back to CPU on non-CUDA systems.',
    architecture: [
      { name: 'Interface', description: 'Streamlit-based Student and Admin dashboards.' },
      { name: 'Application logic', description: 'Print-job submission, queue management, payments, and status-based refund rules.' },
      { name: 'Persistence', description: 'SQLite storage for jobs, payments, and refunds.' },
      { name: 'GPU & hardware layer', description: 'NVIDIA GPU detection, CUDA acceleration with PyTorch, benchmarking, profiling, and telemetry with CPU fallback.' },
    ],
    gpu: [
      'NVIDIA GPU detection and CUDA-based acceleration',
      'GPU benchmarking and profiling',
      'Real-time GPU and hardware telemetry',
      'CPU fallback for non-CUDA systems',
    ],
    testing: ['Automated tests with pytest', 'Testing and reproducibility documentation'],
    screenshots: [],
  },
  {
    slug: 'emergency-msg-sender',
    title: 'Emergency MSG Sender',
    subtitle: 'Embedded hardware project',
    summary:
      'An Arduino UNO based emergency messaging device combining GPS and GSM modules with an LCD display, buzzer, and push-button trigger.',
    featured: false,
    technologies: ['Arduino UNO', 'GPS', 'GSM', 'LCD', 'Buzzer', 'Push Button'],
    features: [],
    screenshots: [],
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
