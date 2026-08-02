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
    <section className="py-20 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="inline-flex items-center px-5 py-2 rounded-full bg-green-100 text-[#5BBF43] font-semibold text-sm">

            Why Choose NEV

          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#071426] mt-5">

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
              className="group bg-[#f8fbf9] rounded-3xl p-8 border border-transparent hover:border-[#5BBF43] hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
            >

              {/* Icon */}

              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${item.color} group-hover:scale-110 transition duration-300`}
              >
                {item.icon}
              </div>

              {/* Title */}

              <h3 className="text-2xl font-bold text-[#071426] mt-6 group-hover:text-[#5BBF43] transition">

                {item.title}

              </h3>

              {/* Line */}

              <div className="w-16 h-1 rounded-full bg-[#5BBF43] mt-4"></div>

              {/* Description */}

              <p className="text-gray-600 leading-7 mt-5">

                {item.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;