import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PackageTour from "@/components/PackageTour";
import BookingModal from "@/components/BookingModal";
import { packageTours } from "@/constants/destinations";

const Packages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState("");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBookNow = (destination) => {
    setSelectedDestination(destination);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedDestination("");
  };

  const handleViewDetails = (tourId) => {
    window.location.href = `/tour/${tourId}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/30 to-amber-50/50 pt-24">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tour Packages</h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-6">
              Discover our carefully curated spiritual journeys
            </p>
            <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </div>

      {/* Package Tours Section */}
      <section className="py-24 px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 bg-clip-text text-transparent">
              Our Spiritual Journeys
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Embark on a transformative journey through sacred lands
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packageTours.map((tour, index) => (
              <PackageTour
                key={index}
                title={tour.title}
                duration={tour.duration}
                price={tour.price}
                description={tour.description}
                destinations={tour.destinations}
                onBook={() => handleBookNow(tour.title)}
                onViewDetails={() => handleViewDetails(tour.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        destination={selectedDestination}
      />
    </div>
  );
};

export default Packages;