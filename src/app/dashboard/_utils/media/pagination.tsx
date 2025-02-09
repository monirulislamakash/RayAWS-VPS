'use client'


export default function Pagination({ page, setPage }: { page: number, setPage: (page: number) => void }) {
    
    return (
        <div className="flex justify-center items-center gap-2">
            <button onClick={() => setPage(page - 1)}>Previous</button>
            <button onClick={() => setPage(page + 1)}>Next</button>
        </div>
    )
}