'use client'
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/page-hero";
import FeatureSection from "@/components/personal-services/feature-section";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/lib/i18n";
import { Footer } from "@/components/layout/footer/footer";
import TransfersFeatureSection from "@/components/personal-services/transfer-feature-section";
import D360Cards from "@/components/personal-services/d360card";

export default function AboutPage() {
  const { t } = useTranslations();
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero backgroundImage="/personal/services-hero.png">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[800] text-[#263244] leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-4xl sm:text-5xl lg:text-6xl font-[800] mb-2 md:mb-6 text-[#263244] leading-tight">
            {t("hero.description")}
          </p>
          <Button
            className="bg-[#EB644C] text-white text-[10px] md:px-8 md:py-4 rounded-[14px]"
            size="sm"
          >
            {t("hero.downloadApp")}
          </Button>
        </Hero>

        <FeatureSection />
        <TransfersFeatureSection />
        <D360Cards />
      </main>
      <Footer />
    </div>
  );
}
