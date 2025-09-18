// ./src/app/(main)/service/page.tsx
"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const faqs1 = [
  {
    question: "FASHION CAMPAIGN PHOTOGRAPHY",
    reply:
      "Whether your brand requires clean e-commerce model shots, seasonal lookbooks, or a large-scale branded campaign, NDMK AGENCY is equipped to deliver outstanding visual content. From conceptualizing creative direction to handling the logistics— securing studios, models, styling teams, and photographers—we oversee every detail to ensure a smooth production process. The result? High-quality, visually compelling imagery that authentically represents your brand across both digital and print platforms.",
  },
  {
    question: "FASHION FILM",
    reply:
      "For brands looking to make an impact online, video or short film is one of the key types of content to focus on. We have built a strong reputation as a London fashion film agency which provides videography services and fashion film content to the likes of De Beers, Off-White, Marni, Tiffany & Co and Nordstrom, with an emphasis on creating contemporary, commercial, editorial, luxury and social media video content.",
  },
  {
    question: "Content Creation",
    reply:
      "Our fashion content creation service encompasses a wide range of high-quality services tailored for brand engagement and audience growth. We specialise in captivating photography, and fashion film, which can be distributed across social media, blogs, video channels, and brand e-commerce sites. Our team includes seasoned fashion professionals, writers, photographers, and digital designers, all dedicated to elevating your brand\'s presence, educating your audience, and driving sales.",
  },
];

const FashionAgency = () => {
  const [openIndex1, setOpenIndex1] = useState<number | null>(null);

  const toggleFAQ1 = (index: number) => {
    setOpenIndex1(openIndex1 === index ? null : index);
  };

  return (
    <section className="w-full mx-auto text-white my-10">
      <div className="grid grid-cols-12 gap-4 md:p-10 p-5">
        <div className="col-span-12 md:col-span-7 text-6xl">SERVICES</div>
        <p className="col-span-12 md:col-span-5 text-sm text-gray-300 text-justify leading-relaxed">
          NDMK agency is a London-based creative studio that brings brands to life through innovative digital
          experiences. We specialize in crafting websites, e-commerce platforms, branding, and visual content for the
          fashion, lifestyle, and beauty industries. From emerging start-ups to globally recognized luxury brands, we
          create tailored solutions that elevate our clients in the digital space.
        </p>
      </div>

      <div className="flex justify-center mb-5">
        <video className="w-full shadow-2xl" autoPlay muted loop playsInline>
          <source src="/assets/images/video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="grid grid-cols-12 gap-4 md:p-10 p-5">
        <div className="col-span-12 md:col-span-6 text-6xl">CREATIVE CONTENT FOR FASHION</div>
        <div className="col-span-12 md:col-span-6 text-sm text-gray-300 md:px-5">
          <p className="text-justify leading-relaxed">
            Even if we do say so ourselves, NDMK AGENCY is one of London&apos;s leading fashion creative agencies,
            seamlessly merging bold strategies with cutting-edge digital solutions. Whether we&apos;re launching an emerging
            brand or elevating an established luxury label, our goal is to make an impact in the fashion and digital
            space. What sets us apart? A strong foundation in brand strategy and retail expertise. But we&apos;re more than
            just another creative agency—we&apos;re a tight-knit team dedicated to crafting distinct, memorable brand
            identities that stand out.
          </p>
          <div className="mt-5">
            {faqs1.map((faq, index) => (
              <div key={index} className="border-b border-gray-800 pb-2">
                <button
                  className="w-full flex justify-between items-center uppercase text-sm font-semibold py-2 focus:outline-none"
                  onClick={() => toggleFAQ1(index)}
                >
                  {faq.question}
                  {openIndex1 === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                <div
                  className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                    openIndex1 === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-gray-400 p-2">{faq.reply}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FashionAgency;
