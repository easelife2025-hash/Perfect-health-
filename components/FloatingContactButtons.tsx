'use client';

import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingContactButtons() {
  const whatsappUrl = 'https://wa.me/917769970021?text=Hi%20Perfect%20Health%20%26%20Fitness%2C%20I%20would%20like%20to%20know%20more%20about%20membership%20and%20claim%20my%20trial%20pass.';
  const phoneUrl = 'tel:+917769970021';

  return (
    <div
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 select-none"
      aria-label="Quick Contact Actions"
    >
      {/* Call Button */}
      <a
        href={phoneUrl}
        aria-label="Call Perfect Health & Fitness front desk"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-zinc-950 text-white border-2 border-red-600 shadow-2xl shadow-red-950/80 hover:bg-red-600 hover:scale-108 active:scale-95 transition-all duration-300"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 group-hover:text-white transition-colors" />
        
        {/* Tooltip on left */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-[11px] font-bold uppercase tracking-wider text-white whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-lg">
          Call: +91 77699 70021
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Perfect Health & Fitness"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-950/80 hover:scale-108 active:scale-95 transition-all duration-300"
      >
        {/* Subtle pulsing beacon */}
        <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 animate-ping" />
        <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-zinc-950" />

        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-[#25D366]" />

        {/* Tooltip on left */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-[11px] font-bold uppercase tracking-wider text-white whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-lg">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
