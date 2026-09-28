'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Flame } from 'lucide-react';

interface HeroSliderProps {
  onOpenBooking?: (programName?: string) => void;
}

interface Slide {
  id: number;
  image: string;
  badge: string;
  headline: string;
  headlineAccent: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1920&auto=format&fit=crop',
    badge: 'NAVI MUMBAI’S PREMIER STRENGTH FACILITY',
    headline: 'NO EXCUSES.',
    headlineAccent: 'ONLY RESULTS.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1920&auto=format&fit=crop',
    badge: 'SCIENTIFIC BODY RECOMPOSITION',
    headline: 'FORGE YOUR',
    headlineAccent: 'STRONGEST PHYSIQUE.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop',
    badge: '10,000+ SQ. FT. SANCTUARY • ZERO WAITING',
    headline: 'ELITE EQUIPMENT.',
    headlineAccent: 'ZERO COMPROMISES.',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1920&auto=format&fit=crop',
    badge: '4.9★ RATED BY 222+ VERIFIED MEMBERS',
    headline: 'DEFY YOUR LIMITS.',
    headlineAccent: 'RULE YOUR BODY.',
  },
];

export default function HeroSlider({ onOpenBooking }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideDuration = 5500; // 5.5 seconds per slide
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((curr) => (curr + 1) % slides.length);
    }, slideDuration);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section
      className="relative w-full min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-black select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Gym Motivation Showcase"
    >
      {/* Background Images with increased brightness and crisp presentation */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{ transitionProperty: 'opacity, transform', transitionDuration: '1000ms' }}
          >
            <Image
              src={slide.image}
              alt={slide.headline}
              fill
              priority={index === 0}
              className="object-cover object-center brightness-[0.88] contrast-[1.05]"
              referrerPolicy="no-referrer"
            />
            {/* Clean, bright cinematic gradient that keeps gym details vibrant while ensuring text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/25 to-black/35" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/15 to-transparent" />
            {/* Subtle red ambient glow vignette */}
            <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        );
      })}

      {/* Main Content Area - Clean, Minimal & High Impact */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full flex flex-col justify-center min-h-[80vh] lg:min-h-[85vh]">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-red-500/60 text-red-400 text-xs sm:text-sm font-bold tracking-wider uppercase mb-5 backdrop-blur-md">
            <Flame className="w-4 h-4 text-red-500 fill-red-500" />
            <span>{slides[currentSlide].badge}</span>
          </div>

          {/* Big Bold Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase font-sans leading-[1.05] sm:leading-[1.02] drop-shadow-2xl">
            {slides[currentSlide].headline} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-rose-400">
              {slides[currentSlide].headlineAccent}
            </span>
          </h1>
        </div>

        {/* Minimal, elegant slide dots */}
        <div className="absolute bottom-8 left-4 sm:left-8 flex items-center gap-2 z-30">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentSlide ? 'w-8 bg-red-600' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
