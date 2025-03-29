import { Fugaz_One, Geist, Geist_Mono, Poppins } from "next/font/google";
import "../globals.css"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Seqr Safe – Secure Your Online Accounts with Ease",
  description: "Seqr Safe helps you manage and secure your online accounts with encrypted password storage and seamless login automation.",
  image: "/GuyPasscode.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header font={poppins}></Header>
          <main className="relative z-0">{children}</main>
        <Footer font={poppins}></Footer>
      </body>
    </html>
  );
}
