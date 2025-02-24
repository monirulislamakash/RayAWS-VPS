'use client'
import Image from "next/image"
import { RightArrowIcon } from '@/components/Icons'
import { Oswald } from "next/font/google"
import Link from "next/link"
import { Plus } from "lucide-react"
import { motion } from "motion/react"




const oswald = Oswald({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})


type blogType = { id?: number; title: string; image: string; slug: string;}

interface BlogCarouselProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    blogs: any[]; // Replace 'any' with your specific blog type
}

export default function Blog__Carousel({ blogs }: BlogCarouselProps) {

    return (
        <div className="container pb-[80px] relative">
            <div className="">
                <motion.div 
                    // top to bottom
                    // whileInView={{opacity: 1, y: 0}}
                    // initial={{opacity: 0, y: -100}} {Akash}
                    // transition={{duration: 0.5, delay: 0.5}}
                className="flex items-center gap-[14px] pb-5">
                    <span className="text-[20px] font-semibold uppercase text-primary">Our latest blog</span>
                    <span className="pl-3">
                        <RightArrowIcon className="w-[32px] h-[32px] text-primary" />
                    </span>
                </motion.div>

                <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {/* show only 3 blogs */}
                    {blogs?.slice(0, 3).map((item: blogType, index: number) => (
                        <motion.div 
                        // left to right
                        // whileInView={{opacity: 1, x: 0}}
                        // initial={{opacity: 0, x: -100}} {Akash}
                        // transition={{duration: 0.5, delay: 0.5}}
                        key={index} className=" relative cursor-pointer group">
                            <div className="  relative max-h-[219px] overflow-hidden">
                                <Image className="rounded-[7px] object-cover max-h-[219px] w-full" src={item?.image} alt="Slider Image" width={390} height={219} />
                                <div className={`${oswald.className} text-[22px] font-semibold absolute top-0 left-[5%] bg-secondary p-2 uppercase max-w-[65px] text-white rounded-b-[7px] z-10 shadow-card-blue `}>
                                    01
                                    July
                                </div>
                                <div className=" z-[1] rounded-[7px] absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-all duration-300  bg-[#56c1cddd] flex items-center justify-center w-full h-full">
                                    <Link href={`/blog/${item?.slug}`} className="flex items-center justify-center gap-2 w-full h-full">
                                    <Plus className="w-[68px] h-[68px] text-white" /></Link>
                                </div>
                            </div>
                            <Link href={`/blog/${item?.slug}`} className={`${oswald.className} block text-[18px] font-semibold text-primary pt-3  `}>{item?.title}</Link>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
    )
}