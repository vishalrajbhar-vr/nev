import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutCompany() {
  return (
    <section className="py-20 bg-[#f8fbf9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT IMAGE ================= */}

          {/* ================= LEFT IMAGE ================= */}

<div className="relative flex justify-center">

  {/* Background Shape */}
  <div className="absolute -left-8 top-10 w-40 h-40 rounded-full bg-[#5BBF43]/20 blur-2xl"></div>

  <div className="absolute right-0 bottom-10 w-52 h-52 rounded-full bg-[#293F8F]/10 blur-3xl"></div>

  {/* Main Image */}
  <div className="relative w-full max-w-[520px] rounded-3xl overflow-hidden shadow-2xl">

    <img
      src="/15_transparent.png"
      alt="About NEV"
      className="w-full object-contain hover:scale-105 transition duration-700"
    />

  </div>

  {/* Experience Card */}
  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-xl px-5 py-3 text-center">

    <h2 className="text-3xl font-extrabold text-[#5BBF43]">
      5+
    </h2>

    <p className="text-sm text-gray-600 font-medium">
      Years of Innovation
    </p>

  </div>

</div>

          {/* ================= RIGHT CONTENT ================= */}

          <div>

            <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-[#5BBF43] text-sm font-semibold">
              ABOUT COMPANY
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#071426] mt-5 leading-tight">
              Driving Innovation Through
              <span className="text-[#5BBF43]"> Electric Mobility</span>
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Navgatee Automobiles is driven by a vision to redefine
              the future of mobility through innovation, quality, and sustainability.
              Backed by decades of industry expertise, we are committed to delivering
              reliable automotive solutions that meet the evolving needs
              of customers while contributing to a cleaner and more sustainable future.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              The company is led by its principal promoter, Mr.
              Manjeet Singh Talwar, a distinguished name in the automobile industry with over 4 decades of
              experience. His extensive knowledge, strategic leadership, and unwavering commitment
              to excellence have been instrumental in building a strong foundation for the organization.
            </p>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-5 mt-8">

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-[#5BBF43] text-xl" />

                <span className="font-medium text-[#071426]">
                  Premium Quality EVs
                </span>

              </div>

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-[#5BBF43] text-xl" />

                <span className="font-medium text-[#071426]">
                  Eco Friendly Technology
                </span>

              </div>

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-[#5BBF43] text-xl" />

                <span className="font-medium text-[#071426]">
                  Affordable Pricing
                </span>

              </div>

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-[#5BBF43] text-xl" />

                <span className="font-medium text-[#071426]">
                  Trusted Customer Support
                </span>

              </div>

            </div>

            {/* Button */}

            <div className="mt-10">

              <Link
                to="/products"
                className="inline-flex items-center gap-3 bg-[#5BBF43] hover:bg-[#48a133] text-white px-8 py-4 rounded-xl font-semibold transition duration-300"
              >
                Explore Our Products
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutCompany;