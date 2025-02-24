'use client'
import React from 'react'
import Image from 'next/image'
import bg from '@/../public/images/partculer_serves_images/Service_herro_section_bg_img.png'
import carv_img from '@/../public/images/partculer_serves_images/Service_herro_section_carv_img.png'
import hero_right_images from "@/../public/images/partculer_serves_images/heroRightImage.png"
import { motion } from "motion/react";

import CustomButton from '@/components/common/Custom__Button'


export default function Service_herro_section() {
    return (
        <>
            <div className='Service_herro_section'>
                <Image className="Service_herro_section_bg_img" src={bg} alt={''} />
                <Image className="Service_herro_section_carv_img" src={carv_img} alt={''} />
                <div className='Service_herro_section_content container'>
                    <div className='Service_herro_section_content_left'>
                        <h1>PAY PER CALL</h1>
                        <p><span>Real Customers. Real Conversations. Real Revenue.</span></p>
                        <p className='mt-5 mb-5'>
                            At Ray Advertising, our Pay-Per-Call service offers a highly effective performance-based marketing solution. Unlike traditional lead generation, you only pay for qualified calls from potential customers who are ready to engage with your business. Here’s how it works: affiliates display ads with a unique phone number, and when a customer calls, they are instantly connected to your sales team or call center.
                        </p>
                        <motion.div
                        // left to right    
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex items-center gap-5 mb-[50px]"
                        >
                        <CustomButton
                            label="Publisher"
                            href="https://rayadvertising.everflowclient.io/affiliate/signup"
                            className="slide_from_top text-[16px] md:text-[22px] py-[8px] md:py-[16px] px-[14px] md:px-[22px] rounded-[4px] uppercase m-[0px]"
                        />
                        <CustomButton
                            label="Advertiser"
                            href="https://rayadvertising.everflowclient.io/advertiser/signup"
                            className="slide_from_top text-[16px] md:text-[22px] bg-secondary text-white py-[8px] md:py-[16px] px-[14px] md:px-[22px] rounded-[4px] uppercase"
                        />
                    </motion.div>
                    </div>
                    <div className='Service_herro_section_content_right'>
                        <Image className="Service_herro_section_right_img" src={hero_right_images} alt={''} />
                    </div>
                </div>
            </div>
        </>
    )
}
