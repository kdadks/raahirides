import React from "react";
import { motion } from "framer-motion";

const ImageCollage = () => {
  return (
    <div className="grid grid-cols-4 gap-1 h-screen">
      <div className="col-span-2 row-span-2 relative overflow-hidden">
        <motion.img 
          src="https://storage.googleapis.com/hostinger-horizons-assets-prod/65576a3d-d7d1-4ec7-879b-5aa0c8a410d5/bcf4259c620da40759ec80212c43c5df.jpg"
          alt="Vibrant festival celebration"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>
      <div className="relative overflow-hidden">
        <motion.img 
          src="https://storage.googleapis.com/hostinger-horizons-assets-prod/65576a3d-d7d1-4ec7-879b-5aa0c8a410d5/1448f00b36357d9e4ddfcbe07429204a.jpg"
          alt="Traditional Indian cuisine"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", delay: 2 }}
        />
      </div>
      <div className="relative overflow-hidden">
        <motion.img 
          src="https://storage.googleapis.com/hostinger-horizons-assets-prod/65576a3d-d7d1-4ec7-879b-5aa0c8a410d5/e759f53c5c179be94e06ebdc58519459.jpg"
          alt="Cultural heritage"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", delay: 4 }}
        />
      </div>
      <div className="relative overflow-hidden">
        <motion.img 
          src="https://storage.googleapis.com/hostinger-horizons-assets-prod/65576a3d-d7d1-4ec7-879b-5aa0c8a410d5/b1cc7daa79e7a2311042a4a094fdedfd.jpg"
          alt="Temple architecture"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 16, repeat: Infinity, repeatType: "reverse", delay: 6 }}
        />
      </div>
      <div className="relative overflow-hidden">
        <motion.img 
          src="https://storage.googleapis.com/hostinger-horizons-assets-prod/65576a3d-d7d1-4ec7-879b-5aa0c8a410d5/9692dd59a1f85a179b44006997b31f53.jpg"
          alt="Festival celebrations"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 17, repeat: Infinity, repeatType: "reverse", delay: 8 }}
        />
      </div>
    </div>
  );
};

export default ImageCollage;