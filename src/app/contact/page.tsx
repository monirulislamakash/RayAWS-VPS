import PageHeaderSection from "@/components/common/Page__Header__Section";
import { Metadata } from "next";
import Form__Section from "./_utils/Form__Section";
import Newsletter from "../_utils/components/Newsletter";
// import Map__Section from "./_utils/Map__Section";
import Header from "@/components/common/layout/Header";
import Footer from "@/components/common/layout/Footer";



export const metadata: Metadata = {
    title: "Contact Us - Ray Advertising",
    description: "Ray Advertising",
};

export default function ContactUs() {
    return (
        <>
            <Header />
            <main>
                <PageHeaderSection title="Contact Us" description="RAPIDLY GROWING #1 PERFORMANCE AFFILIATE NETWORK" bg="/images/contact-us-bg.png" />
                <Form__Section />
                {/* <Map__Section /> */}
                <Newsletter />
            </main>
            <Footer />
        </>
    )
}