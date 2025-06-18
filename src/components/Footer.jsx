
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-orange-500">Raahi Rides</h3>
            <p className="mt-2 text-gray-400">Your Premier Travel Partner</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400">Contact us at:</p>
            <a href="mailto:info@raahirides.com" className="text-orange-500 hover:text-orange-400">
              info@raahirides.com
            </a>
            <p className="mt-4 text-sm text-gray-500">
              © {new Date().getFullYear()} kdadks service private ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
