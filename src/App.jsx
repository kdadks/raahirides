
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
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

  const HomePage = () => (
    <>
      {/* Hero Section */}
      <header className="relative h-screen">
        <ImageCollage />
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center text-white px-4">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Raahi Rides
            </motion.h1>
            <div className="space-y-4">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl"
              >
                Your Premier Travel Partner in Eastern UP, Bihar & Nepal
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg md:text-xl max-w-3xl mx-auto"
              >
                Discover seamless travel experiences with our comprehensive solutions - from point-to-point journeys to corporate retreats
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
            >
              <Button 
                size="lg" 
                onClick={() => handleBookNow("Custom Tour")}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg"
              >
                Start Your Journey
              </Button>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Package Tours Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Spiritual Journeys</h2>
          <p className="text-xl text-gray-600">Embark on a transformative journey through sacred lands</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packageTours.map((tour, index) => (
            <PackageTour
              key={index}
              title={tour.title}
              destinations={tour.destinations}
              onBook={() => handleBookNow(tour.title)}
            />
          ))}
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="py-20 px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-amber-50 to-orange-100">
      <Navbar />
      <Toaster />
      <WhatsAppButton />
      <BookingModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        destination={selectedDestination}
      />
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
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
