"use client";
import React from "react";
import { MergedFAQAccordion } from "@/components/faq-merged";
import { FAQsAbout } from "@/data/about";
import { useState } from "react";
import ApplePayOverview from "@/components/apple-pay/apple-pay-overview";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer/footer";
function ApplePay() {
  const [activeTab, setActiveTab] = useState<"overview" | "faq">("faq");

  return (
    <div className="px-6 py-10 flex flex-col justify-center items-center mx-auto">
      <Header />

      <div className=" flex w-full max-w-[1150px] items-start mt-[75px] ">
      <div className="flex gap-4 mb-6 max-w-[1228px]  ">
        <button
          className={`px-4 py-2 rounded-xl font-medium ${
            activeTab === "overview"
              ? "bg-[#E74529] text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => setActiveTab("overview")}
        >
          Apple Pay Overview
        </button>

        <button
          className={`px-4 py-2 rounded-xl font-medium ${
            activeTab === "faq"
              ? "bg-[#E74529] text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => setActiveTab("faq")}
        >
          FAQs
        </button>
      </div>
      </div>

      {activeTab === "overview" ? (
        <div className="max-w-[1728px]  flex flex-col justify-center items-center overflow-y-scroll  ">
          <ApplePayOverview />
        </div>
      ) : (
        <div className="  flex   flex-col justify-center items-center overflow-y-scroll  ">
            <div className="text-[70px] max-w-[1108px]  font-extrabold">
            Apple Pay with D360 Bank Card
            </div>
            
          <MergedFAQAccordion faqItems={FAQsAbout} title="" />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default ApplePay;
