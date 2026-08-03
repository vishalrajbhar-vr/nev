import { useState } from "react";
import { FaArrowRight, FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

function QuickRequest() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="quick-request" className="relative overflow-hidden bg-[#182943] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero_rickshaw_fullscene.jpg')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,35,65,0.94)_0%,rgba(35,56,88,0.88)_48%,rgba(35,56,88,0.38)_100%)]" />

      <div className="relative mx-auto min-h-[500px] max-w-[1440px] px-5 py-10 sm:min-h-[620px] sm:px-8 sm:py-14 lg:min-h-[590px] lg:px-16 lg:py-16">
        <div className="max-w-[560px]">
          <span className="inline-block skew-x-[-14deg] bg-white px-7 py-2 text-sm font-bold text-[#29456F] shadow-sm">
            <span className="inline-block skew-x-[14deg]">DRIVE CHANGE. DRIVE ELECTRIC.</span>
          </span>

          <h2 className="mt-10 max-w-[500px] text-3xl font-black leading-[1.08] sm:text-4xl lg:text-[46px]">
            NEV Electric
            <span className="block">Driving the Future of</span>
            <span className="block">Sustainable Mobility</span>
          </h2>
          <p className="mt-4 max-w-[500px] text-sm font-medium leading-5 text-white/85 sm:text-[15px]">
            Navgatee Automobiles is driven by a vision to redefine the future of
            mobility through innovation, quality and sustainability. We deliver
            reliable electric mobility solutions for everyday journeys.
          </p>
        </div>

        <div className="relative mt-10 w-full rounded-lg bg-white px-4 py-4 text-[#29456F] shadow-[0_-6px_24px_rgba(4,18,40,0.14)] sm:px-7 sm:skew-x-[-4deg] lg:absolute lg:bottom-6 lg:left-[17%] lg:mt-0 lg:w-[min(900px,calc(100%-4rem))] lg:rounded-none lg:px-10 lg:skew-x-[-12deg]">
          <div className="lg:skew-x-[12deg]">
            {submitted ? (
              <div className="flex items-center gap-3 py-2 text-sm font-bold sm:text-base">
                <FaCheckCircle className="shrink-0 text-[#0AA451]" />
                Thanks! Our EV expert will call you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-5">
                <div className="sm:min-w-[150px]">
                  <p className="mb-2 text-base font-bold italic">Request A Call Back</p>
                  <label className="sr-only" htmlFor="quick-name">Full Name</label>
                  <input id="quick-name" required placeholder="Full Name" className="w-full border-b border-[#9AA5B5] bg-transparent px-1 py-2 text-sm outline-none placeholder:text-[#6F7A8B] focus:border-[#0AA451]" />
                </div>
                <div className="sm:flex-1">
                  <label className="sr-only" htmlFor="quick-email">Email Id</label>
                  <input id="quick-email" type="email" required placeholder="Email Id" className="w-full border-b border-[#9AA5B5] bg-transparent px-1 py-2 text-sm outline-none placeholder:text-[#6F7A8B] focus:border-[#0AA451]" />
                </div>
                <div className="sm:flex-1">
                  <label className="sr-only" htmlFor="quick-phone">Mobile Number</label>
                  <input id="quick-phone" type="tel" required placeholder="Mobile Number" className="w-full border-b border-[#9AA5B5] bg-transparent px-1 py-2 text-sm outline-none placeholder:text-[#6F7A8B] focus:border-[#0AA451]" />
                </div>
                <button type="submit" className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-sm bg-[#0AA451] px-8 text-sm font-extrabold text-white transition-colors hover:bg-[#078741] sm:w-auto">
                  Submit <FaArrowRight />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="absolute bottom-10 right-8 hidden items-center gap-2 text-sm font-bold text-white/80 lg:flex">
          <FaPhoneAlt className="text-[#65D38D]" /> Quick support from our EV team
        </div>
      </div>
    </section>
  );
}

export default QuickRequest;