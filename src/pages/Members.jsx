import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Members = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-amber-50 via-orange-50/30 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-orange-200/20 to-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-orange-300/20 to-red-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block"
          >
            <span className="text-orange-600 text-lg font-semibold tracking-wider uppercase mb-4 block">Welcome Back</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 bg-clip-text text-transparent">
              Members Area
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Access your exclusive travel benefits
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl p-8 border border-orange-100/50 group relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full transform translate-x-8 -translate-y-8 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-2xl">📋</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                My Bookings
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                View and manage your upcoming trips
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => navigate('/members/bookings')}
                >
                  View Bookings
                  <span className="ml-2">→</span>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl p-8 border border-orange-100/50 group relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full transform translate-x-8 -translate-y-8 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-2xl">🗓️</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                Travel History
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Browse your past adventures
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => navigate('/members/history')}
                >
                  View History
                  <span className="ml-2">→</span>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-2xl p-8 border border-orange-100/50 group relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-100 to-red-200 rounded-full transform translate-x-8 -translate-y-8 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-2xl">👤</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                Profile Settings
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Update your profile and preferences
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => navigate('/members/profile')}
                >
                  Manage Profile
                  <span className="ml-2">→</span>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-2xl p-8 border border-orange-100/50 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full transform translate-x-8 -translate-y-8 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-2xl">🎁</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                Rewards
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Check your points and benefits
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  View Rewards
                  <span className="ml-2">→</span>
                </Button>
              </motion.div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default Members;