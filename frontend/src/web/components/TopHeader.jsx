import React from "react";
import {
    FaFacebookF,
    FaYoutube,
    FaInstagram,
    FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function TopHeader() {
    return (
        <header className="w-full bg-white border-b border-gray-300">

            <div className="min-h-[52px] sm:min-h-[58px] md:h-[60px] flex flex-col md:flex-row">

                {/* SOCIAL MEDIA SECTION */}

                <div
                    className=" w-full md:w-[42%] h-[52px] sm:h-[58px] md:h-full flex items-center justify-center gap-2 sm:gap-3 px-3"
                >

                    {/* Facebook */}

                    <a href="#" aria-label="Facebook"
                        className=" w-8 h-8 sm:w-9 sm:h-9 rounded-full  bg-[#243B6B]  text-white flex items-center justify-center hover:bg-[#5BBF43]  transition-all  duration-300"
                    >
                        <FaFacebookF className="text-[14px] sm:text-[16px]" />
                    </a>


                    {/* X */}

                    <a href="#" aria-label="X" className=" w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#243B6B]  text-white  flex  items-center  justify-center  hover:bg-[#5BBF43]  transition-all  duration-300"
                    >
                        <FaXTwitter className="text-[14px] sm:text-[16px]" />
                    </a>


                    {/* YouTube */}

                    <a href="#" aria-label="YouTube" className=" w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#243B6B]  text-white flex items-center justify-center  hover:bg-[#5BBF43]  transition-all  duration-300"
                    >
                        <FaYoutube className="text-[14px] sm:text-[16px]" />
                    </a>


                    {/* Instagram */}

                    <a href="#" aria-label="Instagram"
                        className=" w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#243B6B] text-white flex items-center justify-center  hover:bg-[#5BBF43]  transition-all  duration-300"
                    >
                        <FaInstagram className="text-[14px] sm:text-[16px]" />
                    </a>


                    {/* WhatsApp */}

                    <a href="#" aria-label="WhatsApp" className=" w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#243B6B]  text-white  flex  items-center justify-center hover:bg-[#5BBF43] transition-all duration-300"
                    >
                        <FaWhatsapp className="text-[15px] sm:text-[17px]" />
                    </a>

                </div>

                {/* RIGHT DARK SECTION */}

                <div
                    className=" w-full md:flex-1 h-[48px] sm:h-[52px] md:h-full  bg-[#02091C]  text-white  flex  items-center  justify-center  relative  overflow-hidden px-5 sm:px-8 md:px-10"
                >

                    {/* DIAGONAL WHITE SHAPE */}

                    <div
                        className=" absolute  left-[-45px]  sm:left-[-50px]  md:left-[-45px]  top-0  w-[80px]  sm:w-[90px]  md:w-[100px]  h-full  bg-white -skew-x-[32deg]"
                    ></div>


                    {/* TEXT */}

                    <p
                        className=" relative z-10 text-center text-xs sm:text-sm md:text-base lg:text-lg font-medium tracking-wide leading-5 sm:leading-6 max-w-full
            "
                    >
                        Eco-Friendly Battery Operated E-Vehicle
                    </p>

                </div>

            </div>

        </header>
    );
}

export default TopHeader;