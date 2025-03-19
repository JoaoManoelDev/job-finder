import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Job } from "@/src/types/jobs"
import { JobPostingCard } from "./components/job-posting-card"

interface JobPageProps {
  params: Promise<{ id: string }>
}

interface GetJobResponse {
  data: Job
}

const JobPage = async ({ params }: JobPageProps) => {
  const jobId = (await params).id

  const response = await fetch(`https://apis.codante.io/api/job-board/jobs/${jobId}`)
  const job: GetJobResponse = await response.json()

  return (
    <main className="flex flex-col justify-center items-center py-8">
      <div className="max-w-6xl w-full flex flex-col gap-4">
        <Link
          href="/jobs"
          className="text-muted-foreground hover:text-foreground inline-flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Todas as Vagas
        </Link>

        <JobPostingCard job={job.data} />
      </div>
    </main>
  )
}

export default JobPage