import React from "react";

const galleryImages = [
  {
    id: 1,
    image: "/images/l5-loader.png",
    title: "L5 Ultra Loader",
  },
  {
    id: 2,
    image: "/images/double-light.png",
    title: "Double Light",
  },
  {
    id: 3,
    image: "/MODEL L5 BUTTERFLY 6+1.png",
    title: "ECO 6 + 1",
  },
  {
    id: 4,
    image: "/images/N1.png",
    title: "Activa EV",
  },
  {
    id: 5,
    image: "/MODEL L5.png",
    title: "Model L5",
  },
  {
    id: 6,
    image: "/images/u-light.png",
    title: "U Light",
  },
  {
    id: 7,
    image: "/images/single-light.png",
    title: "Single Light",
  },
  {
    id: 8,
    image: "/images/l5-butterfly.png",
    title: "L5 Butterfly",
  },
];

const Photos = () => {
  return (
    <section className="bg-[#f8fafc] py-16">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-12">

          <span className="bg-green-100 text-[#5BBF43] px-5 py-2 rounded-full text-sm font-semibold">
            Our Gallery
          </span>

          <h2 className="text-4xl font-bold text-[#071426] mt-5">
            Photo Gallery
          </h2>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Explore our premium collection of electric vehicles and discover
            innovative designs built for the future.
          </p>

        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">

          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white h-72 flex items-center justify-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="max-w-full max-h-full object-contain transition duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition duration-500"></div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 w-full p-5 translate-y-full group-hover:translate-y-0 transition duration-500">
                <h3 className="text-white text-xl font-bold">
                  {item.title}
                </h3>

                <div className="w-14 h-1 bg-[#5BBF43] mt-2 rounded-full"></div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Photos;