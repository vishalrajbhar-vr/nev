import React from "react";
import { motion } from "framer-motion";
import { FaBolt } from "react-icons/fa";
import { heroTagline, heroHeadline, heroSubtext } from "./heroData";

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="z-10"
    >
      {/* Top Badge */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="flex items-center gap-3 mb-5"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#59C13B] bg-white text-[#59C13B] shadow-sm shrink-0">
          <FaBolt size={15} />
        </span>
        <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider">
          <span className="text-[#59C13B]">{heroTagline.greenText}</span>{" "}
          <span className="text-[#071C38]">{heroTagline.darkText}</span>
        </p>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="text-[38px] md:text-[52px] lg:text-[68px] xl:text-[72px] font-[800] leading-[1.08] text-[#071C38] tracking-tight"
      >
        {heroHeadline.main}
        <span className="block mt-1">
          <span className="text-[#59C13B]">{heroHeadline.highlight}</span>{" "}
          <span className="text-[#071C38]">{heroHeadline.sub}</span>
        </span>
      </motion.h1>

      {/* Description Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="mt-5 text-[16px] sm:text-[18px] lg:text-[20px] text-[#4A5568] leading-relaxed max-w-[520px] font-medium"
      >
        {heroSubtext}
      </motion.p>

      {/* Green Underline Accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.45, duration: 0.5 }}
        className="origin-left mt-4 mb-7 h-[3.5px] w-14 rounded-full bg-[#59C13B]"
      />
    </motion.div>
  );
}

export default HeroContent;
