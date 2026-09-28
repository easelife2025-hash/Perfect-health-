'use client';

import { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, Dumbbell, ShieldCheck } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProgram?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialProgram = '1-Day Free VIP Pass',
}: BookingModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedProgram, setSelectedProgram] = useState(initialProgram);
  const [timing, setTiming] = useState('Morning (6 AM - 10 AM)');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Sync program only when modal is toggled open or initialProgram changes
  const [prevProgram, setPrevProgram] = useState(initialProgram);
  if (initialProgram !== prevProgram) {
    setPrevProgram(initialProgram);
    setSelectedProgram(initialProgram);
  }

  // Handle body scroll locking
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const whatsappLink = `https://wa.me/917769970021?text=${encodeURIComponent(
    `Hello Perfect Health & Fitness! I just submitted a trial pass request for "${selectedProgram}". My name is ${name}, phone ${phone}.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden">
        {/* Top Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-red-950/60 border border-red-600 flex items-center justify-center text-red-500 mb-5">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black uppercase text-white tracking-tight">
              SLOT RESERVED!
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 mt-2 mb-6 leading-relaxed max-w-sm">
              We look forward to welcoming you to <strong className="text-white">Perfect Health & Fitness</strong>, CBD Belapur. Our team will ping you on WhatsApp to confirm your schedule.
            </p>

            <div className="w-full space-y-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-extrabold uppercase tracking-wider text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-red-950 flex items-center justify-center gap-2"
              >
                <span>Open Instant WhatsApp Chat</span>
              </a>

              <button
                onClick={handleClose}
                className="w-full py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2.5 mb-2 text-red-500">
              <Dumbbell className="w-5 h-5" />
              <span className="text-xs font-black uppercase tracking-widest">
                PERFECT HEALTH & FITNESS
              </span>
            </div>

            <h3 className="text-2xl font-black uppercase text-white tracking-tight">
              START YOUR TRANSFORMATION
            </h3>
            <p className="text-xs text-zinc-400 mt-1 mb-6">
              Claim your free VIP 1-day pass or inquire about custom coaching.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikram Shinde"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 text-white text-xs sm:text-sm rounded-xl px-3.5 py-3 focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98200 XXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 text-white text-xs sm:text-sm rounded-xl px-3.5 py-3 focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  Selected Program / Goal
                </label>
                <input
                  type="text"
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 text-white text-xs sm:text-sm rounded-xl px-3.5 py-3 focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  Preferred Time Slot
                </label>
                <select
                  value={timing}
                  onChange={(e) => setTiming(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 text-white text-xs sm:text-sm rounded-xl px-3.5 py-3 focus:outline-none focus:border-red-600 transition-colors"
                >
                  <option value="Morning (6 AM - 10 AM)">Morning (6:00 AM – 10:00 AM)</option>
                  <option value="Midday (11 AM - 4 PM)">Midday (11:00 AM – 4:00 PM)</option>
                  <option value="Evening (5 PM - 8 PM)">Evening (5:00 PM – 8:00 PM)</option>
                  <option value="Night (8 PM - 11 PM)">Night (8:00 PM – 11:00 PM)</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-black uppercase tracking-wider text-xs sm:text-sm rounded-xl transition-all shadow-xl shadow-red-950 flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                {loading ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <span>Confirm Free Pass</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-500 pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
                <span>100% Free VIP Access • No credit card required</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

