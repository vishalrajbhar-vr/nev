import React, { useState, useEffect, useRef } from "react";
import { submitForm } from "../../api";
import {
  FaHome,
  FaChevronRight,
  FaChevronDown,
  FaDownload,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaStar,
  FaRupeeSign,
  FaTools,
  FaLeaf,
  FaCheckCircle,
  FaShieldAlt,
  FaTrophy,
  FaHeadset,
  FaAward,
} from "react-icons/fa";
import {
  Gauge,
  Fuel,
  Cog,
  ShieldCheck,
  Weight,
  Droplets,
  Wrench,
  Settings,
  Zap,
  Wind,
  Battery,
  Thermometer,
  ArrowRight,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  Truck,
  Clock,
  HeartHandshake,
  ImageIcon,
  Users,
  CircleGauge,
  ChartNoAxesCombined,
  Key,
  Ruler,
  MoveVertical,
  Mountain,
  Sun,
  CircleDot,
  BatteryCharging,
  Disc,
} from "lucide-react";

import { FaChevronLeft, FaShareAlt } from "react-icons/fa";

const GALLERY_IMAGES = ["/images/double-light.png"];

/* ===================================================================
   SPECS DATA
=================================================================== */
const specs = [
  { icon: <Cog size={20} />, title: "Motor Type", value: "BLDC Hub Motor" },
  { icon: <Zap size={20} />, title: "Motor Power", value: "250 Watt" },
  {
    icon: <BatteryCharging size={20} />,
    title: "Battery Volt",
    value: "40V / 60V",
  },
  { icon: <Gauge size={20} />, title: "Range", value: "50 - 120 KM*" },
  { icon: <Settings size={20} />, title: "Transmission", value: "Automatic" },
  { icon: <Key size={20} />, title: "Start", value: "Keyless Self Start" },
  { icon: <Weight size={20} />, title: "Net Weight", value: "80 Kgs" },
  { icon: <Users size={20} />, title: "Carrying Capacity", value: "150 Kg*" },
  {
    icon: <Ruler size={20} />,
    title: "Length x Width x Height",
    value: "1700 x 650 x 1100 mm",
  },
  {
    icon: <MoveVertical size={20} />,
    title: "Ground Clearance",
    value: "175 mm",
  },
  {
    icon: <BatteryCharging size={20} />,
    title: "Battery Type",
    value: "Lead-Acid / Lithium",
  },
  { icon: <Zap size={20} />, title: "Battery Capacity", value: "KWH*" },
  { icon: <Mountain size={20} />, title: "Gradeability", value: "12°" },
  { icon: <Sun size={20} />, title: "Head Lights", value: "LED" },
  {
    icon: <ChartNoAxesCombined size={20} />,
    title: "Top Speed",
    value: "25 KMPH",
  },
  {
    icon: <CircleDot size={20} />,
    title: "Tyre Size",
    value: "Front 3.00-12 / Rear 3.00-12",
  },
  { icon: <CircleDot size={20} />, title: "Tyre Type", value: "Tubeless" },
  { icon: <CircleDot size={20} />, title: "Wheel Type", value: "Alloy" },
  {
    icon: <Disc size={20} />,
    title: "Front & Rear Brake",
    value: "Front Disc & Rear Disc",
  },
];

/* ===================================================================
   TESTIMONIALS DATA
=================================================================== */
const testimonials = [
  {
    name: "Rajesh Kumar",
    location: ", UP",
    rating: 5,
    text: "The NEV Vybe has completely changed my daily commute. It offers a smooth ride, impressive battery backup, and is very comfortable even on longer journeys. Highly recommended!",
    initials: "RK",
    color: "blue",
  },
  {
    name: "Amit Singh",
    location: "Meerut, UP",
    rating: 5,
    text: "I've been riding the NEV Vybe for over six months now. The charging cost is minimal, the performance is excellent, and maintenance is almost effortless. It's a great investment.",
    initials: "AS",
    color: "green",
  },
  {
    name: "Suresh Patel",
    location: "Saharanpur, UP",
    rating: 4,
    text: "The build quality is solid, and the scooter feels stable on every ride. Its stylish design, comfortable seating, and reliable performance make it perfect for everyday use.",
    initials: "SP",
    color: "blue",
  },
  {
    name: "Vikram Yadav",
    location: "Hapur, UP",
    rating: 5,
    text: "I chose the NEV Vybe because of its modern features and sleek design. The acceleration is smooth, the battery range is impressive, and it's ideal for city commuting. Excellent value for money.",
    initials: "VY",
    color: "green",
  },
];

/* ===================================================================
   FAQ DATA
=================================================================== */
const faqData = [
  {
    q: "What is the range of the NEV Vybe on a full charge?",
    a: "The NEV Vybe delivers a reliable range of 60-80 km on a single full charge, making it ideal for daily city commutes.",
  },
  {
    q: "How long does it take to fully charge the battery?",
    a: "The battery can be fully charged within 4-5 hours using a standard charging setup, ensuring it is ready for your next ride.",
  },
  {
    q: "What is the warranty coverage for the Vybe?",
    a: "NEV Vybe comes with a 1+1 year warranty on the electric drivetrain and battery, offering confidence in long-term reliability.",
  },
  {
    q: "Is the Vybe suitable for two passengers?",
    a: "Yes, the NEV Vybe is designed with comfortable seating for two passengers and offers a smooth ride for both the rider and pillion.",
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
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [startOnView, hasStarted]);

  return [count, ref];
};

/* ===================================================================
   COUNTER STAT CARD
=================================================================== */
const StatCard = ({ icon, value, suffix, label }) => {
  const [count, ref] = useCountUp(value, 2200, true);
  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-4 sm:p-5 shadow-2xl shadow-slate-200/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#2346b7] via-[#5BBF43] to-[#1a3a9e]" />
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="flex items-center justify-center rounded-3xl bg-[#2346b7]/10 p-4 text-[#2346b7] shadow-sm shadow-[#2346b7]/10 transition-transform duration-300 group-hover:scale-105">
          {icon}
        </div>
        <div className="mt-6 flex items-end gap-2">
          <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tabular-nums">
            {count}
          </span>
          <span className="text-lg sm:text-2xl font-semibold text-[#2346b7]">
            {suffix}
          </span>
        </div>
        <span className="mt-4 text-sm sm:text-base font-medium text-slate-500 max-w-xs">
          {label}
        </span>
      </div>
      <div className="absolute -bottom-4 left-1/2 h-2 w-24 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#2346b7] to-[#5BBF43] opacity-30 blur-xl" />
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
      text: "text-[#2346b7]",
      border: "border-blue-200/30",
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
          className={`shrink-0 text-[#2346b7] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
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
   TESTIMONIAL SLIDER (AUTO) WITH SLIDE ANIMATION
=================================================================== */
const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const [slideDir, setSlideDir] = useState("right"); // 'right' or 'left'
  const [animating, setAnimating] = useState(false);
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
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
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
    blue: {
      bg: "from-blue-50 to-blue-100/50",
      text: "text-[#2346b7]",
      dot: "bg-[#2346b7]",
    },
    green: {
      bg: "from-green-50 to-green-100/50",
      text: "text-green-600",
      dot: "bg-green-600",
    },
  };
  const c = colorMap[t.color] || colorMap.blue;

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Slide Animation Styles */}
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(80px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-80px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .slide-in-right {
          animation: slideInRight 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .slide-in-left {
          animation: slideInLeft 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>

      {/* Main Card */}
      <div
        key={current + "-" + slideDir}
        className={`relative bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-10 md:p-12 overflow-hidden ${
          slideDir === "right" ? "slide-in-right" : "slide-in-left"
        }`}
      >
        {/* Decorative quote mark */}
        <div className="absolute -top-6 -left-4 text-8xl leading-none text-gray-100 font-serif select-none">
          &ldquo;
        </div>

        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-6 relative z-10">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              size={18}
              className={star <= t.rating ? "text-[#5BBF43]" : "text-gray-200"}
            />
          ))}
          <span className="ml-3 text-sm font-medium text-gray-400">
            {t.rating}.0
          </span>
        </div>

        {/* Quote */}
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed relative z-10 mb-8">
          &ldquo;{t.text}&rdquo;
        </p>

        {/* Author */}
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

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-6 mt-8">
        {/* Prev / Next Buttons */}
        <button
          onClick={goPrev}
          className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-[#2346b7] hover:text-[#2346b7] hover:shadow-md transition-all duration-300"
          aria-label="Previous testimonial"
        >
          <FaChevronRight size={14} className="rotate-180" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`transition-all duration-500 rounded-full ${
                idx === current
                  ? `${c.dot} w-8 h-2.5`
                  : "bg-gray-200 w-2.5 h-2.5 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={goNext}
          className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-[#2346b7] hover:text-[#2346b7] hover:shadow-md transition-all duration-300"
          aria-label="Next testimonial"
        >
          <FaChevronRight size={14} />
        </button>
      </div>
    </div>
  );
};

/* ===================================================================
   PRODUCT ANIMATION - 3D Interactive Product Showcase
=================================================================== */
const ProductAnimation = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const mouseXRef = useRef(0);
  const mouseYRef = useRef(0);
  const targetRotX = useRef(0);
  const targetRotY = useRef(0);

  // Smooth rotation follow mouse
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
      // Smooth interpolation
      targetRotY.current +=
        (mouseXRef.current * 15 - targetRotY.current) * 0.08;
      targetRotX.current +=
        (-mouseYRef.current * 15 - targetRotX.current) * 0.08;
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

  // Auto-rotation when not hovered
  const autoRotateY = isHovered ? rotation.y : rotation.y + 0.3;

  return (
    <div className="relative" ref={containerRef}>
      {/* Glow background */}
      <div className="absolute -inset-4 bg-gradient-to-br from-blue-100/40 to-green-100/40 rounded-3xl blur-2xl" />

      {/* Main card */}
      <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/60 shadow-2xl overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full opacity-20"
              style={{
                backgroundColor: i % 2 === 0 ? "#2346b7" : "#5BBF43",
                left: `${15 + i * 18}%`,
                top: `${10 + (i % 3) * 35}%`,
                animation: `floatParticle ${3 + i * 0.8}s ease-in-out infinite`,
                animationDelay: `${i * 0.6}s`,
              }}
            />
          ))}
        </div>

        {/* 3D Product Container */}
        <div
          className="aspect-[4/3] bg-gradient-to-br from-gray-50 via-blue-50/30 to-green-50/30 rounded-2xl flex items-center justify-center overflow-hidden"
          style={{
            perspective: "1000px",
          }}
        >
          {/* Rotating Product Scene */}
          <div
            className="relative w-full h-full flex items-center justify-center transition-transform duration-75"
            style={{
              transform: `rotateY(${autoRotateY}deg) rotateX(${rotation.x}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Main Product Image */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ transform: "translateZ(40px)" }}
            >
              <div className="relative w-[135%] h-[135%] flex items-center justify-center">
                <img
                  src="/images/double-light.png"
                  alt="NEV Vybe Electric Scooter"
                  className="w-[120%] h-[120%] -mt-15 object-contain p-4 drop-shadow-2xl"
                  style={{
                    filter: "drop-shadow(0 20px 30px rgba(35, 70, 183, 0.25))",
                  }}
                />
                {/* Shine overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    transform: "translateZ(5px)",
                  }}
                />
              </div>
            </div>

            {/* Rotating rings */}
            <div
              className="absolute w-[110%] h-[110%] border border-blue-200/30 rounded-full"
              style={{
                transform: "translateZ(-10px) rotateX(60deg)",
                animation: "spinRing 8s linear infinite",
              }}
            />
            <div
              className="absolute w-[120%] h-[120%] border border-green-200/20 rounded-full"
              style={{
                transform: "translateZ(-20px) rotateX(60deg)",
                animation: "spinRing 12s linear infinite reverse",
              }}
            />
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes spinRing {
          from { transform: translateZ(-10px) rotateX(60deg) rotateZ(0deg); }
          to { transform: translateZ(-10px) rotateX(60deg) rotateZ(360deg); }
        }
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.2; }
          50% { transform: translateY(-20px) scale(1.5); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

/* ===================================================================
   MAIN COMPONENT
=================================================================== */
const Vybe = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  /* gallery state now lives inside the component, where hooks belong */
  const [activeIndex, setActiveIndex] = useState(0);
  const total = GALLERY_IMAGES.length;

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(autoSlide);
  }, [total]);

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitForm("product", { ...formData, product: "Vybe" });
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
        {/* Decorative blobs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-green-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#5BBF43]/10 to-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl animate-pulse" />

        {/* Geometric shapes */}
        <div className="absolute top-20 right-[15%] w-4 h-4 bg-[#2346b7]/10 rounded-full hidden lg:block" />
        <div className="absolute bottom-32 left-[10%] w-6 h-6 bg-green-400/10 rounded-lg rotate-45 hidden lg:block" />
        <div className="absolute top-1/2 right-[8%] w-3 h-16 bg-green-400/10 rounded-full rotate-12 hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="w-full lg:w-[55%]">
              {/* Breadcrumb */}
              <nav className="flex flex-wrap items-center gap-2 text-sm sm:text-base text-gray-500 mb-6">
                <FaHome className="text-[#2346b7]" size={14} />
                <span>Home</span>
                <FaChevronRight size={10} className="text-gray-300" />
                <span>Products</span>
                <FaChevronRight size={10} className="text-gray-300" />
                <span>Indian Scooty</span>
                <FaChevronRight size={10} className="text-gray-300" />
                <span className="text-[#2346b7] font-semibold">
                  Vybe
                </span>
              </nav>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2346b7] to-[#5BBF43]">
                  Vybe
                </span>
              </h1>

              <div className="w-24 h-1.5 bg-gradient-to-r from-[#2346b7] to-[#5BBF43] rounded-full mt-5 mb-6" />

              <p className="text-lg sm:text-xl text-gray-600 max-w-xl leading-relaxed">
                Power your journey with confidence. The all-new NEV Vybe
                delivers efficient electric performance, smooth handling, and
                dependable reliability for every road.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#2346b7] to-[#1a3a9e] text-white font-semibold rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <FaDownload size={16} />
                  <span>Download Brochure</span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href="tel:18001210259"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#2346b7] font-semibold rounded-xl border-2 border-blue-100 hover:border-[#2346b7] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <FaPhoneAlt size={14} />
                  <span>Enquire Now</span>
                </a>
              </div>
            </div>

            {/* Right - Advanced 3D Animated Product Visual */}
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
          <StatCard
            icon={<Truck size={26} />}
            value={500}
            suffix="+"
            label="Units Sold"
          />
          <StatCard
            icon={<FaStar size={24} />}
            value={98}
            suffix="%"
            label="Satisfaction Rate"
          />
          <StatCard
            icon={<FaShieldAlt size={22} />}
            value={1}
            suffix=" Year"
            label="Warranty"
          />
          <StatCard
            icon={<FaHeadset size={22} />}
            value={50}
            suffix="+"
            label="Service Centers"
          />
        </div>
      </section>

      {/* ============================================================
          SECTION 3: KEY HIGHLIGHTS / FEATURES
      ============================================================ */}
      <section className="py-8 sm:py-15 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-[#2346b7] text-sm font-semibold rounded-full mb-4">
              Key Highlights
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Designed for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2346b7] to-[#5BBF43]">
                Everyday Mobility
              </span>
            </h2>

            <p className="mt-4 text-gray-500 text-lg">
              Experience smart electric performance, modern design, and
              dependable comfort with every ride.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Zap size={28} />}
              title="Powerful Electric Motor"
              desc="Delivers smooth acceleration and reliable performance for effortless city commuting."
              color="blue"
            />

            <FeatureCard
              icon={<Battery size={28} />}
              title="Long Battery Range"
              desc="High-performance battery provides extended range with efficient power consumption."
              color="green"
            />

            <FeatureCard
              icon={<Thermometer size={28} />}
              title="Fast Charging"
              desc="Recharge quickly and get back on the road with minimal waiting time."
              color="blue"
            />

            <FeatureCard
              icon={<Wind size={28} />}
              title="Smooth & Comfortable"
              desc="Premium suspension and ergonomic seating ensure a stable and comfortable riding experience."
              color="green"
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION: PRODUCT GALLERY (dark panel with slider)
      ============================================================ */}
      <section className="relative overflow-hidden">
        {/* ================= AMBIENT GLOW ================= */}

        <div className="absolute -top-32 -left-20 w-72 h-72 bg-[#5BBF43]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#2346b7]/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-10 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-center">
            {/* =====================================================
                LEFT — PRODUCT INFO
            ===================================================== */}

            <div className="text-center lg:text-left">
              {/* segment badge */}
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-md sm:text-sm font-semibold text-gray-500 bg-green-400/10 border border-black/15 backdrop-blur-sm">
                Scooty
              </span>

              {/* title */}
              <h2 className="mt-5 text-2xl sm:text-4xl lg:text-[25px] font-bold leading-tight">
                <span className="text-black">Vybe</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5BBF43] to-[#8be27a]">
                  Built for Comfort, Powered by Innovation
                </span>
              </h2>

              {/* description */}
              <p className="mt-5 text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Experience next-generation mobility with the NEV Vybe — a
                stylish, high-performance electric scooter designed for everyday
                commuting. Enjoy smooth rides, exceptional comfort, impressive
                range, and low maintenance, making every journey efficient,
                reliable, and eco-friendly.
              </p>

              {/* highlight tags */}
              <div className="flex Dream big work hard tomorrow flex-wrap justify-center lg:justify-start gap-2.5 mt-6">
                {[
                  "Navigate Smarter",
                  "Drive Greener",
                  "Choose Nev Vybe",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-gray-600 bg-white/5 border border-gray-400 hover:border-green-600/50 hover:text-green-400 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA row */}
              <div className="flex flex-col xs:flex-row flex-wrap justify-center lg:justify-start items-center gap-3 mt-8">
                <a
                  href="tel:18001210259"
                  className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm sm:text-base text-[#0B1220] bg-green-400 hover:bg-green-500 shadow-lg shadow-[#5BBF43]/20 hover:shadow-[#5BBF43]/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <FaPhoneAlt size={13} />
                  Get Quote
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                <div className="flex sm:flex-row items-center md:gap-3 gap-1 border border-gray-400 rounded-xl py-4 px-5 mt-8 mx-auto lg:mx-0">
                  <CircleGauge className="text-green-500" size={25} />
                  <div className="w-full sm:w-auto text-center sm:text-left">
                    <h1 className="text-xl font-bold">50 - 120</h1>
                    <p className="text-md font-semibold">KM Range</p>
                  </div>
                </div>
                <div className="flex  sm:flex-row gap-5 items-center  border border-gray-400 rounded-xl py-4 px-5 mt-8 mx-auto lg:mx-0">
                  <ChartNoAxesCombined className="text-green-500" size={25} />
                  <div className="w-full sm:w-auto text-center sm:text-left">
                    <h1 className="text-xl font-bold">25</h1>
                    <p className="text-md font-semibold">KM/H</p>
                  </div>
                </div>
                <div className="flex sm:flex-row gap-5 items-center  border border-gray-400 rounded-xl py-4 px-5 mt-8 mx-auto lg:mx-0">
                  <Users className="text-green-500" size={25} />
                  <div className="w-full sm:w-auto text-center sm:text-left">
                    <h1 className="text-xl font-bold">2</h1>
                    <p className="text-md font-semibold">SEATER</p>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================================
                RIGHT — IMAGE GALLERY
            ===================================================== */}

            <div className="border border-gray-400 rounded-3xl px-2 py-3">
              {/* main viewer */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 aspect-[4/3] sm:aspect-[16/11]">
                {/* sliding track */}
                <div
                  className="flex items-center justify-center py-2 -mt-18 h-[140%] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {GALLERY_IMAGES.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={`Vybe view ${i + 1}`}
                      className="h-[110%] w-[110%] -mt-15  flex-shrink-0 object-contain"
                    />
                  ))}
                </div>

                {/* counter badge */}
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white bg-black/40   border border-white/10">
                  {activeIndex + 1} / {total}
                </span>

                {/* prev arrow */}
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous image"
                  className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 text-white flex items-center justify-center hover:bg-[#5BBF43] hover:border-[#5BBF43] transition-all duration-300"
                >
                  <FaChevronLeft size={14} />
                </button>

                {/* next arrow */}
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next image"
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 text-white flex items-center justify-center hover:bg-[#5BBF43] hover:border-[#5BBF43] transition-all duration-300"
                >
                  <FaChevronRight size={14} />
                </button>
              </div>

              {/* thumbnail strip */}
              <div className="flex gap-2.5 sm:gap-3 mt-5 sm:mt-5 overflow-x-auto py-2 px-2 pb-1 scrollbar-thin">
                {GALLERY_IMAGES.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Show image ${i + 1}`}
                    className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                      activeIndex === i
                        ? "ring-2 ring-[#5BBF43] scale-100 opacity-100"
                        : "ring-1 ring-white/10 opacity-50 hover:opacity-80"
                    }`}
                  >
                    <img
                      src={src}
                      alt={`Thumbnail ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: TECHNICAL SPECS (ENHANCED)
      ============================================================ */}
      <section className="py-8 sm:py-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block px-4 py-1.5 bg-green-50 text-green-600 text-sm font-semibold rounded-full mb-4">
              Specifications
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Technical{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2346b7] to-[#5BBF43]">
                Specifications
              </span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Designed with premium quality components to deliver powerful
              performance, durability, and efficiency.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            {specs.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-blue-200/50 shadow-sm hover:shadow-xl transition-all duration-500 p-3 sm:p-2 flex items-center justify-between hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 text-[#2346b7] flex items-center justify-center group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-gray-700 text-sm sm:text-base">
                    {item.title}
                  </h3>
                </div>
                <p className="font-bold text-base sm:text-lg text-gray-900 bg-gradient-to-r from-[#2346b7] to-[#1a3a9e] bg-clip-text text-transparent">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5: WHY CHOOSE Navgatee Electric
      ============================================================ */}
      <section className="py-8 sm:py-4 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Built{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2346b7] to-[#5BBF43]">
                Different
              </span>
            </h2>
            <p className="mt-4 text-gray-500 text-lg">
              What sets Navgatee Electric apart from the competition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative bg-gradient-to-b from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:border-blue-200/30 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2346b7] to-blue-400 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 text-[#2346b7] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaTrophy size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Stylish & Comfortable
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Designed with a modern look, spacious seating, and ergonomic
                comfort to make every ride smooth and enjoyable.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-gradient-to-b from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:border-green-200/30 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#5BBF43] to-green-400 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 text-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaLeaf size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Eco-Friendly Performance
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Powered by an efficient electric motor that delivers zero
                emissions, low running costs, and a cleaner, greener ride every
                day.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-gradient-to-b from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:border-blue-200/30 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-blue-300 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 text-blue-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaAward size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Reliable Battery & Range
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Equipped with a dependable battery system that offers excellent
                range, fast charging support, and consistent performance for
                daily commuting.
              </p>
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
            <span className="inline-block px-4 py-1.5 bg-green-50 text-green-600 text-sm font-semibold rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              What Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2346b7] to-[#5BBF43]">
                Customers
              </span>{" "}
              Say
            </h2>
            <p className="mt-4 text-gray-500 text-lg">
              Hear from the farmers and operators who trust Navgatee Electric for
              their toughest jobs.
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
            {/* Left - Info */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-[#2346b7] text-sm font-semibold rounded-full mb-4">
                Get in Touch
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                Have a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2346b7] to-[#5BBF43]">
                  Question?
                </span>
              </h2>
              <p className="mt-4 text-gray-500 text-lg leading-relaxed">
                Our team is ready to help you find the perfect solution for your
                needs. Fill out the form and we'll get back to you within 24
                hours.
              </p>

              <div className="space-y-5 mt-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2346b7] flex items-center justify-center shrink-0">
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
                    <p className="font-semibold text-gray-800">
                      info.navgatee@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2346b7] flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Visit us</p>
                    <p className="font-semibold text-gray-800">
                      Lucknow, India.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xl">
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white focus:border-[#2346b7] focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-300 text-gray-800 placeholder-gray-400"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      placeholder="Enter your email"
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white focus:border-[#2346b7] focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-300 text-gray-800 placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      required
                      placeholder="Enter your phone"
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white focus:border-[#2346b7] focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-300 text-gray-800 placeholder-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white focus:border-[#2346b7] focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-300 text-gray-800 placeholder-gray-400 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#2346b7] to-[#1a3a9e] text-white font-bold rounded-2xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 hover:-translate-y-0.5 transition-all duration-300"
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
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-[#2346b7] text-sm font-semibold rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2346b7] to-[#5BBF43]">
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

export default Vybe;
