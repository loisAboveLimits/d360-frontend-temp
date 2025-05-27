import ContentSection from "@/components/content-section";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer/footer";
import { MergedFAQAccordion } from "@/components/faq-merged";
import { aboutData, FAQsAbout } from "@/data/about";
import DesktopContentSectionSecurityAndAwareness from "@/components/security-awareness/desktop-content-section-security-and-awareness";
export default function ProductAndServicesFee() {
  return (
    <div className="w-full  flex flex-col justify-center items-center">
      <Header />
      <div className=" mt-[100px] flex max-w-[1180px]  flex-col justify-center items-center overflow-y-scroll  ">
        <div className="text-[80px]  flex flex-col justify-start items-start text-[#E74529] font-extrabold">
          Products & Services Fee
        </div>
        <div className="text-[25px] max-w-[1024px]">
          At D360 bank we are committed to protecting our customers personal and
          financial information and place all the necessary and required
         
        </div>

        <MergedFAQAccordion faqItems={FAQsAbout} title="" />
      </div>
      <Footer />
    </div>
  );
}
