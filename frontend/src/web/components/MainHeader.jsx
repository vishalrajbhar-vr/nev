import React, { useEffect, useRef, useState } from "react";
import {
  FaChevronDown,
  FaChevronRight,
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function MainHeader() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openProduct, setOpenProduct] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const closeTimer = useRef(null);
  const headerRef = useRef(null);

  /* ================= OPEN MENU ================= */

  const openMenu = (menu) => {
    clearTimeout(closeTimer.current);
    setOpenDropdown(menu);
    setOpenProduct(null);
  };

  /* ================= CLOSE MENU ================= */

  const closeMenuWithDelay = () => {
    clearTimeout(closeTimer.current);

    closeTimer.current = setTimeout(() => {
      setOpenDropdown(null);
      setOpenProduct(null);
    }, 100);
  };

  /* ================= CANCEL CLOSE ================= */

  const cancelClose = () => {
    clearTimeout(closeTimer.current);
  };

  /* ================= OUTSIDE CLICK ================= */

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        clearTimeout(closeTimer.current);

        setOpenDropdown(null);
        setOpenProduct(null);
        setMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);

      clearTimeout(closeTimer.current);
    };
  }, []);

  /* ================= RESIZE ================= */

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

  /* ================= TOGGLE DROPDOWN ================= */

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

  /* ================= TOGGLE PRODUCT ================= */

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
      className="relative z-50 w-full bg-white shadow-[0_2px_15px_rgba(24,36,56,0.08)]"
    >

      {/* =====================================================
          MAIN HEADER
      ===================================================== */}

      <div className="min-h-[78px] lg:h-[96px] flex items-center">

        {/* ================= LOGO ================= */}

        <div className="w-auto lg:w-[28%] h-full flex items-center px-4 sm:px-6 lg:pl-14 lg:pr-0">

          <a href="#" className="flex items-center">

            <div className="w-[110px] h-[55px] sm:w-[130px] sm:h-[62px] lg:w-[145px] lg:h-[70px] flex items-center justify-center">

              <img
                src="/nev%20logo.jpg"
                alt="NEV Logo"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </a>
        </div>


        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <nav className="hidden lg:flex flex-1 h-full items-center justify-center">

          <div className="flex items-center gap-5 xl:gap-8 2xl:gap-11 text-[15px] xl:text-[17px] font-semibold">

            {/* ================= HOME ================= */}

            <a
              href="#"
              className="whitespace-nowrap text-[#182438] hover:text-[#5BBF43] transition-colors duration-300"
            >
              Home
            </a>


            {/* =================================================
                OUR PRODUCTS
            ================================================= */}

            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => openMenu("products")}
              onMouseLeave={closeMenuWithDelay}
            >
              <button
                type="button"
                onClick={() => toggleDropdown("products")}
                className="flex items-center gap-1 whitespace-nowrap text-[#182438] hover:text-[#5BBF43] transition-colors duration-300"
              >

                <span>Our Products</span>

                <FaChevronDown
                  size={10}
                  className={`transition-transform duration-300 ${openDropdown === "products"
                    ? "rotate-180"
                    : ""
                    }`}
                />
              </button>


              {/* ================= PRODUCTS DROPDOWN ================= */}

              {openDropdown === "products" && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[240px] bg-white shadow-[0_15px_40px_rgba(24,36,56,0.15)] border-t-[3px] border-[#5BBF43] overflow-visible py-1"
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
                  />

                  {/* ================= L5 ================= */}

                  <ProductDesktopItem
                    title="L5 (Electric Auto)"
                    product="l5"
                    openProduct={openProduct}
                    setOpenProduct={setOpenProduct}
                    cancelClose={cancelClose}
                    closeMenuWithDelay={closeMenuWithDelay}
                  />

                  {/* ================= SCOOTY ================= */}

                  <ProductDesktopItem
                    title="Scooty"
                    product="scooty"
                    openProduct={openProduct}
                    setOpenProduct={setOpenProduct}
                    cancelClose={cancelClose}
                    closeMenuWithDelay={closeMenuWithDelay}
                  />
                </div>
              )}
            </div>


            {/* ================= ABOUT ================= */}

            <DesktopDropdown
              title="About Us"
              menu="about"
              openDropdown={openDropdown}
              openMenu={openMenu}
              toggleDropdown={toggleDropdown}
              closeMenuWithDelay={closeMenuWithDelay}
              cancelClose={cancelClose}
            />


            {/* ================= GALLERY ================= */}

            <DesktopDropdown
              title="Gallery"
              menu="gallery"
              openDropdown={openDropdown}
              openMenu={openMenu}
              toggleDropdown={toggleDropdown}
              closeMenuWithDelay={closeMenuWithDelay}
              cancelClose={cancelClose}
            />


            {/* ================= CONTACT ================= */}

            <DesktopDropdown
              title="Contact Us"
              menu="contact"
              openDropdown={openDropdown}
              openMenu={openMenu}
              toggleDropdown={toggleDropdown}
              closeMenuWithDelay={closeMenuWithDelay}
              cancelClose={cancelClose}
            />
          </div>
        </nav>


        {/* =====================================================
            DESKTOP PHONE
        ===================================================== */}

        <div className="hidden lg:flex w-[18%] xl:w-[16%] 2xl:w-[14%] h-full bg-[#293F8F] text-white items-center justify-center relative overflow-hidden">

          <div className="absolute left-[-35px] top-0 w-[70px] h-full bg-white -skew-x-[32deg]" />

          <a
            href="tel:1234567890"
            className="relative z-10 flex items-center gap-2 xl:gap-3 text-sm xl:text-base font-semibold whitespace-nowrap"
          >
            <FaPhoneAlt size={14} />

            <span>1234567890</span>
          </a>
        </div>


        {/* =====================================================
            MOBILE / TABLET RIGHT
        ===================================================== */}

        <div className="ml-auto flex lg:hidden items-center gap-2 sm:gap-3 px-4 sm:px-6">

          <a
            href="tel:1234567890"
            className="hidden sm:flex items-center gap-2 text-[#293F8F] font-semibold"
          >
            <FaPhoneAlt size={15} />

            <span>1234567890</span>

          </a>


          <button
            type="button"
            onClick={() => {
              setMobileMenu(!mobileMenu);
              setOpenDropdown(null);
              setOpenProduct(null);
            }}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#293F8F] text-white flex items-center justify-center shadow-md hover:bg-[#5BBF43] hover:shadow-lg transition-all duration-300"
            aria-label="Toggle Menu"
          >
            {mobileMenu ? <FaTimes size={19} /> : <FaBars size={19} />}
          </button>
        </div>
      </div>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      {mobileMenu && (

        <div className="lg:hidden w-full max-h-[calc(100vh-78px)] overflow-y-auto bg-[#FAFCFA] border-t border-gray-200 shadow-[0_15px_35px_rgba(24,36,56,0.12)]">

          <div className="px-4 sm:px-6 py-4">

            {/* ================= HOME ================= */}

            <a
              href="#"
              onClick={() => setMobileMenu(false)}
              className="block py-4 px-3 text-base font-semibold text-[#182438] border-b border-gray-200 hover:text-[#5BBF43] transition-colors duration-300"
            >
              Home
            </a>


            {/* ================= MOBILE PRODUCTS ================= */}

            <div className="border-b border-gray-200">

              <button
                type="button"
                onClick={() => toggleDropdown("products")}
                className="w-full flex items-center justify-between py-4 px-3 text-base font-semibold text-[#182438]"
              >

                <span>Our Products</span>

                <span className="w-7 h-7 rounded-full bg-[#F1F6EF] flex items-center justify-center">

                  <FaChevronDown
                    size={11}
                    className={`text-[#293F8F] transition-transform duration-300 ${openDropdown === "products"
                      ? "rotate-180"
                      : ""
                      }`}
                  />

                </span>

              </button>

              {openDropdown === "products" && (

                <div className="ml-3 mr-1 mb-3 pl-3 border-l-2 border-[#5BBF43]">

                  <MobileProduct
                    title="L3 (Electric Rickshaw)"
                    product="l3"
                    openProduct={openProduct}
                    toggleProduct={toggleProduct}
                  />

                  <MobileProduct
                    title="L5 (Electric Auto)"
                    product="l5"
                    openProduct={openProduct}
                    toggleProduct={toggleProduct}
                  />

                  <MobileProduct
                    title="Scooty"
                    product="scooty"
                    openProduct={openProduct}
                    toggleProduct={toggleProduct}
                  />
                </div>
              )}
            </div>


            {/* ================= ABOUT ================= */}

            <MobileDropdown
              title="About Us"
              menu="about"
              openDropdown={openDropdown}
              toggleDropdown={toggleDropdown}
            />


            {/* ================= GALLERY ================= */}

            <MobileDropdown
              title="Gallery"
              menu="gallery"
              openDropdown={openDropdown}
              toggleDropdown={toggleDropdown}
            />


            {/* ================= CONTACT ================= */}

            <MobileDropdown
              title="Contact Us"
              menu="contact"
              openDropdown={openDropdown}
              toggleDropdown={toggleDropdown}
            />


            {/* ================= MOBILE PHONE ================= */}

            <a
              href="tel:1234567890"
              className="sm:hidden flex items-center justify-center gap-3 mt-5 py-3.5 rounded-xl bg-[#293F8F] text-white font-semibold shadow-md hover:bg-[#5BBF43] transition-all duration-300"
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
}) {
  return (

    <div
      className={`relative px-7 py-4 flex items-center justify-between cursor-pointer overflow-visible transition-all duration-300 ${openProduct === product
        ? "bg-[#EAF5E7]"
        : "bg-white hover:bg-[#EAF5E7]"
        }`}
      onMouseEnter={() => {
        cancelClose();
        setOpenProduct(product);
      }}
    >
      <span
        className={`text-[15px] font-medium transition-all duration-300 ${openProduct === product
          ? "text-[#5BBF43] text-[16px]"
          : "text-[#182438]"
          }`}
      >
        {title}
      </span>


      <FaChevronRight
        size={10}
        className={`transition-all duration-300 ${openProduct === product
          ? "text-[#5BBF43] translate-x-1"
          : "text-[#182438]"
          }`}
      />

      {/* ================= SUB MENU ================= */}

      {openProduct === product && (
        <div
          className="absolute top-[-3px] left-full w-[230px] bg-white shadow-[0_15px_40px_rgba(24,36,56,0.15)] border-t-[3px] border-[#5BBF43] overflow-hidden"
          onMouseEnter={cancelClose}
          onMouseLeave={closeMenuWithDelay}
        >

          {/* ================= L3 PRODUCTS ================= */}

          {product === "l3" && (
            <>
              <DropdownItem item="L3 Butterfly MS" />
              <DropdownItem item="L3 Butterfly SS" />
            </>
          )}


          {/* ================= L5 PRODUCTS ================= */}

          {product === "l5" && (
            <>
              <DropdownItem item="L5 DLX Passenger plus 1" />
              <DropdownItem item="L5 ECO 6 + 1" />
              <DropdownItem item="L5 Front Facia" />
              <DropdownItem item="L5 Butterfly 6 + 1" />
              <DropdownItem item="L5 Ultra Loader" />
            </>
          )}


          {/* ================= SCOOTY PRODUCTS ================= */}

          {product === "scooty" && (
            <>
              <DropdownItem item="Single Light" />
              <DropdownItem item="Double Light" />
              <DropdownItem item="U Light" />
              <DropdownItem item="Activa" />
              <DropdownItem item="N1" />
            </>
          )}

        </div>
      )}
    </div>
  );
}


/* =========================================================
    DESKTOP NORMAL DROPDOWN
========================================================= */

function DesktopDropdown({
  title,
  menu,
  openDropdown,
  openMenu,
  toggleDropdown,
  closeMenuWithDelay,
  cancelClose,
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
        className="flex items-center gap-2 whitespace-nowrap text-[#182438] hover:text-[#5BBF43] transition-colors duration-300"
      >

        <span>{title}</span>

        <FaChevronDown
          size={10}
          className={`transition-transform duration-300 ${openDropdown === menu
            ? "rotate-180"
            : ""
            }`}
        />
      </button>




      {openDropdown === menu && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[170px] bg-white shadow-[0_15px_40px_rgba(24,36,56,0.15)] border-t-[3px] border-[#5BBF43] overflow-hidden py-1" onMouseEnter={cancelClose} onMouseLeave={closeMenuWithDelay}>

          {/* ================= ABOUT ================= */}

          {menu === "about" && (
            <>
              <DropdownItem item="About Company" />
              <DropdownItem item="Our Journey" />
              <DropdownItem item="Our Team" />
            </>
          )}


          {/* ================= GALLERY ================= */}

          {menu === "gallery" && (
            <>
              <DropdownItem item="Photos" />
              <DropdownItem item="Videos" />
            </>
          )}


          {/* ================= CONTACT ================= */}

          {menu === "contact" && (
            <>
              <DropdownItem item="Contact Us" />
              <DropdownItem item="Enquiry" />
            </>
          )}

        </div>
      )}
    </div>
  );
}


/* =========================================================
    COMMON DESKTOP DROPDOWN ITEM
========================================================= */

function DropdownItem({ item }) {
  return (

    <a
      href="#"
      className="
       relative block px-6 py-4 text-[15px] font-medium text-[#182438]
       bg-white overflow-hidden transition-all duration-300
       hover:bg-[#EAF5E7] hover:text-[#5BBF43] hover:text-[16px] after:content-[''] 
       after:absolute after:left-0 after:top-0 after:h-full after:w-[3px] after:bg-[#5BBF43]
       after:scale-y-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-y-100"
    >
      {item}
    </a>

  );
}


/* =========================================================
    MOBILE PRODUCT
========================================================= */

function MobileProduct({
  title,
  product,
  openProduct,
  toggleProduct,
}) {
  return (

    <div className="mb-1">

      <button
        type="button"
        onClick={() => toggleProduct(product)}
        className="w-full flex items-center justify-between px-3 py-3.5 rounded-lg text-sm font-medium text-[#182438] hover:bg-[#EAF5E7] hover:text-[#5BBF43] transition-all duration-300"
      >

        <span>{title}</span>

        <span className="w-6 h-6 rounded-full bg-[#F1F6EF] flex items-center justify-center">

          <FaChevronRight
            size={9}
            className={`text-[#293F8F] transition-transform duration-300 ${openProduct === product
              ? "rotate-90"
              : ""
              }`}
          />

        </span>

      </button>


      {/* ================= MOBILE SUB ITEMS ================= */}

      {openProduct === product && (
        <div className="ml-3 mb-2">

          {product === "l3" && (
            <>
              <MobileItem item="L3 Product 1" />
              <MobileItem item="L3 Product 2" />
              <MobileItem item="L3 Product 3" />
            </>
          )}

          {product === "l5" && (
            <>
              <MobileItem item="L5 Product 1" />
              <MobileItem item="L5 Product 2" />
              <MobileItem item="L5 Product 3" />
            </>
          )}

          {product === "scooty" && (
            <>
              <MobileItem item="Scooty Product 1" />
              <MobileItem item="Scooty Product 2" />
              <MobileItem item="Scooty Product 3" />
            </>
          )}

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
}) {
  return (

    <div className="border-b border-gray-200">

      <button
        type="button"
        onClick={() => toggleDropdown(menu)}
        className="w-full flex items-center justify-between py-4 px-3 text-base font-semibold text-[#182438] hover:text-[#5BBF43] transition-colors duration-300"
      >

        <span>{title}</span>

        <span className="w-7 h-7 rounded-full bg-[#F1F6EF] flex items-center justify-center">

          <FaChevronDown
            size={11}
            className={`text-[#293F8F] transition-transform duration-300 ${openDropdown === menu
              ? "rotate-180"
              : ""
              }`}
          />

        </span>

      </button>

      {openDropdown === menu && (

        <div className="pb-2 pl-3 pr-1">

          {menu === "about" && (
            <>
              <MobileItem item="About Company" />
              <MobileItem item="Our Journey" />
              <MobileItem item="Our Team" />
            </>
          )}

          {menu === "gallery" && (
            <>
              <MobileItem item="Photos" />
              <MobileItem item="Videos" />
            </>
          )}

          {menu === "contact" && (
            <>
              <MobileItem item="Contact Us" />
              <MobileItem item="Enquiry" />
            </>
          )}

        </div>
      )}
    </div>
  );
}


/* =========================================================
    MOBILE ITEM
========================================================= */

function MobileItem({ item }) {
  return (

    <a
      href="#"
      className="
        relative block px-4 py-3 text-sm font-medium text-gray-600
       bg-white overflow-hidden transition-all duration-300 
       hover:bg-[#EAF5E7] hover:text-[#5BBF43] hover:text-[15px] after:content-['']
        after:absolute after:left-0 after:top-0 after:h-full after:w-[3px] after:bg-[#5BBF43] 
        after:scale-y-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-y-100"
    >
      {item}
    </a>

  );
}

export default MainHeader;
