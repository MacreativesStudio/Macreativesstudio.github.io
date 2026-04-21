import React from 'react';
import { motion } from 'motion/react';
import { Coffee, Zap, Palette, Cpu, ShoppingBag, ArrowRight, Star, ExternalLink, MapPin } from 'lucide-react';
import { cn } from '@/src/lib/utils.ts';
import { Link } from 'react-router-dom';

const ventures = [
  {
    id: 'cyber-donuts',
    name: "Cyber Donuts",
    tagline: "Fresh Ideas. Fresh Business.",
    desc: "A futuristic food & beverage concept merging creative branding with premium confectionery. Our flagship physical venture for the modern ecosystem.",
    icon: Coffee,
    color: "from-brand-purple to-brand-pink",
    metrics: { sales: "4.8k+", reach: "12k+" },
    img: "v1"
  },
  {
    id: 'fitness-skating',
    name: "Fit-Creative",
    tagline: "Move your Body. Build your Mind.",
    desc: "A multi-discipline skating and fitness program that integrates physical wellness into the creative lifestyle. Healthy bodies build healthy businesses.",
    icon: Zap,
    color: "from-brand-pink to-brand-orange",
    metrics: { sessions: "1.2k+", members: "450+" },
    img: "v2"
  },
  {
    id: 'art-decor',
    name: "Ma Living",
    tagline: "Artistic Furniture & Decor.",
    desc: "Custom-built creative physical products, from furniture to decor and art. We translate digital creativity into tangible lifestyle assets.",
    icon: Palette,
    color: "from-brand-orange to-brand-yellow",
    metrics: { items: "240+", custom: "85+" },
    img: "v3"
  },
  {
    id: 'electronics',
    name: "Ma Tech Retail",
    tagline: "Electronics, Repair & Dropshipping.",
    desc: "Our hardware division focusing on premium electronics sales, expert repair services, and global dropshipping systems.",
    icon: Cpu,
    color: "from-brand-blue to-brand-purple",
    metrics: { repairs: "1.5k+", units: "3k+" },
    img: "v4"
  }
];

export default function Ventures() {
  return (
    <div className="pt-32 pb-20 space-y-40">
      {/* 1) HERO: LUXURY SPLIT */}
      <section className="min-h-[80vh] grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-[4rem] glass border border-white/5 mx-4">
        <div className="p-12 md:p-24 flex flex-col justify-center space-y-12 relative">
           <div className="absolute top-10 left-10 vertical-text text-white/10 hidden xl:block">MA_ECOSYSTEM_VENTURES</div>
           <div className="space-y-6">
              <div className="meta-label text-brand-orange">Asset Recognition & Scaling</div>
              <h1 className="text-5xl sm:text-7xl lg:text-[clamp(4rem,8vw,8rem)] font-light tracking-tighter text-white leading-[0.85] uppercase break-words">
                Lifestyle <br/><span className="text-gradient italic font-black">Holdings</span>
              </h1>
           </div>
           <p className="text-gray-400 text-2xl font-light leading-relaxed max-w-xl">
             We translate digital intelligence into high-performance physical assets. 
             From luxury confectionery to elite wellness architecture.
           </p>
           <div className="flex pt-4">
              <button className="h-24 w-24 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all group shadow-2xl">
                 <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
              </button>
           </div>
        </div>
        <div className="relative overflow-hidden group">
           <img 
            src="https://picsum.photos/seed/luxury-venture/1200/1200" 
            className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-110" 
            referrerPolicy="no-referrer"
          />
           <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent" />
           <div className="absolute bottom-20 right-10 flex flex-col items-end space-y-2">
              <span className="meta-label text-white/50">Current Global Value</span>
              <span className="text-4xl font-black text-white">KSh 1.2B+</span>
           </div>
        </div>
      </section>

      {/* 2) VENTURE PRESTIGE GRID */}
      <section className="space-y-32 px-4">
         <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <h2 className="text-5xl sm:text-6xl font-light text-white uppercase tracking-tighter leading-none break-words">The <span className="italic font-bold text-gradient">Portfolio</span></h2>
            <div className="meta-label text-gray-500 pb-2">04 Active Strategic Business Units</div>
         </div>

         <div className="space-y-40">
            {ventures.map((v, i) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "flex flex-col gap-20 items-center",
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                 <div className="w-full md:w-1/2 relative">
                    <div className="aspect-[4/5] rounded-[10rem] overflow-hidden border border-white/10 group">
                       <img 
                        src={`https://picsum.photos/seed/${v.id}/800/1000`} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                        referrerPolicy="no-referrer"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    </div>
                    {/* Vertical label overlay */}
                    <div className={cn(
                      "absolute top-20 vertical-text text-white/20 font-black text-4xl uppercase select-none pointer-events-none",
                      i % 2 === 0 ? "-left-12" : "-right-12"
                    )}>
                       {v.name}
                    </div>
                 </div>

                 <div className="w-full md:w-1/2 space-y-10 p-4 md:p-12">
                     <div className="space-y-4">
                        <div className="meta-label text-brand-pink">{v.tagline}</div>
                        <h3 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tighter leading-none break-words">{v.name}</h3>
                     </div>
                     <p className="text-gray-400 text-xl font-light leading-relaxed">
                        {v.desc}
                     </p>
                     
                     <div className="grid grid-cols-2 gap-12 py-10 border-y border-white/5">
                        {Object.entries(v.metrics).map(([key, val]) => (
                          <div key={key}>
                             <div className="text-5xl font-light text-white tracking-tighter">{val}</div>
                             <div className="meta-label text-gray-500 mt-2">{key}</div>
                          </div>
                        ))}
                     </div>

                     <button className="group flex items-center space-x-6 text-white uppercase font-black text-xs tracking-[0.4em] hover:text-brand-pink transition-colors">
                        <span>Investigate Asset</span>
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-pink group-hover:translate-x-2 transition-all">
                           <ArrowRight size={18} />
                        </div>
                     </button>
                 </div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* 3) VENTURE INCUBATION CTA */}
      <section className="relative overflow-hidden rounded-[4rem] group mx-4">
         <div className="absolute inset-0 bg-gradient-to-br from-brand-purple to-brand-orange opacity-10" />
         <div className="relative z-10 p-12 md:p-24 glass border border-white/10 flex flex-col items-center text-center space-y-10">
            <h2 className="text-5xl lg:text-[clamp(3rem,7vw,6rem)] font-black text-white uppercase tracking-tighter leading-tight break-words">Scale Your <br/><span className="text-gradient">Real-World Idea</span></h2>
            <p className="text-gray-400 text-xl max-w-2xl">
               Have a physical business idea? Ma Creatives Studio provides the technology, branding, and community to turn it into a global brand.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
               <button className="px-12 py-6 rounded-2xl bg-gradient-brand text-white font-black text-xl hover:scale-110 transition-transform shadow-2xl">
                 Apply for Incubation
               </button>
               <button className="px-12 py-6 rounded-2xl glass text-white font-bold text-xl hover:bg-white/10 transition-colors flex items-center space-x-3">
                 <ExternalLink size={20} />
                 <span>Partner With Us</span>
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}
