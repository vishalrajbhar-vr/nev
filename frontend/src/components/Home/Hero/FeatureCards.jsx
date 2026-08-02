import React from "react";
import { motion } from "framer-motion";
import { featureCardsData } from "./heroData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function FeatureCards() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[540px]"
    >
      {featureCardsData.map((item) => {
        const Icon = item.icon;
        return (
          <motion.article
            key={item.id}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="group flex items-start gap-4 rounded-[22px] border border-[#E8EDF4] bg-white p-7 shadow-[0_4px_20px_rgba(7,28,56,0.05)] transition-all duration-300 hover:border-[#59C13B] hover:shadow-[0_14px_36px_rgba(7,28,56,0.10)]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#59C13B] bg-white text-[#59C13B] transition-colors duration-300 group-hover:bg-[#59C13B] group-hover:text-white">
              <Icon size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg font-[800] text-[#071C38] leading-snug">
                {item.title}
              </h3>
              <p className="mt-1.5 text-xs sm:text-[13px] font-medium text-[#4A5568] leading-relaxed whitespace-pre-line">
                {item.description}
              </p>
              {item.hasBar && (
                <span className="mt-3 block h-[2.5px] w-8 rounded-full bg-[#59C13B]" />
              )}
            </div>
          </motion.article>
        );
      })}
    </motion.div>
  );
}

export default FeatureCards;
