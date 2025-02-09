'use client'

import { Oswald } from 'next/font/google'
import { CalendarIcon, MapPin } from 'lucide-react'
import Events__Carousel from './Events__Carousel'

const oswald = Oswald({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})

// Update the interface/type definition
interface EventsSectionProps {
    name: string;
    date: string;
    gallery: string[];
    location: string;
    description: {
        paragraph: (string | JSX.Element)[];  // Allow both strings and JSX elements
    };
    content: string;
    start_date: string;
    end_date: string;
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    images: any[];
}

export default function Events__Section({ idx, item }: { idx: number; item: EventsSectionProps }) {
    const alignRight = (idx + 1) % 2 === 0;


    // console.log(item);

    return (
 
        
        <div className="container md:flex justify-between items-center gap-5 lg:gap-[100px] relative z-10 py-[40px] md:py-[60px] overflow-hidden">
            {
                alignRight && (
                    <div className={`w-full md:w-[50%] lg:w-[45%] flex justify-end pt-5 md:pt-0 pb-[60px] md:pb-0 pe-[0] pr-[0]`} >
                        {
                            item?.images?.length > 0 && (
                                <Events__Carousel images={item?.images} />
                            )
                        }
                    </div>
                )
            } 
            <div className="w-full md:w-[50%] lg:w-[55%] pt-5 md:pt-0 phone_text_center">
                <h2 className={`${oswald.className} text-[28px] md:text-[38px] font-semibold text-primary pb-2`}>
                    {item?.name}
                </h2>
                <div className="flex items-center gap-2  flex-wrap">
                    <div className='flex items-center gap-2 '>
                        <CalendarIcon className='only_pc w-[16px] h-[16px] text-secondary' />
                        <span className='only_pc text-[15px] font-normal text-secondary'>{item?.start_date}</span>
                        <span className='only_pc text-[15px] font-normal text-secondary'>-</span>
                        <span className='only_pc text-[15px] font-normal text-secondary'>{item?.end_date}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <MapPin className='only_pc w-[16px] h-[16px] text-secondary' />
                        <span className='only_pc text-[15px] font-normal text-secondary'>{item?.location}</span>
                    </div>
                </div>
                <div className="text-[16px] md:text-[18px] font-normal pt-4 text-text_color space-y-4" dangerouslySetInnerHTML={{ __html: item?.content }} />
            </div>
            {
                !alignRight && (
                    <div className={`w-full md:w-[50%] lg:w-[45%] flex justify-end pt-5 md:pt-0 pb-[60px] md:pb-0`} >
                        {
                            item?.images?.length > 0 && (
                                <Events__Carousel images={item?.images} />
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}
