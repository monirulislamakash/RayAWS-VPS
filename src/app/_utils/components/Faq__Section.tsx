'use client'
import Heading from "@/components/common/Heading";
import { useState } from "react";
import { ChevronDown } from 'lucide-react'
import { Oswald } from "next/font/google";
import { motion } from "motion/react";

const oswald = Oswald({
    subsets: ['latin'],
    weight: '400'
})


// const faqData = [
//     {
//         id: 1,
//         question: 'ARE THE LEADS RECEIVED EXCLUSIVE?',
//         answer: `
// Our leads are like precious gems – never shared and always unique! We value quality over quantity, so rest assured that you'll get the most accurate and up-to-date info on your leads. We do our homework too, double-checking every new lead against our comprehensive database of previous ones. We keep this database for at least 30 days, making sure no sneaky duplicates slip in. Beware of other companies that sell the same leads to multiple buyers at higher prices. With us, you'll get your money's worth!`
//     },
//     {
//         id: 2,
//         question: 'ARE ALL LEADS RECEIVED IN REAL TIME?',
//             answer: `
//     Our leads are like precious gems - never shared and always unique! We value quality over quantity, so rest assured that you'll get the most accurate and up-to-date info on your leads. We do our homework too, double-checking every new lead against our comprehensive database of previous ones. We keep this database for at least 30 days, making sure no sneaky duplicates slip in. Beware of other companies that sell the same leads to multiple buyers at higher prices. With us, you'll get your money's worth!`
//     },
//     {
//         id: 3,
//         question: 'IS THERE ANY VALIDATION OR QUALITY CONTROL?',
//         answer: `
//     Our leads are like precious gems - never shared and always unique! We value quality over quantity, so rest assured that you'll get the most accurate and up-to-date info on your leads. We do our homework too, double-checking every new lead against our comprehensive database of previous ones. We keep this database for at least 30 days, making sure no sneaky duplicates slip in. Beware of other companies that sell the same leads to multiple buyers at higher prices. With us, you'll get your money's worth!`
//     },
//     {
//         id: 4,
//         question: 'HOW ARE LEADS DELIVERED?',
//         answer: `
//     Our leads are like precious gems - never shared and always unique! We value quality over quantity, so rest assured that you'll get the most accurate and up-to-date info on your leads. We do our homework too, double-checking every new lead against our comprehensive database of previous ones. We keep this database for at least 30 days, making sure no sneaky duplicates slip in. Beware of other companies that sell the same leads to multiple buyers at higher prices. With us, you'll get your money's worth!`
//     },
// ]

interface IFaq {
    id: number;
    question: string;
    answer: string;
}

export default function FaqSection({ data }: { data: IFaq[] }) {
    const [openId, setOpenId] = useState<number | null>(null)

    const toggleQuestion = (id: number) => {
        setOpenId(openId === id ? null : id)
    }

    return (
        <div className="max-w-[835px] mx-auto section ">
            <Heading label="FAQ" desc="Questions and Answers" />
            <motion.div 
                // left to right
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 0.5, delay: 0.5}}
            className="w-full p-4 space-y-2 md:space-y-4">
                {data?.map((faq, idx) => (
                    <div
                        key={faq.id}
                        className={`${openId === faq.id ? 'bg-primary text-white' : 'bg-white'}  rounded-lg shadow-sm overflow-hidden `}
                    >
                        {/* openId === faq.id */}
                        <button
                            onClick={() => toggleQuestion(faq.id)}
                            className={`w-full text-left px-6 py-2 md:py-4 flex justify-between items-center hover:bg-primary group transition-all duration-400  ${openId === faq.id ? 'border-b border-b-[#002D62]' : 'border-b border-b-transparent'}`}
                        >
                            <span className={` ${openId === faq.id ? 'text-white' : 'text-primary'} group-hover:text-white font-[500] text-[16px] md:text-[22px] ${oswald.className}`}>
                                {idx + 1}. {faq.question}
                            </span>
                            <span className=" w-[24px] h-[24px] rounded-[4px] bg-secondary flex justify-center items-center">
                                <ChevronDown
                                    strokeWidth={2}
                                    className={`text-white w-[12px] h-[12px] transition-transform duration-300 ${openId === faq.id ? 'transform rotate-180' : ''
                                        }`}
                                />
                            </span>
                        </button>
                        {openId === faq.id && (
                            <div className=" pb-6 transition-all duration-500 px-6 py-2 text-[16px] md:text-[16px] font-[400]">
                                <p className={`${openId === faq.id ? 'text-white' : 'text-text_color'} leading-[29px]`} dangerouslySetInnerHTML={{ __html: faq.answer }} />
                            </div>
                        )}
                    </div>
                ))}
            </motion.div>
        </div>
    )
}