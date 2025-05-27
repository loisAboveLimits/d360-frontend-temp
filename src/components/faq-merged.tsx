"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus } from "lucide-react";
import { Section } from "./ui/section";
import { AnimatedSection } from "./ui/animated-section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

// Type definitions
interface FAQItem {
  id?: string;
  question: string;
  answer: string;
}

interface FAQItemComponentProps {
  item: FAQItem;
  index: number;
}

interface MergedFAQAccordionProps {
  faqItems: FAQItem[];
  title?: string;
  sectionClassName?: string;
  titleClassName?: string;
}

function FAQMerged({ item, index }: FAQItemComponentProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <AccordionItem
      value={`item-${index}`}
      className="bg-[#F8F8F8] rounded-2xl mb-4 px-3 md:px-6 md:py-4 transition-shadow"
    >
      <AccordionTrigger
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex justify-between items-center w-full hover:no-underline font-semibold md:font-extrabold text-[#263244] text-[15px] md:text-[30px] [&>svg]:hidden"
      >
        {item.question}
        <span className="ml-4 shrink-0 relative w-[38px] h-[39px]">
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="x-icon"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
              >
                <X size={28} className="text-[#E74529] font-extrabold w-full h-full" />
              </motion.div>
            ) : (
              <motion.div
                key="plus-icon"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
              >
                <Plus size={28} className="text-[#C0C5CE] font-extrabold w-full h-full" />
              </motion.div>
            )}
          </AnimatePresence>
        </span>
      </AccordionTrigger>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="faq-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <AccordionContent className="overflow-hidden">
              <p className="text-md text-[#263244] mt-2 leading-relaxed">
                {item.answer}
              </p>
            </AccordionContent>
          </motion.div>
        )}
      </AnimatePresence>
    </AccordionItem>
  );
}

export function MergedFAQAccordion({
  faqItems,
  title = "FAQs",
  sectionClassName = "bg-white",
  titleClassName = "text-4xl font-bold mb-8 md:px-24 text-[#293242]",
}: MergedFAQAccordionProps) {
  return (
    <Section className={sectionClassName}>
      <AnimatedSection direction="up">
        <h2 className={titleClassName}>{title}</h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-5xl mx-auto"
        >
          {faqItems.map((item: FAQItem, index: number) => (
            <FAQMerged key={item.id || index} item={item} index={index} />
          ))}
        </Accordion>
      </AnimatedSection>
    </Section>
  );
}
