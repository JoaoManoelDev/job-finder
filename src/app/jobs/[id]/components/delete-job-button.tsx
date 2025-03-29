"use client"

import { useActionState } from "react"
import { Loader2 } from "lucide-react"

import { Button } from "@/src/components/ui/button"
import { deleteJob } from "@/src/actions/jobs"

export const DeleteJobButton = ({ jobId }: { jobId: string }) => {
  const [state, deleteJobAction, isPending] = useActionState(deleteJob, null)

  console.log("STATE", state)

  return (
    <form className="w-32" action={deleteJobAction}>
      <input type="hidden" name="id" value={jobId} />
      <Button variant="destructive" className="cursor-pointer w-32" disabled={isPending}>
        {isPending ? (
          <div className="flex items-center gap-1.5">
            <Loader2 className="animate-spin" />
            <span>Deletando...</span>
          </div>
        ) : (
          <>
            Apagar Vaga
          </>
        )}
      </Button>
    </form>
  )
}