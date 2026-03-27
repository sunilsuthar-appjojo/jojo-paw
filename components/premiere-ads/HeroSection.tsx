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
    <section className="relative bg-primary overflow-hidden">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-12 pt-16 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10 space-y-6 lg:space-y-8">
            <div className="w-[250px] sm:w-[320px] lg:w-[350px]">
              <Image
                src="/images/logos/PAW-LOGO.svg"
                alt="Premiere Ads World"
                width={350}
                height={100}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Description */}
            <p className="font-poppins text-[14px] sm:text-[16px] lg:text-[18px] leading-[150%] text-background max-w-[500px]">
              {data.description}
            </p>

            {/* CTA Button */}
            <Link
              href={data.ctaButton.href}
              className="inline-block bg-background text-black font-poppins font-semibold text-[14px] sm:text-[18px] px-8 py-3 rounded-md hover:bg-background/90 transition-colors uppercase"
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
