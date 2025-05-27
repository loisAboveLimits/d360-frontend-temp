"use client";

import Image from "next/image";
import { Calendar } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useLanguage } from "@/context/language-context";
import type { Offer } from "@/types/offers";

interface OfferDetailsProps {
  offer: Offer;
}

export function OfferDetails({ offer }: OfferDetailsProps) {
  const { language } = useLanguage();

  return (
    <div>
      <div className="hidden lg:flex relative h-72 md:h-96 w-full overflow-hidden mb-10">
        <Image
          src={offer.ctaImage || offer.image || "/placeholder.svg"}
          alt={language === "en" ? offer.title.en : offer.title.ar}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="max-w-xl w-full mx-auto px-4 md:px-0 mt-10 lg:mt-0">
        {/* Title */}

        <h1 className="text-xl md:text-[60px] font-extrabold text-[#263244] mb-4">
          {language === "en" ? offer.title.en : offer.title.ar}
        </h1>

        {/* Description */}

        <p className="text-sm text-[#263244]">
          {language === "en" ? offer.description.en : offer.description.ar}
        </p>

        {/* Validity */}
        {offer.validUntil && (
          <div className="mb-4 ">
            <h2 className="text-sm font-semibold text-[#263244] mb-1">
              {language === "en" ? "Offer Duration" : "مدة العرض"}
            </h2>
            <p className="text-sm text-[#263244]">{offer.validUntil}</p>
          </div>
        )}

        {/* How to Benefit */}
        {offer.howToBenefit && (
          <div className="mb-4 ">
            <h2 className="text-sm font-semibold text-[#263244] mb-1">
              {language === "en"
                ? "How to Benefit from the Offer"
                : "كيفية الاستفادة من العرض"}
            </h2>
            <p className="text-sm text-[#263244]">
              {(language === "en"
                ? offer.howToBenefit.en
                : offer.howToBenefit.ar
              ).join(" ")}
            </p>
          </div>
        )}

        {/* Terms */}
        {offer.terms && (
          <div className="mb-4 lg:mb-10">
            <h2 className="text-sm font-semibold text-[#263244] mb-2">
              {language === "en" ? "Terms and Conditions" : "الشروط والأحكام"}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-[#263244]">
              {(language === "en" ? offer.terms.en : offer.terms.ar).map(
                (term, index) => (
                  <li key={index}>{term}</li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
