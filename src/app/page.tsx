import Gallery__Carousel from "@/app/_utils/components/Gallery__Carousel";
import BrandingSection from "./_utils/components/Branding__Section";
import Divider from "./_utils/components/Divider";
import FaqSection from "./_utils/components/Faq__Section";
import HeroSection from "./_utils/components/Hero__Section";
import Newsletter from "./_utils/components/Newsletter";
import ServicesSection from "./_utils/components/Services__Section";
import SponsoringSection from "./_utils/components/Sponsoring__Section";
import TestimonialSection from "./_utils/components/Testimonial";
import WhyChooseSection from "./_utils/components/Why__Choose_Section";
import Header from "@/components/common/layout/Header";
import Footer from "@/components/common/layout/Footer";
import { getTableData } from "@/utils/api";
import { getSectionData } from "@/utils/api";
import { createClient } from "@/utils/supabase/server";
import Blog__Carousel from "./about-us/_utils/Blog__Carousel";

type Blog = {
  id: number;
  title: string;
  description: string;
  images: any[];
};
export default async function Home() {
  const supabase = await createClient();

  const [
    heroResponse,
    faqResponse,
    galleryResponse,
    trafficResponse,
    advertisingResponse,
    featuredInResponse,
    cardsResponse
  ] = await Promise.all([
    getSectionData({ sectionName: 'hero_section', page: 'home' }),
    getTableData({ tableName: 'faqs_section' }),
    getSectionData({ sectionName: 'gallery', isSingle: true, id: 1 }),
    getSectionData({ sectionName: 'branding', isSingle: true, id: 1 }),
    getSectionData({ sectionName: 'branding', isSingle: true, id: 2 }),
    getSectionData({ sectionName: 'branding', isSingle: true, id: 3 }),
    supabase.from('cards').select().eq('section', 'whatwedo')
  ]);

  type ImageData = { publicUrl: string };

  const processImages = (data: { sectionData?: { images?: ImageData[] } }) => 
    data?.sectionData?.images?.map(image => ({ url: image.publicUrl })) || [];

  const images = galleryResponse?.sectionData?.images || [];
  const trafficDataImages = processImages(trafficResponse);
  const advertisingDataImages = processImages(advertisingResponse);
  const featuredInDataImages = processImages(featuredInResponse);
  // Add By me 
  const [blogsResponse] = await Promise.all([
    getTableData({ tableName: "blogs" }).catch(error => {
      console.error('Failed to fetch blogs:', error);
      return { tableData: [] };
    }),
  ]);
  const blogs = blogsResponse.tableData as Blog[];
  return (
    <>
      <Header />
      <main>
        <HeroSection data={heroResponse?.sectionData} />
        <ServicesSection data={cardsResponse.data} />
        <Divider />
        <BrandingSection label="TRAFFIC PARTNERS" data={trafficDataImages} />
        <WhyChooseSection />
        {/* <BrandingSection label="ADVERTISING PARTNERS" data={advertisingDataImages} sideImage={true} /> */}
        <FaqSection data={faqResponse?.tableData || []} />
        <Divider />
        <BrandingSection label="FEATURED IN" data={featuredInDataImages} />
        <SponsoringSection />
        <Gallery__Carousel images={images} />
        <Newsletter />
        <Blog__Carousel blogs={blogs} />
      </main>
      <Footer />
    </>
  );
}