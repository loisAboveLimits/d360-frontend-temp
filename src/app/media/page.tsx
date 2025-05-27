"use client";
import { Header } from "@/components/layout/header";
import { Section } from "@/components/ui/section"
import { AnimatedSection } from "@/components/ui/animated-section"
import { MediaTabs } from "@/components/media/media-tabs"
import { galleryImages, newsArticles } from "@/data/media"
import { Hero } from "@/components/layout/page-hero";
import { Footer } from "@/components/layout/footer/footer";
import { useTranslations } from "@/lib/i18n";

export default function MediaPage() {
  const { t } = useTranslations();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero backgroundImage="/media/media-hero.png">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[800] text-[#293242] leading-tight">
            D360 <br /> Media <br /> Center
          </h1>
        </Hero>

        <div className="bg-gray-50 py-18">
            <MediaTabs galleryImages={galleryImages} newsArticles={newsArticles} />
         
        </div>
      </main>
      <Footer />
    </div>
  );
}
