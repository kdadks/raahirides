import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy | RaahiRides Travel Agency</title>
        <meta name="description" content="Read the privacy policy of RaahiRides. Learn how we protect your personal information and ensure secure travel bookings for Eastern UP, Bihar, and Nepal." />
        <meta name="keywords" content="privacy policy, RaahiRides, data protection, travel agency, personal information, security, India, Nepal, Eastern UP, Bihar" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-orange-100"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent"
          >
            Privacy Policy
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 text-center mb-8"
          >
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg max-w-none text-gray-700"
          >
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-700 mb-4">Introduction</h2>
              <p className="mb-4 leading-relaxed">
                Raahi Rides ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our travel booking services and website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-700 mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold text-orange-600 mb-3">Personal Information</h3>
              <p className="mb-4 leading-relaxed">
                We collect personal information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Name and contact information (email address, phone number)</li>
                <li>Travel preferences and booking details</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Special requirements or accessibility needs</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-orange-600 mb-3">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Usage data and website interactions</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-700 mb-4">How We Use Your Information</h2>
              <p className="mb-4 leading-relaxed">We use your information to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Process and manage your travel bookings</li>
                <li>Communicate with you about your reservations</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Send important updates about your travel arrangements</li>
                <li>Improve our services and website functionality</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-700 mb-4">Information Sharing</h2>
              <p className="mb-4 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>With travel partners and service providers necessary to fulfill your bookings</li>
                <li>With payment processors to handle transactions securely</li>
                <li>When required by law or to protect our legal rights</li>
                <li>In case of business transfer or merger (with prior notice)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-700 mb-4">Data Security</h2>
              <p className="mb-4 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-700 mb-4">Your Rights</h2>
              <p className="mb-4 leading-relaxed">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Access and review your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of promotional communications</li>
                <li>Withdraw consent where applicable</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-700 mb-4">Cookies and Tracking</h2>
              <p className="mb-4 leading-relaxed">
                We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-700 mb-4">Children's Privacy</h2>
              <p className="mb-4 leading-relaxed">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-700 mb-4">Changes to This Policy</h2>
              <p className="mb-4 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-700 mb-4">Contact Us</h2>
              <p className="mb-4 leading-relaxed">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                <p className="mb-2"><strong>Email:</strong> <a href="mailto:info@raahirides.com" className="text-orange-600 hover:text-orange-700">info@raahirides.com</a></p>
                <p className="mb-2"><strong>Phone:</strong> <a href="tel:+917905159200" className="text-orange-600 hover:text-orange-700">+91 7905159200</a></p>
                <p><strong>Service Area:</strong> Eastern UP, Bihar & Nepal</p>
              </div>
            </section>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </>
  );
};

export default PrivacyPolicy;
