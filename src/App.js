import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import ResumeDownload from "./components/ResumeDownload";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";
import DarkModeToggle from "./components/DarkModeToggle";
import "./index.css";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Changed to true for default dark mode

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "dark" : ""
      }`}
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <Navigation darkMode={darkMode} />
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero isVisible={isVisible} />
      <About />
      <Stats />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <ResumeDownload />
      <Blog />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  );
}
