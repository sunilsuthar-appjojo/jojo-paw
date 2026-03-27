"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";

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

  const handleSubmit = async (e: FormEvent) => {
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
    <section id="contact" className=" py-16 lg:py-24">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header with vertical line separator */}
        <div className="mb-12 lg:mb-16 flex items-center gap-6">
          <h2 className="font-gotham font-bold text-[36px] sm:text-[48px] lg:text-[56px] leading-[100%] tracking-tight text-textPrimary uppercase whitespace-nowrap">
            {data.title}
          </h2>
          <div className="hidden sm:block w-[3px] h-[50px] lg:h-[60px] bg-textPrimary flex-shrink-0"></div>
          <p className="hidden sm:block font-poppins text-[16px] sm:text-[18px] leading-[150%] text-textPrimary/70">
            {data.description}
          </p>
        </div>
        
        {/* Mobile description (below title) */}
        <p className="sm:hidden font-poppins text-[16px] leading-[150%] text-textPrimary/70 mb-12">
          {data.description}
        </p>

        <div className="grid lg:grid-cols-2 lg:gap-6 items-center bg-bgLight rounded-xl py-2 pl-15">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 p-10">
            {data.form.fields.map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="block font-poppins text-[14px] font-medium text-textPrimary mb-2"
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
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-bgLight rounded-lg font-poppins text-[16px] text-textPrimary placeholder:text-textPrimary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
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
                    className="w-full px-4 py-3 bg-background border border-bgLight rounded-lg font-poppins text-[16px] text-textPrimary placeholder:text-textPrimary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                )}
              </div>
            ))}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-bgBlack text-background font-gotham font-bold text-[16px] sm:text-[18px] px-8 py-4 rounded-lg hover:bg-bgBlack/90 disabled:bg-textPrimary/40 disabled:cursor-not-allowed transition-colors uppercase"
            >
              {isSubmitting ? "Sending..." : data.form.submitButton}
            </button>
          </form>

          {/* Illustration */}
          <div className="relative h-[400px] lg:h-[500px] left-19">
            <Image
              src={data.illustration}
              alt="Contact illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
