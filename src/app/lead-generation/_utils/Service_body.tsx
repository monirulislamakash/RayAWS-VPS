'use client'
import React from 'react'
import Image from 'next/image'
import step1 from '@/../public/images/partculer_serves_images/step1lg.png'
import step2 from '@/../public/images/partculer_serves_images/step2lg.png'
import CustomButton from '@/components/common/Custom__Button'
import { motion } from 'framer-motion'
import check from '@/../public/images/partculer_serves_images/check-circle.png'
import callicon from '@/../public/images/partculer_serves_images/phone-call.png'
import callIcon from '@/../public/images/partculer_serves_images/lg-icon.png'
import callIcon1 from '@/../public/images/partculer_serves_images/lg-icon1.png'


export default function Service_body() {
    return (
        <div className='Service_body_Waper'>
            <div className='Service_ste1'>
                <div className='Service_ste1_Images'>
                    <Image src={step1} alt={''} />
                </div>
                <div className='Service_ste1_content'>
                    <h1>We generate leads across multiple industries</h1>
                    <p className='mt-5 mb-5 Service_ste1_content_text_phone'>
                        What sets Ray Advertising apart is our focus on quality. Our network of experienced affiliates uses tested and proven strategies to capture genuine interest, ensuring every lead is primed for conversion. By emphasizing lead quality over quantity, we help your business grow efficiently while optimizing your marketing spend.<br /><br />
                        With our deep industry knowledge and commitment to success, Ray Advertising provides the tools you need to generate leads that matter, helping you build a sustainable, long-term growth strategy.
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

                    <h2><Image className='callIcon mt-5 mb-5' src={callIcon} alt={''} /> Registration</h2>

                    <p className='Service_ste1_content_text_phone'>Inbound with a unique phone number, and when a customer calls, they are instantly connected to your sales team.</p>

                    <h2><Image className='callIcon mt-5 mb-5' src={callIcon1} alt={''} /> Full-Form Exclusive </h2>

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
