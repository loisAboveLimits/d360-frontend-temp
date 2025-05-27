import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer/footer";
import { NewsArticleDetails } from "@/components/media/news-article-details";
import { newsArticles } from "@/data/media";
import { Hero } from "@/components/layout/page-hero";

interface NewsArticlePageProps {
  params: {
    slug: string;
  };
}

export default function NewsArticlePage({ params }: NewsArticlePageProps) {
  const article = newsArticles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = newsArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 2);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 lg:pt-20">
        <div className="lg:hidden ">
          <Hero backgroundImage="/offers/offers-hero.png">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[800] text-white leading-tight">
              D360 Bank <br /> Offers
            </h1>
          </Hero>
        </div>
        <NewsArticleDetails
          article={article}
          relatedArticles={relatedArticles}
        />
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}
