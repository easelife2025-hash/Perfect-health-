'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Eye, X, ChevronLeft, ChevronRight, Maximize2, ArrowLeft } from 'lucide-react';

interface GalleryItem {
  id: string;
  category: 'Equipment Floor' | 'Heavy Free Weights' | 'Functional Turf' | 'Coaching Moments';
  title: string;
  image: string;
  desc: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 'g-1',
    category: 'Equipment Floor',
    title: 'Precision Biomechanic Rigs',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000&auto=format&fit=crop',
    desc: 'Arsenal and Hammer-strength style pin-loaded machines engineered for maximum muscle fiber isolation.',
  },
  {
    id: 'g-2',
    category: 'Heavy Free Weights',
    title: 'Olympic Lifting Platforms & Dumbbell Bay',
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1000&auto=format&fit=crop',
    desc: 'Solid cast iron and rubber urethane dumbbells ranging up to 50kg with zero wait times.',
  },
  {
    id: 'g-3',
    category: 'Functional Turf',
    title: 'High-Paced Turf Conditioning Zone',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop',
    desc: 'Indoor turf runway for sled pushes, battle rope HIIT intervals, and multi-planar agility drills.',
  },
  {
    id: 'g-4',
    category: 'Coaching Moments',
    title: 'Form Auditing & Kinetic Precision',
    image: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=1000&auto=format&fit=crop',
    desc: 'Head coaches guiding members through safe progressive overload cycles without ego lifting.',
  },
  {
    id: 'g-5',
    category: 'Equipment Floor',
    title: 'Multi-Cable Crossover & Lat Stations',
    image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1000&auto=format&fit=crop',
    desc: 'Ultra-smooth dual pulley stations with diverse grip attachments for all anatomical angles.',
  },
  {
    id: 'g-6',
    category: 'Coaching Moments',
    title: 'Focus, Discipline & Results',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
    desc: 'An inspiring gym atmosphere where serious fitness enthusiasts push past plateaus together.',
  },
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Equipment Floor', 'Heavy Free Weights', 'Functional Turf', 'Coaching Moments'];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const closeLightbox = useCallback(() => {
    setActiveLightboxIndex(null);
  }, []);

  const nextLightbox = useCallback(() => {
    setActiveLightboxIndex((curr) => {
      if (curr === null) return null;
      return (curr + 1) % filteredItems.length;
    });
  }, [filteredItems.length]);

  const prevLightbox = useCallback(() => {
    setActiveLightboxIndex((curr) => {
      if (curr === null) return null;
      return (curr - 1 + filteredItems.length) % filteredItems.length;
    });
  }, [filteredItems.length]);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (activeLightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeLightboxIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (activeLightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, closeLightbox, nextLightbox, prevLightbox]);

  return (
    <section id="gallery" className="relative py-20 lg:py-28 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-red-500 font-bold uppercase tracking-widest text-xs sm:text-sm block mb-2">
            VISUAL TOUR
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight">
            INSIDE THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
              IRON SANCTUARY.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed">
            Take a look inside our CBD Belapur facility. Designed with high-contrast moody lighting, heavy gauge steel, and premium hygiene.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-red-600 text-white shadow-lg shadow-red-950'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800/90 group cursor-pointer bg-zinc-900 shadow-xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-108 transition-transform duration-700 brightness-95 group-hover:brightness-105 contrast-[1.05]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              
              {/* Top pill */}
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-red-400 border border-zinc-800">
                  {item.category}
                </span>
              </div>

              {/* Expand Icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/80 border border-zinc-700 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-base font-bold text-white uppercase tracking-tight group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-300 line-clamp-1 mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeLightboxIndex !== null && (
          <div
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col justify-between overflow-y-auto animate-fadeIn"
            onClick={closeLightbox}
          >
            {/* Top Bar for Lightbox */}
            <div
              className="sticky top-0 left-0 right-0 z-30 w-full bg-zinc-950/95 border-b border-zinc-800/90 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-2xl backdrop-blur-md"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider border border-zinc-700 hover:border-red-600 transition-all cursor-pointer shadow-md"
              >
                <ArrowLeft className="w-4 h-4 text-red-500" />
                <span>Back to Gallery</span>
              </button>

              <div className="text-center">
                <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
                  Photo {activeLightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>

              <button
                onClick={closeLightbox}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-lg shadow-red-950/60"
                aria-label="Close Lightbox Preview"
              >
                <X className="w-4 h-4" />
                <span className="hidden sm:inline">Close</span>
              </button>
            </div>

            {/* Center Area */}
            <div
              className="flex-1 w-full max-w-5xl mx-auto px-4 py-6 flex flex-col items-center justify-center relative my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous Button */}
              <button
                onClick={prevLightbox}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-white border border-zinc-700 hover:border-red-600 shadow-xl transition-all cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={nextLightbox}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-white border border-zinc-700 hover:border-red-600 shadow-xl transition-all cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Preview */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[60vh] sm:max-h-[68vh] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950">
                <Image
                  src={filteredItems[activeLightboxIndex].image}
                  alt={filteredItems[activeLightboxIndex].title}
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Details and Actions */}
              <div className="mt-4 text-center max-w-2xl px-2">
                <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-1">
                  {filteredItems[activeLightboxIndex].category}
                </span>
                <h4 className="text-lg sm:text-xl font-black uppercase text-white tracking-tight">
                  {filteredItems[activeLightboxIndex].title}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-relaxed">
                  {filteredItems[activeLightboxIndex].desc}
                </p>

                {/* Bottom Back to Gallery Button */}
                <div className="mt-5 flex items-center justify-center gap-3">
                  <button
                    onClick={closeLightbox}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-red-600 text-zinc-200 hover:text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md"
                  >
                    <ArrowLeft className="w-4 h-4 text-red-500" />
                    <span>Back to Gallery</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Spacer */}
            <div className="h-4 sm:h-6" />
          </div>
        )}
      </div>
    </section>
  );
}
