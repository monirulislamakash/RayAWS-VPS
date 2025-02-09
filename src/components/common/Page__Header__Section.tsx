'use client'

import { motion } from "motion/react";
import { Oswald } from 'next/font/google'
import Custom__Button from './Custom__Button'

const oswald = Oswald({
    subsets: ['latin'],
    weight: ['400', '500', '600']
})




export default function PageHeaderSection({ title, description, bg, data, isButton, link }: { isButton?: boolean, title: string, description?: string, bg: string, data?: { icon: React.ReactNode, title: string }[], link?: string }) {
    // Memoize the background style to prevent unnecessary recalculations
    const backgroundStyle = { backgroundImage: `url(${bg})` };

    return (
        <div className='relative bg-cover bg-center text-center py-[60px] md:py-[80px] bg-primary' 
             style={backgroundStyle}>
            <motion.div
                // Optimize animation performance
                initial={{ opacity: 0, y: -50 }} // Reduced initial offset for smoother animation
                whileInView={{ opacity: 1, y: 0 }} // Use whileInView instead of animate for better performance
                viewport={{ once: true }} // Ensure animation only plays once
                transition={{ duration: 0.3 }} // Reduced duration for better performance
                className='relative z-10'>
                <h1 className={`text-[32px] md:text-[48px] font-semibold uppercase text-white ${oswald.className}`}>
                    {title}
                    <span className='block h-[4px] bg-secondary w-[49px] mx-auto'></span>
                </h1>
                {data && (
                    <>
                        <ul className='flex items-center justify-center gap-4 pt-4 pb-[40px]'>
                            {data.map((item, index) => (
                                <motion.li
                                    key={`${index}-${item.title}`} // Improved key for better reconciliation
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className='flex items-center gap-1'
                                >
                                    <span>{item.icon}</span>
                                    <span className='text-white text-[16px] font-medium'>{item.title}</span>
                                </motion.li>
                            ))}
                        </ul>
                        {isButton && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                            >
                                <Custom__Button 
                                    href={link || '#'} 
                                    label="Apply Now" 
                                    className={`${oswald.className} px-[24px] py-[8px] text-[16px] font-medium rounded-lg uppercase italic bg-secondary text-white hover:bg-white hover:text-secondary`} 
                                />
                            </motion.div>
                        )}
                    </>
                )}
                {
                    description && (
                        <p className='text-[16px] md:text-[18px] text-secondary uppercase font-normal pt-4'>
                            {description}
                        </p>
                    )
                }
            </motion.div>
            {
                data &&
                <div className='z-[5] absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-primary to-[#1b4e84d5]'></div>
            }
        </div>
    )
}