import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{
      background: "#030b17",
      color: "#edf5ff",
      minHeight: "100vh",
      fontFamily: "Inter, Arial, sans-serif",
      overflow: "hidden"
    }}>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}