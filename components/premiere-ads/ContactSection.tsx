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
    <section id="contact" className="bg-[#F5F5F5] py-16 lg:py-24">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <h2 className="font-gotham font-bold text-[36px] sm:text-[48px] lg:text-[56px] leading-[100%] tracking-tight text-[#0A0A0A] uppercase mb-4">
            {data.title}
          </h2>
          <p className="font-poppins text-[16px] sm:text-[18px] leading-[150%] text-[#4A4A4A]">
            {data.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {data.form.fields.map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="block font-poppins text-[14px] font-medium text-[#0A0A0A] mb-2"
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
                    className="w-full px-4 py-3 bg-white border border-[#E0E0E0] rounded-lg font-poppins text-[16px] text-[#0A0A0A] placeholder:text-[#BDBDBD] focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent transition-all"
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
                    className="w-full px-4 py-3 bg-white border border-[#E0E0E0] rounded-lg font-poppins text-[16px] text-[#0A0A0A] placeholder:text-[#BDBDBD] focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent transition-all"
                  />
                )}
              </div>
            ))}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#0A0A0A] text-white font-gotham font-bold text-[16px] sm:text-[18px] px-8 py-4 rounded-lg hover:bg-[#2A2A2A] disabled:bg-[#BDBDBD] disabled:cursor-not-allowed transition-colors uppercase"
            >
              {isSubmitting ? "Sending..." : data.form.submitButton}
            </button>
          </form>

          {/* Illustration */}
          <div className="relative h-[400px] lg:h-[500px]">
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
