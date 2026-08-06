import React, { useState, useEffect, useRef } from "react";
import { submitForm } from "../../../api";
import {
  FaHome,
  FaChevronRight,
  FaChevronLeft,
  FaDownload,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaStar,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";
import {
  Gauge,
  Disc,
  Weight,
  Clock,
  BatteryCharging,
  Zap,
  Cog,
  ChevronDown,
  ArrowRight,
  Truck,
  Users,
  CircleGauge,
  ChartNoAxesCombined,
  Wind,
  ShieldCheck,
  Settings,
  Key,
  Ruler,
  MoveVertical,
  Mountain,
  Sun,
  CircleDot,
} from "lucide-react";

const GALLERY_IMAGES = [
    "/images/china-pulse.png"

];

/* ===================================================================
   BRAND TOKENS
   Navy   -> headings / primary text accents
   Blue   -> CTA / brand gradient (matches NAVGATEE logo blue)
   Green  -> spec icon accent (matches the spec badge strip in the design)
=================================================================== */
const NAVY = "#0F2E5C";
const NAVY_DARK = "#081B38";
const BLUE = "#1D5FA8";
const BLUE_DARK = "#123E75";
const GREEN = "#4CAF3D";
const GREEN_LIGHT = "#7ED33E";

/* ===================================================================
   SPECS DATA — pulled from the PULSE spec strip
=================================================================== */
const specGroups = [
  {
    category: "Power & Transmission",
    items: [
      { icon: <Cog size={20} />, title: "Motor Type", value: "BLDC Hub Motor" },
      { icon: <Zap size={20} />, title: "Motor Power", value: "250 Watt" },
      { icon: <BatteryCharging size={20} />, title: "Battery Volt", value: "60V / 72V" },
      { icon: <Gauge size={20} />, title: "Range", value: "50 - 120 KM*" },
      { icon: <Settings size={20} />, title: "Transmission", value: "Automatic" },
      { icon: <Key size={20} />, title: "Start", value: "Keyless Self Start" },
    ],
  },
  {
    category: "Dimensions & Capacity",
    items: [
      { icon: <Weight size={20} />, title: "Net Weight", value: "80 Kgs" },
      { icon: <Users size={20} />, title: "Carrying Capacity", value: "150 Kg*" },
      { icon: <Ruler size={20} />, title: "Length x Width x Height", value: "1700 x 650 x 1100 mm" },
      { icon: <MoveVertical size={20} />, title: "Ground Clearance", value: "175 mm" },
    ],
  },
  {
    category: "Electricals",
    items: [
      { icon: <BatteryCharging size={20} />, title: "Battery Type", value: "Lead-Acid / Lithium" },
      { icon: <Zap size={20} />, title: "Battery Capacity", value: "KWH*" },
      { icon: <Mountain size={20} />, title: "Gradeability", value: "12°" },
      { icon: <Sun size={20} />, title: "Head Lights", value: "LED" },
      { icon: <ChartNoAxesCombined size={20} />, title: "Top Speed", value: "25 KMPH" },
    ],
  },
  {
    category: "Tyres & Brakes",
    items: [
      { icon: <CircleDot size={20} />, title: "Tyre Size", value: "Front 3.00-12 / Rear 3.00-12" },
      { icon: <CircleDot size={20} />, title: "Tyre Type", value: "Tubeless" },
      { icon: <CircleDot size={20} />, title: "Wheel Type", value: "Alloy" },
      { icon: <Disc size={20} />, title: "Front & Rear Brake", value: "Front Disc & Rear Disc" },
    ],
  },
];

const additionalFeatures = [
  "Repair Switch",
  "Parking Mode",
  "Buzzer",
  "Reverse Gear",
  "Foot Mat",
  "Remote",
  "Alert",
  "Chrome Mirror",
];

/* ===================================================================
   TESTIMONIALS DATA
=================================================================== */
const testimonials = [
  {
    name: "Rohit Verma",
    location: "Lucknow, UP",
    rating: 5,
    text: "The PULSE is light, peppy and perfect for my daily office commute. 120 km on a charge means I barely think about charging during the week.",
    initials: "RV",
    color: "blue",
  },
  {
    name: "Anjali Mishra",
    location: "Kanpur, UP",
    rating: 5,
    text: "Braking feels confident with the front disc setup, and the ride is very smooth even on broken roads. Great value electric scooter.",
    initials: "AM",
    color: "green",
  },
  {
    name: "Deepak Chauhan",
    location: "Varanasi, UP",
    rating: 4,
    text: "150 kg load capacity is impressive — I ride two-up with grocery bags without any fuss. Charging is quick too, ready in about 5 hours.",
    initials: "DC",
    color: "blue",
  },
  {
    name: "Neha Gupta",
    location: "Gorakhpur, UP",
    rating: 5,
    text: "Loved the styling and the sturdy build. Motor feels punchy for a 250W setup and the LED battery gives me peace of mind on longer rides.",
    initials: "NG",
    color: "green",
  },
];

/* ===================================================================
   FAQ DATA
=================================================================== */
const faqData = [
  {
    q: "What is the maximum range of the PULSE on a full charge?",
    a: "The PULSE delivers up to 120 km on a single full charge, making it one of the longest-range scooters in its segment for daily commuting.",
  },
  {
    q: "How long does the battery take to charge?",
    a: "With the LED charging indicator, a full charge takes around 5-6 hours. A single battery pack charges in roughly 5 to 6 hours as well.",
  },
  {
    q: "What is the top speed of the PULSE?",
    a: "The PULSE has a top speed of 25 KPH, tuned for safe and efficient city and residential riding.",
  },
  {
    q: "What braking system does the PULSE use?",
    a: "The PULSE comes equipped with a front disc brake for confident, reliable stopping power in all conditions.",
  },
  {
    q: "How much load can the PULSE carry?",
    a: "The PULSE is rated for a total load capacity of 150 kgs, comfortably supporting two riders along with everyday cargo.",
  },
];

/* ===================================================================
   COUNTER HOOK
=================================================================== */
const useCountUp = (end, duration = 2000, startOnView = false) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || (startOnView && !hasStarted)) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, startOnView, hasStarted]);

  useEffect(() => {
    if (!startOnView) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) setHasStarted(true);
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [startOnView, hasStarted]);

  return [count, ref];
};

/* ===================================================================
   STAT CARD
=================================================================== */
const StatCard = ({ icon, value, suffix, label }) => {
  const [count, ref] = useCountUp(value, 2200, true);
  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 sm:p-7 shadow-2xl shadow-slate-200/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div
        className="absolute inset-x-0 top-0 h-1.5"
        style={{ background: `linear-gradient(90deg, ${NAVY}, ${GREEN}, ${BLUE})` }}
      />
      <div className="relative z-10 flex flex-col items-center text-center">
        <div
          className="flex items-center justify-center rounded-3xl p-4 shadow-sm"
          style={{ backgroundColor: `${NAVY}14`, color: NAVY }}
        >
          {icon}
        </div>
        <div className="mt-6 flex items-end gap-2">
          <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tabular-nums">
            {count}
          </span>
          <span className="text-lg sm:text-2xl font-semibold" style={{ color: BLUE }}>
            {suffix}
          </span>
        </div>
        <span className="mt-4 text-sm sm:text-base font-medium text-slate-500 max-w-xs">
          {label}
        </span>
      </div>
      <div
        className="absolute -bottom-4 left-1/2 h-2 w-24 -translate-x-1/2 rounded-full opacity-30 blur-xl"
        style={{ background: `linear-gradient(90deg, ${NAVY}, ${BLUE})` }}
      />
    </div>
  );
};

/* ===================================================================
   FEATURE CARD
=================================================================== */
const FeatureCard = ({ icon, title, desc, color = "blue" }) => {
  const colors = {
    blue: {
      bg: "from-blue-50 to-blue-100/50",
      text: "text-[#1D5FA8]",
      border: "border-blue-200/40",
    },
    green: {
      bg: "from-green-50 to-green-100/50",
      text: "text-green-600",
      border: "border-green-200/30",
    },
  };
  const c = colors[color] || colors.blue;

  return (
    <div
      className={`relative group bg-gradient-to-br ${c.bg} backdrop-blur-sm rounded-2xl p-4 sm:p-5 border ${c.border} hover:shadow-xl transition-all duration-500 hover:-translate-y-1`}
    >
      <div className="absolute inset-0 bg-white/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div
          className={`w-14 h-14 rounded-2xl bg-white shadow-md ${c.text} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

/* ===================================================================
   FAQ ACCORDION ITEM
=================================================================== */
const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      className={`group rounded-2xl border transition-all duration-300 cursor-pointer ${
        isOpen
          ? "border-blue-200 bg-gradient-to-r from-blue-50/50 to-white shadow-md"
          : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between px-6 py-5">
        <h4 className="text-base sm:text-lg font-semibold text-gray-800 pr-4">
          {question}
        </h4>
        <ChevronDown
          size={20}
          className={`shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          style={{ color: BLUE }}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-400 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-6 pb-5 text-gray-500 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

/* ===================================================================
   TESTIMONIAL SLIDER
=================================================================== */
const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const [slideDir, setSlideDir] = useState("right");
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setSlideDir("right");
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
  };
  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goTo = (idx) => {
    stopAutoSlide();
    setSlideDir(idx > current ? "right" : "left");
    setCurrent(idx);
    startAutoSlide();
  };
  const goPrev = () => {
    stopAutoSlide();
    setSlideDir("left");
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    startAutoSlide();
  };
  const goNext = () => {
    stopAutoSlide();
    setSlideDir("right");
    setCurrent((prev) => (prev + 1) % testimonials.length);
    startAutoSlide();
  };

  const t = testimonials[current];
  const colorMap = {
    blue: { bg: "from-blue-50 to-blue-100/50", text: "text-[#1D5FA8]", dot: "bg-[#1D5FA8]" },
    green: { bg: "from-green-50 to-green-100/50", text: "text-green-600", dot: "bg-green-600" },
  };
  const c = colorMap[t.color] || colorMap.blue;

  return (
    <div className="relative max-w-3xl mx-auto">
      <style>{`
        @keyframes slideInRight { from { transform: translateX(80px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes slideInLeft { from { transform: translateX(-80px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        .slide-in-right { animation: slideInRight 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .slide-in-left { animation: slideInLeft 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
      `}</style>

      <div
        key={current + "-" + slideDir}
        className={`relative bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-10 md:p-12 overflow-hidden ${
          slideDir === "right" ? "slide-in-right" : "slide-in-left"
        }`}
      >
        <div className="absolute -top-6 -left-4 text-8xl leading-none text-gray-100 font-serif select-none">
          &ldquo;
        </div>

        <div className="flex items-center gap-1 mb-6 relative z-10">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              size={18}
              className={star <= t.rating ? "" : "text-gray-200"}
              style={star <= t.rating ? { color: GREEN } : {}}
            />
          ))}
          <span className="ml-3 text-sm font-medium text-gray-400">{t.rating}.0</span>
        </div>

        <p className="text-gray-600 text-base sm:text-lg leading-relaxed relative z-10 mb-8">
          &ldquo;{t.text}&rdquo;
        </p>

        <div className="flex items-center gap-4 relative z-10">
          <div
            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.bg} ${c.text} flex items-center justify-center text-lg font-bold shadow-sm`}
          >
            {t.initials}
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg">{t.name}</h4>
            <p className="text-sm text-gray-400">{t.location}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={goPrev}
          className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:shadow-md transition-all duration-300"
          style={{ borderColor: undefined }}
          onMouseEnter={(e) => (e.currentTarget.style.color = BLUE)}
          onMouseLeave={(e) => (e.currentTarget.style.color = "")}
          aria-label="Previous testimonial"
        >
          <FaChevronRight size={14} className="rotate-180" />
        </button>

        <div className="flex items-center gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`transition-all duration-500 rounded-full ${
                idx === current ? `${c.dot} w-8 h-2.5` : "bg-gray-200 w-2.5 h-2.5 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:shadow-md transition-all duration-300"
          aria-label="Next testimonial"
        >
          <FaChevronRight size={14} />
        </button>
      </div>
    </div>
  );
};

/* ===================================================================
   PRODUCT ANIMATION — 3D interactive showcase
=================================================================== */
const ProductAnimation = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const mouseXRef = useRef(0);
  const mouseYRef = useRef(0);
  const targetRotX = useRef(0);
  const targetRotY = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseXRef.current = (e.clientX - centerX) / (rect.width / 2);
      mouseYRef.current = (e.clientY - centerY) / (rect.height / 2);
    };
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
      setIsHovered(false);
      mouseXRef.current = 0;
      mouseYRef.current = 0;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    let animId;
    const animate = () => {
      targetRotY.current += (mouseXRef.current * 15 - targetRotY.current) * 0.08;
      targetRotX.current += (-mouseYRef.current * 15 - targetRotX.current) * 0.08;
      setRotation({ x: targetRotX.current, y: targetRotY.current });
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  const autoRotateY = isHovered ? rotation.y : rotation.y + 0.3;

  return (
    <div className="relative" ref={containerRef}>
      <div className="absolute -inset-4 bg-gradient-to-br from-blue-100/40 to-green-100/40 rounded-3xl blur-2xl" />

      <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/60 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full opacity-20"
              style={{
                backgroundColor: i % 2 === 0 ? BLUE : GREEN,
                left: `${15 + i * 18}%`,
                top: `${10 + (i % 3) * 35}%`,
                animation: `floatParticle ${3 + i * 0.8}s ease-in-out infinite`,
                animationDelay: `${i * 0.6}s`,
              }}
            />
          ))}
        </div>

        <div
          className="aspect-[4/3] bg-gradient-to-br from-gray-50 via-blue-50/30 to-green-50/30 rounded-2xl flex items-center justify-center overflow-hidden"
          style={{ perspective: "1000px" }}
        >
          <div
            className="relative w-full h-full flex items-center justify-center transition-transform duration-75"
            style={{
              transform: `rotateY(${autoRotateY}deg) rotateX(${rotation.x}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center" style={{ transform: "translateZ(40px)" }}>
              <div className="relative w-[135%] h-[135%] flex items-center justify-center">
                <img
                  src="/images/china-pulse.png"
                  alt="PULSE Electric Scooter"
                  className="w-[110%] h-[110%] -mt-10 object-contain p-4 drop-shadow-2xl"
                  style={{ filter: `drop-shadow(0 20px 30px ${BLUE}40)` }}
                />
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes floatParticle {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-14px) translateX(6px); }
          }
        `}</style>
      </div>
    </div>
  );
};

/* ===================================================================
   MAIN COMPONENT
=================================================================== */
const Pulse = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const [activeIndex, setActiveIndex] = useState(0);
  const total = GALLERY_IMAGES.length;

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(autoSlide);
  }, [total]);

  const goPrev = () => setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  const goNext = () => setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));

  const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitForm("product", { ...formData, product: "Pulse" });
      alert("Thank you for your enquiry! We will get back to you shortly.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      {/* ============================================================
          SECTION 1: HERO
      ============================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-blue-100/30">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-green-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-400/10 to-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl animate-pulse" />

        <div className="absolute top-20 right-[15%] w-4 h-4 bg-[#122A52]/10 rounded-full hidden lg:block" />
        <div className="absolute bottom-32 left-[10%] w-6 h-6 bg-green-400/10 rounded-lg rotate-45 hidden lg:block" />
        <div className="absolute top-1/2 right-[8%] w-3 h-16 bg-green-400/10 rounded-full rotate-12 hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-5">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="w-full lg:w-[55%]">
              <nav className="flex flex-wrap items-center gap-2 text-sm sm:text-base text-gray-500 mb-3">
                <FaHome style={{ color: BLUE }} size={14} />
                <span>Home</span>
                <FaChevronRight size={10} className="text-gray-300" />
                <span>Products</span>
                <FaChevronRight size={10} className="text-gray-300" />
                <span>China Scooty</span>
                <FaChevronRight size={10} className="text-gray-300" />
                <span className="font-semibold" style={{ color: BLUE }}>Pulse</span>
              </nav>

              <h1
                className="text-3xl sm:text-5xl lg:text-5xl xl:text-5xl font-extrabold  tracking-tight italic"
                style={{ color: NAVY_DARK }}
              >
                PULSE
              </h1>

              <div
                className="w-24 h-1.5 rounded-full mt-3 mb-4"
                style={{ background: `linear-gradient(90deg, ${NAVY}, ${BLUE})` }}
              />

              <p className="text-lg sm:text-xl text-gray-600 max-w-xl leading-relaxed">
                Ride further, stop safer. The all-new PULSE delivers a 120 km
                range, a responsive front disc brake, and a 150 kg load
                capacity — built for confident everyday commuting.
              </p>

              <div className="flex flex-wrap gap-4 mt-5">
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                  style={{ background: `linear-gradient(90deg, ${BLUE}, ${BLUE_DARK})`, boxShadow: `0 10px 30px ${BLUE}33` }}
                >
                  <FaDownload size={16} />
                  <span>Download Brochure</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:18001210259"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 bg-white font-semibold rounded-xl border-2 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  style={{ color: NAVY, borderColor: `${NAVY}22` }}
                >
                  <FaPhoneAlt size={14} />
                  <span>Enquire Now</span>
                </a>
              </div>
            </div>

            {/* Right — Product Visual */}
            <div className="w-full lg:w-[45%] relative">
              <ProductAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: STATS COUNTER
      ============================================================ */}
      <section className="relative mt-10 sm:mt-10 z-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <StatCard icon={<Truck size={26} />} value={500} suffix="+" label="Units Sold" />
          <StatCard icon={<FaStar size={24} />} value={98} suffix="%" label="Satisfaction Rate" />
          <StatCard icon={<FaShieldAlt size={22} />} value={1} suffix=" Year" label="Warranty" />
          <StatCard icon={<FaHeadset size={22} />} value={50} suffix="+" label="Service Centers" />
        </div>
      </section>

      {/* ============================================================
          SECTION 3: KEY HIGHLIGHTS / FEATURES
      ============================================================ */}
      <section className="py-8 sm:py-15 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span
              className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full mb-4"
              style={{ backgroundColor: `${BLUE}12`, color: BLUE }}
            >
              Key Highlights
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight" style={{ color: NAVY_DARK }}>
              Built for{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: `linear-gradient(90deg, ${BLUE}, ${NAVY})` }}
              >
                Everyday Confidence
              </span>
            </h2>
            <p className="mt-4 text-gray-500 text-lg">
              Long range, strong stopping power, and a stable ride — the PULSE
              is engineered for daily commuting without compromise.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Gauge size={28} />}
              title="120 km Range"
              desc="Go further between charges with a long-range battery built for daily commutes."
              color="blue"
            />
            <FeatureCard
              icon={<Disc size={28} />}
              title="Front Disc Brake"
              desc="Confident, reliable stopping power in every riding condition."
              color="green"
            />
            <FeatureCard
              icon={<Weight size={28} />}
              title="150 kg Load Capacity"
              desc="Ride two-up with luggage and everyday essentials, without strain."
              color="blue"
            />
            <FeatureCard
              icon={<Clock size={28} />}
              title="Fast 5-6 Hr Charging"
              desc="LED charge indicator and quick charging get you back on the road sooner."
              color="green"
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION: PRODUCT GALLERY
      ============================================================ */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-32 -left-20 w-72 h-72 bg-green-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: `${BLUE}22` }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-10 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-center">
            {/* Left — Product Info */}
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-md sm:text-sm font-semibold text-gray-500 bg-green-400/10 border border-black/15 backdrop-blur-sm">
                Scooty
              </span>

              <h2 className="mt-5 text-2xl sm:text-4xl lg:text-[25px] font-bold leading-tight">
                <span style={{ color: NAVY_DARK }}>PULSE</span>
                <br />
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: `linear-gradient(90deg, ${BLUE}, ${GREEN_LIGHT})` }}
                >
                  Ride Further, Brake Smarter
                </span>
              </h2>

              <p className="mt-5 text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Meet the PULSE — a bold, high-range electric scooter designed
                for everyday commuting. With a responsive front disc brake, a
                150 kg load rating, and a 120 km range, every ride is
                efficient, safe, and dependable.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 mt-6">
                {["Ride Further", "Brake Smarter", "Choose Pulse"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-gray-600 bg-white/5 border border-gray-400 hover:text-green-600 hover:border-green-600/50 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col xs:flex-row flex-wrap justify-center lg:justify-start items-center gap-3 mt-8">
                <a
                  href="tel:18001210259"
                  className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm sm:text-base text-white hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
                  style={{ backgroundColor: BLUE, boxShadow: `0 10px 25px ${BLUE}33` }}
                >
                  <FaPhoneAlt size={13} />
                  Get Quote
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                <div className="flex items-center gap-3 border border-gray-400 rounded-xl py-4 px-5 mt-8 mx-auto lg:mx-0">
                  <CircleGauge className="text-green-600" size={25} />
                  <div className="w-full sm:w-auto text-center sm:text-left">
                    <h1 className="text-xl font-bold">175</h1>
                    <p className="text-md font-semibold">KM Range</p>
                  </div>
                </div>
                <div className="flex gap-5 items-center border border-gray-400 rounded-xl py-4 px-5 mt-8 mx-auto lg:mx-0">
                  <ChartNoAxesCombined className="text-green-600" size={25} />
                  <div className="w-full sm:w-auto text-center sm:text-left">
                    <h1 className="text-xl font-bold">25</h1>
                    <p className="text-md font-semibold">KM/H</p>
                  </div>
                </div>
                <div className="flex gap-5 items-center border border-gray-400 rounded-xl py-4 px-5 mt-8 mx-auto lg:mx-0">
                  <Users className="text-green-600" size={25} />
                  <div className="w-full sm:w-auto text-center sm:text-left">
                    <h1 className="text-xl font-bold">2</h1>
                    <p className="text-md font-semibold">SEATER</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Image Gallery */}
            <div className="border border-gray-400 rounded-3xl px-2 py-3">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 aspect-[4/3] sm:aspect-[16/11]">
                <div
                  className="flex items-center justify-center py-2 -mt-18 h-[140%] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {GALLERY_IMAGES.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={`Pulse view ${i + 1}`}
                      className="w-[100%] h-[100%] -mt-10 flex-shrink-0 object-contain"
                    />
                  ))}
                </div>

                <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white bg-black/40 border border-white/10">
                  {activeIndex + 1} / {total}
                </span>

                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous image"
                  className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 text-white flex items-center justify-center transition-all duration-300"
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = BLUE)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
                >
                  <FaChevronLeft size={14} />
                </button>

                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next image"
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 text-white flex items-center justify-center transition-all duration-300"
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = BLUE)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
                >
                  <FaChevronRight size={14} />
                </button>
              </div>

              <div className="flex gap-2.5 sm:gap-3 mt-5 sm:mt-5 overflow-x-auto py-2 px-2 pb-1 scrollbar-thin">
                {GALLERY_IMAGES.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Show image ${i + 1}`}
                    className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                      activeIndex === i ? "ring-2 ring-[#1D5FA8] scale-100 opacity-100" : "ring-1 ring-white/10 opacity-50 hover:opacity-80"
                    }`}
                  >
                    <img src={src} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: TECHNICAL SPECIFICATIONS
      ============================================================ */}
      <section className="py-8 sm:py-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span
              className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full mb-4"
              style={{ backgroundColor: `${GREEN}14`, color: GREEN }}
            >
              Specifications
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight" style={{ color: NAVY_DARK }}>
              Technical{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: `linear-gradient(90deg, ${BLUE}, ${NAVY})` }}
              >
                Specifications
              </span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Every number behind the PULSE — engineered for range, safety,
              and everyday reliability.
            </p>
          </div>

          <div className="space-y-10">
                      {specGroups.map((group) => (
                        <div key={group.category}>
                          <h3
                            className="text-sm sm:text-base font-bold uppercase tracking-wide mb-4 pl-1"
                            style={{ color: BLUE }}
                          >
                            {group.category}
                          </h3>
                          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {group.items.map((item, index) => (
                              <div
                                key={index}
                                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 p-1 flex items-center gap-4 hover:-translate-y-0.5"
                              >
                                <div
                                  className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                                  style={{ backgroundColor: `${GREEN}16`, color: GREEN }}
                                >
                                  {item.icon}
                                </div>
                                <div>
                                  <h3 className="font-semibold text-gray-500 text-xs sm:text-sm uppercase tracking-wide">
                                    {item.title}
                                  </h3>
                                  <p
                                    className="font-semibold text-base sm:text-lg text-transparent bg-clip-text mt-1"
                                    style={{
                                      backgroundImage: `linear-gradient(90deg, ${NAVY}, ${BLUE})`,
                                    }}
                                  >
                                    {item.value}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
          
                      {/* Additional features */}
                      <div>
                        <h3
                          className="text-sm sm:text-base font-bold uppercase tracking-wide mb-4 pl-1"
                          style={{ color: BLUE }}
                        >
                          Additional Features
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {additionalFeatures.map((feature) => (
                            <span
                              key={feature}
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-700 shadow-sm"
                            >
                              <ShieldCheck size={16} style={{ color: GREEN }} />
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6: TESTIMONIALS
      ============================================================ */}
      <section className="py-8 sm:py-15 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span
              className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full mb-4"
              style={{ backgroundColor: `${GREEN}14`, color: GREEN }}
            >
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight" style={{ color: NAVY_DARK }}>
              What Our{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: `linear-gradient(90deg, ${BLUE}, ${NAVY})` }}
              >
                Riders
              </span>{" "}
              Say
            </h2>
            <p className="mt-4 text-gray-500 text-lg">
              Real feedback from PULSE owners riding it every day across the
              city.
            </p>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* ============================================================
          SECTION 8: ENQUIRY FORM
      ============================================================ */}
      <section id="enquiry" className="py-8 sm:py-4 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span
                className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full mb-4"
                style={{ backgroundColor: `${NAVY}10`, color: NAVY }}
              >
                Get in Touch
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight" style={{ color: NAVY_DARK }}>
                Have a{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: `linear-gradient(90deg, ${BLUE}, ${NAVY})` }}
                >
                  Question?
                </span>
              </h2>
              <p className="mt-4 text-gray-500 text-lg leading-relaxed">
                Our team is ready to help you find the perfect solution for
                your needs. Fill out the form and we'll get back to you
                within 24 hours.
              </p>

              <div className="space-y-5 mt-10">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${BLUE}12`, color: BLUE }}
                  >
                    <FaPhoneAlt size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Call us</p>
                    <p className="font-semibold text-gray-800">+91 9196598300</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                    <FaEnvelope size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-semibold text-gray-800">info.navgatee@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${NAVY}10`, color: NAVY }}
                  >
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Visit us</p>
                    <p className="font-semibold text-gray-800">Lucknow, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xl">
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white outline-none transition-all duration-300 text-gray-800 placeholder-gray-400 focus:ring-2"
                    style={{ borderColor: undefined }}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      placeholder="Enter your email"
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white outline-none transition-all duration-300 text-gray-800 placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      required
                      placeholder="Enter your phone"
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white outline-none transition-all duration-300 text-gray-800 placeholder-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white outline-none transition-all duration-300 text-gray-800 placeholder-gray-400 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                  style={{ background: `linear-gradient(90deg, ${BLUE}, ${BLUE_DARK})`, boxShadow: `0 10px 25px ${BLUE}33` }}
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 9: FAQ
      ============================================================ */}
      <section className="py-20 sm:py-15 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span
              className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full mb-4"
              style={{ backgroundColor: `${NAVY}10`, color: NAVY }}
            >
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight" style={{ color: NAVY_DARK }}>
              Frequently Asked{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: `linear-gradient(90deg, ${BLUE}, ${NAVY})` }}
              >
                Questions
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((item, idx) => (
              <FaqItem
                key={idx}
                question={item.q}
                answer={item.a}
                isOpen={openFaq === idx}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pulse;
