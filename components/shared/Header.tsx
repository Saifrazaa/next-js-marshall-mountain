'use client';

import { useEffect, useState } from "react";
import Button from "../ui/Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = [
    { href: "/", label: "Home", isActive: true },
    { href: "/mountain-experience", label: "Mountain Experience" },
    { href: "/ceremony-locations", label: "Ceremony Locations" },
    { href: "/reception", label: "Our Reception" },
    { href: "/pricing", label: "Our Pricing" },
    { href: "/real-moments", label: "Real Moments" },
  ];

  return (
    <>
      <header className={`w-full px-6 md:px-12 xl:px-25 py-5 flex items-center justify-between gap-2.5 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        {/* Logo or Brand - Optional */}
        <div className="flex items-center xl:hidden">
          <span className="text-white font-semibold text-xl">Marshal Mountain</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex flex-1 items-center justify-center gap-8.75 min-h-0 min-w-0">
          {menuItems.map((item) => (
            <Button 
              key={item.href}
              href={item.href} 
              variant="link" 
              className={item.isActive ? "underline decoration-solid text-[#ebebeb]" : ""}
            >
              {item.label}
            </Button>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden xl:flex items-center rounded-12.5">
          <Button href="/contact" variant="primary" className="px-9 py-3">
            Contact us
          </Button>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="xl:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 z-50 relative"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </header>

      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 xl:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMenu}
      />

      {/* Mobile & Tablet Drawer */}
      <div className={`fixed top-0 left-0 h-full bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-lg z-40 xl:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} w-full md:w-87.5 shadow-2xl`}>
        <div className="flex flex-col h-full pt-24 pb-8 px-8">
          {/* Menu Items */}
          <nav className="flex flex-col space-y-2 flex-1">
            {menuItems.map((item, index) => (
              <Button
                key={item.href}
                href={item.href}
                variant="link"
                onClick={closeMenu}
                className={`text-left py-4 px-4 rounded-lg transition-all duration-200 hover:bg-white/10 text-lg ${item.isActive ? 'text-white font-semibold bg-white/5' : 'text-gray-300'}`}
              >
                {item.label}
              </Button>
            ))}
          </nav>

          {/* Contact Button in Drawer */}
          <div className="mt-6 pt-6 border-t border-white/20">
            <Button 
              href="/contact" 
              variant="primary" 
              className="w-full py-4 text-lg"
              onClick={closeMenu}
            >
              Contact us
            </Button>
          </div>

          {/* Optional: Additional Info */}
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>Experience the magic of Marshal Mountain</p>
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
