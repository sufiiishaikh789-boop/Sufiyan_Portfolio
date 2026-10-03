export const EVIDENCE = {
  intelliprint: 'IntelliPrint Nexus',
  internship: 'NVIDIA AI CoE Internship',
  emergency: 'Emergency MSG Sender',
} as const

type Evidence = (typeof EVIDENCE)[keyof typeof EVIDENCE]

export type Skill = {
  name: string
  evidence?: Evidence[]
}

export type SkillCategory = {
  id: string
  label: string
  skills: Skill[]
}

const { intelliprint, internship } = EVIDENCE

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    label: 'Programming',
    skills: [
      { name: 'C' },
      { name: 'C++' },
      { name: 'Java' },
      { name: 'Python', evidence: [intelliprint, internship] },
      { name: 'JavaScript' },
    ],
  },
  {
    id: 'web',
    label: 'Web Development',
    skills: [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JavaScript' }, { name: 'PHP' }, { name: 'React' }],
  },
  {
    id: 'database',
    label: 'Database',
    skills: [{ name: 'MySQL' }, { name: 'SQL' }, { name: 'SQLite', evidence: [intelliprint] }],
  },
  {
    id: 'ai-ml',
    label: 'AI / Machine Learning',
    skills: [
      { name: 'Machine Learning', evidence: [internship] },
      { name: 'Deep Learning', evidence: [internship] },
      { name: 'PyTorch', evidence: [intelliprint, internship] },
      { name: 'TensorFlow', evidence: [internship] },
      { name: 'Computer Vision', evidence: [internship] },
      { name: 'Generative AI', evidence: [internship] },
      { name: 'LLMs', evidence: [internship] },
    ],
  },
  {
    id: 'gpu',
    label: 'GPU / Computing',
    skills: [
      { name: 'NVIDIA GPU Computing', evidence: [intelliprint, internship] },
      { name: 'CUDA', evidence: [intelliprint] },
      { name: 'GPU Acceleration', evidence: [intelliprint] },
      { name: 'GPU Benchmarking', evidence: [intelliprint] },
      { name: 'GPU Telemetry', evidence: [intelliprint] },
    ],
  },
  {
    id: 'fundamentals',
    label: 'CS Fundamentals',
    skills: [
      { name: 'Data Structures & Algorithms' },
      { name: 'DBMS' },
      { name: 'Operating Systems' },
      { name: 'Computer Networks' },
      { name: 'Analysis of Algorithms' },
      { name: 'Unix & Shell Programming' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: [
      { name: 'Git', evidence: [intelliprint] },
      { name: 'GitHub', evidence: [intelliprint] },
      { name: 'VS Code' },
      { name: 'Jupyter Notebook', evidence: [internship] },
      { name: 'Streamlit', evidence: [intelliprint] },
      { name: 'pytest', evidence: [intelliprint] },
    ],
  },
  {
    id: 'exposure',
    label: 'Additional Exposure',
    skills: [
      { name: 'Hugging Face', evidence: [internship] },
      { name: 'LoRA / PEFT', evidence: [internship] },
      { name: 'OpenCV', evidence: [internship] },
      { name: 'YOLOv8', evidence: [internship] },
      { name: 'Stable Diffusion', evidence: [internship] },
      { name: 'Kubernetes', evidence: [internship] },
    ],
  },
]
