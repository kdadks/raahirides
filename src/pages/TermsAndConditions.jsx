import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Terms and Conditions | RaahiRides Travel Agency</title>
        <meta name="description" content="Read the terms and conditions for using RaahiRides travel services. Learn about bookings, cancellations, responsibilities, and legal information." />
        <meta name="keywords" content="terms and conditions, RaahiRides, travel agency, booking policy, cancellation, legal, India, Nepal, Eastern UP, Bihar" />
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
            Terms and Conditions
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
              <h2 className="text-2xl font-bold text-orange-700 mb-4">Agreement to Terms</h2>
              <p className="mb-4 leading-relaxed">
                By accessing and using Raahi Rides services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-700 mb-4">Services Provided</h2>
              <p className="mb-4 leading-relaxed">
                Raahi Rides provides travel and transportation services including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Point-to-point travel arrangements within Eastern UP, Bihar & Nepal</li>
                <li>Spiritual journey packages and cultural tours</li>
                <li>Corporate travel solutions</li>
                <li>Group tour arrangements</li>
                <li>Vehicle rental services with professional drivers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-700 mb-4">Booking and Payment Terms</h2>
              <h3 className="text-xl font-semibold text-orange-600 mb-3">Booking Process</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>All bookings are subject to availability and confirmation</li>
                <li>Booking confirmation will be sent via email within 24 hours</li>
                <li>Incomplete or incorrect information may result in booking cancellation</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-orange-600 mb-3">Payment Terms</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Payment terms will be communicated at the time of booking confirmation</li>
                <li>Advance payment may be required for certain bookings</li>
                <li>All payments are subject to applicable taxes and fees</li>
                <li>Payment can be made through approved payment methods only</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-700 mb-4">Cancellation and Refund Policy</h2>
              <h3 className="text-xl font-semibold text-orange-600 mb-3">Cancellation by Customer</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Cancellations must be made at least 24 hours before the scheduled departure</li>
                <li>Cancellation charges may apply depending on the timing and nature of the booking</li>
                <li>Refunds, if applicable, will be processed within 7-10 business days</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-orange-600 mb-3">Cancellation by Raahi Rides</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>We reserve the right to cancel services due to unforeseen circumstances</li>
                <li>Full refund will be provided if cancellation is from our side</li>
                <li>Alternative arrangements will be offered where possible</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-700 mb-4">Customer Responsibilities</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide accurate and complete information during booking</li>
                <li>Be present at the designated pickup location on time</li>
                <li>Carry valid identification documents for travel</li>
                <li>Respect the vehicle and follow safety guidelines</li>
                <li>Inform us of any special requirements or medical conditions</li>
                <li>Comply with local laws and regulations during travel</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-700 mb-4">Vehicle and Safety</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>All vehicles are regularly maintained and inspected</li>
                <li>Professional and licensed drivers are provided</li>
                <li>Smoking and consumption of alcohol inside vehicles is prohibited</li>
                <li>Customers are responsible for any damage caused to the vehicle</li>
                <li>Safety equipment and guidelines must be followed</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-700 mb-4">Limitation of Liability</h2>
              <p className="mb-4 leading-relaxed">
                Raahi Rides shall not be liable for:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Delays caused by traffic, weather, or other factors beyond our control</li>
                <li>Loss or damage to personal belongings during travel</li>
                <li>Indirect, incidental, or consequential damages</li>
                <li>Issues arising from failure to follow provided instructions</li>
                <li>Third-party services or accommodations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-700 mb-4">Force Majeure</h2>
              <p className="mb-4 leading-relaxed">
                Raahi Rides shall not be held responsible for any failure to perform obligations due to circumstances beyond reasonable control, including but not limited to natural disasters, government actions, strikes, or pandemic-related restrictions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-700 mb-4">Disputes and Governing Law</h2>
              <p className="mb-4 leading-relaxed">
                Any disputes arising from these terms shall be subject to the jurisdiction of Indian courts. We encourage customers to contact us directly to resolve any issues before seeking legal remedies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-700 mb-4">Modifications to Terms</h2>
              <p className="mb-4 leading-relaxed">
                Raahi Rides reserves the right to modify these terms and conditions at any time. Updated terms will be posted on our website with the revision date. Continued use of our services constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-700 mb-4">Privacy</h2>
              <p className="mb-4 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-700 mb-4">Contact Information</h2>
              <p className="mb-4 leading-relaxed">
                For questions about these Terms and Conditions or to report any issues, please contact us:
              </p>
              <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                <p className="mb-2"><strong>Email:</strong> <a href="mailto:info@raahirides.com" className="text-orange-600 hover:text-orange-700">info@raahirides.com</a></p>
                <p className="mb-2"><strong>Phone:</strong> <a href="tel:+917905159200" className="text-orange-600 hover:text-orange-700">+91 7905159200</a></p>
                <p><strong>Service Area:</strong> Eastern UP, Bihar & Nepal</p>
              </div>
            </section>

            <section className="mb-8">
              <p className="text-sm text-gray-600 italic">
                By using Raahi Rides services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </section>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </>
  );
};

export default TermsAndConditions;
