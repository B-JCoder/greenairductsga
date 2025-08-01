import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Green Air Ducts Georgia - Professional Air Duct & Dryer Vent Cleaning",
  description:
    "Professional air duct and dryer vent cleaning services in Georgia. Get your ducts cleaned for just $99! Improve your indoor air quality today.",
  keywords: "air duct cleaning, dryer vent cleaning, HVAC cleaning, Georgia, indoor air quality, Atlanta",
  openGraph: {
    title: "Green Air Ducts Georgia - Professional Cleaning Services",
    description:
      "Professional air duct and dryer vent cleaning services in Georgia. Get your ducts cleaned for just $99!",
    images: ["/images/logo-new.png"],
  },
}

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
