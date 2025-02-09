import PageHeaderSection from "@/components/common/Page__Header__Section";
import { Metadata } from "next";
import Gallery__Carousel from "../_utils/components/Gallery__Carousel";
import Blogs__Section from "./_utils/Blogs__Section";
import Header from "@/components/common/layout/Header";
import Footer from "@/components/common/layout/Footer";
import { getSectionData } from "@/utils/api";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Blog - Ray Advertising",
    description: "Ray Advertising",
};

interface GalleryData {
    images: Array<{
        url: string;
        alt?: string;
    }>;
}

export default async function Blog() {
    let galleryData: GalleryData | null = null;
    
    try {
        const { sectionData } = await getSectionData({ 
            sectionName: 'gallery', 
            isSingle: true, 
            id: 1 
        });
        galleryData = sectionData as GalleryData;
    } catch (error) {
        console.error('Failed to fetch gallery data:', error);
    }


    const images = galleryData?.images?.map((item) => item.url);

    return (
        <>
            <Header />
            <main>
                <PageHeaderSection 
                    title="Blog" 
                    description="RAPIDLY GROWING #1 PERFORMANCE AFFILIATE NETWORK" 
                    bg="/images/blog-bg.png" 
                />
                <Suspense fallback={<div>Loading blogs...</div>}>
                    <Blogs__Section />
                </Suspense>
                <Suspense fallback={<div>Loading gallery...</div>}>
                    <Gallery__Carousel images={images || []} />
                </Suspense>
            </main>
            <Footer />
        </>
    );
}