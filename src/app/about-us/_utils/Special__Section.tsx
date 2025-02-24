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
        text: 'Exclusive Inventory’ is one of our best specialties and what makes it so unique? It actually comprises extraordinary offers like High-Payout Campaigns, Limited-Edition Products, and Premium Services. The inventory is only accessible to the selected group of affiliates depending upon their performance analysis and commitments to the business. These exclusive deals, such as Early Access Offers and Bonus Commission Plans have greater chances of earning as they are meticulously designed for targeted performance-based marketing strategy. So, if you’re looking for higher payouts and unique opportunities, Exclusive Inventory is your golden ticket! [Note: I keep the highlighted terms for using those as anchor text/ Internal linking blogs/ other page , in help of ON page SEO ]'
    },
    {
        icon: '/images/special/image 9.svg',
        title: 'FIRST-PARTY DATA ADVANTAGE',
        text: "Marketing without proper data research is like shooting in the dark. At Ray Advertising, first-party data support to our affiliates is another specialty. We offer useful information about customers’ demographics, such as age, location, purchasing history, and browsing behavior, which are essential for crafting an effective marketing strategy. Affiliates are privileged with this data at first hand so that they can easily create highly targeted campaigns, ads to reach the right audience, with accuracy and relevance. For example, knowing that a customer frequently buys sports gear or browses tech products allows affiliates to design campaigns like Personalized Discounts or Product Recommendations. When marketing contents become more relevant, more people are likely to be engaged, click more and increase purchases. This ensures affiliates' earning generation through a sure-shot/proven data-driven strategy."
    },
    {
        icon: '/images/special/image 11.svg',
        title: 'FRAUD PREVENTION',
        text: "Security is one of the main pillars of successful business relationships between advertisers, publishers, or the broader B2B and B2C chains. At Ray Advertising, fraud prevention is a top priority because we cannot let anyone waste their money and time. So, in the selection process of our affiliates, we evaluate their online profile and legal documents with in depth research. When a publisher sends customer calls or leads in the PPC method, our Quality Assurance (QA) team analyzes each and every call using trusted software (Anura.io) and sorts the call recordings out, before sending them to the advertisers. We conduct a thorough cross-check to differentiate the fakes from the reals. If we find any counterfeit in our affiliate's performance, we take immediate action of suspending them if necessary. This rule ensures the integrity of our system and protects both advertisers and genuine affiliates."
    },
    {
        icon: '/images/special/image 12.svg',
        title: '24/7 SUPPORT',
        text: "Real business is 10% product and 90% communication. In this performance-based marketing modus operandi, support and communication between advertisers and affiliates are deeply interconnected. In our Affiliate network system, 24/7 support is our commitment to accelerating our affiliates' workflow and enhancing their performance.By providing real-time tips and guidance we support our affiliates about campaign optimization, audience targeting, or platform navigation and we also ensure that every step of their strategy is fully optimized. To help them succeed, we assign a dedicated Affiliate manager to each individual Affiliate for personalized support.Similarly, we also appoint an Account Manager for each advertiser or buyer as our dedicated support team is always available to assist them. In the vast ecosystem of advertisers and affiliates, seamless communication and reliable support are what set us apart."
    },
    {
        icon: '/images/special/image 13.svg',
        title: 'Media Buying Team',
        text: "It is known, “Success in advertising is built on two things: knowing your audience and being relentless in your support.” In this regard, our Media Buying Team plays a pivotal role in making the saying true. It is an exceptional part of both the advertisers and the affiliates. What’s tough about that? Well, this team not only provides 24/7 support and communication with affiliates but also ensures a balanced combination of several marketing departments in response to the chain of command, to run the entire workflow—which seems easier said than done. Along with technical assistance for setting up campaigns, the media buying team also works on brainstorming, analysis, and fixing the right strategy to guide in-house and outside affiliates, and this process is, in fact, a tough nut to crack."
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