import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
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
          className={`${inter.className} bg-neutral-50 dark:bg-black flex flex-col h-full w-screen`}
        >
          <div className="flex justify-center fixed inset-0 lg:px-36 sm:px-16">
            <div className="bg-white dark:bg-neutral-900 w-full max-w-7xl border-x-[1px] border-neutral-200 dark:border-neutral-800"></div>
          </div>

          <div className="relative lg:px-36 sm:px-16 max-w-[98rem] mx-auto w-full">
            <Analytics />
            <Navbar />
            <div className="py-24 sm:px-24 px-12">{children}</div>
            <Footer />
          </div>
        </body>
      </html>
  );
}
