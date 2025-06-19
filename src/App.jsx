
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import DevTestCredentials from "@/components/DevTestCredentials";
import PackageTour from "@/components/PackageTour";
import Destination from "@/components/Destination";
import BookingModal from "@/components/BookingModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ImageCollage from "@/components/ImageCollage";
import ProtectedRoute from "@/components/ProtectedRoute";
import About from "@/pages/About";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import MyBookings from "@/pages/MyBookings";
import TravelHistory from "@/pages/TravelHistory";
import Rewards from "@/pages/Rewards";
import Profile from "@/pages/Profile";
import TourDetails from "@/pages/TourDetails";
import Packages from "@/pages/Packages";
import Destinations from "@/pages/Destinations";
import { popularDestinations, packageTours } from "@/constants/destinations";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState("");
  const { toast } = useToast();

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

  const HomePage = () => (
    <>
      {/* Hero Section */}
      <header className="relative h-screen overflow-hidden">
        <ImageCollage />
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-orange-900/30 z-10" />
        
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center text-white px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="backdrop-blur-sm bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-orange-100 to-orange-200 bg-clip-text text-transparent"
              >
                Raahi Rides
              </motion.h1>
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl md:text-2xl lg:text-3xl font-light text-orange-100"
                >
                  Your Premier Travel Partner in Eastern UP, Bihar & Nepal
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-white/90 font-light leading-relaxed"
                >
                  Discover seamless travel experiences with our comprehensive solutions - from point-to-point journeys to corporate retreats
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-10"
              >
                <Button
                  size="lg"
                  onClick={() => handleBookNow("Custom Tour")}
                  className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-10 py-6 text-lg md:text-xl font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-orange-400/30"
                >
                  Start Your Journey
                  <span className="ml-2">✨</span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 z-5">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-orange-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </header>

      {/* Package Tours Section */}
      <section id="packages" className="py-24 px-4 md:px-8 bg-gradient-to-br from-white via-orange-50/30 to-amber-50/50 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-orange-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-300 rounded-full blur-3xl"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block"
          >
            <span className="text-orange-600 text-lg font-semibold tracking-wider uppercase mb-4 block">Featured Tours</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 bg-clip-text text-transparent">
              Our Spiritual Journeys
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Embark on a transformative journey through sacred lands
            </p>
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
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
      </section>

      {/* Popular Destinations Section */}
      <section id="destinations" className="py-24 px-4 md:px-8 bg-gradient-to-br from-amber-50 via-orange-50/40 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-orange-200/20 to-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gradient-to-br from-orange-300/20 to-red-200/20 rounded-full blur-3xl"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block"
          >
            <span className="text-orange-600 text-lg font-semibold tracking-wider uppercase mb-4 block">Discover</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent">
              Popular Destinations
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-600 mx-auto mb-6 rounded-full"></div>
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
          {popularDestinations.map((destination, index) => (
            <Destination
              key={index}
              {...destination}
              onBook={() => handleBookNow(destination.title)}
            />
          ))}
        </div>
      </section>
    </>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-50 via-orange-50/30 to-white">
      <Navbar />
      <Toaster />
      <WhatsAppButton />
      <DevTestCredentials />
      <BookingModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        destination={selectedDestination}
      />
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/tour/:tourId" element={<TourDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/members/*"
            element={
              <ProtectedRoute>
                <Routes>
                  <Route path="/" element={<MyBookings />} />
                  <Route path="/bookings" element={<MyBookings />} />
                  <Route path="/history" element={<TravelHistory />} />
                  <Route path="/rewards" element={<Rewards />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
