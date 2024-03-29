import type { Metadata } from "next";
import Sidebar from "./ui/dashboard/sidebar/Sidebar";
import Navbar from "./ui/dashboard/navbar/Navbar";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex ">
      <div className=" flex-1 bg-[#182237]  min-h-[100vh] sticky p-[20px]">
          <Sidebar/>
      </div>
      <div className="flex-[4_4_0%] ">
        <Navbar/>
      <div className="p-[20px]">
      {children}
      </div>
      </div>
    </div>
  );
}
