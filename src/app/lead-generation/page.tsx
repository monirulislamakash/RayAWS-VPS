import PageHeaderSection from "@/components/common/Page__Header__Section";
import { CalendarClock, User2Icon } from "lucide-react";
import { Metadata } from "next";
import Blog__Carousel from "@/app/about-us/_utils/Blog__Carousel";
import Image from "next/image";
import Newsletter from "./_utils/Newslatter";
// import { Oswald } from "next/font/google";
import Header from "@/components/common/layout/Header";
import Footer from "@/components/common/layout/Footer";
import { createClient } from "@/utils/supabase/server";
import { getTableData } from "@/utils/api";
import Share from "@/app/blog/_utils/Share";
import moment from "moment";
import { Article, WithContext } from "schema-dts";
import Script from "next/script";
import Service_herro_section from "./_utils/Service_herro_section"
import Service_body from "./_utils/Service_body";
import OurService from './_utils/our_service'

type Blog = {
    id: number;
    title: string;
    description: string;
    images: any[];
  };
export const metadata: Metadata = {
    title: "Lead Generation - Ray Advertising",
    description: "Ray Advertising",
};


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function PayParCall() {
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
                <Service_herro_section />
                <Service_body/>
                <OurService/>
                <Blog__Carousel blogs={blogs} />
            </main>
            <Footer />
        </>
    )
}