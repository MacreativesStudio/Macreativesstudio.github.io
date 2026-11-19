import React from 'react';
import { motion } from 'motion/react';
import { Globe, Users, Zap, Briefcase, Share2, Rocket, Map, Layers, Network, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MaNetworld() {
  return (
    <div className="pt-32 pb-24 space-y-24 px-4">
      {/* 1) HERO */}
      <section className="bg-zinc-950 border border-white/15 rounded-[3rem] p-8 md:p-16 text-center max-w-5xl mx-auto relative overflow-hidden shadow-2xl">
        <div className="space-y-6 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-brand-pink">
            <Globe size={13} />
            <span>The Universal Connection Layer</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-white uppercase leading-none">
            MA <span className="text-gradient">NETWORLD</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            A hyper-connected global ecosystem of creators, software engineers, and ambitious entrepreneurs originating from Africa and scaling across the world.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a 
              href="https://wa.me/254798691594?text=Hi%20Stephen,%20I%20want%20to%20join%20Ma%20Networld"
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-gradient-brand text-white font-extrabold text-xs uppercase tracking-wider shadow-xl hover:scale-105 transition-all flex items-center space-x-2"
            >
              <MessageCircle size={15} />
              <span>Join Ma Networld</span>
            </a>
            <Link 
              to="/communities"
              className="px-8 py-4 rounded-full bg-zinc-900 border border-white/20 text-zinc-200 hover:text-white font-extrabold text-xs uppercase tracking-wider hover:bg-zinc-800 transition-all"
            >
              Explore Communities
            </Link>
          </div>
        </div>
      </section>

      {/* 2) TOPOLOGY VISUALIZATION */}
      <section className="bg-zinc-950 border border-white/15 rounded-[3rem] p-8 md:p-14 max-w-7xl mx-auto shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-brand-pink text-xs font-bold uppercase tracking-wider">
              <Map size={14} />
              <span>Network Topology</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              A Living Ecosystem <br/><span className="text-gradient">Infrastructure</span>
            </h2>
            <p className="text-zinc-300 text-base leading-relaxed">
              Ma Networld operates as a decentralized network where every project, venture, and creator is an active node. Members share client opportunities, code templates, and growth strategies in real time.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
              {[
                { label: "Connected Nodes", val: "4,200+", icon: Network },
                { label: "Collaboration Rate", val: "88%", icon: Layers },
              ].map(stat => (
                <div key={stat.label} className="space-y-1">
                  <div className="flex items-center space-x-2 text-brand-pink text-xs font-bold uppercase tracking-wider">
                    <stat.icon size={14} />
                    <span>{stat.label}</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-white">{stat.val}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center p-8 bg-zinc-900 rounded-3xl border border-white/10">
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full border border-dashed border-white/20 flex items-center justify-center animate-spin-slow">
              <Globe size={100} className="text-white opacity-40" />
              <div className="absolute top-2 left-1/2 w-4 h-4 rounded-full bg-brand-pink shadow-glow" />
              <div className="absolute bottom-2 left-1/2 w-3 h-3 rounded-full bg-brand-purple" />
            </div>
          </div>
        </div>
      </section>

      {/* 3) NETWORK PILLARS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {[
          { 
            title: "Commercial Leads", 
            desc: "Members get direct access to client project briefs, freelance contracts, and corporate opportunities across Kenya and abroad.", 
            icon: Briefcase 
          },
          { 
            title: "Shared Intelligence", 
            desc: "Weekly masterclasses, code breakdowns, and tactical teardowns with Stephen and seasoned founders.", 
            icon: Zap 
          },
          { 
            title: "Venture Equity", 
            desc: "Collaborate directly on internal studio holdings (like Cyber Donuts and Fit-Creative) and earn equity as early contributors.", 
            icon: Rocket 
          },
        ].map((b) => (
          <div key={b.title} className="p-8 rounded-[2rem] bg-zinc-950 border border-white/15 space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-pink">
              <b.icon size={22} />
            </div>
            <h3 className="text-xl font-black text-white uppercase tracking-tight">{b.title}</h3>
            <p className="text-zinc-300 text-sm leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
