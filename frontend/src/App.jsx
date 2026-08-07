import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopHeader from "./web/components/TopHeader";
import MainHeader from "./web/components/MainHeader";
import Footer from "./web/components/Footer";
import Home from "./web/pages/home/Home";
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
import Nova from "./web/pages/Products/ChinaScooty/Nova";
import Lumo from "./web/pages/Products/ChinaScooty/Lumo";
import Sonic from "./web/pages/Products/ChinaScooty/Sonic";
import Pulse from "./web/pages/Products/ChinaScooty/Pulse";
import Bolt from "./web/pages/Products/ChinaScooty/Bolt";
import Flex from "./web/pages/Products/ChinaScooty/Flex";
import Vybe from "./web/pages/Products/ChinaScooty/Vybe";
import Volt from "./web/pages/Products/ChinaScooty/Volt";
import Starlite from "./web/pages/Products/ChinaScooty/Starlite";

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
        <Route path="/l5-eco-3-plus-1" element={<L5ECO />} />
        <Route path="/l5-front-facia" element={<L5FrontFacia />} />
        <Route path="/l5-butterfly-6-plus-1" element={<L5Butterfly />} />
        <Route path="/l5-ultra-loader" element={<L5UltraLoader />} />
        <Route path="/butterfly-ms" element={<L3ButterflyMS />} />
        <Route path="/butterfly-ss" element={<L3ButterflySS />} />
        <Route path="/indian-scooty/volt" element={<Singlelight />} />
        <Route path="/indian-scooty/vybe" element={<Doublelight />} />
        <Route path="/indian-scooty/lumo" element={<ULight />} />
        <Route path="/indian-scooty/loadstar" element={<N1 />} />
        <Route path="/indian-scooty/nova" element={<Activa />} />
        <Route path="/about" element={<Aboute />} />
        <Route path="/china-scooty/nova" element={<Nova />} />
        <Route path="/china-scooty/lumo" element={<Lumo />} />
        <Route path="/china-scooty/sonic" element={<Sonic />} />
        <Route path="/china-scooty/pulse" element={<Pulse />} />
        <Route path="/china-scooty/bolt" element={<Bolt />} />
        <Route path="/china-scooty/flex" element={<Flex />} />
        <Route path="/china-scooty/vybe" element={<Vybe />} />
        <Route path="/china-scooty/volt" element={<Volt />} />
        <Route path="/china-scooty/starlite" element={<Starlite />} />

        <Route path="*" element={<NotFound/>} />
      </Routes>

      <Footer />

      <a
        href="https://wa.me/919196598300"
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
