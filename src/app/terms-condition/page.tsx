import Header from "@/components/common/layout/Header";
import Footer from "@/components/common/layout/Footer";
import PageHeaderSection from "@/components/common/Page__Header__Section";
import { getSectionData } from "@/utils/api";
import AnimateContainer from "@/app/_utils/components/Animate_Container";

// Add metadata export for better SEO
export const metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions of our services',
};

// Add revalidation to cache the data
export const revalidate = 3600; // Revalidate every hour

export default async function TermsCondition() {
    // Add error handling and loading state management
    const { sectionData: termsConditionData } = await getSectionData({ 
        sectionName: 'other_contents', 
        page: 'terms' 
    }).catch(error => {
        console.error('Failed to fetch terms & conditions:', error);
        return { sectionData: { content: 'Unable to load terms & conditions.' } };
    });

    return (
        <>
            <Header />
            <main>
                <PageHeaderSection 
                    title="Terms & Conditions" 
                    description="" 
                    bg="/images/services-bg.png" 
                />
                <div className="container py-10">
                    <AnimateContainer>
                        <div 
                            className="privacy-policy-content space-y-4" 
                            dangerouslySetInnerHTML={{ 
                                __html: termsConditionData?.content || 'Content not available.' 
                            }} 
                        />
                    </AnimateContainer>
                </div>
            </main>
            <Footer />
        </>
    );
}