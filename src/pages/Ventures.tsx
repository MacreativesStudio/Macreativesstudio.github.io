import React from 'react';
import { motion } from 'motion/react';
import { Coffee, Zap, Palette, Cpu, ArrowRight, ExternalLink, Sparkles, MapPin } from 'lucide-react';
import { cn } from '@/src/lib/utils.ts';
import { Link } from 'react-router-dom';

const ventures = [
  {
    id: 'cyber-donuts',
    name: "Cyber Donuts",
    tagline: "Fresh Ideas. Futuristic Pastries.",
    desc: "A futuristic confectionery brand merging tech-forward pastry design with instant digital ordering. Our flagship physical venture showcasing how creative branding elevates food retail.",
    icon: Coffee,
    metrics: { "Active Orders": "4.8k+", "Audience Reach": "12k+" },
    img: "donuts",
    url: "https://cyber-donuts.github.io"
  },
  {
    id: 'fitness-skating',
    name: "Fit-Creative",
    tagline: "Condition the Body. Elevate the Mind.",
    desc: "A multi-discipline skating and fitness lifestyle movement integrating physical wellness into the creative daily routine. Healthy bodies build resilient, high-revenue companies.",
    icon: Zap,
    metrics: { "Active Sessions": "1.2k+", "Community Members": "450+" },
    img: "fitness",
    url: "/communities"
  },
  {
    id: 'art-decor',
    name: "Ma Living",
    tagline: "Artistic Furniture & Interior Architecture.",
    desc: "Translating digital creativity into physical spaces. Bespoke interior design, architectural lighting, and artistic furniture crafted for high-end residential and modern studio spaces.",
    icon: Palette,
    metrics: { "Custom Builds": "85+", "Curated Items": "240+" },
    img: "living",
    url: "/portfolio"
  },
  {
    id: 'electronics',
    name: "Ma Tech Retail",
    tagline: "Electronics, Hardware & Dropshipping.",
    desc: "Our hardware infrastructure wing focusing on consumer tech sales, expert diagnostics and device repair, and automated cross-border dropshipping logistics.",
    icon: Cpu,
    metrics: { "Devices Repaired": "1.5k+", "Units Shipped": "3.2k+" },
    img: "tech",
    url: "/shop"
  }
];

export default function Ventures() {
  return (
    <div className="pt-32 pb-24 space-y-24 px-4">
      {/* 1) HERO */}
      <section className="bg-zinc-950 border border-white/15 rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
        <div className="max-w-3xl space-y-6 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-brand-orange">
            <Sparkles size={13} />
            <span>Lifestyle & Commercial Holdings</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase leading-none">
            Physical-to-Digital <br/><span className="text-gradient">Ventures</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg md:text-xl leading-relaxed">
            We don’t just stay behind screens. Ma Creatives Studio translates digital intelligence into tangible real-world business units across food, wellness, interiors, and hardware.
          </p>
        </div>
      </section>

      {/* 2) VENTURE CARDS */}
      <div className="space-y-16">
        {ventures.map((v, i) => (
          <div 
            key={v.id}
            className={cn(
              "bg-zinc-950 border border-white/15 rounded-[3rem] p-8 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-2xl transition-all hover:border-brand-orange/40",
              i % 2 === 1 && "lg:flex-row-reverse"
            )}
          >
            {/* Visual Frame */}
            <div className={cn("lg:col-span-5 h-[340px] rounded-[2.5rem] overflow-hidden relative border border-white/10 bg-zinc-900", i % 2 === 1 && "lg:order-2")}>
              <img 
                src={`https://picsum.photos/seed/${v.img}/800/800`} 
                alt={v.name}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-70 hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">HOLDING #{i + 1}</span>
                <h4 className="text-2xl font-black text-white uppercase tracking-tight">{v.name}</h4>
              </div>
            </div>

            {/* Info Body */}
            <div className={cn("lg:col-span-7 space-y-6", i % 2 === 1 && "lg:order-1")}>
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">{v.tagline}</span>
                <h3 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">{v.name}</h3>
              </div>

              <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                {v.desc}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/10">
                {Object.entries(v.metrics).map(([key, val]) => (
                  <div key={key}>
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">{val}</div>
                    <div className="text-xs text-zinc-400 font-bold uppercase tracking-wider mt-0.5">{key}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center space-x-4">
                {v.url.startsWith('http') ? (
                  <a 
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-brand-orange hover:text-white transition-all inline-flex items-center space-x-2"
                  >
                    <span>Visit Venture Site</span>
                    <ExternalLink size={13} />
                  </a>
                ) : (
                  <Link 
                    to={v.url}
                    className="px-6 py-3 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-brand-orange hover:text-white transition-all inline-flex items-center space-x-2"
                  >
                    <span>Explore Holding</span>
                    <ArrowRight size={13} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3) VENTURE INCUBATION CALL */}
      <div className="bg-zinc-950 border border-white/15 rounded-[3rem] p-10 md:p-16 text-center space-y-6 shadow-2xl">
        <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
          Have a Physical Business Idea?
        </h2>
        <p className="text-zinc-300 text-base max-w-xl mx-auto leading-relaxed">
          Ma Creatives Studio provides the branding, software infrastructure, and distribution systems to incubate your concept into a profitable brand.
        </p>
        <div className="pt-2">
          <Link 
            to="/contact" 
            className="px-8 py-4 rounded-full bg-gradient-brand text-white font-extrabold text-xs uppercase tracking-wider hover:scale-105 transition-all inline-block shadow-xl"
          >
            Apply for Incubation
          </Link>
        </div>
      </div>
    </div>
  );
}
