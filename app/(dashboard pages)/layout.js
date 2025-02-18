import Sidebar from "@/components/Sidebar";
import "../globals.css";
import { PasswordProvider } from "@/contexts/PasswordContext";

export const metadata = {
    title: "Dashboard",
    description: "Keeping your secrets safe",
  };

  export default function RootLayout({ children }) {
    return (
    <html lang="en">
      <body className={`antialiased`}>
        <section className='flex h-screen w-screen overflow-hidden'>
          
          <Sidebar className='w-[250px] text-white fixed h-full"'></Sidebar>
          <div className="w-[1px] bg-white opacity-50" ></div>
          <div className='flex-1'>
            <PasswordProvider>
              {children}
            </PasswordProvider>
          </div>
          
        </section>
      </body>
    </html>
    );
}