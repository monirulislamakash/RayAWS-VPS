'use client'

import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import { RightArrowIcon, CameraIcon } from '@/components/Icons'
import Autoplay from "embla-carousel-autoplay"
import { motion } from "motion/react";

export default function Gallery__Carousel({ images }: { images: string[] }) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    // Use useCallback for event handlers
    const onSelect = useCallback(() => {
        if (!api) return
        setCurrent(api.selectedScrollSnap())
    }, [api])

    // Memoize the autoplay plugin
    const plugin = useCallback(
        () => Autoplay({
            delay: 2000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        }),
        []
    )

    useEffect(() => {
        if (!api) return

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())
        api.on("select", onSelect)

        // Cleanup listener
        return () => {
            api.off("select", onSelect)
        }
    }, [api, onSelect])

    const handleScrollTo = useCallback((index: number) => {
        api?.scrollTo(index)
    }, [api]);

    return (
        <motion.div 
        // left to right
        // whileInView={{opacity: 1, x: 0}}
        // initial={{opacity: 0, x: -100}}
        // transition={{duration: 0.5, delay: 0.5}}
        className="container pt-[50px] relative overflow-hidden">
            <div className="flex justify-between">
                <div className="flex items-center gap-[14px]">
                    <span>
                        <CameraIcon className="w-[22px] h-[22px]" />
                    </span>
                    <span className="text-[20px] font-semibold uppercase text-primary">
                        From our Gallery
                    </span>
                    <span className="pl-2">
                        <RightArrowIcon className="w-[32px] h-[32px] text-primary" />
                    </span>
                </div>
                <div></div>
            </div>
            <Carousel
                opts={{
                    align: "center",
                    loop: true,
                }}
                className="w-full py-5"
                setApi={setApi}
                plugins={[plugin()]}
            >
                <CarouselContent>
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {images?.map((image: any, index) => (
                        <CarouselItem key={index} className="basis-1/2 lg:basis-1/4">
                            <div className="rounded-[7px] w-full h-full md:w-[263px] md:h-[248px]">
                                <Image 
                                    className="rounded-[7px] w-full h-full object-cover" 
                                    src={image?.publicUrl} 
                                    alt={`Gallery image ${index + 1}`}
                                    width={300} 
                                    height={284}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="md:flex hidden" />
                <CarouselNext className="md:flex hidden" />
            </Carousel>
            <div className="py-2 text-center">
                <div className="flex justify-center gap-2">
                    {Array.from({ length: count }).map((_, index) => (
                        <button
                            key={index}
                            className={`rounded-full transition-colors ${
                                index === current 
                                    ? "bg-secondary w-[22px] h-[10px]" 
                                    : "bg-[#D9D9D9] size-[10px]"
                            }`}
                            onClick={() => handleScrollTo(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    )
}