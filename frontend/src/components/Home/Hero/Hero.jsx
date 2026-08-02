import React from "react";
import HeroContent from "./HeroContent";
import FeatureCards from "./FeatureCards";
import HeroImage from "./HeroImage";
import BottomHighlights from "./BottomHighlights";

function Hero() {
  return (
    <main className="relative bg-[#F8FBFE] text-[#071C38] overflow-hidden font-sans pt-6 pb-16 lg:pt-8 lg:pb-20">
      {/* Background Soft Green Glow Accents */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#59C13B]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#59C13B]/08 rounded-full blur-3xl pointer-events-none translate-x-1/3" />

      <section className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Main Two-Column Layout (Left 45%, Right 55%, Min Height 780px Desktop) */}
        <div className="min-h-[640px] lg:min-h-[720px] xl:min-h-[780px] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
          {/* Left Side (45% Width) */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center">
            <HeroContent />
            <FeatureCards />
          </div>

          {/* Right Side (55% Width) */}
          <div className="w-full lg:w-[55%] flex justify-center lg:justify-end items-center">
            <HeroImage />
          </div>
        </div>

        {/* Bottom Floating Glass Highlight Card */}
        <BottomHighlights />
      </section>
    </main>
  );
}

export default Hero;
