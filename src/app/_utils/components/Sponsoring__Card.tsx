import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { getSectionData } from "@/utils/api"
import { Oswald } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const oswald = Oswald({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})

interface ISponsoringCard {
    id: number;
    icon: string;
    title: string;
    sub_title: string;
    button_link: string;
}


export default async function SponsoringCard({ id }: { id: number }) {
    const { sectionData } = await getSectionData({ sectionName: 'cards', isSingle: true, id })
    const item: ISponsoringCard = {
        id: sectionData?.id,
        icon: sectionData?.icon,
        title: sectionData?.title,
        sub_title: sectionData?.sub_title,
        button_link: sectionData?.button_link
    }

    return (
        <Card className=" hover:bg-white/20 transition-all duration-400 cursor-pointer bg-opacity-80 shadow-lg backdrop-blur-lg bg-white/10 gradient-border text-white h-full">
            <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                    <Avatar className="w-[40px] h-[40px] bg-white/20">
                        {item?.icon && <Image src={`${item?.icon}`} width={40} height={40} alt="" className="w-full h-full object-contain" />}
                        <AvatarFallback className="text-white/70">N</AvatarFallback>
                    </Avatar>
                    <h3 className={`${oswald.className} font-normal text-[20px]`}>{item?.title}</h3>
                </div>

                <div className="space-y-5">

                    <p className="text-base text-white font-normal">
                        {item?.sub_title}
                    </p>

                    <Link target="_blank" rel="noopener"  href={`${item?.button_link}`} className="slide_from_left group px-5 inline-flex items-center justify-center gap-[6px] rounded-full h-[45px] text-[16px] font-medium">
                        <span className="pr-2 ">Learn More</span>

                        <svg className={`w-[18px] h-[18px] transition-transform duration-300 group-hover:fill-white fill-primary`} viewBox="0 0 22 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM1 9H21V7H1V9Z" />
                        </svg>
                    </Link>
                    {/* <CustomButton isIcon={true} label="Learn More" className="" icon={true} /> */}
                </div>
            </CardContent>
        </Card>
    )
}

