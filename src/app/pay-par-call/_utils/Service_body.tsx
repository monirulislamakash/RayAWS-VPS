'use client'
import React from 'react'
import Image from 'next/image'
import step1 from '@/../public/images/partculer_serves_images/step1.png'
import step2 from '@/../public/images/partculer_serves_images/step2.png'
import CustomButton from '@/components/common/Custom__Button'
import { motion } from 'framer-motion'
import check from '@/../public/images/partculer_serves_images/check-circle.png'
import callicon from '@/../public/images/partculer_serves_images/phone-call.png'
import callIcon from '@/../public/images/partculer_serves_images/call-Icon.png'

export default function Service_body() {
    return (
        <div className='Service_body_Waper'>
            <div className='Service_ste1'>
                <div className='Service_ste1_Images'>
                    <Image src={step1} alt={''} />
                </div>
                <div className='Service_ste1_content'>
                    <h1>Outcome-based call<br />generation</h1>
                    <ul className='mt-5 mb-5'>
                        <li><Image className='checkBox' src={check} alt={''} /> Optimize For High-Intent, Qualified Callers</li>
                        <li><Image className='checkBox' src={check} alt={''} /> Fully Integrated with Ray Advertising</li>
                        <li><Image className='checkBox' src={check} alt={''} /> 24/7 In-House Compliance And Brand Safety</li>
                        <li><Image className='checkBox' src={check} alt={''} /> Fully Integrated with Ray Advertising</li>
                        <li><Image className='checkBox' src={check} alt={''} /> Fully Integrated with Ray Advertising</li>
                    </ul>
                    <div className='Service_ste1_content_button'>
                        <Image className='checkBox' src={callicon} alt={''} />
                        Call Us Now
                    </div>
                </div>
            </div>
            <div className='Service_ste2'>
                <div className='Service_ste1_content'>
                    <h1>What we provide</h1>

                    <h2><Image className='callIcon mt-5 mb-5' src={callIcon} alt={''}/> Inbound Calls</h2>
                    
                    <p className='Service_ste1_content_text_phone'>Inbound with a unique phone number, and when a customer calls, they are instantly connected to your sales team.</p>
                    
                    <h2><Image className='callIcon mt-5 mb-5' src={callIcon} alt={''}/> Outbound Calls</h2>
                    
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
