'use client'
import Image from "next/image";
import { Oswald } from "next/font/google";
import Link from "next/link";
const oswald = Oswald({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});
interface JobItem {
    icon: string;
    title: string;
    positions: number;
    location: string;
    type: string;
    slug: string;
    name: string;
    vacancies: number;
    job_type: string;
    remote: string;
}

export default function Job__Card({ item }: { item: JobItem }) {

    return (
        <div className="bg-white rounded-[7px] p-4 shadow-lg">
            <div className="flex  items-center gap-3 pb-5">
                <div className="bg-secondary rounded-full w-[40px] h-[40px] flex items-center justify-center">
                    <Image src={item?.icon || "/images/uiuxicon.png"} alt={item?.name} width={27} height={27} />
                </div>
                <div className={`${oswald.className}`}>
                    <h2 className={` uppercase text-primary text-[20px] font-medium `}>{item?.name}</h2>
                    <p className="text-base font-normal text-text_color">{item?.vacancies ? `${item?.vacancies} Positions  |` : ``}   {item?.remote ? `${item?.remote}  |` : ``}  {item?.job_type ? `${item?.job_type}` : ``}</p>
                </div>

            </div>
            <Link href={`/career/${item?.slug}`} className={`slide_from_left shadow-none text-base font-medium rounded-full px-3 h-[40px] inline-flex items-center justify-center gap-[6px]  hover:gap-[10px]`}>
                <span>View Details</span>
                {

                    <svg className={`w-[20px] h-[20px] transition-transform duration-300 hover:translate-x-2`} viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM1 9H21V7H1V9Z" fill="#10387A" />
                    </svg>
                }


            </Link>
        </div>
    )
}

