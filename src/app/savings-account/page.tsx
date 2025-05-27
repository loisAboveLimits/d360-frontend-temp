"use client";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/page-hero";
import { Footer } from "@/components/layout/footer/footer";
import { useTranslations } from "@/lib/i18n";
import { MergedFAQAccordion } from "@/components/faq-merged";
import { FAQsAbout } from "@/data/about";
import { SectionHeading } from "@/components/section-heading";
import CardVariants from "@/components/card/cards-variation";
import { Button } from "@/components/ui/button";
import { Carosels } from "@/components/savings-account/carosal-section";
import SanabilSteps from "@/components/savings-account/sanabil-steps";
import ProfitBanner from "@/components/savings-account/profit-banner";
import SanabilRates from "@/components/savings-account/sanabil-rates";
import ProfitCalculationSection from "@/components/savings-account/profit-calculation";

export default function AboutPage() {
  const { t } = useTranslations();
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero backgroundImage="/savings/savings-hero.png">
          <p className="text-xl   text-[#263244] leading-tight">
            Sanabil Daily Distribution Account{" "}
          </p>
          <h1 className="text-4xl lg:text-7xl  uppercase font-[700] text-[#263244] leading-tight">
            Daily profit, brighter future!
          </h1>
          <Button
            className="bg-[#EB644C] mt-9 mb-4  text-white text-[10px] md:px-8 md:py-4 rounded-[14px]"
            size="lg"
          >
            Open Your Savings Account
          </Button>
          <p className="text-xs   text-white leading-tight">
            *Minimum deposit of SAR 2,500 required to earn profit
          </p>
        </Hero>
        <SectionHeading className="pt-16">
          <span className="text-5xl font-extrabold ">
            {" "}
            Save today, <br /> secure tomorrow!
          </span>
        </SectionHeading>
        <Carosels/>
        <SanabilSteps/>
        <ProfitBanner/>
        <SanabilRates/>
        <ProfitCalculationSection/>

        <MergedFAQAccordion faqItems={FAQsAbout} />
      </main>
      <Footer />
    </div>
  );
}
