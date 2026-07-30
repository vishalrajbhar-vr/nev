import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full bg-[#182438] text-white">


      <div className="w-full px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20 py-10 sm:py-12 lg:py-16">

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-10 xl:gap-16">


          <div className="sm:col-span-2 lg:col-span-1">

            {/* Logo */}

            <a
              href="#"
              className="inline-block mb-6 sm:mb-8"
            >
              <img
                src="/nev logo.jpg"
                alt="NEV Logo"
                className="w-[75px] sm:w-[85px] md:w-[100px] h-auto object-contain"
              />
            </a>

            {/* Description */}

            <p
              className="
                max-w-[420px]
                text-sm
                sm:text-base
                md:text-lg
                leading-6
                sm:leading-7
                text-gray-200
              "
            >
              Leading the electric mobility revolution in India with
              innovative, sustainable, and affordable electric vehicles.
            </p>


            {/* Social Icons */}

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-7 sm:mt-9">

              <a
                href="#"
                aria-label="Facebook"
                className="
                  w-10 h-10
                  sm:w-11 sm:h-11
                  rounded-full
                  border border-white
                  flex items-center justify-center
                  hover:bg-[#5BBF43]
                  hover:border-[#5BBF43]
                  transition-all duration-300
                "
              >
                <FaFacebookF size={16} />
              </a>


              <a
                href="#"
                aria-label="X"
                className="
                  w-10 h-10
                  sm:w-11 sm:h-11
                  rounded-full
                  border border-white
                  flex items-center justify-center
                  hover:bg-[#5BBF43]
                  hover:border-[#5BBF43]
                  transition-all duration-300
                "
              >
                <FaXTwitter size={16} />
              </a>


              <a
                href="#"
                aria-label="Youtube"
                className="
                  w-10 h-10
                  sm:w-11 sm:h-11
                  rounded-full
                  border border-white
                  flex items-center justify-center
                  hover:bg-[#5BBF43]
                  hover:border-[#5BBF43]
                  transition-all duration-300
                "
              >
                <FaYoutube size={17} />
              </a>


              <a
                href="#"
                aria-label="Instagram"
                className="
                  w-10 h-10
                  sm:w-11 sm:h-11
                  rounded-full
                  border border-white
                  flex items-center justify-center
                  hover:bg-[#5BBF43]
                  hover:border-[#5BBF43]
                  transition-all duration-300
                "
              >
                <FaInstagram size={17} />
              </a>

            </div>

          </div>


          {/* OUR COMPANY */}

          <div>

            <h3
              className="
                inline-block
                text-xl
                sm:text-2xl
                font-bold
                pb-2
                border-b-2
                border-[#5BBF43]
              "
            >
              Our Company
            </h3>


            <ul className="mt-5 sm:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg">

              <li>
                <a
                  href="#"
                  className="hover:text-[#5BBF43] transition-colors duration-300"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#5BBF43] transition-colors duration-300"
                >
                  Our Journey
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#5BBF43] transition-colors duration-300"
                >
                  Our Models
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#5BBF43] transition-colors duration-300"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>


          {/* PRODUCTS */}

          <div>

            <h3
              className="
                inline-block
                text-xl
                sm:text-2xl
                font-bold
                pb-2
                border-b-2
                border-[#5BBF43]
              "
            >
              Products
            </h3>


            <ul className="mt-5 sm:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg">

              <li>
                <a
                  href="#"
                  className="hover:text-[#5BBF43] transition-colors duration-300"
                >
                  L3 Electric Rickshaw
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#5BBF43] transition-colors duration-300"
                >
                  L5 Electric Auto
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#5BBF43] transition-colors duration-300"
                >
                  Scooty
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#5BBF43] transition-colors duration-300"
                >
                  Khalsa Super DLX
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#5BBF43] transition-colors duration-300"
                >
                  Khalsa Cargo
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#5BBF43] transition-colors duration-300"
                >
                  Grand Lithium
                </a>
              </li>

            </ul>

          </div>


          {/* CONTACT INFO */}

          <div>

            <h3
              className="
                inline-block
                text-xl
                sm:text-2xl
                font-bold
                pb-2
                border-b-2
                border-[#5BBF43]
              "
            >
              Contact Info
            </h3>


            <div className="mt-5 sm:mt-6 space-y-4 sm:space-y-5">


              {/* Phone */}

              <a
                href="tel:18001210259"
                className="
                  flex
                  items-center
                  gap-3 sm:gap-4
                  w-full
                  bg-[#253247]
                  rounded-xl
                  px-4
                  py-4
                  sm:py-5
                  hover:bg-[#2d3b51]
                  transition-all duration-300
                "
              >

                <FaPhoneAlt
                  className="text-[#5BBF43] shrink-0"
                  size={21}
                />

                <span className="text-sm sm:text-base md:text-lg font-semibold break-words">
                  Toll Free: 1234567890
                </span>

              </a>


              {/* Email */}

              <a
                href="mailto:info@nev.com"
                className="
                  flex
                  items-center
                  gap-3 sm:gap-4
                  w-full
                  bg-[#253247]
                  rounded-xl
                  px-4
                  py-4
                  sm:py-5
                  hover:bg-[#2d3b51]
                  transition-all duration-300
                "
              >

                <FaEnvelope
                  className="text-[#5BBF43] shrink-0"
                  size={23}
                />

                <span className="text-sm sm:text-base md:text-lg font-semibold break-all">
                  nev@gmail.com
                </span>

              </a>


              {/* Location */}

              <div
                className="
                  flex
                  items-center
                  gap-3 sm:gap-4
                  w-full
                  bg-[#253247]
                  rounded-xl
                  px-4
                  py-4
                  sm:py-5
                "
              >

                <FaMapMarkerAlt
                  className="text-[#5BBF43] shrink-0"
                  size={23}
                />

                <span className="text-sm sm:text-base md:text-lg font-semibold">
                  Lucknow
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* BOTTOM FOOTER  */}

      <div className="border-t border-white/30">

        <div
          className="
            max-w-[1400px]
            mx-auto
            px-5
            sm:px-8
            md:px-10
            lg:px-14
            xl:px-20
            py-5
            sm:py-6
          "
        >

          <div
            className="
              flex
              flex-col
              md:flex-row
              items-center
              justify-between
              gap-4
            "
          >

            {/* Copyright */}

            <p
              className="
                text-xs
                sm:text-sm
                md:text-base
                text-gray-200
                text-center
                md:text-left
              "
            >
              © 2026 NEV Vehicles Pvt. Ltd. All rights reserved.
            </p>


            {/* Links */}

            <div
              className="
                flex
                flex-wrap
                justify-center
                items-center
                gap-x-5
                sm:gap-x-7
                md:gap-x-9
                gap-y-2
                text-xs
                sm:text-sm
                md:text-base
              "
            >

              <a
                href="#"
                className="hover:text-[#5BBF43] transition-colors duration-300"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="hover:text-[#5BBF43] transition-colors duration-300"
              >
                Terms of Service
              </a>

              <a
                href="#"
                className="hover:text-[#5BBF43] transition-colors duration-300"
              >
                Support
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;