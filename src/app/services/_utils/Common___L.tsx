import CustomButton from "@/components/common/Custom__Button";
import { PhoneIcon } from "@/components/Icons";
import { getSectionData } from "@/utils/api";
import { Oswald } from "next/font/google";
import Image from "next/image";

const oswald = Oswald({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Common___L({ item }: { item: any }) {
    
    const {sectionData} = await getSectionData({sectionName: 'cards', isSingle: true, id: Number(item.id)})


    return (
        <div className="section relative">
            <div className="container md:flex justify-between items-start gap-5 lg:gap-[100px] relative z-10  ">
                <div className="w-full md:w-[50%] lg:w-[45%] flex justify-start  pt-5 md:pt-0" >
                    <div className=" relative border p-[30px] w-ful l max-w-[480px] rounded-[7px] overflow-hidden ">
                        {
                            sectionData?.image && (
                                <div className="icon_wraper">
                                    <Image src={sectionData?.image} className="object-contain" width={430} height={286} alt="" />
                                </div>
                            )
                        }
                        <h3 className="text-[22px] font-[600] uppercase text-heading pt-5">we provide</h3>
                        <ul className={` py-[15px]`}>
                            {
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                sectionData?.lists?.map((item: any, idx: any) => (
                                    <li key={idx} className="flex items-center gap-2 text-secondary pb-[5px]">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12ZM8.64844 4.89844L5.64844 7.89844C5.42812 8.11875 5.07188 8.11875 4.85391 7.89844L3.35391 6.39844C3.13359 6.17812 3.13359 5.82188 3.35391 5.60391C3.57422 5.38594 3.93047 5.38359 4.14844 5.60391L5.25 6.70547L7.85156 4.10156C8.07187 3.88125 8.42812 3.88125 8.64609 4.10156C8.86406 4.32188 8.86641 4.67812 8.64609 4.89609L8.64844 4.89844Z" fill="#56C0CC" />
                                        </svg>

                                        <span className="text-[18px] font-[500px]">{item?.name}</span>
                                    </li>
                                ))
                            }

                        </ul>

                        <CustomButton
                            label="Call Us Now"
                            href={`tel:${sectionData?.call_now}`}
                            icon={<PhoneIcon className='w-[20px] h-[20px] group-hover:fill-white fill-primary' />}
                            className={` group w-[165px] h-[40px] text-heading text-[16px] font-[500] py-[7px] px-[10px] rounded-full bg-[#F2F2F2] hover:bg-secondary hover:text-white`}
                            iconRight={true}
                        />


                        {/* Botom */}
                        <div className=" absolute bottom-0 right-0 ">
                            <Image src="/images/services/cardDown.png" className="object-contain" width={85} height={112} alt="" />
                        </div>

                    </div>
                </div>
                <div className="w-full md:w-[50%] lg:w-[55%] pt-5 md:pt-0">
                    <h2 className={`${oswald.className} text-[28px] md:text-[38px] font-semibold text-primary phone_text_center`}>
                        {sectionData?.title}
                    </h2>
                    <div className="text-[16px] md:text-[18px] font-normal pt-4 text-text_color">
                        <div className=" leading-[28px] md:leading-[32px] space-y-4 phone_text_justify" dangerouslySetInnerHTML={{ __html: `${sectionData?.description}` }} />
                    </div>
                </div>

            </div>
            {/* left bottom */}
            <div className=" absolute top-0 left-0">
                {/* <Image src="/images/services/left-bottom.png" className="object-contain" width={67} height={51} alt="" />{Akash} */}
            </div>
            {/* left bottom */}
            <div className=" absolute top-[25%] right-0">
                {/* <Image src="/images/services/left-bottom.png" className="object-contain rotate-180" width={67} height={51} alt="" />{akash} */}
            </div>
            {/* Right top */}

        </div>
    )
}
