import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutCompany() {
  return (
    <section className="py-10 bg-[#f8fbf9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT IMAGE ================= */}

          <div className="relative flex justify-center items-center min-h-[320px] sm:min-h-[400px] lg:min-h-[550px] overflow-hidden">

            {/* Premium Gradient Glow */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 lg:w-[520px] lg:h-[520px] rounded-full bg-gradient-to-br from-[#5BBF43]/30 via-white/10 to-[#293F8F]/30 blur-[90px]"></div>

            {/* Decorative Rings */}
            <div className="absolute w-56 h-56 sm:w-72 sm:h-72 lg:w-[420px] lg:h-[420px] border border-white/20 rounded-full"></div>

            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px] border border-[#5BBF43]/10 rounded-full"></div>

            {/* Car Shadow */}
            <div className="absolute bottom-8 lg:bottom-12 w-52 sm:w-72 lg:w-80 h-6 bg-black/25 blur-2xl rounded-full"></div>

            {/* Image */}
            <div className="relative z-20 group h-[280px] sm:h-[350px] lg:h-[500px] flex items-center justify-center">
              <img
                src="/images/l5-dlx-passenger.png"
                alt="About NEV"
                className="w-[220px] sm:w-[280px] md:w-[360px] lg:w-[420px] xl:w-[460px] h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.35)] transition-all duration-700 group-hover:scale-105 group-hover:-translate-y-2 "
              />
            </div>

            {/* Experience Card */}
            <div className="hidden lg:block absolute bottom-5 left-1/2 -translate-x-1/2 z-30 backdrop-blur-xl bg-white/80 border border-white/40 rounded-2xl px-7 py-4 shadow-[0_15px_40px_rgba(0,0,0,0.2)]">
              <h2 className="text-4xl font-black text-[#5BBF43] text-center">
                5+
              </h2>
              <p className="text-sm text-gray-600 text-center">
                Years of Innovation
              </p>
            </div>

            {/* Floating Badge */}
            <div className="hidden lg:flex absolute top-8 right-0 items-center gap-2 bg-[#071426]/90 backdrop-blur-xl text-white px-5 py-3 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.3)]">
              ⚡ <span>Next Generation EV</span>
            </div>

          </div>

          {/* ================= RIGHT CONTENT ================= */}

          <div>

            <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-[#5BBF43] text-sm font-semibold">
              ABOUT COMPANY
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-4xl font-extrabold leading-tight text-[#071426] mt-3">

              Driving Innovation

              <span className="block text-[#5BBF43]">
                Through Electric Mobility
              </span>

            </h2>

            <p className="mt-5 text-gray-600 leading-8 text-[17px]">
              Navgatee Automobiles is driven by a vision to redefine
              the future of mobility through innovation, quality, and sustainability.
              Backed by decades of industry expertise, we are committed to delivering
              reliable automotive solutions that meet the evolving needs
              of customers while contributing to a cleaner and more sustainable future.
            </p>

            <p className="mt-2 text-gray-600 leading-8">
              The company is led by its principal promoter, Mr.
              Manjeet Singh Talwar, a distinguished name in the automobile industry with over 4 decades of
              experience. His extensive knowledge, strategic leadership, and unwavering commitment
              to excellence have been instrumental in building a strong foundation for the organization.
            </p>


            {/* Button */}

            <div className="mt-5">

              <Link
                to="/products"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#5BBF43] to-[#4AA93B] px-9 py-4 rounded-2xl text-white font-semibold shadow-xl hover:scale-105 hover:shadow-[0_15px_40px_rgba(91,191,67,.35)] transition duration-300"
              >

                Explore Our Products →

              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutCompany;