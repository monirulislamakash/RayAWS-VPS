


import Link from "next/link";
import { Button } from "../ui/button";
import { ReactNode } from "react";

export default function CustomButton({iconRight, label, href, className, onClick, icon, iconStyle, isIcon, fill, type }: { iconRight?: boolean; iconStyle?: string; icon?:ReactNode; isIcon?: boolean; label: string; href?: string; className: string; onClick?: () => void; fill?: string; type?: 'button' | 'submit' | 'reset' }) {
    return (
        <>
            {
                href ? (
                    <Link href={`${href}`} className={`${className} ${icon && ' inline-flex items-center justify-center gap-[6px]'} font-[500] transition-all duration-500 hover:gap-[10px]`}>
                        {
                            iconRight ? icon : null
                        }
                        {label}
                        {
                            isIcon &&
                            <svg className={`${iconStyle} `} viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM1 9H21V7H1V9Z" fill={fill || "#10387A"} />
                            </svg>
                        }

                        {
                            iconRight ? null : icon
                        }
                    </Link>
                ) : (
                    <Button onClick={onClick} type={type || 'button'} className={`${className} ${icon && 'flex items-center justify-center gap-[6px]'} font-[500] transition-all duration-500 hover:gap-[10px]`} >
                        {label}
                        {
                            isIcon &&
                            <svg className={`${iconStyle}`} viewBox="0 0 22 16"  xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM1 9H21V7H1V9Z" />
                            </svg>
                        }
                        {
                            icon
                        }
                    </Button>
                )
            }
        </>



    )
}