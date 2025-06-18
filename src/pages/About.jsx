import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-amber-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Raahi Rides</h1>
          <p className="text-xl text-gray-600">Your Premier Travel Service Provider in Eastern UP, Bihar & Nepal</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-gray-900">Our Vision</h2>
            <p className="text-gray-600">
              At Raahirides, we aspire to become the premier travel service provider, delivering exceptional experiences that cater to our customers' diverse journey needs. Our focus spans across:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li>Point-to-point travel solutions</li>
              <li>Comprehensive package travel experiences</li>
              <li>Short, mid, and long-term travel arrangements</li>
              <li>Corporate and business retreat planning</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-gray-900">Our Commitment</h2>
            <p className="text-gray-600">
              We are dedicated to delivering seamless and exceptional travel experiences that showcase the unique cultural heritage of Eastern Uttar Pradesh, Nepal, and Bihar. Our commitment extends to:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li>Personalized journey planning</li>
              <li>Exceeding customer expectations</li>
              <li>Building lasting relationships</li>
              <li>Preserving and promoting local culture</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="text-3xl mb-4">🚗</div>
              <h3 className="text-xl font-semibold mb-2">Travel Solutions</h3>
              <p className="text-gray-600">Comprehensive point-to-point travel services and package tours</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="text-3xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-2">Business Travel</h3>
              <p className="text-gray-600">Specialized corporate travel and retreat arrangements</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="text-3xl mb-4">🏛️</div>
              <h3 className="text-xl font-semibold mb-2">Cultural Experiences</h3>
              <p className="text-gray-600">Immersive cultural and heritage exploration programs</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Customer-Centric</h3>
              <p className="text-gray-600">
                We prioritize understanding and meeting the unique needs of each customer, ensuring their journey is comfortable, meaningful, and memorable.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Quality Focused</h3>
              <p className="text-gray-600">
                Our commitment to excellence ensures that every aspect of your journey meets the highest standards of quality and service.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;