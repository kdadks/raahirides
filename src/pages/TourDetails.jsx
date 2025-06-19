import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { packageTours } from "@/constants/destinations";
import BookingModal from "@/components/BookingModal";

const TourDetails = () => {
  const { tourId } = useParams();
  const navigate = useNavigate();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  
  const tour = packageTours.find(t => t.id === tourId);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [tourId]);
  
  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Tour Not Found</h1>
          <Button onClick={() => navigate("/")} className="bg-orange-600 hover:bg-orange-700">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const handleBookNow = () => {
    setIsBookingModalOpen(true);
  };

  const handleBookingModalClose = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/30 to-amber-50/50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{tour.title}</h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-6">{tour.description}</p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="bg-white/20 px-4 py-2 rounded-full">
                📅 {tour.duration}
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full">
                💰 {tour.price}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Itinerary Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                <span className="mr-3">📋</span>
                Detailed Itinerary
              </h2>
              
              <div className="space-y-6">
                {tour.itinerary.map((day, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="bg-white rounded-2xl shadow-lg border border-orange-100/50 overflow-hidden"
                  >
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4">
                      <h3 className="text-xl font-bold">
                        Day {day.day}: {day.title}
                      </h3>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        {day.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-start">
                            <span className="text-orange-500 mr-3 mt-1 text-sm">✨</span>
                            <span className="text-gray-700 leading-relaxed">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Destinations Covered */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl shadow-lg border border-orange-100/50 p-6"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="mr-2">🗺️</span>
                  Destinations Covered
                </h3>
                <div className="space-y-4">
                  {tour.destinations.map((destination, index) => (
                    <div key={index} className="border-l-4 border-orange-300 pl-4">
                      <h4 className="font-semibold text-gray-800 mb-2">{destination.name}</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {destination.attractions.map((attraction, attIndex) => (
                          <li key={attIndex} className="flex items-start">
                            <span className="text-orange-400 mr-2 text-xs">•</span>
                            {attraction}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Booking Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl shadow-lg border border-orange-200 p-6"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Ready to Book?</h3>
                  <p className="text-gray-600">Start your spiritual journey today</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-orange-200">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold text-gray-800">{tour.duration}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-orange-200">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-bold text-lg text-orange-600">{tour.price}</span>
                  </div>
                  <div className="text-xs text-gray-500 text-center">
                    *Pricing customized based on group size, accommodation preferences, and specific requirements
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={handleBookNow}
                    className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span className="mr-2">🎫</span>
                    Book This Package
                    <span className="ml-2">→</span>
                  </Button>
                  
                  <Button
                    onClick={() => {
                      navigate("/packages");
                      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                    }}
                    variant="outline"
                    className="w-full border-orange-300 text-orange-600 hover:bg-orange-50 font-semibold py-3 rounded-xl"
                  >
                    ← Back to Tours
                  </Button>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white rounded-2xl shadow-lg border border-orange-100/50 p-6"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <span className="mr-2">📞</span>
                  Need Help?
                </h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <p>Have questions about this tour? Our travel experts are here to help!</p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="mr-2">📧</span>
                      <span>info@raahirides.com</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">📱</span>
                      <span>+91 79051 59200</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleBookingModalClose}
        destination={tour.title}
      />
    </div>
  );
};

export default TourDetails;