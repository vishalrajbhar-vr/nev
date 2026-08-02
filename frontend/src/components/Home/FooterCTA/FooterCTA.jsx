import React from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaArrowRight } from "react-icons/fa";

function FooterCTA() {
  return (
    <section className="py-12 bg-white font-sans border-t border-[#E3EAF1]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-r from-[#EAF7E7] via-white to-[#EAF7E7] border border-[#5BBF43]/30 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm"
        >
          <div className="flex items-center gap-5">
            <div className="h-16 w-16 rounded-2xl bg-[#5BBF43] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#5BBF43]/30">
              <FaHandshake size={32} />
            </div>
            <div>
              <span className="text-xs font-extrabold uppercase text-[#5BBF43] tracking-wide">
                Business Opportunity
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#06152B]">
                Become an Authorized NEV Dealership Partner
              </h3>
              <p className="text-sm text-[#4A5568] font-medium mt-1">
                Join India's fastest-growing EV dealership network with high ROI and complete support.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 flex items-center gap-2 px-8 py-4 rounded-xl bg-[#06152B] text-white font-extrabold text-sm shadow-xl hover:bg-[#5BBF43] hover:text-white transition-all duration-300 hover:scale-105"
          >
            <span>Apply for Dealership</span>
            <FaArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default FooterCTA;
