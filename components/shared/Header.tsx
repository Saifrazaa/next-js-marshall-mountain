'use client';

import { useEffect, useState } from "react";
import Button from "../ui/Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className={`w-full px-25 py-5 flex items-center gap-2.5 overflow-hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <nav className="flex-1 flex items-center justify-center gap-8.75 min-h-0 min-w-0">
        <Button href="/" variant="link" className="underline decoration-solid text-[#ebebeb]">
          Home
        </Button>
        <Button href="/mountain-experience" variant="link">
          Mountain Experience
        </Button>
        <Button href="/ceremony-locations" variant="link">
          Ceremony Locations
        </Button>
        <Button href="/reception" variant="link">
          Our Reception
        </Button>
        <Button href="/pricing" variant="link">
          Our Pricing
        </Button>
        <Button href="/real-moments" variant="link">
          Real Moments
        </Button>
      </nav>
      <div className="flex items-center rounded-[50px]">
        <Button href="/contact" variant="primary" className="px-9 py-3">
          Contact us
        </Button>
      </div>
    </header>
  );
}
