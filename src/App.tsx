import React, { useEffect } from "react";
import Resume from "./components/resume/resume";
import Header from "./components/header/header";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
// import Portfolio from "./components/portfolio/portfolio";
import Testimonials from "./components/testimonials/testimonials";
import Footer from "./components/footer/footer";
import Status from "./components/status/status";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      <Header />
      <About />
      <Resume />
      <Skills />
      <Status />
      {/* <Portfolio /> */}
      <Testimonials />
      <Footer />
    </div>
  );
}
