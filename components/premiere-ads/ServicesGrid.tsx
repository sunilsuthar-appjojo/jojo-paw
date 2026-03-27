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
    desc: "text-[#0A0A0A]/70",
    border: "border-black",
  },
  red: {
    bg: "bg-primary",
    text: "text-white",
    desc: "text-white/80",
    border: "border-black",
  },
  black: {
    bg: "bg-black",
    text: "text-white",
    desc: "text-white/70",
    border: "border-black",
  },
};

export default function ServicesGrid({ data }: ServicesGridProps) {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="mb-14 lg:mb-20">
          <h2 className="font-heading font-bold text-[34px] sm:text-[48px] lg:text-[56px] leading-[100%] tracking-tight text-textPrimary uppercase mb-6">
            {data.title}
          </h2>

          <p className="font-body text-[15px] sm:text-[17px] leading-[150%] text-textPrimary/70 max-w-[700px]">
            {data.description}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {data.services.map((service) => {
            const theme = themeStyles[service.theme];

            return (
              <div
                key={service.id}
                className={`
                  ${theme.bg} 
                  ${theme.border} 
                  border 
                  rounded-[28px] 
                  p-8 lg:p-10 
                  relative 
                  overflow-hidden 
                  group 
                  min-h-[260px] 
                  flex flex-col justify-between
                  shadow-[0_6px_0_0_rgba(0,0,0,1)]
                  hover:shadow-[0_10px_0_0_rgba(0,0,0,1)]
                  hover:-translate-y-1
                  transition-all duration-300
                `}
              >

                {/* Watermark Icon */}
                <div className="absolute right-[-20px] bottom-[-20px] w-[220px] h-[220px] opacity-[0.06] group-hover:opacity-[0.1] transition-all pointer-events-none">
                  <div className="relative w-full h-full">
                    <Image
                      src={service.icon}
                      alt="icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-6">

                  {/* Title */}
                  <h3
                    className={`
                      font-heading 
                      font-bold 
                      text-[26px] sm:text-[30px] lg:text-[32px] 
                      leading-[110%] 
                      tracking-tight 
                      ${theme.text} 
                      uppercase
                    `}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`
                      font-body 
                      text-[14px] sm:text-[15px] 
                      leading-[150%] 
                      ${theme.desc}
                    `}
                  >
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