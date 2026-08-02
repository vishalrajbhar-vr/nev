import React from "react";

const galleryImages = [
  {
    id: 1,
    image: "/1.png",
    title: "NEV Electric Vehicle",
  },
  {
    id: 2,
    image: "/images/double-light.png",
    title: "Electric Auto",
  },
  {
    id: 3,
    image: "/3.png",
    title: "Cargo EV",
  },
  {
    id: 4,
    image: "/images/N1.png",
    title: "Electric Scooty",
  },
  {
    id: 5,
    image: "/5.png",
    title: "Model L5",
  },
  {
    id: 6,
    image: "/images/u-light.png",
    title: "Butterfly MS",
  },
  {
    id: 7,
    image: "/images/single-light.png",
    title: "ECO 6+1",
  },
  {
    id: 8,
    image: "/hero_scene_preview_nobg.png",
    title: "Activa EV",
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
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
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