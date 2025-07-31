"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What other services, besides air duct cleaning, does Element Air offer?",
    answer:
      "At Element Air, we do more than just air duct cleaning. We offer dryer vent cleaning to reduce fire risks and boost dryer efficiency, gutter cleaning to protect your roof and foundation, and chimney cleaning to keep your fireplace safe and functional. We also provide mold treatment services to improve your indoor air quality and prevent health risks. Our goal is to help you maintain a cleaner, safer, and healthier home—inside and out. One trusted team for all your home maintenance needs!",
  },
  {
    question: "What is included in your $99 air duct cleaning package?",
    answer:
      "our limited-time package includes cleaning of up to 12 vents, a full HVAC system inspection, air filter check, and a complementary deodorizer to leave your home smelling fresh.",
  },
  {
    question: "How long does the cleaning process take?",
    answer:
      "Most residential air duct cleaning takes 2-4 hours depending on the size of your home and the complexity of your HVAC system. We work efficiently while ensuring thorough cleaning of every component.",
  },
  {
    question: "Will duct cleaning help with my allergies?",
    answer:
      "Yes! Professional duct cleaning removes dust, pollen, pet dander, and other allergens that circulate through your HVAC system. Many customers report significant improvement in their allergy symptoms after our service.",
  },
  {
    question: "Do you offer same-day service?",
    answer:
      "Yes, we offer same-day service when available. Call us in the morning and we can often schedule your cleaning for the same afternoon. We understand that clean air can't wait!",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our air duct and dryer vent cleaning services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
              >
                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-green-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-green-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Still have questions? We're here to help!</p>
          <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all">
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  )
}
