"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const galleryImages = [
  {
    before: "/images/beforeafter1.jpg",
    after: "/images/beforeafter1.jpg",
    title: "Round Air Duct Cleaning",
    description: "Complete removal of years of dust and debris buildup from round air ducts",
  },
  {
    before: "/images/beforeafter2.jpg",
    after: "/images/beforeafter2.jpg",
    title: "Rectangular Duct System Cleaning",
    description: "Professional cleaning of rectangular duct systems removing all contaminants",
  },
  {
    before: "/images/beforeafter3.jpg",
    after: "/images/beforeafter3.jpg",
    title: "Air Filter Replacement",
    description: "Before and after comparison showing the importance of clean air filters",
  },
]

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Before & After Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the dramatic difference our professional cleaning services make. These real results show why Georgia
            homeowners trust Green Air Ducts.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="space-y-12">
          {galleryImages.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{item.title}</h3>
              <p className="text-gray-600 mb-8 text-center">{item.description}</p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Before Image */}
                <div className="relative">
                  <div className="relative group cursor-pointer" onClick={() => setSelectedImage(item.before)}>
                    <Image
                      src={item.before || "/placeholder.svg"}
                      alt={`Before ${item.title}`}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg" />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full font-semibold">
                      BEFORE
                    </div>
                  </div>
                </div>

                {/* After Image */}
                <div className="relative">
                  <div className="relative group cursor-pointer" onClick={() => setSelectedImage(item.after)}>
                    <Image
                      src={item.after || "/placeholder.svg"}
                      alt={`After ${item.title}`}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg" />
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full font-semibold">
                      AFTER
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300"
              >
                <X className="h-8 w-8" />
              </button>
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Gallery Image"
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
