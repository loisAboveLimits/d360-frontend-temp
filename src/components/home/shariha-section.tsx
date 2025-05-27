"use client";

import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ShariahSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[460px] flex items-center justify-start text-white overflow-hidden">
     
      <Image
        src="/home/shariah-bg.png" 
        alt="Shariah background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          SHARIAH <br /> COMPLIANT
        </h2>
        <p className="text-sm md:text-base leading-relaxed mb-8">
          D360 Bank is committed to the principles of Islamic Shariah and ensuring compliance in all its banking
          transactions. To achieve this, an independent Shariah committee has been established to oversee all the
          bank's operations, products, and services.
        </p>
        <Link
          href="/shariah"
          className="w-[50%] flex items-center justify-between lg:gap-3 px-2 mx-auto lg:mx-0 lg:px-5 py-2 border border-white rounded-lg hover:bg-white hover:text-[#0B1B2B] transition"
        >
          Read more <ChevronRight className="lg:w-6 lg:h-6" />
        </Link>
      </div>
    </section>
  );
}
