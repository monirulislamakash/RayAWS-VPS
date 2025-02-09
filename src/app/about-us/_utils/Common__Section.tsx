"use client"
import { Oswald } from "next/font/google";
import Image from "next/image";
import { motion } from "motion/react";
const oswald = Oswald({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Common__Section({ data }: { data: any }) {


    return (
        <>

            {
                // order by id  

                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                data?.sort((a: any, b: any) => a?.id - b?.id)?.map((item: any, index: number) => (
                    index === 0 ? (
                        <motion.div 
                        // right to left
                        // whileInView={{opacity: 1, x: 0}}
                        // initial={{opacity: 0, x: 100}} {Akash}
                        // transition={{duration: 0.5, delay: 0.5}}
                        
                        key={index} className="section relative">
                            <div className="container md:flex justify-between items-center gap-5 lg:gap-[100px] relative z-10 ">
                                <div className="w-full md:w-[50%] lg:w-[45%]">
                                    <h2 className={`${oswald.className} text-[28px] md:text-[38px] font-semibold text-primary`}>
                                        {item?.heading}
                                    </h2>
                                    <div className="text-[16px] md:text-[18px] font-normal pt-4 text-text_color">
                                        <p className=" leading-[28px] md:leading-[32px]">
                                            {item?.description}

                                        </p>
                                        {/* <p className="pt-4 leading-[28px] md:leading-[32px]">
                                            Our {`company's`} mission is to build a reputation as one of the most important hubs for pay-per-call networks in the world, and we want to accomplish this by utilizing our portfolio of strategies to differentiate our offerings in the fields of lead generation and affiliate marketing.
                                        </p> */}
                                    </div>
                                </div>
                                <div className="w-full md:w-[50%] lg:w-[55%] flex justify-end  pt-5 md:pt-0" >
                                    {
                                        <Image className="rounded-[7px] " src={item?.image} alt="Our Mission" width={580} height={304} />
                                    }
                                </div>
                            </div>
                            {/* left top */}
                            <div className=" absolute top-[15%] left-0">
                                {/* <Image src="/images/services/left-top.png" className="object-contain" width={67} height={51} alt="" />{Akash} */}
                            </div>
                            {/* left bottom */}
                            {/* <div className=" absolute bottom-0 left-0">
                <Image src="/images/services/left-bottom.png" className="object-contain" width={67} height={51} alt="" />
            </div> */}
                            {/* Right top */}
                            <div className=" absolute top-[6%] right-0">
                                {/* <Image src="/images/services/right-top.png" className="object-contain" width={67} height={51} alt="" />{Akash} */}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div 
                        // left to right
                        // whileInView={{opacity: 1, x: 0}}
                        // initial={{opacity: 0, x: -100}} {Akash}
                        // transition={{duration: 0.5, delay: 0.5}}
                        key={index} className="section relative">
                            <div className="container md:flex justify-between items-center gap-5 lg:gap-[100px] relative z-10  ">
                                <div className="w-full md:w-[50%] lg:w-[55%] flex justify-start  pt-5 md:pt-0" >
                                    {
                                        <Image className="rounded-[7px] " src={item?.image} alt="Our Mission" width={580} height={304} />
                                    }
                                </div>
                                <div className="w-full md:w-[50%] lg:w-[45%]">
                                    <h2 className={`${oswald.className} text-[28px] md:text-[38px] font-semibold text-primary`}>
                                        {item?.heading}
                                    </h2>
                                    <div className="text-[16px] md:text-[18px] font-normal pt-4 text-text_color">
                                        <p className=" leading-[28px] md:leading-[32px]">
                                            {item?.description}

                                        </p>
                                    </div>
                                </div>

                            </div>
                            {/* left top */}
                            {/* <div className=" absolute top-[15%] left-0">
                            <Image src="/images/services/left-top.png" className="object-contain" width={67} height={51} alt="" />
                        </div> */}
                            {/* left bottom */}
                            <div className=" absolute bottom-0 right-0">
                                {/* <Image src="/images/services/left-bottom.png" className="object-contain rotate-180" width={67} height={51} alt="" />{Akash} */}
                            </div>
                            {/* Right top */}
                            <div className=" absolute top-[5%] right-[20%]">
                                {/* <Image src="/images/services/right-top.png" className="object-contain" width={67} height={51} alt="" />{Akash} */}
                            </div>
                        </motion.div>
                    )
                ))
            }



        </>
    )
}