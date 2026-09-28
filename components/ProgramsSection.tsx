'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dumbbell, Flame, UserCheck, Activity, Sparkles, HeartPulse, Check, ArrowRight } from 'lucide-react';

interface ProgramsSectionProps {
  onSelectProgram: (programName: string) => void;
}

export interface Program {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  intensity: 'High' | 'Very High' | 'Custom';
  duration: string;
  features: string[];
  idealFor: string;
}

const programsData: Program[] = [
  {
    id: 'strength-hypertrophy',
    name: 'Strength & Hypertrophy',
    category: 'Muscle Building',
    tagline: 'Scientific overload protocols for lean dense muscle tissue.',
    description: 'Designed around multi-joint barbell and plate-loaded mechanics. Master the squat, bench press, deadlift, and overhead press paired with targeted isolation work to trigger deep hypertrophic adaptation.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop',
    intensity: 'High',
    duration: '12 – 24 Weeks',
    features: [
      'Periodized strength progression phases',
      'Plate-loaded biomechanical isolation',
      'High-protein Indian macro blueprints',
      'Bi-weekly 1RM & volume tracking',
    ],
    idealFor: 'Anyone wanting to pack on serious muscle mass, improve bone density, and build raw functional strength.',
  },
  {
    id: 'fat-loss-conditioning',
    name: 'Fat Loss & Conditioning',
    category: 'Metabolic Burn',
    tagline: 'High-energy metabolic circuits designed to incinerate stubborn body fat.',
    description: 'A scientifically structured combination of anaerobic intervals, sled pushes, battle ropes, kettlebells, and functional turf drills that elevate your resting metabolic rate for up to 36 hours post-workout.',
    image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=800&auto=format&fit=crop',
    intensity: 'Very High',
    duration: '8 – 16 Weeks',
    features: [
      'EPOC metabolic calorie burn acceleration',
      'Visceral fat targeting protocols',
      'Sustainable calorie deficit guidelines',
      'Heart-rate zoned cardiovascular conditioning',
    ],
    idealFor: 'Individuals looking to drop 5–20 kg of stubborn body fat while preserving lean athletic muscle tone.',
  },
  {
    id: 'personal-transformation',
    name: '1-on-1 Personal Coaching',
    category: 'VIP Transformation',
    tagline: 'Uncompromising personal mentorship for guaranteed physical change.',
    description: 'Work directly with our senior head coaches. Every single rep is scrutinized for perfect biomechanics. Your nutrition, recovery, sleep, and lifestyle habits are monitored daily via dedicated private support.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop',
    intensity: 'Custom',
    duration: 'Custom (1–12 Mo)',
    features: [
      '100% dedicated 1-on-1 coach by your side',
      'InBody 770 clinical body composition scans',
      'Daily WhatsApp accountability & macro checks',
      'Injury-prevention tailored warmups & cooldowns',
    ],
    idealFor: 'Executives, busy professionals, and beginners who want zero guesswork and maximum results in minimum time.',
  },
  {
    id: 'functional-agility',
    name: 'Functional Turf & Agility',
    category: 'Athletic Performance',
    tagline: 'Build real-world athletic power, stamina, and multi-planar mobility.',
    description: 'Escape the boring treadmill routine. Train like an elite athlete with prowler sleds, plyometric boxes, battle ropes, medicine ball slams, and rotational core dynamics on our dedicated indoor turf.',
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=800&auto=format&fit=crop',
    intensity: 'High',
    duration: 'Ongoing',
    features: [
      'Multi-directional agility and speed drills',
      'Core rotational power development',
      'Stamina and VO2 max improvement',
      'Dynamic joint stabilization drills',
    ],
    idealFor: 'Runners, sports enthusiasts, and anyone wanting to move with effortless power and athletic grace.',
  },
  {
    id: 'womens-physique',
    name: 'Women’s Physique & Tone',
    category: 'Female Conditioning',
    tagline: 'Sculpt your waist, glutes, and shoulders with empowering resistance.',
    description: 'Banish the myth that lifting heavy makes women bulky. Our dedicated women’s program focuses on lower-body sculpting, hip thrusts, core tightening, posture refinement, and hormone-harmonizing nutrition.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
    intensity: 'High',
    duration: '12 – 16 Weeks',
    features: [
      'Specialized glute and hamstring architecture',
      'Safe, supportive, non-judgmental environment',
      'PCOS/PCOD lifestyle & metabolic guidance',
      'Posture elevation & upper body tone',
    ],
    idealFor: 'Women seeking confidence, toned curves, vibrant energy, and a welcoming community of like-minded women.',
  },
  {
    id: 'posture-rehab',
    name: 'Posture & Mobility Rehab',
    category: 'Recovery & Longevity',
    tagline: 'Decompress desk-bound spines, unlock tight hips, and eliminate aches.',
    description: 'Sitting 8 hours a day destroys hip flexors and rounds upper spines. This corrective protocol utilizes trigger point myofascial release, thoracic mobility drills, and glute activation to restore pain-free movement.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop',
    intensity: 'Custom',
    duration: '6 – 12 Weeks',
    features: [
      'Spinal decompression & scapular realignment',
      'Lower back stiffness relief protocols',
      'Deep hip and shoulder mobility flows',
      'Ergonomic lifestyle adaptation guides',
    ],
    idealFor: 'Corporate employees suffering from neck/back stiffness and lifters recovering from joint strain.',
  },
];

export default function ProgramsSection({ onSelectProgram }: ProgramsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Muscle Building', 'Metabolic Burn', 'VIP Transformation', 'Female Conditioning'];

  const filteredPrograms = activeCategory === 'All'
    ? programsData
    : programsData.filter((p) => p.category === activeCategory || (activeCategory === 'Muscle Building' && p.category === 'Athletic Performance'));

  return (
    <section id="programs" className="relative py-20 lg:py-28 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-red-500 font-bold uppercase tracking-widest text-xs sm:text-sm block mb-2">
            SPECIALIZED DISCIPLINES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight">
            ENGINEERED TRAINING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
              FOR EVERY PHYSIQUE GOAL.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed">
            We don’t do random workouts of the day. Every program at Perfect Health & Fitness is built on progressive overload, biomechanic safety, and measurable outcomes.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-red-600 text-white shadow-lg shadow-red-950/60'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="rounded-2xl bg-zinc-950 border border-zinc-800/90 overflow-hidden flex flex-col justify-between hover:border-red-600/60 transition-all duration-300 hover:shadow-2xl hover:shadow-red-950/20 group"
            >
              {/* Card Image Header */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={prog.image}
                  alt={prog.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 contrast-[1.05]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                
                {/* Category Pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-red-600 text-white shadow-md">
                    {prog.category}
                  </span>
                </div>

                {/* Intensity / Duration Pills */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-zinc-300 font-medium">
                  <span className="bg-black/80 px-2.5 py-1 rounded backdrop-blur-sm border border-zinc-800">
                    Duration: <strong className="text-white">{prog.duration}</strong>
                  </span>
                  <span className="bg-black/80 px-2.5 py-1 rounded backdrop-blur-sm border border-zinc-800">
                    Intensity: <strong className="text-red-400">{prog.intensity}</strong>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black uppercase text-white tracking-tight group-hover:text-red-400 transition-colors">
                    {prog.name}
                  </h3>
                  <p className="text-xs font-semibold text-red-500/90 mt-1 mb-3">
                    {prog.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    {prog.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-zinc-900">
                    {prog.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-zinc-900">
                  <button
                    onClick={() => onSelectProgram(prog.name)}
                    className="w-full py-3 px-4 rounded-lg bg-zinc-900 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 group-hover:bg-red-600 cursor-pointer shadow-md"
                  >
                    <span>Inquire About {prog.name.split(' ')[0]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Consultation Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-red-950/40 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold uppercase text-white">
              Not sure which program matches your current fitness level?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Speak with Head Coach Rajesh for a complimentary 15-minute fitness assessment and body scan at CBD Belapur.
            </p>
          </div>
          <button
            onClick={() => onSelectProgram('Free Consultation Assessment')}
            className="px-6 py-3 bg-white hover:bg-zinc-200 text-black font-extrabold uppercase tracking-wider text-xs sm:text-sm rounded-md transition-all shrink-0 cursor-pointer"
          >
            Get Free Assessment
          </button>
        </div>
      </div>
    </section>
  );
}
