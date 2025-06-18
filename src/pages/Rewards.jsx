// Rewards page functionality has been commented out
/*
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const Rewards = () => {
  const { user } = useAuth();
  const bookings = JSON.parse(localStorage.getItem("bookings") || "[]")
    .filter(booking => booking.userId === user.email);
  
  const rewardPoints = bookings.length * 100; // Simple reward calculation

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-amber-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">Rewards</h1>
          <p className="text-gray-600 mt-2">Earn points and unlock exclusive benefits</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Points</h2>
            <div className="text-4xl font-bold text-orange-600 mb-4">
              {rewardPoints} pts
            </div>
            <p className="text-gray-600">
              You've earned points from {bookings.length} bookings
            </p>
            <Button className="mt-4 bg-orange-600 hover:bg-orange-700 text-white">
              Redeem Points
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Benefits</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mr-3">
                  ✓
                </span>
                <span className="text-gray-700">Early booking access</span>
              </li>
              <li className="flex items-center">
                <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mr-3">
                  ✓
                </span>
                <span className="text-gray-700">Special member discounts</span>
              </li>
              <li className="flex items-center">
                <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mr-3">
                  ✓
                </span>
                <span className="text-gray-700">Exclusive tour packages</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
*/

// Placeholder component to prevent import errors
const Rewards = () => {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-amber-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Rewards Coming Soon</h1>
          <p className="text-gray-600">This feature is currently under development.</p>
        </div>
      </div>
    </div>
  );
};

export default Rewards;