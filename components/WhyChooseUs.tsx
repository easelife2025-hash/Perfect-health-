'use client';

import { ShieldCheck, Dumbbell, Users, Clock, Sparkles, HeartHandshake } from 'lucide-react';

export default function WhyChooseUs() {
  const differentiators = [
    {
      title: 'Biomechanic Machine Engineering',
      desc: 'Our plate-loaded and cable systems are tuned to match natural musculoskeletal motion, eliminating joint shearing and targeting prime muscle fibers.',
      icon: Dumbbell,
    },
    {
      title: 'Zero Floor Waiting Policy',
      desc: 'With over 10,000+ sq. ft. of floor space and duplicate power racks and Olympic benches, you won’t waste your prime training hour waiting in line.',
      icon: Clock,
    },
    {
      title: 'Floor Mentors Always on Duty',
      desc: 'You shouldn’t have to pay extra just to prevent an injury. Our certified coaches actively spot you and correct your form unprompted.',
      icon: Users,
    },
    {
      title: 'Culture of Relentless Drive',
      desc: 'A no-nonsense atmosphere free from gym influencers holding up racks for selfies. Serious lifters, corporate professionals, and focused trainees only.',
      icon: Sparkles,
    },
    {
      title: 'Real-World Nutrition Blueprints',
      desc: 'Tailored protein and carbohydrate allocations calibrated for vegetarian and non-vegetarian Indian palettes without starving yourself.',
      icon: HeartHandshake,
    },
    {
      title: 'Medical Grade Cleanliness',
      desc: 'Continuous air purification, daily ozone sanitation, and clean restrooms that set a new benchmark for fitness facilities in Navi Mumbai.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="why-us" className="relative py-20 lg:py-28 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-500 font-bold uppercase tracking-widest text-xs sm:text-sm block mb-2">
            UNCOMPROMISING STANDARD
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight">
            WHY CBD BELAPUR CHOOSES <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
              PERFECT HEALTH & FITNESS.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed">
            We built this facility to solve every frustration you’ve ever had with ordinary commercial gyms. Here is what makes our arena genuinely different.
          </p>
        </div>

        {/* 6 Key Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-red-600/60 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-bl-full pointer-events-none group-hover:bg-red-600/10 transition-colors" />
                
                <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-red-500 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all shadow-md">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold uppercase tracking-tight text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
