import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation({ darkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();

    // Handle scroll to top for home
    if (href === "#" || href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMobileMenuOpen(false);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-4 shadow-lg backdrop-blur-md"
            : "py-6 backdrop-blur-sm"
        }`}
        style={{
          backgroundColor: isScrolled
            ? darkMode
              ? "rgba(15, 23, 42, 0.9)"
              : "rgba(255, 255, 255, 0.9)"
            : darkMode
            ? "rgba(15, 23, 42, 0.5)"
            : "rgba(255, 255, 255, 0.5)",
          borderBottom: isScrolled ? "1px solid var(--border)" : "none",
        }}
      >
        <div
          className="mx-auto px-6 flex items-center justify-between"
          style={{ maxWidth: 1280 }}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => scrollToSection(e, "#")}
            className="text-2xl font-bold"
            style={{
              background:
                "linear-gradient(to right, var(--primary), var(--secondary))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            CN
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="font-medium transition-colors hover:opacity-80"
                style={{ color: "var(--foreground)" }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            style={{ color: "var(--foreground)" }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden mt-4 px-6 py-4 rounded-lg mx-6"
            style={{
              backgroundColor: "var(--card)",
              border: "1px solid var(--border)",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block py-3 font-medium transition-colors hover:opacity-80"
                style={{ color: "var(--foreground)" }}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
