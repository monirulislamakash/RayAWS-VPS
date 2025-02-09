import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'
import { Toaster } from "sonner";
import AllHeaderTags from "@/components/common/AllHeaderTags";
import AllbodyTag from "@/components/common/AllbodyTag";
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600']
})

export const metadata: Metadata = {
  title: "Ray Advertising",
  description: "Ray Advertising",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <AllHeaderTags />
      </head>
      <body
        className={`${poppins.className} antialiased`}
      >
        <AllbodyTag/>

        {children}
        <Toaster />
      </body>
    </html>
  );
}
