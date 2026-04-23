import React from 'react';
import { motion } from 'motion/react';
import { Billboard } from '@/src/components/Billboard.tsx';
import { 
  Rocket, Globe, Zap, Users, ShieldCheck, Heart, 
  ArrowRight, Search, Briefcase, ShoppingBag, 
  Star, MessageCircle, FlaskConical, LayoutGrid,
  MapPin, CreditCard, Coffee
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils.ts';

const stats = [
  { label: 'Impactful Projects', value: '150+', icon: Rocket },
  { label: 'Active Communities', value: '12+', icon: Users },
  { label: 'Thriving Businesses', value: '85+', icon: Briefcase },
  { label: 'Innovations Scaled', value: '300+', icon: Zap },
];

const homeProjects = [
  { 
    name: "Cyber Donuts", 
    category: "The Future of Retail", 
    img: "donuts",
    desc: "Redefining the physical-to-digital food experience through tech-integrated retail.",
    type: "Websites",
    keywords: ["retail", "food", "digital", "branding"]
  },
  { 
    name: "Read Your Bible", 
    category: "Global Faith Network", 
    img: "bible",
    desc: "A decentralized community platform scaling spiritual connection across 40+ countries.",
    type: "Communities",
    keywords: ["faith", "community", "decentralized", "network"]
  },
  { 
    name: "Amaru", 
    category: "Identity & Brand", 
    img: "amaru",
    desc: "Premium creative direction and brand architecture for high-growth ventures.",
    type: "Startups",
    keywords: ["brand", "creative", "strategy", "identity"]
  },
  { 
    name: "Celtec Tech", 
    category: "Enterprise Systems", 
    img: "tech",
    desc: "High-frequency infrastructure for modern digital enterprises.",
    type: "Websites",
    keywords: ["enterprise", "software", "infrastructure", "dev"]
  },
  { 
    name: "Ma Networld Hub", 
    category: "Ecosystem Builder", 
    img: "network",
    desc: "A central gateway for creators to connect, build, and earn.",
    type: "Communities",
    keywords: ["ecosystem", "network", "earning", "creators"]
  },
  { 
    name: "Elwatt Designs", 
    category: "Architecture & Tech", 
    img: "design",
    desc: "Blending physical architecture with digital innovation.",
    type: "Startups",
    keywords: ["architecture", "design", "tech", "innovation"]
  },
];

const testimonials = [
  { name: "Alex J.", role: "CEO, TechHive", text: "Ma Creatives Studio transformed our digital identity. Their ecosystem approach is unique." },
  { name: "Sarah M.", role: "Creator", text: "Joining Ma Networld opened up opportunities I didn't know existed in the Kenyan market." },
  { name: "David K.", role: "Startup Founder", text: "The Innovation Lab helped us prototype our idea in weeks instead of months." }
];

export default function Home() {
  const [activeFilter, setActiveFilter] = React.useState('All');
  const [projectSearch, setProjectSearch] = React.useState('');
  const [visibleCount, setVisibleCount] = React.useState(3);

  const filteredProjects = homeProjects.filter(p => {
    const matchesFilter = activeFilter === 'All' || p.type === activeFilter;
    const matchesSearch = p.name.toLowerCase().includes(projectSearch.toLowerCase()) || 
                         p.category.toLowerCase().includes(projectSearch.toLowerCase()) ||
                         p.keywords.some(k => k.toLowerCase().includes(projectSearch.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  return (
    <div className="space-y-32 pb-20 overflow-hidden">
      {/* 2) HERO SECTION */}
      <Billboard />

      {/* 3) TRUST / BRAND STRIP */}
      <section className="mx-4">
        <div className="glass rounded-[3rem] md:rounded-full py-8 md:py-6 px-8 md:px-16 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 border-white/5">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-3 md:space-y-0 md:space-x-5 group cursor-default">
              <div className="w-14 h-14 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-pink group-hover:bg-gradient-brand group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-xl">
                 <stat.icon size={24} />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-3xl font-black text-white tracking-tighter">{stat.value}</div>
                <div className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4) SERVICES PREVIEW */}
      <section id="services-section">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-bold tracking-tighter text-white uppercase">Featured <span className="text-gradient">Services</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto">Scalable solutions tailored for your growth phase.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Web & App Dev", desc: "Crafting digital experiences that convert.", icon: Rocket },
            { title: "Marketing & Growth", desc: "Strategic funnels and data-driven reach.", icon: Zap },
            { title: "Branding & Creative", desc: "Visual storytelling that builds trust.", icon: ShieldCheck },
          ].map((s, i) => (
            <motion.div 
              key={s.title}
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-[3rem] group"
            >
              <s.icon size={48} className="text-brand-pink mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">{s.title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">{s.desc}</p>
              <Link to="/services" className="text-brand-purple font-bold flex items-center space-x-2">
                <span>Learn More</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5) FEATURED PROJECTS SECTION - UPGRADED BENTO LAYOUT */}
      <section id="projects-section" className="space-y-16 px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
           <div className="space-y-4">
             <div className="inline-flex items-center space-x-2 text-brand-pink text-xs font-black uppercase tracking-[0.3em]">
               <LayoutGrid size={14} />
               <span>Elite Portfolio</span>
             </div>
             <h2 className="text-5xl md:text-[clamp(3.5rem,7vw,6rem)] font-bold tracking-tighter text-white uppercase leading-none break-words">Architects of <br/><span className="text-gradient">Innovation</span></h2>
           </div>
           
           <div className="space-y-6 w-full md:w-auto">
             <div className="relative">
               <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
               <input 
                 type="text"
                 placeholder="Search by keyword..."
                 value={projectSearch}
                 onChange={(e) => setProjectSearch(e.target.value)}
                 className="w-full md:w-80 pl-12 pr-6 py-4 rounded-2xl glass border border-white/5 focus:border-brand-pink/50 transition-all text-sm outline-none"
               />
             </div>
             <div className="flex space-x-2 glass p-2 rounded-2xl overflow-x-auto no-scrollbar">
              {['All', 'Websites', 'Communities', 'Startups'].map(f => (
                <button 
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={cn(
                    "px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap",
                    activeFilter === f ? "bg-gradient-brand text-white shadow-lg" : "text-gray-500 hover:text-white"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
           </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 min-h-[800px]">
          {displayedProjects.map((p, i) => (
            <motion.div 
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ 
                delay: i * 0.1, 
                duration: 0.8,
                scale: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className={cn(
                "group relative rounded-[3.5rem] overflow-hidden border border-white/5 flex flex-col justify-end p-10 md:p-14 transition-shadow hover:shadow-2xl hover:shadow-brand-pink/10",
                i === 0 ? "md:col-span-8 min-h-[500px]" : "md:col-span-4 min-h-[400px]",
                i === 2 && "md:col-span-12 min-h-[450px]"
              )}
            >
              <img 
                src={`https://picsum.photos/seed/${p.img}/1200/800`} 
                alt={p.name}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-60 transition-all duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <div className="space-y-4">
                  <span className="inline-block px-4 py-1.5 rounded-full glass border border-white/10 text-brand-pink text-[10px] font-black uppercase tracking-[0.2em]">
                    {p.category}
                  </span>
                  <h3 className={cn(
                    "font-bold text-white uppercase tracking-tighter leading-none",
                    i === 0 ? "text-5xl md:text-7xl" : "text-4xl"
                  )}>
                    {p.name}
                  </h3>
                  <p className="text-gray-300 text-lg max-w-xl line-clamp-2 md:line-clamp-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {p.desc}
                  </p>
                </div>
                
                <div className="flex pt-4">
                   <Link 
                    to="/portfolio" 
                    className="px-10 py-4 rounded-2xl bg-white text-black font-black uppercase text-xs tracking-widest hover:bg-brand-pink hover:text-white transition-all transform active:scale-95 flex items-center space-x-3"
                   >
                     <span>View Ecosystem Project</span>
                     <ArrowRight size={16} />
                   </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center pt-8">
            <button 
              onClick={() => setVisibleCount(prev => prev + 3)}
              className="px-12 py-5 rounded-2xl glass border border-white/10 text-white font-black uppercase text-xs tracking-[0.3em] hover:bg-white/10 transition-all flex items-center space-x-3 group"
            >
              <span>Load More Projects</span>
              <Rocket size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        )}
      </section>

      {/* 6) MA COMMUNITIES SECTION */}
      <section id="communities-section" className="bg-white/5 rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
        <div className="absolute -left-20 top-0 w-96 h-96 bg-brand-purple/10 blur-[120px] rounded-full" />
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 space-y-10">
            <div className="inline-flex items-center space-x-2 text-brand-pink text-[10px] font-black uppercase tracking-[0.4em]">
              <span>Collective Growth</span>
            </div>
            <h2 className="text-5xl md:text-[clamp(3.5rem,7vw,6rem)] font-bold text-white uppercase tracking-tighter leading-tight break-words">Grow together <br/>in our <span className="text-gradient">Communities</span></h2>
            <p className="text-gray-400 text-xl leading-relaxed max-w-xl">
              Connect with thousands of creators, entrepreneurs, and global visionaries. 
              "Ma" means "My" — find your place, your network, and your future.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/communities" className="px-10 py-5 rounded-2xl bg-gradient-brand text-white font-black uppercase text-sm tracking-widest hover:scale-105 transition-transform shadow-2xl">Join Ecosystem</Link>
              <Link to="/communities" className="px-10 py-5 rounded-2xl glass text-white font-bold uppercase text-sm tracking-widest hover:bg-white/10 transition-colors">Strategic Benefits</Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-fit">
             {['Creators', 'Founders', 'Students', 'Innovators'].map(c => (
               <div key={c} className="p-10 glass rounded-[3rem] text-center border-b-4 border-brand-pink group hover:-translate-y-2 transition-all duration-500">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 mx-auto mb-6 flex items-center justify-center text-brand-pink group-hover:bg-gradient-brand group-hover:text-white transition-all">
                    <Users size={24} />
                  </div>
                  <div className="text-white font-black uppercase tracking-tighter text-xl">{c}</div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-2">Active Network</div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 7) SHOP PREVIEW */}
      <section className="space-y-12">
        <div className="flex justify-between items-end">
          <h2 className="text-4xl font-bold text-white uppercase tracking-tighter">Creative <span className="text-gradient">Store</span></h2>
          <Link to="/shop" className="text-brand-pink font-bold flex items-center space-x-2">
            <span>Shop Now</span>
            <ArrowRight size={18} />
          </Link>
        </div>
        <div className="flex overflow-x-auto pb-8 space-x-8 no-scrollbar scroll-smooth">
           {[1,2,3,4,5].map(i => (
             <div key={i} className="flex-shrink-0 w-80 glass rounded-[2.5rem] p-6 group">
                <div className="h-48 rounded-2xl bg-white/5 overflow-hidden mb-6">
                   <img src={`https://picsum.photos/seed/shop${i}/400/300`} alt={`Asset ${i}`} referrerPolicy="no-referrer" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-white font-bold uppercase mb-2">Creative Asset #{i}</h3>
                <div className="flex justify-between items-center">
                   <span className="text-brand-pink font-bold">KSh 3,500</span>
                   <button className="p-2 rounded-lg bg-white/5 hover:bg-gradient-brand text-white transition-all"><ShoppingBag size={18} /></button>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* 8) VENTURES PREVIEW */}
      <section id="ventures-section" className="space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 px-4">
           <div className="space-y-4 text-center md:text-left">
             <div className="inline-flex items-center space-x-2 text-brand-orange text-xs font-black uppercase tracking-[0.3em]">
               <MapPin size={14} />
               <span>Reality Expansion</span>
             </div>
             <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase leading-none">Lifestyle & <br/><span className="text-gradient">Ventures</span></h2>
           </div>
           <Link to="/ventures" className="text-brand-orange font-bold flex items-center space-x-2 text-sm uppercase tracking-widest group">
              <span>View All Ventures</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
           </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
           {[
             { name: "Cyber Donuts", type: "Food & Beverage", icon: Coffee, desc: "Merging branding with premium confectionery." },
             { name: "Fit-Creative", type: "Fitness & Skating", icon: Zap, desc: "Healthy bodies building healthy businesses." }
           ].map((v, i) => (
             <Link key={v.name} to="/ventures" className="glass p-12 rounded-[3.5rem] flex items-center justify-between group hover:border-brand-orange/30 transition-all duration-700">
                <div className="flex items-center space-x-8">
                   <div className="w-20 h-20 rounded-3xl bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform">
                      <v.icon size={32} />
                   </div>
                   <div>
                      <h3 className="text-3xl font-black text-white uppercase tracking-tighter">{v.name}</h3>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">{v.type}</p>
                   </div>
                </div>
                <ArrowRight size={24} className="text-gray-800 group-hover:text-brand-orange group-hover:translate-x-2 transition-all" />
             </Link>
           ))}
        </div>
      </section>

      {/* 9) INNOVATION LAB SECTION */}
      <section className="relative h-[600px] rounded-[4rem] overflow-hidden group">
         <img src="https://picsum.photos/seed/innovation-lab/1920/1080?blur=4" alt="Innovation Lab" referrerPolicy="no-referrer" loading="lazy" className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000" />
         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent p-12 md:p-24 flex items-center">
            <div className="max-w-xl space-y-8">
              <FlaskConical size={64} className="text-brand-orange animate-pulse" />
              <h2 className="text-6xl font-bold text-white uppercase tracking-tighter leading-none">Innovation <span className="text-brand-orange">Lab</span></h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Where wild ideas become digital reality. Our internal incubator for the next generation of technology, AI, and Web3 solutions.
              </p>
              <Link to="/innovation" className="inline-block px-12 py-5 rounded-2xl bg-brand-orange text-black font-black text-lg hover:scale-110 transition-transform">
                Explore Lab
              </Link>
            </div>
         </div>
      </section>

      {/* 10) MA NETWORLD GATEWAY */}
      <section id="manetworld-section" className="text-center space-y-12">
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] opacity-20"><Globe size={600} className="text-brand-purple" strokeWidth={0.5} /></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-5xl md:text-[clamp(4rem,9vw,8rem)] font-black text-white uppercase tracking-tighter leading-none break-words">Welcome to<br/><span className="text-gradient">Ma Networld</span></h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
              A growing network of communities, projects, and opportunities designed to help people learn, connect, and build together.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/manetworld" className="px-12 py-6 rounded-3xl bg-gradient-brand text-white font-bold text-xl hover:scale-105 transition-transform shadow-2xl">Join the Network</Link>
              <Link to="/communities" className="px-12 py-6 rounded-3xl glass text-white font-bold text-xl hover:bg-white/10 transition-colors">Explore Communities</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 11) TESTIMONIALS SECTION */}
      <section className="glass rounded-[4rem] p-12 md:p-20 relative">
        <div className="absolute top-10 right-10 opacity-10"><Star size={120} className="text-brand-pink" /></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="space-y-6">
               <div className="flex text-brand-pink mb-4">
                 {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
               </div>
               <p className="text-gray-300 text-lg italic leading-relaxed">"{t.text}"</p>
               <div>
                  <div className="text-white font-bold">{t.name}</div>
                  <div className="text-brand-pink text-xs uppercase font-bold tracking-widest">{t.role}</div>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* 12) REVENUE GATEWAY SECTION */}
      <section className="px-4">
        <div className="glass rounded-[4rem] p-12 md:p-24 relative overflow-hidden flex flex-col items-center text-center space-y-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/5 blur-[100px]" />
            <div className="space-y-4 max-w-2xl">
               <div className="inline-flex items-center space-x-2 text-brand-pink text-[10px] font-black uppercase tracking-[0.4em]">
                  <CreditCard size={14} />
                  <span>Global Transactions</span>
               </div>
               <h2 className="text-5xl font-black text-white uppercase tracking-tighter">Ready for <span className="text-gradient">Commerce</span></h2>
               <p className="text-gray-400 text-lg">
                  Ma Creatives Studio is revenue-ready. From local mobile money to global crypto networks, we bridge the gap.
               </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
               {[
                 { label: "M-Pesa", color: "hover:text-green-500" },
                 { label: "USDT / BTC", color: "hover:text-amber-500" },
                 { label: "TON / Pi", color: "hover:text-blue-400" },
                 { label: "Card / Bank", color: "hover:text-brand-pink" }
               ].map(m => (
                 <div key={m.label} className={cn("px-8 py-4 rounded-2xl glass border border-white/5 font-black uppercase tracking-widest transition-all cursor-default", m.color)}>
                    {m.label}
                 </div>
               ))}
            </div>
        </div>
      </section>

      {/* 13) CALL-TO-ACTION */}
      <section className="bg-brand-pink/20 rounded-[4rem] p-4">
        <div className="bg-black/95 backdrop-blur-3xl rounded-[3.8rem] p-20 md:p-32 text-center text-white space-y-12 border border-white/5">
           <div className="space-y-6">
             <div className="inline-flex items-center space-x-2 text-brand-pink text-[10px] font-black uppercase tracking-[0.5em]">
               <span>Your Time is Now</span>
             </div>
             <h2 className="text-5xl sm:text-7xl lg:text-[clamp(5rem,10vw,10rem)] font-black uppercase tracking-tighter leading-none break-words">The Future <br/>is <span className="text-gradient">Yours.</span></h2>
           </div>
           <div className="flex flex-wrap justify-center gap-6">
             <Link to="/contact" className="px-12 py-6 rounded-2xl bg-white text-black font-black text-xl hover:scale-110 transition-transform shadow-2xl">Start a Venture</Link>
             <Link to="/contact" className="px-12 py-6 rounded-2xl glass text-white font-black text-xl hover:bg-white/10 transition-colors">Strategic Contact</Link>
             <Link to="/communities" className="px-12 py-6 rounded-2xl border-white/10 border text-white font-black text-xl hover:bg-white/5 transition-colors uppercase tracking-tight">Join Network</Link>
           </div>
        </div>
      </section>
    </div>
  );
}
