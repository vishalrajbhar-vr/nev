import React from "react";
import TopHeader from "../web/components/TopHeader";
import MainHeader from "../web/components/MainHeader";
import Footer from "../web/components/Footer";

import Hero from "../components/Home/Hero/Hero";
import About from "../components/Home/About/About";
import WhyChooseUs from "../components/Home/WhyChooseUs/WhyChooseUs";
import Products from "../components/Home/Products/Products";
import Features from "../components/Home/Features/Features";
import Testimonials from "../components/Home/Testimonials/Testimonials";
import CTA from "../components/Home/CTA/CTA";
import FAQ from "../components/Home/FAQ/FAQ";
import Contact from "../components/Home/Contact/Contact";
import FooterCTA from "../components/Home/FooterCTA/FooterCTA";

function Navbar() {
  return (
    <>
      <TopHeader />
      <MainHeader />
    </>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#06152B]">
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Products />
      <Features />
      <Testimonials />
      <CTA />
      <FAQ />
      <Contact />
      <FooterCTA />
      <Footer />
    </div>
  );
}

export default Home;
