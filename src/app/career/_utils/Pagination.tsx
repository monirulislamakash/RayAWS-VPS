"use client"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function Career__Pagination({ currentPage, totalPages, onPageChange }: { currentPage: number, totalPages: number, onPageChange: (page: number) => void }) {
  return (
    <Pagination className="container section">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={() => onPageChange(currentPage - 1)} />
        </PaginationItem>
        {
          Array.from({ length: totalPages }, (_, index) => index + 1).map((page: number) => (
            <PaginationItem key={page}>
              <PaginationLink href="#" onClick={() => onPageChange(page)}>{page}</PaginationLink>
            </PaginationItem>
          ))
        }
        <PaginationItem>
          <PaginationNext href="#" onClick={() => onPageChange(currentPage + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
