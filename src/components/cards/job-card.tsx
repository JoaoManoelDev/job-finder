import Link from "next/link"

import { buttonVariants } from "@/src/components/ui/button"
import { cn } from "@/src/lib/utils"
import { Job } from "@/src/services/jobs/interfaces"

interface JobCardProps {
  job: Job
}

export const JobCard = ({ job }: JobCardProps) => {
  return (
    <article
      className="grid grid-cols-12 gap-4 items-center w-full border border-muted rounded-sm p-6 font-semibold text-lg border-l-4 border-l-blue-400 shadow"
    >
      <h2 className="col-span-4">{job.title}</h2>
      <p className="col-span-2">{job.company}</p>
      <p className="col-span-2">{job.city}</p>
      <p className="col-span-2">{job.salary}</p>
      <Link
        href={`/jobs/${job.id}`}
        className={cn(buttonVariants({ variant: 'outline' }), "cursor-pointer col-span-2")}
      >
        Ver detalhes
      </Link>
    </article>
  )
}
