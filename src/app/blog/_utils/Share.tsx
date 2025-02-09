'use client'
import { FacebookIcon, LinkedinIcon, XIcon, ShareIcon } from "@/components/Icons";
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
} from 'next-share'
import { Button } from "@/components/ui/button";


export default function Share({ url }: { url: string }) {
    return (
        <div className="share flex items-center gap-2">
            <Button variant="outline" className="flex items-center gap-2 border-[#E8E8E8] h-[35px] md:h-[40px] rounded-[7px]" >
                <ShareIcon className="w-[14px] md:w-[16px] h-[14px] md:h-[16px] text-secondary" />
                <span className="text-text_color text-[14px] md:text-[16px] font-medium">Share On:</span>
            </Button>
            <FacebookShareButton url={url} className="mx-1 flex items-center justify-center rounded-full" >
                <FacebookIcon className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] text-secondary" />
            </FacebookShareButton>
            <LinkedinShareButton url={url} className="mx-1 flex items-center justify-center rounded-full">
                <LinkedinIcon className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] text-secondary" />
            </LinkedinShareButton>
            <TwitterShareButton url={url} className="mx-1 flex items-center justify-center rounded-full">
                <XIcon className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] text-secondary" />
            </TwitterShareButton>



        </div>
    )
}