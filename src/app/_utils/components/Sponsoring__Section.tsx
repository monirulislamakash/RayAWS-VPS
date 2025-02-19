import Heading from "@/components/common/Heading";
import Image from "next/image";
import SponsoringCard from "./Sponsoring__Card";
import { getSectionData } from "@/utils/api";
import AnimateContainer from "./Animate_Container";

// const sponsoring = [
//     {
//         name: "Offervault",
//         desc: "Founded in 2009 by affiliate marketers, OfferVault is the internet's best resource for affiliates to find affiliate offers, connect with affiliate networks and verify their reputation.",
//         logo: "/images/sponsoring/3.jpg",
//         link: "https://www.offervault.com/"
//     },
//     {
//         name: "Affpaying",
//         desc: "Affpaying.com is all about helping CPA marketers join the right CPA affiliate networks. How to Choose the Right CPA Affiliate Network? Do you know that there are hundreds of CPA affiliate networks out there available for you to join? However we want to focus on a few that can truly maximize our time, efforts and money.",
//         logo: "/images/sponsoring/2.jpg",
//         link: " https://www.affpaying.com/"
//     },
//     {
//         name: "ClickBid World",
//         desc: "Over the past six years, ClickBid World has hosted more than 190 exclusive affiliate marketing events and five all-inclusive conferences, bringing together the industry's top professionals. Our mission is to create unparalleled business networking opportunities in breathtaking and unique locations, where elite experts from around the world can connect, collaborate, and drive innovation within their respective fiel",
//         logo: "/images/sponsoring/1.jpg",
//         link: " https://www.clickbidworld.com/"
//     },
// ];

interface ISponsoring {
    heading: string;
    sub_heading: string;
    cards: {
        id: number;
    }[]
}

export default async function SponsoringSection() {
    const data = await getSectionData({ sectionName: 'card_section', page: 'all' })
    // console.log({ data: data?.sectionData.cards })
    const sponsoringData = data?.sectionData as ISponsoring

    return (
        <div className="py-[40px] md:py-[80px] bg-primary relative overflow-hidden">
            <div className="container relative z-10">
                <Heading
                    label="Proudly Sponsoring"
                    headingStyle="text-white"
                    descStyle="text-white"
                    desc="At Ray Advertising, we take pride in more than just partnerships. We proudly sponsor and support innovative industry events, tech events, affiliate search engine platforms, and similar initiatives that share our vision for success. Our strategies and collaboration help brands grow, expand, and make a real impact in the affiliate marketing world. To us, sponsoring is not only just funding, it’s more about lasting relationships that drive win-win situations for everyone involved."
                />
                {/* <AnimateContainer direction="downToUp"> {Akash} */}

                    <div className="pt-[40px] grid grid-cols-1 md:grid-cols-3 gap-5">
                        {
                            sponsoringData?.cards?.map((item, idx) => (
                                <SponsoringCard key={idx} id={item.id} />
                            ))
                        }
                    </div>
                {/* </AnimateContainer> */}
            </div>
            <div className=" absolute top-0 left-0 ">
                <Image src="/images/sponsoringbg.png" width={1400} height={200} alt="" className="w-full object-contain object-top " />
            </div>

        </div>
    )
}