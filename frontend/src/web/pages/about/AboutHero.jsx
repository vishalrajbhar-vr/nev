import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white py-2 lg:py-4">

      {/* ================= Background Glow ================= */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute -top-40 -left-32 w-[450px] h-[450px] rounded-full bg-[#5BBF43]/20 blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute -bottom-44 right-0 w-[500px] h-[500px] rounded-full bg-[#293F8F]/20 blur-[150px]"
      />

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-6 items-center">

          {/* ================= LEFT ================= */}

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#5BBF43]/20 border border-[#5BBF43]/40 text-[#5BBF43] font-semibold"
            >
              <FaLeaf />
              About NEV
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-black"
            >
              Driving The Future Of

              <span className="block text-[#5BBF43] mt-2">
                Electric Mobility
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-3 text-black leading-7 max-w-xl"
            >
              NEV is building next-generation electric vehicles with
              innovation, sustainability and modern technology.

              We believe clean mobility should be affordable,
              reliable and accessible for everyone.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex gap-4 mt-5 flex-wrap"
            >
              <button className="bg-[#5BBF43] hover:bg-[#4ba73a] transition text-white px-7 py-3 rounded-xl flex items-center gap-3 font-semibold">
                Explore Products

                <FaArrowRight />
              </button>

              <button className="border border-blue/30 hover:bg-blue-100 hover:text-[#071426] transition text-black px-7 py-3 rounded-xl font-semibold">

                <Link to="/contact" >
                  Contact Us
                </Link>
              </button>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT START ================= */}

          <div className="relative h-[380px] lg:h-[420px] flex items-center justify-center">

            {/* Fixed Circle */}

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[360px] lg:h-[360px] rounded-full bg-[#5BBF43]/10 border border-[#5BBF43]/20" />
            {/* ================= Car Shadow ================= */}

            <motion.div
              animate={{
                scaleX: [1, 1.08, 1],
                opacity: [0.3, 0.55, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-10 lg:bottom-12 w-[240px] h-6 bg-black/40 blur-xl rounded-full z-10"
            />

            {/* ================= Car ================= */}

            <motion.img
              src="/15_transparent.png"
              alt="Electric Vehicle"
              initial={{
                x: 220,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 2.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                scale: 1.03,
                y: -5,
              }}
              className="
    absolute
    top-1/2
    left-1/2
    -translate-x-1/2
    -translate-y-[70%]
    z-20
    w-[260px]
    md:w-[320px]
    lg:w-[370px]
    object-contain
    cursor-pointer
    select-none
  "
            />

            {/* ================= Headlight Glow ================= */}

            <motion.div
              animate={{
                opacity: [0.2, 0.7, 0.2],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="absolute right-[30px] top-[48%] w-20 h-6 bg-yellow-300/40 blur-xl rounded-full"
            />

            {/* ================= Car Shine Effect ================= */}

            <motion.div
              initial={{ x: -220, opacity: 0 }}
              animate={{
                x: [0, 520],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
              className="absolute z-30 w-16 h-[280px] bg-white/20 blur-md rotate-[20deg]"
            />

            {/* ================= Dust Particles ================= */}

            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  x: 0,
                  y: 0,
                }}
                animate={{
                  opacity: [0, 0.5, 0],
                  x: [-10, -70],
                  y: [0, -20],
                  scale: [0.5, 2],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute bottom-14 left-12 w-3 h-3 rounded-full bg-white/20 blur-sm"
              />
            ))}

            {/* ================= Background Floating Particles ================= */}

            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                animate={{
                  y: [0, -40, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                className="absolute w-2 h-2 rounded-full bg-[#5BBF43]/50"
                style={{
                  left: `${15 + i * 7}%`,
                  top: `${20 + (i % 4) * 15}%`,
                }}
              />
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutHero;
