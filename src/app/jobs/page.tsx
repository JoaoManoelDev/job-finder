import { Search } from "lucide-react"

import { JobCard } from "@/src/components/cards/job-card"
import { SearchJobInput } from "@/src/components/jobs/search-job-input"
import { PaginateNavigator } from "@/src/components/pagination"
import { getJobs } from "@/src/services/jobs/get-jobs"

interface JobsPageProps {
  searchParams: Promise<{ [key: string]: string }>
}

const JobsPage = async ({ searchParams }: JobsPageProps) => {
  const params = await searchParams

  const response = await getJobs({
    search: params.search,
    page: params.page
  })

  return (
    <section className="flex flex-col justify-center items-center py-8">
      <div className="max-w-6xl w-full flex flex-col gap-4">
        <h1 className="text-4xl font-semibold font-maven-pro">Vagas</h1>

        <SearchJobInput />

        {response.jobs?.data.length === 0 && (
          <div className="flex gap-2 items-center justify-center h-96">

            <Search className="h-8 w-8" />
            <p className="text-2xl">Nenhuma vaga encontrada...</p>
          </div>
        )}

        {!response.error && response.jobs?.data ? (
          <div className="flex flex-col gap-4">
            {response.jobs.data?.map((job) => {
              return (
                <JobCard key={job.id} job={job} />
              )
            })}

            <PaginateNavigator params={params} totalPages={response.jobs.meta.last_page} />
          </div>
        ) : (
          <div className="flex flex-col gap-8 items-center justify-center h-96">
            <h1 className="text-3xl font-bold">{response.messageError} 😥</h1>
          </div>
        )}
      </div>
    </section>
  )
}

export default JobsPage