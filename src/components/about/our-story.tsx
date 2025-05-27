"use client"

import Image from "next/image"
import { Section } from "@/components/ui/section"
import { AnimatedSection } from "@/components/ui/animated-section"
import { useTranslations } from "@/lib/i18n"

export function OurStory() {
  const { t } = useTranslations()

  return (
    <Section className="bg-white">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <AnimatedSection direction="right" className="">
          <Image
            src="/about/our-story.png"
            alt="Decorative pyramid illustration"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </AnimatedSection>

        <AnimatedSection direction="up" className="md:w-[33%]">
          <h2 className="text-5xl font-[800] mb-6 text-[#293242]">{t("ourStory.title")}</h2>
          <p className="text-`[#293242]` font-[400]  mb-4">{t("ourStory.paragraph1")}</p>
          <p className="text-`[#293242]` font-[400]  mb-4">{t("ourStory.paragraph2")}</p>
          <p className="text-`[#293242]` font-[400] ">{t("ourStory.paragraph3")}</p>
        </AnimatedSection>
      </div>
    </Section>
  )
}
