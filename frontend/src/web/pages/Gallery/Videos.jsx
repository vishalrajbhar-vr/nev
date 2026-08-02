import React from "react";
import { FaPlayCircle } from "react-icons/fa";

const videos = [
  {
    id: 1,
    title: "NEV Electric Vehicle Introduction",
    url: "",
  },
  {
    id: 2,
    title: "Electric Rickshaw Demo",
    url: "",
  },
  {
    id: 3,
    title: "Electric Scooty Review",
    url: "",
  },
  {
    id: 4,
    title: "Customer Experience",
    url: "",
  },
  {
    id: 5,
    title: "Factory Tour",
    url: "",
  },
  {
    id: 6,
    title: "Latest EV Technology",
    url: "",
  },
];

const Videos = () => {
  return (
    <section className="bg-[#f8fafc] py-16">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-12">

          <span className="bg-green-100 text-[#5BBF43] px-5 py-2 rounded-full text-sm font-semibold">
            Our Videos
          </span>

          <h2 className="text-4xl font-bold text-[#071426] mt-5">
            Video Gallery
          </h2>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Watch our latest electric vehicle videos, product demonstrations,
            customer experiences and factory updates.
          </p>

        </div>

        {/* Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >

              {/* Video Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-[#071426] to-[#293F8F] flex flex-col items-center justify-center text-white">

                <FaPlayCircle className="text-6xl text-[#5BBF43] mb-4" />

                <p className="text-sm text-gray-300">
                  Video Coming Soon
                </p>

              </div>

              {/* Content */}
              <div className="p-5">

                <h3 className="text-xl font-bold text-[#071426] hover:text-[#5BBF43] transition">
                  {video.title}
                </h3>

                <div className="w-16 h-1 bg-[#5BBF43] rounded-full mt-3"></div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Videos;