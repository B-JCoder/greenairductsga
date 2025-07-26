import type React from "react"
// Global TypeScript type definitions
export interface ContactFormData {
  name: string
  phone: string
  email: string
  date: string
  location: string
  message: string
}

export interface SlideData {
  image: string
  title: string
  subtitle: string
}

export interface ServiceData {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  features: string[]
  price: string
  duration: string
  popular?: boolean
}

export interface GalleryImage {
  before: string
  after: string
  title: string
  description: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface VideoData {
  id: string
  title: string
  description: string
}

export type SubmitStatus = "idle" | "success" | "error"
