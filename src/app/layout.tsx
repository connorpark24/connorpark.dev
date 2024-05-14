import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Connor Park",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 dark:bg-black lg:px-36 sm:px-16 w-screen min-h-screen`}
      >
        <div className="bg-white dark:bg-zinc-900 max-w-7xl">
          <Navbar />
          <div className="border-x-[1px] border-gray-200 dark:border-zinc-800 p-16">
            {children}
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
