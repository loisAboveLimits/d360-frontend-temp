"use client"

import Image from "next/image"
import { Section } from "@/components/ui/section"
import { AnimatedSection } from "@/components/ui/animated-section"
import { TeamTabs } from "./team/team-tabs"
import { useTranslations } from "@/lib/i18n"
import type { TeamMemberId } from "@/types"

export function Investors() {
  const { t } = useTranslations()

  const teamMembers: { id: TeamMemberId; image: string }[] = [
    { id: "taha", image: "/about/investors/inv1.png" },
    { id: "zaki", image: "/about/investors/inv2.png" },
    { id: "ibrahim", image: "/about/investors/inv3.png" },
    { id: "bassem", image: "/about/investors/inv4.png" },
    { id: "fahad", image: "/about/investors/inv5.png" },
    { id: "nouf", image: "/about/investors/inv6.png" },
    { id: "tim", image: "/about/investors/inv7.png" },
    { id: "mudassir", image: "/about/investors/inv8.png" },
    { id: "faraz", image: "/about/investors/inv9.png" },
  ]

  return (
    <Section className="bg-gray-50">
      <AnimatedSection direction="up" className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-8 text-slate-800">{t("investors.title")}</h2>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-[150px]">
          <Image
            src="/about/investor2.png"
            alt="PIF Logo"
            width={360}
            height={161}
            className="object-contain w-[120px] h-[60px] sm:w-[200px] sm:h-[100px] md:w-[360px] md:h-[161px]"
          />
          <Image
            src="/about/investor1.png"
            alt="Dirayah Logo"
            width={242}
            height={220}
            className="object-contain w-[100px] h-[90px] sm:w-[180px] sm:h-[160px] md:w-[242px] md:h-[220px]"
          />
        </div>
      </AnimatedSection>

      <div className="mt-20">
        <h2 className="text-4xl font-bold mb-10 text-[#293242] px-6 md:px-12">{t("investors.meetLeaders")}</h2>

        <TeamTabs teamMembers={teamMembers} />
      </div>
    </Section>
  )
}
