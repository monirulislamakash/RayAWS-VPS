'use client';

import { CalendarIcon } from "lucide-react";
import Image from "next/image";
import { Oswald, Poppins } from 'next/font/google'
import CustomButton from "@/components/common/Custom__Button";
import moment from "moment";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";


const oswald = Oswald({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})

interface BlogData {
    title: string;
    image: string;
    date?: Date;
    author?: string;
    designation?: string;
    description?: string;
    slug?: string;
    created_at?: string;
    author_id: string;
}

export default function Blog__Card({ item }: { item: BlogData }) {
// only show the first 100 characters of the description
    const description = item?.description?.substring(0, 250);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [user, setUser] = useState<any>(null)

    useEffect(() => {
        const handleFetchUser = async () => {
            const supabase = createClient()
            const {data} = await supabase
            .from('profiles')
            .select('*')
            .eq('id', item?.author_id || '')
            .single()
            

            setUser(data)
        }
        handleFetchUser()
    }, [item])  



    // console.log(user?.avatar_url, 'user')
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 py-5">
            <div className="w-full ">
               {
                item?.image ? 
                <Image className=" object-contain" src={item?.image} alt="blog" width={552} height={312} /> : null
               }
            </div>
            <div className={`${oswald.className}`}>
                <h3 className="text-[20px] md:text-[24px] font-semibold text-primary pb-1">{item?.title}</h3>
                <div className={`${poppins.className} flex items-center gap-2 pb-5`}>
                    <CalendarIcon className='w-[16px] h-[16px] text-secondary' />
                    {/* 31 July- 1 August */}
                    <span className='text-[14px] md:text-[16px] font-normal text-secondary'> {moment(item?.created_at).format('DD MMMM YYYY')}  </span>
                </div>
                <div className="p-5 rounded-[7px] shadow-md border-t  border-t-gray-100 ">
                    <div className="flex gap-3">
                        <Image className="object-contain rounded-full" src={user?.avatar_url || '/images/team/founder.svg'} alt="author" width={40} height={40} />
                        <div className="">
                            <span className="text-[18px] md:text-[20px] font-normal text-secondary">{user?.full_name} </span>
                        </div>
                    </div>
                    <div className={`${poppins.className} text-[16px] font-normal text-text_color py-5 line-clamp-2`} dangerouslySetInnerHTML={{ __html: description || '' }} />

                    <CustomButton
                        label="Read More"
                        href={`/blog/${item?.slug}`}
                        isIcon={true}
                        className={`${poppins.className} mt-4 group inline-flex items-center gap-2 h-[40px] text-heading hover:bg-secondary hover:text-white transition-all duration-300 text-[14px] md:text-[16px] font-[500] py-[7px] px-[20px] rounded-full bg-[#F2F2F2]`}
                        iconStyle="w-[20px] h-[20px] group-hover:fill-white fill-primary"
                    />
                </div>
            </div>
        </div>
    )
}