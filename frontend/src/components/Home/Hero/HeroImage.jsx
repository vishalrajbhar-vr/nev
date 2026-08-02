import React from "react";
import { motion } from "framer-motion";
import { FaLeaf } from "react-icons/fa";

const vehicleSrc = "/full_auto_complete.png";
const bgSceneSrc = "/clean_hero_city_bg.jpg";

function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex justify-center lg:justify-end items-center z-10 w-full"
    >
      {/* Hero Image Wrapper Container */}
      <div className="relative w-full max-w-[540px] sm:max-w-[600px] lg:max-w-[680px] aspect-[1.35/1]">
        {/* Top-Right 6x4 Green Dot Matrix */}
        <div className="absolute -top-6 right-3 sm:right-6 z-0 grid grid-cols-6 gap-2.5 pointer-events-none">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-[#59C13B]"
            />
          ))}
        </div>

        {/* Huge Curved Frame (City Background Only inside frame) */}
        <div className="absolute inset-0 rounded-[36px] lg:rounded-l-[300px] lg:rounded-r-[36px] border-[8px] sm:border-[10px] border-white outline outline-2 outline-[#59C13B] shadow-[0_25px_60px_rgba(7,28,56,0.14)] bg-[#EEF7FC] overflow-hidden z-10">
          {/* Photorealistic Clean Outdoor Background */}
          <img
            src={bgSceneSrc}
            alt="Hero Scene Background"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Floating Green Leaf Badge with Soft Floating Animation */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-5 right-6 sm:top-6 sm:right-8 z-40"
        >
          <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#EAF7E7] text-[#59C13B] border-2 border-[#59C13B]/40 shadow-lg">
            <FaLeaf className="text-xl sm:text-2xl text-[#59C13B] transform -rotate-12" />
          </div>
        </motion.div>

        {/* Single Vehicle Overlay - Extends ~15% outside frame, Uncropped & Large Shadow */}
        <motion.div
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-[-5%] right-[-5%] sm:bottom-[-6%] sm:right-[-6%] lg:right-[-7%] z-30 h-[108%] sm:h-[112%] lg:h-[116%] w-auto max-w-none pointer-events-none select-none"
        >
          <img
            src={vehicleSrc}
            alt="NEV Electric Rickshaw"
            className="h-full w-auto object-contain drop-shadow-[0_25px_45px_rgba(7,28,56,0.28)]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HeroImage;
