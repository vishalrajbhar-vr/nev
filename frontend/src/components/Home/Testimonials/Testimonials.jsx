import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    city: "Delhi NCR",
    role: "E-Rickshaw Owner & Driver",
    comment:
      "NEV Khalsa Super Deluxe has doubled my daily net profit! Fuel charges used to take 40% of my income, but now charging costs me almost nothing. Battery life is amazing.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sunil Sharma",
    city: "Jaipur, Rajasthan",
    role: "Fleet Operator (12 Vehicles)",
    comment:
      "We bought 12 NEV E-Rickshaws for our local city fleet. Zero maintenance issues in 18 months of continuous daily operations. Very strong build quality!",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Patel",
    city: "Ahmedabad, Gujarat",
    role: "Cargo Logistics Driver",
    comment:
      "The Khalsa Cargo Loader handles 500kg load easily on flyovers without slowing down. Best decision for my transport business.",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC] font-sans">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="px-3.5 py-1.5 rounded-full bg-[#EAF7E7] border border-[#5BBF43]/30 text-[#5BBF43] text-xs sm:text-sm font-extrabold uppercase tracking-wide">
            Real Stories
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-[#06152B]">
            Trusted by <span className="text-[#5BBF43]">50,000+ Happy Drivers</span>
          </h2>
          <p className="mt-4 text-base text-[#4A5568] font-medium">
            Hear directly from drivers and fleet owners earning more every day with NEV.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl border border-[#E3EAF1] shadow-[0_6px_24px_rgba(6,21,43,0.05)] flex flex-col justify-between"
            >
              <div>
                <FaQuoteLeft className="text-[#5BBF43]/30 text-4xl mb-4" />
                <p className="text-sm sm:text-base text-[#4A5568] font-medium leading-relaxed mb-6">
                  "{t.comment}"
                </p>
              </div>

              <div>
                <div className="flex text-amber-400 gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>
                <h4 className="font-extrabold text-[#06152B] text-base">{t.name}</h4>
                <p className="text-xs font-semibold text-[#5BBF43]">{t.role} • {t.city}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
