import Sidebar from "@/components/Sidebar";
import "../globals.css";

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
          <div className="w-[2px] bg-white " ></div>
          <div className='translate-y-[4%] flex-1'>
            {children}
          </div>
          
        </section>
      </body>
    </html>
    );
}