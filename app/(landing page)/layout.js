import { Fugaz_One, Geist, Geist_Mono, Poppins, Sora, Ubuntu, Work_Sans } from "next/font/google";
import "../globals.css"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400"],
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400"],
});

const work_sans = Work_Sans({
  subsets: ["latin"],
  weight: ["400"],
});


export const metadata = {
  title: "Seqr Safe – Secure Your Online Accounts with Ease",
  description: "Seqr Safe helps you manage and secure your online accounts with encrypted password storage and seamless login automation.",
  image: "/GuyPasscode.svg",
  keywords: "password manager, secure password storage, online security, password generator, two-factor authentication, encrypted storage, password vault, identity protection, passwword generator, password manager, password vault, password security, password storage, password protection",
  openGraph: {
    title: "Seqr Safe – Secure Your Online Accounts with Ease",
    description: "Seqr Safe helps you manage and secure your online accounts with encrypted password storage and seamless login automation.",
    url: "https://seqrsafe.com",
    siteName: "Seqr Safe",
    images: [
      {
        url: "/GuyPasscode.svg",
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seqr Safe – Secure Your Online Accounts with Ease",
    description: "Seqr Safe helps you manage and secure your online accounts with encrypted password storage and seamless login automation.",
    images: "/opengraph-image.png",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header font={poppins} font2={ubuntu}></Header>
          <main className="relative z-0">{children}</main>
        <Footer font={poppins}></Footer>
      </body>
    </html>
  );
}
