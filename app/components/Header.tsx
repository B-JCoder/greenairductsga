"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-new.png"
              alt="Green Air Ducts Georgia"
              width={200}
              height={80}
              className="h-20 md:h-202  w-auto "
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium transition-colors hover:text-green-600 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`font-medium transition-colors hover:text-green-600 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Services
            </Link>
            <a
              href="/#about"
              className={`font-medium transition-colors hover:text-green-600 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              About
            </a>
            <a
              href="/#gallery"
              className={`font-medium transition-colors hover:text-green-600 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Gallery
            </a>
            <a
              href="/#contact"
              className={`font-medium transition-colors hover:text-green-600 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Contact
            </a>
            <a
              href="/#faq"
              className={`font-medium transition-colors hover:text-green-600 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              FAQ
            </a>
          </nav>

          {/* Phone Number & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+14704913855"
              className={`flex items-center font-semibold transition-colors ${
                isScrolled ? "text-green-600" : "text-white hover:text-green-300"
              }`}
            >
              <Phone className="h-4 w-4 mr-2" />
              (470) 491-3855
            </a>
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

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? "text-gray-700" : "text-white"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t shadow-lg">
            {/* Mobile Logo - Centered and Larger */}
            <div className="flex justify-center py-6 border-b border-gray-200">
              <Image
                src="/images/logo-new.png"
                alt="Green Air Ducts Georgia"
                width={250}
                height={100}
                className="h-16 w-auto"
              />
            </div>

            <nav className="flex flex-col space-y-4 p-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-green-600 font-medium py-2 text-center"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-green-600 font-medium py-2 text-center"
                onClick={closeMenu}
              >
                Services
              </Link>
              <a
                href="/#about"
                className="text-gray-700 hover:text-green-600 font-medium py-2 text-center"
                onClick={closeMenu}
              >
                About
              </a>
              <a
                href="/#gallery"
                className="text-gray-700 hover:text-green-600 font-medium py-2 text-center"
                onClick={closeMenu}
              >
                Gallery
              </a>
              <a
                href="/#contact"
                className="text-gray-700 hover:text-green-600 font-medium py-2 text-center"
                onClick={closeMenu}
              >
                Contact
              </a>
              <a
                href="/#faq"
                className="text-gray-700 hover:text-green-600 font-medium py-2 text-center"
                onClick={closeMenu}
              >
                FAQ
              </a>
              <a href="tel:+14704913855" className="flex items-center justify-center text-green-600 font-semibold py-2">
                <Phone className="h-4 w-4 mr-2" />
                (470) 491-3855
              </a>
              <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold w-full mt-2">
                Get Free Estimate
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
