"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { AnimatedSection } from "@/components/ui/animated-section"
import { NewsCard } from "@/components/media/news-card"
import { useLanguage } from "@/context/language-context"
import type { NewsArticle } from "@/types/media"

interface NewsArticleDetailsProps {
  article: NewsArticle
  relatedArticles: NewsArticle[]
}

export function NewsArticleDetails({ article, relatedArticles }: NewsArticleDetailsProps) {
  const { language } = useLanguage()

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return language === "en"
      ? date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
      : date.toLocaleDateString("ar-SA", { year: "numeric", month: "long", day: "numeric" })
  }

  const formatContent = (content: string) => {
    return content.split("\n\n").map((paragraph, index) => (
      <p key={index} className="mb-4 text-slate-700 leading-relaxed">
        {paragraph}
      </p>
    ))
  }

  return (
    <div className="bg-white px-8 lg:px-0">
      <div className=" w-full">
        

       
          <div className="hidden lg:flex relative h-64 w-full md:h-96  overflow-hidden mb-8">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={language === "en" ? article.title.en : article.title.ar}
              fill
              className="object-cover"
              priority
            />
          </div>
        

       
          <div className="mb-8 max-w-3xl mx-auto ">
            <h1 className="text-xl md:text-4xl  font-bold text-slate-800 mb-4 pt-5">
              {language === "en" ? article.title.en : article.title.ar}
            </h1>


            <div className="prose prose-lg max-w-none pt-4 lg:pt-10 ">
              {formatContent(language === "en" ? article.content.en : article.content.ar)}
            </div>
          </div>
        

        {relatedArticles.length > 0 && (
          
            <div className="py-8 lg:py-16 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                {language === "en" ? "Other Topics" : "مواضيع أخرى"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedArticles.map((relatedArticle, index) => (
                  <NewsCard key={relatedArticle.id} article={relatedArticle} index={index} />
                ))}
              </div>
            </div>
        
        )}
      </div>
    </div>
  )
}
