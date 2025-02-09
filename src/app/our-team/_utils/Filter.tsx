"use client"
import { memo } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { useState, useCallback } from "react";

// Move data outside component to prevent recreation on each render
const FILTER_OPTIONS = [
    { title: "All" },
    { title: "Leadership" },
    { title: "Client Service" },
    { title: "Creative" },
    { title: "Development" },
    { title: "Marketing & Sells" },
    { title: "Management" },
] as const;

interface FilterProps {
    onFilterChange: (filter: string) => void;
}

export const Filter = memo(({ onFilterChange }: FilterProps) => {
    const [selectedFilter, setSelectedFilter] = useState<string>(FILTER_OPTIONS[0].title);

    const handleFilterChange = useCallback((filter: string) => {
        setSelectedFilter(filter);
        onFilterChange(filter);
    }, [onFilterChange]);

    return (
        <div className="pt-4">
            <Carousel
                opts={{
                    align: "center",
                }}
                className="w-full flex justify-center"
            >
                <CarouselContent>
                    {FILTER_OPTIONS.map((item) => (
                        <CarouselItem key={item.title} className="basis-1/">
                            <button
                                className={`px-2 md:px-4 py-1 md:py-2 rounded-lg ${
                                    selectedFilter === item.title 
                                        ? 'bg-primary text-white' 
                                        : 'bg-transparent text-text_color'
                                }`}
                                onClick={() => handleFilterChange(item.title)}
                            >
                                {item.title}
                            </button>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
});

Filter.displayName = 'Filter';
