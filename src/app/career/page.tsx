import PageHeaderSection from "@/components/common/Page__Header__Section";
import { Metadata } from "next";
import Jobs__Grids from "./_utils/Jobs__Grids";
import Header from "@/components/common/layout/Header";
import Footer from "@/components/common/layout/Footer";
import { getTableData } from "@/utils/api";

export const metadata: Metadata = {
    title: "Career - Ray Advertising",
    description: "Ray Advertising",
};
export default async function Career() {

    const { tableData: jobsCategoriesData } = await getTableData({ tableName: 'job_categories' })
    return (
        <>
            <Header />
            <main>
                <PageHeaderSection title="Career" description="#shine your professional Journey with us" bg="/images/career-bg.png" />
                <Jobs__Grids jobsCategoriesData={jobsCategoriesData || []} />
            </main>
            <Footer />
        </>
    )
}