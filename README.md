# Green Air Ducts Georgia Website

A modern, responsive Next.js 14 website for Green Air Ducts Georgia - a professional air duct and dryer vent cleaning service company based in Atlanta, Georgia.

## 🚀 Technologies Used

### Core Framework
- **Next.js 14** - React framework with App Router for optimal performance
- **TypeScript** - Type-safe development with full type definitions
- **React 18** - Latest React features including Server Components

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Lucide React** - Beautiful, customizable SVG icons
- **Custom CSS Animations** - Smooth transitions and hover effects
- **Responsive Design** - Mobile-first approach with breakpoint optimization

### Image Optimization
- **Next.js Image Component** - Automatic image optimization and lazy loading
- **WebP Support** - Modern image formats for better performance
- **Responsive Images** - Automatic sizing based on device capabilities

## 🎨 Design Features

### Color Scheme
- **Primary Green**: #00c853 (Green 500)
- **Secondary Green**: #43a047 (Green 600)
- **Gradient Overlays**: Multi-layered gradients for enhanced visual appeal
- **White Background**: Clean, professional appearance

### Typography
- **Font Family**: Inter - Modern, readable sans-serif font
- **Responsive Text**: Scales appropriately across all device sizes
- **Text Shadows**: Enhanced readability on image backgrounds

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile Optimizations
- **Touch-Friendly**: Larger tap targets and proper spacing
- **Mobile Navigation**: Collapsible menu with backdrop blur
- **Slider Controls**: Navigation arrows moved to bottom on mobile
- **Form Layout**: Stacked inputs on smaller screens

## 🧩 Component Architecture

### Page Components
- **Header** - Transparent navigation with scroll effects
- **HeroSlider** - Full-screen image carousel with auto-play
- **AboutSection** - Company information with trust indicators
- **ServicesSection** - Service offerings with pricing
- **VideoSection** - Embedded YouTube videos
- **GallerySection** - Before/after image gallery with modal
- **ContactForm** - Professional contact form with validation
- **FAQSection** - Accordion-style frequently asked questions
- **Footer** - Company information and links
- **WhatsAppButton** - Floating WhatsApp contact button

### Key Features

#### Navigation Bar
- **Transparent Background**: Starts transparent, becomes semi-transparent on scroll
- **Dynamic Colors**: Text color changes based on scroll position
- **Smooth Scrolling**: Proper section linking with offset for fixed header
- **Mobile Menu**: Collapsible navigation with backdrop blur effect

#### Hero Slider
- **Auto-play**: 5-second intervals with smooth transitions
- **Navigation**: Desktop arrows on sides, mobile arrows at bottom
- **Indicators**: Dot navigation with active state
- **Responsive Content**: Text and buttons scale appropriately
- **Enhanced Overlays**: Multi-layered gradients for better readability

#### Contact Form
- **TypeScript Validation**: Fully typed form data and handlers
- **Required Fields**: Name, Phone, Email, Location
- **Optional Fields**: Date, Message
- **Form States**: Loading, success, and error states
- **Mobile Responsive**: Stacked layout on smaller screens

#### WhatsApp Integration
- **Original Logo**: Authentic WhatsApp SVG icon
- **Animations**: Pulsing rings, bounce effects, and tooltips
- **Mobile Optimized**: Proper sizing and positioning

## 🔧 Technical Implementation

### TypeScript Types
\`\`\`typescript
interface ContactFormData {
  name: string
  phone: string
  email: string
  date: string
  location: string
  message: string
}

interface SlideData {
  image: string
  title: string
  subtitle: string
}

type SubmitStatus = "idle" | "success" | "error"
\`\`\`

### Performance Optimizations
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting with Next.js
- **Server Components**: Improved performance with server-side rendering
- **CSS Optimization**: Tailwind CSS purging for minimal bundle size

### SEO Features
- **Meta Tags**: Comprehensive meta tags for search engines
- **Structured Data**: Proper HTML semantics
- **Alt Text**: Descriptive alt text for all images
- **Responsive Meta**: Viewport and mobile optimization tags

## 📋 Form Functionality

### Contact Form Features
- **Client-side Validation**: Real-time form validation
- **TypeScript Safety**: Fully typed form handling
- **Loading States**: Visual feedback during submission
- **Success/Error Messages**: User feedback for form submission
- **Mobile Responsive**: Optimized layout for all devices

### Form Fields
1. **Name** (Required) - Full name input
2. **Phone** (Required) - Telephone number with formatting
3. **Email** (Required) - Email validation
4. **Date** (Optional) - Date picker for preferred service date
5. **Location** (Required) - Service location/city
6. **Message** (Optional) - Additional details textarea

## 🎯 Business Features

### Service Information
- **Air Duct Cleaning**: $99 residential service
- **Dryer Vent Cleaning**: $89 fire prevention service
- **Commercial HVAC**: Custom quotes for businesses

### Contact Information
- **Phone**: (470) 491-3855
- **Email**: info@greenairductsga.com
- **Location**: Atlanta, GA & Surrounding Areas
- **Facebook**: Official business page integration

### Service Areas
Atlanta, Marietta, Alpharetta, Roswell, Sandy Springs, Dunwoody, Brookhaven, Decatur, Smyrna, Kennesaw, Acworth, Woodstock, Canton, Cumming, Johns Creek, Duluth

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation
\`\`\`bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
\`\`\`

### Environment Variables
\`\`\`env
# Add any required environment variables here
NEXT_PUBLIC_SITE_URL=https://yoursite.com
\`\`\`

## 📱 Mobile Responsiveness

### Key Mobile Features
- **Touch Navigation**: Optimized for touch interactions
- **Mobile Slider**: Navigation arrows positioned at bottom
- **Responsive Images**: Proper scaling across all devices
- **Mobile Menu**: Collapsible navigation with smooth animations
- **Form Optimization**: Stacked layout with proper input sizing

### Performance Metrics
- **Lighthouse Score**: Optimized for 90+ scores
- **Core Web Vitals**: Excellent LCP, FID, and CLS scores
- **Mobile Speed**: Fast loading on mobile networks

## 🔒 Security Features
- **Form Validation**: Client and server-side validation
- **XSS Protection**: Proper input sanitization
- **HTTPS Ready**: SSL/TLS configuration support

## 📈 Analytics Ready
- **Google Analytics**: Easy integration setup
- **Conversion Tracking**: Form submission tracking
- **Performance Monitoring**: Built-in Next.js analytics support

## 🛠️ Maintenance
- **TypeScript**: Type safety reduces runtime errors
- **Component Architecture**: Modular, reusable components
- **Documentation**: Comprehensive code documentation
- **Version Control**: Git-friendly structure

This website provides a professional, modern presence for Green Air Ducts Georgia with excellent user experience, mobile responsiveness, and conversion optimization features.
