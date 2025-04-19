import AppScreenshot from "@/components/AppScreenshot";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Pricing from "@/components/Pricing";
import SlidingCards from "@/components/SlidingCards";
import { url } from "inspector";
import Script from "next/script";

const public_url = process.env.PUBLIC_URL || "https://seqrsafe.com";

export async function generateMetadata() {
  return {
    title: "Seqr Safe – Secure Your Online Accounts with Ease",
    description: "Seqr Safe helps you manage and secure your online accounts with encrypted password storage and seamless login automation.",
    keywords: "password manager, secure password storage, online security, password generator, two-factor authentication, encrypted storage, password vault, identity protection",
    openGraph: {
      title: "Seqr Safe – Secure Your Online Accounts with Ease",
      description: "Seqr Safe helps you manage and secure your online accounts with encrypted password storage and seamless login automation.",
      url: public_url,
      siteName: "Seqr Safe",
      images: [
        {
          url: `$/GuyPasscode.svg`,
          width: 800,
          height: 600,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Seqr Safe – Secure Your Online Accounts with Ease",
      description: "Seqr Safe helps you manage and secure your online accounts with encrypted password storage and seamless login automation.",
      images: `/opengraph-image.png`,
    },
    icons: {
      icon: `/favicon.ico`,
      shortcut: `/favicon.ico`,
    },
  };
}

export default async function Home() {

  return (
    <Main>
        <Script
        type="application/ld+json"
        id="json-ld-landing"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Seqr Safe",
            operatingSystem: "All",
            applicationCategory: "SecurityApplication",
            description:
              "Seqr Safe is a secure password manager that helps individuals and teams store and manage credentials with strong encryption and real-time sync.",
            url: public_url,
            image: "/GuyPasscode.svg",
            offers: [
              {
                "@type": "Offer",
                price: "3.00",
                priceCurrency: "CAD",
                availability: "https://schema.org/InStock",
                priceValidUntil: "2025-12-31",
                description: "Monthly subscription for Seqr Safe password manager.",
              },
              {
                "@type": "Offer",
                price: "30.00",
                priceCurrency: "CAD",
                availability: "https://schema.org/InStock",
                priceValidUntil: "2025-12-31",
                description: "Yearly subscription for Seqr Safe password manager.",
              },
            ],
            publisher: {
              "@type": "Organization",
              name: "Seqr Safe Inc.",
              url: public_url,
            },
          }),
        }}
      />
      <Hero></Hero>
      <SlidingCards></SlidingCards>
      <AppScreenshot></AppScreenshot>
      <Pricing></Pricing>
    </Main>
    
  );
}
