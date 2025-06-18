import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Members = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-amber-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Members Area</h1>
          <p className="text-xl text-gray-600">Access your exclusive travel benefits</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">My Bookings</h2>
            <p className="text-gray-600 mb-4">View and manage your upcoming trips</p>
            <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
              View Bookings
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">Travel History</h2>
            <p className="text-gray-600 mb-4">Browse your past adventures</p>
            <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
              View History
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">Rewards</h2>
            <p className="text-gray-600 mb-4">Check your points and benefits</p>
            <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
              View Rewards
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Members;