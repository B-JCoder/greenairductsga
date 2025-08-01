import Header from "../components/Header"
import Footer from "../components/Footer"
import WhatsAppButton from "../components/WhatsAppButton"
import { Wind, Flame, Building2, Shield, Clock, Award, CheckCircle, Star, Users, Wrench } from "lucide-react"

const services = [
  {
    icon: Wind,
    title: "Residential Air Duct Cleaning",
    description:
      "Complete cleaning of your home's HVAC air duct system to improve indoor air quality and energy efficiency.",
    features: [
      "Complete system inspection",
      "Professional grade equipment",
      "Sanitization and deodorization",
      "Before and after photos",
      "Register and grille cleaning",
      "Filter replacement available",
    ],
    price: "$99",
    duration: "2-3 hours",
    popular: true,
  },
  {
    icon: Flame,
    title: "Dryer Vent Cleaning",
    description: "Professional dryer vent cleaning to prevent fire hazards and improve dryer efficiency.",
    features: [
      "Lint removal from entire vent system",
      "Exterior vent cleaning",
      "Safety inspection",
      "Fire prevention focus",
      "Efficiency improvement",
      "Code compliance check",
    ],
    price: "$79",
    duration: "1-2 hours",
    popular: false,
  },
  {
    icon: Building2,
    title: "Commercial HVAC Cleaning",
    description: "Comprehensive commercial HVAC system cleaning for businesses and large facilities.",
    features: [
      "Large-scale system cleaning",
      "Minimal business disruption",
      "Compliance documentation",
      "Scheduled maintenance plans",
      "Energy efficiency improvement",
      "Indoor air quality testing",
    ],
    price: "Custom Quote",
    duration: "Varies",
    popular: false,
  },
]

const additionalServices = [
  {
    icon: Shield,
    title: "Air Quality Testing",
    description: "Professional indoor air quality assessment and testing services.",
    price: "$150",
  },
  {
    icon: Wrench,
    title: "HVAC Maintenance",
    description: "Regular maintenance services to keep your HVAC system running efficiently.",
    price: "$120",
  },
  {
    icon: Wind,
    title: "Vent Sanitization",
    description: "Advanced sanitization services using EPA-approved antimicrobial treatments.",
    price: "$75",
  },
]

const whyChooseUs = [
  {
    icon: Award,
    title: "Licensed & Insured",
    description: "Fully licensed and insured professionals you can trust.",
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    description: "Emergency and same-day service available when you need it most.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Over 10 years of experience in air duct and HVAC cleaning.",
  },
  {
    icon: Star,
    title: "100% Satisfaction",
    description: "We guarantee your complete satisfaction with our services.",
  },
]

const processSteps = [
  {
    step: "1",
    title: "Free Inspection",
    description: "We start with a comprehensive inspection of your HVAC system to assess the cleaning needs.",
  },
  {
    step: "2",
    title: "Professional Cleaning",
    description: "Using state-of-the-art equipment, we thoroughly clean all components of your duct system.",
  },
  {
    step: "3",
    title: "Sanitization",
    description: "We apply EPA-approved sanitizers to eliminate bacteria, mold, and other contaminants.",
  },
  {
    step: "4",
    title: "Final Inspection",
    description: "We conduct a final inspection and provide before/after photos to show our work.",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-950 to-green-600 text-white py-40">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Professional Services</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive air duct and HVAC cleaning services across Georgia with guaranteed results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all">
                Call (470) 491-3855
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional cleaning services designed to improve your indoor air quality and system efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className={`bg-white rounded-lg shadow-lg p-8 border-2 hover:shadow-xl transition-all transform hover:-translate-y-2 relative ${
                    service.popular ? "border-green-500" : "border-gray-100"
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-full inline-block mb-6">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">What's Included:</h4>
                      <ul className="space-y-2 text-left">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t pt-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-3xl font-bold text-green-600">{service.price}</span>
                        <span className="text-gray-500">{service.duration}</span>
                      </div>
                      <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for all your indoor air quality needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all"
                >
                  <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-full inline-block mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-green-600 mb-4">{service.price}</div>
                  <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all">
                    Learn More
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Element Air Ducts Georgia?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing the highest quality service and customer satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-full inline-block mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Professional Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure thorough cleaning and customer satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Service Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We proudly serve the greater Atlanta area and surrounding communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {[
              "Atlanta",
              "Marietta",
              "Alpharetta",
              "Roswell",
              "Sandy Springs",
              "Dunwoody",
              "Brookhaven",
              "Decatur",
              "Smyrna",
              "Kennesaw",
              "Acworth",
              "Woodstock",
              "Canton",
              "Cumming",
              "Johns Creek",
              "Duluth",
            ].map((city, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-all">
                <span className="text-gray-700 font-medium">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Improve Your Indoor Air Quality?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today for a free estimate and experience the difference professional cleaning makes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all">
              Call (470) 491-3855
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all">
              Schedule Online
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
