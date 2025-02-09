'use client'
import Image from "next/image";
import { Oswald, Poppins } from "next/font/google";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import CustomButton from "@/components/common/Custom__Button";
import { MapPin, Phone, Mail, } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { createSection } from "@/utils/api";
import Response from "@/components/common/Response";
const oswald = Oswald({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function Form__Section() {


    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        message: ''
    });

    const [isLoading, setIsLoading] = useState(false);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log(formData);

        // send form data to server
        setIsLoading(true);
        const { createError } = await createSection({ sectionName: 'contacts', data: formData });
        if (createError) {
            Response({
                title: 'Error',
                description: createError.message,
                success: false,
            })
            setIsLoading(false);
        }
        else {
            Response({
                title: 'Success',
                description: 'Your message has been sent successfully',
                success: true,
            })
            setFormData({
                full_name: '',
                email: '',
                message: ''
            })
        }
        setIsLoading(false);
    }

    return (
        <div className="section relative overflow-hidden">
            <div className="container grid grid-cols-12 md:grid-cols-6 gap-10 md:gap-[100px]">
                <motion.div
                    // left to right
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className={`${oswald.className} col-span-12 md:col-span-3`}>
                    <h2 className="text-[28px] md:text-[38px] font-semibold text-primary capitalize pb-5">Drop a message</h2>
                    <form className="flex flex-col gap-4 p-5 rounded-[7px] shadow-md lg:w-auto w-[79%] " onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="name" className="text-base md:text-[18px] font-medium text-secondary">Full Name</label>
                            <Input type="text" id="name" name="full_name" value={formData.full_name} onChange={handleChange} className={`${poppins.className} w-full h-[48px] rounded-lg border-secondary text-[14px] md:text-base font-normal`} placeholder="Enter your name" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-base md:text-[18px] font-medium text-secondary">Phone</label>
                            <Input type="text" id="email" name="email" value={formData.email} onChange={handleChange} className={`${poppins.className} w-full h-[48px] rounded-lg border-secondary text-[14px] md:text-base font-normal`} placeholder="Enter your Phone Number" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-base md:text-[18px] font-medium text-secondary">Message</label>
                            <Textarea id="message" name="message" value={formData.message} onChange={handleChange} className={`${poppins.className} w-full h-[80px] rounded-lg border-secondary text-[14px] md:text-base font-normal`} placeholder="Enter your message" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Input type="checkbox" className="checkbox_from" required/>
                            <p className="checkbox_from_text text-justify">
                                By clicking submit, I acknowledge and consent to being contacted back via messaging, voice calls, and/or email by Ray Advertising & marketing partners regarding the inquiry I have submitted through this form. I understand that my contact information will be used solely for the purpose of responding to my inquiry and that my information will be handled in accordance with Insurance Trendy Quote privacy policy and terms & condition.y
                            </p>
                        </div>
                        <CustomButton label={isLoading ? 'Submitting...' : 'Submit'} className="bg-secondary hover:bg-secondary w-full h-[48px] md:h-[55px] text-[18px] font-medium text-white " type="submit" />
                    </form>
                </motion.div>
                <motion.div
                    // right to left
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="col-span-12 md:col-span-3">
                    <h2 className={`${oswald.className} text-[28px] md:text-[38px] font-semibold text-primary capitalize pb-2 md:pb-5`}>Contact Information</h2>
                    <div className="">
                        <div className="box_item text-white pt-[30px]">
                            <h4 className={`${oswald.className} text-secondary flex items-center gap-1 text-[18px] font-[500] uppercase`}>
                                <span><MapPin className="w-[20px] h-[20px] text-secondary" /></span>
                                <span>USA Office:</span>
                            </h4>
                            <p className=" text-text_color tracking-wide max-w-[200px] py-[10px] text-[14px] font-[400] uppercase">1267 Willis ST STE 200 Redding CA 96001 USA</p>

                            <h4 className={` flex items-center gap-2 text-[18px] font-[500] uppercase`}>
                                <span><Phone className="w-[20px] h-[20px] text-secondary" /></span>
                                <span>
                                    <Link className="inline-block text-[14px] font-[400] tracking-wide text-text_color" href="tel:+1 (435) 627-7657">+1 (435) 627-7657</Link>
                                </span>
                            </h4>
                        </div>
                        <div className="box_item text-white pt-[50px]">
                            <h4 className={`${oswald.className} flex items-center gap-1 text-[18px] font-[500] uppercase text-secondary`}>
                                <span><MapPin className="w-[20px] h-[20px] text-secondary" /></span>
                                <span>BD Office:</span>
                            </h4>
                            <p className=" text-text_color tracking-wide max-w-[250px] py-[10px] text-[14px] font-[400] uppercase">Kali Mandir, Chondon - Baisha Rd, Bogra 5800</p>


                            <h4 className={` flex items-center gap-2 text-[18px] font-[500] uppercase`}>
                                <span><Phone className="w-[20px] h-[20px] text-secondary" /></span>
                                <span>
                                    <Link className="inline-block text-[14px] font-[400] tracking-wide text-text_color" href="tel:+880 1748-612211">+880 1748-612211</Link>
                                </span>
                            </h4>
                        </div>
                        <Link className="flex items-center text-text_color text-[14px] font-[400] gap-1 pt-[30px]" href="mailto:contact@rayadvertising.com">
                            <span><Mail className="w-[20px] h-[20px] text-secondary" /> </span>
                            <span> contact@rayadvertising.com</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
            {/* left top */}
            <div className=" absolute top-[5%] left-0">
                {/* <Image src="/images/services/left-top.png" className="object-contain" width={66} height={33} alt="" /> {akash} */}
            </div>
            {/* left bottom */}
            <div className=" absolute bottom-[10%] left-0">
                {/* <Image src="/images/services/left-bottom.png" className="object-contain" width={36} height={25} alt="" /> {akash} */}
            </div>
            {/* Right top */}
            <div className=" absolute top-[6%] right-0">
                {/* <Image src="/images/services/right-top.png" className="object-contain" width={44} height={44} alt="" /> {akash} */}
            </div>
            {/* right bottom */}
            <div className=" absolute bottom-[10%] right-0">
                {/* <Image src="/images/services/left-bottom.png" className="object-contain rotate-180" width={30} height={64} alt="" /> {akash} */}
            </div>
            <div className=" absolute top-[50%] right-[15%]">
                {/* <Image src="/images/middle-shape.png" className="object-contain rotate-180" width={75} height={75} alt="" /> {akash} */}
            </div>
        </div>
    )
}
