"use client";

import Image from "next/image";
import Link from "next/link";

interface HeroData {
  logo: {
    text: string;
    subtitle: string;
  };
  description: string;
  ctaButton: {
    text: string;
    href: string;
  };
  backgroundArrows?: string;
}

interface HeroSectionProps {
  data: HeroData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative bg-[#E63946] overflow-hidden">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10 space-y-6 lg:space-y-8">
            {/* Logo */}
            <div className="space-y-1">
              <h1 className="font-gotham font-bold text-[48px] sm:text-[64px] lg:text-[80px] leading-[90%] tracking-tight text-white uppercase">
                {data.logo.text}
              </h1>
              <p className="font-gotham font-bold text-[20px] sm:text-[24px] lg:text-[28px] leading-[100%] text-white uppercase">
                {data.logo.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="font-poppins text-[14px] sm:text-[16px] lg:text-[18px] leading-[150%] text-white/90 max-w-[500px]">
              {data.description}
            </p>

            {/* CTA Button */}
            <Link
              href={data.ctaButton.href}
              className="inline-block bg-white text-[#E63946] font-gotham font-bold text-[16px] sm:text-[18px] px-8 py-3 rounded-md hover:bg-white/90 transition-colors uppercase"
            >
              {data.ctaButton.text}
            </Link>
          </div>

          {/* Right - Arrow Illustration */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
            {data.backgroundArrows && (
              <Image
                src={data.backgroundArrows}
                alt="Upward arrows illustration"
                fill
                className="object-contain"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
