'use client'
import React from 'react'
import Image from 'next/image'
import step1 from '@/../public/images/partculer_serves_images/step1af.png'
import step2 from '@/../public/images/partculer_serves_images/step2af.png'
import CustomButton from '@/components/common/Custom__Button'
import { motion } from 'framer-motion'
import check from '@/../public/images/partculer_serves_images/check-circle.png'
import callicon from '@/../public/images/partculer_serves_images/phone-call.png'
import callIcon from '@/../public/images/partculer_serves_images/af-icon.png'
import callIcon1 from '@/../public/images/partculer_serves_images/af-icon1.png'


export default function Service_body() {
    return (
        <div className='Service_body_Waper'>
            <div className='Service_ste1'>
                <div className='Service_ste1_Images'>
                    <Image src={step1} alt={''} />
                </div>
                <div className='Service_ste1_content'>
                    <h1>Creating Valuable<br/>Partnerships Between<br/>Advertisers & Publishers</h1>
                    <p className='mt-5 mb-5 Service_ste1_content_text_phone'>
                        This direct connection boosts conversion rates and ensures you’re speaking with genuinely interested prospects. For affiliates, it means higher payouts as they generate real-time, high-quality calls that drive immediate results. It’s a seamless and efficient way to grow your business through valuable customer interactions.
                    </p>
                    <div className='Service_ste1_content_button'>
                        <Image className='checkBox' src={callicon} alt={''} />
                        Call Us Now
                    </div>
                </div>
            </div>
            <div className='Service_ste2'>
                <div className='Service_ste1_content'>
                    <h1>What we provide</h1>

                    <h2><Image className='callIcon mt-5 mb-5' src={callIcon} alt={''}/> Exclusive Offers</h2>
                    
                    <p className='Service_ste1_content_text_phone'>Inbound with a unique phone number, and when a customer calls, they are instantly connected to your sales team.</p>
                    
                    <h2><Image className='callIcon mt-5 mb-5' src={callIcon1} alt={''}/> High-Payouts</h2>
                    
                    <p className='Service_ste1_content_text_phone'>Outbound with a unique phone number, and when a customer calls, they are instantly connected to your sales team.</p>
                    
                    <div className='Service_ste1_content_button mt-5'>
                        <Image className='checkBox' src={callicon} alt={''} />
                        Call Us Now
                    </div>
                </div>
                <div className='Service_ste1_Images'>
                    <Image src={step2} alt={''} />
                </div>
            </div>
        </div>
    )
}
