import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaBatteryFull, FaMicrochip, FaCogs } from "react-icons/fa";

const techSpecs = [
  {
    id: 1,
    title: "High-Torque Motor",
    desc: "1200W-2000W BLDC motor providing effortless acceleration on steep inclinations.",
    icon: FaCogs,
  },
  {
    id: 2,
    title: "Smart Battery Management (BMS)",
    desc: "Intelligent thermal protection, overcharge prevention, and balanced cell distribution.",
    icon: FaBatteryFull,
  },
  {
    id: 3,
    title: "All-Weather Steel Body",
    desc: "Anti-corrosive powder-coated paint finish designed to withstand harsh weather conditions.",
    icon: FaShieldAlt,
  },
  {
    id: 4,
    title: "Regenerative Braking System",
    desc: "Recovers energy during braking to extend overall battery range and reduce brake wear.",
    icon: FaMicrochip,
  },
];

function Features() {
  return (
    <section className="py-16 sm:py-24 bg-white font-sans relative">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="px-3.5 py-1.5 rounded-full bg-[#EAF7E7] border border-[#5BBF43]/30 text-[#5BBF43] text-xs sm:text-sm font-extrabold uppercase tracking-wide">
              Advanced EV Technology
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-[#06152B] leading-tight">
              State-of-the-Art <span className="text-[#5BBF43]">Engineering Excellence</span>
            </h2>
            <p className="mt-4 text-base text-[#4A5568] font-medium leading-relaxed">
              Every NEV Electric Rickshaw is crafted using precision engineering and quality components to deliver maximum mileage, safety, and reliability on every journey.
            </p>

            <div className="mt-8 space-y-6">
              {techSpecs.map((spec) => {
                const Icon = spec.icon;
                return (
                  <div key={spec.id} className="flex gap-4">
                    <div className="h-12 w-12 shrink-0 rounded-2xl bg-[#EAF7E7] text-[#5BBF43] flex items-center justify-center">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#06152B]">{spec.title}</h3>
                      <p className="text-sm text-[#4A5568] mt-1 font-medium">{spec.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-[540px] rounded-3xl bg-gradient-to-br from-[#06152B] to-[#122B4F] p-8 text-white shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#5BBF43]/20 rounded-full blur-3xl" />
              <h3 className="text-2xl font-black mb-6">Technical Specifications at a Glance</h3>
              
              <ul className="space-y-4 text-sm font-semibold border-t border-white/10 pt-6">
                <li className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-gray-400">Motor Power:</span>
                  <span className="text-[#5BBF43]">1200W / 1400W High Torque</span>
                </li>
                <li className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-gray-400">Max Speed:</span>
                  <span>25 km/h (RTO Compliant)</span>
                </li>
                <li className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-gray-400">Charging Time:</span>
                  <span>2.5 - 3 Hours (Fast Lithium)</span>
                </li>
                <li className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-gray-400">Climbing Degree:</span>
                  <span>Up to 15 Degrees</span>
                </li>
                <li className="flex justify-between py-2">
                  <span className="text-gray-400">Braking System:</span>
                  <span>Dual Drum & Regenerative</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Features;
