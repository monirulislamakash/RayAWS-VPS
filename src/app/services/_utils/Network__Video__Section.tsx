'use client'
import { Oswald } from 'next/font/google'
import { motion } from 'framer-motion'
const oswald = Oswald({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })



export default function NetworkVideoSection() {

    
    return (
        <div className="bg-primary section relative bg-top bg-no-repeat " style={{ backgroundImage: `url(/images/network-bg.png)` }}>
            <div className="container relative z-10">
                <h2 className={`${oswald.className} text-[38px] md:text-[48px] font-semibold text-white text-center uppercase pb-[20px]`}>
                    Affiliate Network
                </h2>

                {/* <div className='video_wraper md:h-[600px] h-[300px] w-full flex items-center justify-center bg-[#274E8E]'>
                    <PlayIcon className='w-[50px] h-[50px] md:w-[75px] md:h-[75px] cursor-pointer' />
                </div> */}

                <motion.p 
                // bottom to top
                // whileInView={{ opacity: 1, y: 0 }}
                // initial={{ opacity: 0, y: 100 }} {Akash}
                // transition={{ duration: 0.5, delay: 0.5 }}
                className='text-white text-[16px] md:text-[18px] font-normal text-left md:text-justify leading-[32px] pt-10 phone_text_justify'>
                    {
                        `Affiliating is a form of online marketing in which an affiliate earns a commission for referring customers to a merchant's website. Similar to Ray Advertising, an affiliate network mediates between advertisers and affiliates so that both can profit from the relationship. In affiliate marketing, an advertiser pays a commission to an affiliate for each customer or visitor that is directed to the advertiser's website as a result of the affiliate's marketing efforts. This could be in the form of a banner ad, text link, or email promotion. Ray Advertising provides advertisers with access to a wide range of affiliates who are willing to promote their products or services, while providing affiliates with access to advertisers offering products or services that they can promote. We strongly believe affiliate marketing is a great way for advertisers to increase their sales and reach new customers while providing affiliates with an additional source of income. Also, the process is very straight-forward since affiliates only earn a commission when their referred consumer makes a purchase or takes another desired action, which makes affiliate marketing appealing to both advertisers and affiliates because it allows both parties to profit financially from the relationship.`
                    }
                </motion.p>
            </div>
        </div>
    )
}