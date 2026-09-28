'use client';

import { useState } from 'react';
import { Check, ArrowRight, Calculator } from 'lucide-react';

interface MembershipCTAProps {
  onSelectPlan: (planName: string) => void;
}

export default function MembershipCTA({ onSelectPlan }: MembershipCTAProps) {
  // Interactive Fitness Goal & Calorie Calculator
  const [calcAge, setCalcAge] = useState<number>(28);
  const [calcWeight, setCalcWeight] = useState<number>(75);
  const [calcHeight, setCalcHeight] = useState<number>(175);
  const [calcGender, setCalcGender] = useState<'male' | 'female'>('male');
  const [calcGoal, setCalcGoal] = useState<'fat_loss' | 'muscle_gain' | 'recomp'>('fat_loss');

  // Simple Mifflin-St Jeor BMR calculation
  const bmr = calcGender === 'male'
    ? 10 * calcWeight + 6.25 * calcHeight - 5 * calcAge + 5
    : 10 * calcWeight + 6.25 * calcHeight - 5 * calcAge - 161;

  const tdee = Math.round(bmr * 1.45); // Moderate activity
  const targetCalories = calcGoal === 'fat_loss' ? Math.round(tdee - 450) : calcGoal === 'muscle_gain' ? Math.round(tdee + 350) : tdee;
  const targetProtein = Math.round(calcWeight * (calcGoal === 'muscle_gain' ? 2.0 : 1.8));

  return (
    <section id="membership" className="relative py-20 lg:py-28 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-500 font-bold uppercase tracking-widest text-xs sm:text-sm block mb-2">
            TRANSPARENT INVESTMENT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight">
            NO HIDDEN FEES. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
              CHOOSE YOUR COMMITMENT.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed">
            All memberships include full access to our free weights, plate-loaded machines, Olympic platforms, and clean locker facilities in CBD Belapur.
          </p>
        </div>

        {/* Sleek Membership VIP Pass & Consultation Card */}
        <div className="mb-14 p-8 sm:p-10 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-red-500 block mb-2">
                ALL-INCLUSIVE MEMBERSHIP BENEFITS
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white">
                Everything You Need To Achieve Your Physical Best
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {[
                  '10,000+ sq. ft. Biomechanic & Free Weight Floor',
                  'Complimentary InBody 770 Clinical Body Scans',
                  'Personalized Indian Macro Nutrition Blueprint',
                  'Dedicated Floor Coach Spotting & Safety Guidance',
                  'Clean Locker Rooms & High-Pressure Showers',
                  'Flexible 1, 3, 6 & 12 Month Terms Available',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
              <button
                onClick={() => onSelectPlan('Membership Inquiry')}
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-extrabold uppercase tracking-wider text-xs sm:text-sm rounded-xl transition-all shadow-xl shadow-red-950 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Claim Free 1-Day Trial Pass</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/917769970021?text=Hi%20Perfect%20Health%20%26%20Fitness%2C%20I%20would%20like%20to%20know%20your%20current%20membership%20rates."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 hover:text-white font-bold uppercase tracking-wider text-xs rounded-xl transition-all flex items-center justify-center gap-2 text-center"
              >
                <span>Ask Rates on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Calorie & Plan Estimator Tool */}
        <div className="p-6 sm:p-10 rounded-3xl bg-zinc-950 border border-zinc-800/90 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-zinc-800">
            <div>
              <div className="inline-flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-wider mb-1">
                <Calculator className="w-4 h-4" />
                <span>Interactive Target Estimator</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-white">
                Calculate Your Daily Blueprint & Recommended Program
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
              Enter your current specs below to estimate daily calories and target protein requirements for your desired outcome.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-center">
            {/* Input Controls */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-2">
                  Gender
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(['male', 'female'] as const).map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setCalcGender(g)}
                      className={`py-2 px-3 text-xs font-bold uppercase rounded-lg border transition-all cursor-pointer ${
                        calcGender === g
                          ? 'bg-red-600 text-white border-red-500'
                          : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-2">
                  Primary Fitness Goal
                </label>
                <select
                  value={calcGoal}
                  onChange={(e) => setCalcGoal(e.target.value as any)}
                  className="w-full bg-zinc-900 border border-zinc-800 text-white text-xs font-semibold rounded-lg px-3 py-2.5 focus:outline-none focus:border-red-600"
                >
                  <option value="fat_loss">Aggressive Fat Loss (Cut)</option>
                  <option value="muscle_gain">Lean Muscle Hypertrophy (Bulk)</option>
                  <option value="recomp">Body Recomposition & Tone</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  <span>Weight:</span>
                  <span className="text-white">{calcWeight} kg</span>
                </div>
                <input
                  type="range"
                  min="45"
                  max="130"
                  value={calcWeight}
                  onChange={(e) => setCalcWeight(Number(e.target.value))}
                  className="w-full accent-red-600 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  <span>Height:</span>
                  <span className="text-white">{calcHeight} cm</span>
                </div>
                <input
                  type="range"
                  min="140"
                  max="205"
                  value={calcHeight}
                  onChange={(e) => setCalcHeight(Number(e.target.value))}
                  className="w-full accent-red-600 cursor-pointer"
                />
              </div>
            </div>

            {/* Calculated Output Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-black border border-zinc-800 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-red-500 block mb-1">
                  ESTIMATED DAILY REQUIREMENTS
                </span>
                <div className="grid grid-cols-2 gap-4 my-4">
                  <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                    <span className="text-2xl sm:text-3xl font-black text-white block">
                      {targetCalories}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                      Target Kcal / Day
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                    <span className="text-2xl sm:text-3xl font-black text-red-500 block">
                      {targetProtein}g
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                      Daily Protein Target
                    </span>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Recommended Path: <strong className="text-zinc-200">
                    {calcGoal === 'fat_loss' ? '3-Month Pro Transformation + High-Intensity Turf' : calcGoal === 'muscle_gain' ? '6-Month Elite Strength & Biomechanics' : '3-Month Recomp & Mobility'}
                  </strong>
                </p>
              </div>

              <button
                onClick={() => onSelectPlan(`Custom Goal: ${calcGoal.replace('_', ' ')} (${targetCalories} kcal)`)}
                className="w-full py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                Discuss This Goal With Head Coach
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
