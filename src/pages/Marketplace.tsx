import React from 'react';
import { motion } from 'motion/react';
import { 
  Store, ShoppingBag, Heart, Star, Search, 
  ArrowRight, Globe, Award, TrendingUp, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils.ts';

const featuredVendors = [
  { id: 1, name: "Neon Forge", rating: 4.9, sales: 1200, category: "Digital Assets", img: "v1" },
  { id: 2, name: "Cyber Donuts", rating: 4.8, sales: 850, category: "Creative Food", img: "v2" },
  { id: 3, name: "Global Threads", rating: 4.7, sales: 540, category: "Fashion", img: "v3" },
];

const products = [
  { id: 1, name: "Neon Glaze Website Generator", price: "KSh 4,500", vendor: "Ma Tech", rating: 5, reviews: 156, img: "gen1", category: "Digital" },
  { id: 2, name: "Elite Portfolio Builder", price: "KSh 2,800", vendor: "Ma Tech", rating: 5, reviews: 89, img: "gen2", category: "Digital" },
  { id: 3, name: "Cyberpunk Glow Asset Pack", price: "KSh 1,200", vendor: "Neon Forge", rating: 5, reviews: 42, img: "p1", category: "Digital" },
  { id: 4, name: "Donut Box NFT Voucher", price: "KSh 800", vendor: "Cyber Donuts", rating: 4, reviews: 12, img: "p2", category: "Physical" },
  { id: 5, name: "Ma Ecosystem Course v1", price: "KSh 5,000", vendor: "Ma Education", rating: 5, reviews: 230, img: "p3", category: "Digital" },
  { id: 6, name: "African Tech Tee (Limited)", price: "KSh 2,500", vendor: "Global Threads", rating: 5, reviews: 8, img: "p4", category: "Physical" },
];

export default function Marketplace() {
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProducts = products.filter(p => 
    activeCategory === 'All' || p.category === activeCategory
  );

  return (
    <div className="pt-32 pb-20 space-y-40 overflow-hidden">
      {/* 1) HERO: MASSIVE HI-TECH HEADER */}
      <section className="relative px-8 flex flex-col items-center text-center space-y-12">
        <div className="absolute inset-0 atmosphere opacity-20 pointer-events-none" />
        <div className="space-y-6 relative z-10">
          <div className="meta-label text-brand-pink tracking-[0.5em]">The Ecosystem Exchange</div>
          <h1 className="text-6xl sm:text-8xl lg:text-[clamp(4rem,10vw,10rem)] font-light tracking-tighter text-white leading-[0.8] uppercase font-sans break-words">
            Creative <br/><span className="text-gradient font-black italic">Capital</span>
          </h1>
        </div>
        <p className="text-gray-400 text-xl md:text-3xl font-light leading-relaxed max-w-4xl relative z-10 italic">
          "Ma" means "My". This is <span className="text-white font-medium not-italic">Your Studio Expansion</span>. 
          The central marketplace for high-performance creative assets and specialized tech tools.
        </p>
        <div className="flex flex-wrap justify-center gap-6 relative z-10">
           <button className="px-14 py-6 rounded-full bg-white text-black font-black uppercase text-xs tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl">
             Explore Assets
           </button>
           <Link to="/vendor/register" className="px-14 py-6 rounded-full border border-white/20 text-white font-black uppercase text-xs tracking-widest hover:bg-white/10 transition-all">
             Open Store
           </Link>
        </div>
      </section>

      {/* 2) ELITE VENDORS: EDITORIAL BENTO */}
      <section className="space-y-16 px-4">
        <div className="flex justify-between items-end">
           <div className="space-y-2">
              <h2 className="text-5xl font-bold text-white uppercase tracking-tighter">Elite <span className="text-gradient">Partners</span></h2>
           </div>
           <Link to="/vendor/register" className="meta-label text-brand-purple hover:text-white transition-colors">Apply to List Assets &rarr;</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {featuredVendors.map((v, i) => (
             <motion.div 
               key={v.id}
               whileHover={{ y: -10 }}
               className={cn(
                 "group relative glass p-12 rounded-[4rem] border border-white/5 overflow-hidden flex flex-col justify-between min-h-[400px]",
                 i === 0 && "md:col-span-2 bg-gradient-to-br from-brand-purple/20 to-transparent"
               )}
             >
                <div className="absolute top-0 right-0 p-12 text-white/5 font-black text-8xl uppercase pointer-events-none select-none italic group-hover:text-white/10 transition-colors">
                  {i + 1}
                </div>
                <div className="space-y-8 relative z-10">
                   <div className="w-24 h-24 rounded-[2rem] overflow-hidden border-4 border-black glass p-1 shadow-2xl group-hover:scale-110 transition-transform">
                      <img src={`https://picsum.photos/seed/${v.img}/200/200`} className="w-full h-full object-cover rounded-[1.8rem]" />
                   </div>
                   <div className="space-y-2">
                      <h3 className="text-4xl font-black text-white uppercase tracking-tighter">{v.name}</h3>
                      <p className="meta-label text-brand-pink">{v.category}</p>
                   </div>
                </div>
                <div className="flex justify-between items-end relative z-10">
                   <div className="flex space-x-12">
                      <div>
                         <div className="text-3xl font-light text-white">{v.rating}</div>
                         <div className="meta-label text-gray-500">Global Score</div>
                      </div>
                      <div>
                         <div className="text-3xl font-light text-white">{v.sales}+</div>
                         <div className="meta-label text-gray-500">Exchanges</div>
                      </div>
                   </div>
                   <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-brand-pink transition-all">
                      <ArrowRight size={20} />
                   </button>
                </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* 3) DISCOVER ASSETS: THE PREMIUM GRID */}
      <section className="space-y-20 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/5 pb-10">
           <div className="flex-1 w-full relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-600 group-hover:text-brand-pink transition-colors" size={24} />
              <input 
                type="text" 
                placeholder="INVESTIGATE THE ECOSYSTEM..." 
                className="w-full pl-20 pr-8 py-8 bg-transparent text-white text-2xl font-light tracking-tight placeholder:text-white/10 outline-none uppercase"
              />
           </div>
           <div className="flex space-x-4">
              {['All', 'Digital', 'Physical', 'Services'].map(c => (
                <button 
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={cn(
                    "px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-all",
                    activeCategory === c ? "bg-white text-black shadow-2xl" : "text-gray-500 hover:text-white border border-white/5"
                  )}
                >
                  {c}
                </button>
              ))}
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
           {filteredProducts.map((p) => (
             <motion.div 
               key={p.id}
               className="group flex flex-col space-y-8"
             >
                <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden glass border border-white/5 group">
                   <img 
                    src={`https://picsum.photos/seed/${p.img}/800/1000`} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                   
                   <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                      <div className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform opacity-0 group-hover:opacity-100 duration-500">
                         <div className="meta-label text-white/50">{p.vendor}</div>
                         <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none">{p.name}</h3>
                      </div>
                      <button className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                         <ShoppingBag size={24} />
                      </button>
                   </div>
                   
                   <div className="absolute top-8 left-8">
                      <div className="text-2xl font-black text-white px-6 py-2 glass rounded-2xl border-white/20 whitespace-nowrap">{p.price}</div>
                   </div>
                </div>

                <div className="px-10 flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                   <div className="flex items-center space-x-4">
                      <div className="flex text-brand-orange space-x-1">
                         {[1,2,3,4,5].map(s => <Star key={s} size={10} fill={s <= p.rating ? "currentColor" : "none"} />)}
                      </div>
                      <span className="text-gray-500">{p.reviews} VERIFIED</span>
                   </div>
                   <button className="text-white hover:text-brand-pink transition-colors">
                      <Heart size={20} />
                   </button>
                </div>
             </motion.div>
           ))}
        </div>
      </section>
    </div>
  );
}
