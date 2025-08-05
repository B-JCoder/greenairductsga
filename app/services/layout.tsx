export const metadata = {
  title: "Our Services | HVAC, Air Duct Cleaning & Vent Sanitization in Georgia",
  description:
    "Explore our full range of services including HVAC maintenance, air duct cleaning, and vent sanitization. Same-day service, licensed professionals, and 100% satisfaction guaranteed across Georgia.",
  keywords:
    "HVAC maintenance Georgia, air duct cleaning services, vent sanitization Georgia, licensed HVAC professionals, EPA-approved duct cleaning, affordable HVAC services, dryer vent cleaning, HVAC inspection, Georgia air duct services, professional duct cleaners, HVAC system cleaning, emergency HVAC cleaning Georgia",
  openGraph: {
    title: "Element Air Ducts Georgia | Professional HVAC & Duct Cleaning Services",
    description:
      "Discover our expert HVAC maintenance, vent sanitization, and duct cleaning services in Georgia. Trusted, affordable, and satisfaction guaranteed.",
    images: [
      {
        url: "/images/logo-new.png",
        alt: "Element Air Ducts Georgia Logo",
      },
    ],
    type: "website",
    locale: "en_US",
    url: "https://elementairusa.com/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert HVAC & Air Duct Services in Georgia | Element Air Ducts",
    description:
      "Offering HVAC system maintenance, vent sanitization, and air duct cleaning services. Licensed, experienced, and available same-day.",
    images: ["/images/logo-new.png"],
  },
  icons: {
    icon: "/favicon-removebg-preview.ico",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
