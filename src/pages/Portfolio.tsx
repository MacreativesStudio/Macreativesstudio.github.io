import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Search, Rocket, Sparkles, ArrowRight, LayoutGrid, Globe } from 'lucide-react';
import { cn } from '@/src/lib/utils.ts';
import { Link } from 'react-router-dom';

const portfolios = [
  { 
    name: "Cyber Donuts", 
    link: "cyber-donuts.github.io", 
    category: "Retail & F&B",
    deliverables: ["Brand Identity", "Web Experience", "Digital Ordering"],
    desc: "A futuristic confectionery brand merging tech-forward branding with an interactive digital product catalog."
  },
  { 
    name: "Elwatt Electrical & Interior", 
    link: "elwattelectrical-interiordesign.github.io", 
    category: "Architecture",
    deliverables: ["Commercial Web App", "Interior Showcase", "Lead Portal"],
    desc: "Digital presence for leading electrical engineering and modern interior design contractors."
  },
  { 
    name: "Amaru Official", 
    link: "amaruofficial.github.io", 
    category: "Brand & Fashion",
    deliverables: ["Creative Direction", "Typography", "Editorial Portfolio"],
    desc: "High-fashion editorial brand architecture and visual design system for high-growth ventures."
  },
  { 
    name: "Celtec Tech", 
    link: "celtec-tech.github.io", 
    category: "Enterprise Systems",
    deliverables: ["Infrastructure Portal", "Hardware Services", "B2B Funnel"],
    desc: "Enterprise hardware solutions, systems diagnostics, and high-frequency digital infrastructure."
  },
  { 
    name: "Ma Startup Hub", 
    link: "mashub.tech", 
    category: "Startups",
    deliverables: ["Incubator Platform", "Community Hub", "Founder Directory"],
    desc: "A decentralized ecosystem hub connecting early-stage African tech ventures with capital and mentors."
  },
  { 
    name: "Studio Ecosystem", 
    link: "ecosystem.macreatives.studio", 
    category: "Ecosystems",
    deliverables: ["Multi-Industry Portal", "Topology Map", "Network Nodes"],
    desc: "Living digital architecture mapping Ma Creatives Studio's decentralized network of ventures."
  },
  { 
    name: "Larkspur Fabricators", 
    link: "larkspurfabricators.github.io", 
    category: "Manufacturing",
    deliverables: ["Industrial Website", "Product Catalog", "Client Quotes"],
    desc: "Precision engineering, metal fabrication, and structural manufacturing showcase."
  },
  { 
    name: "Bobby Tech Fix", 
    link: "bobby-tech-fix.github.io", 
    category: "Hardware",
    deliverables: ["Service Booking", "Mobile Interface", "Direct WhatsApp"],
    desc: "Fast electronics diagnostics and hardware repair booking system tailored for Nairobi customers."
  },
  { 
    name: "Stride with Jovannah", 
    link: "stridewithjovannah.github.io", 
    category: "Lifestyle",
    deliverables: ["Personal Branding", "Course Registration", "Event Hub"],
    desc: "Empowering personal brand platform focused on fitness, coaching, and mindful movement."
  },
  { 
    name: "Stephen Kimaru Portfolio", 
    link: "stephenkimaru.github.io", 
    category: "Founder Portal",
    deliverables: ["CEO Manifesto", "Design Archive", "Direct Contact"],
    desc: "Personal portfolio of Ma Creatives Studio founder Stephen Kimaru Kung'u."
  },
];

export default function Portfolio() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState('All');

  const categories = ['All', ...new Set(portfolios.map(p => p.category))];

  const filteredPortfolios = portfolios.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-32 pb-24 space-y-16 px-4">
      {/* Header */}
      <div className="max-w-4xl space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-brand-pink">
          <LayoutGrid size={13} />
          <span>Ecosystem Showcase</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase leading-none">
          Proven <br/><span className="text-gradient">Innovations</span>
        </h1>
        <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-2xl">
          Real businesses, real websites, and live digital products deployed across Kenya and the continent.
        </p>
        
        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 pt-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
            <input 
              type="text" 
              placeholder="Search projects by name, category, or stack..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-950 border border-white/15 rounded-2xl py-3.5 pl-12 pr-6 text-white text-sm outline-none focus:border-brand-pink transition-all shadow-md"
            />
          </div>
          <div className="flex space-x-1.5 bg-zinc-950 border border-white/15 p-1 rounded-2xl overflow-x-auto no-scrollbar">
            {categories.map(c => (
              <button 
                key={c}
                onClick={() => setActiveCategory(c)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap",
                  activeCategory === c ? "bg-gradient-brand text-white shadow-md" : "text-zinc-400 hover:text-white"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Case Studies */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPortfolios.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="group rounded-[2.5rem] overflow-hidden bg-zinc-950 border border-white/15 hover:border-brand-pink/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
          >
            {/* Visual Cover */}
            <div className="relative h-56 overflow-hidden bg-zinc-900">
              <img 
                 src={`https://picsum.photos/seed/${p.name.replace(/\s+/g, '-')}/800/600`}
                 alt={p.name}
                 loading="lazy"
                 referrerPolicy="no-referrer"
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/75 border border-white/20 text-brand-pink text-[10px] font-black uppercase tracking-wider backdrop-blur-md">
                  {p.category}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-7 space-y-5 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-brand-pink transition-colors">
                  {p.name}
                </h3>
                <p className="text-zinc-300 text-xs md:text-sm leading-relaxed">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {p.deliverables.map(d => (
                    <span key={d} className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-zinc-400 font-semibold">
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10">
                <a 
                  href={`https://${p.link}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-brand-pink hover:text-white transition-all flex items-center justify-center space-x-2"
                >
                  <span>Launch Live Site</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action Bar */}
      <div className="bg-zinc-950 border border-white/15 rounded-[2.5rem] p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">Need A Website Built Like One of These?</h3>
          <p className="text-zinc-300 text-sm max-w-xl">
            We can design, build, and deploy your business storefront or web application in as little as 3 days.
          </p>
        </div>
        <Link 
          to="/contact" 
          className="px-8 py-4 rounded-full bg-gradient-brand text-white font-extrabold uppercase text-xs tracking-wider hover:scale-105 transition-all shadow-xl whitespace-nowrap"
        >
          Book Your Project Brief
        </Link>
      </div>
    </div>
  );
}
