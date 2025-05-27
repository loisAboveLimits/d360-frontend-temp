"use client";
import { Header } from "@/components/layout/header";

import { Footer } from "@/components/layout/footer/footer";

import { useTranslations } from "@/lib/i18n";
import { SectionHeading } from "../section-heading";
import { StatsCounter } from "../about/stats-counter";
import { HomeHero } from "./home-hero";
import { ShariahSection } from "./shariha-section";
import InteractiveCardHero from "./animated-section";
import MobileAnimatedSection from "./mobile-animated-section";
import MobileTransferSection from "./international-transfers-mobile";

import ScrollSection from "../ui/sticky-scroll-reveal";
import { CardCarosels } from "./card-carosel";

export default function HomePage() {
  const { t } = useTranslations();
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="">
          <HomeHero />
        </div>
        <div className="hidden lg:block">
        <ScrollSection/>
        </div>
        <CardCarosels/>

        <SectionHeading className="mt-16 px-2 text-3xl font-bold">
          A shariah-compliant Saudi Digital Bank that provides the best
          financial experience in the Kingdom.
        </SectionHeading>
        <StatsCounter
          container="pt-0"
          stats={[
            { label: "Lorem spum", value: 250, suffix: "K" },
            { label: "Lorem spum", value: 500, suffix: "K" },
            { label: "Lorem spum", value: 300, suffix: "K" },
            { label: "Lorem spum", value: 400, suffix: "K" },
          ]}
        />


        <InteractiveCardHero />
        <MobileAnimatedSection />
        <ShariahSection />
        <MobileTransferSection />
      </main>
      <Footer />
    </div>
  );
}
