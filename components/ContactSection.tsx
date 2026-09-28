'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, Clock, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    goal: 'Weight & Fat Loss',
    slotPreference: 'Morning (6 AM - 10 AM)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Perfect Health & Fitness, my name is ${formState.name || 'Member'}. I would like to schedule a 1-day free trial session for ${formState.goal}. My phone is ${formState.phone}.`
  );

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-500 font-bold uppercase tracking-widest text-xs sm:text-sm block mb-2">
            START TODAY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight">
            CLAIM YOUR FREE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
              1-DAY VIP TRIAL PASS.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed">
            Experience our biomechanic equipment, meet the coaches, and feel the high-drive energy with zero obligation.
          </p>
        </div>

        {/* Form & Direct Reach Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-xl space-y-6">
              <h3 className="text-xl font-black uppercase text-white tracking-tight pb-4 border-b border-zinc-900">
                Direct Contact Channels
              </h3>

              {/* Phone */}
              <a
                href="tel:+917769970021"
                className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-red-600/60 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block">
                    Front Desk & Inquiries
                  </span>
                  <p className="text-base font-bold text-white group-hover:text-red-400 transition-colors">
                    +91 77699 70021
                  </p>
                  <span className="text-xs text-zinc-400">Direct call to Belapur front desk</span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917769970021?text=Hi%20Perfect%20Health%20%26%20Fitness%2C%20I%20would%20like%20to%20know%20more%20about%20membership%20and%20claim%20my%20trial%20pass."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-red-600/60 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block">
                    Instant WhatsApp Support
                  </span>
                  <p className="text-base font-bold text-white group-hover:text-red-400 transition-colors">
                    +91 77699 70021
                  </p>
                  <span className="text-xs text-zinc-400">Chat with head coach Rajesh directly</span>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-red-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block">
                    Gym Location
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-zinc-200">
                    Arenja Plaza (Arenja Chambers II), 403 P.No.7, Near Dmart, Sector 15, CBD Belapur, Navi Mumbai 400614
                  </p>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-red-500 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block">
                    Daily Schedule
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-zinc-200">
                    Mon – Sat: 6:00 AM – 11:00 PM <br />
                    Sunday: 7:00 AM – 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry / Trial Form */}
          <div className="lg:col-span-7 p-6 sm:p-10 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl relative">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-red-950/60 border border-red-600 flex items-center justify-center text-red-500 mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                  VIP TRIAL PASS RESERVED!
                </h3>
                <p className="text-sm text-zinc-300 max-w-md mt-2 mb-6 leading-relaxed">
                  Thank you, <strong className="text-white">{formState.name}</strong>. Our front desk at CBD Belapur has received your request. We will contact you via WhatsApp/call at <strong className="text-white">{formState.phone}</strong> to confirm your slot.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/917769970021?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-red-950"
                  >
                    <span>Instant WhatsApp Confirmation</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Book Another Pass
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight mb-1">
                    Book Your 1-Day Complimentary Pass
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400">
                    No payment details required. Come test our weights and facility in person.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rohan Sharma"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 text-white text-xs sm:text-sm rounded-lg px-3.5 py-3 focus:outline-none focus:border-red-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98200 XXXXX"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 text-white text-xs sm:text-sm rounded-lg px-3.5 py-3 focus:outline-none focus:border-red-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                      Primary Fitness Goal
                    </label>
                    <select
                      value={formState.goal}
                      onChange={(e) => setFormState({ ...formState, goal: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 text-white text-xs sm:text-sm rounded-lg px-3.5 py-3 focus:outline-none focus:border-red-600 transition-colors"
                    >
                      <option value="Weight & Fat Loss">Aggressive Fat Loss</option>
                      <option value="Muscle Building & Hypertrophy">Muscle Building & Hypertrophy</option>
                      <option value="1-on-1 Personal Training">1-on-1 Dedicated Personal Training</option>
                      <option value="Athletic & Functional Turf Conditioning">Athletic & Turf Conditioning</option>
                      <option value="Women's Toning & Glute Strength">Women’s Toning & Glute Strength</option>
                      <option value="Back Pain & Posture Correction">Back Pain & Posture Correction</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                      Preferred Workout Time
                    </label>
                    <select
                      value={formState.slotPreference}
                      onChange={(e) => setFormState({ ...formState, slotPreference: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 text-white text-xs sm:text-sm rounded-lg px-3.5 py-3 focus:outline-none focus:border-red-600 transition-colors"
                    >
                      <option value="Morning (6 AM - 10 AM)">Morning (6:00 AM – 10:00 AM)</option>
                      <option value="Midday (11 AM - 4 PM)">Midday (11:00 AM – 4:00 PM)</option>
                      <option value="Evening (5 PM - 8 PM)">Evening Peak (5:00 PM – 8:00 PM)</option>
                      <option value="Night (8 PM - 11 PM)">Night Owl (8:00 PM – 11:00 PM)</option>
                      <option value="Weekend Only">Weekend Only (Sunday)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                    Any specific injury or requirements? (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Lower back tightness, previous shoulder strain, wanting vegetarian diet plan..."
                    value={formState.notes}
                    onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 text-white text-xs sm:text-sm rounded-lg px-3.5 py-3 focus:outline-none focus:border-red-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-extrabold uppercase tracking-wider text-xs sm:text-sm rounded-lg transition-all shadow-xl shadow-red-950 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <span>Confirming Pass...</span>
                  ) : (
                    <>
                      <span>Reserve My Free 1-Day Trial Pass</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-zinc-500 text-center">
                  By submitting, you agree to receive a confirmation message on WhatsApp. Zero spam guaranteed.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
