import PageHeader from "../components/PageHeader"
import Footer from "../components/Footer"
import WhatsAppButton from "../components/WhatsAppButton"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
       <PageHeader />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-green-600 text-white py-20 mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Element Air – Duct Cleaning - Privacy Policy</h2>

              <p className="text-gray-600 mb-6">
                <strong>Last updated:</strong> July 13, 2025
              </p>

              <p className="mb-6">
                Element Air – Duct Cleaning ("us", "we", or "our") operates the Element Air – Duct Cleaning website (the "Service").
              </p>

              <p className="mb-6">
                This page informs you of our policies regarding the collection, use and disclosure of Personal Information when you use our Service.
              </p>

              <p className="mb-6">
                We will not use or share your information with anyone except as described in this Privacy Policy.
              </p>

              <p className="mb-8">
                We use your Personal Information for providing and improving the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible at our website.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Information Collection And Use</h3>
              <p className="mb-4">
                While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information ("Personal Information") may include, but is not limited to:
              </p>
              <ul className="list-disc pl-6 mb-8">
                <li>Name</li>
                <li>Email address</li>
                <li>Telephone number</li>
                <li>Address</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Log Data</h3>
              <p className="mb-8">
                We collect information that your browser sends whenever you visit our Service ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages and other statistics.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Cookies</h3>
              <p className="mb-4">
                Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your computer's hard drive.
              </p>
              <p className="mb-8">
                We use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Service Providers</h3>
              <p className="mb-8">
                We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
                These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Security</h3>
              <p className="mb-8">
                The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Links To Other Sites</h3>
              <p className="mb-4">
                Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site.
              </p>
              <p className="mb-8">
                We strongly advise you to review the Privacy Policy of every site you visit. We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Children's Privacy</h3>
              <p className="mb-4">
                Our Service does not address anyone under the age of 18 ("Children").
              </p>
              <p className="mb-8">
                We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with Personal Information, please contact us. If we discover that a child under 18 has provided us with Personal Information, we will delete such information from our servers immediately.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Compliance With Laws</h3>
              <p className="mb-8">
                We will disclose your Personal Information where required to do so by law or subpoena.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Changes To This Privacy Policy</h3>
              <p className="mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              </p>
              <p className="mb-8">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h3>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <p className="mb-2">
                  <strong>Element Air – Duct Cleaning</strong>
                </p>
                <p className="mb-2">Phone: (470) 491-3855</p>
                <p className="mb-2">Email: info@elementairductcleaning.com</p>
                <p>Location: Atlanta, GA & Surrounding Areas</p>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Messaging Terms & Conditions</h3>
              <p className="mb-4">
                You agree to receive informational messages (appointment reminders, account notifications, etc.) from Element Air – Duct Cleaning.
              </p>
              <p className="mb-4">
                Message frequency varies. Message and data rates may apply. For help, reply HELP or email us at our email. You can opt out at any time by replying STOP.
              </p>
              <p className="mb-4">
                No mobile information will be shared with any third parties/affiliates for marketing/promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with or obtained by any third parties.
              </p>
              <p className="mb-8">
                If you wish to be removed from receiving future communications, you can opt out at any time by texting STOP or contacting us at our email.
              </p>

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
