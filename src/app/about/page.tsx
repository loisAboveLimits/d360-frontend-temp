'use client'
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/page-hero";
import { OurStory } from "@/components/about/our-story";
import { Investors } from "@/components/about/investors";
import { FAQs } from "@/components/about/faqs/faq";
import { ContactImage } from "@/components/about/contact/contact-image";
import { ContactContent } from "@/components/about/contact/contact-content";
import { Footer } from "@/components/layout/footer/footer";
import { GlobalCTA } from "@/components/about/global-presence";
import { StatsCounter } from "@/components/about/stats-counter";
import { Button } from "@/components/ui/button"
import { useTranslations } from "@/lib/i18n"
import { MergedFAQAccordion } from "@/components/faq-merged";
import { FAQsAbout } from "@/data/about";


export default function AboutPage() {
  const { t } = useTranslations()
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
      <Hero backgroundImage="/about/about-hero.png">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[800] text-[#263244] leading-tight">
        {t("hero.title")}
      </h1>
      <p className="text-4xl sm:text-5xl lg:text-6xl font-[800] mb-2 md:mb-6 text-[#263244] leading-tight">
        {t("hero.description")}
      </p>
      <Button className="bg-[#EB644C] text-white text-[10px] md:px-8 md:py-4 rounded-[14px]" size="sm">
        {t("hero.downloadApp")}
      </Button>
    </Hero>
        <StatsCounter container="pt-22"
  stats={[
    { label: "Lorem spum", value: 250, suffix: "K" },
    { label: "Lorem spum", value: 500, suffix: "K" },
    { label: "Lorem spum", value: 300, suffix: "K" },
    { label: "Lorem spum", value: 400, suffix: "K" },
  ]}
/>


        <OurStory />
        <Investors />
        <MergedFAQAccordion faqItems={FAQsAbout}  />
        <GlobalCTA
          title="Helping you wherever you are"
          subtitle="Your opinion matters because you are at the heart of everything we do. Have a question, feedback, or even a complaint? Our team is here for you"
          ctaText="Contact Us"
          backgroundImage="/about/contact-cta.png"
        />
       <div className="md:flex flex-col md:flex-row items-center justify-center gap-10">
        <ContactImage />
        <ContactContent />
      </div>
      </main>
      <Footer />
    </div>
  );
}
