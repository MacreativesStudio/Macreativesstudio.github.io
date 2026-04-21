import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Search } from 'lucide-react';
import { cn } from '@/src/lib/utils.ts';

const portfolios = [
  { name: "Elwatt Electrical", link: "elwattelectrical-interiordesign.github.io", category: "Interior Design" },
  { name: "Amaru Official", link: "amaruofficial.github.io", category: "Brand" },
  { name: "Ma Startup Hub", link: "mashub.tech", category: "Startups" },
  { name: "Celtec Tech", link: "celtec-tech.github.io", category: "Enterprise" },
  { name: "Studio Ecosystem", link: "ecosystem.macreatives.studio", category: "Ecosystems" },
  { name: "Larkspur Fabricators", link: "larkspurfabricators.github.io", category: "Manufacturing" },
  { name: "Bobby Tech Fix", link: "bobby-tech-fix.github.io", category: "Hardware" },
  { name: "Stride with Jovannah", link: "stridewithjovannah.github.io", category: "Lifestyle" },
  { name: "Personal Experiment 01", link: "exp01.dev", category: "Personal Projects" },
  { name: "Stephen Kimaru", link: "stephenkimaru.github.io", category: "Personal Projects" },
  { name: "Cyber Donuts", link: "cyber-donuts.github.io", category: "Retail" },
  { name: "Ma Creatives Studio", link: "macreativesstudio.github.io", category: "Ecosystems" },
];

export default function Portfolio() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState('All');

  const categories = ['All', ...new Set(portfolios.map(p => p.category))];

  const filteredPortfolios = portfolios.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-32 pb-20 space-y-16">
      <div className="max-w-4xl space-y-8 px-4">
        <div className="inline-flex items-center space-x-2 text-brand-pink text-[10px] font-black uppercase tracking-[0.4em]">
          <span>Ecosystem Showcase</span>
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-[clamp(3.5rem,8vw,8rem)] font-bold tracking-tighter mb-8 text-white uppercase leading-none break-words">
          Proven <br/><span className="text-gradient">Innovations</span>
        </h1>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="relative flex-1">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input 
              type="text" 
              placeholder="Search projects by name or category..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-16 pr-8 text-white focus:outline-none focus:border-brand-pink transition-all"
            />
          </div>
          <div className="flex space-x-2 glass p-2 rounded-2xl overflow-x-auto no-scrollbar">
            {categories.map(c => (
              <button 
                key={c}
                onClick={() => setActiveCategory(c)}
                className={cn(
                  "px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap",
                  activeCategory === c ? "bg-gradient-brand text-white" : "text-gray-500 hover:text-white"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPortfolios.map((p, i) => (
          <motion.div
            key={p.name}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: i * 0.05 }}
            className="group relative h-[400px] rounded-[3rem] overflow-hidden glass border-white/5 hover:border-brand-pink/50 transition-all duration-700"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
            <img 
               src={`https://picsum.photos/seed/${p.name}/800/600`}
               alt={p.name}
               referrerPolicy="no-referrer"
               className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-80"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent">
              <span className="text-brand-pink text-xs font-bold uppercase tracking-widest mb-2">{p.category}</span>
              <h3 className="text-2xl font-bold text-white mb-6 uppercase">{p.name}</h3>
              <a 
                href={`https://${p.link}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-white text-black font-bold hover:bg-brand-pink hover:text-white transition-all transform group-hover:-translate-y-1"
              >
                <span>Visit Project</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
