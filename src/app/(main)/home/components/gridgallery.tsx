"use client";
import React from "react";
import Image from "next/image";
const images = [
    "/assets/images/1.jpg",
    "/assets/images/2.jpg",
    "/assets/images/3.jpg",
    "/assets/images/4.jpg",
    "/assets/images/5.jpg",
    "/assets/images/6.jpg",
    "/assets/images/7.jpg",
    "/assets/images/8.jpg",
    "/assets/images/9.jpg",
    "/assets/images/10.jpg",
    "/assets/images/11.jpg",
    "/assets/images/12.jpg",
    "/assets/images/13.jpg",
    "/assets/images/14.jpg",
    "/assets/images/15.jpg",
    "/assets/images/16.jpg",
];

const GridGallery = () => {
    const columns = Array.from({ length: 8 }, () =>
        [...images, ...images] // برای لوپ، عکس‌ها رو تکرار کن
    );
    return (
        <section className="container mx-auto h-[80vh] overflow-hidden p-5 mt-30 mb-40">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {columns.map((columnImages, colIndex) => (
                    <div key={colIndex} className="relative h-full overflow-hidden">
                        <div className={`flex flex-col gap-3 ${colIndex % 2 === 0 ? "scroll-up" : "scroll-down"}`}>
                            {columnImages.map((src, i) => (
                         <Image width={500} height={500}  key={i} src={src} alt={`image-${i}`} className="w-full h-60 md:h-80 object-cover rounded-lg" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default GridGallery;
