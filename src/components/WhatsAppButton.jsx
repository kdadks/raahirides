
import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = "917905159200"; // Removed + sign for WhatsApp URL compatibility
  const message = "Hello! I'm interested in booking a ride with Raahi Rides.";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Add error handling and fallback
    try {
      const newWindow = window.open(whatsappUrl, '_blank');
      if (!newWindow) {
        // Fallback: try to open WhatsApp with alternative format
        const fallbackUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
        window.open(fallbackUrl, '_blank');
      }
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
      // Fallback: try to open WhatsApp with alternative format
      const fallbackUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
      window.open(fallbackUrl, '_blank');
    }
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
      className="fixed bottom-6 right-6 z-[9999]"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group relative z-10 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <motion.span
          initial={{ width: 0, opacity: 0 }}
          whileHover={{ width: "auto", opacity: 1 }}
          className="ml-2 whitespace-nowrap overflow-hidden group-hover:block hidden md:inline"
        >
          Chat with us
        </motion.span>
      </motion.button>
      
      {/* Pulse animation */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
    </motion.div>
  );
};

export default WhatsAppButton;
