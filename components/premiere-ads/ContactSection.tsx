"use client";

import Image from "next/image";
import { useState } from "react";

interface FormField {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
}

interface ContactData {
  title: string;
  description: string;
  illustration: string;
  form: {
    fields: FormField[];
    submitButton: string;
  };
}

interface ContactSectionProps {
  data: ContactData;
}

export default function ContactSection({ data }: ContactSectionProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({});
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="bg-background py-12 sm:py-16 lg:py-24">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header with vertical line separator */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <h2 className="font-gotham font-bold text-[28px] sm:text-[36px] lg:text-[44px] xl:text-[48px] leading-[100%] tracking-tight text-textPrimary uppercase">
              {data.title}
            </h2>
            <div className="hidden sm:block w-[3px] h-[35px] sm:h-[40px] lg:h-[50px] bg-textPrimary flex-shrink-0"></div>
            <p className="font-poppins text-[13px] sm:text-[14px] lg:text-[16px] xl:text-[18px] leading-[150%] text-textPrimary/70">
              {data.description}
            </p>
          </div>
        </div>

        {/* Form and Illustration Container */}
        <div className="bg-bgLight rounded-2xl sm:rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Form */}
            <div className="p-6 sm:p-8 lg:p-10 xl:p-12">
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                {data.form.fields.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block font-poppins text-[13px] sm:text-[14px] font-medium text-textPrimary mb-2"
                    >
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-background border border-textPrimary/20 rounded-lg font-poppins text-[14px] sm:text-[16px] text-textPrimary placeholder:text-textPrimary/40 focus:outline-none focus:ring-2 focus:ring-bgGray focus:border-transparent transition-all"
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-background border border-textPrimary/20 rounded-lg font-poppins text-[14px] sm:text-[16px] text-textPrimary placeholder:text-textPrimary/40 focus:outline-none focus:ring-2 focus:ring-bgGray focus:border-transparent transition-all"
                      />
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-bgBlack text-background font-gotham font-bold text-[15px] sm:text-[16px] lg:text-[18px] px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-bgBlack/90 disabled:bg-textPrimary/40 disabled:cursor-not-allowed transition-colors uppercase"
                >
                  {isSubmitting ? "Sending..." : data.form.submitButton}
                </button>
              </form>
            </div>

            {/* Illustration - Hidden on mobile */}
            <div className="hidden lg:flex relative h-full min-h-[400px] items-center justify-center p-6 lg:p-8">
              <div className="relative w-full h-full">
                <Image
                  src={data.illustration}
                  alt="Contact illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
