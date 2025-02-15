'use client'
// const bg = "/images/about-us/special.png";
import { Oswald } from 'next/font/google'
import Image from 'next/image'
import { motion } from "motion/react";
const oswald = Oswald({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

const specialty = [
    {
        icon: '/images/special/image 8.svg',
        title: 'EXCLUSIVE INVENTORY',
        text: 'Ray Advertising offers products and services that are only available to a select group of affiliates, rather than being available to all members of the network. These offers have higher payouts or better terms than non-exclusive offers, and they are in high demand due to their exclusivity. Exclusive inventory is beneficial for affiliates, allowing top-performing affiliates to earn more money.'
    },
    {
        icon: '/images/special/image 9.svg',
        title: 'FIRST-PARTY DATA ADVANTAGE',
        text: 'Affiliates can gain access to first-party data about their customers when they run exclusive offers through Ray Advertising’s affiliate network. This data can include information such as demographics, purchasing history, browsing behavior, etc. Our Affiliates can optimize campaigns, improve targeting, and increase the effectiveness of offers.'
    },
    {
        icon: '/images/special/image 11.svg',
        title: 'FRAUD PREVENTION',
        text: 'Fraud prevention is an important aspect of Ray Advertising, as it can help to protect our network and our affiliates from financial losses and damage to their reputations. To prevent fraud, we implement strict guidelines for affiliate approval and regularly monitor affiliate activity. Also, we use fraud detection software and conduct regular audits to identify any potential fraud and take appropriate action.'
    },
    {
        icon: '/images/special/image 12.svg',
        title: '24/7 SUPPORT',
        text: 'Ray Advertising provides 24/7 support to ensure that their affiliates have access to assistance whenever they need it. Also, our affiliates may have questions or need assistance with setting up campaigns or optimizing their performance, and our 24/7 support can provide guidance and advice to help them succeed.'
    },
    {
        icon: '/images/special/image 13.svg',
        title: 'Media Buying Team',
        text: 'Ray Advertising provides 24/7 support to ensure that their affiliates have access to assistance whenever they need it. Also, our affiliates may have questions or need assistance with setting up campaigns or optimizing their performance, and our 24/7 support can provide guidance and advice to help them succeed.'
    },
]

export default function Special__Section() {
    return (
        <div className="About_Special__Section section relative bg-cover bg-center bg-[#F2F2F2]">
            <div className="container ">
                <h2 className={`${oswald.className} text-[38px] md:text-[48px] font-semibold text-primary text-center uppercase pb-[40px]`}>
                    Our Specialty
                </h2>
                <motion.div 
                // left to right
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 0.5, delay: 0.5}}
                className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {
                        specialty?.map((item, idx) => (
                            <div key={idx} className=" bg-white rounded-[7px] p-[30px] shadow-card-blue hover:shadow-card-blue-hover transition-all duration-300 cursor-pointer">
                                <h3 className={`${oswald.className} text-[18px] md:text-[22px] font-semibold text-primary flex items-center gap-3`}>
                                    <span className="w-[54px] h-[54px] rounded-full border border-[#EDEDED] flex items-center justify-center ">
                                        <Image className=' rounded-full' src={item?.icon} alt={item?.title} width={42} height={42} />
                                    </span>
                                    <span>
                                        {item?.title}
                                    </span>
                                </h3>
                                <p className=' leading-[28px] text-base font-normal text-text_color pt-2 '>
                                    {item.text}
                                </p>
                            </div>
                        ))
                    }

                </motion.div>
            </div>
        </div>
    )
}