import { Wind, Flame, Building2 } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Wind,
    title: "Unlimited Vents Cleaning",
    description:
      "Complete HVAC system cleaning to remove dust, allergens, and improve air quality.",
    price: "189",
  },
  {
    icon: Flame,
    title: "Up to 12 Vents Cleaning",
    description:
      "Professional dryer vent cleaning to prevent fires and improve efficiency.",
    price: "99",
  },
  {
    icon: Flame,
    title: "Dryer Vent Cleaning",
    description:
      "Professional dryer vent cleaning to prevent fires and improve efficiency.",
    price: "79",
  },
  {
    title: "Commercial HVAC",
    description:
      "Large-scale commercial HVAC cleaning for businesses and facilities.",
    price: "Quote",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6 animate-bounce">
            <span className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full text-xl md:text-2xl font-bold shadow-lg">
              🚨 ATTENTION GEORGIA! 🚨
            </span>
          </div>

          <Image
            src="/images/aboutimageelementair.png"
            alt="Professional HVAC Technician with Certifications"
            width={600}
            height={400}
            className="mx-auto w-full max-w-md h-auto object-contain rounded-xl shadow-xl"
          />

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-10 mb-4">
            <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
              Get Duct/Vent Cleaning for $99 Dollars!
            </span>
          </h2>

          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="h-1 w-16 bg-gradient-to-r from-green-500 to-green-600 rounded"></div>
            <span className="text-2xl animate-spin-slow">⭐</span>
            <div className="h-1 w-16 bg-gradient-to-r from-green-500 to-green-600 rounded"></div>
          </div>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            <span className="font-bold text-green-600">
              Book Yours in 2 Clicks!
            </span>{" "}
            Professional air duct and dryer vent cleaning services with
            transparent, flat-rate pricing. No hidden fees, no surprises.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02]"
              >
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-full inline-block mb-6 animate-fade-in"></div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 min-h-[72px]">
                    {service.description}
                  </p>
                  <div className="text-4xl font-extrabold text-green-600 mb-6">
                    {service.price === "Quote" ? (
                      <span className="text-3xl  font-extrabold h-8 w-8 ">
                        Quote
                      </span>
                    ) : (
                      `$${service.price}`
                    )}
                  </div>
                  <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all">
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-24">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-10 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.1%3E%3Ccircle cx=30 cy=30 r=4/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
                Ready to Breathe Cleaner Air?
              </h3>
              <p className="text-lg md:text-xl mb-6">
                Call now for your free estimate and same-day service!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
                  Call (470) 491-3855
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all transform hover:scale-105">
                  Get Free Estimate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
