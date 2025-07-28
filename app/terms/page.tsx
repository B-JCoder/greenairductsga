import Footer from "../components/Footer"
import WhatsAppButton from "../components/WhatsAppButton"
import PageHeader from "../components/PageHeader"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-green-600 text-white py-20 mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Terms and Conditions</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Please read these terms carefully before using our services
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
     {/* Terms Content */}
<section className="py-20">
  <div className="container mx-auto px-4 max-w-4xl">
    <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Element Air – Duct Cleaning - Terms and Conditions</h2>

        <p className="text-gray-600 mb-6">
          <strong>Last updated:</strong> July 26, 2025
        </p>

        <p className="mb-6">
          Please read these Terms of Use ("Terms", "Terms of Use") carefully before using our website (the "Service") operated by Element Air – Duct Cleaning ("us", "we", or "our").
        </p>

        <p className="mb-6">
          Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
        </p>

        <p className="mb-8">
          By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">Intellectual Property</h3>
        <p className="mb-8">
          The Service and its original content, features and functionality are and will remain the exclusive property of Element Air – Duct Cleaning and its licensors.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">Links To Other Web Sites</h3>
        <p className="mb-4">
          Our Service may contain links to third-party web sites or services that are not owned or controlled by Element Air – Duct Cleaning.
        </p>
        <p className="mb-4">
          Element Air – Duct Cleaning has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Element Air – Duct Cleaning shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
        </p>
        <p className="mb-8">
          We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">Termination</h3>
        <p className="mb-4">
          We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
        </p>
        <p className="mb-8">
          All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">Disclaimer</h3>
        <p className="mb-8">
          Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">Governing Law</h3>
        <p className="mb-4">
          These Terms shall be governed and construed in accordance with the laws of United States without regard to its conflict of law provisions.
        </p>
        <p className="mb-8">
          Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">Changes</h3>
        <p className="mb-4">
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>
        <p className="mb-8">
          By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">All Sales Are Final</h3>
        <p className="mb-8">
          Once the service is completed and the payment has been collected by Element Air, all sales are final and subject to no change or refunds.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">Cancellations</h3>
        <p className="mb-4">
          Must cancel service 24 hours before the appointment. A $79 service fee will be charged for any cancellation of the appointments after 24 hours to cover technicians' gas, time, and preparations.
        </p>

        <h4 className="text-xl font-semibold text-gray-800 mb-3">Other Services That Might Be Necessary</h4>
        <p className="mb-8">
          $189 per system. Mold, mildew, intakes, coil, and blowers can be completed at an extra cost.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">Dryer Vent Cleaning</h3>
        <p className="mb-8">Dryer vent cleaning package includes regular size up to 6 feet length.</p>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h3>
        <p className="mb-4">If you have any questions about these Terms, please contact us.</p>

        <p className="text-center text-gray-600 mt-8">
          <strong>All rights reserved.</strong>
        </p>
      </div>
    </div>
  </div>
</section>


      <Footer />
      <WhatsAppButton />
    </main>
  )
}
