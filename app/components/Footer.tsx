import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Image
              src="/images/logo-new.png"
              alt="Green Air Ducts Georgia"
              width={200}
              height={80}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-6 max-w-md">
              Georgia's premier air duct and dryer vent cleaning service. We're committed to improving your indoor air
              quality and keeping your family safe with professional, eco-friendly cleaning solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Green-Air-Duct-Georgia/61575575824738/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-green-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-gray-300 hover:text-green-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-300 hover:text-green-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <a href="tel:+14704913855" className="text-gray-300 hover:text-green-400 transition-colors">
                  (470) 491-3855
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <a
                  href="mailto:contact.elementair.co@gmail.com"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                   contact.elementair.co@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Atlanta, GA, United States
                  <br />
                  Serving All of Georgia
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Element Air Georgia. All rights reserved.</p>
      <p className="text-sm text-white">
  Powered by{" "}
  <a
    href="https://thelinkagedigital.com/"
    className="text-blue-400 underline hover:text-blue-500 transition"
  >
    The Linkage Digital
  </a>
</p>


          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
