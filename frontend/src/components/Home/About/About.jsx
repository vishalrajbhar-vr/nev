import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaUsers, FaCity, FaLeaf } from "react-icons/fa";

const stats = [
  { id: 1, label: "Vehicles Delivered", value: "50,000+", icon: FaUsers },
  { id: 2, label: "Cities Covered", value: "120+", icon: FaCity },
  { id: 3, label: "Customer Satisfaction", value: "99.4%", icon: FaAward },
  { id: 4, label: "CO2 Emissions Saved", value: "10,000 Tons", icon: FaLeaf },
];

function About() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-[#F4F9F2] relative overflow-hidden font-sans">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF7E7] border border-[#5BBF43]/30 text-[#5BBF43] text-xs sm:text-sm font-extrabold uppercase tracking-wide mb-4">
              <span>About NEV Vehicles</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#06152B] leading-tight tracking-tight">
              Pioneering Clean & Empowering <span className="text-[#5BBF43]">Electric Mobility</span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-[#4A5568] leading-relaxed font-medium">
              NEV Vehicles is a leader in designing high-quality, eco-friendly electric rickshaws engineered specifically for Indian roads. Our mission is to transform urban & semi-urban transportation while providing maximum daily profit to drivers.
            </p>

            <p className="mt-4 text-sm sm:text-base text-[#4A5568] leading-relaxed">
              With heavy-duty chassis construction, advanced battery efficiency, and zero operational emissions, our electric vehicles ensure unmatched durability, safety, and performance.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#products"
                className="px-6 py-3.5 rounded-xl bg-[#5BBF43] text-white font-extrabold text-sm shadow-lg shadow-[#5BBF43]/25 hover:bg-[#4ea837] hover:shadow-xl transition-all"
              >
                Explore Vehicles
              </a>
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl border-2 border-[#06152B] text-[#06152B] font-extrabold text-sm hover:bg-[#06152B] hover:text-white transition-all"
              >
                Become a Partner
              </a>
            </div>
          </motion.div>

          {/* Right Column Stats Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4 sm:gap-6"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.id}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E3EAF1] shadow-[0_8px_30px_rgba(6,21,43,0.06)] flex flex-col justify-between"
                >
                  <div className="h-12 w-12 rounded-xl bg-[#EAF7E7] text-[#5BBF43] flex items-center justify-center mb-4">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#06152B]">
                      {stat.value}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm font-semibold text-[#4A5568]">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
