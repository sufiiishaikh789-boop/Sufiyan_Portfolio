export type Certification = {
  id: string
  title: string
  subtitle?: string
  type: string
  issuer: string
  date: string
  image?: string
  url?: string
}

export const certifications: Certification[] = [
  {
    id: 'sdp-teenpreneur-2025',
    title: 'Student Development Program (SDP)',
    subtitle: '\u201CTeenpreneur and His 20+ Year\u2019s Journey\u201D',
    type: 'Certificate of Participation',
    issuer: 'Presidency University, Bangalore',
    date: '28 March 2025',
    image: '/certificates/sdp-teenpreneur-2025.png',
    url: '/certificates/sdp-teenpreneur-2025.png',
  },
]
