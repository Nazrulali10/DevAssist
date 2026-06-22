import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "DevAssist",
  description: "Developer Assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className=' '
    >
      <body className="flex flex-col w-screen min-h-screen h-full">
         <Navbar/>
        {children}
        </body>
    </html>
  );
}
