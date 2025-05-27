"use client";

import { Header } from "@/components/layout/header";
import { useState, useMemo, useEffect } from "react";
import { Hero } from "@/components/layout/page-hero";
import { Footer } from "@/components/layout/footer/footer";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/lib/i18n";
import { Section } from "@/components/ui/section";
import { AnimatedSection } from "@/components/ui/animated-section";
import { OfferCard } from "@/components/offers/offer-card";
import { CategoryTabs } from "@/components/offers/category-tabs";
import { offers, offerCategories } from "@/data/offer";
import { AnimatePresence, motion } from "framer-motion";

export default function OffersPage() {
  const { t } = useTranslations();
  const [activeCategory, setActiveCategory] = useState("all");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Watch for screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredOffers = useMemo(() => {
    if (activeCategory === "all") return offers;
    return offers.filter((offer) => offer.category === activeCategory);
  }, [activeCategory]);

  const visibleOffers =
    isMobile && !isExpanded ? filteredOffers.slice(0, 3) : filteredOffers;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero backgroundImage="/offers/offers-hero.png">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[800] text-white leading-tight">
            D360 Bank <br /> Offers
          </h1>
        </Hero>

        <Section className="bg-gray-50 lg:px-28">
          <div className="flex flex-col md:flex-row">
            <AnimatedSection direction="right" className="md:flex-shrink-0">
              <CategoryTabs
                categories={offerCategories}
                activeCategory={activeCategory}
                onCategoryChange={(cat) => {
                  setActiveCategory(cat);
                  setIsExpanded(false); // reset view on tab change
                }}
              />
            </AnimatedSection>

            <AnimatedSection direction="left" className="flex-1">
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2"
              >
                <AnimatePresence initial={false}>
                  {visibleOffers.map((offer, index) => (
                    <motion.div
                      key={offer.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <OfferCard
                        offer={offer}
                        index={index}
                        height="h-[200px] lg:h-[300px]"
                        width="w-full"
                        textColor="text-white"
                        glassBg="bg-white/10 backdrop-blur-md"
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {/* Mobile only toggle */}
              {isMobile && filteredOffers.length > 3 && (
                <div className="text-center mt-4">
                  <Button
                    variant="default"
                    className="bg-[#E74529] hover:bg-[#d23e20] text-white text-sm rounded-full px-6"
                    onClick={() => setIsExpanded((prev) => !prev)}
                  >
                    {isExpanded ? "Less" : "More"}
                  </Button>
                </div>
              )}
            </AnimatedSection>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
