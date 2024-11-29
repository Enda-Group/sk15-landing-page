"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/images/VC1.JPG" },
  { src: "/images/VC2.jpeg" },
  { src: "/images/VC3.jpeg" },
  { src: "/images/VC4.jpg" },
];

export default function ImageSlider(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const prevSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div className="relative mx-auto mt-4">
     
      <div
        className="relative h-[500px] mx-12 group hover:-translate-y-2 drop-shadow-xl"
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer"
        />
        {/* Overlay Button */}
        <div className="absolute inset-0 flex items-end justify-end rounded-xl">
        <a href="https://sitikhadijah.com/products/laman-khadijah-admission-with-sewing-experience
" target="_blank" rel="noopener noreferrer">
          <button className="px-6 py-2 m-4 bg-[#e8dfcc]/70  
          text-[#721824] font-poppins rounded-lg font-semibold hover:bg-[#e8dfcc]/90 transition duration-300 ease-in-out">
            Book a Slot 
          </button></a>
        </div>
      </div>
      <button
        className="absolute left-0 top-1/2 transform h-[459px] rounded-xl hover:bg-transparent mx-1 -mt-[10px] -translate-y-1/2 bg-transparent text-white p-2 group"
        onClick={prevSlide}
      >
        <ChevronLeft className="text-[#e8dfcc] group-hover:text-white" />
      </button>
      <button
        className="absolute right-0 top-1/2 transform h-[459px] rounded-xl hover:bg-transparent mx-1 -mt-[10px] -translate-y-1/2 bg-transparent text-white p-2 group"
        onClick={nextSlide}
      >
        <ChevronRight className="text-[#e8dfcc] group-hover:text-white" />
      </button>
      {/* <div className="flex justify-center my-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-1 mx-1 ${
              index === currentIndex ? "bg-[#757070] rounded-xl" : "bg-gray-300 rounded-xl"
            } transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div> */}
    </div>
  );
}
