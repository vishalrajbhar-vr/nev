import React from "react";
import {
  FaBullseye,
  FaEye,
  FaLeaf,
  FaBolt,
  FaHandshake,
  FaShieldAlt,
} from "react-icons/fa";

function OurMission() {
  return (
    <section className="py-20 bg-[#f8fbf9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= Heading ================= */}

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="inline-flex items-center px-5 py-2 rounded-full bg-green-100 text-[#5BBF43] text-sm font-semibold">
            Our Mission
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#071426] mt-5">
            Building a
            <span className="text-[#5BBF43]"> Greener Tomorrow</span>
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            At NEV, we are committed to creating sustainable mobility
            solutions by manufacturing innovative electric vehicles that
            are affordable, reliable and environmentally friendly.
          </p>

        </div>

        {/* ================= Mission & Vision ================= */}

        <div className="grid lg:grid-cols-2 gap-8 mb-16">

          {/* ================= Mission ================= */}

          <div className="group relative overflow-hidden rounded-[30px] border border-green-100 bg-white p-8 shadow-[0_15px_45px_rgba(0,0,0,.08)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(91,191,67,.18)]">

            {/* Background Glow */}

            <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-[#5BBF43]/10 blur-3xl group-hover:scale-125 transition duration-700"></div>

            {/* Top Line */}

            <div className="absolute left-0 top-0 h-1 w-0 bg-[#5BBF43] transition-all duration-500 group-hover:w-full"></div>

            {/* Icon */}

            <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#5BBF43] to-[#74d75b] text-white text-4xl shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110">
              <FaBullseye />
            </div>

            {/* Heading */}

            <h3 className="relative z-10 mt-7 text-3xl font-bold text-[#071426]">
              Our Mission
            </h3>

            <p className="relative z-10 mt-5 leading-8 text-gray-600">
              To deliver high-performance electric vehicles that inspire confidence
              through exceptional quality, cutting-edge innovation and
              eco-conscious engineering. We are committed to making sustainable
              mobility accessible while driving positive change for our customers,
              communities and the environment.
            </p>

            {/* Bottom Accent */}

            <div className="relative z-10 mt-8 flex items-center gap-3 text-[#5BBF43] font-semibold">
              <div className="h-[2px] w-12 bg-[#5BBF43]"></div>
              Sustainable Future
            </div>

          </div>

          {/* ================= Vision ================= */}

          <div className="group relative overflow-hidden rounded-[30px] border border-blue-100 bg-white p-8 shadow-[0_15px_45px_rgba(0,0,0,.08)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(41,63,143,.18)]">

            {/* Background Glow */}

            <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-[#293F8F]/10 blur-3xl group-hover:scale-125 transition duration-700"></div>

            {/* Top Line */}

            <div className="absolute left-0 top-0 h-1 w-0 bg-[#293F8F] transition-all duration-500 group-hover:w-full"></div>

            {/* Icon */}

            <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#293F8F] to-[#5167c7] text-white text-4xl shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110">
              <FaEye />
            </div>

            {/* Heading */}

            <h3 className="relative z-10 mt-7 text-3xl font-bold text-[#071426]">
              Our Vision
            </h3>

            <p className="relative z-10 mt-5 leading-8 text-gray-600">
              To shape the future of mobility with innovative electric vehicles
              that combine superior quality, striking design and sustainable
              technology, leading to a cleaner, safer and greener tomorrow.
            </p>

            {/* Bottom Accent */}

            <div className="relative z-10 mt-8 flex items-center gap-3 text-[#293F8F] font-semibold">
              <div className="h-[2px] w-12 bg-[#293F8F]"></div>
              Innovation & Excellence
            </div>

          </div>

        </div>

        {/* ================= Core Values ================= */}

       <div>

  {/* Heading */}

  <div className="text-center mb-16">

    <span className="inline-flex items-center px-5 py-2 rounded-full bg-[#5BBF43]/10 text-[#5BBF43] font-semibold border border-[#5BBF43]/20">
      Our Foundation
    </span>

    <h3 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#071426]">
      Our Core
      <span className="text-[#5BBF43]"> Values</span>
    </h3>

    <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-8">
      Every electric vehicle we build is driven by strong values that inspire
      innovation, sustainability and customer trust.
    </p>

  </div>

  {/* Cards */}

  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

    {/* ================= Card 1 ================= */}

    <div className="group relative overflow-hidden rounded-[28px] bg-white border border-gray-100 p-8 text-center shadow-[0_15px_40px_rgba(0,0,0,.08)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(91,191,67,.18)]">

      <div className="absolute inset-0 bg-gradient-to-br from-[#5BBF43]/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

      <div className="absolute left-0 top-0 h-1 w-0 bg-[#5BBF43] group-hover:w-full transition-all duration-500"></div>

      <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#5BBF43] to-[#6fd85a] text-white text-4xl shadow-xl transition duration-500 group-hover:scale-110 group-hover:rotate-6">
        <FaLeaf />
      </div>

      <h4 className="relative mt-7 text-2xl font-bold text-[#071426]">
        Sustainability
      </h4>

      <p className="relative mt-4 text-gray-600 leading-8">
        Promoting clean energy while reducing environmental impact for a
        greener tomorrow.
      </p>

    </div>

    {/* ================= Card 2 ================= */}

    <div className="group relative overflow-hidden rounded-[28px] bg-white border border-gray-100 p-8 text-center shadow-[0_15px_40px_rgba(0,0,0,.08)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(41,63,143,.18)]">

      <div className="absolute inset-0 bg-gradient-to-br from-[#293F8F]/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

      <div className="absolute left-0 top-0 h-1 w-0 bg-[#293F8F] group-hover:w-full transition-all duration-500"></div>

      <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#293F8F] to-[#4d66d6] text-white text-4xl shadow-xl transition duration-500 group-hover:scale-110 group-hover:rotate-6">
        <FaBolt />
      </div>

      <h4 className="relative mt-7 text-2xl font-bold text-[#071426]">
        Innovation
      </h4>

      <p className="relative mt-4 text-gray-600 leading-8">
        Developing advanced EV technology for smarter, safer and more
        efficient mobility.
      </p>

    </div>

    {/* ================= Card 3 ================= */}

    <div className="group relative overflow-hidden rounded-[28px] bg-white border border-gray-100 p-8 text-center shadow-[0_15px_40px_rgba(0,0,0,.08)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(91,191,67,.18)]">

      <div className="absolute inset-0 bg-gradient-to-br from-[#5BBF43]/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

      <div className="absolute left-0 top-0 h-1 w-0 bg-[#5BBF43] group-hover:w-full transition-all duration-500"></div>

      <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#5BBF43] to-[#6fd85a] text-white text-4xl shadow-xl transition duration-500 group-hover:scale-110 group-hover:rotate-6">
        <FaHandshake />
      </div>

      <h4 className="relative mt-7 text-2xl font-bold text-[#071426]">
        Integrity
      </h4>

      <p className="relative mt-4 text-gray-600 leading-8">
        Building trust through honesty, transparency and unwavering
        commitment to quality.
      </p>

    </div>

    {/* ================= Card 4 ================= */}

    <div className="group relative overflow-hidden rounded-[28px] bg-white border border-gray-100 p-8 text-center shadow-[0_15px_40px_rgba(0,0,0,.08)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(41,63,143,.18)]">

      <div className="absolute inset-0 bg-gradient-to-br from-[#293F8F]/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

      <div className="absolute left-0 top-0 h-1 w-0 bg-[#293F8F] group-hover:w-full transition-all duration-500"></div>

      <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#293F8F] to-[#4d66d6] text-white text-4xl shadow-xl transition duration-500 group-hover:scale-110 group-hover:rotate-6">
        <FaShieldAlt />
      </div>

      <h4 className="relative mt-7 text-2xl font-bold text-[#071426]">
        Reliability
      </h4>

      <p className="relative mt-4 text-gray-600 leading-8">
        Delivering dependable products engineered for long-lasting
        performance and safety.
      </p>

    </div>

  </div>

</div>

      </div>
    </section>
  );
}

export default OurMission;