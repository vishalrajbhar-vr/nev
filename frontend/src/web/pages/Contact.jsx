import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { submitForm } from "../api";

function Contact() {
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus({ type: "loading", message: "Sending your message..." });

    const formData = Object.fromEntries(new FormData(form));
    try {
      await submitForm("contact", formData);
      form.reset();
      setStatus({ type: "success", message: "Thanks. We will contact you shortly." });
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    }
  };

  return (
    <div className="bg-[#F8FAFC]">

      {/* ================= HERO ================= */}

      <section className="bg-[#071426] py-24">
        <div className="max-w-7xl mx-auto px-5 text-center">

          <p className="text-[#5BBF43] uppercase tracking-[4px] font-semibold">
            Contact Us
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-white mt-5">
            Let's Connect
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8">
            We'd love to hear from you. Contact our team for dealership,
            support, electric vehicle enquiries or any business discussion.
          </p>

        </div>
      </section>

      {/* ================= CONTACT CARDS ================= */}

      <section className="-mt-16 pb-16">
        <div className="max-w-7xl mx-auto px-5">

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-7">

            {/* Card */}

            <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 duration-300">

              <div className="w-16 h-16 rounded-full bg-[#5BBF43] flex items-center justify-center text-white text-2xl mx-auto">

                <FaMapMarkerAlt />

              </div>

              <h3 className="text-xl font-bold mt-6 text-[#071426]">
                Office
              </h3>

              <p className="text-gray-500 mt-3 leading-7">
                Lucknow, India
                <br />
                India
              </p>

            </div>

            {/* Card */}

            <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 duration-300">

              <div className="w-16 h-16 rounded-full bg-[#293F8F] flex items-center justify-center text-white text-2xl mx-auto">

                <FaPhoneAlt />

              </div>

              <h3 className="text-xl font-bold mt-6 text-[#071426]">
                Phone
              </h3>

              <p className="text-gray-500 mt-3">
                +91 98765 43210
              </p>

            </div>

            {/* Card */}

            <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 duration-300">

              <div className="w-16 h-16 rounded-full bg-[#5BBF43] flex items-center justify-center text-white text-2xl mx-auto">

                <FaEnvelope />

              </div>

              <h3 className="text-xl font-bold mt-6 text-[#071426]">
                Email
              </h3>

              <p className="text-gray-500 mt-3">
                info.navgatee@gmail.com
              </p>

            </div>

            {/* Card */}

            <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 duration-300">

              <div className="w-16 h-16 rounded-full bg-[#293F8F] flex items-center justify-center text-white text-2xl mx-auto">

                <FaClock />

              </div>

              <h3 className="text-xl font-bold mt-6 text-[#071426]">
                Timing
              </h3>

              <p className="text-gray-500 mt-3">
                Mon - Sat
                <br />
                9 AM - 6 PM
              </p>

            </div>

          </div>

        </div>
      </section>

      {/*  form section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-12 gap-10 items-stretch">

            {/* ================= Chat Card + Image ================= */}

            <div className="lg:col-span-5 relative min-h-[500px]">

              {/* ================= Chat Card ================= */}

              <div className="bg-white rounded-3xl shadow-xl p-8 pr-24 relative overflow-visible h-full min-h-[500px]">

                <span className="absolute top-0 left-0 w-full h-2 bg-[#5BBF43] rounded-t-3xl"></span>

                <h2 className="text-3xl font-bold text-[#071426] mb-4">
                  Let's Chat
                </h2>

                <p className="text-gray-600 leading-8 mb-8 max-w-[400px]">
                  Looking for electric vehicles, dealership information,
                  spare parts or customer support? Our team is always
                  ready to help you.
                </p>

                <div className="space-y-6">

                  {/* ================= Call ================= */}

                  <div className="flex items-center gap-4">

                    <div className="w-14 h-14 shrink-0 rounded-full bg-[#5BBF43] text-white flex items-center justify-center text-xl shadow-md">
                      <FaPhoneAlt />
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#071426]">
                        Call Us
                      </h4>

                      <p className="text-gray-600">
                        +91 98765 43210
                      </p>
                    </div>

                  </div>

                  {/* ================= Email ================= */}

                  <div className="flex items-center gap-4">

                    <div className="w-14 h-14 shrink-0 rounded-full bg-[#293F8F] text-white flex items-center justify-center text-xl shadow-md">
                      <FaEnvelope />
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#071426]">
                        Email
                      </h4>

                      <p className="text-gray-600">
                        info.navgatee@gmail.com
                      </p>
                    </div>

                  </div>

                  {/* ================= Location ================= */}

                  <div className="flex items-center gap-4">

                    <div className="w-14 h-14 shrink-0 rounded-full bg-[#071426] text-white flex items-center justify-center text-xl shadow-md">
                      <FaMapMarkerAlt />
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#071426]">
                        Location
                      </h4>

                      <p className="text-gray-600">
                        Lucknow, India,<br /> India
                      </p>
                    </div>

                  </div>

                </div>

              </div>

              {/* ================= Customer Support Image ================= */}

              <img src="/customer-support.png" alt="Customer Support" className="hidden md:block absolute z-20 md:w-[340px] lg:w-[350px] xl:w-[380px] right-[-70px] bottom-[0px] drop-shadow-2xl pointer-events-none" />

            </div>

            {/* ================= Contact Form ================= */}

            <div className="lg:col-span-7 bg-white rounded-3xl shadow-xl p-8 min-h-[500px] h-full">

              <h2 className="text-3xl font-bold text-[#071426] mb-8">
                Send us a Message
              </h2>


              <form onSubmit={handleSubmit} className="space-y-6">

                {/* ================= Name + Phone ================= */}

                <div className="grid md:grid-cols-2 gap-6">

                  <div>
                    <label className="block text-lg font-semibold text-[#071426] mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Full Name"
                      className="w-full h-[52px] bg-[#F8FAFC] border border-gray-200 rounded-xl px-5 text-base outline-none focus:border-[#5BBF43] focus:ring-1 focus:ring-[#5BBF43] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-[#071426] mb-2">
                      Your Phone Number <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="text"
                      name="phone"
                      required
                      placeholder="Your Phone Number"
                      className="w-full h-[52px] bg-[#F8FAFC] border border-gray-200 rounded-xl px-5 text-base outline-none focus:border-[#5BBF43] focus:ring-1 focus:ring-[#5BBF43] transition"
                    />
                  </div>

                </div>

                {/* Email + subject */}

                <div className="grid md:grid-cols-2 gap-6">
                  {/* ================= Email ================= */}

                  <div>
                    <label className="block text-lg font-semibold text-[#071426] mb-2">
                      Your Email Address <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your.email@example.com"
                      className="w-full h-[52px] bg-[#F8FAFC] border border-gray-200 rounded-xl px-5 text-base outline-none focus:border-[#5BBF43] focus:ring-1 focus:ring-[#5BBF43] transition"
                    />
                  </div>


                  {/* ================= Subject ================= */}

                  <div>
                    <label className="block text-lg font-semibold text-[#071426] mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="What is this regarding?"
                      className="w-full h-[52px] bg-[#F8FAFC] border border-gray-200 rounded-xl px-5 text-base outline-none focus:border-[#5BBF43] focus:ring-1 focus:ring-[#5BBF43] transition"
                    />
                  </div>

                </div>



                {/* ================= Interested In ================= */}

                <div>
                  <label className="block text-lg font-semibold text-[#071426] mb-2">
                    I'm interested in:
                  </label>

                  <select
                    name="interest"
                    className="w-full h-[52px] bg-[#F8FAFC] border border-gray-200 rounded-xl px-5 text-base text-gray-700 outline-none focus:border-[#5BBF43] focus:ring-1 focus:ring-[#5BBF43] transition"
                  >
                    <option>General Information</option>
                    <option>Electric Vehicles</option>
                    <option>Dealership</option>
                    <option>Spare Parts</option>
                    <option>Service & Support</option>
                    <option>Test Drive</option>
                  </select>
                </div>


                {/* ================= Message ================= */}

                <div>
                  <label className="block text-lg font-semibold text-[#071426] mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>

                  <textarea
                    name="message"
                    required
                    rows="3"
                    placeholder="Tell us more about your enquiry..."
                    className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl px-5 py-4 text-base resize-none outline-none focus:border-[#5BBF43] focus:ring-1 focus:ring-[#5BBF43] transition"
                  ></textarea>
                </div>


                {/* ================= Button ================= */}

                <button
                  type="submit"
                  disabled={status.type === "loading"}
                  className="w-full h-[52px] bg-[#5BBF43] hover:bg-[#4AA336] text-white rounded-full font-bold text-lg transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-3"
                >
                  <FaPaperPlane />
                  Send Message
                </button>

                {status.type !== "idle" && (
                  <p className={status.type === "error" ? "text-center text-red-600" : "text-center text-green-600"}>
                    {status.message}
                  </p>
                )}

              </form>

            </div>

          </div>
        </div>
      </section>

      {/* map section */}
      <section className="pb-20 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-5">

          <div className="overflow-hidden rounded-3xl shadow-2xl">

            <iframe
              title="Google Map - Lucknow"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14235.408717303832!2d80.93110425140355!3d26.87643717669731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd86eb87f9eb%3A0x98660998b6f18ef6!2sNirala%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1785757951071!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-[500px]"
            ></iframe>

          </div>

        </div>

      </section>

      {/* cta */}

      <section className="bg-[#071426] py-20">

        <div className="max-w-7xl mx-auto px-5 text-center">

          <span className="text-[#5BBF43] uppercase tracking-[3px] font-semibold">
            Need Any Help?
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-5">
            We Are Always Ready
            <br />
            To Help You
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mt-6 leading-8">

            Whether you're looking for dealership information,
            electric vehicle support or product details,
            our expert team is here to assist you.

          </p>

          <button
            className="
      mt-10
      bg-[#5BBF43]
      hover:bg-white
      hover:text-[#071426]
      text-white
      px-10
      py-4
      rounded-full
      font-semibold
      transition-all
      duration-300
      shadow-xl
      hover:scale-105
      "
          >
            Contact Now
          </button>

        </div>

      </section>

    </div>
  );
}

export default Contact;