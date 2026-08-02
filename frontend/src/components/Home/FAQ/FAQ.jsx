import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    id: 1,
    q: "What is the driving range of NEV Electric Rickshaws per single charge?",
    a: "NEV Electric Rickshaws offer a driving range between 110 km to 160 km per full charge depending on the battery capacity (Lithium-ion / Lead Acid) and road payload.",
  },
  {
    id: 2,
    q: "How long does it take to fully charge the battery?",
    a: "With our advanced Fast Lithium-ion Charger, it takes only 2.5 to 3 hours for a full 100% charge. Standard chargers take approximately 6 to 7 hours.",
  },
  {
    id: 3,
    q: "Are NEV Electric Vehicles RTO approved and road legal in India?",
    a: "Yes, 100% of NEV Electric Vehicles are fully RTO approved, ICAT/ARAI certified, and completely road legal across all states in India.",
  },
  {
    id: 4,
    q: "What warranty options come with NEV Electric Vehicles?",
    a: "We provide up to 3 Years warranty on Lithium-ion battery packs, motor, and controller, backed by pan-India dealership service support.",
  },
  {
    id: 5,
    q: "Are loan and EMI finance options available for purchasing?",
    a: "Yes! We have tie-ups with leading national banks and NBFCs offering low down-payment options and flexible monthly EMIs for easy ownership.",
  },
];

function FAQ() {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-24 bg-white font-sans">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="px-3.5 py-1.5 rounded-full bg-[#EAF7E7] border border-[#5BBF43]/30 text-[#5BBF43] text-xs sm:text-sm font-extrabold uppercase tracking-wide">
            Got Questions?
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-[#06152B]">
            Frequently Asked <span className="text-[#5BBF43]">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-[#E3EAF1] rounded-2xl overflow-hidden bg-white shadow-xs transition-colors"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-6 text-left flex justify-between items-center font-extrabold text-base sm:text-lg text-[#06152B] gap-4 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <FaChevronDown
                    className={`text-[#5BBF43] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-sm sm:text-base text-[#4A5568] font-medium leading-relaxed border-t border-[#E3EAF1]/50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
