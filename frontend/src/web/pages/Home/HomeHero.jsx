import React, { useState, useEffect } from "react";
import {
  FaBatteryFull,
  FaBolt,
  FaChargingStation,
  FaLeaf,
  FaPlay,
  FaRupeeSign,
  FaShieldAlt,
  FaTachometerAlt,
} from "react-icons/fa";

const vehicleSrc = "/full_auto_complete.png";
const bgSceneSrc = "/clean_hero_city_bg.jpg";

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
  const [animKey, setAnimKey] = useState(0);
  const [isDriving, setIsDriving] = useState(true);

  useEffect(() => {
    setIsDriving(true);
    const timer = setTimeout(() => {
      setIsDriving(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [animKey]);

  const replayDrive = () => {
    setAnimKey((prev) => prev + 1);
  };

  return (
    <main className="bg-white text-[#06152B] overflow-hidden font-sans">
      <section className="relative pt-4 pb-12 lg:pt-6 lg:pb-16 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid Layout (Tightened spacing between left text and right image) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4 items-center">
          {/* Left Column (Tagline, Headline, Subtext & 2x2 Feature Cards) */}
          <div className="z-10 lg:pr-2">
            {/* Tagline Badge */}
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#5BBF43] bg-white text-[#5BBF43] shadow-xs shrink-0">
                <FaBolt size={15} />
              </span> 
              <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wide">
                <span className="text-[#5BBF43]">DRIVE CHANGE.</span>{" "}
                <span className="text-[#06152B]">DRIVE ELECTRIC.</span>
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-black leading-[1.14] text-[#06152B] tracking-tight">
              India&apos;s Most Trusted
              <span className="block mt-0.5">
                <span className="text-[#5BBF43]">Electric Rickshaw</span>{" "}
                <span className="text-[#06152B]">Brand</span>
              </span>
            </h1>

            {/* Subtext Paragraph */}
            <p className="mt-4 text-sm sm:text-base lg:text-[15px] text-[#4A5568] leading-relaxed max-w-[500px] font-medium">
              NEV Vehicles is committed to delivering reliable, high-performance
              electric rickshaws that empower livelihoods and build a cleaner,
              greener tomorrow.
            </p>

            {/* Green Line Accent */}
            <div className="mt-3.5 mb-6 h-[3px] w-12 rounded-full bg-[#5BBF43]" />

            {/* 2x2 Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[520px]">
              {featureCards.map((item) => (
                <FeatureCard item={item} key={item.title} />
              ))}
            </div>
          </div>

          {/* Right Column (Hero Image Arched Frame - Pulled closer to remove middle gap) */}
          <div className="relative mt-4 lg:mt-0 flex justify-center lg:justify-start items-center z-10">
            {/* Hero Image Wrapper */}
            <div className="relative w-full max-w-[500px] sm:max-w-[560px] lg:max-w-[620px] aspect-[1.38/1] group">
              {/* Decorative Green Dots (6x4 grid) */}
              <div className="absolute -top-5 right-2 sm:right-4 z-0 grid grid-cols-6 gap-2 sm:gap-2.5 pointer-events-none">
                {Array.from({ length: 24 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-[#5BBF43]"
                  />
                ))}
              </div>

              {/* Background Frame (Clipped Outdoor Scene) */}
              <div className="absolute inset-0 rounded-[32px] sm:rounded-[40px] lg:rounded-l-[260px] lg:rounded-r-[36px] border-[6px] sm:border-[8px] border-white shadow-[0_16px_45px_rgba(6,21,43,0.10)] bg-[#EEF7FC] overflow-hidden z-10">
                {/* Green Inner Arched Outline Ring Accent */}
                <div className="absolute inset-0 rounded-[32px] sm:rounded-[40px] lg:rounded-l-[260px] lg:rounded-r-[36px] border-[3px] border-[#5BBF43] z-20 pointer-events-none" />

                {/* Photorealistic Clean Outdoor Background */}
                <img
                  src={bgSceneSrc}
                  alt="Hero Scene Background"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Floating Green Leaf Badge & Motion Indicator */}
              <div className="absolute top-4 right-5 sm:top-5 sm:right-6 z-40 flex items-center gap-2">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 text-[#06152B] text-xs font-bold shadow-md border border-[#5BBF43]/40">
                  <span className="h-2 w-2 rounded-full bg-[#5BBF43] animate-pulse" />
                  <span>Live Drive Motion</span>
                </span>

                <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#EAF7E7] text-[#5BBF43] border border-[#5BBF43]/40 shadow-md">
                  <FaLeaf className="text-xl text-[#5BBF43] transform -rotate-12" />
                </div>
              </div>

              {/* Complete E-Rickshaw Overlay Image - Continuous Infinite Drive & Loop Motion */}
              <div
                className="absolute bottom-[-3%] right-[6%] sm:bottom-[-4%] sm:right-[8%] lg:right-[10%] z-30 h-[98%] sm:h-[102%] lg:h-[106%] w-auto max-w-none pointer-events-auto select-none -translate-x-3 sm:-translate-x-6 animate-auto-continuous"
              >
                <img
                  src={vehicleSrc}
                  alt="NEV Electric Rickshaw"
                  className="h-full w-auto object-contain drop-shadow-[0_24px_38px_rgba(6,21,43,0.25)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Floating Feature Strip */}
        <div className="relative z-30 mt-10 lg:mt-8">
          <div className="mx-auto max-w-[1240px] rounded-2xl border border-[#E3EAF1] bg-white p-4 sm:p-5 shadow-[0_12px_32px_rgba(6,21,43,0.06)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 md:divide-x md:divide-[#E3EAF1]">
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
    <article className="group flex items-start gap-3.5 rounded-2xl border border-[#E3EAF1] bg-white p-4 sm:p-4.5 shadow-[0_4px_16px_rgba(6,21,43,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5BBF43]/50 hover:shadow-[0_8px_24px_rgba(6,21,43,0.08)]">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#5BBF43] bg-white text-[#5BBF43] transition-colors duration-300 group-hover:bg-[#5BBF43] group-hover:text-white">
        <Icon size={18} />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-sm sm:text-base font-extrabold text-[#06152B] leading-snug">
          {item.title}
        </h3>
        <p className="mt-1 text-xs sm:text-[13px] font-medium text-[#4A5568] leading-snug whitespace-pre-line">
          {item.description}
        </p>
        {item.hasBar && (
          <span className="mt-2.5 block h-[2.5px] w-7 rounded-full bg-[#5BBF43]" />
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
