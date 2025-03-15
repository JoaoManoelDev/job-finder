import { Button } from "@/src/components/ui/button"

export interface Job {
  id: string
  title: string
  company: string
  city: string
  salary: string
}

interface JobCardProps {
  job: Job
}

export const JobCard = ({ job }: JobCardProps) => {
  return (
    <article className="grid grid-cols-12 gap-4 items-center w-full border border-muted-foreground rounded-md p-6 font-semibold text-lg">
      <h2 className="col-span-4">{job.title}</h2>
      <p className="col-span-2">{job.company}</p>
      <p className="col-span-2">{job.city}</p>
      <p className="col-span-2">{job.salary}</p>
      <Button variant="outline" className="cursor-pointer col-span-2">
        Ver detalhes
      </Button>
    </article>
  )
}
