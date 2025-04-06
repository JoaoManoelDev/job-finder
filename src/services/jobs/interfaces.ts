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

export type JobsLinks = {
  first: string,
  last: string
  prev: string | null,
  next: string | null
}

export type JobsMeta = {
  current_page: number,
  from: number,
  last_page: number,
  // links: []
  path: string,
  per_page: number,
  to: number,
  total: number
}

export type Comment = {
  id: string
  author: string
  content: string
}