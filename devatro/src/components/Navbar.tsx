import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img
              src="/devatro -uploads/94ed671b-d19d-456b-9d78-c216b636b06e.png"
              alt="Devatro Logo"
              className="h-10 mr-2"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-tech-dark hover:text-devatro-blue transition-colors"
          >
            Features
          </a>
          <a
            href="#projects"
            className="text-tech-dark hover:text-devatro-blue transition-colors"
          >
            Projects
          </a>
          <a
            href="#testimonials"
            className="text-tech-dark hover:text-devatro-blue transition-colors"
          >
            Clients
          </a>
          <a
            href="#about"
            className="text-tech-dark hover:text-devatro-blue transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-tech-dark hover:text-devatro-blue transition-colors"
          >
            Contact
          </a>
          <Button className="bg-gradient-to-r from-devatro-blue via-devatro-purple to-devatro-pink hover:opacity-90 transition-opacity">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-tech-dark p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#features"
              className="text-tech-dark hover:text-devatro-blue transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#projects"
              className="text-tech-dark hover:text-devatro-blue transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#testimonials"
              className="text-tech-dark hover:text-devatro-blue transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Clients
            </a>
            <a
              href="#about"
              className="text-tech-dark hover:text-devatro-blue transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-tech-dark hover:text-devatro-blue transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-gradient-to-r from-devatro-blue via-devatro-purple to-devatro-pink hover:opacity-90 transition-opacity w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
