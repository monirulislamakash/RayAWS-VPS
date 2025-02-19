import PageHeaderSection from "@/components/common/Page__Header__Section";
import { Metadata } from "next";
import Services__Common__Section from "./_utils/Services__Common__Section";
import NetworkVideoSection from "./_utils/Network__Video__Section";
import TestimonialSection from "../_utils/components/Testimonial";
import NewsletterSection from "../_utils/components/Newsletter";
import GallerySection from "../_utils/components/Gallery__Carousel";
import Header from "@/components/common/layout/Header";
import Footer from "@/components/common/layout/Footer";
import { getSectionData, getTableData } from "@/utils/api";
import Blog__Carousel from "../about-us/_utils/Blog__Carousel";


type Blog = {
    id: number;
    title: string;
    description: string;
    images: any[];
  };

export const metadata: Metadata = {
    title: "Services - Ray Advertising",
    description: "Ray Advertising",
};

export default async function Services() {
    const [galleryResponse, servicesResponse] = await Promise.all([
        getSectionData({ sectionName: 'gallery', isSingle: true, id: 1 }),
        getSectionData({ sectionName: 'card_section', page: 'home' })
    ]);
    // Add By me
    const [blogsResponse] = await Promise.all([
        getTableData({ tableName: "blogs" }).catch(error => {
          console.error('Failed to fetch blogs:', error);
          return { tableData: [] };
        }),
      ]);
      const blogs = blogsResponse.tableData as Blog[];
    const images = galleryResponse?.sectionData?.images || [];
    const servicesData = servicesResponse?.sectionData; 

    return (
        <>
            <Header />
            <main>
                <PageHeaderSection title="Our Services" description="We Make sure to provide you the #best quality Service" bg="/images/services-bg.png" />
                <Services__Common__Section data={servicesData?.cards} />
                <NetworkVideoSection />
                <GallerySection images={images} />
                <NewsletterSection />
                <Blog__Carousel blogs={blogs} />
            </main>
            <Footer />
        </>
    )
}