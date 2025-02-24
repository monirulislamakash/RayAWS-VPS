'use client'

import {isMobile} from 'react-device-detect';
import { Oswald } from "next/font/google";
import Image from 'next/image'
import CustomButton from "@/components/common/Custom__Button";
import { motion } from "motion/react";
import Heading from "@/components/common/Heading";
// import Pentacle from "./test__pentagon";
// import PentacleMb from './test__mb_pentagon';
import dynamic from 'next/dynamic';

const Pentacle = dynamic(() => import('./test__pentagon'), {
  ssr: false,
});
const PentacleMb = dynamic(() => import('./test__mb_pentagon'), {
  ssr: false,
});



const oswald = Oswald({
    subsets: ['latin'],
    weight: '400'
})



export default function WhyChooseSection() {
    return (
        <div className={`py-[60px] bg-[#143277] ${oswald.className} relative overflow-hidden`} style={{
            backgroundImage: `url('/bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="container relative">
                <div className=" z-20  relative">
                    <Heading
                        label="Why Choose US"
                        desc={`We focus on quality, delivering high-converting leads and calls in multiple industries. Our data-driven strategies ensure you reach the right audience at the right time. We offer higher payouts to our Affiliates in the industry. With our trusted and expert affiliates, we promote success, growth, and scalability to your business.`}
                        headingStyle="text-white"
                        descStyle="text-white"
                    />
                </div>

                <motion.div
                    // bottom to up
                    // whileInView={{ opacity: 1, y: 0 }}
                    // initial={{ opacity: 0, y: 100 }} {Akash}
                    // transition={{ duration: 0.5, delay: 0.5 }}
                    className=" flex justify-center items-center flex-col relative">
                    {/* Main Logo in the Center */}

                    <div className=" w-full flex items-center justify-center  h-[400px] md:h-[600px]">
                        {/* <ChooseLogo className="w-full h-full md:w-[1439px] md:h-[1055px]" /> */}
                        {
                            isMobile ? <PentacleMb /> : <Pentacle />
                            // <PentacleMb />
                        }
                    </div>
                        
                    <div className="relative z-20 flex justify-center items-center pt-[60px] ">
                        <CustomButton
                            label="Learn more"
                            href="/about-us"
                            className={`slide_from_top ${oswald.className} font-[500] text-[16px] md:text-[22px] py-[8px] md:py-[16px] px-[14px] md:px-[22px] rounded-[4px] uppercase`}
                        />
                    </div>

                </motion.div>
            </div>

            {/* Decorative Lights */}
            <div className="absolute bottom-[0%] md:bottom-[10%] left-0 z-20 ">
                <Image src="/images/services/L Light.svg" className="object-contain w-full h-full " width={314} height={382} alt="logo" />
            </div>
            <div className="absolute md:top-[30%] top-[0%] right-0 z-20">
                <Image src="/images/services/R Light.svg" className="object-contain w-full h-full " width={314} height={382} alt="logo" />
            </div>
        </div>
    )
}


