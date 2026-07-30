import { FaHome, FaChevronRight } from "react-icons/fa";

function AboutHero() {
    return (
        <section className="relative w-full h-[485px] overflow-hidden bg-[#F5F9FC]">
            <div className="absolute inset-0">

                <img
                    src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1600"
                    alt="Electric Mobility"
                    className="absolute inset-0 w-full h-full object-cover opacity-[0.12]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/20"></div>
            </div>


            {/* ---MAIN CONTENT--- */}

            <div className="relative z-20 max-w-[1400px] mx-auto h-full px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">

                    {/* ----LEFT CONTENT--- */}

                    <div className="flex flex-col justify-center pb-10">

                        <div className="flex items-center gap-4 text-[#245EAA] text-[16px] md:text-[17px] font-medium mb-7">

                            <div className="flex items-center gap-2">
                                <FaHome
                                    size={15}
                                    className="text-[#245EAA]"
                                />
                                <span>  Home </span>
                            </div>
                            <FaChevronRight
                                size={12}
                                className="text-[#5BBF43]"
                            />


                            <span>
                                Our Company
                            </span>


                            <FaChevronRight
                                size={12}
                                className="text-[#5BBF43]"
                            />


                            <span className="text-[#182438]">
                                About Us
                            </span>

                        </div>


                        {/* Heading */}

                        <h1
                            className="
                text-[55px]
                md:text-[70px]
                lg:text-[82px]
                leading-none
                font-extrabold
                text-[#245EAA]
              "
                        >
                            About Us
                        </h1>


                        {/* Green Line */}

                        <div className="mt-5 w-[80px] h-[5px] rounded-full bg-[#5BBF43]"></div>


                        {/* Subtitle */}

                        <p
                            className="
                mt-6
                text-[18px]
                md:text-[20px]
                text-[#182438]
                font-medium
              "
                        >
                            Discover Our Journey in Electric Mobility Innovation.
                        </p>

                    </div>


                    {/* =================================================
              RIGHT VEHICLE ANIMATION
          ================================================= */}

                    <div className="relative h-full overflow-hidden">


                        {/* =================================================
                PARTITION 1
            ================================================= */}

                        <div
                            className="
                absolute
                top-[55px]
                right-[300px]
                w-[285px]
                h-[395px]
                overflow-hidden

                animate-[partitionOpen_0.8s_ease-out_0.2s_both]
              "
                            style={{
                                clipPath:
                                    "polygon(28% 0%, 100% 0%, 72% 100%, 0% 100%)",
                            }}
                        >

                            {/* Transparent Partition */}

                            <div className="absolute inset-0 bg-white/25 z-10"></div>


                            {/* Image */}

                            <img
                                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=900"
                                alt="Electric Vehicle 1"
                                className="
                  absolute
                  top-0
                  left-0
                  w-[285px]
                  h-full
                  object-cover

                  opacity-0
                  animate-[imageReveal_1s_ease-out_1s_both]
                "
                            />

                        </div>


                        {/* =================================================
                PARTITION 2
            ================================================= */}

                        <div
                            className="
                absolute
                top-[55px]
                right-[90px]
                w-[285px]
                h-[395px]
                overflow-hidden

                animate-[partitionOpen_0.8s_ease-out_0.5s_both]
              "
                            style={{
                                clipPath:
                                    "polygon(28% 0%, 100% 0%, 72% 100%, 0% 100%)",
                            }}
                        >

                            {/* Transparent Partition */}

                            <div className="absolute inset-0 bg-white/25 z-10"></div>


                            {/* Image */}

                            <img
                                src="https://images.unsplash.com/photo-1551830820-330a71b99659?w=900"
                                alt="Electric Vehicle 2"
                                className="
                  absolute
                  top-0
                  left-0
                  w-[285px]
                  h-full
                  object-cover

                  opacity-0
                  animate-[imageReveal_1s_ease-out_1.7s_both]
                "
                            />

                        </div>


                        {/* =================================================
                PARTITION 3
            ================================================= */}

                        <div
                            className="
                absolute
                top-[55px]
                right-[-120px]
                w-[285px]
                h-[395px]
                overflow-hidden

                animate-[partitionOpen_0.8s_ease-out_0.8s_both]
              "
                            style={{
                                clipPath:
                                    "polygon(28% 0%, 100% 0%, 72% 100%, 0% 100%)",
                            }}
                        >

                            {/* Transparent Partition */}

                            <div className="absolute inset-0 bg-white/25 z-10"></div>


                            {/* Image */}

                            <img
                                src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=900"
                                alt="Electric Vehicle 3"
                                className="
                  absolute
                  top-0
                  left-0
                  w-[285px]
                  h-full
                  object-cover

                  opacity-0
                  animate-[imageReveal_1s_ease-out_2.4s_both]
                "
                            />

                        </div>


                    </div>

                </div>

            </div>


            {/* =====================================================
          ANIMATIONS
      ===================================================== */}

            <style>
                {`

          /* ---------------------------------------------
             TRANSPARENT PARTITION
             RIGHT → LEFT
          --------------------------------------------- */

          @keyframes partitionOpen {

            0% {
              transform: translateX(420px);
              opacity: 0;
            }

            100% {
              transform: translateX(0);
              opacity: 1;
            }

          }


          /* ---------------------------------------------
             IMAGE
             RIGHT → LEFT INSIDE PARTITION
          --------------------------------------------- */

          @keyframes imageReveal {

            0% {
              transform: translateX(285px);
              opacity: 0;
            }

            20% {
              opacity: 1;
            }

            100% {
              transform: translateX(0);
              opacity: 1;
            }

          }

        `}
            </style>

        </section>
    );
}

export default AboutHero;
