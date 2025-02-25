'use client'
import Sidebar from "@/components/Sidebar";
import "../globals.css";
import usePasswordStore from "@/store/password.store";
import { useEffect } from "react";

// export const metadata = {
//     title: "Dashboard",
//     description: "Keeping your secrets safe",
//   };

  export default function RootLayout({ children }) {
    const {fetchPasswords} = usePasswordStore();

    useEffect(() => {
      fetchPasswords();
    }, [fetchPasswords]); 
    
    return (
    <html lang="en">
      <body className={`antialiased`}>
        <section className='flex h-screen w-screen overflow-hidden'>
          
          <Sidebar className='w-[250px] text-white fixed h-full"'></Sidebar>
          <div className="w-[1px] bg-white opacity-50" ></div>
          <div className='flex-1'>
            {children}
          </div>
          
        </section>
      </body>
    </html>
    );
}