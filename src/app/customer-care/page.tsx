"use client";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/page-hero";
import { ContactImage } from "@/components/about/contact/contact-image";
import { ContactContent } from "@/components/about/contact/contact-content";
import { ContactInfo } from "@/components/about/contact/contact-info";
import { Footer } from "@/components/layout/footer/footer";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/lib/i18n";

export default function AboutPage() {
  const { t } = useTranslations();
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero backgroundImage="/care/care-hero.png">
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
        <SectionHeading className="text-xl lg:text-3xl font-extrabold">
          Our commitment is to provide outstanding services and ensure an
          exceptional banking experience. Our team is here to assist you 24/7
        </SectionHeading>
        <div className="flex flex-col md:flex-row lg:w-[70%] mx-auto lg:mb-8 items-center justify-center gap-10">
          <ContactImage />
          <ContactInfo
            title="We welcome your feedback, suggestions, and complaints"
            subtitle="through the following channels:"
            showAppSection={true}
            showComplaintText={true}
            showButton={false}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
