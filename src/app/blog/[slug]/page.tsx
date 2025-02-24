import PageHeaderSection from "@/components/common/Page__Header__Section";
import { CalendarClock, User2Icon } from "lucide-react";
import { Metadata } from "next";
import Blog__Carousel from "@/app/about-us/_utils/Blog__Carousel";
import Image from "next/image";
// import { Oswald } from "next/font/google";
import Header from "@/components/common/layout/Header";
import Footer from "@/components/common/layout/Footer";
import { createClient } from "@/utils/supabase/server";
import { getTableData } from "@/utils/api";
import Share from "@/app/blog/_utils/Share";
import moment from "moment";
import { Article, WithContext } from "schema-dts";
import Script from "next/script";


// const oswald = Oswald({
//     subsets: ['latin'],
//     weight: ['400', '500', '600', '700'],
// })

export const metadata: Metadata = {
    title: "Blog - Ray Advertising",
    description: "Ray Advertising",
};


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function SingleBlog({ params: { slug } }: any) {
    const supabase = await createClient()
    const { data: blogsData } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .single()


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { tableData }: any = await getTableData({ tableName: "blogs" })


    const data = [
        {
            icon: <CalendarClock className='w-[15px] h-[15px] text-secondary' />,
            title: moment(blogsData?.created_at).format('DD MMMM YYYY'),
        },
        {
            icon: <User2Icon className='w-[15px] h-[15px] text-secondary' />,
            title: blogsData?.author_name,
        },
    ]
    const jsonLd: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": `${blogsData?.title}`,
        "description":`${blogsData?.description}`,
        "datePublished":`${blogsData?.created_at}`,
        "image":`${blogsData?.image}`,
        "publisher": {
          "@type": "Organization",
          "name": "Ray Advertising",
          "logo": {
            "@type": "ImageObject",
            "url":`${blogsData?.title}`
          }
        }
    }
    return (
        <>
            <Header />
            <main>
                <PageHeaderSection data={data} title={blogsData?.title} bg="/images/single-blog-bg.png" />
                <div className="container section">
                    <div className="featured-image">
                        {
                            blogsData?.image && (
                                <Image className="object-cover w-full rounded-[7px]" src={blogsData?.image} alt="Blog Image" width={1000} height={1000} />
                            )
                        }
                    </div>
                    <div className="flex justify-center md:justify-end items-end py-5">
                        <Share url={`https://www.rayadvertising.com/blog/${blogsData?.slug}`} />
                    </div>

                    <div className="content" dangerouslySetInnerHTML={{ __html: `${blogsData?.description}` }} />

                        {/* <h2 className={`${oswald.className} text-[28px] md:text-[38px] font-semibold text-primary pb-4`}> What is EPC (Earnings Per Click)?</h2>
                        <p className="text-[16px] md:text-[18px] text-text_color font-normal">
                            Earnings per click (commonly referred to as just EPC) is the average amount of money earned for each campaign link click. That number is determined by a simple formula: earnings divided by clicks = EPC.
                            The ‘earnings’ that are being divided is the amount you’ve earned for the cumulative leads generated. Your EPC is always going to be zero if you haven’t generated any leads.
                            Here’s an example:
                            Let’s say you’ve been promoting a campaign that pays out $20 for each lead. Let’s also say the you’ve generated 10 leads earning you a total of $200. If your affiliate link was clicked 250 times, your EPC would be $0.80 (200 ÷ 250 = 0.80).
                            So on average, for every click your link receives you’re earning 80 cents.
                            Simple enough, right?
                            What exactly are you supposed to do with that number, though? What is its purpose, and how do you know if you’re looking at a good EPC or a bad EPC?
                        </p> */}
                    {/* </div> */}


                </div>
                <Blog__Carousel blogs={tableData || []} />
            </main>
            <Footer />
            <Script id="Articles-schema" type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd),}}/>
        </>
    )
}