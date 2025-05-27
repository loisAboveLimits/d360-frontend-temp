"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

interface CTAProps {
  title: string
  subtitle: string
  ctaText: string
  backgroundImage: string
  onClick?: () => void
}

export function GlobalCTA({
  title,
  subtitle,
  ctaText,
  backgroundImage,
  onClick
}: CTAProps) {
  return (
    <section className=" hidden md:flex relative w-full h-[500px] md:h-[430px] my-24  items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="CTA Background"
        fill
        priority
        className="object-cover object-center z-0"
      />

      {/* Overlay Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 px-4 max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-md mb-4">
          {title}
        </h2>
        <p className="text-md md:text-lg text-white drop-shadow-sm mb-8">
          {subtitle}
        </p>
        <Button
          className="bg-[#E74529] hover:bg-[#d23e23] text-white px-6 py-4 rounded-full font-semibold text-sm"
          onClick={onClick}
        >
          {ctaText}
        </Button>
      </motion.div>

      {/* Optional Overlay Tint */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />
    </section>
  )
}
