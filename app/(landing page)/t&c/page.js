import Main from '@/components/Main'
import TermsConditions from '@/components/TermsConditions'
import React from 'react'

const public_url = process.env.PUBLIC_URL || "https://seqr-safe.com";

export async function generateMetadata() {
  return {
    title: "Terms and Conditions - Seqr Safe",
    description: "Read the Terms and Conditions for using Seqr Safe. Understand your rights and responsibilities when using our platform.",
    keywords: "Seqr Safe terms, terms and conditions, Seqr Safe policies, user agreement, legal terms",
    openGraph: {
      title: "Terms and Conditions - Seqr Safe",
      description: "Read the Terms and Conditions for using Seqr Safe. Understand your rights and responsibilities when using our platform.",
      url: `${public_url}t&c`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Terms and Conditions - Seqr Safe",
      description: "Read the Terms and Conditions for using Seqr Safe. Understand your rights and responsibilities when using our platform.",
      images: "/opengraph-image.png",
    },
  };
}

export default function  () {
  return (
    <Main>
        <TermsConditions></TermsConditions>
    </Main>
  )
}
