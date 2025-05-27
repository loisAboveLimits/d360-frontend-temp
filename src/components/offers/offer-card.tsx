"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "@/lib/i18n"
import { useLanguage } from "@/context/language-context"
import type { Offer } from "@/types/offers"
import { cn } from "@/lib/utils"

interface OfferCardProps {
  offer: Offer
  index: number
  height?: string
  width?: string
  textColor?: string
  glassBg?: string
}

export function OfferCard({
  offer,
  index,
  height = "h-[432px]",
  width = "w-full",
  textColor = "text-white",
  glassBg = "bg-white/10 backdrop-blur-md",
}: OfferCardProps) {
  const { t } = useTranslations()
  const { language } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <Link href={`/offers/${offer.slug}`}>
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300",
            height,
            width,
            offer.backgroundColor
          )}
        >
          <div className="absolute inset-0">
            <Image
              src={offer.image || "/placeholder.svg"}
              alt={language === "en" ? offer.title.en : offer.title.ar}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Gradient layer (optional if needed) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Bottom Text with Glassmorphism */}
          <div className={cn(
            "absolute bottom-0 left-0 right-0 p-4",
            glassBg,
            textColor
          )}>
            <h3 className="font-extrabold text-base md:text-lg leading-snug mb-2">
              {language === "en" ? offer.title.en : offer.title.ar}
            </h3>
            <div className="text-xs flex items-center gap-2 opacity-90">
              <Image
                src="/icons/calendar.svg"
                alt="calendar"
                width={14}
                height={14}
              />
              <span>{offer.date}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
