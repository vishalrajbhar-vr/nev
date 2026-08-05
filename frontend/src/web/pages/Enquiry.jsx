import React, { useEffect, useRef, useState } from "react";
import {
  FaGlobe,
  FaMousePointer,
  FaClock,
  FaBell,
} from "react-icons/fa";
import { submitForm } from "../api";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function Enquiry() {
  const { ref: stepsRef, inView: stepsInView } = useInView();
  const { ref: headerRef, inView: headerInView } = useInView();
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus({ type: "loading", message: "Submitting your enquiry..." });

    const formData = Object.fromEntries(new FormData(form));
    try {
      await submitForm("dealership", formData);
      form.reset();
      setStatus({ type: "success", message: "Thanks. Our EV team will contact you shortly." });
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-[#eef7f1] px-12 md:px-16  py-12 md:py-16">

        {/* ================= LEFT SCOOTY ================= */}
        <img
          src="/tvs.jpg"
          alt="Electric Scooty"
          className="
          hidden xl:block
          absolute
          left-[40px]
          bottom-0
          w-[300px]
          animate-scooty
          -z-0
          pointer-events-none
          select-none "
        />

        {/* ================= RIGHT E-RICKSHAW ================= */}
        <img
          src="/15_transparent.png"
          alt="Electric Rickshaw"
          className="
          hidden xl:block
          absolute
          right-[40px]
          bottom-0
          w-[300px]
          animate-rickshaw
          -z-0
          pointer-events-none
          select-none"
        />

        {/* ================= DECORATION ================= */}

        <div className="absolute -top-16 -left-16 w-80 h-40 rounded-full bg-green-200/40"></div>

        <div className="absolute -bottom-20 -right-16 w-48 h-48 rounded-full bg-blue-200/30"></div>

        <div className="absolute top-8 right-[15%] w-3 h-3 rounded-full bg-green-500"></div>

        <div className="absolute bottom-10 left-[12%] w-2 h-2 rounded-full bg-blue-600"></div>

        {/* ================= CONTENT ================= */}

        <div className="relative z-20 max-w-7xl mx-auto px-6">

          <div className="max-w-4xl mx-auto text-center">

            {/* Badge */}

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-green-200 shadow-sm mb-4">

              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 text-xs">
                ⚡
              </span>

              <span className="text-xs md:text-sm font-semibold text-[#071426]">
                Electric Vehicle Enquiry
              </span>

            </div>

            {/* Heading */}

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold hero-heading hero-heading-multicolor leading-tight">

              Find Your{" "}

              <span className="hero-word-mix">
                Perfect Electric Vehicle
              </span>

            </h1>

            {/* Description */}

            <p className="max-w-2xl mx-auto mt-5 text-gray-600 text-sm md:text-base leading-7">

              Looking for an electric e-rickshaw, electric scooty or another
              electric vehicle? Share your requirements and our team will
              help you choose the right EV.

            </p>

            {/* Vehicle Types */}

            <div className="mt-8 flex flex-wrap justify-center gap-3">

              <div className="flex items-center gap-2 rounded-full bg-white border border-green-200 px-4 py-2 shadow-sm">

                <span className="w-2 h-2 rounded-full bg-green-500"></span>

                <span className="text-xs font-semibold text-gray-700">
                  Electric E-Rickshaw
                </span>

              </div>

              <div className="flex items-center gap-2 rounded-full bg-white border border-blue-200 px-4 py-2 shadow-sm">

                <span className="w-2 h-2 rounded-full bg-blue-600"></span>

                <span className="text-xs font-semibold text-gray-700">
                  Electric Scooty
                </span>

              </div>

              <div className="flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-2 shadow-sm">

                <span className="w-2 h-2 rounded-full bg-[#071426]"></span>

                <span className="text-xs font-semibold text-gray-700">
                  Expert Assistance
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= STEPS SECTION ================= */}
      <section className="bg-[#f5f9f7] py-14 md:py-18">
        <div className="max-w-7xl mx-auto px-6">

          {/* ================= SECTION HEADER ================= */}
          <div
            ref={headerRef}
            className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ease-out ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-green-200 text-green-600 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Simple Process
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold hero-heading-multicolor ">
              Get Your
              <span className="hero-word-brand"> EV  in 4 Simple Steps</span>
            </h2>

            <p className="mt-3 text-sm md:text-base text-gray-500 leading-6">
              Tell us what you need, and our team will guide you through
              the process of finding the right electric vehicle.
            </p>

          </div>

          {/* ================= STEPS ================= */}
          <div className="relative py-12">

            <div ref={stepsRef} className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">

              {/* ================= CONNECTOR LINES ================= */}
              <div
                className={`hidden lg:block absolute top-[2px] left-[calc(12.5%+33px)] w-[calc(25%-78px)] h-[90px] pointer-events-none transition-opacity duration-1000 ${stepsInView ? "opacity-100" : "opacity-0"
                  }`}
                style={{ transitionDelay: "300ms" }}
              >
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 90" fill="none">
                  <path
                    d="M0 8 C35 8 35 72 100 72"
                    fill="none"
                    stroke="#5BBF43"
                    strokeWidth="4"
                    strokeDasharray="18 18"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                    className="zigzag-line"
                  />
                </svg>
              </div>

              <div
                className={`hidden lg:block absolute top-[2px] left-[calc(37.5%+39px)] w-[calc(25%-78px)] h-[90px] pointer-events-none transition-opacity duration-1000 ${stepsInView ? "opacity-100" : "opacity-0"
                  }`}
                style={{ transitionDelay: "450ms" }}
              >
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 90" fill="none">
                  <path
                    d="M0 72 C35 72 35 8 100 8"
                    fill="none"
                    stroke="#5BBF43"
                    strokeWidth="4"
                    strokeDasharray="18 18"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                    className="zigzag-line"
                  />
                </svg>
              </div>

              <div
                className={`hidden lg:block absolute top-[2px] left-[calc(62.5%+45px)] w-[calc(25%-78px)] h-[90px] pointer-events-none transition-opacity duration-1000 ${stepsInView ? "opacity-100" : "opacity-0"
                  }`}
                style={{ transitionDelay: "600ms" }}
              >
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 90" fill="none">
                  <path
                    d="M0 8 C35 8 35 72 100 72"
                    fill="none"
                    stroke="#5BBF43"
                    strokeWidth="4"
                    strokeDasharray="18 18"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                    className="zigzag-line"
                  />
                </svg>
              </div>

              {/* ================= STEP 1 ================= */}
              <div
                className={`relative group text-center lg:-translate-y-8 transition-all duration-700 ease-out ${stepsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: "100ms" }}
              >

                <div className="relative z-10 w-[84px] h-[84px] mx-auto rounded-2xl bg-white border border-green-200 shadow-md flex items-center justify-center transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-110 group-hover:border-green-500 group-hover:shadow-2xl">

                  <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center text-green-600 text-2xl">
                    <FaGlobe />
                  </div>

                </div>

                <span className="absolute top-[-8px] right-[calc(50%-48px)] z-20 w-6 h-6 rounded-full bg-green-600 text-white text-[10px] font-bold flex items-center justify-center">
                  01
                </span>

                <h3 className="mt-6 text-lg font-bold text-[#071426] group-hover:text-green-600 transition">
                  Share Your Details
                </h3>

                <p className="mt-2 text-sm text-gray-500 leading-6 max-w-xs mx-auto">
                  Enter your basic contact information so our EV experts
                  can get in touch with you.
                </p>

              </div>

              {/* ================= STEP 2 ================= */}
              <div
                className={`relative group text-center lg:translate-y-8 transition-all duration-700 ease-out ${stepsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: "250ms" }}
              >

                <div className="relative z-10 w-[84px] h-[84px] mx-auto rounded-2xl bg-white border border-blue-200 shadow-md flex items-center justify-center transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-110 group-hover:border-blue-500 group-hover:shadow-2xl">

                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 text-2xl">
                    <FaMousePointer />
                  </div>

                </div>

                <span className="absolute top-[-8px] right-[calc(50%-48px)] z-20 w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">
                  02
                </span>

                <h3 className="mt-6 text-lg font-bold text-[#071426] group-hover:text-blue-600 transition">
                  Choose Your Vehicle
                </h3>

                <p className="mt-2 text-sm text-gray-500 leading-6 max-w-xs mx-auto">
                  Tell us whether you are interested in an electric
                  e-rickshaw, scooty or another EV.
                </p>

              </div>


              {/* ================= STEP 3 ================= */}
              <div
                className={`relative group text-center lg:-translate-y-8 transition-all duration-700 ease-out ${stepsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: "400ms" }}
              >

                <div className="relative z-10 w-[84px] h-[84px] mx-auto rounded-2xl bg-white border border-green-200 shadow-md flex items-center justify-center transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-110 group-hover:border-green-500 group-hover:shadow-2xl">

                  <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center text-green-600 text-2xl">
                    <FaClock />
                  </div>

                </div>

                <span className="absolute top-[-8px] right-[calc(50%-48px)] z-20 w-6 h-6 rounded-full bg-green-600 text-white text-[10px] font-bold flex items-center justify-center">
                  03
                </span>

                <h3 className="mt-6 text-lg font-bold text-[#071426] group-hover:text-green-600 transition">
                  Share Requirements
                </h3>

                <p className="mt-2 text-sm text-gray-500 leading-6 max-w-xs mx-auto">
                  Let us know your preferred budget, usage and location
                  to help us suggest a suitable vehicle.
                </p>

              </div>

              {/* ================= STEP 4 ================= */}
              <div
                className={`relative group text-center lg:translate-y-8 transition-all duration-700 ease-out ${stepsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: "550ms" }}
              >

                <div className="relative z-10 w-[84px] h-[84px] mx-auto rounded-2xl bg-white border border-blue-200 shadow-md flex items-center justify-center transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-110 group-hover:border-blue-500 group-hover:shadow-2xl">

                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 text-2xl">
                    <FaBell />
                  </div>

                </div>

                <span className="absolute top-[-8px] right-[calc(50%-48px)] z-20 w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">
                  04
                </span>

                <h3 className="mt-6 text-lg font-bold text-[#071426] group-hover:text-blue-600 transition">
                  Get a Callback
                </h3>

                <p className="mt-2 text-sm text-gray-500 leading-6 max-w-xs mx-auto">
                  Our team will contact you with vehicle details,
                  pricing and further assistance.
                </p>

              </div>
            </div>

          </div>

        </div>

      </section>


      {/* ================= EXPLORE ELECTRIC MOBILITY SECTION ================= */}

      <section className="relative bg-white py-10 md:py-12 overflow-hidden">

        {/* Decorative Elements */}
        <div className="absolute top-6 left-8 w-20 h-20 border border-green-500/10 rounded-full"></div>

        <div className="absolute bottom-6 right-8 w-28 h-28 border border-blue-500/10 rounded-full"></div>

        <div className="absolute top-16 right-[20%] w-2 h-2 bg-green-500 rounded-full"></div>

        <div className="absolute bottom-16 left-[18%] w-2 h-2 bg-blue-500 rounded-full"></div>


        <div className="relative max-w-7xl mx-auto px-6">

          {/* ================= SECTION HEADER ================= */}
          <div className="text-center max-w-3xl mx-auto mb-8">

            {/* Small Label */}
            <div className="inline-flex items-center gap-2 mb-3">

              <span className="w-6 h-[2px] bg-green-500"></span>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-400">
                Explore Our EV Range
              </span>

              <span className="w-6 h-[2px] bg-green-500"></span>

            </div>


            {/* Main Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold  leading-tight hero-heading-multicolor">

              Explore Electric
              <span className="block hero-word-mix">
                Mobility Made for Your Needs
              </span>

            </h2>


            {/* Description */}
            <p className="mt-3 text-sm md:text-base text-gray-400 leading-6 max-w-2xl mx-auto">
              Discover electric vehicles designed for personal travel,
              commercial transportation and everyday mobility.
              Find the right EV for your requirements.
            </p>

          </div>


          {/* ================= EV CARDS ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">


            {/* ================= E-RICKSHAW ================= */}
            <div className="group relative bg-[#0d1d32] border border-gray-700/60 rounded-2xl p-5 hover:border-green-500/60 hover:-translate-y-2 transition-all duration-300">

              <div className="flex items-center justify-between mb-5">

                <div className="w-11 h-11 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-lg">
                  ⚡
                </div>

                <span className="text-3xl font-black text-white/[0.04]">
                  01
                </span>

              </div>


              <h3 className="text-lg font-bold text-white mb-2">
                Electric E-Rickshaws
              </h3>

              <p className="text-sm text-gray-400 leading-6">
                Explore reliable electric e-rickshaws designed for
                passenger transportation and commercial use.
              </p>


              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-green-400">

                <span className="w-5 h-[2px] bg-green-500 group-hover:w-9 transition-all duration-300"></span>

                Passenger & Commercial

              </div>

            </div>


            {/* ================= SCOOTERS ================= */}
            <div className="group relative bg-[#0d1d32] border border-gray-700/60 rounded-2xl p-5 hover:border-blue-500/60 hover:-translate-y-2 transition-all duration-300">

              <div className="flex items-center justify-between mb-5">

                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-lg">
                  🛵
                </div>

                <span className="text-3xl font-black text-white/[0.04]">
                  02
                </span>

              </div>


              <h3 className="text-lg font-bold text-white mb-2">
                Electric Scooters
              </h3>

              <p className="text-sm text-gray-400 leading-6">
                Discover efficient electric scooters made for everyday
                commuting and convenient city travel.
              </p>


              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-blue-400">

                <span className="w-5 h-[2px] bg-blue-500 group-hover:w-9 transition-all duration-300"></span>

                Everyday Commuting

              </div>

            </div>


            {/* ================= COMMERCIAL EV ================= */}
            <div className="group relative bg-[#0d1d32] border border-gray-700/60 rounded-2xl p-5 hover:border-green-500/60 hover:-translate-y-2 transition-all duration-300">

              <div className="flex items-center justify-between mb-5">

                <div className="w-11 h-11 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-lg">
                  🚚
                </div>

                <span className="text-3xl font-black text-white/[0.04]">
                  03
                </span>

              </div>


              <h3 className="text-lg font-bold text-white mb-2">
                Commercial EVs
              </h3>

              <p className="text-sm text-gray-400 leading-6">
                Choose practical electric vehicles built for delivery,
                transportation and growing business needs.
              </p>


              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-green-400">

                <span className="w-5 h-[2px] bg-green-500 group-hover:w-9 transition-all duration-300"></span>

                Business Mobility

              </div>

            </div>


            {/* ================= EV SUPPORT ================= */}
            <div className="group relative bg-[#0d1d32] border border-gray-700/60 rounded-2xl p-5 hover:border-blue-500/60 hover:-translate-y-2 transition-all duration-300">

              <div className="flex items-center justify-between mb-5">

                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-lg">
                  ✓
                </div>

                <span className="text-3xl font-black text-white/[0.04]">
                  04
                </span>

              </div>


              <h3 className="text-lg font-bold text-white mb-2">
                EV Support
              </h3>

              <p className="text-sm text-gray-400 leading-6">
                Get expert assistance with vehicle selection, features,
                pricing, availability and your EV requirements.
              </p>


              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-blue-400">

                <span className="w-5 h-[2px] bg-blue-500 group-hover:w-9 transition-all duration-300"></span>

                Expert Assistance

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ENQUIRY FORM SECTION */}
      <section className="py-14 md:py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <form
            onSubmit={handleSubmit}
            className="bg-white border border-gray-200 rounded-2xl p-6 md:p-10 shadow-lg"
          >

            {/* ================= FORM HEADER ================= */}
            <div className="mb-10 pb-7 border-b border-gray-200">

              <div className="flex items-center gap-3 mb-3">

                <span className="w-1.5 h-8 rounded-full bg-green-600"></span>

                <h2 className="text-2xl md:text-3xl font-bold text-[#071426]">
                  Electric Vehicle Enquiry
                </h2>

              </div>

              <p className="text-base md:text-lg text-gray-500 leading-7 max-w-3xl">
                Share your business and infrastructure details with us.
                Our EV team will contact you to discuss the right electric
                vehicle opportunity for your business.
              </p>

            </div>


            {/* ================= PERSONAL INFORMATION ================= */}
            <div className="mb-10">

              <h3 className="text-2xl md:text-3xl font-bold text-[#071426] mb-6">
                Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">

                {/* Full Name */}
                <div>

                  <label className="block text-base md:text-lg font-semibold text-[#071426] mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    className="w-full h-13 px-4 rounded-lg border border-gray-300 bg-[#f8fafc] text-base md:text-lg text-[#071426] placeholder:text-gray-400 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition"
                  />

                </div>


                {/* Email */}
                <div>

                  <label className="block text-base md:text-lg font-semibold text-[#071426] mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                    className="w-full h-13 px-4 rounded-lg border border-gray-300 bg-[#f8fafc] text-base md:text-lg text-[#071426] placeholder:text-gray-400 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                  />

                </div>


                {/* Phone */}
                <div className="md:col-span-2">

                  <label className="block text-base md:text-lg font-semibold text-[#071426] mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Enter your phone number"
                    className="w-full h-13 px-4 rounded-lg border border-gray-300 bg-[#f8fafc] text-base md:text-lg text-[#071426] placeholder:text-gray-400 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition"
                  />

                </div>

              </div>

            </div>


            {/* ================= BUSINESS INFORMATION ================= */}
            <div className="mb-10">

              <h3 className="text-2xl md:text-3xl font-bold text-[#071426] mb-6">
                Business Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">

                {/* Company Name */}
                <div>

                  <label className="block text-base md:text-lg font-semibold text-[#071426] mb-2">
                    Company / Firm Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    name="company"
                    required
                    placeholder="Enter your company or firm name"
                    className="w-full h-13 px-4 rounded-lg border border-gray-300 bg-[#f8fafc] text-base md:text-lg text-[#071426] placeholder:text-gray-400 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition"
                  />

                </div>


                {/* Business Type */}
                <div>

                  <label className="block text-base md:text-lg font-semibold text-[#071426] mb-2">
                    Business Type <span className="text-red-500">*</span>
                  </label>

                  <select
                    name="businessType"
                    required
                    defaultValue=""
                    className="w-full h-13 px-4 rounded-lg border border-gray-300 bg-[#f8fafc] text-base md:text-lg text-[#071426] outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                  >

                    <option value="" disabled>
                      Select Business Type
                    </option>

                    <option>Proprietorship</option>
                    <option>Partnership</option>
                    <option>Private Limited</option>
                    <option>Public Limited</option>
                    <option>Other</option>

                  </select>

                </div>


                {/* Years in Business */}
                <div>

                  <label className="block text-base md:text-lg font-semibold text-[#071426] mb-2">
                    Years in Business <span className="text-red-500">*</span>
                  </label>

                  <select
                    name="yearsInBusiness"
                    required
                    defaultValue=""
                    className="w-full h-13 px-4 rounded-lg border border-gray-300 bg-[#f8fafc] text-base md:text-lg text-[#071426] outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition"
                  >

                    <option value="" disabled>
                      Select Years in Business
                    </option>

                    <option>Less than 1 Year</option>
                    <option>1 - 3 Years</option>
                    <option>3 - 5 Years</option>
                    <option>5 - 10 Years</option>
                    <option>10+ Years</option>

                  </select>

                </div>


                {/* Current Brands */}
                <div>

                  <label className="block text-base md:text-lg font-semibold text-[#071426] mb-2">
                    Current Brands
                  </label>

                  <input
                    type="text"
                    name="currentBrands"
                    placeholder="e.g. Brand A, Brand B"
                    className="w-full h-13 px-4 rounded-lg border border-gray-300 bg-[#f8fafc] text-base md:text-lg text-[#071426] placeholder:text-gray-400 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                  />

                </div>


              </div>

            </div>


            {/* ================= LOCATION & INFRASTRUCTURE ================= */}

            <div className="mb-10">

              <h3 className="text-2xl md:text-3xl font-bold text-[#071426] mb-6">
                Location & Infrastructure
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">

                {/* City */}
                <div>

                  <label className="block text-base md:text-lg font-semibold text-[#071426] mb-2">
                    City <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    name="city"
                    required
                    placeholder="Enter your city"
                    className="w-full h-13 px-4 rounded-lg border border-gray-300 bg-[#f8fafc] text-base md:text-lg text-[#071426] placeholder:text-gray-400 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition"
                  />

                </div>


                {/* State */}
                <div>

                  <label className="block text-base md:text-lg font-semibold text-[#071426] mb-2">
                    State <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    name="state"
                    required
                    placeholder="Enter your state"
                    className="w-full h-13 px-4 rounded-lg border border-gray-300 bg-[#f8fafc] text-base md:text-lg text-[#071426] placeholder:text-gray-400 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                  />

                </div>


                {/* Showroom Area */}
                <div>

                  <label className="block text-base md:text-lg font-semibold text-[#071426] mb-2">
                    Showroom Area (sq.ft) <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    name="showroomArea"
                    required
                    placeholder="e.g. 2000 sq.ft"
                    className="w-full h-13 px-4 rounded-lg border border-gray-300 bg-[#f8fafc] text-base md:text-lg text-[#071426] placeholder:text-gray-400 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition"
                  />

                </div>


                {/* Workshop */}
                <div>

                  <label className="block text-base md:text-lg font-semibold text-[#071426] mb-2">
                    Workshop Facility Available?{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <select
                    name="workshopFacility"
                    required
                    defaultValue=""
                    className="w-full h-13 px-4 rounded-lg border border-gray-300 bg-[#f8fafc] text-base md:text-lg text-[#071426] outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                  >

                    <option value="" disabled>
                      Select Option
                    </option>

                    <option>Yes</option>
                    <option>No</option>
                    <option>Planning to Set Up</option>

                  </select>

                </div>


                {/* Sales Team */}
                <div>

                  <label className="block text-base md:text-lg font-semibold text-[#071426] mb-2">
                    Sales Team Size
                  </label>

                  <input
                    type="text"
                    name="salesTeamSize"
                    placeholder="e.g. 5-10 members"
                    className="w-full h-13 px-4 rounded-lg border border-gray-300 bg-[#f8fafc] text-base md:text-lg text-[#071426] placeholder:text-gray-400 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition"
                  />

                </div>


                {/* Service Team */}
                <div>

                  <label className="block text-base md:text-lg font-semibold text-[#071426] mb-2">
                    Service Team Availability
                  </label>

                  <select
                    name="serviceTeamAvailability"
                    defaultValue=""
                    className="w-full h-13 px-4 rounded-lg border border-gray-300 bg-[#f8fafc] text-base md:text-lg text-[#071426] outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                  >

                    <option value="" disabled>
                      Select Option
                    </option>

                    <option>Available</option>
                    <option>Not Available</option>
                    <option>Can Be Arranged</option>

                  </select>

                </div>


                {/* ================= ADDITIONAL INFORMATION ================= */}
                <div className="md:col-span-2">

                  <label className="block text-base md:text-lg font-semibold text-[#071426] mb-2">
                    Additional Information
                  </label>

                  <textarea
                    name="additionalInformation"
                    rows="3"
                    placeholder="Tell us about your business, location, infrastructure or any other requirements..."
                    className="w-full px-4 py-4 rounded-lg border border-gray-300 bg-[#f8fafc] text-base md:text-lg text-[#071426] placeholder:text-gray-400 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition resize-y"
                  ></textarea>

                </div>

              </div>

            </div>


            {/* ================= SUBMIT BUTTON ================= */}
            <button
              type="submit"
              disabled={status.type === "loading"}
              className="w-full h-14 bg-[#071426] hover:bg-green-600 text-white text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
            >
              <span className="text-xl">✉</span>
              Submit Enquiry
            </button>

            {status.type !== "idle" && (
              <p className={status.type === "error" ? "mt-4 text-center text-red-600" : "mt-4 text-center text-green-600"}>
                {status.message}
              </p>
            )}

          </form>

        </div>

      </section>



    </div>
  );
}

export default Enquiry;