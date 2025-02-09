import Header from "@/components/common/layout/Header";
import Footer from "@/components/common/layout/Footer";
import PageHeaderSection from "@/components/common/Page__Header__Section";
import { getSectionData } from "@/utils/api";
import { Metadata } from "next";
import AnimateContainer from "@/app/_utils/components/Animate_Container";
export const metadata: Metadata = {
    title: "Privacy Policy - Ray Advertising",
    description: "Ray Advertising",
};


export default async function PrivacyPolicy() {
    const { sectionData: privacyPolicyData } = await getSectionData({ sectionName: 'other_contents', page: 'privacy-policy' });
    return (
        <>
            <Header />
            <main>
                <PageHeaderSection title="Privacy Policy" description="" bg="/images/services-bg.png" />
                <div className="container py-10">
                    <AnimateContainer>
                        <div className="privacy-policy-content space-y-4" dangerouslySetInnerHTML={{ __html: privacyPolicyData?.content || '' }} /> 
                    </AnimateContainer>
                </div>
            </main>
            <Footer />
        </>
    );
}