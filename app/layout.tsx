import React from "react";
import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Suport Lucrări",
  description: "Servicii profesionale de realizare a lucrărilor academice",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/images/Header_1.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/Header_1.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images/Header_1.jpg",
        type: "image/svg+xml",
      },
    ],
    apple: "/images/Header_1.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
