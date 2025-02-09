import CustomButton from "@/components/common/Custom__Button";
import { getSectionData } from "@/utils/api";
import { Poppins } from "next/font/google"
import Image from "next/image";

const poppins = Poppins({
    subsets: ['latin'],
    weight: '400'
})
interface Benefit {
    name: string; // Specify other properties if needed
}
interface ServiceCard {
    name: string;
    icon: string;
    benifits: Benefit[];
}


export default async function ServicesCard({ id }: { id: number }) {
    const { sectionData } = await getSectionData({ sectionName: 'cards', isSingle: true, id })
    const item: ServiceCard = {
        name: sectionData?.title,
        icon: sectionData?.icon,
        benifits: sectionData?.lists
    }
    // console.log(sectionData)
    return (
        <div className="bg-white cursor-pointer shadow-card-blue  hover:shadow-card-blue-hover transition-all duration-500 rounded-[7px] overflow-hidden relative border flex flex-col  items-center py-[40px]">
            <div className="icon_wraper">
                <Image src={item.icon} className="object-contain" width={60} height={60} alt={item.name} />
            </div>
            <h3 className="text-[22px] font-[600] uppercase text-heading ">{item.name}</h3>
            <ul className={`${poppins.className} py-[15px]`}>
                {
                    item?.benifits?.map((item, idx) => (
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
                label="Learn More"
                href="/services"
                icon={
                    <svg className={`w-[18px] h-[18px] transition-transform duration-300 group-hover:fill-white fill-primary`} viewBox="0 0 22 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM1 9H21V7H1V9Z" />
                        </svg>
                }
                className={`slide_from_left ${poppins.className} group inline-flex items-center justify-center gap-[6px] h-[40px] text-heading text-[16px] font-[500] py-[7px] px-4 rounded-full`}
                
            />


            {/* Botom */}
            {/* <div className=" absolute bottom-0 right-0">
                <Image src="/images/services/cardDown.png" className="object-contain" width={85} height={112} alt="" />
            </div> */}

        </div>
    )
}