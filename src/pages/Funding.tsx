import React from 'react';
import { motion } from 'motion/react';
import { Target, Heart, Rocket, Users, ChevronRight, TrendingUp } from 'lucide-react';

const campaigns = [
  { 
    id: 1, 
    title: "Cyber Donuts Global Expansion", 
    desc: "Scaling our tech-driven donut experience to 5 new countries across Africa and beyond.",
    goal: "KSh 25,000,000",
    raised: "KSh 12,450,000",
    backers: 1420,
    img: "donuts"
  },
  { 
    id: 2, 
    title: "Ma Networld V2.0", 
    desc: "Building advanced community features, AI integration, and marketplace scaling for the network.",
    goal: "KSh 10,000,000",
    raised: "KSh 8,200,000",
    backers: 856,
    img: "network"
  }
];

export default function Funding() {
  return (
    <div className="pt-32 pb-20 space-y-24">
      <div className="text-center max-w-3xl mx-auto space-y-8">
        <h1 className="text-6xl font-bold tracking-tighter text-white uppercase leading-none">Project <span className="text-gradient">Funding</span></h1>
        <p className="text-gray-400 text-xl leading-relaxed">
           Empowering the ecosystem by allowing you to contribute to the next generation 
           of innovative projects built within Ma Creatives Studio.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {campaigns.map((c, i) => {
          const progress = (parseFloat(c.raised.replace(/[^\d]/g, '')) / parseFloat(c.goal.replace(/[^\d]/g, ''))) * 100;
          
          return (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass rounded-[2.5rem] overflow-hidden flex flex-col hover:border-brand-pink/50 transition-all duration-500"
            >
              <div className="relative h-72">
                <img src={`https://picsum.photos/seed/${c.img}/1200/800`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-10 space-y-8 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-brand-pink text-xs font-bold uppercase tracking-widest">
                    <Rocket size={14} />
                    <span>Active Campaign</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">{c.title}</h2>
                  <p className="text-gray-400 leading-relaxed">{c.desc}</p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-end">
                       <span className="text-2xl font-bold text-white">{c.raised}</span>
                       <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">Goal: {c.goal}</span>
                    </div>
                    <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                       <div 
                         className="h-full bg-gradient-brand transition-all duration-1000" 
                         style={{ width: `${progress}%` }} 
                       />
                    </div>
                  </div>

                  <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl">
                     <div className="flex items-center space-x-3">
                        <Users size={20} className="text-brand-purple" />
                        <span className="text-white font-bold">{c.backers} <span className="text-gray-500 font-normal">Backers</span></span>
                     </div>
                     <button className="px-8 py-3 rounded-xl bg-gradient-brand text-white font-bold hover:scale-105 transition-transform">
                        Contribute
                     </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <section className="glass rounded-[4rem] p-12 md:p-24 flex flex-col md:flex-row items-center gap-20">
         <div className="p-8 rounded-full bg-brand-pink/10 border-4 border-brand-pink animate-pulse">
            <Heart size={80} className="text-brand-pink fill-brand-pink" />
         </div>
         <div className="space-y-8 text-center md:text-left">
           <h2 className="text-5xl font-bold text-white uppercase tracking-tighter leading-tight">Start Your Own <br/><span className="text-gradient">Funding Campaign</span></h2>
           <p className="text-gray-400 text-lg max-w-xl">
             Have a visionary idea within our ecosystem? Apply for our incubation program 
             and launch your funding campaign globally.
           </p>
           <button className="px-12 py-5 rounded-2xl bg-white text-black font-black text-xl hover:scale-110 transition-transform">
              Launch Campaign Brief
           </button>
         </div>
      </section>
    </div>
  );
}
