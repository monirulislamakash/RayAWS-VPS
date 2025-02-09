'use client'
import { TestimonialStar } from "@/components/Icons"
import { UserRound } from "lucide-react"
import { Oswald } from "next/font/google"
// import Image from "next/image"
import moment from "moment"

const oswald = Oswald({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-oswald',
})

    export default function TestimonialCard({ author_name, description, created_at }: {  author_name: string, description: string, created_at: string }) {
    return (
        <div className="p-[24px] rounded-[7px]  w-[300px] md:w-[410px] shadow-card-blue hover:shadow-card-blue/50 transition-all duration-500 hover:scale-105 cursor-pointer  bg-white">
            <div className="flex items-center gap-1">
                <TestimonialStar  className="w-[17px] h-[17px]" color="#56C0CC" />
                <TestimonialStar className="w-[17px] h-[17px]" color="#56C0CC" />
                <TestimonialStar className="w-[17px] h-[17px]" color="#56C0CC" />
                <TestimonialStar className="w-[17px] h-[17px]" color="#56C0CC" />
                <TestimonialStar className="w-[17px] h-[17px]" color="#56C0CC" />
            </div>
            <p className={` text-[14px] md:text-[16px] font-normal text-text_color py-5 `}>
                {description}
            </p>
            <div className="flex items-center gap-3">
                <div className="w-[40px] h-[40px] rounded-full bg-secondary flex items-center justify-center">
                    {/* {img && <Image src={`${img}`} width={40} height={40} alt="" className="w-full h-full object-contain rounded-full" />} */}

                    <UserRound className="w-[40px] h-[40px] text-white" />
                </div>
                <div className={`${oswald.className}`} >
                    <h3 className=" text-[16px] md:text-[20px] font-normal text-secondary">{author_name}</h3>
                    <p className="text-text_color text-[14px] md:text-[16px] font-normal">{moment(created_at).format('DD MMMM YYYY')}</p>
                </div>
            </div>
        </div>
    )
}