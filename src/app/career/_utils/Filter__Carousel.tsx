"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Link from "next/link"





interface FilterProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    categories: any;
    selectedFilter: string;
    setSelectedFilter: (filter: string) => void;
}

export const Filter__Carousel = ({ categories, selectedFilter, setSelectedFilter }: FilterProps) => {


    const handleFilterChange = (filter: string) => {
        setSelectedFilter(filter);
    };

    return (
        <div className="mb-4">
            <Carousel
                opts={{
                align: "start",
                dragFree: true,
                skipSnaps: false,
                }}
                className="w-full"
            >
                <CarouselContent>
                    <CarouselItem className="basis-1/">
                        <button
                            className={`px-4 py-2 rounded-lg ${selectedFilter === '' ? 'bg-primary text-white' : 'bg-transparent text-text_color'}`}
                            onClick={() => handleFilterChange('')}
                        >
                            All
                        </button>
                    </CarouselItem>
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {categories?.map((item: any, index: any) => (
                        <CarouselItem key={index} className="basis-1/">
                            <Link href={`/career?category=${item.name}`}>
                                <button
                                className={`px-4 py-2 rounded-lg ${selectedFilter === item.name ? 'bg-primary text-white' : 'bg-transparent text-text_color'}`}
                                onClick={() => handleFilterChange(item.name)}
                            >
                                    {item?.name}
                                </button>
                            </Link>

                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

        </div>
    );
};
