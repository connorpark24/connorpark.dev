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
        className={`${inter.className} bg-gray-50 dark:bg-black  flex flex-col`}
      >
        <div className="flex justify-center fixed inset-0 lg:px-36 sm:px-16">
          <div className="bg-white dark:bg-zinc-900 max-w-7xl w-full border-x-[1px] border-gray-200 dark:border-zinc-800"></div>
        </div>

        <div className="relative lg:px-36 sm:px-8">
          <Navbar />
          <div className="py-24 sm:px-24 px-8">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
