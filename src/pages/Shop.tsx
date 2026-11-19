import React from 'react';
import { motion } from 'motion/react';
import { Search, ShoppingBag, Heart, ArrowRight, ChevronDown, Sparkles, MessageCircle } from 'lucide-react';
import { cn } from '@/src/lib/utils.ts';

const categories = [
  "Furniture & Decor", "Digital Products", "Apparel", "Hardware", "Ecosystem Books"
];

const products = [
  { name: "Luxury Studio Bean Bag", category: "Furniture & Decor", price: 4500, sales: 120, img: "beanbag", desc: "Premium handcrafted ergonomic lounge seating for creative studios." },
  { name: "Website Generator v1 (Vite + React)", category: "Digital Products", price: 2500, sales: 340, img: "code", desc: "Production-ready business landing page template with M-Pesa STK push support." },
  { name: "Cyber Armor Studio Jacket", category: "Apparel", price: 6500, sales: 45, img: "jacket", desc: "Limited edition heavyweight streetwear jacket with metallic studio branding." },
  { name: "Studio Acoustic Wall Art", category: "Furniture & Decor", price: 2800, sales: 88, img: "art", desc: "Sound-dampening acoustic wall panel featuring futuristic geometric art." },
  { name: "The Ma Ecosystem Handbook", category: "Ecosystem Books", price: 950, sales: 560, img: "book", desc: "The definitive founder guide to building decentralized multi-industry ventures in Africa." },
  { name: "Smart Studio Work Light", category: "Hardware", price: 3400, sales: 210, img: "light", desc: "Adjustable Kelvin lighting designed for late-night developers and digital creators." },
];

export default function Shop() {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [sortOption, setSortOption] = React.useState('Default');

  const filteredProducts = products
    .filter(p => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortOption === 'Price: Low to High') return a.price - b.price;
      if (sortOption === 'Price: High to Low') return b.price - a.price;
      if (sortOption === 'Most Popular') return b.sales - a.sales;
      return 0;
    });

  return (
    <div className="pt-32 pb-24 space-y-16 px-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 max-w-7xl mx-auto">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-brand-pink">
            <ShoppingBag size={13} />
            <span>Studio Goods & Assets</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase leading-none">
            Creative <br/><span className="text-gradient">Store</span>
          </h1>
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
            Curated physical goods, digital source-code templates, and creative studio merchandise.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input 
              type="text" 
              placeholder="Search store..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-zinc-950 border border-white/15 focus:border-brand-pink text-xs text-white outline-none"
            />
          </div>
          
          <div className="relative">
            <select 
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="appearance-none px-5 py-3 pr-10 rounded-2xl bg-zinc-950 border border-white/15 focus:border-brand-pink text-zinc-300 font-bold text-xs uppercase tracking-wider cursor-pointer"
            >
              <option value="Default">Sort By</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
              <option value="Most Popular">Most Popular</option>
            </select>
            <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex overflow-x-auto pb-2 space-x-2 no-scrollbar max-w-7xl mx-auto">
        {["All", ...categories].map((cat) => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap",
              activeCategory === cat ? "bg-gradient-brand text-white shadow-lg" : "bg-zinc-950 border border-white/15 text-zinc-400 hover:text-white"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredProducts.map((p) => (
          <div
            key={p.name}
            className="bg-zinc-950 border border-white/15 hover:border-brand-pink/50 rounded-[2.5rem] overflow-hidden flex flex-col justify-between shadow-xl transition-all group"
          >
            <div className="relative h-60 overflow-hidden bg-zinc-900">
              <img 
                src={`https://picsum.photos/seed/${p.img}/800/600`}
                alt={p.name}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-75 group-hover:opacity-90"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/80 border border-white/20 text-brand-pink text-[10px] font-black uppercase tracking-wider backdrop-blur-md">
                  {p.category}
                </span>
              </div>
            </div>

            <div className="p-7 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-xl font-black text-white uppercase tracking-tight">{p.name}</h3>
                </div>
                <div className="text-2xl font-black text-brand-pink tracking-tight mb-2">
                  KES {p.price.toLocaleString()}
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed">{p.desc}</p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <a
                  href={`https://wa.me/254798691594?text=${encodeURIComponent(`Hi Stephen, I want to purchase the "${p.name}" (KES ${p.price.toLocaleString()}) from the Ma Creatives Store.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-white text-black hover:bg-brand-pink hover:text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={14} />
                  <span>Order via WhatsApp & M-Pesa</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
