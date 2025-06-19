
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-6">
              <img
                src="/raahi_rides_logo.png"
                alt="Raahi Rides Logo"
                className="w-12 h-12 rounded-xl mr-4 shadow-lg"
                style={{ maxHeight: "48px" }}
              />
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                <span className="sr-only">Raahi Rides</span>
              </h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Your Premier Travel Partner
            </p>
            <p className="text-gray-400 leading-relaxed">
              Delivering exceptional travel experiences across Eastern UP, Bihar & Nepal with personalized service and cultural immersion.
            </p>
          </div>
          
          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-6 text-orange-400">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start">
                <span className="text-orange-400 mr-3">📧</span>
                <a
                  href="mailto:info@raahirides.com"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 font-medium"
                >
                  info@raahirides.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <span className="text-orange-400 mr-3">📞</span>
                <a
                  href="tel:+917905159200"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 font-medium"
                >
                  +91 7905159200
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <span className="text-orange-400 mr-3">🌐</span>
                <span className="text-gray-300">Eastern UP, Bihar & Nepal</span>
              </div>
            </div>
          </div>
          
          {/* Services Section */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-6 text-orange-400">Our Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center justify-center md:justify-start">
                <span className="text-orange-400 mr-3 text-sm">🔸</span>
                <span>Spiritual Journeys</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <span className="text-orange-400 mr-3 text-sm">🔸</span>
                <span>Corporate Travel</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <span className="text-orange-400 mr-3 text-sm">🔸</span>
                <span>Cultural Tours</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <span className="text-orange-400 mr-3 text-sm">🔸</span>
                <span>Point-to-Point Travel</span>
              </li>
            </ul>
          </div>

          {/* Links Section */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-6 text-orange-400">Important Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="hover:text-orange-400 transition-colors duration-300 font-medium flex items-center justify-center md:justify-start cursor-pointer"
                >
                  <span className="text-orange-400 mr-3 text-sm">🔸</span>
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/privacy-policy")}
                  className="hover:text-orange-400 transition-colors duration-300 font-medium flex items-center justify-center md:justify-start cursor-pointer"
                >
                  <span className="text-orange-400 mr-3 text-sm">🔸</span>
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/terms-and-conditions")}
                  className="hover:text-orange-400 transition-colors duration-300 font-medium flex items-center justify-center md:justify-start cursor-pointer"
                >
                  <span className="text-orange-400 mr-3 text-sm">🔸</span>
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © {new Date().getFullYear()} kdadks service private ltd. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm text-gray-400">
              <button
                onClick={() => handleNavigation("/privacy-policy")}
                className="hover:text-orange-400 transition-colors duration-300 cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleNavigation("/terms-and-conditions")}
                className="hover:text-orange-400 transition-colors duration-300 cursor-pointer"
              >
                Terms & Conditions
              </button>
              <button
                onClick={() => handleNavigation("/contact")}
                className="hover:text-orange-400 transition-colors duration-300 cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
