import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.elementairusa.com"),

  title: "Element Air Ducts Georgia | Best Air Duct & Dryer Vent Cleaning Services",
  description:
    "Element Air Ducts offers top-rated air duct and dryer vent cleaning services across Georgia. Boost your indoor air quality for just $99 with our expert HVAC cleaning solutions.",
  keywords:
    "air duct cleaning Georgia, best air duct cleaning Georgia, dryer vent cleaning Georgia, HVAC cleaning Georgia, Georgia air duct services, indoor air quality Georgia, Atlanta air duct cleaning, affordable air duct cleaning Georgia, professional duct cleaning, duct cleaning near me, air vent cleaning, residential duct cleaning, commercial air duct cleaning, ductwork cleaning Georgia",
openGraph: {
    title: "Element Air Ducts Georgia - Professional Cleaning Services",
    description: "Professional air duct and dryer vent cleaning services in Georgia. Get your ducts cleaned for just $99!",
    images: ["/favicon-removebg-preview.ico"], 
  },
   twitter: {
    card: "summary_large_image",
    title: "Element Air Ducts Georgia",
    images: ["/favicon-removebg-preview.ico"],
  },
  icons: {
    icon: "/favicon-removebg-preview.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode 
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
