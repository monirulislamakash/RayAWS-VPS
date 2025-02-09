'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Events__Carousel({ images }: { images: any[] }) {

    return (
        <Carousel
            opts={{
                align: "center",
            }}
            className="w-full relative max-w-[500px] mx-auto "
        >
            <CarouselContent className="relative z-10 flex w-full">
                {images?.map((item, index) => {
                    
                    

                    return (
                        <CarouselItem key={index} className="w-full ">
                            <Image className="margin_left_event_images_phone w-[450px] h-[450px] object-fill object-top rounded-[7px]" src={item?.publicUrl} alt="event" width={450} height={100} />
                        </CarouselItem>
                    )
                })}
            </CarouselContent>
            <div className="mx-auto shadow z-[2] absolute left-[2.5%] top-[12%] card__stack w-[300px] md:w-[448px] h-[284px] bg-[#10397a0d] backdrop-blur-[1px] rounded-[7px]"></div>

            <div className="mx-auto shadow z-[1] absolute left-[4%] top-[12%] card__stack w-[300px] md:w-[433px] h-[274px] bg-[#10397a0d] backdrop-blur-[1px] rounded-[7px]"></div>


            <div className="absolute left-[50%] -bottom-[16%] flex items-center gap-0">
                <CarouselPrevious className="text-text_color bg-[#D9D9D9]" />
                <CarouselNext className="text-text_color bg-[#D9D9D9]" />
            </div>
        </Carousel>
    )
}