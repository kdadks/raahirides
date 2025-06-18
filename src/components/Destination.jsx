import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Destination = ({ title, description, attractions, onBook }) => {
  const getDestinationImage = (title) => {
    switch (title.toLowerCase()) {
      case 'varanasi':
        return <img alt="Evening Ganga Aarti at Varanasi Ghats" className="w-full h-64 object-cover" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/65576a3d-d7d1-4ec7-879b-5aa0c8a410d5/bcf4259c620da40759ec80212c43c5df.jpg" />;
      case 'sarnath':
        return <img alt="Sarnath Stupa" className="w-full h-64 object-cover" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/65576a3d-d7d1-4ec7-879b-5aa0c8a410d5/4336ed7fb36d47cf43e723a1edf7754b.jpg" />;
      case 'bodh gaya':
        return <img alt="Mahabodhi Temple" className="w-full h-64 object-cover" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/65576a3d-d7d1-4ec7-879b-5aa0c8a410d5/ecffeccdb77fb02828a8ef04657f45d4.jpg" />;
      case 'ayodhya':
        return <img alt="Ram Mandir Ayodhya" className="w-full h-64 object-cover" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/65576a3d-d7d1-4ec7-879b-5aa0c8a410d5/62fb4185bd7962ad97423a465da19626.jpg" />;
      case 'lucknow':
        return <img alt="Bara Imambara Lucknow" className="w-full h-64 object-cover" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/65576a3d-d7d1-4ec7-879b-5aa0c8a410d5/ad1bf5dfa8446a8c5086dfe59b9a4a71.jpg" />;
      case 'gorakhpur':
        return <img alt="Gorakhnath Temple" className="w-full h-64 object-cover" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/65576a3d-d7d1-4ec7-879b-5aa0c8a410d5/8add2e11dfdaf2499db4d662f37521f9.jpg" />;
      case 'prayagraj':
        return <img alt="Anand Bhavan Prayagraj" className="w-full h-64 object-cover" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/65576a3d-d7d1-4ec7-879b-5aa0c8a410d5/4caebed57de6cef534247795ce672a73.jpg" />;
      default:
        return <img alt="Indian Temple" className="w-full h-64 object-cover" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/65576a3d-d7d1-4ec7-879b-5aa0c8a410d5/1448f00b36357d9e4ddfcbe07429204a.jpg" />;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-lg overflow-hidden shadow-lg bg-white group"
    >
      <div className="relative overflow-hidden">
        <div className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110">
          {getDestinationImage(title)}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {attractions && (
          <div className="mb-4">
            <h4 className="font-semibold text-lg mb-2">Key Attractions:</h4>
            <ul className="space-y-1">
              {attractions.map((attraction, index) => (
                <li key={index} className="text-gray-600 flex items-center">
                  <span className="text-orange-400 mr-2">•</span>
                  {attraction}
                </li>
              ))}
            </ul>
          </div>
        )}
        <Button
          onClick={onBook}
          className="w-full bg-orange-600 hover:bg-orange-700 text-white"
        >
          Book Now
        </Button>
      </div>
    </motion.div>
  );
};

export default Destination;