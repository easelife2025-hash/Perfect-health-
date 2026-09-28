'use client';

import Image from 'next/image';
import { ShieldCheck, Target, Zap, Award, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export default function AboutSection({ onOpenBooking }: AboutSectionProps) {
  const highlights = [
    {
      title: 'Biomechanic Excellence',
      description: 'Pin-loaded and plate-loaded machines custom calibrated to follow natural human muscle fiber arcs, minimizing joint stress.',
      icon: Target,
    },
    {
      title: 'Certified Master Mentorship',
      description: 'Our trainers hold international CSCS, ACE, and Olympic lifting credentials with 8+ years average practical coaching experience.',
      icon: Award,
    },
    {
      title: 'Daily Nutrition & Macro Audits',
      description: 'We don’t hand out cookie-cutter PDFs. You get custom macro breakdowns adapted to Indian home food and busy work schedules.',
      icon: Zap,
    },
    {
      title: 'Spotless Medical-Grade Hygiene',
      description: 'Continuous fresh air exchange system, sanitize-after-use discipline, and meticulously cleaned locker rooms daily.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-zinc-950 border-t border-zinc-900 overflow-hidden">
      {/* Background subtle light accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-red-500 font-bold uppercase tracking-widest text-xs sm:text-sm block mb-2">
              ABOUT PERFECT HEALTH &amp; FITNESS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight">
              BUILT FOR THOSE WHO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
                REFUSE MEDIOCRITY.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-400 max-w-md leading-relaxed">
            Headquartered in <strong className="text-zinc-200">Arenja Chambers II, Sector 15, CBD Belapur</strong>, Perfect Health & Fitness is Navi Mumbai’s dedicated high-performance iron sanctuary.
          </p>
        </div>

        {/* Grid: Story + Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Visual Showcase (Images) */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 relative">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-zinc-800 shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1000&auto=format&fit=crop"
                alt="Gym equipment floor at Perfect Health & Fitness"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 bg-black/70 px-2.5 py-1 rounded inline-block backdrop-blur-sm border border-red-950">
                  Strength Arena
                </span>
                <p className="text-white text-sm font-semibold mt-1">Olympic Rigs & Free Weights</p>
              </div>
            </div>

            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-zinc-800 shadow-2xl group mt-8">
              <Image
                src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1000&auto=format&fit=crop"
                alt="Coaching session at Perfect Health & Fitness"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 bg-black/70 px-2.5 py-1 rounded inline-block backdrop-blur-sm border border-red-950">
                  Precision Coaching
                </span>
                <p className="text-white text-sm font-semibold mt-1">1-on-1 Form & Posture Audits</p>
              </div>
            </div>

            {/* Floating Overlap Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-950/95 border border-red-700/60 p-4 rounded-xl shadow-2xl backdrop-blur-md text-center max-w-[200px]">
              <span className="text-3xl font-black text-white block">10+ YRS</span>
              <span className="text-[11px] uppercase tracking-wider font-bold text-red-400">
                Transforming Navi Mumbai
              </span>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-tight">
              A Gym Where Every Rep Counts.
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Most gyms sell you memberships and pray you never show up. At <strong className="text-white">Perfect Health & Fitness</strong>, we engineer an atmosphere that makes skipping your session feel impossible.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Whether you are an executive dropping stubborn visceral fat, an athlete chasing strength milestones, or a beginner needing safe biomechanics, we strip away the noise. You get pure, focused training, proven nutritional strategies, and coaches who know you by name.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                'Conveniently located near Dmart in CBD Belapur Sector 15',
                '10,000+ sq. ft. split-level strength and functional zones',
                'Comprehensive InBody body composition tracking',
                'Open Monday to Saturday 6:00 AM – 11:00 PM',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider text-xs sm:text-sm rounded-md transition-all shadow-lg shadow-red-950 cursor-pointer"
              >
                <span>Book Free Facility Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-zinc-900">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-red-600/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 group-hover:bg-red-950/40 group-hover:border-red-600/60 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold uppercase tracking-tight text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
