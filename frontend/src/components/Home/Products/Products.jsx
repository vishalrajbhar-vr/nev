import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const productsList = [
  {
    id: "khalsa-super-deluxe",
    name: "NEV Khalsa Super Deluxe",
    category: "L3 Passenger Rickshaw",
    range: "110-130 km / charge",
    seating: "Driver + 4 Passengers",
    battery: "Advanced Lithium-ion / Lead Acid",
    image: "/full_auto_complete.png",
    link: "/products/khalsa-super-deluxe",
    highlights: ["Digital Speedometer", "Heavy Duty Suspension", "USB Mobile Charger"],
  },
  {
    id: "khalsa-cargo",
    name: "NEV Khalsa Cargo Loader",
    category: "Heavy Cargo E-Loader",
    range: "120-140 km / charge",
    seating: "Driver + 500kg Load Payload",
    battery: "High Capacity Lithium Pack",
    image: "/full_auto_complete.png",
    link: "/products/khalsa-cargo",
    highlights: ["Reinforced Steel Body", "Gradient Hill Climb Assist", "Low Maintenance"],
  },
  {
    id: "khalsa-grand-lithium",
    name: "NEV Khalsa Grand Lithium",
    category: "Premium Passenger E-Auto",
    range: "140-160 km / charge",
    seating: "Driver + 4 Passengers",
    battery: "Smart Fast-Charge Lithium-ion",
    image: "/full_auto_complete.png",
    link: "/products/khalsa-grand-lithium",
    highlights: ["Fast Charge (2.5 hrs)", "3-Year Battery Warranty", "Alloy Wheels"],
  },
];

function Products() {
  return (
    <section id="products" className="py-16 sm:py-24 bg-[#F8FAFC] font-sans">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="px-3.5 py-1.5 rounded-full bg-[#EAF7E7] border border-[#5BBF43]/30 text-[#5BBF43] text-xs sm:text-sm font-extrabold uppercase tracking-wide">
            Our Vehicle Lineup
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-[#06152B]">
            Explore <span className="text-[#5BBF43]">NEV Electric Vehicles</span>
          </h2>
          <p className="mt-4 text-base text-[#4A5568] font-medium">
            Designed for high performance, maximum comfort, and top daily earnings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsList.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl overflow-hidden border border-[#E3EAF1] shadow-[0_10px_30px_rgba(6,21,43,0.06)] hover:border-[#5BBF43] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image Section */}
                <div className="relative bg-gradient-to-b from-[#EEF7FC] to-white p-6 flex justify-center items-center h-64 overflow-hidden">
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#06152B] text-white text-xs font-bold">
                    {item.category}
                  </span>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full object-contain drop-shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Details Section */}
                <div className="p-6">
                  <h3 className="text-xl font-black text-[#06152B] mb-2">
                    {item.name}
                  </h3>

                  <div className="space-y-2 text-sm text-[#4A5568] my-4 border-y border-[#E3EAF1] py-3 font-medium">
                    <div className="flex justify-between">
                      <span>Range per Charge:</span>
                      <span className="font-bold text-[#06152B]">{item.range}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Capacity:</span>
                      <span className="font-bold text-[#06152B]">{item.seating}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Battery Tech:</span>
                      <span className="font-bold text-[#5BBF43]">{item.battery}</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 mb-6">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-bold text-[#06152B]">
                        <FaCheckCircle className="text-[#5BBF43]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={item.link}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#5BBF43] text-white font-extrabold text-sm shadow-md hover:bg-[#4ea837] transition-colors"
                >
                  <span>View Specifications</span>
                  <FaArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
