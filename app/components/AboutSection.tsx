"use client"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { useEffect, useState } from "react"

export default function AboutSection() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

    useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <Image
              src="/images/about-professional.jpg"
              alt="Professional HVAC Technician with Certifications"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Why Choose Element Air Georgia?</h2>
            <p className="text-gray-600 mb-6 text-lg">
              We are Georgia's premier air duct and dryer vent cleaning service, dedicated to improving your indoor air
              quality and keeping your family safe. With years of experience and state-of-the-art equipment, we deliver
              exceptional results every time.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Licensed and Insured Professionals",
                "Advanced Cleaning Equipment",
                "Eco-Friendly Cleaning Solutions",
                "Same-Day Service Available",
                "100% Satisfaction Guarantee",
                "Free Estimates and Inspections",
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

              <a
              href="#contact"
              className={`font-medium transition-colors hover:text-green-600 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all">
              Get Free Estimate
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
