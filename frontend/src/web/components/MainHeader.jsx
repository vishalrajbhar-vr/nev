import React, { useEffect, useRef, useState } from "react";
import {
  FaChevronDown, FaChevronRight, FaPhoneAlt, FaBars, FaTimes,
} from "react-icons/fa";

function MainHeader() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openProduct, setOpenProduct] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const closeTimer = useRef(null);
  const headerRef = useRef(null);

  /* OPEN MENU */

  const openMenu = (menu) => {
    clearTimeout(closeTimer.current);
    setOpenDropdown(menu);
  };

  /*  CLOSE MENU */

  const closeMenuWithDelay = () => {
    clearTimeout(closeTimer.current);

    closeTimer.current = setTimeout(() => {
      setOpenDropdown(null);
      setOpenProduct(null);
    }, 1000);
  };

  /* CANCEL CLOSE */

  const cancelClose = () => {
    clearTimeout(closeTimer.current);
  };

  /* OUTSIDE CLICK */

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        clearTimeout(closeTimer.current);

        setOpenDropdown(null);
        setOpenProduct(null);
        setMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );

      clearTimeout(closeTimer.current);
    };
  }, []);

  /* CLOSE MOBILE MENU WHEN SCREEN BECOMES DESKTOP */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* TOGGLE DROPDOWN */

  const toggleDropdown = (menu) => {
    clearTimeout(closeTimer.current);

    if (openDropdown === menu) {
      setOpenDropdown(null);
      setOpenProduct(null);
    } else {
      setOpenDropdown(menu);
      setOpenProduct(null);
    }
  };

  /* TOGGLE PRODUCT */

  const toggleProduct = (product) => {
    clearTimeout(closeTimer.current);

    if (openProduct === product) {
      setOpenProduct(null);
    } else {
      setOpenProduct(product);
    }
  };

  return (
    <header
      ref={headerRef}
      className="relative z-50 w-full bg-white shadow-sm"
    >

      <div className="min-h-[78px] lg:h-[96px] flex items-center">

        {/* LOGO */}

        <div
          className=" w-auto lg:w-[28%] h-full flex items-center  px-4 sm:px-6 lg:pl-14 lg:pr-0
          "
        >

          <a
            href="#"
            className="flex items-center"
          >

            <div className="  w-[110px]  h-[55px]  sm:w-[130px]  sm:h-[62px] lg:w-[145px]  lg:h-[70px]  flex  items-center  justify-center">

              <img
                src="/nev%20logo.jpg"
                alt="NEV Logo"
                className="max-w-full max-h-full object-contain"
              />

            </div>

          </a>

        </div>


        {/*  DESKTOP NAVIGATION */}

        <nav className="hidden lg:flex flex-1 h-full items-center justify-center">

          <div
            className=" flex items-center gap-5 xl:gap-8 2xl:gap-11 text-[15px] xl:text-[17px] font-semibold
            "
          >

            {/*  HOME  */}

            <a
              href="#"
              className=" whitespace-nowrap text-[#182438] hover:text-[#5BBF43] transition-colors duration-300
              "
            >
              Home
            </a>


            {/* OUR PRODUCTS */}

            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => openMenu("products")}
              onMouseLeave={closeMenuWithDelay}
            >

              <button
                type="button"
                onClick={() => toggleDropdown("products")}
                className=" flex items-center gap-2 whitespace-nowrap  text-[#182438] hover:text-[#5BBF43] transition-colors duration-300"
              >

                Our Products

                <FaChevronDown
                  size={10}
                  className={`
                    transition-transform
                    duration-300
                    ${openDropdown === "products"
                      ? "rotate-180"
                      : ""
                    }
                  `}
                />

              </button>


              {/* =================================================
                  PRODUCTS DROPDOWN
              ================================================= */}

              {openDropdown === "products" && (

                <div
                  className="
                    absolute
                    top-full
                    left-1/2
                    -translate-x-1/2
                    w-[285px]
                    bg-white
                    shadow-2xl
                    border-t-[3px]
                    border-[#5BBF43]
                  "
                  onMouseEnter={cancelClose}
                  onMouseLeave={closeMenuWithDelay}
                >

                  {/* ================= L3 ================= */}

                  <ProductDesktopItem
                    title="L3 (Electric Rickshaw)"
                    product="l3"
                    openProduct={openProduct}
                    setOpenProduct={setOpenProduct}
                    cancelClose={cancelClose}
                    closeMenuWithDelay={closeMenuWithDelay}
                    items={[
                      "L3 Product 1",
                      "L3 Product 2",
                      "L3 Product 3",
                    ]}
                  />


                  {/* ================= L5 ================= */}

                  <ProductDesktopItem
                    title="L5 (Electric Auto)"
                    product="l5"
                    openProduct={openProduct}
                    setOpenProduct={setOpenProduct}
                    cancelClose={cancelClose}
                    closeMenuWithDelay={closeMenuWithDelay}
                    items={[
                      "L5 Product 1",
                      "L5 Product 2",
                      "L5 Product 3",
                    ]}
                  />


                  {/* ================= SCOOTY ================= */}

                  <ProductDesktopItem
                    title="Scooty"
                    product="scooty"
                    openProduct={openProduct}
                    setOpenProduct={setOpenProduct}
                    cancelClose={cancelClose}
                    closeMenuWithDelay={closeMenuWithDelay}
                    items={[
                      "Scooty Product 1",
                      "Scooty Product 2",
                      "Scooty Product 3",
                    ]}
                  />

                </div>

              )}

            </div>


            {/* ABOUT US */}

            <DesktopDropdown
              title="About Us"
              menu="about"
              openDropdown={openDropdown}
              openMenu={openMenu}
              toggleDropdown={toggleDropdown}
              closeMenuWithDelay={closeMenuWithDelay}
              cancelClose={cancelClose}
              items={[
                "About Company",
                "Our Journey",
                "Our Team",
              ]}
            />


           {/* GALLERY */}

            <DesktopDropdown
              title="Gallery"
              menu="gallery"
              openDropdown={openDropdown}
              openMenu={openMenu}
              toggleDropdown={toggleDropdown}
              closeMenuWithDelay={closeMenuWithDelay}
              cancelClose={cancelClose}
              items={[
                "Photos",
                "Videos",
              ]}
            />


            {/* CONTACT */}

            <DesktopDropdown
              title="Contact Us"
              menu="contact"
              openDropdown={openDropdown}
              openMenu={openMenu}
              toggleDropdown={toggleDropdown}
              closeMenuWithDelay={closeMenuWithDelay}
              cancelClose={cancelClose}
              items={[
                "Contact Us",
                "Enquiry",
              ]}
            />

          </div>

        </nav>


     {/* DESKTOP PHONE */}

        <div
          className="
            hidden
            lg:flex
            w-[18%]
            xl:w-[16%]
            2xl:w-[14%]
            h-full
            bg-[#293F8F]
            text-white
            items-center
            justify-center
            relative
            overflow-hidden
          "
        >

          {/* Diagonal White */}

          <div
            className="
              absolute
              left-[-35px]
              top-0
              w-[70px]
              h-full
              bg-white
              -skew-x-[32deg]
            "
          ></div>


          {/* Phone */}

          <a
            href="tel:1234567890"
            className="
              relative
              z-10
              flex
              items-center
              gap-2
              xl:gap-3
              text-sm
              xl:text-base
              font-semibold
              whitespace-nowrap
            "
          >

            <FaPhoneAlt size={14} />

            <span>
              1234567890
            </span>

          </a>

        </div>


        {/* =================================================
            MOBILE / TABLET RIGHT SECTION
        ================================================= */}

        <div
          className="
            ml-auto
            flex
            lg:hidden
            items-center
            gap-2
            sm:gap-3
            px-4
            sm:px-6
          "
        >

          {/* Phone */}

          <a
            href="tel:1234567890"
            className="
              hidden
              sm:flex
              items-center
              gap-2
              text-[#293F8F]
              font-semibold
            "
          >

            <FaPhoneAlt size={15} />

            <span>
              1234567890
            </span>

          </a>


          {/* Hamburger */}

          <button
            type="button"
            onClick={() => {
              setMobileMenu(!mobileMenu);
              setOpenDropdown(null);
              setOpenProduct(null);
            }}
            className="
              w-10
              h-10
              sm:w-11
              sm:h-11
              rounded-md
              bg-[#293F8F]
              text-white
              flex
              items-center
              justify-center
              hover:bg-[#5BBF43]
              transition-colors
              duration-300
            "
            aria-label="Toggle Menu"
          >

            {mobileMenu ? (
              <FaTimes size={19} />
            ) : (
              <FaBars size={19} />
            )}

          </button>

        </div>

      </div>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      {mobileMenu && (

        <div
          className="
            lg:hidden
            w-full
            max-h-[calc(100vh-78px)]
            overflow-y-auto
            bg-white
            border-t
            border-gray-200
            shadow-xl
          "
        >

          <div className="px-4 sm:px-6 py-3">


            {/* ================= HOME ================= */}

            <a
              href="#"
              className="
                block
                py-4
                text-base
                font-semibold
                text-[#182438]
                border-b
                border-gray-100
                hover:text-[#5BBF43]
              "
              onClick={() => setMobileMenu(false)}
            >
              Home
            </a>


             {/* MOBILE PRODUCTS */}

            <div className="border-b border-gray-100">

              <button
                type="button"
                onClick={() => toggleDropdown("products")}
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  py-4
                  text-base
                  font-semibold
                  text-[#182438]
                "
              >

                <span>
                  Our Products
                </span>

                <FaChevronDown
                  size={12}
                  className={`
                    transition-transform
                    duration-300
                    ${openDropdown === "products"
                      ? "rotate-180"
                      : ""
                    }
                  `}
                />

              </button>


              {openDropdown === "products" && (

                <div className="pb-2 pl-3">

                  {/* L3 */}

                  <MobileProduct
                    title="L3 (Electric Rickshaw)"
                    product="l3"
                    openProduct={openProduct}
                    toggleProduct={toggleProduct}
                    items={[
                      "L3 Product 1",
                      "L3 Product 2",
                      "L3 Product 3",
                    ]}
                  />


                  {/* L5 */}

                  <MobileProduct
                    title="L5 (Electric Auto)"
                    product="l5"
                    openProduct={openProduct}
                    toggleProduct={toggleProduct}
                    items={[
                      "L5 Product 1",
                      "L5 Product 2",
                      "L5 Product 3",
                    ]}
                  />


                  {/* Scooty */}

                  <MobileProduct
                    title="Scooty"
                    product="scooty"
                    openProduct={openProduct}
                    toggleProduct={toggleProduct}
                    items={[
                      "Scooty Product 1",
                      "Scooty Product 2",
                      "Scooty Product 3",
                    ]}
                  />

                </div>

              )}

            </div>


            {/* ABOUT */}

            <MobileDropdown
              title="About Us"
              menu="about"
              openDropdown={openDropdown}
              toggleDropdown={toggleDropdown}
              items={[
                "About Company",
                "Our Journey",
                "Our Team",
              ]}
            />


             {/* GALLERY */}

            <MobileDropdown
              title="Gallery"
              menu="gallery"
              openDropdown={openDropdown}
              toggleDropdown={toggleDropdown}
              items={[
                "Photos",
                "Videos",
              ]}
            />


            {/* CONTACT */}

            <MobileDropdown
              title="Contact Us"
              menu="contact"
              openDropdown={openDropdown}
              toggleDropdown={toggleDropdown}
              items={[
                "Contact Us",
                "Enquiry",
              ]}
            />


            {/* MOBILE PHONE */}

            <a
              href="tel:1234567890"
              className="
                sm:hidden
                flex
                items-center
                justify-center
                gap-3
                mt-4
                mb-3
                py-3
                rounded-lg
                bg-[#293F8F]
                text-white
                font-semibold
              "
            >

              <FaPhoneAlt size={15} />

              1234567890

            </a>

          </div>

        </div>

      )}

    </header>
  );
}


/* =========================================================
    DESKTOP PRODUCT ITEM
========================================================= */

function ProductDesktopItem({
  title,
  product,
  openProduct,
  setOpenProduct,
  cancelClose,
  closeMenuWithDelay,
  items,
}) {
  return (
    <div
      className={`
        relative
        px-7
        py-5
        flex
        items-center
        justify-between
        cursor-pointer
        transition-colors
        duration-200
        ${openProduct === product
          ? "bg-[#F1F5F9]"
          : "hover:bg-[#F1F5F9]"
        }
      `}
      onMouseEnter={() => {
        cancelClose();
        setOpenProduct(product);
      }}
    >

      <span className="text-[16px] font-medium text-[#182438]">
        {title}
      </span>

      <FaChevronRight
        size={11}
        className="text-[#182438]"
      />


      {/* SUBMENU */}

      {openProduct === product && (

        <div
          className="
            absolute
            top-[-3px]
            left-full
            w-[245px]
            bg-white
            shadow-2xl
            border-t-[3px]
            border-[#5BBF43]
          "
          onMouseEnter={cancelClose}
          onMouseLeave={closeMenuWithDelay}
        >

          {items.map((item) => (
            <a
              key={item}
              href="#"
              className="
                block
                px-6
                py-5
                text-[15px]
                font-medium
                text-[#182438]
                hover:bg-[#F4FAF2]
                hover:text-[#5BBF43]
                transition-colors
                duration-200
              "
            >
              {item}
            </a>
          ))}

        </div>

      )}

    </div>
  );
}


// DESKTOP NORMAL DROPDOWN

function DesktopDropdown({
  title,
  menu,
  openDropdown,
  openMenu,
  toggleDropdown,
  closeMenuWithDelay,
  cancelClose,
  items,
}) {
  return (
    <div
      className="relative h-full flex items-center"
      onMouseEnter={() => openMenu(menu)}
      onMouseLeave={closeMenuWithDelay}
    >

      <button
        type="button"
        onClick={() => toggleDropdown(menu)}
        className="
          flex
          items-center
          gap-2
          whitespace-nowrap
          text-[#182438]
          hover:text-[#5BBF43]
          transition-colors
          duration-300
        "
      >

        {title}

        <FaChevronDown
          size={10}
          className={`
            transition-transform
            duration-300
            ${openDropdown === menu
              ? "rotate-180"
              : ""
            }
          `}
        />

      </button>


      {openDropdown === menu && (

        <div
          className="
            absolute
            top-full
            left-0
            w-[190px]
            bg-white
            shadow-2xl
            border-t-[3px]
            border-[#5BBF43]
          "
          onMouseEnter={cancelClose}
          onMouseLeave={closeMenuWithDelay}
        >

          {items.map((item) => (
            <a
              key={item}
              href="#"
              className="
                block
                px-6
                py-4
                text-[15px]
                text-[#182438]
                hover:bg-[#F4FAF2]
                hover:text-[#5BBF43]
                transition-colors
                duration-200
              "
            >
              {item}
            </a>
          ))}

        </div>

      )}

    </div>
  );
}


// MOBILE PRODUCT

function MobileProduct({
  title,
  product,
  openProduct,
  toggleProduct,
  items,
}) {
  return (
    <div className="border-l-2 border-[#5BBF43]">

      <button
        type="button"
        onClick={() => toggleProduct(product)}
        className="
          w-full
          flex
          items-center
          justify-between
          px-4
          py-3
          text-sm
          font-medium
          text-[#182438]
          hover:bg-[#F4FAF2]
        "
      >

        <span>
          {title}
        </span>

        <FaChevronRight
          size={10}
          className={`
            transition-transform
            duration-300
            ${openProduct === product
              ? "rotate-90"
              : ""
            }
          `}
        />

      </button>


      {/* INNER PRODUCTS */}

      {openProduct === product && (

        <div className="ml-3 mb-2">

          {items.map((item) => (
            <a
              key={item}
              href="#"
              className="
                block
                px-4
                py-3
                text-sm
                text-gray-600
                hover:text-[#5BBF43]
                hover:bg-[#F8FAFC]
                rounded-md
              "
            >
              {item}
            </a>
          ))}

        </div>

      )}

    </div>
  );
}


/* =========================================================
    MOBILE NORMAL DROPDOWN
========================================================= */

function MobileDropdown({
  title,
  menu,
  openDropdown,
  toggleDropdown,
  items,
}) {
  return (
    <div className="border-b border-gray-100">

      <button
        type="button"
        onClick={() => toggleDropdown(menu)}
        className="
          w-full
          flex
          items-center
          justify-between
          py-4
          text-base
          font-semibold
          text-[#182438]
        "
      >

        <span>
          {title}
        </span>

        <FaChevronDown
          size={12}
          className={`
            transition-transform
            duration-300
            ${openDropdown === menu
              ? "rotate-180"
              : ""
            }
          `}
        />

      </button>


      {openDropdown === menu && (

        <div className="pb-2 pl-3">

          {items.map((item) => (
            <a
              key={item}
              href="#"
              className="
                block
                px-4
                py-3
                text-sm
                text-gray-600
                hover:text-[#5BBF43]
                hover:bg-[#F8FAFC]
                rounded-md
              "
            >
              {item}
            </a>
          ))}

        </div>

      )}

    </div>
  );
}

export default MainHeader;