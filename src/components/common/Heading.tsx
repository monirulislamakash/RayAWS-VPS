'use client'
import { motion } from "motion/react";
import { Oswald, Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600']
})
const oswald = Oswald({
    subsets: ['latin'],
    weight: ['400', '500', '600']
})

export default function Heading({ label, desc, headingStyle, descStyle }: { descStyle?: string; headingStyle?: string; label: string; desc?: string; }) {
    return (
        <motion.div
            // initial={{ opacity: 0, translateY: 80 }}
            // whileInView={{ opacity: 1, translateY: 0 }} {Akash}
            // viewport={{ once: true, amount: 0.5 }}
            // transition={{ duration: 0.8, ease: "easeOut" }}


            className={` heading_wraper text-center max-w-[1000px] mx-auto`}>
            <h2 className={`${headingStyle ? headingStyle : 'text-heading'}  text-[32px] md:text-[48px] font-[600] pb-[8px] md:pb-4 uppercase ${oswald.className}`}>{label}</h2>
            {
                desc &&
                <p className={`${poppins.className} text-[16px] md:text-[18px] font-[400] ${descStyle ? descStyle : 'text-text_color '}`} dangerouslySetInnerHTML={{ __html: desc }} />
            }

        </motion.div>
    )
}