"use client"
import { useState, useEffect } from "react"

export default function VideoSection() {
   const [isScrolled, setIsScrolled] = useState<boolean>(false)
    
      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
      }, [])
  const videos = [
    {
      id: "acCtQdQGRWs",
      title: "Professional Air Duct Cleaning Process",
      description: "Watch our expert technicians demonstrate the complete air duct cleaning process",
    },
    {
      id: "GFiBJhM4myY",
      title: "Before & After Results",
      description: "See the dramatic difference our cleaning services make",
    },
    {
      id: "_xuqX6hoO0s",
      title: "HVAC System Maintenance",
      description: "Learn about proper HVAC system maintenance and cleaning",
    },
    {
      id: "LI5W5XM2WZ0",
      title: "Dryer Vent Cleaning Service",
      description: "Professional dryer vent cleaning for fire prevention and efficiency",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">See Our Work in Action</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our professional technicians in action and see the results of our expert air duct cleaning services
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Ready to experience these results in your home?</p>
         <a
              href="/#contact"
              className={`font-medium transition-colors hover:text-green-600 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
          <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all">
            Schedule Your Cleaning Today
          </button>
          </a>
        </div>
      </div>
    </section>
  )
}
