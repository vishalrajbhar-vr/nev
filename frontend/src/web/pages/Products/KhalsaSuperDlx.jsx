import React, { useState, useEffect, useRef } from "react";
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
} from "lucide-react";

/* ===================================================================
   SPECS DATA
=================================================================== */
const specs = [
  { icon: <Gauge size={22} />, title: "Engine Power", value: "12 HP" },
  { icon: <Fuel size={22} />, title: "Fuel Type", value: "Diesel" },
  { icon: <Droplets size={22} />, title: "Fuel Tank", value: "10 Litres" },
  { icon: <Cog size={22} />, title: "Transmission", value: "Gear Drive" },
  {
    icon: <Settings size={22} />,
    title: "Cooling System",
    value: "Water Cooled",
  },
  { icon: <Wrench size={22} />, title: "Starting", value: "Self + Manual" },
  { icon: <Weight size={22} />, title: "Machine Weight", value: "350 Kg" },
  { icon: <ShieldCheck size={22} />, title: "Warranty", value: "1 Year" },
];

/* ===================================================================
   TESTIMONIALS DATA
=================================================================== */
const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Muzaffarnagar, UP",
    rating: 5,
    text: "Khalsa Super DLX has transformed my farm operations. The 12 HP engine delivers incredible power, and the water-cooled system ensures it runs smoothly even during long summer days. Highly recommended!",
    initials: "RK",
    color: "blue",
  },
  {
    name: "Amit Singh",
    location: "Meerut, UP",
    rating: 5,
    text: "I've been using this machine for over 6 months now. The fuel efficiency is outstanding — I'm saving nearly 30% on operational costs compared to my old equipment. The dual start feature is a lifesaver.",
    initials: "AS",
    color: "green",
  },
  {
    name: "Suresh Patel",
    location: "Saharanpur, UP",
    rating: 4,
    text: "Built like a tank! The build quality is phenomenal and it handles the toughest jobs with ease. After-sales service has been excellent too. Very happy with my investment in Khalsa Super DLX.",
    initials: "SP",
    color: "amber",
  },
  {
    name: "Vikram Yadav",
    location: "Hapur, UP",
    rating: 5,
    text: "From the moment I saw the machine at the dealership, I knew it was the right choice. The gear drive transmission is so smooth, and the self-start feature is incredibly convenient. Great value for money.",
    initials: "VY",
    color: "purple",
  },
];

/* ===================================================================
   FAQ DATA
=================================================================== */
const faqData = [
  {
    q: "What is the engine power of Khalsa Super DLX?",
    a: "Khalsa Super DLX is equipped with a powerful 12 HP diesel engine, delivering excellent performance for heavy-duty agricultural and industrial applications.",
  },
  {
    q: "What type of fuel does it use?",
    a: "It runs on diesel fuel and comes with a 10-litre fuel tank capacity, ensuring longer operation times without frequent refueling.",
  },
  {
    q: "Is the cooling system effective for long hours of use?",
    a: "Yes, the water-cooled cooling system ensures optimal engine temperature even during prolonged use, enhancing durability and performance.",
  },
  {
    q: "What is the warranty period?",
    a: "Khalsa Super DLX comes with a comprehensive 1-year warranty covering manufacturing defects and providing peace of mind.",
  },
  {
    q: "Can it be started manually if the battery is down?",
    a: "Absolutely! It features both self-start and manual start options, ensuring reliability in all conditions.",
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
      className="relative group bg-white/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-blue-200/50"
    >
      <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 text-[#2346b7] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
          {icon}
        </div>
        <span className="text-3xl sm:text-4xl font-extrabold text-gray-900 tabular-nums">
          {count}
          {suffix}
        </span>
        <span className="mt-2 text-sm sm:text-base font-medium text-gray-500">
          {label}
        </span>
      </div>
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
    amber: {
      bg: "from-amber-50 to-amber-100/50",
      text: "text-amber-600",
      border: "border-amber-200/30",
    },
    purple: {
      bg: "from-purple-50 to-purple-100/50",
      text: "text-purple-600",
      border: "border-purple-200/30",
    },
  };
  const c = colors[color] || colors.blue;

  return (
    <div
      className={`relative group bg-gradient-to-br ${c.bg} backdrop-blur-sm rounded-2xl p-6 sm:p-8 border ${c.border} hover:shadow-xl transition-all duration-500 hover:-translate-y-1`}
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
    amber: {
      bg: "from-amber-50 to-amber-100/50",
      text: "text-amber-600",
      dot: "bg-amber-600",
    },
    purple: {
      bg: "from-purple-50 to-purple-100/50",
      text: "text-purple-600",
      dot: "bg-purple-600",
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
              className={star <= t.rating ? "text-amber-400" : "text-gray-200"}
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
            <div className="absolute inset-0 flex items-center justify-center" style={{ transform: "translateZ(40px)" }}>
              <div className="relative w-[80%] h-[80%] flex items-center justify-center">
                <img
                  src="https://tse4.mm.bing.net/th/id/OIP.XuDpxrf3i8Q_rja0C4f48wHaEK?r=0&pid=Api&h=220&P=0"
                  alt="Khalsa Super DLX"
                  className="w-full h-full object-contain p-4 drop-shadow-2xl"
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

            {/* Floating Feature Badges */}
            <div
              className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
              style={{ transform: "translateZ(60px)" }}
            >
              <span className="flex items-center gap-1">
                <FaStar size={10} /> 12 HP
              </span>
            </div>

            <div
              className="absolute bottom-4 left-4 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
              style={{ transform: "translateZ(50px)" }}
            >
              <span className="flex items-center gap-1">
                <FaLeaf size={10} /> Fuel Efficient
              </span>
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

        {/* Floating Price Tag */}
        <div
          className="absolute -bottom-3 -right-3 bg-gradient-to-br from-[#2346b7] to-[#1a3a9e] text-white px-5 py-3 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-default"
          style={{ transform: "translateZ(80px)" }}
        >
          <p className="text-xs opacity-80">Starting from</p>
          <p className="text-xl font-bold flex items-center gap-1">
            <FaRupeeSign size={14} /> 1,25,000
          </p>
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
const KhalsaSuperDlx = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your enquiry! We will get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      {/* ============================================================
          SECTION 1: HERO
      ============================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        {/* Decorative blobs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-green-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-amber-200/20 to-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl animate-pulse" />

        {/* Geometric shapes */}
        <div className="absolute top-20 right-[15%] w-4 h-4 bg-[#2346b7]/10 rounded-full hidden lg:block" />
        <div className="absolute bottom-32 left-[10%] w-6 h-6 bg-green-400/10 rounded-lg rotate-45 hidden lg:block" />
        <div className="absolute top-1/2 right-[8%] w-3 h-16 bg-amber-400/10 rounded-full rotate-12 hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-18">
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
                <span className="text-[#2346b7] font-semibold">
                  Khalsa Super DLX
                </span>
              </nav>

              {/* Badge */}
              {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200/50 rounded-full text-green-700 text-sm font-medium mb-6">
                <Sparkles size={16} />
                <span>New Launch 2026</span>
              </div> */}

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                Khalsa{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2346b7] to-[#5BBF43]">
                  Super DLX
                </span>
              </h1>

              <div className="w-24 h-1.5 bg-gradient-to-r from-[#2346b7] to-[#5BBF43] rounded-full mt-5 mb-6" />

              <p className="text-lg sm:text-xl text-gray-600 max-w-xl leading-relaxed">
                Power meets performance. The all-new Khalsa Super DLX is
                engineered to deliver unmatched reliability, efficiency, and
                durability for the toughest tasks.
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
                  href="#enquiry"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#2346b7] font-semibold rounded-xl border-2 border-blue-100 hover:border-[#2346b7] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <FaPhoneAlt size={14} />
                  <span>Enquire Now</span>
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-6 mt-10 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" size={14} />1 Year
                  Warranty
                </span>
                <span className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" size={14} />
                  Free Installation
                </span>
                <span className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" size={14} />
                  PAN India Service
                </span>
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
      <section className="relative -mt-10 sm:-mt-16 z-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
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
              Engineered for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2346b7] to-[#5BBF43]">
                Excellence
              </span>
            </h2>
            <p className="mt-4 text-gray-500 text-lg">
              Every component is precision-crafted to deliver outstanding
              performance in the field.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Zap size={28} />}
              title="12 HP Engine"
              desc="Powerful 12 HP diesel engine built for heavy-duty performance and long-lasting reliability."
              color="blue"
            />
            <FeatureCard
              icon={<Thermometer size={28} />}
              title="Water Cooled"
              desc="Advanced water-cooling system maintains optimal engine temperature even during extended use."
              color="green"
            />
            <FeatureCard
              icon={<Battery size={28} />}
              title="Dual Start"
              desc="Self-start and manual start options ensure hassle-free operation in any situation."
              color="amber"
            />
            <FeatureCard
              icon={<Wind size={28} />}
              title="Gear Drive"
              desc="Smooth and efficient gear drive transmission delivers optimal torque and control."
              color="purple"
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: TECHNICAL SPECS (ENHANCED)
      ============================================================ */}
      <section className="py-8 sm:py-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 bg-green-50 text-green-600 text-sm font-semibold rounded-full mb-4">
              Specifications
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Technical{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2346b7] to-[#5BBF43]">
                Specifications
              </span>
            </h2>
            <p className="mt-4 text-gray-500 text-lg">
              Designed with premium quality components to deliver powerful
              performance, durability, and efficiency.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            {specs.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-blue-200/50 shadow-sm hover:shadow-xl transition-all duration-500 p-5 sm:p-6 flex items-center justify-between hover:-translate-y-0.5"
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
          SECTION 5: WHY CHOOSE KHALSA SUPER DLX
      ============================================================ */}
      <section className="py-8 sm:py-4 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-600 text-sm font-semibold rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Built{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2346b7] to-[#5BBF43]">
                Different
              </span>
            </h2>
            <p className="mt-4 text-gray-500 text-lg">
              What sets Khalsa Super DLX apart from the competition.
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
                Superior Durability
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Built with high-grade materials and rigorous quality testing to
                withstand the toughest working conditions year after year.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-gradient-to-b from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:border-green-200/30 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#5BBF43] to-green-400 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 text-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaLeaf size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Fuel Efficient
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Optimized engine design delivers exceptional fuel economy,
                reducing operational costs while maximizing productivity.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-gradient-to-b from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:border-amber-200/30 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaAward size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Trusted Quality
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Backed by years of engineering expertise and thousands of
                satisfied customers across India. Quality you can rely on.
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
            <span className="inline-block px-4 py-1.5 bg-purple-50 text-purple-600 text-sm font-semibold rounded-full mb-4">
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
              Hear from the farmers and operators who trust Khalsa Super DLX
              for their toughest jobs.
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
                    <p className="font-semibold text-gray-800">1800-121-0259</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                    <FaEnvelope size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-semibold text-gray-800">info@nev.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Visit us</p>
                    <p className="font-semibold text-gray-800">
                      Muzaffarnagar, India
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

export default KhalsaSuperDlx;
