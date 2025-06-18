import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const PackageTour = ({ title, duration, price, description, destinations, onBook, onViewDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-orange-100/50 group h-full flex flex-col"
    >
      <div className="p-8 relative flex flex-col h-full">
        {/* Background gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>
        
        {/* Header */}
        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
              {title}
            </h3>
            <span className="text-xl font-bold text-orange-600">{price}</span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
              📅 {duration}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
        </div>
        
        {/* Destinations - This will grow to fill available space */}
        <div className="space-y-5 mb-8 flex-grow">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-6 py-3 rounded-lg bg-gradient-to-r from-orange-50/50 to-amber-50/30 border-l-4 border-orange-300 hover:border-orange-500 transition-all duration-300"
            >
              <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full"></div>
              <h4 className="font-bold text-lg text-gray-800 mb-2">{destination.name}</h4>
              {destination.attractions && (
                <ul className="space-y-2">
                  {destination.attractions.map((attraction, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start text-sm">
                      <span className="text-orange-500 mr-3 mt-1 text-xs">✨</span>
                      <span className="leading-relaxed">{attraction}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Action Buttons - Always positioned at bottom */}
        <div className="mt-auto space-y-3">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={onViewDetails}
              variant="outline"
              className="w-full border-orange-300 text-orange-600 hover:bg-orange-50 font-semibold py-3 rounded-xl transition-all duration-300"
            >
              <span className="mr-2">📋</span>
              View Detailed Itinerary
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={onBook}
              className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-500/20"
            >
              <span className="mr-2">🎫</span>
              Book This Package
              <span className="ml-2">→</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PackageTour;