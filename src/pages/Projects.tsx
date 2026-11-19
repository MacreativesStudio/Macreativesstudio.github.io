import React from 'react';
import { motion } from 'motion/react';
import { Layers, ArrowRight, ExternalLink, Heart, Sparkles, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  { 
    name: "Cyber Donuts", 
    desc: "A futuristic confectionery brand merging tech-forward pastry design with an instant digital ordering ecosystem and pop-up retail experiences.",
    link: "cyber-donuts.github.io",
    stage: "Scaling",
    badge: "Food & Confectionery Tech",
    img: "donuts"
  },
  { 
    name: "Read Your Bible", 
    desc: "A decentralized community initiative building digital reading plans, interactive scripture tools, and structured faith-based leadership groups across 40+ countries.",
    link: "amaruofficial.github.io",
    stage: "Active Network",
    badge: "Faith & Decentralized Community",
    img: "bible"
  },
  { 
    name: "Ma Creatives Studio Engine", 
    desc: "The central operating system powering digital design, rapid software development, and strategic venture scaling for African enterprises.",
    link: "macreatives.studio",
    stage: "Core Engine",
    badge: "Agency & Startup Studio",
    img: "studio"
  },
  { 
    name: "Amaru Brand Direction", 
    desc: "High-fashion editorial brand architecture, visual design systems, and creative direction designed for premium lifestyle ventures.",
    link: "amaruofficial.github.io",
    stage: "Active",
    badge: "Fashion & Identity",
    img: "amaru"
  },
];

export default function Projects() {
  return (
    <div className="pt-32 pb-24 space-y-20 px-4">
      {/* Header */}
      <div className="max-w-4xl space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-brand-pink">
          <Layers size={13} />
          <span>Internal Venture Portfolio</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase leading-none">
          Ecosystem <br/><span className="text-gradient">Projects</span>
        </h1>
        <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-2xl">
          These are the flagship internal ventures built, incubated, and scaled by Ma Creatives Studio.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-8 max-w-7xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={p.name}
            className="rounded-[2.5rem] bg-zinc-950 border border-white/15 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 hover:border-brand-pink/50 transition-all duration-300 shadow-xl group"
          >
            <div className="w-full md:w-2/5 h-64 rounded-3xl overflow-hidden relative bg-zinc-900 border border-white/10 shrink-0">
              <img 
                src={`https://picsum.photos/seed/${p.img}/800/800`}
                alt={p.name}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-85 transition-all duration-700"
              />
              <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-black/80 border border-white/20 text-brand-pink text-[11px] font-black uppercase tracking-wider backdrop-blur-md">
                {p.stage}
              </div>
            </div>

            <div className="flex-1 space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-pink block mb-1">{p.badge}</span>
                <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">{p.name}</h2>
              </div>
              
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed">{p.desc}</p>
              
              <div className="flex flex-wrap gap-3 pt-2">
                <a 
                  href={`https://${p.link}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-3 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-brand-pink hover:text-white transition-all flex items-center space-x-2"
                >
                  <span>Launch Live Site</span>
                  <ExternalLink size={13} />
                </a>
                <a 
                  href={`https://wa.me/254798691594?text=Hi%20Stephen,%20I'm%20interested%20in%20collaborating%20on%20${encodeURIComponent(p.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-zinc-900 border border-white/15 text-zinc-200 hover:text-white hover:bg-zinc-800 font-extrabold text-xs uppercase tracking-wider transition-all flex items-center space-x-2"
                >
                  <MessageCircle size={14} className="text-green-400" />
                  <span>Partner on Venture</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
