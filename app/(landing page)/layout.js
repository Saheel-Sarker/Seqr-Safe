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
  keywords: "password manager, secure passwords, online security, password storage, password generator, encrypted passwords, password vault, password management, secure login, two-factor authentication",
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
