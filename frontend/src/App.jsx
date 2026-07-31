import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopHeader from "./web/components/TopHeader";
import MainHeader from "./web/components/MainHeader";
import Footer from "./web/components/Footer";

import Home from "./web/pages/Home/Home";
import AboutHero from "./web/pages/about/AboutHero";
import L5DLXPassenger from "./web/pages/Products/L5DLXPassenger";
import Activa from "./web/pages/Products/Activa";


function App() {
  return (
    <Router>
      <TopHeader />
      <MainHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutHero />} />
        <Route
          path="/g"
          element={<L5DLXPassenger />}
        />
        <Route path="/activa" element={<Activa/>}/>
        
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;