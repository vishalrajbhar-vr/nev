import React from "react";
import { motion } from "framer-motion";
import { mobilityHighlightsData } from "./heroData";

function BottomHighlights() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
      className="relative z-30 mt-10 lg:mt-12 w-[95%] sm:w-[90%] lg:w-[85%] max-w-[1240px] mx-auto"
    >
      <div className="min-h-[140px] sm:h-[150px] rounded-[26px] border border-[#E8EDF4] bg-white/95 backdrop-blur-md p-6 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.12)] flex items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-[#E8EDF4]">
          {mobilityHighlightsData.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.id}
                className="flex items-center gap-4.5 px-3 sm:px-8 py-2 md:py-0"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EAF7E7] text-[#59C13B] border border-[#D4EED1] shadow-xs">
                  <Icon size={20} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-[800] text-[#071C38] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-[#4A5568] leading-snug">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default BottomHighlights;
