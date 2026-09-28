'use client';

import { useState, useEffect } from 'react';
import { MapPin, Clock, Navigation, Phone, Copy, Check, ExternalLink, ShieldCheck } from 'lucide-react';

export default function LocationHours() {
  const [copied, setCopied] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);
  const [closingText, setClosingText] = useState('Closes at 11:00 PM tonight');

  const fullAddress = 'Chamber 2, Arenja Plaza, Perfect Health & Fitness, 403 P.No. 7, Near Dmart, Sector 15, CBD Belapur, Navi Mumbai, Maharashtra 400614';

  // Dynamic real-time calculation in IST (UTC+5:30)
  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      // Convert to IST
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utcTime + 3600000 * 5.5);

      const day = istTime.getDay(); // 0 is Sunday, 1-6 Mon-Sat
      const hours = istTime.getHours();
      const minutes = istTime.getMinutes();
      const currentDecimalTime = hours + minutes / 60;

      if (day === 0) {
        // Sunday: 7:00 AM - 2:00 PM
        if (currentDecimalTime >= 7.0 && currentDecimalTime < 14.0) {
          setIsOpenNow(true);
          setClosingText('Closes at 2:00 PM today (Sunday)');
        } else {
          setIsOpenNow(false);
          setClosingText('Opens Monday at 6:00 AM');
        }
      } else {
        // Mon-Sat: 6:00 AM - 11:00 PM
        if (currentDecimalTime >= 6.0 && currentDecimalTime < 23.0) {
          setIsOpenNow(true);
          setClosingText('Closes at 11:00 PM tonight');
        } else {
          setIsOpenNow(false);
          setClosingText('Opens at 6:00 AM tomorrow');
        }
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const schedule = [
    { day: 'Monday – Friday', hours: '6:00 AM – 11:00 PM', status: 'Full Operations' },
    { day: 'Saturday', hours: '6:00 AM – 11:00 PM', status: 'Full Operations' },
    { day: 'Sunday', hours: '7:00 AM – 2:00 PM', status: 'Morning Sessions Only' },
  ];

  return (
    <section id="location" className="relative py-20 lg:py-28 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-red-500 font-bold uppercase tracking-widest text-xs sm:text-sm block mb-2">
              LOCATION &amp; TIMINGS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight">
              CENTRALLY LOCATED IN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
                CBD BELAPUR, NAVI MUMBAI.
              </span>
            </h2>
          </div>

          {/* Live Status Indicator Pill */}
          <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-3 shrink-0 shadow-lg">
            <div className="relative flex items-center justify-center">
              <span
                className={`w-3 h-3 rounded-full ${
                  isOpenNow ? 'bg-red-500 animate-ping' : 'bg-zinc-600'
                }`}
              />
              <span
                className={`w-2.5 h-2.5 rounded-full absolute ${
                  isOpenNow ? 'bg-red-600' : 'bg-zinc-500'
                }`}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-white">
                  {isOpenNow ? 'OPEN RIGHT NOW' : 'CURRENTLY CLOSED'}
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 font-medium">
                {closingText}
              </p>
            </div>
          </div>
        </div>

        {/* Content Grid: Timings & Location Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Operating Hours & Address Details */}
          <div className="lg:col-span-6 space-y-6">
            {/* Opening Hours Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-black border border-zinc-800 shadow-xl">
              <div className="flex items-center gap-2.5 mb-6 text-red-500">
                <Clock className="w-5 h-5" />
                <h3 className="text-lg font-black uppercase text-white tracking-tight">
                  Operating Hours
                </h3>
              </div>

              <div className="space-y-4 divide-y divide-zinc-900">
                {schedule.map((item, idx) => (
                  <div key={idx} className={`flex items-center justify-between ${idx > 0 ? 'pt-4' : ''}`}>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                        {item.day}
                      </h4>
                      <p className="text-[11px] text-zinc-500">
                        {item.status}
                      </p>
                    </div>
                    <span className="text-xs sm:text-sm font-black text-red-400 bg-red-950/40 px-3 py-1 rounded border border-red-900/40">
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-zinc-400 mt-6 pt-4 border-t border-zinc-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-red-500 shrink-0" />
                <span>Open throughout afternoon hours — no midday shutdown!</span>
              </p>
            </div>

            {/* Address Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 shadow-xl">
              <div className="flex items-center gap-2.5 mb-4 text-red-500">
                <MapPin className="w-5 h-5" />
                <h3 className="text-lg font-black uppercase text-white tracking-tight">
                  Facility Address
                </h3>
              </div>

              <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-medium mb-4">
                Chamber 2, Arenja Plaza (Arenja Chambers II), 403 P.No.7, Near Dmart, Sector 15, CBD Belapur, Navi Mumbai, Maharashtra 400614
              </p>

              {/* Transit Distances */}
              <div className="grid grid-cols-2 gap-3 my-4 pt-3 border-t border-zinc-800/80">
                <div className="text-xs">
                  <span className="text-zinc-500 block text-[10px] uppercase font-bold">Transit Hub:</span>
                  <span className="text-zinc-200 font-semibold">3 Mins from Belapur Station</span>
                </div>
                <div className="text-xs">
                  <span className="text-zinc-500 block text-[10px] uppercase font-bold">Landmark:</span>
                  <span className="text-zinc-200 font-semibold">Directly opposite Dmart</span>
                </div>
                <div className="text-xs">
                  <span className="text-zinc-500 block text-[10px] uppercase font-bold">Road Access:</span>
                  <span className="text-zinc-200 font-semibold">2 Mins from Palm Beach Road</span>
                </div>
                <div className="text-xs">
                  <span className="text-zinc-500 block text-[10px] uppercase font-bold">Parking:</span>
                  <span className="text-zinc-200 font-semibold">Ample Two & Four Wheeler</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-zinc-800">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Perfect+Health+%26+Fitness+CBD+Belapur+Navi+Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Driving Directions</span>
                </a>

                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-red-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Address Copied!' : 'Copy Address'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Map Visual */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 flex flex-col h-full min-h-[420px]">
            {/* Top Bar for Map */}
            <div className="p-4 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Navi Mumbai Map View (CBD Belapur)
                </span>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Perfect+Health+%26+Fitness+CBD+Belapur+Navi+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-red-400 hover:text-red-300 font-semibold flex items-center gap-1"
              >
                <span>Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Google Map iframe */}
            <div className="relative flex-1 min-h-[360px] w-full bg-zinc-950">
              <iframe
                title="Perfect Health & Fitness Location Map"
                src="https://maps.google.com/maps?q=Arenja+Plaza+Sector+15+CBD+Belapur+Navi+Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(120%)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              
              {/* Floating card on top of map */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-zinc-950/95 border border-red-700/60 p-4 rounded-xl shadow-2xl backdrop-blur-md">
                <div className="flex items-center gap-2 text-red-500 mb-1">
                  <MapPin className="w-4 h-4" />
                  <strong className="text-white text-xs uppercase tracking-wider">Perfect Health & Fitness</strong>
                </div>
                <p className="text-[11px] text-zinc-300">
                  Arenja Chambers II, Sector 15, CBD Belapur (Near Dmart)
                </p>
                <div className="mt-2.5 flex items-center justify-between text-[10px]">
                  <span className="text-amber-400 font-bold">⭐ 4.9 (222 Reviews)</span>
                  <a
                    href="tel:+917769970021"
                    className="text-red-400 font-bold hover:underline"
                  >
                    +91 77699 70021
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
