import React from "react";
import {
  FaBatteryFull,
  FaBolt,
  FaChargingStation,
  FaLeaf,
  FaRupeeSign,
  FaShieldAlt,
  FaTachometerAlt,
} from "react-icons/fa";
import QuickRequest from "./QuickRequest";

const topHeroVehicleSrc = "/images/home hero.png";
const lowerHeroVehicleSrc = "/rickshaw_nobg.png";
const bgSceneSrc = "/clean_hero_city_bg.jpg";

const topSlide = {
  ribbon: "DRIVE CHANGE. DRIVE ELECTRIC.",
  title: ["NEV Electric", "Driving the Future of", "Sustainable Mobility"],
  description:
    "NEV Vehicles delivers reliable, high-performance electric rickshaws for urban and commercial use. Our EV range offers low running cost, strong build quality, and dependable battery performance for daily earnings.",
  image: "/images/home hero.png",
  imageClass: "w-[360px] sm:w-[400px] lg:w-[440px]",
  imageTransform: "translateX(4px) translateY(-8px)",
};

const featureCards = [
  {
    title: "Zero Emission",
    description: "100% electric.\nZero fuel. Zero pollution.",
    icon: FaBolt,
    hasBar: true,
  },
  {
    title: "Lower Running Cost",
    description: "Save more every day with low maintenance and operating cost.",
    icon: FaRupeeSign,
    hasBar: true,
  },
  {
    title: "Fast Charging",
    description: "Quick charge battery\nfor non-stop daily\nearnings.",
    icon: FaChargingStation,
    hasBar: true,
  },
  {
    title: "High Performance",
    description: "Powerful motor,\nlong life battery and\nsmooth ride.",
    icon: FaTachometerAlt,
    hasBar: true,
  },
];

const mobilityHighlights = [
  {
    title: "Advanced Battery",
    description: "Long life battery with high efficiency.",
    icon: FaBatteryFull,
  },
  {
    title: "Built for Reliability",
    description: "Strong build quality for everyday performance.",
    icon: FaShieldAlt,
  },
  {
    title: "Sustainable Mobility",
    description: "Driving towards a cleaner and greener future.",
    icon: FaLeaf,
  },
];

function HomeHero() {
  return (
    <main className="bg-white text-[#06152B] overflow-hidden font-sans">
      <section className="hero-diagonal hero-gradient px-4 lg:py-1 sm:py-0 border-b border-[#E6F2EA]">
        <div className="diag-panel-left" />
        <div className="diag-panel-right" />
        <div className="diag-overlay" />

        <div className="max-w-[1320px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center min-h-0 lg:min-h-[550px]">
            <div className="hero-left">
              <div className="angled-ribbon mb-6">{topSlide.ribbon}</div>

              <h1 className="hero-heading hero-heading-multicolor">
                <span className="hero-word-brand">{topSlide.title[0]}</span>
                <br />
                <span className="hero-word-dark">{topSlide.title[1]}</span>
                <br />
                <span className="hero-word-mix">{topSlide.title[2]}</span>
              </h1>

              <p className="mt-6 hero-subtext text-base sm:text-lg">
                {topSlide.description}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a href="#products" className="cta-primary">View Models</a>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <div className="pedestal" style={{ width: 660, height: 500 }}>
                <div className="hero-vehicle-ground" />
                <div className="hero-vehicle-wrap" style={{ position: "relative", zIndex: 20 }}>
                  <img
                    src={topSlide.image || topHeroVehicleSrc}
                    alt="NEV Auto"
                    className={`${topSlide.imageClass || "w-[580px] sm:w-[620px] lg:w-[650px]"
                      } hero-scene-image hero-vehicle-drive-loop max-w-none h-auto object-contain opacity-100 drop-shadow-[0_16px_24px_rgba(6,21,43,0.16)]`}
                    style={{ transform: topSlide.imageTransform || "translateX(6px) translateY(-16px)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuickRequest />

      <section className="relative pt-3 pb-8 lg:pt-5 lg:pb-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          <div className="order-1 lg:order-1 z-10 lg:pr-4">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#5BBF43] bg-white text-[#5BBF43] shadow-xs shrink-0">
                <FaBolt size={15} />
              </span>
              <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wide">
                <span className="text-[#5BBF43]">DRIVE CHANGE.</span>{" "}
                <span className="text-[#06152B]">DRIVE ELECTRIC.</span>
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-black leading-[1.1] text-[#06152B] tracking-tight">
              India&apos;s Most Trusted
              <span className="block mt-0.5">
                <span className="text-[#5BBF43]"> EV</span>{" "}
                <span className="text-[#06152B]">Brand</span>
              </span>
            </h2>

            <p className="mt-3 text-sm sm:text-[15px] lg:text-[14px] text-[#4A5568] leading-relaxed max-w-[520px] font-medium">
              NEV Vehicles is committed to delivering reliable, high-performance
              electric rickshaws that empower livelihoods and build a cleaner,
              greener tomorrow.
            </p>

            <div className="mt-3 mb-4 h-[2.5px] w-10 rounded-full bg-[#5BBF43]" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[500px]">
              {featureCards.map((item) => (
                <FeatureCard item={item} key={item.title} />
              ))}
            </div>
          </div>

          <div className="order-2 lg:order-2 relative mt-3 lg:mt-0 flex justify-center lg:justify-end items-center z-10">
            <div className="relative w-full max-w-[480px] sm:max-w-[520px] lg:max-w-[560px] aspect-[1.14/1]">
              <div className="absolute -top-4 right-3 z-0 grid grid-cols-6 gap-2 pointer-events-none">
                {Array.from({ length: 24 }).map((_, i) => (
                  <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#5BBF43]" />
                ))}
              </div>

              <div className="absolute inset-0 rounded-[20px] border border-[#5BBF43]/50 shadow-[0_16px_40px_rgba(6,21,43,0.14)] bg-[#EEF7FC] overflow-hidden z-10">
                <div className="absolute inset-0 border-2 border-white/70 rounded-[20px] z-20 pointer-events-none" />

                <img
                  src={bgSceneSrc}
                  alt="Hero Scene Background"
                  className="w-full h-full object-cover object-center"
                />

                <div className="absolute left-[10%] bottom-[8%] z-20 h-[14%] w-[72%] rounded-[50%] bg-[#06152B]/25 blur-xl pointer-events-none" />

                <div className="absolute left-[-1%] bottom-[-4%] z-30 h-[103%] w-[102%] origin-bottom-left pointer-events-none select-none lg:[transform:perspective(1200px)_rotateY(-2deg)_rotateX(1deg)]">
                  <img
                    src={lowerHeroVehicleSrc}
                    alt="NEV Electric Rickshaw"
                    className="h-full w-full object-contain drop-shadow-[0_28px_36px_rgba(6,21,43,0.34)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-30 mt-6 lg:mt-5">
          <div className="mx-auto max-w-[1240px] rounded-2xl border border-[#E3EAF1] bg-white p-3 sm:p-4 shadow-[0_12px_32px_rgba(6,21,43,0.06)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 md:divide-x md:divide-[#E3EAF1]">
              {mobilityHighlights.map((item) => (
                <MobilityHighlight item={item} key={item.title} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="group rounded-xl border border-[#E3EAF1] bg-white p-3 shadow-[0_3px_12px_rgba(6,21,43,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5BBF43]/50 hover:shadow-[0_8px_20px_rgba(6,21,43,0.08)]">
      <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#5BBF43] bg-white text-[#5BBF43] transition-colors duration-300 group-hover:bg-[#5BBF43] group-hover:text-white">
        <Icon size={15} />
      </div>
      <div className="mt-2.5 min-w-0">
        <h3 className="text-sm font-extrabold text-[#06152B] leading-snug">
          {item.title}
        </h3>
        <p className="mt-1 text-xs font-medium text-[#4A5568] leading-relaxed whitespace-pre-line">
          {item.description}
        </p>
        {item.hasBar && (
          <span className="mt-2 block h-[2px] w-6 rounded-full bg-[#5BBF43]" />
        )}
      </div>
    </article>
  );
}

function MobilityHighlight({ item }) {
  const Icon = item.icon;

  return (
    <article className="flex items-center gap-4 px-3 sm:px-6 py-1">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAF7E7] text-[#5BBF43] border border-[#D4EED1] shadow-xs">
        <Icon size={19} />
      </div>
      <div className="min-w-0">
        <h3 className="text-sm sm:text-base font-extrabold text-[#06152B] leading-snug">
          {item.title}
        </h3>
        <p className="mt-0.5 text-xs sm:text-[13px] font-medium text-[#4A5568] leading-snug">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export default HomeHero;
