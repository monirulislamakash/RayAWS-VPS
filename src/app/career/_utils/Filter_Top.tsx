"use client"
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { Filter__Carousel } from "./Filter__Carousel";
import { useRouter } from "next/navigation";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FilterTop({ jobsCategoriesData, selectedFilter, setSelectedFilter, setSearch }: { jobsCategoriesData: any, selectedFilter: string, setSelectedFilter: (filter: string) => void, search: string, setSearch: (search: string) => void }) {
    const router = useRouter();


    const handleSearch = (search: string) => {
        setSearch(search);
        if (selectedFilter === '' && search !== '') {
            router.push(`/career?search=${search}`);
        } else if (search === '') {
            router.push('/career');
        } else {
            router.push(`/career?category=${selectedFilter}&search=${search}`);
        }
    }




    return (
        <div className="md:flex justify-between items-center py-[40px] container">
            <div className="w-full pb-5 md:pb-0">
                <Filter__Carousel categories={jobsCategoriesData} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />    
            </div>
            <div className="h-[40px] w-full max-w-[327px] mx-auto  rounded-full border border-[#F2F2F2] relative">
                <Input onChange={(e) => handleSearch(e.target.value)} placeholder="Search" className="h-full w-full rounded-full border-none bg-transparent text-base text-text_color placeholder:text-text_color  " />
                <SearchIcon className=" w-[16px] h-[16px] absolute right-4 top-1/2 -translate-y-1/2 text-text_color" />
            </div>
        </div>
    )
}