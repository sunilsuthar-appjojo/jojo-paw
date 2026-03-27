"use client";

import Image from "next/image";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  theme: "light" | "red" | "black";
}

interface ServicesData {
  title: string;
  description: string;
  services: Service[];
}

interface ServicesGridProps {
  data: ServicesData;
}

const themeStyles = {
  light: {
    bg: "bg-[#F5F5F5]",
    text: "text-[#0A0A0A]",
    desc: "text-[#4A4A4A]",
    border: "border-[#E0E0E0]"
  },
  red: {
    bg: "bg-[#E63946]",
    text: "text-white",
    desc: "text-white/80",
    border: "border-[#D62839]"
  },
  black: {
    bg: "bg-[#0A0A0A]",
    text: "text-white",
    desc: "text-white/70",
    border: "border-[#2A2A2A]"
  }
};

export default function ServicesGrid({ data }: ServicesGridProps) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <h2 className="font-gotham font-bold text-[36px] sm:text-[48px] lg:text-[56px] leading-[100%] tracking-tight text-[#0A0A0A] uppercase mb-4">
            {data.title}
          </h2>
          <p className="font-poppins text-[16px] sm:text-[18px] leading-[150%] text-[#4A4A4A] max-w-[600px]">
            {data.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.services.map((service) => {
            const theme = themeStyles[service.theme];
            return (
              <div
                key={service.id}
                className={`${theme.bg} ${theme.border} border rounded-2xl p-6 lg:p-8 transition-transform hover:scale-[1.02] duration-300 relative overflow-hidden group`}
              >
                {/* Background Icon - Watermark Style */}
                <div className="absolute right-0 bottom-0 w-[180px] h-[180px] opacity-5 group-hover:opacity-10 transition-opacity">
                  <Image
                    src={service.icon}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className="w-16 h-16 relative">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className={`font-gotham font-bold text-[20px] sm:text-[24px] leading-[110%] tracking-tight ${theme.text} uppercase`}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className={`font-poppins text-[14px] sm:text-[16px] leading-[150%] ${theme.desc}`}>
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
