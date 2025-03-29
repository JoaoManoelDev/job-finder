import Link from "next/link"
import { ArrowLeft, Briefcase, DollarSign, MapPin, Users } from "lucide-react"

import { Badge } from "@/src/components/ui/badge"
import { buttonVariants } from "@/src/components/ui/button"
import { Card, CardContent, CardHeader } from "@/src/components/ui/card"
import { Separator } from "@/src/components/ui/separator"
import { getJob } from "@/src/services/jobs/get-job"
import { cn } from "@/src/lib/utils"
import { DeleteJobButton } from "./delete-job-button"

interface JobPostingCardProps {
  jobId: string
}

export const JobPostingCard = async ({ jobId }: JobPostingCardProps) => {
  const job = await getJob({ jobId })

  return (
    <>
      {!job.error && job.data ? (
        <Card className="w-full">
          <CardHeader className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold">{job.data.title}</h1>
                <p className="text-muted-foreground">
                  Vaga disponível no{" "}
                  <Link
                    href={String(job.data.company_website)}
                    className="text-blue-600 hover:underline"
                  >
                    {job.data.company}
                  </Link>
                </p>
              </div>

              <DeleteJobButton jobId={job.data.id} />
            </div>
          </CardHeader>

          <CardContent className="space-y-8 w-full">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center gap-2">
                <MapPin className="text-muted-foreground h-5 w-5" />
                <span>{job.data.city}</span>
              </div>

              <div className="flex items-center gap-2">
                <Briefcase className="text-muted-foreground h-5 w-5" />
                <div className="flex gap-2">
                  <Badge variant="secondary">
                    {job.data.schedule === "full time" ? "Integral" : "Meio período"}
                  </Badge>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <DollarSign className="text-muted-foreground h-5 w-5" />
                <span>{job.data.salary.toFixed(2)}</span>
              </div>

              <div className="flex items-center gap-2">
                <Users className="text-muted-foreground h-5 w-5" />
                <span>{job.data.number_of_positions}</span>
              </div>
            </div>

            <Separator />

            <section>
              <h2 className="mb-4 text-xl font-semibold">Descrição da Vaga</h2>
              <p className="text-muted-foreground leading-relaxed">
                {job.data.description}
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="mb-4 text-xl font-semibold">Requisitos</h2>
              <p className="text-muted-foreground">{job.data.requirements}</p>
            </section>
          </CardContent>
        </Card>
      ) : (
        <div className="flex flex-col gap-8 items-center justify-center h-96">
          <h1 className="text-3xl font-bold">{job.messageError} 😥</h1>

          <Link href="/jobs" className={cn(buttonVariants(), 'text-base py-5 flex items-center')}>
            <ArrowLeft className="h-6 w-6" />
            <span>Ir para todas as vagas</span>
          </Link>
        </div>
      )}
    </>
  )
}