'use client';

import Image from 'next/image';
import { Award, ShieldCheck, Dumbbell, ArrowRight } from 'lucide-react';

interface TrainersSectionProps {
  onSelectTrainer: (trainerName: string) => void;
}

interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  image: string;
  certifications: string[];
  specialties: string[];
  quote: string;
}

const trainersData: Trainer[] = [
  {
    id: 'rajesh-shinde',
    name: 'Rajesh Shinde',
    role: 'Head Strength Coach & Founder',
    experience: '12+ Years Experience',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop',
    certifications: ['CSCS Certified', 'Olympic Weightlifting Specialist', 'State Powerlifting Medalist'],
    specialties: ['Compound Lift Biomechanics', 'Extreme Strength Progression', 'Joint-Safe Heavy Overload'],
    quote: '“Form is religion. Add weight only when your movement pattern is flawless.”',
  },
  {
    id: 'ananya-deshmukh',
    name: 'Ananya Deshmukh',
    role: 'Women’s Physique & Mobility Lead',
    experience: '8+ Years Experience',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop',
    certifications: ['ACE Certified Personal Trainer', 'FRC Mobility Specialist', 'Pre/Post-Natal Fitness'],
    specialties: ['Glute & Hamstring Hypertrophy', 'Hormonal Balance & PCOS', 'Thoracic Spine Alignment'],
    quote: '“Empowering women through heavy iron transforms mind, posture, and self-belief.”',
  },
  {
    id: 'vikram-rao',
    name: 'Vikram Rao',
    role: 'Conditioning & Functional Specialist',
    experience: '9+ Years Experience',
    image: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=800&auto=format&fit=crop',
    certifications: ['CrossFit Level 2 Coach', 'Kettlebell Athletics Master', 'First Aid & CPR/AED'],
    specialties: ['Metabolic Circuit Design', 'VO2 Max Conditioning', 'Athletic Agility & Speed'],
    quote: '“Your heart is a muscle. Train it to recover faster than your competition.”',
  },
  {
    id: 'sameer-shaikh',
    name: 'Sameer Shaikh',
    role: 'Clinical Nutritionist & Body Recomp Coach',
    experience: '7+ Years Experience',
    image: 'https://images.unsplash.com/photo-1583454155184-870a1f63aebc?q=80&w=800&auto=format&fit=crop',
    certifications: ['ISSA Sports Nutritionist', 'InBody Master Operator', 'Precision Nutrition L1'],
    specialties: ['Indian Macro Tailoring', 'Visceral Fat Reduction', 'Supplementation Protocols'],
    quote: '“Abs are indeed engineered in the kitchen, but cemented on the platform.”',
  },
];

export default function TrainersSection({ onSelectTrainer }: TrainersSectionProps) {
  return (
    <section id="trainers" className="relative py-20 lg:py-28 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-red-500 font-bold uppercase tracking-widest text-xs sm:text-sm block mb-2">
              ELITE HUMAN CAPITAL
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight">
              MEET YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
                TRANSFORMATION ARCHITECTS.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-400 max-w-md leading-relaxed">
            Our coaches don’t just count your reps—they analyze your kinematics, calibrate your recovery, and keep you relentlessly accountable every day.
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trainersData.map((trainer) => (
            <div
              key={trainer.id}
              className="rounded-2xl bg-zinc-950 border border-zinc-800/80 overflow-hidden flex flex-col justify-between hover:border-red-600/70 transition-all duration-300 group hover:shadow-2xl hover:shadow-red-950/20"
            >
              {/* Photo */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                
                {/* Exp Pill */}
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-sm text-[11px] font-bold text-red-400 border border-red-950">
                    {trainer.experience}
                  </span>
                </div>

                {/* Name & Role inside photo bottom */}
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-lg font-black uppercase text-white tracking-tight">
                    {trainer.name}
                  </h3>
                  <p className="text-xs font-semibold text-red-500 uppercase tracking-wider">
                    {trainer.role}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Quote */}
                  <p className="text-xs italic text-zinc-300 border-l border-red-600 pl-2.5 py-1 mb-4 bg-zinc-900/40 rounded-r">
                    {trainer.quote}
                  </p>

                  {/* Certifications */}
                  <div className="mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block mb-1.5">
                      Credentials & Certifications
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {trainer.certifications.map((cert, cIdx) => (
                        <span
                          key={cIdx}
                          className="text-[10px] font-medium bg-zinc-900 text-zinc-300 px-2 py-0.5 rounded border border-zinc-800"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block mb-1.5">
                      Core Specialties
                    </span>
                    <ul className="space-y-1">
                      {trainer.specialties.map((spec, sIdx) => (
                        <li key={sIdx} className="text-xs text-zinc-400 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action */}
                <button
                  onClick={() => onSelectTrainer(`1-on-1 with Coach ${trainer.name}`)}
                  className="w-full mt-2 py-2.5 px-3 rounded-lg bg-zinc-900 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 group-hover:bg-red-600 cursor-pointer"
                >
                  <span>Train With {trainer.name.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
