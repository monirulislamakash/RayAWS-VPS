import Script from "next/script";
import { Organization, WithContext } from "schema-dts";

const jsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ray Advertising | Service",
  "url": "https://rayadvertising.com/service",
  "description": "Ray Advertising offers top-notch digital marketing services, including Pay Per Call, Lead Generation, and Affiliate Network solutions.",
  "service": [
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
    }
  ],

};
export default function eventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="en">
    <head>
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd),}}/>
    </head>
    <body>
      

      {children}

    </body>
  </html>
  );
}