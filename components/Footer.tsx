'use client';

import { Dumbbell, Phone, MapPin, Clock, ArrowUp, MessageSquare } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-black border-t border-zinc-900 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-900">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-red-500">
                <Dumbbell className="w-4 h-4" />
              </div>
              <span className="text-xl font-black uppercase text-white tracking-wider">
                PERFECT <span className="text-red-500">HEALTH & FITNESS</span>
              </span>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Navi Mumbai’s premier strength, conditioning, and transformation sanctuary. Biomechanic machinery, certified coaches, and custom nutrition in CBD Belapur.
            </p>
            <div className="flex items-center gap-4 text-xs font-semibold text-zinc-300">
              <span className="text-amber-400">⭐ 4.9 Rating</span>
              <span>•</span>
              <span>222+ Google Reviews</span>
              <span>•</span>
              <span className="text-red-400 font-bold">Sector 15, CBD Belapur</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {['About', 'Programs', 'Why Us', 'Trainers', 'Reviews', 'Gallery', 'Membership'].map((name) => (
                <li key={name}>
                  <a
                    href={`#${name.toLowerCase().replace(' ', '-')}`}
                    className="hover:text-white transition-colors"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+917769970021"
                  className="hover:text-red-400 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-red-500" />
                  <span>+91 77699 70021</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917769970021?text=Hi%20Perfect%20Health%20%26%20Fitness%2C%20I%20want%20to%20know%20more."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-400 transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-red-500" />
                  <span>WhatsApp Inquiries</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-[11px] leading-tight">
                  Arenja Chambers II, Sector 15, CBD Belapur, Navi Mumbai
                </span>
              </li>
            </ul>
          </div>

          {/* Timings */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4">
              Gym Timings
            </h4>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-zinc-300 font-semibold block">Mon – Sat:</span>
                <span className="text-red-400">6:00 AM – 11:00 PM</span>
              </div>
              <div className="pt-1">
                <span className="text-zinc-300 font-semibold block">Sunday:</span>
                <span className="text-zinc-400">7:00 AM – 2:00 PM</span>
              </div>
              <div className="pt-2 text-[11px] text-zinc-500">
                Non-stop afternoon access
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} Perfect Health & Fitness. All rights reserved. Designed for excellence.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-red-500" />
          </button>
        </div>
      </div>
    </footer>
  );
}
