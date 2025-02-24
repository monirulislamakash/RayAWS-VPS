import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'
import { Toaster } from "sonner";
import AllHeaderTags from "@/components/common/AllHeaderTags";
import AllbodyTag from "@/components/common/AllbodyTag";
import Script from "next/script";
import { Organization, BreadcrumbList,FAQPage, WithContext } from "schema-dts";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600']
})

export const metadata: Metadata = {
  title: "Ray Advertising",
  description: "Accelerate business with expert Pay-Per-Call, lead generation, and affiliate marketing solutions. Boost customer acquisition and sales with Ray Advertising.",
  openGraph: {
    images:['../../public/images/og/siteOgImage.png'],
    title: "Ray Advertising",
    description: "Accelerate business with expert Pay-Per-Call, lead generation, and affiliate marketing solutions. Boost customer acquisition and sales with Ray Advertising.",
    url:'https://rayadvertising.com/',
    type:'website',

  },
};

const jsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ray Advertising",
  "url": "https://rayadvertising.com/",
  "logo": "",
  "sameAs": [
    "https://www.facebook.com/rayadvertisingllc",
    "https://x.com/RayAdvertising",
    "https://www.instagram.com/ray_advertising",
    "https://www.linkedin.com/company/rayadvertising"
  ]
};
const jsonLd1: WithContext<BreadcrumbList> = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.rayadvertising.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://rayadvertising.com/services"
    }
  ]

};
const jsonLd2: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": {
    "@type": "Question",
    "name": "",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": ""
    }
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd),}}/>
        <Script id="breadcrumbList-schema" type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd1),}}/>
        <AllHeaderTags />
      </head>
      <body
        className={`${poppins.className} antialiased`}
      >
        <AllbodyTag />

        {children}
        <Toaster />
      </body>
    </html>
  );
}
