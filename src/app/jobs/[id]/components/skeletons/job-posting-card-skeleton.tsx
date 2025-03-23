import { Briefcase, DollarSign, MapPin, Users } from "lucide-react"

import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardHeader } from "@/src/components/ui/card"
import { Separator } from "@/src/components/ui/separator"
import { Skeleton } from "@/src/components/ui/skeleton"

export const JobPostingCardSkeleton = () => {
  return (
    <Card className="w-full">
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1.5">
            <Skeleton className="w-72 h-7 rounded-lg" />
            <div className="flex items-center gap-1">
              <p className="text-muted-foreground">Vaga disponível no</p>

              <Skeleton className="w-24 h-3 rounded-full" />
            </div>
          </div>

          <div className="w-32">
            <Button variant="destructive" className="cursor-pointer w-32" disabled>
              Apagar Vaga
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-8 w-full">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-center gap-2">
            <MapPin className="text-muted-foreground h-5 w-5" />
            <Skeleton className="w-28 h-6 rounded-full" />
          </div>

          <div className="flex items-center gap-2">
            <Briefcase className="text-muted-foreground h-5 w-5" />
            <Skeleton className="w-28 h-6 rounded-full" />
          </div>

          <div className="flex items-center gap-2">
            <DollarSign className="text-muted-foreground h-5 w-5" />
            <Skeleton className="w-28 h-6 rounded-full" />
          </div>

          <div className="flex items-center gap-2">
            <Users className="text-muted-foreground h-5 w-5" />
            <Skeleton className="w-28 h-6 rounded-full" />
          </div>
        </div>

        <Separator />

        <section>
          <h2 className="mb-4 text-xl font-semibold">Descrição da Vaga</h2>
          <div className="flex flex-col gap-3">
            <Skeleton className="w-full h-4 rounded-full" />
            <Skeleton className="w-full h-4 rounded-full" />
            <Skeleton className="w-72 h-4 rounded-full" />
          </div>
        </section>

        <Separator />

        <section>
          <h2 className="mb-4 text-xl font-semibold">Requisitos</h2>
          <div className="flex flex-col gap-3">
            <Skeleton className="w-full h-4 rounded-full" />
            <Skeleton className="w-full h-4 rounded-full" />
            <Skeleton className="w-72 h-4 rounded-full" />
          </div>
        </section>
      </CardContent>
    </Card>
  )
}