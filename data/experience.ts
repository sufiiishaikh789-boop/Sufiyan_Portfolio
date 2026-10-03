export type Experience = {
  id: string
  organization: string
  institution: string
  role: string
  start: string
  end: string
  focusAreas: string[]
  learningProgression: string[]
  exposure: string[]
  technologies: string[]
  certificateUrl: string | null
}

export const experiences: Experience[] = [
  {
    id: 'nvidia-ai-coe',
    organization: 'NVIDIA Accelerated AI Center of Excellence (CoE)',
    institution: 'Presidency University',
    role: 'AI/ML Intern / Student Trainee',
    start: '01 June 2026',
    end: '12 June 2026',
    focusAreas: [
      'AI/ML',
      'Generative AI',
      'Large Language Models',
      'Computer Vision',
      'GPU-based Computing',
      'Practical Model Implementation',
    ],
    learningProgression: [
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'Generative AI',
      'LLMs',
      'GPU Computing',
      'Model Implementation',
    ],
    exposure: [
      'GPU-enabled development',
      'Prompt engineering',
      'Machine learning',
      'Deep learning',
      'LLMs',
      'Generative AI',
      'Image generation',
      'Object detection',
      'AI model deployment',
    ],
    technologies: [
      'Python',
      'Jupyter Notebook',
      'NVIDIA GPU',
      'Kubernetes',
      'Antigravity IDE',
      'OpenCV',
      'YOLOv8',
      'TensorFlow',
      'PyTorch',
      'Hugging Face',
      'LoRA / PEFT',
      'Stable Diffusion',
    ],
    certificateUrl: null,
  },
]
