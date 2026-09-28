'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock, MapPin, ChevronRight, Dumbbell } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (programName?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Membership', href: '#membership' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Top micro banner on desktop */}
      <div className="hidden lg:block bg-zinc-950 border-b border-zinc-900 text-xs text-zinc-400 py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse inline-block" />
              <strong className="text-zinc-100">OPEN TODAY:</strong> 6:00 AM – 11:00 PM
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              Arenja Chambers II, Sector 15, CBD Belapur, Navi Mumbai
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-zinc-300 font-medium">
              ⭐ 4.9 Rating (222+ Verified Reviews)
            </span>
            <a
              href="tel:+917769970021"
              className="text-white hover:text-red-400 transition-colors flex items-center gap-1 font-semibold"
            >
              <Phone className="w-3 h-3 text-red-500" />
              +91 77699 70021
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-zinc-950/95 backdrop-blur-md shadow-2xl shadow-black/80 border-b border-zinc-800/80 py-3.5'
            : 'bg-gradient-to-b from-black/90 via-black/60 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Perfect Health & Fitness Home"
          >
            <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-red-500 group-hover:border-red-600 group-hover:bg-red-950/30 transition-all shadow-md">
              <Dumbbell className="w-5 h-5 -rotate-45" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase font-sans">
                  PERFECT
                </span>
                <span className="w-2 h-2 rounded-full bg-red-600" />
              </div>
              <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-zinc-400 font-semibold -mt-1">
                HEALTH & FITNESS
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs uppercase tracking-wider font-semibold text-zinc-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-red-600 after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="relative inline-flex items-center justify-center px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 active:scale-95 rounded-md transition-all shadow-lg shadow-red-950/50 hover:shadow-red-600/30 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Join Now
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide Drawer */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-zinc-950 border-l border-zinc-800 p-6 flex flex-col justify-between shadow-2xl z-50 overflow-y-auto">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500">
                    <Dumbbell className="w-4 h-4" />
                  </div>
                  <span className="font-black text-white text-lg tracking-wider">
                    PERFECT <span className="text-red-500">FITNESS</span>
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-zinc-400 hover:text-white bg-zinc-900 rounded-md"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Status info */}
              <div className="my-4 p-3 rounded-lg bg-zinc-900/70 border border-zinc-800 text-xs">
                <div className="flex items-center justify-between text-zinc-300 mb-1">
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
                    Open Till 11:00 PM
                  </span>
                  <span className="text-amber-400 font-bold">⭐ 4.9 (222)</span>
                </div>
                <p className="text-zinc-400 text-[11px] truncate">
                  Sector 15, CBD Belapur, Navi Mumbai
                </p>
              </div>

              {/* Links */}
              <div className="flex flex-col space-y-2 mt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-center justify-between px-3 py-2.5 text-sm font-semibold uppercase tracking-wider text-zinc-200 hover:text-white hover:bg-zinc-900 rounded-md transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-zinc-600" />
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-zinc-800 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider text-sm rounded-md transition-colors shadow-lg shadow-red-950"
              >
                Claim Free 1-Day Pass
              </button>
              <a
                href="tel:+917769970021"
                className="w-full py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-medium text-xs flex items-center justify-center gap-2 rounded-md transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-red-500" />
                Call Gym: +91 77699 70021
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
