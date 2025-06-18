import React from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";

const TravelHistory = () => {
  const { user } = useAuth();
  const completedBookings = JSON.parse(localStorage.getItem("bookings") || "[]")
    .filter(booking => booking.userId === user.email && new Date(booking.date) < new Date())
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-amber-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">Travel History</h1>
          <p className="text-gray-600 mt-2">Your journey through sacred lands</p>
        </motion.div>

        <div className="space-y-8">
          {completedBookings.length > 0 ? (
            completedBookings.map((booking, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{booking.destination}</h3>
                    <p className="text-gray-600 mt-1">
                      Visited on: {new Date(booking.date).toLocaleDateString()}
                    </p>
                    {booking.specialNeeds && (
                      <p className="text-gray-600 mt-2">
                        <span className="font-medium">Experience Notes:</span> {booking.specialNeeds}
                      </p>
                    )}
                  </div>
                  <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                    Completed
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No travel history yet. Time to start your spiritual journey!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TravelHistory;