import React from 'react';
import { motion } from 'motion/react';
import { Store, ShoppingBag, Heart, Star, Search, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils.ts';

const featuredVendors = [
  { id: 1, name: "Neon Forge", rating: 4.9, sales: 1200, category: "Digital Assets", img: "v1" },
  { id: 2, name: "Cyber Donuts", rating: 4.8, sales: 850, category: "Creative Food", img: "v2" },
  { id: 3, name: "Global Threads", rating: 4.7, sales: 540, category: "Fashion & Apparel", img: "v3" },
];

const products = [
  { id: 1, name: "Neon Glaze Website Generator", price: "KES 4,500", vendor: "Ma Tech", rating: 5, reviews: 156, img: "gen1", category: "Digital" },
  { id: 2, name: "Elite Portfolio Builder", price: "KES 2,800", vendor: "Ma Tech", rating: 5, reviews: 89, img: "gen2", category: "Digital" },
  { id: 3, name: "Cyberpunk Glow Asset Pack", price: "KES 1,200", vendor: "Neon Forge", rating: 5, reviews: 42, img: "p1", category: "Digital" },
  { id: 4, name: "Cyber Donut Box Voucher", price: "KES 800", vendor: "Cyber Donuts", rating: 4, reviews: 12, img: "p2", category: "Physical" },
  { id: 5, name: "Ma Ecosystem Course v1", price: "KES 5,000", vendor: "Ma Education", rating: 5, reviews: 230, img: "p3", category: "Digital" },
  { id: 6, name: "African Tech Tee (Limited)", price: "KES 2,500", vendor: "Global Threads", rating: 5, reviews: 8, img: "p4", category: "Physical" },
];

export default function Marketplace() {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredProducts = products.filter(p => {
    const matchesCat = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.vendor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 space-y-24 px-4">
      {/* 1) HERO */}
      <section className="bg-zinc-950 border border-white/15 rounded-[3rem] p-8 md:p-16 text-center max-w-5xl mx-auto space-y-6 shadow-2xl">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-brand-pink">
          <Sparkles size={13} />
          <span>The Ecosystem Exchange</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-white uppercase leading-none">
          Creative <span className="text-gradient">Marketplace</span>
        </h1>
        <p className="text-zinc-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          The central marketplace for high-performance digital source assets, website generators, and partner lifestyle goods.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link 
            to="/vendor/register" 
            className="px-8 py-3.5 rounded-full bg-gradient-brand text-white font-extrabold text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-xl"
          >
            Open Verified Vendor Store
          </Link>
          <a 
            href="#assets-grid"
            className="px-8 py-3.5 rounded-full bg-zinc-900 border border-white/20 text-zinc-200 hover:text-white font-extrabold text-xs uppercase tracking-wider transition-all"
          >
            Browse Products
          </a>
        </div>
      </section>

      {/* 2) FEATURED PARTNERS / VENDORS */}
      <section className="space-y-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Verified Partners</h2>
            <p className="text-zinc-400 text-sm">Top contributing vendors in the Ma Creatives network.</p>
          </div>
          <Link to="/vendor/register" className="text-xs font-bold text-brand-pink uppercase tracking-wider hover:underline">
            Apply to List Assets &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredVendors.map((v) => (
            <div 
              key={v.id}
              className="p-8 rounded-[2rem] bg-zinc-950 border border-white/15 space-y-4 shadow-xl flex items-center space-x-5"
            >
              <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 overflow-hidden shrink-0">
                <img 
                  src={`https://picsum.photos/seed/${v.img}/200/200`} 
                  alt={v.name}
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-black text-white uppercase tracking-tight">{v.name}</h3>
                <span className="text-xs text-brand-pink font-bold uppercase tracking-wider">{v.category}</span>
                <div className="flex items-center space-x-3 text-xs text-zinc-400 pt-1">
                  <span>★ {v.rating}</span>
                  <span>•</span>
                  <span>{v.sales}+ Exchanges</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3) ASSET CATALOG */}
      <section id="assets-grid" className="space-y-10 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="relative flex-1 max-w-md w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
            <input 
              type="text" 
              placeholder="Search assets or vendors..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-zinc-950 border border-white/15 text-white text-xs outline-none focus:border-brand-pink"
            />
          </div>

          <div className="flex space-x-2 bg-zinc-950 border border-white/15 p-1 rounded-2xl">
            {['All', 'Digital', 'Physical'].map(c => (
              <button 
                key={c}
                onClick={() => setActiveCategory(c)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all",
                  activeCategory === c ? "bg-white text-black shadow-md" : "text-zinc-400 hover:text-white"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((p) => (
            <div 
              key={p.id}
              className="bg-zinc-950 border border-white/15 hover:border-brand-pink/50 rounded-[2.5rem] overflow-hidden flex flex-col justify-between shadow-xl transition-all group"
            >
              <div className="relative h-56 bg-zinc-900 overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/${p.img}/800/600`}
                  alt={p.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 border border-white/20 text-brand-pink text-[10px] font-black uppercase tracking-wider">
                  {p.category}
                </div>
              </div>

              <div className="p-7 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block mb-1">
                    By {p.vendor}
                  </span>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight">{p.name}</h3>
                  <div className="text-2xl font-black text-brand-pink tracking-tight mt-2">{p.price}</div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <a
                    href={`https://wa.me/254798691594?text=${encodeURIComponent(`Hi Stephen, I want to acquire "${p.name}" (${p.price}) listed by ${p.vendor} on Ma Creatives Marketplace.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl bg-white text-black hover:bg-brand-pink hover:text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2"
                  >
                    <MessageCircle size={14} />
                    <span>Purchase via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
