export const site = {
  name: 'Sufiyan Sameer Shaikh',
  shortName: 'Sufiyan',
  initials: 'SS',
  role: 'Computer Science Engineering Student | AI/ML & Software Developer',
  location: 'Bengaluru, Karnataka, India',
  email: 'sufiyanshaikss786@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sufiyan-sameer-shaikh-1bbb8434b/',
  github: 'https://github.com/sufiiishaikh789-boop',
  // Set to '/resume/Sufiyan-Sameer-Shaikh-Resume.pdf' once the PDF is added to /public/resume.
  resumeUrl: null as string | null,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://portfolio-web-sufiii.vercel.app',
  title: 'Sufiyan Sameer Shaikh | AI/ML & Software Developer',
  description:
    'Portfolio of Sufiyan Sameer Shaikh, a Computer Science Engineering student focused on AI/ML, software development, GPU computing and practical technology projects.',
}

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export const currentlyExploring = [
  'Generative AI',
  'LLM Applications',
  'GPU Acceleration',
  'Computer Vision',
  'Full-Stack Development',
]

export const highlights = [
  { label: 'Academic', value: '8.58 / 10', detail: 'Current CGPA' },
  { label: 'Education', value: 'B.Tech CSE', detail: '2024 – 2028' },
  { label: 'AI Experience', value: 'AI/ML Intern', detail: 'NVIDIA Accelerated AI Center of Excellence' },
  { label: 'Focus', value: 'AI + Software + GPU', detail: 'Practical, working systems' },
]

export const showcaseTech = [
  'Python',
  'PyTorch',
  'CUDA',
  'TensorFlow',
  'YOLOv8',
  'OpenCV',
  'Hugging Face',
  'LLMs',
  'Kubernetes',
  'Streamlit',
  'Stable Diffusion',
  'LoRA / PEFT',
]
