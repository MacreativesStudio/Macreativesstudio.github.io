import React from 'react';
import { motion } from 'motion/react';
import { Search, Filter, ShoppingCart, Heart, ArrowRight, ChevronDown } from 'lucide-react';
import { cn } from '@/src/lib/utils.ts';

const categories = [
  "Furniture", "Bean Bags", "Home Decor", "Electronics", "Clothing", "Digital Products", "Templates", "Books"
];

const products = [
  { name: "Luxury Bean Bag", category: "Furniture", price: 4500, sales: 120, img: "beanbag" },
  { name: "Innovation Template v1", category: "Digital Products", price: 1200, sales: 340, img: "code" },
  { name: "Cyber Armor Jacket", category: "Clothing", price: 8500, sales: 45, img: "jacket" },
  { name: "Studio Wall Art", category: "Home Decor", price: 2800, sales: 88, img: "art" },
  { name: "Ecosystem Handbook", category: "Books", price: 950, sales: 560, img: "book" },
  { name: "Smart Work Light", category: "Electronics", price: 3400, sales: 210, img: "light" },
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
    <div className="pt-32 pb-20 space-y-16">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
           <h1 className="text-6xl font-bold tracking-tighter text-white uppercase">Creative<br/><span className="text-gradient">Marketplace</span></h1>
           <p className="text-gray-400 mt-6 max-w-xl">
             Explore physical products, digital assets, and high-quality crafting from our ecosystem partners.
           </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
           <div className="relative flex-1 md:w-64">
             <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
             <input 
               type="text" 
               placeholder="Search products..."
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="pl-12 pr-6 py-4 rounded-2xl glass focus:outline-none focus:border-brand-pink/50 transition-colors w-full"
             />
           </div>
           
           <div className="relative group">
              <select 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="appearance-none px-6 py-4 pr-12 rounded-2xl glass focus:outline-none focus:border-brand-pink/50 transition-colors w-full md:w-56 text-gray-400 font-bold uppercase text-[10px] tracking-widest cursor-pointer"
              >
                <option value="Default">Sort By</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
                <option value="Most Popular">Most Popular</option>
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
           </div>
        </div>
      </div>

      {/* Categories Horizontal */}
      <div className="flex overflow-x-auto pb-4 space-x-4 no-scrollbar">
        {["All", ...categories].map((cat) => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "flex-shrink-0 px-6 py-2.5 rounded-full transition-all text-sm font-medium",
              activeCategory === cat ? "bg-gradient-brand text-white" : "glass hover:bg-white/10 text-gray-400"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group glass rounded-[2rem] overflow-hidden hover:border-brand-pink/50 transition-all duration-300"
          >
            <div className="relative h-64 overflow-hidden bg-white/5">
              <img 
                src={`https://picsum.photos/seed/${p.img}/800/600`}
                alt={p.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-3 rounded-full glass hover:bg-brand-pink text-white"><Heart size={18} /></button>
                <button className="p-3 rounded-full glass hover:bg-brand-pink text-white"><ShoppingCart size={18} /></button>
              </div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-brand-pink text-xs font-bold uppercase tracking-widest">{p.category}</span>
                  <h3 className="text-xl font-bold text-white mt-1 uppercase leading-tight">{p.name}</h3>
                </div>
                <div className="text-2xl font-bold text-gradient">KSh {p.price.toLocaleString()}</div>
              </div>
              <button className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-gradient-brand hover:border-transparent transition-all flex items-center justify-center space-x-2">
                <span>View Details</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
