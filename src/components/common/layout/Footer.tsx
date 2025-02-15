import ParticleBackground from "@/lib/particles";
import Logo from "../Logo";
import { MapPin, Phone, Mail, Plus, Target, } from "lucide-react";
import { Oswald } from "next/font/google";
import Link from "next/link";
import Image from 'next/image';
import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button";
import AnimateContainer from "@/app/_utils/components/Animate_Container";
import { getSectionData } from "@/utils/api";
import { FacebookIcon, LinkedinIcon, XIcon, InstagramIcon, SendIcon } from "@/components/Icons";

const oswald = Oswald({
    subsets: ['latin'],
    weight: '500'
})


const menu = [
    {
        name: 'About us',
        slug: 'about-us'
    },
    {
        name: 'Services',
        slug: 'services'
    },
    {
        name: 'Career',
        slug: 'career'
    },
    {
        name: 'Events',
        slug: 'events'
    },
    {
        name: 'Blog',
        slug: 'blog'
    },
];


const socials = [
    {
        href: 'https://www.facebook.com/rayadvertisingllc/',
        icon: <FacebookIcon className="w-[40px] h-[40px]"/>
    },
    {
        href: 'https://www.linkedin.com/company/rayadvertising/mycompany/',
        icon: <LinkedinIcon className="w-[40px] h-[40px]" />
    },
    {
        href: 'https://x.com/rayadvertising?lang=he&mx=2',
        icon: <XIcon className="w-[40px] h-[40px]" />
    },
    {
        href: 'https://www.instagram.com/ray_advertising/',
        icon: <InstagramIcon className="w-[40px] h-[40px]" />
    },
]

export default async function Footer() {


    const { sectionData: eventsData } = await getSectionData({ sectionName: 'events', isMultiple: true, limit: 3 });

    const { sectionData: blogsData } = await getSectionData({ sectionName: 'blogs', isMultiple: true, limit: 3 });

    return (
        <footer>

            <div className=" section bg-primary relative overflow-hidden w-full">
                <AnimateContainer direction="leftToRight">
                    <div
                        className="container relative z-[5] grid grid-cols-12 lg:grid-cols-8 gap-20  md:place-items-center">
                        <div className="conpany__info col-span-12 lg:col-span-2">
                            <Logo />
                            <div className="box_item text-white pt-[20px]">
                                <h3 className={`${oswald.className} flex items-center gap-1 text-[18px] font-[500] uppercase`}>
                                    <span><MapPin className="w-[20px] h-[20px] text-secondary" /></span>
                                    <span>USA Office:</span>
                                </h3>
                                <p className=" tracking-wide max-w-[200px] py-[10px] text-[14px] font-[400] uppercase">1267 Willis ST STE 200 Redding CA 96001 USA</p>

                                <h3 className={` flex items-center gap-2 text-[18px] font-[500] uppercase`}>
                                    <span><Phone className="w-[20px] h-[20px] text-secondary" /></span>
                                    <span>
                                        <Link className="inline-block text-[14px] font-[400] tracking-wide" href="tel:+1 (435) 574 4123">+1 (435) 574 4123</Link>
                                    </span>
                                </h3>
                            </div>
                            <div className="box_item text-white pt-[20px]">
                                <h3 className={`${oswald.className} flex items-center gap-1 text-[18px] font-[500] uppercase`}>
                                    <span><MapPin className="w-[20px] h-[20px] text-secondary" /></span>
                                    <span>BD Office:</span>
                                </h3>
                                <p className="tracking-wide max-w-[250px] py-[10px] text-[14px] font-[400] uppercase">Kali Mandir, Chondon - Baisha Rd, Bogra 5800</p>


                                <h3 className={` flex items-center gap-2 text-[18px] font-[500] uppercase`}>
                                    <span><Phone className="w-[20px] h-[20px] text-secondary" /></span>
                                    <span>
                                        <Link className="inline-block text-[14px] font-[400] tracking-wide" href="tel:+880 1748-612211">+880 1748-612211</Link>
                                    </span>
                                </h3>
                            </div>
                            <Link className="flex items-center text-white text-[14px] font-[400] gap-1 pt-[10px]" href="mailto:contact@rayadvertising.com">
                                <span><Mail className="w-[20px] h-[20px] text-secondary" /> </span>
                                <span> contact@rayadvertising.com</span>
                            </Link>
                        </div>
                        <div className="col-span-12 lg:col-span-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                            <div className=" order-2 lg:order-1 flex flex-col items-start md:items-center">
                                <div>
                                    <h3 className={`${oswald.className} text-[18px] font-[500] uppercase pb-[15px] text-secondary`}>Links:</h3>
                                    <ul>
                                        {
                                            menu?.map((item, idx) => (
                                                <li key={idx} className="py-[10px] text-white">
                                                    <Link className="hover:text-secondary hover:underline transition-all duration-500 block uppercase text-[14px] font-[500] tracking-wide" href={`/${item.slug}`}>
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className=" order-1 lg:order-2 flex flex-col items-start py-10 md:py-0">
                                <div className="">
                                    <h3 className={`${oswald.className} text-[18px] font-[500] uppercase pb-[15px] text-secondary`}>Events:</h3>
                                    <div className="flex items-center gap-4 relative">
                                        {
                                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                            eventsData?.map((item: any, idx: any) => {
                                                const image = item.images?.length > 0 ? item.images[0]?.publicUrl : null;
                                                return (
                                                    
                                                    <div key={idx} className=" relative w-[80px] h-[80px] group">
                                                        <Image className="w-full h-full object-cover rounded-[7px]" src={image} width={80} height={80} alt="blog image" />
                                                        <div className=" z-[1] rounded-[7px] absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-all duration-300  bg-[#56c1cddd] flex items-center justify-center w-full h-full">
                                                            <Link href={`/events/${item?.id}`} className="flex items-center justify-center gap-2 w-full h-full">
                                                                <Plus className="w-[48px] h-[48px] text-white" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                                <div className="pt-5">
                                    <h3 className={`${oswald.className} text-[18px] font-[500] uppercase pb-[15px] text-secondary`}>Blogs:</h3>
                                    <div className="flex items-center gap-4 ">
                                        {
                                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                            blogsData?.map((item: any, idx: any) => {
                                                // const image = item.images?.length > 0 ? item.images[0]?.publicUrl?.publicUrl : null;
                                                return (
                                                    <div key={idx} className=" relative w-[80px] h-[80px] group">
                                                        <Image className="w-full h-full object-cover rounded-[7px]" src={item?.image} width={80} height={80} alt="blog image" />
                                                        <div className=" z-[1] rounded-[7px] absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-all duration-300  bg-[#56c1cddd] flex items-center justify-center w-full h-full">
                                                            <Link href={`/blog/${item?.slug}`} className="flex items-center justify-center gap-2 w-full h-full">
                                                                <Plus className="w-[48px] h-[48px] text-white" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                            </div>
                            <div className=" order-3 lg:order-3 flex flex-col items-start lg:items-center pl-0 lg:pl-10">
                                <div>
                                    <h3 className={`${oswald.className} text-[18px] font-[500] uppercase pb-[15px] text-secondary`}>Follow us:</h3>
                                    <ul className="flex items-center gap-[15px] ">
                                        {
                                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                            socials?.map((item: any, idx: any) => (
                                                <li key={idx} className=" text-white">
                                                    <Link target="_blank" rel="noopener"  className="hover:text-secondary hover:underline transition-all duration-500 block uppercase text-[14px] font-[500] tracking-wide" href={item.href}>
                                                        {item.icon}
                                                    </Link>
                                                </li>
                                            ))
                                        }

                                    </ul>
                                    <div className="pt-5">
                                        {/* <h3 className={`${oswald.className} text-[18px] font-[500] uppercase pb-[15px] text-secondary`}>News Letter:</h3>
                                        <div className="subscribe_input relative border h-[40px] flex items-center border-white/50">
                                            <Input type="text" placeholder="Your Email" className={` focus-visible:border-none focus-visible:outline-none border-none h-full placeholder:text-secondary placeholder:italic  ${oswald.className}`} />
                                            <Button className="w-[40px] h-[40px] bg-secondary rounded-none hover:bg-secondary">
                                                <SendIcon className="w-[22px] h-[22px]" />
                                            </Button>
                                        </div> */}
                                        <div className="flex items-center justify-between pt-5">
                                            <Link href="/privacy-policy" className=" text-[12px] font-[500] text-secondary">Privacy Policy</Link>
                                            <Link href="/terms-condition" className=" text-[12px] font-[500] text-secondary">Terms & Condition</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimateContainer>

                <Image className="z-[4] opacity-80 absolute top-0 left-0 object-cover w-full h-full" src="/images/footer-bg.png" width={1600} height={600} alt="ttttttttr" />

                <div className="z-[2] w-full h-full absolute left-0 top-0 ">
                    <ParticleBackground />
                </div>
            </div>

            <div

                className=" bg-primary py-5 ">
                <AnimateContainer direction="downToUp">
                    <div
                        // bottom to top
                        className="container text-center">
                        <p className="text-[14px] md:text-[18px] font-[600] text-white">Copyright © 2025 RAY ADVERTISING | All rights reserved</p>
                    </div>
                </AnimateContainer>
            </div>
        </footer>
    )
}