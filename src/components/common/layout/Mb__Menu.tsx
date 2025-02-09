'use client'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"

import { useState } from "react"

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
        name: 'Our team',
        slug: 'our-team'
    },
    {
        name: 'Events',
        slug: 'events'
    },
    {
        name: 'Contact',
        slug: 'contact'
    },
]



export function MbMenu() {
    const [open, setOpen] = useState(false);
    return (
        <Sheet  open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <button className="block md:hidden py-0 ">
                    <Menu className="w-[28px] h-[28px] text-white" />
                </button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader className=" text-left pb-[10px]">
                   <SheetTitle>Menu</SheetTitle> 
                </SheetHeader>
                <div className="">
                    <ul >
                        {menu.map((item, index) => (
                            <li key={index} className=" cursor-pointer my-5 text-[17px] ">
                                <Link href={`/${item.slug}`}>
                                {item?.name}</Link>
                            </li>
                        ))}
                    </ul>

                </div>
         
            </SheetContent>
        </Sheet>
    )
}