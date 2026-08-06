import { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBatteryFull,
  FaBolt,
  FaGaugeHigh,
  FaUsers,
} from "react-icons/fa6";

const models = [
  {
    name: "L5-Ultra-Loader",
    segment: "L5 SEGMENT",
    type: "Passenger",
    label: "L5 MODEL",
    image: "/images/l5-loader.png",
    seats: "Closed Body",
    speed: "45 km/h",
    range: "100-110 km",
    charging: "4-5 Hours",
    href: "/l5-ultra-loader",
  },
  {
    name: "L5 Front-Facia",
    segment: "L5 SEGMENT",
    type: "Passenger",
    label: "L5 MODEL",
    image: "/images/l5-front-facia.png",
    seats: "6+1 Seats",
    speed: "45 km/h",
    range: "100-110 km",
    charging: "4-5 Hours",
    href: "/l5-front-facia",
  },
  {
    name: "Vybe",
    segment: "Scooty",
    type: "Passenger",
    label: "COMFORT RIDE",
    image: "/images/double-light.png",
    seats: "2 Seats",
<<<<<<< HEAD
    speed: "80 km/h",
    range: "102 -120 km",
=======
    speed: "25 km/h",
    range: "50 -120 km",
>>>>>>> f613c88c3e46b90f36c270c13e31ac87efc9132c
    charging: "4-5 Hours",
    href: "/indian-scooty/vybe",
  },
  {
    name: "Volt",
    segment: "Scooty",
    type: "Passenger",
    label: "NEW MODEL",
    image: "/images/single-light.png",
    seats: "2 Seats",
<<<<<<< HEAD
    speed: "95 km/h",
    range: "110-120 km",
=======
    speed: "25 km/h",
    range: "50-120 km",
>>>>>>> f613c88c3e46b90f36c270c13e31ac87efc9132c
    charging: "4-5 Hours",
    href: "/indian-scooty/volt",
  },
  {
    name: "Lumo",
    segment: "Scooty",
    type: "Cargo",
    label: "COMFORT RIDE",
    image: "/images/u-light.png",
    seats: "2 Seats",
<<<<<<< HEAD
    speed: "80 km/h",
    range: "100-110 km",
=======
    speed: "25 km/h",
    range: "50-120 km",
>>>>>>> f613c88c3e46b90f36c270c13e31ac87efc9132c
    charging: "4-5 Hours",
    href: "/indian-scooty/lumo",
  },
  {
    name: "L5 ECO 6+1",
    segment: "L5 SEGMENT",
    type: "Passenger",
    label: "L5 MODEL",
    image: "/MODEL L5.png",
    seats: "3+1 Seats",
    speed: "45 km/h",
    range: "90-100 km",
    charging: "4-5 Hours",
    href: "/l5-eco-6-plus-1",
  },
];

function ModelsSlider() {
  const [firstCard, setFirstCard] = useState(0);
  const visibleModels = models;
  const displayedModels = Array.from(
    { length: Math.min(4, visibleModels.length) },
    (_, index) => visibleModels[(firstCard + index) % visibleModels.length],
  );

  const moveCards = (direction) => {
    setFirstCard(
      (current) =>
        (current + direction + visibleModels.length) % visibleModels.length,
    );
  };

  return (
    <section id="products" className="relative overflow-hidden bg-[#F8FBFA] py-10 sm:py-14 lg:py-20">
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,rgba(91,191,67,0.12),transparent_65%)]" />
      <div className="absolute right-[8%] top-20 grid grid-cols-5 gap-2 opacity-50">
        {Array.from({ length: 20 }).map((_, index) => (
          <span key={index} className="h-1.5 w-1.5 rounded-full bg-[#5BBF43]" />
        ))}
      </div>

      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#169B47] px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-white shadow-sm">
            <FaBolt /> Our Top Rated Models
          </p>
          <h2 className="mt-3 text-2xl font-black leading-tight text-[#06152B] sm:text-4xl lg:text-5xl">
            Built for <span className="text-[#169B47]">Performance.</span> Made for India.
          </h2>
          <p className="mt-2 text-sm font-medium text-[#64748B] sm:text-base">
            Explore electric rickshaw models designed for daily earnings and dependable mobility.
          </p>
        </div>

        <div className="mt-5 flex items-center justify-end gap-2 sm:mt-8">
          <SliderButton label="Previous models" onClick={() => moveCards(-1)} icon={FaArrowLeft} />
          <SliderButton label="Next models" onClick={() => moveCards(1)} icon={FaArrowRight} />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {displayedModels.map((model) => (
            <ModelCard key={`${model.name}-${firstCard}`} model={model} />
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 divide-y divide-[#DDE9E0] rounded-2xl border border-[#D8EADF] bg-[#EEF9F1] px-5 py-4 shadow-[0_14px_30px_rgba(6,21,43,0.05)] sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-7">
          <ValueItem icon={FaUsers} title="Trusted by 10,000+ Customers" text="Reliable electric mobility across India." />
          <ValueItem icon={FaBolt} title="Zero Emission" text="Cleaner transport for tomorrow." />
          <ValueItem icon={FaBatteryFull} title="Low Running Cost" text="Save more on every daily trip." />
        </div>
      </div>
    </section>
  );
}

function SliderButton({ label, onClick, icon: Icon }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B7DDBF] bg-white text-[#169B47] transition-colors hover:bg-[#169B47] hover:text-white"
    >
      <Icon />
    </button>
  );
}

function ModelCard({ model }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-[#DDE7E0] bg-white shadow-[0_8px_22px_rgba(6,21,43,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#83C992] hover:shadow-[0_16px_30px_rgba(6,21,43,0.12)]">
      <div className="relative h-44 overflow-hidden border-b border-[#E6EEE9] bg-[#F1F7F2] sm:h-56">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(91,191,67,0.2),transparent_58%)]" />
        <span className="absolute left-3 top-3 rounded bg-[#169B47] px-2 py-1 text-[10px] font-extrabold text-white">
          {model.label}
        </span>
        <span className="absolute right-0 top-0 rounded-bl-lg bg-[#1745A4] px-2.5 py-1.5 text-[10px] font-extrabold text-white">
          {model.segment}
        </span>
        <div className="absolute inset-x-5 bottom-3 top-10 flex items-center justify-center sm:inset-x-6 sm:bottom-4">
          <img
            src={model.image}
            alt={model.name}
            className="block h-full w-full scale-[1.70] object-contain object-center drop-shadow-[0_12px_13px_rgba(6,21,43,0.24)] transition-transform duration-300 group-hover:scale-[1.34]"
          />
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-base font-extrabold text-[#06152B]">{model.name}</h3>
          <span className="inline-flex items-center gap-1 whitespace-nowrap text-[11px] font-bold text-[#169B47]"><FaUsers /> {model.seats}</span>
        </div>
        <div className="mt-3 grid grid-cols-3 divide-x divide-[#E2E8F0] border-y border-[#E2E8F0] py-2.5 text-center">
          <Spec icon={FaGaugeHigh} value={model.speed} />
          <Spec icon={FaBatteryFull} value={model.range} />
          <Spec icon={FaBolt} value={model.charging} />
        </div>
        <a href={model.href} className="mt-3 flex items-center justify-center gap-2 text-xs font-extrabold text-[#169B47] hover:text-[#0C7835]">
          View Details <FaArrowRight />
        </a>
      </div>
    </article>
  );
}

function Spec({ icon: Icon, value }) {
  return <span className="px-1 text-[10px] font-bold leading-tight text-[#4A5568]"><Icon className="mx-auto mb-1 text-[#169B47]" />{value}</span>;
}

function ValueItem({ icon: Icon, title, text }) {
  return (
    <div className="flex items-center gap-3 py-3 sm:px-5 sm:py-1 first:pl-0 last:pr-0">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#169B47] shadow-sm"><Icon /></span>
      <span><strong className="block text-sm text-[#06152B]">{title}</strong><span className="text-xs font-medium text-[#64748B]">{text}</span></span>
    </div>
  );
}

export default ModelsSlider;