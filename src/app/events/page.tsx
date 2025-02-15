import PageHeaderSection from "@/components/common/Page__Header__Section";
import { Metadata } from "next";
import Events__Section from "./_utils/Events__Section";
import Blog__Carousel from "../about-us/_utils/Blog__Carousel";
import Header from "@/components/common/layout/Header";
import Footer from "@/components/common/layout/Footer";
import { getTableData } from "@/utils/api";
export const metadata: Metadata = {
    title: "Events - Ray Advertising",
    description: "Ray Advertising",
};




export default async function Events() {
    const {tableData: blogs} = await getTableData({ tableName: "blogs" })     

    const {tableData: events} = await getTableData({ tableName: "events" })


    return (
        <>
            <Header />
            <main>
                <PageHeaderSection title="Events" description="RAPIDLY GROWING #1 PERFORMANCE AFFILIATE NETWORK" bg="/images/events-bg.png" />

                <div className="section">
                    {
                        events?.map((item, idx) => (
                            <Events__Section key={idx} idx={idx} item={item} />
                        ))
                    }
                </div>

                <Blog__Carousel blogs={blogs || []} />

            </main>
            <Footer />
        </>
    )
}