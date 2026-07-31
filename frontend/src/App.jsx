import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopHeader from "./web/components/TopHeader";
import MainHeader from "./web/components/MainHeader";
import Footer from "./web/components/Footer";

import Home from "./web/pages/Home/Home";
import AboutHero from "./web/pages/about/AboutHero";
import KhalsaSuperDlx from "./web/pages/Products/KhalsaSuperDlx";
import KhalsaCargo from "./web/pages/Products/KhalsaCargo";
import KhalsaGrandLithium from "./web/pages/Products/KhalsaGrandLithium";
import Contact from "./web/pages/Contact";
import Enquiry from "./web/pages/Enquiry";


function App() {
  return (
    <Router>
      <TopHeader />
      <MainHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-hero" element={<AboutHero />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enquiry" element={<Enquiry />} />


      </Routes>

      <Footer />
    </Router>

  );
}

export default App;