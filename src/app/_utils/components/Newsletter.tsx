'use client'
import CustomButton from "@/components/common/Custom__Button";
import Heading from "@/components/common/Heading";
import Image from "next/image";
import { motion } from "motion/react";
export default function Newsletter() {
    return (
        <motion.div 
        // left to right
        // whileInView={{opacity: 1, x: 0}}
        // initial={{opacity: 0, x: -100}} {Akash}
        // transition={{duration: 0.5, delay: 0.5}}
        className=" py-[40px] px-[20px] md:px-[0px] md:py-[80px] mx-auto max-w-[100%]">
            <div className=" bg-primary rounded-[0px] py-[40px] relative overflow-hidden">
                <div className="flex flex-col items-center justify-center relative z-[2]">
                    <Heading label="Join US" headingStyle="text-white uppercase" descStyle="text-white" desc="Aims to be the final destination for our advertisers and affiliate partners." />
                    <div className="flex items-center gap-5 pt-[30px]">
                        <CustomButton
                            label="Publisher"
                            href="https://rayadvertising.everflowclient.io/affiliate/signup"
                            className="slide_from_top_color_reverch shadow text-[16px] md:text-[22px] py-[8px] md:py-[16px] px-[14px] md:px-[22px] rounded-[4px] uppercase"
                        />
                        <CustomButton
                            label="Advertiser"
                            href="https://rayadvertising.everflowclient.io/advertiser/signup"
                            className="slide_from_top_color_reverch shadow text-[16px] md:text-[22px] py-[8px] md:py-[16px] px-[14px] md:px-[22px] rounded-[4px] uppercase"
                        />
                    </div>
                </div>

                <div className="absolute top-0 right-0 z-[1] w-full h-full">
                    <Image className="object-cover w-full h-full" src="/images/newsletterbg.png" width={1000} height={800} alt="" />
                </div>
            </div>
        </motion.div>
    )
}