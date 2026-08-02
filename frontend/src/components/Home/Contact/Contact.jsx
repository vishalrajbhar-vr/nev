import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    model: "Khalsa Super Deluxe",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F8FAFC] font-sans">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="px-3.5 py-1.5 rounded-full bg-[#EAF7E7] border border-[#5BBF43]/30 text-[#5BBF43] text-xs sm:text-sm font-extrabold uppercase tracking-wide">
              Contact Us
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-[#06152B] leading-tight">
              Get in Touch with Our <span className="text-[#5BBF43]">EV Experts</span>
            </h2>
            <p className="mt-4 text-base text-[#4A5568] font-medium leading-relaxed">
              Have questions about vehicle pricing, dealership opportunities, or EMI finance options? Contact us today!
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E3EAF1] shadow-xs">
                <div className="h-12 w-12 rounded-xl bg-[#EAF7E7] text-[#5BBF43] flex items-center justify-center shrink-0">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold uppercase text-[#4A5568]">Call Support</h4>
                  <p className="text-base font-extrabold text-[#06152B]">+91 98765 43210 / +91 11 2345 6789</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E3EAF1] shadow-xs">
                <div className="h-12 w-12 rounded-xl bg-[#EAF7E7] text-[#5BBF43] flex items-center justify-center shrink-0">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold uppercase text-[#4A5568]">Email Inquiries</h4>
                  <p className="text-base font-extrabold text-[#06152B]">sales@nevvehicles.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E3EAF1] shadow-xs">
                <div className="h-12 w-12 rounded-xl bg-[#EAF7E7] text-[#5BBF43] flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold uppercase text-[#4A5568]">Headquarters</h4>
                  <p className="text-base font-extrabold text-[#06152B]">Industrial Area, New Delhi, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E3EAF1] shadow-[0_12px_36px_rgba(6,21,43,0.06)]"
          >
            {submitted ? (
              <div className="text-center py-12">
                <FaCheckCircle className="text-5xl text-[#5BBF43] mx-auto mb-4" />
                <h3 className="text-2xl font-black text-[#06152B]">Inquiry Received!</h3>
                <p className="text-sm text-[#4A5568] mt-2 font-medium">
                  Thank you for reaching out. Our NEV EV representative will contact you within 2 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-xl bg-[#5BBF43] text-white font-bold text-sm"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-black text-[#06152B]">Request Best Price Quote</h3>

                <div>
                  <label className="block text-xs font-extrabold uppercase text-[#06152B] mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E3EAF1] focus:border-[#5BBF43] focus:ring-2 focus:ring-[#5BBF43]/20 outline-none text-sm font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase text-[#06152B] mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter 10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E3EAF1] focus:border-[#5BBF43] focus:ring-2 focus:ring-[#5BBF43]/20 outline-none text-sm font-medium"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold uppercase text-[#06152B] mb-1.5">
                      City / State *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Delhi"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E3EAF1] focus:border-[#5BBF43] focus:ring-2 focus:ring-[#5BBF43]/20 outline-none text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase text-[#06152B] mb-1.5">
                      Interested Model
                    </label>
                    <select
                      value={formData.model}
                      onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E3EAF1] focus:border-[#5BBF43] focus:ring-2 focus:ring-[#5BBF43]/20 outline-none text-sm font-medium bg-white"
                    >
                      <option value="Khalsa Super Deluxe">Khalsa Super Deluxe</option>
                      <option value="Khalsa Cargo Loader">Khalsa Cargo Loader</option>
                      <option value="Khalsa Grand Lithium">Khalsa Grand Lithium</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#5BBF43] text-white font-extrabold text-base shadow-lg shadow-[#5BBF43]/25 hover:bg-[#4ea837] transition-all cursor-pointer"
                >
                  <FaPaperPlane size={16} />
                  <span>Submit Instant Inquiry</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
