import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const PackageTour = ({ title, destinations, onBook }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-xl overflow-hidden"
    >
      <div className="p-6">
        <h3 className="text-2xl font-bold text-orange-600 mb-4">{title}</h3>
        <div className="space-y-4">
          {destinations.map((destination, index) => (
            <div key={index} className="border-l-4 border-orange-200 pl-4">
              <h4 className="font-semibold text-lg text-gray-800">{destination.name}</h4>
              {destination.attractions && (
                <ul className="mt-2 space-y-1">
                  {destination.attractions.map((attraction, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center">
                      <span className="text-orange-400 mr-2">•</span>
                      {attraction}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <Button
          onClick={onBook}
          className="w-full mt-6 bg-orange-600 hover:bg-orange-700 text-white"
        >
          Book This Package
        </Button>
      </div>
    </motion.div>
  );
};

export default PackageTour;