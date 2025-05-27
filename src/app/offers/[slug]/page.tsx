import { notFound } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer/footer"
import { OfferDetails } from "@/components/offers/offer-details"
import { offers } from "@/data/offer"
import { Hero } from "@/components/layout/page-hero";

interface OfferPageProps {
  params: {
    slug: string
  }
}

export default function OfferPage({ params }: OfferPageProps) {
  const offer = offers.find((o) => o.slug === params.slug)

  if (!offer) {
    notFound()
  }

  return (
    <div className="">
      <Header />
      <main className="flex-1 lg:pt-20 ">
        <div className="lg:hidden ">
      <Hero  backgroundImage="/offers/offers-hero.png">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[800] text-white leading-tight">
            D360 Bank <br /> Offers
          </h1>
        </Hero>
        </div>
        <OfferDetails offer={offer} />
      </main>
      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  return offers.map((offer) => ({
    slug: offer.slug,
  }))
}
