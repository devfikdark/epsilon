import type { Metadata } from "next";
import { Reddit_Mono } from "next/font/google";

import AppProvider from "@/providers";

import "./globals.css";

const font = Reddit_Mono({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Epsilon",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
