import Script from "next/script";
import { Event, WithContext } from "schema-dts";

const jsonLd: WithContext<Event> = {
  "@context": "https://schema.org",
  "@type": "Event",
};

export default function PasswordGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      {children}
    </>
  );
}