import React from 'react';
import { motion } from 'motion/react';
import { Zap, HandMetal, Users, ArrowRight, Heart } from 'lucide-react';

const projects = [
  { 
    name: "Cyber Donuts", 
    desc: "A futuristic F&B experience blending tech-forward pastry design with a digital-first ordering ecosystem.",
    link: "cyber-donuts.github.io",
    stage: "Scaling"
  },
  { 
    name: "Read Your Bible", 
    desc: "A community initiative focused on structured reading plans, digital scripture tools, and faith-based community growth.",
    link: "amaruofficial.github.io",
    stage: "Active"
  },
  { 
    name: "Ma Creatives Studio", 
    desc: "The core engine powering everything you see. Operations, development, and strategic scaling system.",
    link: "macreativesstudio.github.io",
    stage: "Evolving"
  },
  { 
    name: "Community Initiatives", 
    desc: "Grassroots projects focused on education, networking, and providing opportunities to emerging African creators.",
    link: "#",
    stage: "Community"
  },
];

export default function Projects() {
  return (
    <div className="pt-32 pb-20 space-y-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-6xl font-bold tracking-tighter text-white mb-8">ECOSYSTEM <span className="text-gradient">PROJECTS</span></h1>
        <p className="text-gray-400 text-lg">
          These are the internal ventures built by Ma Creatives Studio. 
          Each project is a pillar of our multi-industry ecosystem.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group glass rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 hover:border-brand-pink/50 transition-all duration-500"
          >
            <div className="w-full md:w-1/3 h-64 rounded-3xl overflow-hidden relative">
               <img 
                 src={`https://picsum.photos/seed/${p.name}/800/800`}
                 alt={p.name}
                 referrerPolicy="no-referrer"
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute top-4 right-4 px-4 py-1.5 rounded-full glass text-brand-pink text-xs font-bold uppercase tracking-widest backdrop-blur-xl">
                 {p.stage}
               </div>
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-bold text-white uppercase tracking-tighter">{p.name}</h2>
              <p className="text-gray-400 text-lg leading-relaxed">{p.desc}</p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 rounded-2xl bg-gradient-brand text-white font-bold hover:scale-105 transition-transform flex items-center space-x-2">
                  <HandMetal size={20} />
                  <span>Join Project</span>
                </button>
                <button className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all flex items-center space-x-2">
                  <Heart size={20} className="text-brand-pink" />
                  <span>Support</span>
                </button>
                <a href={`https://${p.link}`} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-2xl bg-transparent border border-white/10 text-gray-400 font-bold hover:text-white transition-colors flex items-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
