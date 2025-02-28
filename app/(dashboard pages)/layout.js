'use client'
import Sidebar from "@/components/Sidebar";
import "../globals.css";
import usePasswordStore from "@/store/password.store";
import { useEffect } from "react";
import WithAuth from "@/components/WithAuth";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth.store";

// export const metadata = {
//     title: "Dashboard",
//     description: "Keeping your secrets safe, always.",
//   };

  export default function RootLayout({ children }) {
    const {fetchPasswords} = usePasswordStore();

    const router = useRouter();
    const { isAuthenticated, isCheckingAuth, checkAuth, user } = useAuthStore();
    useEffect(() => {
      if (!isCheckingAuth) {
        if (isAuthenticated) {
          console.log(user);
          fetchPasswords();
        } else {
          router.push('/');
        }
      } else {
        checkAuth();
      }
    }, [isAuthenticated, isCheckingAuth, fetchPasswords, checkAuth]);
    
    return (
    <html lang="en">
      <body className={`antialiased`}>
        <section className='flex h-screen w-screen overflow-hidden'>
          
          <Sidebar className='w-[250px] text-white fixed h-full"'></Sidebar>
          <div className="w-[1px] bg-white opacity-50" ></div>
          <div className='flex-1'>
            <WithAuth>
              {children}
            </WithAuth>
          </div>
          
        </section>
      </body>
    </html>
    );
}