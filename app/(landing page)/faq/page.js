import Faq from '@/components/Faq'
import Main from '@/components/Main'
import React from 'react'

const public_url = process.env.PUBLIC_URL || "https://seqr-safe.com/";

export async function generateMetadata() {
  return {
    title: "Frequently Asked Questions - Zeni Pass",
    description: "Find answers to common questions about Zeni Pass, our features, and how to use our platform effectively.",
    keywords: "Zeni Pass FAQ, frequently asked questions, Zeni Pass help, user guide, support",
    openGraph: {
      title: "Frequently Asked Questions - Zeni Pass",
      description: "Find answers to common questions about Zeni Pass, our features, and how to use our platform effectively.",
      url: `${public_url}faq`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Frequently Asked Questions - Zeni Pass",
      description: "Find answers to common questions about Zeni Pass, our features, and how to use our platform effectively.",
      images: "/opengraph-image.png",
    },
  };
}

export default function page() {
  return (
    <Main>
        <Faq></Faq>
    </Main>
  )
}
