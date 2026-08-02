import React from "react";
import { motion } from "framer-motion";
import {
  FaWrench,
  FaRupeeSign,
  FaShieldAlt,
  FaChargingStation,
  FaHeadset,
  FaCogs,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Low Maintenance Cost",
    desc: "Engineered with fewer moving parts for minimal maintenance and zero fuel expenses.",
    icon: FaWrench,
  },
  {
    id: 2,
    title: "Higher Daily Earnings",
    desc: "Save up to ₹85,000 annually compared to traditional petrol/diesel auto rickshaws.",
    icon: FaRupeeSign,
  },
  {
    id: 3,
    title: "Heavy Duty Chassis",
    desc: "High-grade tubular steel chassis tested for max load capacity on Indian roads.",
    icon: FaShieldAlt,
  },
  {
    id: 4,
    title: "Advanced Fast Charge",
    desc: "Quick charging smart battery technology ensuring maximum uptime per day.",
    icon: FaChargingStation,
  },
  {
    id: 5,
    title: "24x7 Service Support",
    desc: "Pan-India dealer network with genuine spare parts availability and quick service.",
    icon: FaHeadset,
  },
  {
    id: 6,
    title: "Smart Ergonomics",
    desc: "Comfortable seating, high ground clearance, and digital driver instrument cluster.",
    icon: FaCogs,
  },
];

function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-white font-sans relative">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="px-3.5 py-1.5 rounded-full bg-[#EAF7E7] border border-[#5BBF43]/30 text-[#5BBF43] text-xs sm:text-sm font-extrabold uppercase tracking-wide">
            Why Choose NEV
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-[#06152B]">
            Engineered for <span className="text-[#5BBF43]">Maximum Earnings & Durability</span>
          </h2>
          <p className="mt-4 text-base text-[#4A5568] font-medium">
            Designed with advanced technology and Indian road conditions in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group p-8 rounded-2xl border border-[#E3EAF1] bg-white shadow-[0_4px_20px_rgba(6,21,43,0.04)] hover:border-[#5BBF43] hover:shadow-[0_12px_32px_rgba(91,191,67,0.12)] transition-all duration-300"
              >
                <div className="h-14 w-14 rounded-2xl bg-[#EAF7E7] text-[#5BBF43] flex items-center justify-center mb-6 group-hover:bg-[#5BBF43] group-hover:text-white transition-colors duration-300">
                  <Icon size={26} />
                </div>
                <h3 className="text-xl font-extrabold text-[#06152B] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4A5568] leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
