import HeroSlider from "./components/HeroSlider"
import AboutSection from "./components/AboutSection"
import ServicesSection from "./components/ServicesSection"
import VideoSection from "./components/VideoSection"
import GallerySection from "./components/GallerySection"
import ContactForm from "./components/ContactForm"
import FAQSection from "./components/FAQSection"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"
import Header from "./components/Header"

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
  )
}
