'use client'
import Heading from "@/components/common/Heading";
import Marquee from "@/components/ui/marquee";
import { motion } from "motion/react";
import Image from "next/image";


export default function BrandingSection({data, label, sideImage}: {data: {url: string}[]; label: string;sideImage?: boolean}) {

    return (
        <section className={` section relative ${sideImage && ' shadow-lg'}`}>
            <Heading
                label={label}
            />
            <motion.div 
                // bottom to up
                // whileInView={{ opacity: 1, y: 0 }}
                // initial={{ opacity: 0, y: 100 }} {Akash}
                // transition={{ duration: 0.5, delay: 0.5 }}
                className="pt-5 relative flex w-full flex-col items-center justify-center overflow-hidden  bg-background">
                <Marquee  pauseOnHover className="[--duration:20s]  ">
                    {data?.map((item, idx) => (
                        <div className=" mx-0 md:mx-10 " key={idx}>
                            <Image className=" object-contain w-[120px] md:w-[178px] h-[50px] px-2 dark:brightness-0 dark:invert" src={item?.url} alt="client" width={179} height={50} />
                        </div>
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </motion.div>

            {/*  */}
            {
                sideImage && 
                <Image className=" object-contain absolute left-0 top-0" src="/images/brand.png" width={177} height={118} alt="brand" />
            }
        </section>
    );
}