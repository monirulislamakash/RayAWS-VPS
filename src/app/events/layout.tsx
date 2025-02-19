import Script from "next/script";
import { Event, WithContext } from "schema-dts";

const jsonLd: WithContext<Event> = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Ray Advertising | Events",
  "url": "https://rayadvertising.com/events",
  "description": "Ray Advertising offers top-notch digital marketing services, including Pay Per Call, Lead Generation, and Affiliate Network solutions.", 
};
export default function eventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="en">
    <head>
    
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd),}}/>
    </head>
    <body>
      

      {children}

    </body>
  </html>
  );
}