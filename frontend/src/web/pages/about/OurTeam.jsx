import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "Team Member",
    designation: "Founder & CEO",
    image: "",
  },
  {
    id: 2,
    name: "Team Member",
    designation: "Sales Manager",
    image: "",
  },
  {
    id: 3,
    name: "Team Member",
    designation: "Technical Expert",
    image: "",
  },
  {
    id: 4,
    name: "Team Member",
    designation: "Customer Support",
    image: "",
  },
];

function OurTeam() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">

          <span className="inline-block bg-green-100 text-[#5BBF43] px-5 py-2 rounded-full text-sm font-semibold">
            Our Experts
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#071426] mt-5">
            Meet Our Amazing Team
          </h2>

          <p className="text-gray-600 mt-5 leading-8">
            Our passionate professionals are committed to delivering innovative
            electric mobility solutions and providing the best customer
            experience across India.
          </p>

        </div>

        {/* Team Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 overflow-hidden border border-gray-100"
            >

              {/* Image */}
              <div className="relative h-80 bg-gray-100 flex items-center justify-center overflow-hidden">

                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-28 h-28 rounded-full bg-gray-300"></div>
                    <p className="text-gray-500 mt-4 text-sm">
                      Image Coming Soon
                    </p>
                  </div>
                )}

                {/* Social Icons */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition duration-500">

                  <button className="w-10 h-10 rounded-full bg-[#071426] hover:bg-[#5BBF43] text-white flex items-center justify-center">
                    <FaFacebookF />
                  </button>

                  <button className="w-10 h-10 rounded-full bg-[#071426] hover:bg-[#5BBF43] text-white flex items-center justify-center">
                    <FaLinkedinIn />
                  </button>

                  <button className="w-10 h-10 rounded-full bg-[#071426] hover:bg-[#5BBF43] text-white flex items-center justify-center">
                    <FaTwitter />
                  </button>

                </div>

              </div>

              {/* Content */}
              <div className="text-center py-7 px-5">

                <h3 className="text-2xl font-bold text-[#071426] group-hover:text-[#5BBF43] transition">
                  {member.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  {member.designation}
                </p>

                <div className="w-14 h-1 bg-[#5BBF43] rounded-full mx-auto mt-5"></div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default OurTeam;