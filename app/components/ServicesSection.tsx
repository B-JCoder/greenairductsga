import { Wind, Flame, Building2 } from "lucide-react"

const services = [
  {
    icon: Wind,
    title: "Air Duct Cleaning",
    description: "Complete HVAC system cleaning to remove dust, allergens, and improve air quality.",
    price: "$99",
  },
  {
    icon: Flame,
    title: "Dryer Vent Cleaning",
    description: "Professional dryer vent cleaning to prevent fires and improve efficiency.",
    price: "$89",
  },
  {
    icon: Building2,
    title: "Commercial HVAC",
    description: "Large-scale commercial HVAC cleaning for businesses and facilities.",
    price: "Quote",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Attention Georgia! Get Duct/Vent Cleaning for $99 Dollars!
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Book Yours in 2 Clicks! Professional air duct and dryer vent cleaning services with transparent, flat-rate
            pricing. No hidden fees, no surprises.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-full inline-block mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="text-4xl font-bold text-green-600 mb-6">${service.price}</div>
                  <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all">
                    Book Now
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">Ready to Breathe Cleaner Air?</h3>
            <p className="text-xl mb-6">Call now for your free estimate and same-day service!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all">
                Call (470) 491-3855
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all">
                Get Free Estimate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
