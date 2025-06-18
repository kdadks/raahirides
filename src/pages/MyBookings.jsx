import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const MyBookings = () => {
  const { user } = useAuth();
  const bookings = JSON.parse(localStorage.getItem("bookings") || "[]")
    .filter(booking => booking.userId === user.email)
    .sort((a, b) => new Date(b.bookingDate) - new Date(a.bookingDate));

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-amber-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
          <p className="text-gray-600 mt-2">Manage your upcoming and past trips</p>
        </motion.div>

        <div className="space-y-6">
          {bookings.length > 0 ? (
            bookings.map((booking, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{booking.destination}</h3>
                    <p className="text-gray-600 mt-1">Date: {new Date(booking.date).toLocaleDateString()}</p>
                    <p className="text-gray-600">Contact: {booking.phone}</p>
                    {booking.specialNeeds && (
                      <p className="text-gray-600 mt-2">
                        <span className="font-medium">Special Requirements:</span> {booking.specialNeeds}
                      </p>
                    )}
                  </div>
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                    Manage Booking
                  </Button>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No bookings found. Start planning your next adventure!</p>
              <Button className="mt-4 bg-orange-600 hover:bg-orange-700 text-white">
                Browse Tours
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;