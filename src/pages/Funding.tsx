import React from 'react';
import { motion } from 'motion/react';
import { Target, Heart, Rocket, Users, ChevronRight, TrendingUp, Sparkles, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const campaigns = [
  { 
    id: 1, 
    title: "Cyber Donuts Retail Expansion", 
    desc: "Scaling our tech-driven pop-up confectionery retail experience to 3 new flagship locations across Nairobi and regional creator hubs.",
    goal: "KES 2,500,000",
    raised: "KES 1,450,000",
    backers: 42,
    img: "donuts"
  },
  { 
    id: 2, 
    title: "Ma Networld 2.0 Infrastructure", 
    desc: "Building centralized community features, developer gig escrow, and automated M-Pesa vendor payouts for the creator network.",
    goal: "KES 1,000,000",
    raised: "KES 620,000",
    backers: 88,
    img: "network"
  }
];

export default function Funding() {
  return (
    <div className="pt-32 pb-24 space-y-20 px-4">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-brand-pink">
          <Sparkles size={12} />
          <span>Venture Crowdfunding</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase leading-none">
          Ecosystem <br/><span className="text-gradient">Funding</span>
        </h1>
        <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
          Back internal studio ventures and community projects that drive employment, technological innovation, and real-world value.
        </p>
      </div>

      {/* Campaigns Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {campaigns.map((c) => {
          const progress = 58; // Visual representation
          
          return (
            <div
              key={c.id}
              className="rounded-[2.5rem] bg-zinc-950 border border-white/15 overflow-hidden flex flex-col justify-between shadow-2xl hover:border-brand-pink/50 transition-all group"
            >
              <div className="relative h-64 bg-zinc-900">
                <img 
                  src={`https://picsum.photos/seed/${c.img}/1000/600`} 
                  alt={c.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 border border-white/20 text-brand-pink text-[10px] font-black uppercase tracking-wider backdrop-blur-md">
                  Active Campaign
                </div>
              </div>

              <div className="p-8 md:p-10 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">{c.title}</h2>
                  <p className="text-zinc-300 text-sm leading-relaxed">{c.desc}</p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline text-xs font-bold">
                       <span className="text-white text-lg font-black">{c.raised}</span>
                       <span className="text-zinc-400 uppercase">Target: {c.goal}</span>
                    </div>
                    <div className="h-2.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/10">
                       <div className="h-full bg-gradient-brand rounded-full" style={{ width: `${progress}%` }} />
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <div className="flex items-center space-x-2 text-xs font-semibold text-zinc-400">
                      <Users size={16} className="text-brand-pink" />
                      <span>{c.backers} Ecosystem Backers</span>
                    </div>
                    <a
                      href={`https://wa.me/254798691594?text=${encodeURIComponent(`Hi Stephen, I want to contribute to the "${c.title}" funding campaign.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-full bg-gradient-brand text-white font-extrabold text-xs uppercase tracking-wider hover:scale-105 transition-all flex items-center space-x-1.5 shadow-md"
                    >
                      <MessageCircle size={14} />
                      <span>Back Project</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Propose Campaign Call */}
      <div className="bg-zinc-950 border border-white/15 rounded-[3rem] p-8 md:p-14 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-brand-pink/20 border border-brand-pink/40 flex items-center justify-center text-brand-pink shrink-0">
          <Heart size={32} />
        </div>
        <div className="flex-1 space-y-2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">Have an Idea to Pitch?</h2>
          <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
            Apply for our startup incubation sprints to get code architecture, branding, and access to the Ma Networld backer network.
          </p>
        </div>
        <Link 
          to="/contact" 
          className="px-8 py-3.5 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-brand-pink hover:text-white transition-all whitespace-nowrap"
        >
          Pitch Campaign Brief
        </Link>
      </div>
    </div>
  );
}
