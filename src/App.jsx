
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
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsAndConditions from "@/pages/TermsAndConditions";
import ContactUs from "@/pages/ContactUs";
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
      <header
        className="relative min-h-screen overflow-hidden md:pt-0"
        style={{
          paddingTop: "calc(72px + env(safe-area-inset-top))"
        }}
      >
        <ImageCollage />
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-orange-900/30 z-10" />

        <div className="absolute inset-0 z-20 flex items-center justify-center text-center text-white px-2 sm:px-4">
          <div className="max-w-6xl mx-auto w-full px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="backdrop-blur-sm bg-white/10 rounded-3xl p-4 sm:p-8 md:p-12 border border-white/20 shadow-2xl"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-orange-100 to-orange-200 bg-clip-text text-transparent leading-tight"
              >
                Raahi Rides
              </motion.h1>
              <div className="space-y-4 sm:space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-base sm:text-xl md:text-2xl lg:text-3xl font-light text-orange-100"
                >
                  Your Premier Travel Partner in Eastern UP, Bihar & Nepal
                </motion.p>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-2 sm:mt-4">
                  <span className="bg-orange-100 text-orange-700 font-semibold px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow text-xs sm:text-base md:text-lg">
                    15+ Years of Travel Industry Experience
                  </span>
                  <span className="bg-orange-100 text-orange-700 font-semibold px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow text-xs sm:text-base md:text-lg">
                    Govt. Certified 
                  </span>
                  <span className="bg-orange-100 text-orange-700 font-semibold px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow text-xs sm:text-base md:text-lg">
                    Serving UP Govt. for 10+ Years
                  </span>
                  <span className="bg-orange-100 text-orange-700 font-semibold px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow text-xs sm:text-base md:text-lg">
                    Trust & Customer Service Focused
                  </span>
                </div>
                <div className="mt-2 sm:mt-4">
                  <span className="inline-block bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold px-4 py-1 sm:px-6 sm:py-2 rounded-full shadow text-base sm:text-lg md:text-xl tracking-wide">
                    Quality travel with trust is our mantra
                  </span>
                </div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-sm sm:text-lg md:text-xl lg:text-2xl max-w-full sm:max-w-4xl mx-auto text-white/90 font-light leading-relaxed"
                >
                  Discover seamless travel experiences with our comprehensive solutions - from point-to-point journeys to corporate retreats. Let us handle logistics of your travel so you can build the memories of the trips
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-6 sm:mt-10"
              >
                <Button
                  size="lg"
                  onClick={() => handleBookNow("Custom Tour")}
                  className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-6 py-4 sm:px-10 sm:py-6 text-base sm:text-lg md:text-xl font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-orange-400/30"
                >
                  Start Your Journey
                  <span className="ml-2">✨</span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 z-5 pointer-events-none">
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

      {/* Stats Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-orange-50 via-amber-50 to-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-orange-700">Why Choose Raahi Rides?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-6xl font-extrabold text-orange-600">10K+</div>
              <div className="text-lg font-medium text-gray-700 mt-2">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-extrabold text-orange-600">150k+</div>
              <div className="text-lg font-medium text-gray-700 mt-2">KM Travelled</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-extrabold text-orange-600">100+</div>
              <div className="text-lg font-medium text-gray-700 mt-2">Destinations</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-extrabold text-orange-600">15+</div>
              <div className="text-lg font-medium text-gray-700 mt-2">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-l from-orange-50 via-amber-50 to-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-orange-700 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
              <div className="flex items-center mb-4">
                <span className="inline-block w-10 h-10 bg-orange-200 rounded-full mr-3"></span>
                <div>
                  <div className="font-semibold text-orange-700">Anil Patel</div>
                  <div className="text-sm text-gray-500">New Jersey, USA (NRI)</div>
                </div>
              </div>
              <div className="text-gray-700 italic flex-grow">"Booked the Shiva Shambhu package tour for my parents directly through the Raahi Rides website. The online booking was simple, and the team ensured a smooth, spiritual journey!"</div>
              <div className="mt-4 text-yellow-400 text-lg">★★★★★</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
              <div className="flex items-center mb-4">
                <span className="inline-block w-10 h-10 bg-orange-200 rounded-full mr-3"></span>
                <div>
                  <div className="font-semibold text-orange-700">Neha Reddy</div>
                  <div className="text-sm text-gray-500">Sydney, Australia (NRI)</div>
                </div>
              </div>
              <div className="text-gray-700 italic flex-grow">"We booked the Awadh Retreat package tour online from Australia. The website was easy to use, and the Raahi Rides team took care of every detail for our NRI family."</div>
              <div className="mt-4 text-yellow-400 text-lg">★★★★★</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
              <div className="flex items-center mb-4">
                <span className="inline-block w-10 h-10 bg-orange-200 rounded-full mr-3"></span>
                <div>
                  <div className="font-semibold text-orange-700">Priya Sharma</div>
                  <div className="text-sm text-gray-500">Varanasi, India</div>
                </div>
              </div>
              <div className="text-gray-700 italic flex-grow">"Raahi Rides made our family trip to Bodh Gaya so smooth and memorable. Highly recommended!"</div>
              <div className="mt-4 text-yellow-400 text-lg">★★★★★</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
              <div className="flex items-center mb-4">
                <span className="inline-block w-10 h-10 bg-orange-200 rounded-full mr-3"></span>
                <div>
                  <div className="font-semibold text-orange-700">Rohit Verma</div>
                  <div className="text-sm text-gray-500">Patna, India</div>
                </div>
              </div>
              <div className="text-gray-700 italic flex-grow">"Affordable and reliable. Will book again for my next trip to Nepal!"</div>
              <div className="mt-4 text-yellow-400 text-lg">★★★★★</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
              <div className="flex items-center mb-4">
                <span className="inline-block w-10 h-10 bg-orange-200 rounded-full mr-3"></span>
                <div>
                  <div className="font-semibold text-orange-700">Sophie Dubois</div>
                  <div className="text-sm text-gray-500">Paris, France</div>
                </div>
              </div>
              <div className="text-gray-700 italic flex-grow">"Wonderful service! The booking process was easy and the journey was delightful."</div>
              <div className="mt-4 text-yellow-400 text-lg">★★★★★</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
              <div className="flex items-center mb-4">
                <span className="inline-block w-10 h-10 bg-orange-200 rounded-full mr-3"></span>
                <div>
                  <div className="font-semibold text-orange-700">Emily Chen</div>
                  <div className="text-sm text-gray-500">Singapore</div>
                </div>
              </div>
              <div className="text-gray-700 italic flex-grow">"The best way to explore Bihar and UP. The guides were knowledgeable and friendly."</div>
              <div className="mt-4 text-yellow-400 text-lg">★★★★★</div>
            </div>
          </div>
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
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
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
