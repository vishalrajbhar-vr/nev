import { useEffect, useRef, useState } from "react";
import {
  FaBars,
  FaChevronDown,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";

const logoSrc = "/nev-logo-cropped.png";

const menuItems = {
  about: ["About Company", "Our Journey", "Our Team"],
  gallery: ["Photos", "Videos"],
  contact: ["Contact Us", "Enquiry"],
};

const productItems = {
  l3: ["L3 Product 1", "L3 Product 2", "L3 Product 3"],
  l5: ["L5 Product 1", "L5 Product 2", "L5 Product 3"],
  scooty: ["Scooty Product 1", "Scooty Product 2", "Scooty Product 3"],
};

function MainHeader() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openProduct, setOpenProduct] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const closeTimer = useRef(null);
  const headerRef = useRef(null);

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

  return (
    <header ref={headerRef} className="relative z-50 bg-[#071426] px-3 pb-5 sm:px-5 lg:px-7">
      <div className="relative mx-auto max-w-[1560px]">
        <span className="absolute left-[-5px] top-3 hidden h-20 w-7 rounded-l-[22px] bg-[#5BBF43] lg:block" />
        <span className="absolute right-[-5px] top-3 hidden h-20 w-7 rounded-r-[22px] bg-[#5BBF43] lg:block" />

        <div className="relative rounded-[16px] border border-white/70 bg-white shadow-[0_14px_32px_rgba(0,0,0,0.18)]">
          <div className="flex min-h-[78px] items-center px-4 sm:px-6 lg:min-h-[90px] lg:px-9 xl:px-12">
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
                className="flex items-center gap-2 whitespace-nowrap text-[#182438] hover:text-[#5BBF43] transition-colors duration-300"
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
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[240px] bg-white shadow-[0_15px_40px_rgba(24,36,56,0.15)] border-t-[3px] border-[#5BBF43] overflow-visible py-1" onMouseEnter={cancelClose}
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

                <DesktopDropdown
                  title="About Us"
                  menu="about"
                  openDropdown={openDropdown}
                  openMenu={openMenu}
                  toggleDropdown={toggleDropdown}
                  closeMenuWithDelay={closeMenuWithDelay}
                  cancelClose={cancelClose}
                />

                <DesktopDropdown
                  title="Gallery"
                  menu="gallery"
                  openDropdown={openDropdown}
                  openMenu={openMenu}
                  toggleDropdown={toggleDropdown}
                  closeMenuWithDelay={closeMenuWithDelay}
                  cancelClose={cancelClose}
                />

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

          {mobileMenu && (
            <div className="lg:hidden border-t border-[#D7DCE4] bg-white px-4 py-4 shadow-[0_15px_35px_rgba(24,36,56,0.12)] sm:px-6">
              <a
                href="#"
                onClick={() => setMobileMenu(false)}
                className="block border-b border-gray-200 px-3 py-4 text-base font-bold text-[#142033] transition-colors duration-300 hover:text-[#5BBF43]"
              >
                Home
              </a>

              <div className="border-b border-gray-200">
                <button
                  type="button"
                  onClick={() => toggleDropdown("products")}
                  className="flex w-full items-center justify-between px-3 py-4 text-base font-bold text-[#142033]"
                >
                  <span>Our Products</span>
                  <MobileCircle active={openDropdown === "products"} />
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

              {Object.keys(menuItems).map((menu) => (
                <MobileDropdown
                  key={menu}
                  title={menu === "about" ? "About Us" : menu === "gallery" ? "Gallery" : "Contact Us"}
                  menu={menu}
                  openDropdown={openDropdown}
                  toggleDropdown={toggleDropdown}
                />
              ))}

            </div>
          )}
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
      className={`relative flex cursor-pointer items-center justify-between px-6 py-4 transition-all duration-300 ${
        isActive ? "bg-[#EAF5E7]" : "bg-white hover:bg-[#EAF5E7]"
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
        className={`transition-all duration-300 ${
          isActive ? "translate-x-1 text-[#5BBF43]" : "text-[#142033]"
        }`}
      />


      {/* ================= SUB MENU ================= */}

      {openProduct === product && (

        <div
          className="absolute top-[-3px] left-full w-[245px] bg-white shadow-[0_15px_40px_rgba(24,36,56,0.15)] border-t-[3px] border-[#5BBF43] overflow-hidden"
          onMouseEnter={cancelClose}
          onMouseLeave={closeMenuWithDelay}
        >

          {/* ================= L3 PRODUCTS ================= */}

          {product === "l3" && (
            <>
              <DropdownItem item="L3 Product 1" />
              <DropdownItem item="L3 Product 2" />
              <DropdownItem item="L3 Product 3" />
            </>
          )}


          {/* ================= L5 PRODUCTS ================= */}

          {product === "l5" && (
            <>
              <DropdownItem item="L5 Product 1" />
              <DropdownItem item="L5 Product 2" />
              <DropdownItem item="L5 Product 3" />
            </>
          )}


          {/* ================= SCOOTY PRODUCTS ================= */}

          {product === "scooty" && (
            <>
              <DropdownItem item="Scooty Product 1" />
              <DropdownItem item="Scooty Product 2" />
              <DropdownItem item="Scooty Product 3" />
            </>
          )}

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
          className={`transition-transform duration-300 ${openDropdown === menu ? "rotate-180" : ""}`}
        />
      </button>



      {openDropdown === menu && (

        <div
          className="absolute top-full left-0 w-[195px] bg-white shadow-[0_15px_40px_rgba(24,36,56,0.15)] border-t-[3px] border-[#5BBF43] overflow-hidden"
          onMouseEnter={cancelClose}
          onMouseLeave={closeMenuWithDelay}
        >

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

function DropdownItem({ item }) {
  return (
    <a
      href="#"
      className="relative block px-6 py-4 text-[15px] font-medium text-[#182438] bg-white overflow-hidden transition-all duration-300 hover:bg-[#EAF5E7] hover:text-[#5BBF43] hover:text-[16px] after:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:w-[3px] after:bg-[#5BBF43] after:scale-y-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-y-100"
    >
      {item}
    </a>
  );
}

function MobileCircle({ active }) {
  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F1F6EF]">
      <FaChevronDown
        size={11}
        className={`text-[#10223A] transition-transform duration-300 ${active ? "rotate-180" : ""}`}
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
            className={`text-[#10223A] transition-transform duration-300 ${
              openProduct === product ? "rotate-90" : ""
            }`}
          />
        </span>
      </button>

      {openProduct === product && (
        <div className="mb-2 ml-3">
          {productItems[product].map((item) => (
            <MobileItem item={item} key={item} />
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
            <MobileItem item={item} key={item} />
          ))}
        </div>
      )}
    </div>
  );
}

function MobileItem({ item }) {
  return (
    <a
      href="#"
      className="relative block px-4 py-3 text-sm font-medium text-gray-600 bg-white overflow-hidden transition-all duration-300 hover:bg-[#EAF5E7] hover:text-[#5BBF43] hover:text-[15px] after:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:w-[3px] after:bg-[#5BBF43] after:scale-y-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-y-100"
    >
      {item}
    </a>
  );
}

export default MainHeader;
