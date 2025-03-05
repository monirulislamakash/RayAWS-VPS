'use client'
import React from 'react'
import Image from 'next/image'
import s1p1 from '@/../public/images/partculer_serves_images/serviceS1p1.jpg'
import s1p2 from '@/../public/images/partculer_serves_images/serviceS1p2.jpg'
import s1p3 from '@/../public/images/partculer_serves_images/serviceS1p3.jpg'
import s2p1 from '@/../public/images/partculer_serves_images/serviceS2p1.jpg'
import s2p2 from '@/../public/images/partculer_serves_images/serviceS2p2.jpg'
import s2p3 from '@/../public/images/partculer_serves_images/serviceS2p3.jpg'

export default function Our_service() {
    return (
        <div className='pay_par_call_our_service'>
            <h1>Our Verticals</h1>
            <p>Affiliates display ads with a unique phone number, and when a customer calls, they are instantly connected to your sales team or call center.</p>
            <div className='pay_par_call_our_service_waper1'>
                <Image className='Pay_par_call_our_service_images' src={s1p2} alt={''} />
                <Image className='Pay_par_call_our_service_images' src={s1p1} alt={''} />
                <Image className='Pay_par_call_our_service_images' src={s1p3} alt={''} />
            </div>
            <div className='pay_par_call_our_service_waper2'>
                <Image className='Pay_par_call_our_service_images' src={s2p3} alt={''} />
                <Image className='Pay_par_call_our_service_images' src={s2p2} alt={''} />
                <Image className='Pay_par_call_our_service_images' src={s2p1} alt={''} />
            </div>
        </div>
    )
}
