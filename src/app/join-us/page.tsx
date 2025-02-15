import PageHeaderSection from "@/components/common/Page__Header__Section";
import { Metadata } from "next";
import { Oswald } from "next/font/google";
import Image from "next/image";
import Divider from "../_utils/components/Divider";
import BrandingSection from "../_utils/components/Branding__Section";
import FaqSection from "../_utils/components/Faq__Section";
import SponsoringSection from "../_utils/components/Sponsoring__Section";
import Newsletter from "../_utils/components/Newsletter";
import TestimonialSection from "../_utils/components/Testimonial";
import Gallery__Carousel from "../_utils/components/Gallery__Carousel";
import Footer from "@/components/common/layout/Footer";
import Header from "@/components/common/layout/Header";
import Custom__Button from "@/components/common/Custom__Button";
import { getSectionData, getTableData } from "@/utils/api";
import AnimateContainer from "../_utils/components/Animate_Container";



const oswald = Oswald({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
    title: "Join Us - Ray Advertising",
    description: "Ray Advertising",
};





export default async function JoinUS() {
    const faqData = await getTableData({ tableName: 'faqs_section' })

    const { sectionData: imgData } = await getSectionData({ sectionName: 'gallery', isSingle: true, id: 1 })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const images = imgData?.images || []    

    const heroData = await getSectionData({ sectionName: 'hero_section', page: 'home' });


    //  eslint-disable-next-line @typescript-eslint/no-explicit-any
const trafficData: any = await getSectionData({ sectionName: 'branding', isSingle: true, id: 1 });

//  eslint-disable-next-line @typescript-eslint/no-explicit-any
  const trafficDataImages = trafficData?.sectionData?.images?.map((image: any) => {
    return {
      url: image?.publicUrl
    }
  }) || [];

  const advertisingData = await getSectionData({ sectionName: 'branding', isSingle: true, id: 2 })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const advertisingDataImages = advertisingData?.sectionData?.images?.map((image: any) => {
    return {
      url: image?.publicUrl
    }
  }) || []

  const featuredInData = await getSectionData({ sectionName: 'branding', isSingle: true, id: 3 });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const featuredInDataImages = featuredInData?.sectionData?.images?.map((image: any) => {
    return {
      url: image?.publicUrl
    }
  }) || []

    return (
        <>
            <Header />
            <main>
                <PageHeaderSection title="Join Us" description="RAPIDLY GROWING #1 PERFORMANCE AFFILIATE NETWORK" bg="/images/join-us-bg.png" />

                <div className="section relative ">
                    <AnimateContainer>
                    <div className="container">
                        <h2 className={`${oswald.className} text-[28px] md:text-[38px] font-semibold text-primary`}>
                            Publisher
                        </h2>
                        <div className="text-[16px] md:text-[18px] font-normal pt-4 text-text_color pb-5">
                            <p className="pb-3 leading-[28px] md:leading-[32px]">
                                Publishers of Ray Advertising have the flexibility to choose the campaigns that align with their audience and niche, and they can use different strategies such as pay-per-call, content marketing, social media marketing, email marketing, paid advertising, and more to generate sales or leads.
                            </p>
                            <p className="pb-3 leading-[28px] md:leading-[32px]">
                                Publishers of Ray Advertising have the flexibility to choose the campaigns that align with their audience and niche, and they can use different strategies such as pay-per-call, content marketing, social media marketing, email marketing, paid advertising, and more to generate sales or leads.
                            </p>
                            <p className=" leading-[28px] md:leading-[32px]">
                                Publishers of Ray Advertising have the flexibility to choose the campaigns that align with their audience and niche, and they can use different strategies such as pay-per-call, content marketing, social media marketing, email marketing, paid advertising, and more to generate sales or leads.
                            </p>
                            

                        </div>
                        <Custom__Button href={`${heroData?.sectionData?.button_link_1}`} label="join now" isIcon={true} className=" inline-flex items-center justify-center gap-[10px] px-5 h-[40px] rounded-full bg-primary text-white uppercase text-base font-medium " fill="#fff" iconStyle="w-[20px] h-[20px]" />
                    </div>
                    </AnimateContainer>
                    {/* left top */}
                    {/* <div className=" absolute top-[5%] left-0">
                        <Image src="/images/services/left-top.png" className="object-contain" width={66} height={33} alt="" />
                    </div> */}
                    {/* left bottom */}
                    {/* <div className=" absolute bottom-[10%] left-0">
                        <Image src="/images/services/left-bottom.png" className="object-contain" width={36} height={25} alt="" />
                    </div> */}
                    {/* Right top */}
                    {/* <div className=" absolute top-[6%] right-0">
                        <Image src="/images/services/right-top.png" className="object-contain" width={44} height={44} alt="" />
                    </div> */}
                    {/* right bottom */}
                    {/* <div className=" absolute bottom-[10%] right-0">
                        <Image src="/images/services/left-bottom.png" className="object-contain rotate-180" width={30} height={64} alt="" />
                    </div> */}
                    {/* <div className=" absolute top-[50%] right-[15%]">
                        <Image src="/images/middle-shape.png" className="object-contain rotate-180" width={75} height={75} alt="" />
                    </div> */}
                </div>
                <Divider />
                <BrandingSection label="TRAFFIC PARTNERS" data={trafficDataImages} />
                <div className="py-[60px] md:py-[80px] relative bg-primary bg-cover bg-top">
                    <AnimateContainer>
                    <div className="container">
                        <h2 className={`${oswald.className} text-[28px] md:text-[38px] font-semibold text-white`}>
                            Advertiser
                        </h2>
                        <div className="text-[16px] md:text-[18px] font-normal pt-4 text-white pb-5">
                            <p className="pb-3 leading-[28px] md:leading-[32px]">
                                Advertisers at Ray Advertising benefit from affiliate marketing by gaining access to a large number of publishers who can help them reach new customers and increase sales. They only pay for actual results, such as a sale or a lead, and they can track the performance of their campaigns and offers in real-time via our tracking dashboard.
                            </p>
                            <p className="pb-3 leading-[28px] md:leading-[32px]">
                                Advertisers at Ray Advertising benefit from affiliate marketing by gaining access to a large number of publishers who can help them reach new customers and increase sales. They only pay for actual results, such as a sale or a lead, and they can track the performance of their campaigns and offers in real-time via our tracking dashboard.
                            </p>
                            <p className=" leading-[28px] md:leading-[32px]">
                                Advertisers at Ray Advertising benefit from affiliate marketing by gaining access to a large number of publishers who can help them reach new customers and increase sales. They only pay for actual results, such as a sale or a lead, and they can track the performance of their campaigns and offers in real-time via our tracking dashboard.
                            </p>

                        </div>
                        <Custom__Button href={`${heroData?.sectionData?.button_link_2}`} label="join now" isIcon={true} className=" inline-flex items-center justify-center gap-[10px] px-5 h-[40px] rounded-full bg-white text-[#5895F9] uppercase text-base font-medium " fill="#5895F9" iconStyle="w-[20px] h-[20px]" />
                    </div>
                    </AnimateContainer>
                    {/* left top */}
                    {/* <div className=" absolute top-[5%] left-0">
                        <Image src="/images/services/left-top.png" className="object-contain" width={66} height={33} alt="" />
                    </div> */}
                    {/* left bottom */}
                    {/* <div className=" absolute bottom-[10%] left-0">
                        <Image src="/images/services/left-bottom.png" className="object-contain" width={36} height={25} alt="" />
                    </div> */}
                    {/* Right top */}
                    {/* <div className=" absolute top-[6%] right-0">
                        <Image src="/images/services/right-top.png" className="object-contain" width={44} height={44} alt="" />
                    </div> */}
                    {/* right bottom */}
                    {/* <div className=" absolute bottom-[10%] right-0">
                        <Image src="/images/services/left-bottom.png" className="object-contain rotate-180" width={30} height={64} alt="" />
                    </div> */}
                    {/* <div className=" absolute top-[50%] right-[15%]">
                        <Image src="/images/middle-shape.png" className="object-contain rotate-180" width={75} height={75} alt="" />
                    </div> */}
                </div>

                <BrandingSection label="ADVERTISING PARTNERS" data={advertisingDataImages} sideImage={true} />
                <FaqSection data={faqData?.tableData || []} />
                <Divider />
                <BrandingSection label="FEATURED IN" data={featuredInDataImages} />
                <SponsoringSection />
                <TestimonialSection />
                <Newsletter />
                <Gallery__Carousel images={images} />

            </main>
            <Footer />
        </>
    )
}