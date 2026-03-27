import Footer from "@/components/common/Footer";
import { getFooterData } from "@/lib/data";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";
import "./globals.css";

const gothamXNarrow = localFont({
  src: "../public/fonts/gotham-fonts/Gotham XNarrow Bold.otf",
  variable: "--font-gotham",
  weight: "700",
  display: "swap",
});

const poppins = localFont({
  src: [
    {
      path: "../public/fonts/poppains/Poppins-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/poppains/Poppins-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/poppains/Poppins-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/poppains/Poppins-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/fonts/poppains/Poppins-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/poppains/Poppins-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/poppains/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/poppains/Poppins-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/poppains/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/poppains/Poppins-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/poppains/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/poppains/Poppins-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/poppains/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/poppains/Poppins-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/poppains/Poppins-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/poppains/Poppins-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/poppains/Poppins-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/poppains/Poppins-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JOJO Inc - Entertainment & Media Company",
  description: "JOJO Inc is a leading entertainment and media company driving innovation in content creation and global distribution.",
  keywords: ["JOJO Inc", "entertainment", "media", "content creation", "global distribution"],
  authors: [{ name: "JOJO Inc" }],
  openGraph: {
    title: "JOJO Inc - Entertainment & Media Company",
    description: "JOJO Inc is a leading entertainment and media company driving innovation in content creation and global distribution.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "JOJO Inc - Entertainment & Media Company",
    description: "JOJO Inc is a leading entertainment and media company driving innovation in content creation and global distribution.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const footerData = await getFooterData();

  return (
    <html lang="en" className={`${gothamXNarrow.variable} ${poppins.variable}`}>
      <body className="font-poppins">
        <main className="flex-1">{children}</main>
        <Suspense fallback={<div className="h-64 bg-[#0A0F15]" />}>
          <Footer data={footerData} />
        </Suspense>
      </body>
    </html>
  );
}
