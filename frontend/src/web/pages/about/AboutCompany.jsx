import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutCompany() {
  return (
    <section className="py-20 bg-[#f8fbf9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT IMAGE ================= */}

          <div className="relative flex justify-center items-center">

            {/* Background Glow */}
            <div className="absolute w-[430px] h-[430px] rounded-full bg-gradient-to-br from-[#5BBF43]/20 to-[#293F8F]/10 blur-3xl"></div>

            {/* Decorative Circle */}
            <div className="absolute w-[360px] h-[360px] border border-[#5BBF43]/20 rounded-full"></div>

            {/* Car Shadow */}
            <div className="absolute bottom-12 w-60 h-6 bg-black/20 blur-xl rounded-full"></div>

            {/* Image */}
            <div className="relative z-20">

              <img
                src="/hero_scene_preview_nobg.png"
                alt="About NEV"
                className="w-[620px] hover:scale-105 transition duration-700"
              />

            </div>

            {/* Experience Card */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 backdrop-blur-xl bg-white/80 border border-white rounded-2xl px-7 py-4 shadow-2xl">

              <h2 className="text-4xl font-black text-[#5BBF43] text-center">
                5+
              </h2>

              <p className="text-sm text-gray-600 font-medium text-center">
                Years of Innovation
              </p>

            </div>

            {/* Floating Badge */}
            <div className="absolute top-10 right-4 bg-[#071426] text-white px-5 py-3 rounded-2xl shadow-xl">

              ⚡ Next Generation EV

            </div>

          </div>

          {/* ================= RIGHT CONTENT ================= */}

          <div>

            <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-[#5BBF43] text-sm font-semibold">
              ABOUT COMPANY
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight text-[#071426] mt-5">

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

            <div className="mt-10">

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