import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopHeader from "./web/components/TopHeader";
import MainHeader from "./web/components/MainHeader";
import Footer from "./web/components/Footer";
import Home from "./web/pages/Home/Home";
import Contact from "./web/pages/Contact";
import Enquiry from "./web/pages/Enquiry";
import L5DLXPassenger from "./web/pages/Products/L5DLXPassenger";
import Activa from "./web/pages/Products/Activa";
import L5ECO from "./web/pages/Products/L5ECO";
import L5FrontFacia from "./web/pages/Products/L5FrontFacia";
import L5Butterfly from "./web/pages/Products/L5Butterfly";
import L5UltraLoader from "./web/pages/Products/L5UltraLoader";
import L3ButterflyMS from "./web/pages/Products/L3ButterflyMS";
import L3ButterflySS from "./web/pages/Products/L3ButterflySS";
import Singlelight from "./web/pages/Products/Singlelight";
import Doublelight from "./web/pages/Products/Doublelight";
import ULight from "./web/pages/Products/ULight";
import N1 from "./web/pages/Products/N1";
import Photos from "./web/pages/Gallery/Photos";
import Videos from "./web/pages/Gallery/Videos";
import Aboute from "./web/pages/about/About";
import NotFound from "./web/pages/NotFound";

function App() {
  return (
    <Router>
      <div className="sticky top-0 z-[60]">
        <TopHeader />
        <MainHeader />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/l5-dlx-passenger-3-plus-1" element={<L5DLXPassenger />} />
        <Route path="/l5-eco-6-plus-1" element={<L5ECO />} />
        <Route path="/l5-front-facia" element={<L5FrontFacia />} />
        <Route path="/l5-butterfly-6-plus-1" element={<L5Butterfly />} />
        <Route path="/l5-ultra-loader" element={<L5UltraLoader />} />
        <Route path="/butterfly-ms" element={<L3ButterflyMS />} />
        <Route path="/butterfly-ss" element={<L3ButterflySS />} />
        <Route path="/single-light" element={<Singlelight />} />
        <Route path="/double-light" element={<Doublelight />} />
        <Route path="/u-light" element={<ULight />} />
        <Route path="/n1" element={<N1 />} />
        <Route path="/activa" element={<Activa />} />
        <Route path="/about" element={<Aboute />} />

        <Route path="*" element={<NotFound/>} />
      </Routes>

      <Footer />

      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10  z-100"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-16 h-16 hover:scale-130 transition-transform duration-300"
        />
      </a>
    </Router>
  );
}

export default App;
