import Script from "next/script";
import { Service, WithContext } from "schema-dts";

const jsonLd: WithContext<Service> = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Ray Advertising | Services",
  "url": "https://rayadvertising.com/services",
  "logo": "https://www.rayadvertising.com/logo.png",
  "description": "Ray Advertising offers top-notch digital marketing services, including Pay Per Call, Lead Generation, and Affiliate Network solutions.",
  "services": [
    {
      "@type": "Service",
      "serviceType": "Pay Per Call",
      "description": "We specialize in pay-per-call marketing, connecting businesses with high-quality phone leads."
    },
    {
      "@type": "Service",
      "serviceType": "Lead Generation",
      "description": "We provide high-quality lead generation services to help businesses grow their customer base."
    },
    {
      "@type": "Service",
      "serviceType": "Affiliate Network",
      "description": "Join our affiliate network and monetize your traffic with top-performing offers."
    }],
};

export default function PasswordGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="Services-schema" type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd),}}/>
      {children}
    </>
  );
}