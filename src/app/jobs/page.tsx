import { type Job, JobCard } from "@/src/components/cards/job-card"

interface GetJobsResponse {
  data: Job[]
}

const JobsPage = async () => {
  const response = await fetch('https://apis.codante.io/api/job-board/jobs', {
    cache: 'no-store'
  })
  const jobs: GetJobsResponse = await response.json()

  return (
    <section className="flex flex-col justify-center items-center py-8">
      <div className="max-w-6xl w-full flex flex-col gap-4">
        <h1 className="text-4xl font-semibold font-maven-pro">Todas as vagas</h1>

        <div className="flex flex-col gap-4">
          {jobs.data.map((job) => {
            return (
              <JobCard key={job.id} job={job} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default JobsPage