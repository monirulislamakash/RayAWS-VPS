'use client'
import Image from "next/image";
import Heading from "@/components/common/Heading";
import Team__Card from "./Team__Card";



// const leader = [
//     {
//         id: 0,
//         image: '/images/team/founder.svg',
//         name: 'Ripon Kumar',
//         designation: 'Founder & CEO',
//         details: 'Lorem ipsum dolor sit amet consectetur. Pellentesque mauris porttitor suspendisse viverra enim nisl nisi tortor.  Lorem ipsum dolor sit amet consectetur. Pellentesque mauris porttitor suspendisse viverra enim nisl nisi tortor. ',
//         socials: {
//             linkedin: 'www.linkedin.com',
//             facebook: 'www.facebook.com',
//         }
//     },
//     {
//         id: 1,
//         image: '/images/team/leader-shape.png',
//         name: 'Nayeem',
//         designation: 'Managing Director',
//         details: 'Lorem ipsum dolor sit amet consectetur. Pellentesque mauris porttitor suspendisse viverra enim nisl nisi tortor.  Lorem ipsum dolor sit amet consectetur. Pellentesque mauris porttitor suspendisse viverra enim nisl nisi tortor. ',
//         socials: {
//             linkedin: 'www.linkedin.com',
//             facebook: 'www.facebook.com',
//         }
//     },

// ]
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Leader__Section({teamData}: {teamData: any}) {
    // console.log(teamData, 'teamData');
    return (
        <div className="section relative overflow-hidden">
            <div className="container ">
                <Heading 
                    label="Team Leaders"
                    headingStyle="capitalize text-primary"
                    desc="Meet our team Leaders and know their story. "
                />  

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 pt-[40px]">
                       {/* // if designations are [Founder, CEO] then show Founder & CEO  */}
                       {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        teamData?.map((item: any, idx: number) => {

                            return (
                                ['Founder & CEO', 'Managing Director'].includes(item?.designation) ?
                                <Team__Card key={idx} item={{...item}} />
                                : null
                            )
                        })
                    }
              
    
                </div>
            </div>
            {/* left top */}
            <div className=" absolute top-[5%] left-0">
                <Image src="/images/services/left-top.png" className="object-contain" width={66} height={33} alt="" />
            </div>
            {/* left bottom */}
            <div className=" absolute bottom-[10%] left-0">
                <Image src="/images/services/left-bottom.png" className="object-contain" width={36} height={25} alt="" />
            </div>
            {/* Right top */}
            <div className=" absolute top-[6%] right-0">
                <Image src="/images/services/right-top.png" className="object-contain" width={44} height={44} alt="" />
            </div>
            {/* right bottom */}
            <div className=" absolute bottom-[10%] right-0">
                <Image src="/images/services/left-bottom.png" className="object-contain rotate-180" width={30} height={64} alt="" />
            </div>
            <div className=" absolute top-[50%] right-[15%]">
                <Image src="/images/middle-shape.png" className="object-contain rotate-180" width={75} height={75} alt="" />
            </div>
        </div>
    )
}