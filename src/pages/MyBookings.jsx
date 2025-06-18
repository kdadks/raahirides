import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import ManageBookingModal from "@/components/ManageBookingModal";

const MyBookings = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  const [bookings, setBookings] = useState(
    JSON.parse(localStorage.getItem("bookings") || "[]")
      .filter(booking => booking.userId === user.email)
      .sort((a, b) => new Date(b.bookingDate) - new Date(a.bookingDate))
  );

  const handleManageBooking = (booking) => {
    setSelectedBooking(booking);
    setIsManageModalOpen(true);
  };

  const handleCloseManageModal = () => {
    setIsManageModalOpen(false);
    setSelectedBooking(null);
  };

  const handleBookingUpdate = (updatedBooking, isDeleted = false) => {
    if (isDeleted) {
      // Remove the deleted booking from state
      setBookings(prevBookings =>
        prevBookings.filter(booking => booking.bookingId !== selectedBooking.bookingId)
      );
    } else {
      // Update the booking in state
      setBookings(prevBookings =>
        prevBookings.map(booking =>
          booking.bookingId === updatedBooking.bookingId ? updatedBooking : booking
        )
      );
    }
  };

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-amber-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
              <p className="text-gray-600 mt-2">Manage your upcoming and past trips</p>
            </div>
            <Button
              className="bg-orange-600 hover:bg-orange-700 text-white self-start sm:self-auto"
              onClick={() => navigate('/')}
            >
              Browse Tours
            </Button>
          </div>
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
                  <Button
                    className="bg-orange-600 hover:bg-orange-700 text-white"
                    onClick={() => handleManageBooking(booking)}
                  >
                    Manage Booking
                  </Button>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No bookings found. Start planning your next adventure!</p>
              <Button
                className="mt-4 bg-orange-600 hover:bg-orange-700 text-white"
                onClick={() => navigate('/')}
              >
                Browse Tours
              </Button>
            </div>
          )}
        </div>

        {/* Manage Booking Modal */}
        <ManageBookingModal
          isOpen={isManageModalOpen}
          onClose={handleCloseManageModal}
          booking={selectedBooking}
          onBookingUpdate={handleBookingUpdate}
        />
      </div>
    </div>
  );
};

export default MyBookings;