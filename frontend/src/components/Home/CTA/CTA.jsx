import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function CTA() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-[#06152B] via-[#0E2849] to-[#06152B] text-white font-sans relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5BBF43]/15 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="px-4 py-1.5 rounded-full bg-[#5BBF43]/20 border border-[#5BBF43]/40 text-[#5BBF43] text-xs sm:text-sm font-extrabold uppercase tracking-wide">
            Switch to Electric Today
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
            Ready to Multiply Your Daily Income with <span className="text-[#5BBF43]">NEV Vehicles?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 font-medium leading-relaxed">
            Get special festive discounts, easy EMI finance options, and instant delivery across India.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="flex items-center gap-2 px-8 py-4 rounded-xl bg-[#5BBF43] text-white font-extrabold text-base shadow-xl shadow-[#5BBF43]/30 hover:bg-[#4ea837] hover:scale-105 transition-all"
            >
              <FaPhoneAlt size={16} />
              <span>Get Best Price Quote</span>
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/80 text-white font-extrabold text-base hover:bg-white hover:text-[#06152B] hover:scale-105 transition-all"
            >
              <FaMapMarkerAlt size={16} />
              <span>Find Nearest Dealership</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
