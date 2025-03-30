import { getJobComments } from "@/src/services/jobs/get-job-comments"

interface JobCommentsProps {
  jobId: string
}

export const JobComments = async ({ jobId }: JobCommentsProps) => {
  const comments = await getJobComments({ jobId })

  return (
    <div className="flex flex-col gap-5">
      {comments.data?.map((comment) => (
        <div
          key={comment.id}
          className="flex flex-col gap-1 shadow-md px-4 py-2 rounded-sm border-l-4 border-foreground"
        >
          <p className="font-semibold text-sm">{comment.author}</p>
          <p className="leading-relaxed">{comment.content}</p>
        </div>
      ))}
    </div>
  )
}