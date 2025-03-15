import { type Job, JobCard } from "@/components/cards/job-card"

const allJobs: Job[] = [
  {
    id: '01',
    city: 'Rio de Janeiro',
    company: 'Google',
    salary: 'R$ 8.000,00',
    title: 'Desenvolvedor Full Stack',
  },
  {
    id: '02',
    city: 'São Paulo',
    company: 'Meta',
    salary: 'R$ 3.500,00',
    title: 'Desenvolvedor Node Jr.',
  },
]

const JobsPage = () => {
  return (
    <section className="flex flex-col justify-center items-center py-8">
      <div className="max-w-6xl w-full flex flex-col gap-4">
        <h1 className="text-4xl font-semibold font-maven-pro">Todas as vagas</h1>

        <div className="flex flex-col gap-4">
          {allJobs.map((job) => {
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