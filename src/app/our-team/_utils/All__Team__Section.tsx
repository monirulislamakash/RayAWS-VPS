'use client'
import Team__Card from "../_utils/Team__Card";
import Heading from "@/components/common/Heading";
// import { Filter } from "./Filter";
// const leader = [
//     {
//         id: 0,
//         image: '/images/team/founder.svg',
//         name: 'Ripon Kumar',
//         designation: 'Founder & CEO',
//         socials: {
//             linkedin: 'www.linkedin.com',
//             facebook: 'www.facebook.com',
//         }
//     },
//     {
//         id: 1,
//         image: '/images/team/founder.svg',
//         name: 'Nayeem',
//         designation: 'Managing Director',
//         socials: {
//             linkedin: 'www.linkedin.com',
//             facebook: 'www.facebook.com',
//         }
//     },

// ]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AllTeamSection({teamData}: {teamData: any}) {
    // const handleFilterChange = (filter: string) => {
    //     console.log(filter);
    // };
    return (
        <div className=" section container">
            <Heading 
                label="Awesome Professionals"
                headingStyle="capitalize text-primary pb-5"
            />  
            {/* <Filter onFilterChange={handleFilterChange} />  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5  pt-10">
                {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    teamData.map((item: any, idx: number) => (
                        // exclude the leader from the team data
                        ['Founder & CEO', 'Managing Director'].includes(item?.designation) ? null :
                        <Team__Card key={idx} item={item} mode="normal" />
                    ))
                }
            </div>

        </div>
    )
}