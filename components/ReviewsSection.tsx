'use client';

import { useState } from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquare, ThumbsUp, ExternalLink } from 'lucide-react';

interface Review {
  id: string;
  author: string;
  location: string;
  tag: 'Fat Loss' | 'Personal Training' | 'Facilities' | 'Transformation';
  rating: number;
  date: string;
  content: string;
  verified: boolean;
  highlight: string;
}

const reviewsData: Review[] = [
  {
    id: 'rev-1',
    author: 'Kunal Sawant',
    location: 'CBD Belapur, Sector 15',
    tag: 'Facilities',
    rating: 5,
    date: '2 weeks ago',
    highlight: 'Best gym in Belapur by far. The machines are top tier.',
    content: 'Hands down the best gym experience in Navi Mumbai. Located right near Arenja Plaza / Dmart, super easy to access before or after work. The machine angles don’t pinch your shoulders, and the environment is hardcore yet respectful. 5/5 stars.',
    verified: true,
  },
  {
    id: 'rev-2',
    author: 'Dr. Radhika Nair',
    location: 'Seawoods Grand Central',
    tag: 'Personal Training',
    rating: 5,
    date: '1 month ago',
    highlight: 'Fixed my chronic cervical and lumbar disc stiffness.',
    content: 'As a surgeon standing for 6 hours daily, my spine was wrecked. Coach Rajesh and the team created a biomechanical rehab schedule that strengthened my postural core. Today I lift without an ounce of back pain. Exceptional knowledge.',
    verified: true,
  },
  {
    id: 'rev-3',
    author: 'Prathamesh Patil',
    location: 'Nerul West',
    tag: 'Transformation',
    rating: 5,
    date: '3 weeks ago',
    highlight: 'Lost 18 kg in 4 months with zero crash diets.',
    content: 'Joined Perfect Health & Fitness after trying two commercial chain gyms that never bothered to guide me. Here, trainers actively correct your form and the macro breakdown made it effortless to stick to Indian home food. Result speaks for itself.',
    verified: true,
  },
  {
    id: 'rev-4',
    author: 'Simran Walia',
    location: 'Kharghar',
    tag: 'Fat Loss',
    rating: 5,
    date: '1 month ago',
    highlight: 'Super safe and empowering for women lifters.',
    content: 'A lot of gyms have a male-dominated awkward vibe, but Perfect Health has an amazing culture. Coach Ananya helped me master heavy hip thrusts and deadlifts. The hygiene is spotless and music is energizing without being deafening.',
    verified: true,
  },
  {
    id: 'rev-5',
    author: 'Nikhil Rane',
    location: 'CBD Belapur',
    tag: 'Facilities',
    rating: 5,
    date: '2 months ago',
    highlight: 'Extended hours (6am to 11pm) are a lifesaver for night shifts.',
    content: 'I work corporate shifts and finding a gym open till 11 PM with full air conditioning and clean showers was crucial. The equipment is always greased, cables smooth, and weights are organized. Worth every rupee.',
    verified: true,
  },
  {
    id: 'rev-6',
    author: 'Aarti Gokhale',
    location: 'Sanpada',
    tag: 'Personal Training',
    rating: 5,
    date: '2 months ago',
    highlight: 'Personal training that is actually personal.',
    content: 'Not just someone looking at their phone while you do curls. Coach Vikram tracked every set, pushed me past mental barriers, and gave me daily feedback on my food logs. Truly lives up to the name Perfect Health.',
    verified: true,
  },
];

export default function ReviewsSection() {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const tags = ['All', 'Transformation', 'Personal Training', 'Facilities', 'Fat Loss'];

  const filteredReviews = selectedTag === 'All'
    ? reviewsData
    : reviewsData.filter((r) => r.tag === selectedTag);

  return (
    <section id="reviews" className="relative py-20 lg:py-28 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Rating Hero Badge */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-red-500 font-bold uppercase tracking-widest text-xs sm:text-sm block mb-2">
            UNCOMPROMISING REPUTATION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight">
            TRUSTED BY OVER <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
              222+ VERIFIED LOCAL LIFTERS.
            </span>
          </h2>

          {/* Big Trust Bar */}
          <div className="mt-8 p-6 rounded-2xl bg-zinc-950 border border-zinc-800/90 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-around gap-4 shadow-xl">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-4xl sm:text-5xl font-black text-white">4.9</span>
                <div className="flex flex-col items-start">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-zinc-400 font-semibold uppercase tracking-wider mt-0.5">
                    Google Business Rating
                  </span>
                </div>
              </div>
            </div>

            <div className="h-10 w-px bg-zinc-800 hidden sm:block" />

            <div className="text-center sm:text-left">
              <span className="text-2xl font-black text-white block">222+ Reviews</span>
              <span className="text-xs text-red-400 font-semibold">100% Authentic Navi Mumbai</span>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-red-600 text-white shadow-lg shadow-red-950'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/80 flex flex-col justify-between hover:border-red-600/60 transition-all duration-300 hover:shadow-xl hover:shadow-red-950/20 group"
            >
              <div>
                {/* Header inside card */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 bg-red-950/50 px-2.5 py-0.5 rounded border border-red-900/50">
                    {rev.tag}
                  </span>
                </div>

                {/* Highlight */}
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  “{rev.highlight}”
                </h3>

                {/* Content */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {rev.content}
                </p>
              </div>

              {/* Author & Verification */}
              <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-black uppercase text-white tracking-wider">
                    {rev.author}
                  </h4>
                  <p className="text-[10px] text-zinc-500">
                    {rev.location} • {rev.date}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-zinc-400 font-semibold bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-500" />
                  <span>Google Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Direct Link */}
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Perfect+Health+%26+Fitness+CBD+Belapur+Navi+Mumbai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <span>Read All 222+ Verified Reviews on Google Maps</span>
            <ExternalLink className="w-4 h-4 text-red-500" />
          </a>
        </div>
      </div>
    </section>
  );
}
