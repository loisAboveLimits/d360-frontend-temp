"use client";

import { useState } from "react";

import Image from "next/image";
import { ArrowRight , ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";

const slides = [
  {
    heading: "Sanabil Daily Distribution Account Benefits",
    subheading: "Daily profit calculation and deposit",
    paragraph: "Your profits are calculated daily based on your minimum balance and automatically deposited into your account at 9:00 AM on the next business day.",
    image: "/savings/carosel1.png",
  },
  {
    heading: "Sanabil Daily Distribution Account Benefits",
    subheading: "Withdraw your money at any time",
    paragraph: "Benefit from unlimited withdrawals with no frequency restrictions, giving you full access to your funds anytime you need them",
    image: "/savings/carosel2.png",
  },
  {
    heading: "Sanabil Daily Distribution Account Benefits",
    subheading: "Dedicated IBAN for easy transfers",
    paragraph: "Get your own International Bank Account Number (IBAN) for smooth, secure transfers—whether local or international",
    image: "/savings/carosel3.png",
  },
  {
    heading: "Sanabil Daily Distribution Account Benefits",
    subheading: "Shariah Compliant",
    paragraph: "The Sanabil Savings Account follows Islamic banking principles, with all transactions and profit distributions compliant with Shariah guidelines.",
    image: "/savings/carosel4.png",
  },
];

export function Carosels() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className=" flex items-center gap-24 px-4 md:px-28  py-12">
      

     
      <div className=" w-full   space-y-6">

        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold pb-12 text-[#263244] leading-normal">
            {slides[current].heading}
          </h1>

          <h1 className="text-2xl font-semibold text-[#263244]">
            {slides[current].subheading}
          </h1>
          
          <p className="text-base  text-[#263244]">{slides[current].paragraph}</p>
        <div className="flex  gap-5">
          <button
            onClick={prevSlide}
            className="text-xl text-[#263244] hover:text-[#E74529]"
          >
            <ArrowLeft/>
          </button>
          <button
            onClick={nextSlide}
            className="text-xl text-[#263244] hover:text-[#E74529]"
          >
            <ArrowRight/>
          </button>
        </div>

        <Button size={"lg"} className="bg-[#EB644C] rounded-xl mt-12">
        Open Your Savings Account
        </Button>
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
      
    </section>
  );
}
