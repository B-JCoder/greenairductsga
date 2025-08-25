
import HeroSlider from "./components/HeroSlider";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import VideoSection from "./components/VideoSection";
import GallerySection from "./components/GallerySection";
import ContactForm from "./components/ContactForm";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Header from "./components/Header";
export const metadata = {
  title: "Element Air Ducts Georgia | Air Duct & Dryer Vent Cleaning Services",
  description:
    "Element Air Ducts offers professional air duct and dryer vent cleaning services in Georgia. Improve your indoor air quality for just $99! Trusted by homeowners and businesses across the state.",
  keywords:
    "air duct cleaning Georgia, dryer vent cleaning Georgia, HVAC cleaning, professional duct cleaning, Georgia duct services, affordable air duct cleaning, air duct cleaning near me, Atlanta air duct services, indoor air quality, commercial duct cleaning, residential duct cleaning",
  openGraph: {
    title: "Element Air Ducts Georgia | Trusted Air Duct & Dryer Vent Cleaning Experts",
    description:
      "Get reliable air duct and dryer vent cleaning services across Georgia. Book your $99 duct cleaning today with Element Air Ducts.",
    images: [
      {
        url: "/images/logo-new.png",
        alt: "Element Air Ducts Georgia Logo",
      },
    ],
    type: "website",
    locale: "en_US",
    url: "https://elementairusa.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Element Air Ducts Georgia | Air Duct & Dryer Vent Experts",
    description:
      "Georgia's trusted air duct and dryer vent cleaning service. Affordable, professional, and just $99.",
    images: ["/images/logo-new.png"],
  },
  icons: {
    icon: "/favicon-removebg-preview.ico",
  },
};
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <VideoSection />
      <GallerySection />
      <ContactForm />
      <FAQSection />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
