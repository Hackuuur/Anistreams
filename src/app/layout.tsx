import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { cn, constructMetadata } from "@/lib/utils";
import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='h-full'>
      <body
        className={cn(
          'relative h-full font-sans antialiased',
          inter.className
        )}>
        <main className='relative flex flex-col min-h-screen'>
          <Providers>
            <Navbar />
            <div className='flex-grow flex-1'>
              {children}
            </div>
            
          </Providers>
          <SpeedInsights/>
        </main>
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
