"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { ContactInfo } from "./contact-info";

export function ContactContent() {
  return (
    <AnimatedSection direction="left" className="lg:w-[44%]">
      <ContactInfo
        title="How to Reach Us?"
        showComplaintText={false}
        showAppSection={false}
      />
    </AnimatedSection>
  );
}
