import React from "react";
import {
  FaHome,
  FaChevronRight,
  FaMapMarkerAlt,
  FaLeaf,
  FaQuoteLeft,
} from "react-icons/fa";
import {
  Rocket,
  Eye,
  Droplets,
  Cog,
  Truck,
  Building2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

/* ===================================================================
   PRODUCT IMAGERY
   Place these files inside /public/images/ so the paths below resolve.
   (Same filenames as uploaded.)
=================================================================== */
const IMG_HERO_VEHICLE = "/images/MODEL_L5_BUTTERFLY_6_1.png";
const IMG_STORY_VEHICLE = "/images/ECO_6_1.png";
const IMG_SEGMENT_LOADER = "/images/MODEL_L5_ULTRA_LOADER.png";
const IMG_CTA_VEHICLE = "/images/single_light.png";

const rangeVehicles = [
  { name: "L5 Ultra Loader", img: "/images/MODEL_L5_ULTRA_LOADER.png" },
  { name: "L3 Butterfly MS", img: "/images/MODEL_L3_BUTTERFLY_MS.png" },
  { name: "L5 ECO 6+1", img: "/images/ECO_6_1.png" },
  { name: "L5 Butterfly 6+1", img: "/images/MODEL_L5_BUTTERFLY_6_1.png" },
  { name: "L5 DLX Passenger", img: "/images/MODEL_L5.png" },
  { name: "NEV Single Scooty", img: "/images/single_light.png" },
  { name: "NEV Activa", img: "/images/ACTIVA.png" },
  { name: "NEV N1", img: "/images/N1.png" },
];

/* ===================================================================
   DATA
=================================================================== */
const stats = [
  { value: "40+", label: "Years of Industry Leadership" },
  { value: "3", label: "Countries Served" },
  { value: "8+", label: "Vehicle Models" },
];

const segments = [
  {
    icon: <Droplets size={22} />,
    title: "Lubricants",
    desc: "Quality lubricant solutions keeping vehicles and machinery running at their best.",
  },
  {
    icon: <Cog size={22} />,
    title: "Spare Parts",
    desc: "A dependable supply of genuine parts backing every vehicle on the road.",
  },
  {
    icon: <Building2 size={22} />,
    title: "Mobility Solutions",
    desc: "End-to-end mobility offerings designed around real livelihoods and routes.",
  },
];

const presence = [
  { country: "India", note: "Home market & manufacturing base" },
  { country: "Bangladesh", note: "Established regional presence" },
  { country: "Africa", note: "Growing international footprint" },
];

/* ===================================================================
   SMALL COMPONENTS
=================================================================== */
const SegmentCard = ({ icon, title, desc }) => (
  <div className="group rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-xl hover:-translate-y-1 hover:border-[#5BBF43]/40 transition-all duration-400">
    <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#2346b7] flex items-center justify-center mb-4 group-hover:bg-[#2346b7] group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-base font-bold text-[#06152B] mb-1.5">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

const PresenceCard = ({ country, note }) => (
  <div className="flex items-center gap-4 rounded-2xl bg-white/95 backdrop-blur-md p-4 sm:p-5 shadow-lg">
    <div className="w-11 h-11 shrink-0 rounded-xl bg-[#5BBF43]/15 text-[#5BBF43] flex items-center justify-center">
      <FaMapMarkerAlt size={17} />
    </div>
    <div className="min-w-0">
      <h4 className="font-extrabold text-[#06152B] leading-snug">{country}</h4>
      <p className="text-xs sm:text-[13px] text-gray-500 leading-snug">{note}</p>
    </div>
  </div>
);

const RangeCard = ({ name, img }) => (
  <div className="group rounded-2xl border border-gray-100 bg-gradient-to-b from-gray-50 to-white p-4 sm:p-5 hover:shadow-xl hover:-translate-y-1 hover:border-[#5BBF43]/40 transition-all duration-400">
    <div className="aspect-square flex items-center justify-center">
      <img
        src={img}
        alt={name}
        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <p className="mt-3 text-center text-sm font-bold text-[#06152B]">
      {name}
    </p>
  </div>
);

/* ===================================================================
   MAIN COMPONENT
=================================================================== */
const AboutCompany = () => {
  return (
    <>
      {/* ============================================================
          SECTION 1: HERO — split panel, real product cutout
      ============================================================ */}
      <section className="relative bg-[#06152B] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#06152B] via-[#0a1d3a] to-[#0d2547]" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#2346b7]/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#5BBF43]/10 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-8 sm:pt-10">
          {/* Breadcrumb */}
          <nav className="flex flex-wrap items-center gap-2 text-sm text-white/50 mb-10">
            <FaHome className="text-[#5BBF43]" size={13} />
            <span>Home</span>
            <FaChevronRight size={9} className="text-white/30" />
            <span className="text-white font-semibold">About Us</span>
          </nav>
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-10 sm:pb-14">
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-10 lg:gap-8 items-center">
            {/* Left content */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#8be27a] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 border border-white/10">
                <Sparkles size={13} />
                About Navgatee Automobiles
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.08] tracking-tight">
                Redefining Mobility,
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#5BBF43] to-[#8be27a]">
                  Responsibly.
                </span>
              </h1>

              <p className="mt-6 text-lg text-white/60 max-w-lg leading-relaxed">
                Driven by a vision to redefine the future of mobility through
                innovation, quality, and sustainability — backed by decades of
                industry expertise.
              </p>

              <div className="flex flex-wrap gap-4 mt-9">
                <a
                  href="#mission-vision"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 bg-[#5BBF43] text-[#06152B] font-bold rounded-xl hover:bg-[#8be27a] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span>Our Mission</span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href="#enquiry"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent text-white font-semibold rounded-xl border-2 border-white/20 hover:border-white/50 transition-all duration-300"
                >
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>

            {/* Right — vehicle showcase card */}
            <div className="relative h-[300px] sm:h-[380px] lg:h-[440px]">
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white to-blue-50 shadow-2xl overflow-hidden">
                {/* decorative dots */}
                <div className="absolute top-5 right-5 grid grid-cols-5 gap-1.5 opacity-70">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <span
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-[#5BBF43]"
                    />
                  ))}
                </div>
                <img
                  src={IMG_HERO_VEHICLE}
                  alt="Navgatee L5 Butterfly 6+1 electric rickshaw"
                  className="absolute inset-0 w-full h-full object-contain p-6 sm:p-10 drop-shadow-[0_20px_30px_rgba(6,21,43,0.25)]"
                />
              </div>

              {/* Floating stat card */}
              <div className="hidden sm:block absolute -left-4 lg:-left-6 -bottom-5 bg-white rounded-2xl shadow-2xl p-5 sm:p-6 w-[210px]">
                <p className="text-3xl font-extrabold text-[#2346b7]">40+</p>
                <p className="mt-1 text-sm font-medium text-gray-500 leading-snug">
                  Years of combined leadership experience
                </p>
              </div>
            </div>
          </div>

          {/* Stat bar */}
          <div className="relative z-10 grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 mt-12 sm:mt-16 pt-6 sm:pt-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center px-2">
                <p className="text-2xl sm:text-3xl font-extrabold text-white">
                  {s.value}
                </p>
                <p className="mt-1 text-[11px] sm:text-xs font-medium text-white/50 leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: OUR STORY — vehicle card left, narrative right
      ============================================================ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Vehicle card */}
            <div className="relative order-2 lg:order-1">
              <div className="rounded-[28px] bg-gradient-to-br from-gray-50 to-blue-50/60 shadow-xl aspect-[5/4] flex items-center justify-center overflow-hidden">
                <img
                  src={IMG_STORY_VEHICLE}
                  alt="Navgatee L5 ECO 6+1 electric rickshaw"
                  className="w-full h-full object-contain p-8 sm:p-10"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 sm:-bottom-6 sm:-right-6 bg-white rounded-2xl shadow-xl p-4 sm:p-5 flex items-center gap-3 border border-gray-50">
                <div className="w-10 h-10 rounded-full bg-green-50 text-[#5BBF43] flex items-center justify-center shrink-0">
                  <FaLeaf size={16} />
                </div>
                <p className="text-sm font-semibold text-[#06152B] leading-snug">
                  Eco-conscious
                  <br />
                  engineering
                </p>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-1.5 bg-green-50 text-green-600 text-sm font-semibold rounded-full mb-4">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                A Legacy Built on{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2346b7] to-[#5BBF43]">
                  Trust &amp; Expertise
                </span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                As part of a diversified automotive group, Navgatee
                Automobiles operates across multiple segments of the
                industry, including automobiles, lubricants, spare parts, and
                mobility solutions. Our business spans both domestic and
                international markets, enabling us to serve a broad customer
                base with trusted products and services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By combining advanced technology, superior craftsmanship, and
                a customer-centric approach, we strive to create mobility
                solutions that are efficient, dependable, and environmentally
                conscious — every step reflecting our commitment to
                sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: LEADERSHIP — dark navy band
      ============================================================ */}
      <section className="relative bg-[#06152B] py-16 sm:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#2346b7]/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#5BBF43]/10 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-center">
            {/* Monogram plaque */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#2346b7] to-[#5BBF43] rotate-6" />
                <div className="absolute inset-0 rounded-[2rem] bg-[#0d2547] border border-white/10 flex items-center justify-center -rotate-3">
                  <span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#8be27a] to-white">
                    MST
                  </span>
                </div>
              </div>
            </div>

            {/* Quote + bio */}
            <div>
              <FaQuoteLeft className="text-[#5BBF43] mb-5" size={28} />
              <p className="text-xl sm:text-2xl lg:text-[26px] text-white font-medium leading-snug">
                Extensive knowledge, strategic leadership, and an unwavering
                commitment to excellence — the foundation this organization
                is built on.
              </p>
              <div className="mt-8">
                <p className="text-lg font-bold text-white">
                  Mr. Manjeet Singh Talwar
                </p>
                <p className="text-sm text-[#8be27a] font-semibold mt-0.5">
                  Principal Promoter, Navgatee Automobiles
                </p>
                <p className="mt-4 text-white/50 leading-relaxed max-w-xl">
                  A distinguished name in the automobile industry with over 4
                  decades of experience, instrumental in building a strong
                  foundation for the organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: BUSINESS SEGMENTS — bento grid
      ============================================================ */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-12">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-[#2346b7] text-sm font-semibold rounded-full mb-4">
              Diversified Group
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Segments We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2346b7] to-[#5BBF43]">
                Operate Across
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Flagship product card */}
            <div className="relative sm:col-span-2 lg:row-span-2 rounded-2xl overflow-hidden group min-h-[280px] lg:min-h-full bg-gradient-to-br from-[#06152B] to-[#0d2547]">
              <img
                src={IMG_SEGMENT_LOADER}
                alt="Automobiles segment — L5 Ultra Loader"
                className="absolute inset-0 w-full h-full object-contain p-8 sm:p-10 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#06152B] via-[#06152B]/70 to-transparent h-2/5 pointer-events-none" />
              <div className="relative h-full flex flex-col justify-end p-6 sm:p-7 pointer-events-none">
                <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-md text-white flex items-center justify-center mb-3">
                  <Truck size={22} />
                </div>
                <h3 className="text-xl font-bold text-white mb-1.5">
                  Automobiles
                </h3>
                <p className="text-sm text-white/70 leading-relaxed max-w-sm">
                  A growing portfolio of electric vehicles — from passenger
                  rickshaws to heavy-duty loaders — built for reliability and
                  everyday performance.
                </p>
              </div>
            </div>

            {segments.map((item) => (
              <SegmentCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5: OUR VEHICLE RANGE — product gallery
      ============================================================ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-[#2346b7] text-sm font-semibold rounded-full mb-4">
              Our Product Line
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              A Vehicle for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2346b7] to-[#5BBF43]">
                Every Route
              </span>
            </h2>
            <p className="mt-4 text-gray-500 text-lg">
              From passenger rickshaws to loaders and scooters — engineered
              for city streets and rural roads alike.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
            {rangeVehicles.map((v) => (
              <RangeCard key={v.name} {...v} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6: GLOBAL PRESENCE
      ============================================================ */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-br from-[#06152B] via-[#0a1d3a] to-[#2346b7]">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#5BBF43]/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#2346b7]/30 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-xl mb-12">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-[#8be27a] text-sm font-semibold rounded-full mb-4 border border-white/10">
              Global Footprint
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Serving Customers Across{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5BBF43] to-[#8be27a]">
                Three Continents
              </span>
            </h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              A well-established presence across domestic and international
              markets, built on trusted products and services.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {presence.map((item) => (
              <PresenceCard key={item.country} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 7: MISSION & VISION
      ============================================================ */}
      <section id="mission-vision" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 bg-green-50 text-green-600 text-sm font-semibold rounded-full mb-4">
              What Drives Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Our Mission &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2346b7] to-[#5BBF43]">
                Vision
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="relative group rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#2346b7] to-[#1a3a9e] overflow-hidden">
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md text-white flex items-center justify-center mb-6">
                  <Rocket size={26} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-white/70 leading-relaxed">
                  To deliver high-performance electric vehicles that inspire
                  confidence through exceptional quality, cutting-edge
                  innovation, and eco-conscious engineering — making
                  sustainable mobility accessible while driving positive
                  change for our customers, communities, and the environment.
                </p>
              </div>
            </div>

            <div className="relative group rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#5BBF43] to-[#3f9a2b] overflow-hidden">
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md text-white flex items-center justify-center mb-6">
                  <Eye size={26} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-white/85 leading-relaxed">
                  To shape the future of mobility with innovative electric
                  vehicles that combine superior quality, striking design,
                  and sustainable technology — leading to a cleaner, safer,
                  and greener tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 8: CTA — vehicle showcase band
      ============================================================ */}
      <section id="enquiry" className="relative overflow-hidden bg-gradient-to-r from-[#06152B] via-[#0a1d3a] to-[#0d2547]">
        <div className="absolute -bottom-10 right-0 w-72 h-72 bg-[#5BBF43]/10 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-16">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
            <div className="max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
                Powered by Innovation. Driven by Responsibility.
              </h3>
              <p className="text-white/60 leading-relaxed mb-8">
                A customer-centric approach and eco-conscious engineering
                guide every mobility solution we build.
              </p>
              <a
                href="tel:18001210259"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#5BBF43] text-[#06152B] font-bold rounded-xl hover:bg-[#8be27a] hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Connect With Us</span>
                <ArrowRight size={16} />
              </a>
            </div>
            <div className="hidden lg:flex items-center justify-center h-48">
              <img
                src={IMG_CTA_VEHICLE}
                alt="NEV Single electric scooty"
                className="max-h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCompany;
