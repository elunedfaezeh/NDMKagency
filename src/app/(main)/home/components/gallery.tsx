"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useMemo } from "react";

const Gallery = () => {
  const images = useMemo(() => [
    { url: "/assets/images/16.jpg" },
    { url: "/assets/images/14.jpg" },
    { url: "/assets/images/11.jpg" },
    { url: "/assets/images/15.jpg" },
    { url: "/assets/images/12.jpg" },
    { url: "/assets/images/13.jpg" },
  ], []);
  const [url, setUrl] = useState(images[0].url);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 10000);
    return () => clearInterval(interval); // پاک کردن interval هنگام desmont شدن کامپوننت
  }, [images.length]);


  useEffect(() => {
    setUrl(images[index].url); // بروزرسانی عکس اصلی
  }, [index, images]);

  const onChange = (url: string, index: number) => {
    setUrl(url);
    setIndex(index);
  }


  return (
    <section className="container mx-auto px-4 md:px-0 my-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">

        {/* ستون دوم: متن یا توضیحات */}
        <div className="col-span-12 xl:col-span-4 space-y-4 px-3 md:px-0 text-gray-300">
          <h2 className="text-3xl md:text-4xl font-bold ">
            CREATIVE CONTENT FOR FASHION
          </h2>
          <p className="text-justify leading-relaxed mt-5">
            NDMK agency is a London-based creative studio that brings brands to life through innovative digital experiences. We specialize in crafting websites, e-commerce platforms, branding, and visual content for the fashion, lifestyle, and beauty industries. From emerging start-ups to globally recognized luxury brands, we create tailored solutions that elevate our clients in the digital space.
          </p>
        </div>

        {/* ستون اول: عکس اصلی و تصاویر کوچک */}
        <div className="col-span-12 md:col-span-8 relative">
          <div className="flex flex-col md:flex-row justify-center gap-6 relative">

            {/* تصویر اصلی */}
            <Image
              width={500} height={500}
              src={url}
              alt="main"
              key={url} // این خیلی مهمه برای trigger شدن transition در تغییر عکس
              className="w-full md:w-[550px] h-100 md:h-[85vh] rounded-xl object-cover transition-all duration-700 animate-fade-show"
            />
            {/* تصاویر کوچک */}
            <div className="absolute right-2 flex flex-col gap-2 rounded-lg z-10 md:static md:flex md:flex-col md:h-[85vh] md:bg-transparent md:backdrop-blur-0">
              {images.map((item, index) => (
                <Image
                  width={500} height={500}
                  key={index}
                  src={item.url}
                  alt={`thumb-${index}`}
                  onClick={() => onChange(item.url, index)}
                  className={`w-14 h-14 md:w-28 md:h-full object-cover rounded-lg cursor-pointer border-2 
                    ${url === item.url ? "border-red-900" : "border-transparent"} 
                    hover:scale-105  duration-1000 transition-all`}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
