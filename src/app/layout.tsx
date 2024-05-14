import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
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
        className={`${inter.className} bg-gray-50 dark:bg-black px-36 w-screen min-h-screen`}
      >
        <div className="bg-white dark:bg-zinc-900 max-w-7xl">
          <Navbar />
          <div className="border-x-[1px] border-gray-200 dark:border-zinc-800 p-16">
            {children}
          </div>

          <section className="py-12 w-full border-x-[1px] border-gray-200 dark:border-zinc-800">
            <div className="flex flex-col items-center w-3/4 gap-y-2 mx-auto text-neutral-500">
              <p className="text-sm text-center">
                &copy; 2024 Connor Park. All Rights Reserved.
              </p>
            </div>
          </section>
        </div>
      </body>
    </html>
  );
}
