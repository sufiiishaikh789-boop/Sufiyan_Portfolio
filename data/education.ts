export type Education = {
  period: string
  level: string
  degree: string
  institution: string
  board?: string
  score: string
}

export const education: Education[] = [
  {
    period: '2024 – 2028',
    level: 'Undergraduate',
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'Presidency University, Bengaluru',
    score: 'CGPA 8.58 / 10',
  },
  {
    period: '2024',
    level: 'Pre-University',
    degree: 'Higher Secondary',
    institution: 'M.E.S. Chaitanya PU College, Sirsi',
    board: 'Karnataka School Examination and Assessment Board',
    score: '81%',
  },
  {
    period: '2022',
    level: 'Secondary School',
    degree: 'Secondary Education',
    institution: 'Shri Raj Rajeshwari English Medium High School, Manchikeri',
    board: 'Karnataka Secondary Education Examination Board',
    score: '95%',
  },
]
