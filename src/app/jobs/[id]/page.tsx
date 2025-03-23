import { Suspense } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { JobPostingCard } from "./components/job-posting-card"
import { JobComments } from "./components/job-comments"
import { JobPostingCardSkeleton } from './components/skeletons/job-posting-card-skeleton'
import { JobCommentsSkeleton } from "./components/skeletons/job-comments-skeleton"

interface JobPageProps {
  params: Promise<{ id: string }>
}

const JobPage = async ({ params }: JobPageProps) => {
  const jobId = (await params).id

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


        <div className="flex flex-col gap-8">
          <Suspense fallback={<JobPostingCardSkeleton />}>
            <JobPostingCard jobId={jobId} />
          </Suspense>

          <div>
            <h2 className="mb-6 text-2xl font-bold">Comentários</h2>

            <Suspense fallback={<JobCommentsSkeleton />}>
              <JobComments jobId={jobId} />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  )
}

export default JobPage