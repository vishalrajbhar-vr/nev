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

          {/* Mission */}

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-green-100 text-[#5BBF43] flex items-center justify-center text-3xl">

              <FaBullseye />

            </div>

            <h3 className="text-3xl font-bold text-[#071426] mt-6">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-8 mt-5">
              To deliver high-performance electric vehicles that inspire confidence through
              exceptional quality, cutting-edge innovation, and eco-conscious engineering.
              We are committed to making sustainable mobility accessible while driving positive
              change for our customers, communities, and the environment.
            </p>

          </div>

          {/* Vision */}

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-blue-100 text-[#293F8F] flex items-center justify-center text-3xl">

              <FaEye />

            </div>

            <h3 className="text-3xl font-bold text-[#071426] mt-6">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-8 mt-5">

              To shape the future of mobility with innovative electric vehicles that combine superior quality, striking design,
              and sustainable technology leading to a cleaner, safer, and greener tomorrow.
            </p>

          </div>

        </div>

        {/* ================= Core Values ================= */}

        <div>

          <h3 className="text-3xl font-bold text-center text-[#071426] mb-12">
            Our Core Values
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Value */}

            <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition">

              <div className="w-16 h-16 mx-auto rounded-full bg-green-100 text-[#5BBF43] flex items-center justify-center text-3xl">

                <FaLeaf />

              </div>

              <h4 className="text-xl font-bold text-[#071426] mt-5">
                Sustainability
              </h4>

              <p className="text-gray-600 mt-3 text-sm leading-7">
                Promoting clean energy and reducing environmental impact.
              </p>

            </div>

            {/* Value */}

            <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition">

              <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 text-[#293F8F] flex items-center justify-center text-3xl">

                <FaBolt />

              </div>

              <h4 className="text-xl font-bold text-[#071426] mt-5">
                Innovation
              </h4>

              <p className="text-gray-600 mt-3 text-sm leading-7">
                Developing advanced EV technology for better mobility.
              </p>

            </div>

            {/* Value */}

            <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition">

              <div className="w-16 h-16 mx-auto rounded-full bg-green-100 text-[#5BBF43] flex items-center justify-center text-3xl">

                <FaHandshake />

              </div>

              <h4 className="text-xl font-bold text-[#071426] mt-5">
                Integrity
              </h4>

              <p className="text-gray-600 mt-3 text-sm leading-7">
                Building trust through honesty, quality and transparency.
              </p>

            </div>

            {/* Value */}

            <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition">

              <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 text-[#293F8F] flex items-center justify-center text-3xl">

                <FaShieldAlt />

              </div>

              <h4 className="text-xl font-bold text-[#071426] mt-5">
                Reliability
              </h4>

              <p className="text-gray-600 mt-3 text-sm leading-7">
                Delivering dependable products with long-lasting performance.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default OurMission;