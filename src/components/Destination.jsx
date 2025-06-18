import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Destination = ({ title, description, attractions, onBook }) => {
  const getDestinationImage = (title) => {
    switch (title.toLowerCase()) {
      case 'varanasi':
        return <img alt="Evening Ganga Aarti at Varanasi Ghats" className="w-full h-64 object-cover" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/65576a3d-d7d1-4ec7-879b-5aa0c8a410d5/bcf4259c620da40759ec80212c43c5df.jpg" />;
      case 'sarnath':
        return <img alt="Sarnath Stupa" className="w-full h-64 object-cover" src="/7804_sarnath.webp" />;
      case 'bodh gaya':
        return <img alt="Mahabodhi Temple" className="w-full h-64 object-cover" src="/Bodh gaya.webp" />;
      case 'ayodhya':
        return <img alt="Ram Mandir Ayodhya" className="w-full h-64 object-cover" src="/Ayodhya-Ram-Mandir.jpg" />;
      case 'lucknow':
        return <img alt="Bara Imambara Lucknow" className="w-full h-64 object-cover" src="/Lucknow.jpg" />;
      case 'gorakhpur':
        return <img alt="Gorakhnath Temple" className="w-full h-64 object-cover" src="/gorakhpur.jpg" />;
      case 'prayagraj':
        return <img alt="Anand Bhavan Prayagraj" className="w-full h-64 object-cover" src="/Prayagraj.jpeg" />;
      case 'kathmandu':
        return <img alt="Kathmandu Durbar Square" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1571849079798-5e4b50b45bc5?w=800&q=80" />;
      default:
        return <img alt="Indian Temple" className="w-full h-64 object-cover" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/65576a3d-d7d1-4ec7-879b-5aa0c8a410d5/1448f00b36357d9e4ddfcbe07429204a.jpg" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-2xl overflow-hidden shadow-2xl bg-white group border border-orange-100/50 h-full flex flex-col"
    >
      <div className="relative overflow-hidden">
        <div className="w-full h-72 object-cover transition-all duration-500 group-hover:scale-110">
          {getDestinationImage(title)}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        
        {/* Floating title overlay on hover */}
        <div className="absolute bottom-6 left-6 right-6 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{title}</h3>
          <p className="text-orange-200 text-sm font-medium">Discover the magic</p>
        </div>
        
        {/* Decorative corner element */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-orange-400/80 to-orange-600/80 rounded-full flex items-center justify-center backdrop-blur-sm">
          <span className="text-white text-lg">🏛️</span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
            {title}
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mb-4"></div>
          <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
        </div>
        
        {attractions && (
          <div className="mb-8 flex-grow">
            <h4 className="font-bold text-xl mb-4 text-gray-800 flex items-center">
              <span className="mr-2">✨</span>
              Key Attractions:
            </h4>
            <ul className="space-y-3">
              {attractions.map((attraction, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-gray-600 flex items-start bg-gradient-to-r from-orange-50/70 to-amber-50/50 p-3 rounded-lg border border-orange-100/50"
                >
                  <span className="text-orange-500 mr-3 mt-1 text-sm">🔸</span>
                  <span className="leading-relaxed">{attraction}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Book Button - Always positioned at bottom */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-auto"
        >
          <Button
            onClick={onBook}
            className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-500/20"
          >
            <span className="mr-2">🎫</span>
            Book Now
            <span className="ml-2">→</span>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Destination;