import { useEffect, useRef, useState } from "react";
import {
  FaBars,
  FaChevronDown,
  FaChevronRight,
  FaPhoneAlt,
  FaTimes,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const logoSrc = "/nev-logo-cropped.png";

const menuItems = {

  gallery: [
    { label: "Photos", path: "/photos" },
    { label: "Videos", path: "/videos" },
  ],
  contact: [
    { label: "Contact Us", path: "/contact" },
    { label: "Enquiry", path: "/enquiry" },
  ],
};

const productItems = {
  l3: [
    { label: "L3 Butterfly MS", path: "/butterfly-ms" },
    { label: "L3 Butterfly SS", path: "/butterfly-ss" },
  ],

  l5: [
    { label: "L5 DLX Passenger 3 Plus 1", path: "/l5-dlx-passenger-3-plus-1" },
    { label: "L5 ECO 6 + 1", path: "/l5-eco-6-plus-1" },
    { label: "L5 Front Facia", path: "/l5-front-facia" },
    { label: "L5 Butterfly 6 + 1", path: "/l5-butterfly-6-plus-1" },
    { label: "L5 Ultra Loader", path: "/l5-ultra-loader" },
  ],

  scooty: [
    { label: "Single Light", path: "/single-light" },
    { label: "Double Light", path: "/double-light" },
    { label: "U Light", path: "/u-light" },
    { label: "N1", path: "/n1" },
    { label: "Activa", path: "/activa" },
  ],
};

function MainHeader() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openProduct, setOpenProduct] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isLogoFlipping, setIsLogoFlipping] = useState(false);

  const closeTimer = useRef(null);
  const headerRef = useRef(null);
  const logoFlipTimer = useRef(null);
  const navigate = useNavigate();

  const openMenu = (menu) => {
    clearTimeout(closeTimer.current);
    setOpenDropdown(menu);
    setOpenProduct(null);
  };

  const closeMenuWithDelay = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setOpenDropdown(null);
      setOpenProduct(null);
    }, 120);
  };

  const cancelClose = () => {
    clearTimeout(closeTimer.current);
  };

  const toggleDropdown = (menu) => {
    clearTimeout(closeTimer.current);

    if (openDropdown === menu) {
      setOpenDropdown(null);
      setOpenProduct(null);
      return;
    }

    setOpenDropdown(menu);
    setOpenProduct(null);
  };

  const toggleProduct = (product) => {
    clearTimeout(closeTimer.current);
    setOpenProduct(openProduct === product ? null : product);
  };

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    return () => clearTimeout(logoFlipTimer.current);
  }, []);

  return (
    <header ref={headerRef} className="relative z-50 bg-[#071426] px-3 pb-4 sm:px-5 lg:px-7">
      <style>
        {`
          @keyframes logoFlipSpin {
            0% {
              transform: rotateY(0deg) scale(1);
              filter: brightness(1) drop-shadow(0 0 0px rgba(91,191,67,0));
            }
            25% {
              transform: rotateY(90deg) scale(1.08);
              filter: brightness(1.3) drop-shadow(0 0 10px rgba(91,191,67,0.6));
            }
            50% {
              transform: rotateY(180deg) scale(1.12);
              filter: brightness(1.6) drop-shadow(0 0 16px rgba(91,191,67,0.85));
            }
            75% {
              transform: rotateY(270deg) scale(1.08);
              filter: brightness(1.3) drop-shadow(0 0 10px rgba(91,191,67,0.6));
            }
            100% {
              transform: rotateY(360deg) scale(1);
              filter: brightness(1) drop-shadow(0 0 0px rgba(91,191,67,0));
            }
          }

          .logo-flip-wrapper {
            perspective: 800px;
          }

          .logo-flip-active {
            animation: logoFlipSpin 0.65s ease-in-out;
            transform-style: preserve-3d;
          }
        `}
      </style>

      <div className="relative mx-auto max-w-[1560px]">
        <span className="absolute left-[-5px] top-3 hidden h-20 w-7 rounded-l-[22px] bg-[#5BBF43] lg:block" />
        <span className="absolute right-[-5px] top-3 hidden h-20 w-7 rounded-r-[22px] bg-[#5BBF43] lg:block" />

        <div className="relative mx-auto max-w-[1560px]">
          <div className="relative rounded-[16px] border border-white/70 bg-white shadow-[0_14px_32px_rgba(0,0,0,0.18)]">

            <div className="flex min-h-[78px] items-center px-4 sm:px-6 lg:min-h-[90px] lg:px-9 xl:px-12">

              {/* ================= LOGO ================= */}

              <Link
                to="/"
                className="flex min-w-0 items-center pr-4 sm:pr-6 lg:w-[20%] lg:border-r lg:border-[#D7DCE4] lg:pr-8"
              >
                <span
                  className="logo-flip-wrapper block h-[62px] w-[122px] sm:h-[68px] sm:w-[136px] lg:h-[78px] lg:w-[156px] xl:w-[166px]"
                  onMouseEnter={() => {
                    if (isLogoFlipping) return;
                    setIsLogoFlipping(true);
                    clearTimeout(logoFlipTimer.current);
                    logoFlipTimer.current = setTimeout(() => {
                      setIsLogoFlipping(false);
                    }, 650);
                  }}
                  onMouseLeave={() => {
                    clearTimeout(logoFlipTimer.current);
                    setIsLogoFlipping(false);
                  }}
                >
                  <img
                    src={logoSrc}
                    alt="NEV Navigate"
                    className={`h-full w-full object-contain ${isLogoFlipping ? "logo-flip-active" : ""}`}
                  />
                </span>
              </Link>

              <nav className="hidden flex-1 items-center justify-center lg:flex">
                <div className="flex h-full items-center gap-7 text-[14px] font-bold text-[#142033] xl:gap-11 xl:text-[15px]">

                  {/* HOME */}

                  <Link
                    to="/"
                    className="relative flex h-[90px] items-center text-[#142033] transition-colors duration-300 after:absolute after:bottom-1 after:left-0 after:h-[3px] after:w-full after:bg-[#5BBF43] hover:text-[#5BBF43]"
                  >
                    Home
                  </Link>


                  {/* ================= PRODUCTS ================= */}

                  <div
                    className="relative flex h-[90px] items-center"
                    onMouseEnter={() => openMenu("products")}
                    onMouseLeave={closeMenuWithDelay}
                  >
                    <button
                      type="button"
                      onClick={() => toggleDropdown("products")}
                      className="flex items-center gap-2 whitespace-nowrap transition-colors duration-300 hover:text-[#5BBF43]"
                    >
                      <span>Our Products</span>

                      <FaChevronDown
                        size={12}
                        className={`transition-transform duration-300 ${openDropdown === "products"
                          ? "rotate-180"
                          : ""
                          }`}
                      />
                    </button>

                    {openDropdown === "products" && (
                      <div
                        className="absolute left-1/2 top-full w-[260px] -translate-x-1/2 border-t-[3px] border-[#5BBF43] bg-white py-1 shadow-[0_15px_40px_rgba(24,36,56,0.18)]"
                        onMouseEnter={cancelClose}
                        onMouseLeave={closeMenuWithDelay}
                      >
                        <ProductDesktopItem
                          title="L3 (Electric Rickshaw)"
                          product="l3"
                          openProduct={openProduct}
                          setOpenProduct={setOpenProduct}
                          cancelClose={cancelClose}
                          closeMenuWithDelay={closeMenuWithDelay}
                        />

                        <ProductDesktopItem
                          title="L5 (Electric Auto)"
                          product="l5"
                          openProduct={openProduct}
                          setOpenProduct={setOpenProduct}
                          cancelClose={cancelClose}
                          closeMenuWithDelay={closeMenuWithDelay}
                        />

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


                  {/* ================= ABOUT ================= */}

                  <Link
                    to="/about"
                    className="relative flex h-[90px] items-center text-[#142033] transition-colors duration-300 after:absolute after:bottom-1 after:left-0 after:h-[3px] after:w-full  hover:text-[#5BBF43]"
                  >
                    About Us
                  </Link>


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

              <div className="ml-auto flex items-center lg:hidden">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenu(!mobileMenu);
                    setOpenDropdown(null);
                    setOpenProduct(null);
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#10223A] text-white shadow-md transition-all duration-300 hover:bg-[#5BBF43] hover:text-[#071426]"
                  aria-label="Toggle Menu"
                >
                  {mobileMenu ? <FaTimes size={19} /> : <FaBars size={19} />}
                </button>

              </div>

            </div>

            {/* ================= MOBILE MENU ================= */}

            {mobileMenu && (
              <div className="lg:hidden border-t border-[#D7DCE4] bg-white px-4 py-4 shadow-[0_15px_35px_rgba(24,36,56,0.12)] sm:px-6">

                {/* HOME */}

                <Link
                  to="/"
                  onClick={() => setMobileMenu(false)}
                  className="block border-b border-gray-200 px-3 py-4 text-base font-bold text-[#142033] transition-colors duration-300 hover:text-[#5BBF43]"
                >
                  Home
                </Link>

                {/* PRODUCTS */}

                <div className="border-b border-gray-200">

                  <button
                    type="button"
                    onClick={() => toggleDropdown("products")}
                    className="flex w-full items-center justify-between px-3 py-4 text-base font-bold text-[#142033]"
                  >
                    <span>Our Products</span>

                    <MobileCircle
                      active={openDropdown === "products"}
                    />
                  </button>

                  {openDropdown === "products" && (
                    <div className="mb-3 ml-3 border-l-2 border-[#5BBF43] pl-3">

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


                {/* GALLERY */}

                <MobileDropdown
                  title="Gallery"
                  menu="gallery"
                  openDropdown={openDropdown}
                  toggleDropdown={toggleDropdown}
                />

                {/* ABOUT */}

                <Link
                  to="/about"
                  onClick={() => setMobileMenu(false)}
                  className="block border-b border-gray-200 px-3 py-4 text-base font-bold text-[#142033] transition-colors duration-300 hover:text-[#5BBF43]"
                >
                  About Us
                </Link>

                {/* CONTACT */}

                <MobileDropdown
                  title="Contact Us"
                  menu="contact"
                  openDropdown={openDropdown}
                  toggleDropdown={toggleDropdown}
                />

                {/* MOBILE PHONE */}

                <a
                  href="tel:18001210259"
                  className="sm:hidden flex items-center justify-center gap-3 mt-5 py-3.5 rounded-xl bg-[#293F8F] text-white font-semibold shadow-md hover:bg-[#5BBF43] transition-all duration-300"
                >
                  <FaPhoneAlt size={15} />
                  18001210259
                </a>

              </div>
            )}

          </div>
        </div>
      </div>
    </header>
  );
}

function ProductDesktopItem({
  title,
  product,
  openProduct,
  setOpenProduct,
  cancelClose,
  closeMenuWithDelay,
}) {
  const isActive = openProduct === product;

  return (
    <div
      className={`relative flex cursor-pointer items-center justify-between px-6 py-4 transition-all duration-300 ${isActive
        ? "bg-[#EAF5E7]"
        : "bg-white hover:bg-[#EAF5E7]"
        }`}
      onMouseEnter={() => {
        cancelClose();
        setOpenProduct(product);
      }}
    >
      <span className={`text-[15px] font-semibold ${isActive ? "text-[#5BBF43]" : "text-[#142033]"}`}>
        {title}
      </span>

      <FaChevronRight
        size={10}
        className={`transition-all duration-300 ${isActive
          ? "translate-x-1 text-[#5BBF43]"
          : "text-[#142033]"
          }`}
      />

      {isActive && (
        <div
          className="absolute left-full top-[-3px] w-[245px] border-t-[3px] border-[#5BBF43] bg-white shadow-[0_15px_40px_rgba(24,36,56,0.18)]"
          onMouseEnter={cancelClose}
          onMouseLeave={closeMenuWithDelay}
        >
          {productItems[product].map((item) => (
            <DropdownItem
              key={item.path}
              item={item}
            />
          ))}
        </div>
      )}
    </div>
  );
}

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
      className="relative flex h-[90px] items-center"
      onMouseEnter={() => openMenu(menu)}
      onMouseLeave={closeMenuWithDelay}
    >
      <button
        type="button"
        onClick={() => toggleDropdown(menu)}
        className="flex items-center gap-2 whitespace-nowrap transition-colors duration-300 hover:text-[#5BBF43]"
      >
        <span>{title}</span>
        <FaChevronDown
          size={12}
          className={`transition-transform duration-300 ${openDropdown === menu
            ? "rotate-180"
            : ""
            }`}
        />
      </button>

      {openDropdown === menu && (
        <div
          className="absolute left-0 top-full w-[210px] border-t-[3px] border-[#5BBF43] bg-white shadow-[0_15px_40px_rgba(24,36,56,0.18)]"
          onMouseEnter={cancelClose}
          onMouseLeave={closeMenuWithDelay}
        >
          {menuItems[menu].map((item) => (
            <DropdownItem
              item={item}
              key={item.path}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// routing*************************

function DropdownItem({ item }) {
  return (
    <Link
      to={item.path}
      className="relative block bg-white px-6 py-4 text-[15px] font-semibold text-[#142033] transition-all duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-[3px] after:origin-center after:scale-y-0 after:bg-[#5BBF43] after:transition-transform after:duration-300 hover:bg-[#EAF5E7] hover:text-[#5BBF43] hover:after:scale-y-100"
    >
      {item.label}
    </Link>
  );
}

function MobileCircle({ active }) {
  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F1F6EF]">
      <FaChevronDown
        size={11}
        className={`text-[#10223A] transition-transform duration-300 ${active ? "rotate-180" : ""
          }`}
      />
    </span>
  );
}

function MobileProduct({ title, product, openProduct, toggleProduct }) {
  return (
    <div className="mb-1">
      <button
        type="button"
        onClick={() => toggleProduct(product)}
        className="flex w-full items-center justify-between rounded-lg px-3 py-3.5 text-sm font-semibold text-[#142033] transition-all duration-300 hover:bg-[#EAF5E7] hover:text-[#5BBF43]"
      >
        <span>{title}</span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F1F6EF]">
          <FaChevronRight
            size={9}
            className={`text-[#10223A] transition-transform duration-300 ${openProduct === product
              ? "rotate-90"
              : ""
              }`}
          />
        </span>
      </button>

      {openProduct === product && (
        <div className="mb-2 ml-3">
          {productItems[product].map((item) => (
            <MobileItem
              key={item.path}
              item={item}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function MobileDropdown({ title, menu, openDropdown, toggleDropdown }) {
  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        onClick={() => toggleDropdown(menu)}
        className="flex w-full items-center justify-between px-3 py-4 text-base font-bold text-[#142033] transition-colors duration-300 hover:text-[#5BBF43]"
      >
        <span>{title}</span>
        <MobileCircle active={openDropdown === menu} />
      </button>

      {openDropdown === menu && (
        <div className="pb-2 pl-3 pr-1">
          {menuItems[menu].map((item) => (
            <MobileItem item={item} key={item.path} />
          ))}
        </div>
      )}
    </div>
  );
}

// routing*************************
function MobileItem({ item }) {
  return (
    <Link
      to={item.path}
      className="relative block bg-white px-4 py-3 text-sm font-semibold text-gray-600 transition-all duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-[3px] after:origin-center after:scale-y-0 after:bg-[#5BBF43] after:transition-transform after:duration-300 hover:bg-[#EAF5E7] hover:text-[#5BBF43] hover:after:scale-y-100"
    >
      {item.label}
    </Link>
  );
}

export default MainHeader;