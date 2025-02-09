'use client';

import Image from "next/image";
import { Oswald } from "next/font/google";
import { FacebookIcon, LinkedinIcon } from "@/components/Icons";
import Link from 'next/link'


const oswald = Oswald({
    subsets: ['latin'],
    weight: ['400', '500', '600']
})


// type teamCardType = {
//     item: {
//         id: number,
//         image: string,
//         name: string,
//         designation: string,
//         details?: string,
//         socials: {
//             linkedin: string,
//             facebook: string,
//         }
//     },
//     mode?: string;
// }



// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Team__Card({ item, mode }: any) {


    const imageSize = mode === "normal" ? 'w-[194px] h-[194]' : 'w-[260px] h-[260]';
    
    const socials = [
        {
            href: item?.facebook,
            icon: <FacebookIcon className="w-[40px] h-[40px]" />
        },
        {
            href: item?.linkedin,
            icon: <LinkedinIcon className="w-[40px] h-[40px]" />
        }


        
    ]

    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center justify-center pb-0 " >
                <Image draggable={false} src={`${item.image}`} alt={item.name} width={260} height={260} className={`${imageSize}object-contain`} />
            </div>
            <h3 className={`${mode === "normal" ? 'text-[20px]' : 'text-[24px]'}  font-medium ${oswald.className} text-primary`}>{item?.name}</h3>
            <h5 className={`${mode === "normal" ? 'text-[18px]' : 'text-[20px]'} font-normal ${oswald.className} text-secondary`}>{item?.designation}</h5>
            {
                item?.description &&
                <p className="text-base font-normal text-text_color max-w-[350px] text-center pt-4">
                    {item?.description}
                </p>
            }

            <ul className="flex items-center gap-[15px] pt-4">
                {
                    socials?.map((item, idx) => (
                        <li key={idx} className=" text-white">
                            <Link className="hover:text-secondary hover:underline transition-all duration-500 block uppercase text-[14px] font-[500] tracking-wide" href={`${item.href}`}>
                                {item.icon}
                            </Link>
                        </li>
                    ))
                }

            </ul>

        </div>
    )
}