import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
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
    <>
      <Helmet>
        <title>Uttar Pradesh Travel Packages: Varanasi, Lucknow, Ayodhya & More | RaahiRides</title>
        <meta name="description" content="Book the best travel packages for Uttar Pradesh, including Varanasi, Lucknow, Ayodhya, and more. Explore spiritual, heritage, and cultural tours with RaahiRides." />
        <meta name="keywords" content="Uttar Pradesh travel packages, Varanasi tours, Lucknow packages, Ayodhya travel, India tours, RaahiRides, book UP tours, spiritual journeys, heritage tours" />
        <link rel="canonical" href="https://raahirides.com/packages" />
        {/* Open Graph tags */}
        <meta property="og:title" content="Uttar Pradesh Travel Packages: Varanasi, Lucknow, Ayodhya & More | RaahiRides" />
        <meta property="og:description" content="Book the best travel packages for Uttar Pradesh, including Varanasi, Lucknow, Ayodhya, and more. Explore spiritual, heritage, and cultural tours with RaahiRides." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://raahirides.com/packages" />
        <meta property="og:image" content="https://raahirides.com/Lucknow.jpg" />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Uttar Pradesh Travel Packages: Varanasi, Lucknow, Ayodhya & More | RaahiRides" />
        <meta name="twitter:description" content="Book the best travel packages for Uttar Pradesh, including Varanasi, Lucknow, Ayodhya, and more. Explore spiritual, heritage, and cultural tours with RaahiRides." />
        <meta name="twitter:image" content="https://raahirides.com/Lucknow.jpg" />
        {/* Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "OfferCatalog",
            "name": "Uttar Pradesh Travel Packages",
            "description": "Best travel packages for Uttar Pradesh including Varanasi, Lucknow, Ayodhya, and more. Book tours with RaahiRides.",
            "url": "https://raahirides.com/packages",
            "image": "https://raahirides.com/Lucknow.jpg",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Trip",
                  "name": "Varanasi Spiritual Tour",
                  "url": "https://raahirides.com/tour/varanasi"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Trip",
                  "name": "Lucknow Heritage Package",
                  "url": "https://raahirides.com/tour/lucknow"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Trip",
                  "name": "Ayodhya Pilgrimage Tour",
                  "url": "https://raahirides.com/tour/ayodhya"
                }
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-orange-600 to-orange-700 bg-clip-text text-transparent">
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
  </>
  );
};

export default Packages;
