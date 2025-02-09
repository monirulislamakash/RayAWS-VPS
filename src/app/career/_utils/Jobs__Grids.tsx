'use client'
import Job__Card from "./Job__Card";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Career__Pagination } from "./Pagination";
import FilterTop from "./Filter_Top";

interface Job {
  id: string;
  icon: string;
  title: string;
  positions: number;
  location: string;
  type: string;
  slug: string;
  name: string;
  vacancies: number;
  job_type: string;
  remote: string;
}

interface JobsGridsProps {
  jobsCategoriesData: {
    id: string;
    label: string;
  }[];
}

export default function Jobs__Grids({ jobsCategoriesData }: JobsGridsProps) {
    const [selectedFilter, setSelectedFilter] = useState<string>('');
    const [search, setSearch] = useState<string>('');
    const [jobs, setJobs] = useState<Job[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const supabase = createClient();

    useEffect(() => {
        const fetchJobs = async () => {
            setIsLoading(true);
            setError(null);
            
            try {
                const { data, error } = await supabase.rpc('filter_by_category_and_name', {
                    category_label: selectedFilter,
                    search_name: search,
                });

                if (error) throw error;
                setJobs(data);
                setCurrentPage(1); // Reset to first page when filters change
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch jobs');
                setJobs([]);
            } finally {
                setIsLoading(false);
            }
        };

        // Debounce search queries
        const timeoutId = setTimeout(fetchJobs, 300);
        return () => clearTimeout(timeoutId);

    }, [selectedFilter, search, supabase]);

    // Calculate pagination
    const totalPages = Math.ceil(jobs.length / itemsPerPage);
    const paginatedJobs = jobs.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="container">
            <FilterTop 
                jobsCategoriesData={jobsCategoriesData}
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
                search={search}
                setSearch={setSearch}
            />

            {isLoading && (
                <div className="flex justify-center items-center w-full py-20">
                    <span className="loading">Loading...</span>
                </div>
            )}

            {error && (
                <div className="flex justify-center items-center w-full py-20 text-red-500">
                    {error}
                </div>
            )}

            {!isLoading && !error && (
                <>
                    {paginatedJobs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-20">
                            {paginatedJobs.map((item) => (
                                <Job__Card key={item.id} item={item} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex justify-center items-center w-full py-20">
                            <h1 className="text-2xl font-bold text-center">No jobs found!</h1>
                        </div>
                    )}
                </>
            )}

            {totalPages > 1 && (
                <Career__Pagination 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            )}
        </div>
    );
}