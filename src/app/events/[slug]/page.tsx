import PageHeaderSection from "@/components/common/Page__Header__Section";
import { CalendarClock, User2Icon } from "lucide-react";
import { Metadata } from "next";
import Blog__Carousel from "@/app/about-us/_utils/Blog__Carousel";
import Image from "next/image";
// import { Oswald } from "next/font/google";
import Header from "@/components/common/layout/Header";
import Footer from "@/components/common/layout/Footer";
import { createClient } from "@/utils/supabase/server";
import { getTableData } from "@/utils/api";
import Share from "@/app/blog/_utils/Share";
import moment from "moment";
// Add By Akash
import { Oswald } from 'next/font/google'
import { CalendarIcon, MapPin } from 'lucide-react'
import Events__Carousel from '../_utils/Events__Section'

const oswald = Oswald({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})

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

export const metadata: Metadata = {
    title: "Blog - Ray Advertising",
    description: "Ray Advertising",
};


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function SingleBlog({ params: { slug } }: any) {
    const supabase = await createClient()
    const { data: item } = await supabase
        .from('events')
        .select('*')
        .eq('id', slug)
        .single()


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { tableData }: any = await getTableData({ tableName: "events" })


    const data = [
        {
            icon: <CalendarClock className='w-[15px] h-[15px] text-secondary' />,
            title: moment(item?.created_at).format('DD MMMM YYYY'),
        },
        {
            icon: <User2Icon className='w-[15px] h-[15px] text-secondary' />,
            title: item?.author_name,
        },

    ]
    console.log("Siam Brother Cod", item?.images[0].publicUrl)
    return (

        <>
            <Header />
            <main>
                <PageHeaderSection data={data} title={item?.name} bg="/images/single-blog-bg.png" />
                <div className="container md:flex justify-between items-center gap-5 lg:gap-[100px] relative z-10 py-[40px] md:py-[60px] overflow-hidden">

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

                    <div className={`w-full md:w-[50%] lg:w-[45%] flex justify-end pt-5 md:pt-0 pb-[60px] md:pb-0`} >
                        <Image className="margin_left_event_images_phone w-[450px] h-[450px] object-fill object-top rounded-[7px]" src={item?.images[0].publicUrl} alt="event" width={450} height={100} />
                    </div>

                </div>
            </main>
            <Footer />
        </>
    )
}