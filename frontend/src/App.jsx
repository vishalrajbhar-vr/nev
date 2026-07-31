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

function App() {
  return (
    <Router>
      <TopHeader />
      <MainHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutHero />} />
        <Route
          path="/products/khalsa-super-deluxe"
          element={<KhalsaSuperDlx />}
        />
        <Route path="/products/khalsa-cargo" element={<KhalsaCargo />} />
        <Route path="/products/khalsa-grand-lithium" element={<KhalsaGrandLithium />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;