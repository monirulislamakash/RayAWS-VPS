"use client"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
  export default function Blog__Pagination( {blogs,  page, setPage} : {blogs: any, page: number, setPage: (page: number) => void } ) {
 
    // const [pageSize, setPageSize] = useState(8);

    const handlePageChange = (page: number) => {
        setPage(page);
    }



    return (
      <Pagination className="container section">
        <PaginationContent className="flex justify-between items-center">
          <PaginationItem>
            <PaginationPrevious 
              className={page === 1 ? 'pointer-events-none opacity-50' : ''}
              href="#" 
              onClick={() => handlePageChange(page - 1)} 
            />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext className={blogs?.length < 5 ? 'pointer-events-none opacity-50' : ''} href="#" onClick={() => handlePageChange(page + 1)} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  }
  