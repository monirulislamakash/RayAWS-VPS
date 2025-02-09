import { Oswald } from "next/font/google";
import Image from 'next/image';

import Heading from "@/components/common/Heading";
import ServicesCard from './Services__Card';
import AnimateContainer from "./Animate_Container";

const oswald = Oswald({
    subsets: ['latin'],
    weight: '400'
})

// const servicesData = [
//     {
//         name: 'PAY PER CALL',
//         icon: '/images/services/phone1.svg',
//         benifits: [
//             {
//                 title: 'Warm Transfer'
//             },
//             {
//                 title: 'Outbound Calls'
//             }
//         ]
//     },
//     {
//         name: 'LEAD GENERATION',
//         icon: '/images/services/lead.svg',
//         benifits: [
//             {
//                 title: 'Registration'
//             },
//             {
//                 title: 'Full-Form Exclusive'
//             }
//         ]
//     },
//     {
//         name: 'AFFILIATE NETWORK',
//         icon: '/images/services/network.svg',
//         benifits: [
//             {
//                 title: 'Exclusive Offers'
//             },
//             {
//                 title: 'High-Payouts'
//             }
//         ]
//     },
// ]

interface ServiceCard {
    id: number;
}

export interface IHome_Card_SectionData {
    id: number;
    created_at: string;
    heading: string;
    sub_heading: string;
    cards: ServiceCard[];
    page: string;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ServicesSection({ data }: { data: any }) {
    return (
        <div className={`section ${oswald.className} relative `}>
            <div className="container">
                <Heading
                    label="What We Do"
                    desc="Ray Advertising stands out because of its ability to assist Advertisers in more than 250+ verticals
in reaching their intended audiences with effective digital advertising campaigns."
                />
                {/* <AnimateContainer direction="downToUp"> {Akash}*/}
                    <div className="services_wraper grid grid-cols-1 md:grid-cols-3 gap-5 pt-[60px]">
                    {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        data?.map((item: any, idx: number) => (
                            <ServicesCard key={idx} id={item.id} />
                            ))
                        }
                    </div>
                {/* </AnimateContainer> */}
            </div>

            {/* left top */}
            <div className=" absolute top-0 left-0">
                {/* <Image src="/images/services/left-top.png" className="object-contain" width={67} height={51} alt="" />{Akash} */}
            </div>
            {/* left bottom */}
            <div className=" absolute bottom-0 left-0">
                {/* <Image src="/images/services/left-bottom.png" className="object-contain" width={67} height={51} alt="" />{Akash} */}
            </div>
            {/* Right top */}
            <div className=" absolute top-0 right-0">
                {/* <Image src="/images/services/right-top.png" className="object-contain" width={67} height={51} alt="" />{Akash} */}
            </div>
        </div>
    )
}