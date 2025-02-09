import PageHeaderSection from "@/components/common/Page__Header__Section";
import Divider from "../_utils/components/Divider";
import BrandingSection from "../_utils/components/Branding__Section";
import TestimonialSection from "../_utils/components/Testimonial";
import Newsletter from "../_utils/components/Newsletter";
import Common__Section from "./_utils/Common__Section";
import Special__Section from "./_utils/Special__Section";
import Blog__Carousel from "./_utils/Blog__Carousel";
import { Metadata } from "next";
import Header from "@/components/common/layout/Header";
import Footer from "@/components/common/layout/Footer";
import { getSectionData, getTableData } from "@/utils/api";
import { createClient } from "@/utils/supabase/server";

interface SectionData {
  sectionData: {
    images: Array<{ publicUrl: string }>;
    slug: string;
    title: string;
    description: string;
    content: string;
    image: string;
    author_id: string;
  };
}

interface Image {
  url: string;
}



export const metadata: Metadata = {
    title: "About us - Ray Advertising",
    description: "Ray Advertising",
};

const mapImages = (data: SectionData | null): Image[] => 
  data?.sectionData?.images?.map(({ publicUrl }) => ({ url: publicUrl })) || [];

export default async function AboutUs() {
  try {
    const [supabase, { tableData: blogs }] = await Promise.all([
      createClient(),
      getTableData({ tableName: "blogs" })
    ]);

    const [
      trafficData,
      advertisingData,
      { data: two_side_section }
    ] = await Promise.all([
      getSectionData({ sectionName: 'branding', isSingle: true, id: 1 }),
      getSectionData({ sectionName: 'branding', isSingle: true, id: 2 }),
      supabase
        .from('two_side_section')
        .select('*')
        .eq('page', 'about')
        .single()
    ]);

    return (
        <>
            <Header />
            <main className="overflow-hidden">
                <PageHeaderSection title="About us" description="RAPIDLY GROWING #1 PERFORMANCE AFFILIATE NETWORK" bg="/images/about-bg.png" />
                <Common__Section data={two_side_section ?? []} />
                <Divider />
                <BrandingSection label="TRAFFIC PARTNERS" data={mapImages(trafficData)} />
                <Special__Section />
                <BrandingSection label="ADVERTISING PARTNERS" data={mapImages(advertisingData)} sideImage={true} />
                <TestimonialSection />
                <Newsletter />
                <Blog__Carousel blogs={blogs || []} />
            </main>
            <Footer />
        </>
    )
  } catch (error) {
    // Add proper error handling
    console.error('Error loading page data:', error);
    throw error; // Or return error boundary
  }
}