import { Fugaz_One, Geist, Geist_Mono, Poppins } from "next/font/google";
import "../globals.css"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Seqr Safe",
  description: "Account security made simple.",
  image: "/GuyPasscode.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header font={poppins}></Header>
          {children}
        <Footer font={poppins}></Footer>
      </body>
    </html>
  );
}
