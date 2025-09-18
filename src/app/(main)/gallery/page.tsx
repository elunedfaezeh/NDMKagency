"use client";
import Image from "next/image";

const images = [
  "/assets/images/IMG_5134.jpg",
  "/assets/images/IMG_5138.jpg",
  "/assets/images/IMG_5126.jpg",
  "/assets/images/IMG_5139.jpg",
  "/assets/images/IMG_5153.jpg",
  "/assets/images/IMG_5155.jpg",
];

const Gallery3D = () => {
  const step = 360 / images.length;

  return (
    <div className="container mx-auto relative h-160 my-10 flex items-center justify-center overflow-hidden">
      <div className="w-75 h-90 animate-spin3D absolute"
        style={{ transformStyle: "preserve-3d", transform: "perspective(1000px)" }}>
        {images.map((src, i) => (
          <Image key={i} src={src} alt={`img-${i}`} width={500} height={500}
            className="absolute w-full h-full object-cover rounded-xl cursor-pointer"
            style={{ transform: `rotateY(${step * i}deg) translateZ(310px)`, }}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery3D;
