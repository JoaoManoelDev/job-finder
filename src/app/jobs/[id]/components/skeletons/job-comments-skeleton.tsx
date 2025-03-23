import { Skeleton } from "@/src/components/ui/skeleton"

export const JobCommentsSkeleton = () => {
  return (
    <div className="flex flex-col gap-5">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col gap-3.5 shadow-md px-4 py-2 rounded-sm border-l-4 border-l-blue-500"
        >
          <Skeleton className="w-32 h-4 rounded-sm" />
          <Skeleton className="w-full h-5 rounded-sm" />
        </div>
      ))}
    </div>
  )
}