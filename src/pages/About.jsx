import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-amber-50 via-orange-50/30 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-orange-200/20 to-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-orange-300/20 to-red-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block"
          >
            <span className="text-orange-600 text-lg font-semibold tracking-wider uppercase mb-4 block">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 bg-clip-text text-transparent">
              About Raahi Rides
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Your Premier Travel Service Provider in Eastern UP, Bihar & Nepal
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-orange-100/50"
          >
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl">🎯</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mb-6"></div>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              At Raahirides, we aspire to become the premier travel service provider, delivering exceptional experiences that cater to our customers' diverse journey needs. Our focus spans across:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-600">
                <span className="text-orange-500 mr-3 mt-1">🔸</span>
                <span className="leading-relaxed">Point-to-point travel solutions</span>
              </li>
              <li className="flex items-start text-gray-600">
                <span className="text-orange-500 mr-3 mt-1">🔸</span>
                <span className="leading-relaxed">Comprehensive package travel experiences</span>
              </li>
              <li className="flex items-start text-gray-600">
                <span className="text-orange-500 mr-3 mt-1">🔸</span>
                <span className="leading-relaxed">Short, mid, and long-term travel arrangements</span>
              </li>
              <li className="flex items-start text-gray-600">
                <span className="text-orange-500 mr-3 mt-1">🔸</span>
                <span className="leading-relaxed">Corporate and business retreat planning</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-orange-100/50"
          >
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl">💫</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Commitment</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-600 rounded-full mb-6"></div>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              We are dedicated to delivering seamless and exceptional travel experiences that showcase the unique cultural heritage of Eastern Uttar Pradesh, Nepal, and Bihar. Our commitment extends to:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-600">
                <span className="text-amber-500 mr-3 mt-1">🔸</span>
                <span className="leading-relaxed">Personalized journey planning</span>
              </li>
              <li className="flex items-start text-gray-600">
                <span className="text-amber-500 mr-3 mt-1">🔸</span>
                <span className="leading-relaxed">Exceeding customer expectations</span>
              </li>
              <li className="flex items-start text-gray-600">
                <span className="text-amber-500 mr-3 mt-1">🔸</span>
                <span className="leading-relaxed">Building lasting relationships</span>
              </li>
              <li className="flex items-start text-gray-600">
                <span className="text-amber-500 mr-3 mt-1">🔸</span>
                <span className="leading-relaxed">Preserving and promoting local culture</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <span className="text-orange-600 text-lg font-semibold tracking-wider uppercase mb-4 block">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-orange-100/50 group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🚗</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                Travel Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Comprehensive point-to-point travel services and package tours
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-orange-100/50 group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">💼</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                Business Travel
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Specialized corporate travel and retreat arrangements
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-orange-100/50 group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🏛️</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                Cultural Experiences
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Immersive cultural and heritage exploration programs
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-br from-white/90 to-orange-50/50 backdrop-blur-sm rounded-2xl shadow-2xl p-10 border border-orange-100/50"
        >
          <div className="text-center mb-12">
            <span className="text-orange-600 text-lg font-semibold tracking-wider uppercase mb-4 block">Our Philosophy</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-center md:text-left"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg mx-auto md:mx-0">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Customer-Centric</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                We prioritize understanding and meeting the unique needs of each customer, ensuring their journey is comfortable, meaningful, and memorable.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-center md:text-left"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg mx-auto md:mx-0">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Quality Focused</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our commitment to excellence ensures that every aspect of your journey meets the highest standards of quality and service.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;