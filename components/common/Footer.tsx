"use client";

import Image from "next/image";
import Link from "next/link";
import { JSX, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";

export interface FooterData {
  logo?: {
    text?: string;
    image?: string;
    alt: string;
    width?: number;
    height?: number;
  };
  sections: Array<{
    title: string;
    isTwoColumn?: boolean;
    links: Array<{
      label: string;
      href: string;
    }>;
  }>;
  socials?: {
    title: string;
    links: Array<{
      platform: string;
      url: string;
      icon: string;
    }>;
  };
  bottomLinks?: Array<{
    label: string;
    href: string;
  }>;
  copyright: string;
}

interface FooterProps {
  data: FooterData;
  bgColor?: string;
}

const SocialIcon = ({ icon }: { icon: string }) => {
  const iconComponents: { [key: string]: JSX.Element } = {
    instagram: <FaInstagram className="w-5 h-5" />,
    youtube: <FaYoutube className="w-5 h-5" />,
    facebook: <FaFacebookF className="w-5 h-5" />,
    twitter: <FaXTwitter className="w-5 h-5" />,
    linkedin: <FaLinkedinIn className="w-5 h-5" />
  };

  return (
    <Link
      href="#"
      className="w-10 h-10 rounded-full bg-bgBlack flex items-center justify-center hover:opacity-80 transition-opacity"
      aria-label={icon}
    >
      <span className="text-background">
        {iconComponents[icon] || iconComponents.instagram}
      </span>
    </Link>
  );
};

const AccordionSection = ({
  section,
  isOpen,
  onToggle
}: {
  section: FooterData['sections'][0];
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="border-b border-textPrimary/20">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <h3 className="font-gotham font-bold text-[20px] leading-[100%] tracking-[0%] uppercase text-textPrimary">
          {section.title}
        </h3>
        <svg
          className={`w-5 h-5 text-bgGray transition-transform duration-300 ${isOpen ? "rotate-180" : ""
            }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] pb-4" : "max-h-0"
          }`}
      >
        {section.isTwoColumn ? (
          <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
            {section.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-poppins text-[16px] font-normal leading-[100%] tracking-[0%] text-bgGray hover:text-textPrimary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ) : (
          <ul className="space-y-2.5">
            {section.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-poppins text-[16px] font-normal leading-[100%] tracking-[0%] text-bgGray hover:text-textPrimary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default function Footer({ data, bgColor = "#0A0F15" }: FooterProps) {
  const [openSections, setOpenSections] = useState<number[]>([]);
  const searchParams = useSearchParams();
  const [dynamicBgColor, setDynamicBgColor] = useState(bgColor);

  useEffect(() => {
    const bgParam = searchParams.get('bg');
    if (bgParam) {
      // Support both hex colors with or without #
      const color = bgParam.startsWith('#') ? bgParam : `#${bgParam}`;
      setDynamicBgColor(color);
    } else {
      setDynamicBgColor(bgColor);
    }
  }, [searchParams, bgColor]);

  const toggleSection = (index: number) => {
    setOpenSections(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <footer className="bg-bgSoft">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-8 lg:py-10">
        <div className="hidden lg:flex lg:items-start lg:justify-between lg:gap-12 mb-8 lg:mb-10">
          {/* Logo */}
          {data.logo && (
            <div className="flex-shrink-0">
              <Link href="/" className="inline-block">
                {data.logo.image ? (
                  <Image
                    src={data.logo.image}
                    alt={data.logo.alt}
                    width={data.logo.width || 160}
                    height={data.logo.height || 48}
                    className="w-auto h-auto"
                    style={{ maxWidth: data.logo.width || 160, maxHeight: data.logo.height || 48 }}
                  />
                ) : (
                  <div className="text-textPrimary">
                    <div className="font-gotham text-[20px] font-bold">JOJO</div>
                    <div className="font-poppins text-[16px] font-normal">LIMITED</div>
                  </div>
                )}
              </Link>
            </div>
          )}

          {/* All Sections in a Row */}
          <div className="flex gap-12 flex-1 justify-around">
            {data.sections.map((section: any, idx: any) => (
              <div key={idx} className="flex-shrink-0">
                {section.title && (
                  <h3 className="font-gotham font-bold text-[20px] leading-[100%] tracking-[0%] uppercase mb-7 text-textPrimary">
                    {section.title}
                  </h3>
                )}
                {section.isTwoColumn ? (
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                    {section.links.map((link: any) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="font-poppins text-[16px] font-normal leading-[100%] tracking-[0%] text-bgGray hover:text-textPrimary transition-colors whitespace-nowrap"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-x-8 gap-y-4">
                    {section.links.map((link: any) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="font-poppins text-[16px] font-normal leading-[100%] tracking-[0%] text-bgGray hover:text-textPrimary transition-colors whitespace-nowrap"
                        >
                          {link.label}
                        </Link>
                    ))}
                    </div>
                )}
              </div>
            ))}

            {/* Socials */}
            {data.socials && (
              <div className="flex-shrink-0">
                <h3 className="font-gotham font-bold text-[20px] leading-[100%] tracking-[0%] uppercase mb-7 text-textPrimary">
                  {data.socials.title}
                </h3>
                <div className="flex gap-2.5 flex-wrap">
                  {data.socials.links.map((social: any) => (
                    <SocialIcon key={social.platform} icon={social.icon} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Layout - Accordion */}
        <div className="lg:hidden mb-6 sm:mb-8">
          {/* Logo */}
          {data.logo && (
            <div className="flex-shrink-0 mb-6">
              <Link href="/" className="inline-block">
                {data.logo.image ? (
                  <Image
                    src={data.logo.image}
                    alt={data.logo.alt}
                    width={data.logo.width || 140}
                    height={data.logo.height || 42}
                    className="w-auto h-auto"
                    style={{ maxWidth: data.logo.width || 140, maxHeight: data.logo.height || 42 }}
                  />
                ) : (
                  <div className="text-textPrimary">
                    <div className="font-gotham text-[18px] font-bold">JOJO</div>
                    <div className="font-poppins text-[14px] font-normal">LIMITED</div>
                  </div>
                )}
              </Link>
            </div>
          )}

          {/* Accordion Sections */}
          <div className="w-full border-t border-textPrimary/10">
            {data.sections.map((section: any, idx: any) => (
              <AccordionSection
                key={idx}
                section={section}
                isOpen={openSections.includes(idx)}
                onToggle={() => toggleSection(idx)}
              />
            ))}

            {/* Socials Accordion */}
            {data.socials && (
              <div className="border-b border-textPrimary/20">
                <button
                  onClick={() => toggleSection(999)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <h3 className="font-gotham font-bold text-[20px] leading-[100%] tracking-[0%] uppercase text-textPrimary">
                    {data.socials.title}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-bgGray transition-transform duration-300 ${openSections.includes(999) ? "rotate-180" : ""
                      }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openSections.includes(999) ? "max-h-[200px] pb-4" : "max-h-0"
                    }`}
                >
                  <div className="flex gap-2.5 flex-wrap">
                    {data.socials.links.map((social: any) => (
                      <SocialIcon key={social.platform} icon={social.icon} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-0 sm:border-t border-textPrimary/20 pt-4 lg:pt-5 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
          <p className="font-poppins text-[13px] sm:text-[14px] lg:text-[16px] font-normal leading-[100%] tracking-[0%] text-textPrimary">{data.copyright}</p>
          {data.bottomLinks && (
            <div className="flex gap-3 sm:gap-4 lg:gap-8">
              {data.bottomLinks.map((link: any) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-poppins text-[13px] sm:text-[14px] lg:text-[16px] font-normal leading-[100%] tracking-[0%] text-textPrimary hover:text-textPrimary/70 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
