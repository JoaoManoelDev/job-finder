import { cn } from "../lib/utils"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "./ui/pagination"

interface PaginateNavigatorProps {
  params: {
    [key: string]: string
  },
  totalPages: number
}

export const PaginateNavigator = ({ params, totalPages }: PaginateNavigatorProps) => {
  const page = Number(params.page) || 1

  const handlePageChange = (newPage: number) => {
    const urlSearchParams = new URLSearchParams(params)
    urlSearchParams.set('page', String(newPage))
    return `?${urlSearchParams}`
  }

  const handleNextOrPreviousPage = (direction: 'PREVIOUS' | 'NEXT') => {
    if (direction === 'PREVIOUS' && page === 1) return '#'
    if (direction === 'NEXT' && page >= totalPages) return '#'

    return handlePageChange(direction === 'NEXT' ? page + 1 : page - 1)
  }

  const pagesView: number[] = [1]

  const dotsPage = -1

  if (page > 3) {
    pagesView.push(dotsPage)
  }

  // Adiciona até 2 páginas antes e 2 depois da atual
  const start = Math.max(2, page - 2)
  const end = Math.min(page + 2, totalPages - 1)
  pagesView.push(...Array.from({ length: end - start + 1 }, (_, i) => start + i));

  if (page + 2 < totalPages - 1) {
    pagesView.push(dotsPage)
  }

  if (totalPages > 1) {
    pagesView.push(totalPages)
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem
          className={cn('cursor-pointer', page === 1 && 'opacity-50 pointer-events-none')}
        >
          <PaginationPrevious href={handleNextOrPreviousPage('PREVIOUS')} />
        </PaginationItem>

        {pagesView.map((pageNumber) => (
          <PaginationItem key={pageNumber}>
            {pageNumber === -1 ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                href={handlePageChange(pageNumber)}
                isActive={pageNumber === page}
              >
                {pageNumber}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem className="cursor-pointer">
          <PaginationNext
            href={handleNextOrPreviousPage('NEXT')}
            className={page >= totalPages ? 'pointer-events-none opacity-50' : ''}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
