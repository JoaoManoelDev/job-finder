export type Job = {
  id: string
  title: string
  company: string
  company_website: string
  number_of_positions: number
  city: string
  schedule: string
  salary: number
  description: string
  requirements: string
  created_at: string
  updated_at: string
}

export type Comment = {
  id: string
  author: string
  content: string
}