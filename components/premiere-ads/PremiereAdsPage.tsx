"use client";

import HeroSection from "./HeroSection";
import ServicesGrid from "./ServicesGrid";
import ContactSection from "./ContactSection";

interface PremiereAdsData {
  hero: any;
  whatWeDo: any;
  contact: any;
}

interface PremiereAdsPageProps {
  data: PremiereAdsData;
}

export default function PremiereAdsPage({ data }: PremiereAdsPageProps) {
  return (
    <main className="min-h-screen">
      <HeroSection data={data.hero} />
      <ServicesGrid data={data.whatWeDo} />
      <ContactSection data={data.contact} />
    </main>
  );
}
