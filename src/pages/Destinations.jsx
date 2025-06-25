import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Destination from "@/components/Destination";
import BookingModal from "@/components/BookingModal";
import { popularDestinations } from "@/constants/destinations";

const Destinations = () => {
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

  return (
    <>
      <Helmet>
        <title>Top Destinations in Uttar Pradesh: Varanasi, Lucknow, Ayodhya & More | RaahiRides Travel Agency</title>
        <meta name="description" content="Discover the best travel destinations in Uttar Pradesh including Varanasi, Lucknow, Ayodhya, and more. Book spiritual, heritage, and cultural tours with RaahiRides for an unforgettable experience in India." />
        <meta name="keywords" content="Uttar Pradesh travel, Varanasi tours, Lucknow travel, Ayodhya tourism, best destinations UP, spiritual tours India, heritage tours, RaahiRides, travel agency, India, book tours" />
        <link rel="canonical" href="https://raahirides.com/destinations" />
        {/* Open Graph tags */}
        <meta property="og:title" content="Top Destinations in Uttar Pradesh: Varanasi, Lucknow, Ayodhya & More | RaahiRides" />
        <meta property="og:description" content="Discover the best travel destinations in Uttar Pradesh including Varanasi, Lucknow, Ayodhya, and more. Book spiritual, heritage, and cultural tours with RaahiRides." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://raahirides.com/destinations" />
        <meta property="og:image" content="https://raahirides.com/Lucknow.jpg" />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Destinations in Uttar Pradesh: Varanasi, Lucknow, Ayodhya & More | RaahiRides" />
        <meta name="twitter:description" content="Discover the best travel destinations in Uttar Pradesh including Varanasi, Lucknow, Ayodhya, and more. Book spiritual, heritage, and cultural tours with RaahiRides." />
        <meta name="twitter:image" content="https://raahirides.com/Lucknow.jpg" />
        {/* Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "TouristDestination",
            "name": "Uttar Pradesh Destinations",
            "description": "Best travel destinations in Uttar Pradesh including Varanasi, Lucknow, Ayodhya, and more. Book tours with RaahiRides.",
            "url": "https://raahirides.com/destinations",
            "image": "https://raahirides.com/Lucknow.jpg",
            "touristType": ["Spiritual", "Heritage", "Cultural"],
            "geo": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 26.8467,
                "longitude": 80.9462
              },
              "geoRadius": 200
            },
            "hasPart": [
              {
                "@type": "TouristAttraction",
                "name": "Varanasi",
                "url": "https://raahirides.com/destinations/varanasi"
              },
              {
                "@type": "TouristAttraction",
                "name": "Lucknow",
                "url": "https://raahirides.com/destinations/lucknow"
              },
              {
                "@type": "TouristAttraction",
                "name": "Ayodhya",
                "url": "https://raahirides.com/destinations/ayodhya"
              }
            ]
          }
          `}
        </script>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-amber-50/30 to-orange-50/50 pt-24">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Popular Destinations</h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-6">
              Explore the most sought-after spiritual and cultural destinations
            </p>
            <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </div>

      {/* Destinations Section */}
      <section className="py-24 px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-orange-600 to-orange-700 bg-clip-text text-transparent">
              Sacred Places & Cultural Gems
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From ancient temples to historic monuments, discover the rich heritage of Eastern India and Nepal
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularDestinations.map((destination, index) => (
              <Destination
                key={index}
                {...destination}
                onBook={() => handleBookNow(destination.title)}
              />
            ))}
          </div>

          {/* Additional Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 bg-white rounded-2xl shadow-lg border border-orange-100/50 p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Custom Destination Requests
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Don't see your desired destination? We offer customized travel packages to any location in Eastern UP, Bihar, and Nepal based on your preferences.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6">
                <span className="text-3xl mb-3 block">🗺️</span>
                <h4 className="font-semibold text-gray-800 mb-2">Custom Routes</h4>
                <p className="text-gray-600 text-sm">Tailored itineraries based on your interests</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6">
                <span className="text-3xl mb-3 block">🏨</span>
                <h4 className="font-semibold text-gray-800 mb-2">Flexible Accommodation</h4>
                <p className="text-gray-600 text-sm">From budget to luxury options</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6">
                <span className="text-3xl mb-3 block">👥</span>
                <h4 className="font-semibold text-gray-800 mb-2">Group & Solo Travel</h4>
                <p className="text-gray-600 text-sm">Perfect for families, groups, or solo adventurers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        destination={selectedDestination}
      />
    </div>
  </>
  );
};

export default Destinations;
