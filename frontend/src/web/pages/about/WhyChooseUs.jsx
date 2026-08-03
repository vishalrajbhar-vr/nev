import React from "react";
import {
  FaAward,
  FaLeaf,
  FaTools,
  FaUsers,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaAward />,
    title: "Premium Quality",
    description:
      "Every NEV electric vehicle is manufactured with high-quality materials for long-lasting performance.",
    color: "bg-green-100 text-[#5BBF43]",
  },
  {
    id: 2,
    icon: <FaLeaf />,
    title: "Eco Friendly",
    description:
      "Our electric vehicles help reduce pollution and contribute towards a cleaner environment.",
    color: "bg-blue-100 text-[#293F8F]",
  },
  {
    id: 3,
    icon: <FaTools />,
    title: "Advanced Technology",
    description:
      "Equipped with modern technology to deliver reliable and efficient electric mobility.",
    color: "bg-green-100 text-[#5BBF43]",
  },
  {
    id: 4,
    icon: <FaUsers />,
    title: "Trusted by Customers",
    description:
      "Growing customer trust through quality products, transparency and dependable service.",
    color: "bg-blue-100 text-[#293F8F]",
  },
  {
    id: 5,
    icon: <FaShieldAlt />,
    title: "Reliable Performance",
    description:
      "Designed to provide safe, durable and consistent performance on every journey.",
    color: "bg-green-100 text-[#5BBF43]",
  },
  {
    id: 6,
    icon: <FaHeadset />,
    title: "Excellent Support",
    description:
      "Our dedicated support team is always ready to assist dealers and customers.",
    color: "bg-blue-100 text-[#293F8F]",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-5 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-8">

          <span className="inline-flex items-center px-5 py-2 rounded-full bg-green-100 text-[#5BBF43] font-semibold text-sm">

            Why Choose NEV

          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#071426] mt-4">

            Why Customers
            <span className="text-[#5BBF43]"> Trust NEV</span>

          </h2>

          <p className="mt-5 text-gray-600 leading-8">

            We combine innovation, quality, sustainability and customer
            satisfaction to deliver reliable electric mobility solutions
            for individuals and businesses across India.

          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item) => (

            <div
              key={item.id}
              className="group relative overflow-hidden rounded-[30px] border border-gray-100 bg-white p-6 shadow-[0_15px_45px_rgba(0,0,0,.08)] transition-all duration-500 hover:-translate-y-3 hover:border-[#5BBF43]/40 hover:shadow-[0_25px_60px_rgba(91,191,67,.18)]"
            >

              {/* Background Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#5BBF43]/10 blur-3xl group-hover:scale-125 transition duration-700"></div>

              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full border border-[#5BBF43]/10 group-hover:scale-125 transition duration-700"></div>

              {/* Animated Top Border */}
              <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-[#5BBF43] to-[#293F8F] transition-all duration-500 group-hover:w-full"></div>

              {/* Icon */}
              <div
                className={`relative z-10 w-16 h-16 rounded-3xl flex items-center justify-center text-4xl shadow-lg transition duration-500 group-hover:scale-110 group-hover:rotate-6 ${item.color}`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-2xl font-bold text-[#071426] mt-7 group-hover:text-[#5BBF43] transition">
                {item.title}
              </h3>

              {/* Accent Line */}
              <div className="relative z-10 w-16 h-1 rounded-full bg-[#5BBF43] mt-4 transition-all duration-500 group-hover:w-28"></div>

              {/* Description */}
              <p className="relative z-10 text-gray-600 leading-8 mt-3">
                {item.description}
              </p>

              {/* Bottom Accent */}
              <div className="relative z-10 mt-2 flex items-center gap-3 text-[#5BBF43] font-semibold text-sm">
                <div className="w-10 h-[2px] bg-[#5BBF43]"></div>
                Learn More
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;