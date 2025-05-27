"use client";

import { useState } from "react";

import Image from "next/image";

const slides = [
  {
    heading: "BANKING IN A BLINK",
    paragraph: "All your banking services are completed in minutes",
    image: "/home/slide1.png",
  },
  {
    heading: "INSTANT TRANSFERS",
    paragraph: "Send and receive money with no delay",
    image: "/home/slide2.png",
  },
  {
    heading: "DIGITAL EXPERIENCE",
    paragraph: "Enjoy modern banking built for you",
    image: "/home/slide3.png",
  },
];

export function CardCarosels() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="block lg:hidden w-full min-h-screen bg-[#FDF0ED] px-4 md:px-12 py-12">
      

      {/* MOBILE View */}
      <div className=" w-full max-w-md mx-auto space-y-6">

        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold text-[#E74529]">
            {slides[current].heading}
          </h1>
          <div className="flex justify-between items-center">
          <p className="text-base w-[70%] text-[#263244]">{slides[current].paragraph}</p>
        <div className="flex justify-center gap-1">
          <button
            onClick={prevSlide}
            className="text-2xl text-[#263244] hover:text-[#E74529]"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="text-2xl text-[#263244] hover:text-[#E74529]"
          >
            →
          </button>
        </div>
        </div>
        </div>

        <div className="relative w-full h-64">
          <Image
            src={slides[current].image}
            alt={slides[current].heading}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
