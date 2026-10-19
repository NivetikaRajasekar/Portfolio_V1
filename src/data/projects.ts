export type Project = {
  number: string
  name: string
  category: string
  description: string
  stack: string[]
  accent: string
}

export const projects: Project[] = [
  {
    number: '01',
    name: 'Document Workflow Platform',
    category: 'Enterprise application',
    description: 'A workflow-driven application for generating, managing, and storing business documents through a structured API layer.',
    stack: ['C#', '.NET', 'SQL', 'Azure'],
    accent: 'mint',
  },
  {
    number: '02',
    name: 'Event-driven Processing',
    category: 'Backend architecture',
    description: 'A backend processing flow designed around message-based communication, clear service boundaries, and reliable data access.',
    stack: ['.NET', 'Kafka', 'Entity Framework', 'Azure'],
    accent: 'lavender',
  },
  {
    number: '03',
    name: 'Developer Portfolio',
    category: 'Personal project',
    description: 'A responsive portfolio experience built to present engineering work, technical interests, and projects with clarity.',
    stack: ['React', 'TypeScript', 'Vite', 'CSS'],
    accent: 'peach',
  },
]
