'use client'
import Link from "next/link";
import Logo from "../Logo";
import { Oswald } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MbMenu } from "./Mb__Menu";
import { motion } from "motion/react";

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
    // {
    //     name: 'Our team',
    //     slug: 'our-team'
    // },
    {
        name: 'Events',
        slug: 'events'
    },
    {
        name: 'Contact',
        slug: 'contact'
    },
]

export default function Header() {
    const pathName = usePathname();
    const activePathName = pathName.replace(/^\/+/, '')
    const [hover, setHover] = useState('');

    return (
        <motion.header 
        // top to bottom
        // animate={{opacity: 1, y: 0}}
        // initial={{opacity: 0, y: -100}} {Akash}
        // transition={{duration: 0.5, delay: 0.5}}
        className=" bg-primary shadow-md h-[80px] md:h-[96px]">
            <div className={`${oswald.className} container flex items-center justify-between h-full`}>
                <Logo />
                <nav className="md:flex gap-5 hidden ">
                    <ul className="flex items-center gap-[4px] ">
                        {
                            menu.map((item, idx) => (
                                <li key={idx} className=" relative" >
                                    <Link className={`${activePathName === item.slug || hover === item.slug ? 'text-secondary transition-colors duration-300' : 'text-white transition-colors duration-300'} text-[20px] font-[500] px-[10px] py-[8px]`} href={`/${item.slug}`} onMouseEnter={() => setHover(item.slug)} onMouseLeave={() => setHover('')}>{item.name}</Link>
                                    {
                                        (activePathName ===  item.slug || hover === item.slug) &&
                                        <div className="left-0 absolute flex items-center justify-center w-full transition-all duration-300 ease-in-out">
                                            {/* <div className="w-[49px] h-[3px] bg-secondary rounded-full transition-all duration-300 ease-in-out"></div> */}
                                            <div className="w-[4px] h-[4px] bg-secondary rounded-full ml-[4px] transition-all duration-300 ease-in-out"></div>
                                        </div>
                                    }
                                </li>
                            ))
                        }

                    </ul>
                    <Link href="/join-us" className="slide_from_top_color_reverch w-[120px] text-center rounded-lg px-[24px] py-[8px] text-[18px] font-[500] uppercase">
                        Join Us
                    </Link>
                </nav>
                {/* Mobile menu */}
                <MbMenu />
            </div>
        </motion.header>
    )
}