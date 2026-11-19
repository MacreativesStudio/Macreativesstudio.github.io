import React from 'react';
import { motion } from 'motion/react';
import { Billboard } from '@/src/components/Billboard.tsx';
import { 
  Rocket, Globe, Zap, Users, ShieldCheck, Heart, 
  ArrowRight, Search, Briefcase, ShoppingBag, 
  Star, MessageCircle, FlaskConical, LayoutGrid,
  MapPin, CreditCard, Coffee, Check, Calculator, Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils.ts';

const stats = [
  { label: 'Verified Revenue', value: 'KES 58K+', icon: Zap, highlight: true },
  { label: 'Ecosystem Projects', value: '150+', icon: Rocket },
  { label: 'Active Communities', value: '12+', icon: Users },
  { label: 'Partner Businesses', value: '85+', icon: Briefcase },
];

const homeProjects = [
  { 
    name: "Cyber Donuts", 
    category: "The Future of Retail", 
    img: "donuts",
    desc: "Redefining the physical-to-digital food experience through tech-integrated confectionery retail.",
    type: "Ventures",
    keywords: ["retail", "food", "digital", "branding"],
    url: "https://cyber-donuts.github.io"
  },
  { 
    name: "Read Your Bible", 
    category: "Global Faith Network", 
    img: "bible",
    desc: "A decentralized community platform scaling spiritual connection and scripture reading across 40+ countries.",
    type: "Communities",
    keywords: ["faith", "community", "decentralized", "network"],
    url: "https://amaruofficial.github.io"
  },
  { 
    name: "Amaru", 
    category: "Identity & Brand Architecture", 
    img: "amaru",
    desc: "Premium creative direction, typography, and brand identity designed for high-growth ventures.",
    type: "Startups",
    keywords: ["brand", "creative", "strategy", "identity"],
    url: "https://amaruofficial.github.io"
  },
  { 
    name: "Celtec Tech", 
    category: "Enterprise Systems", 
    img: "tech",
    desc: "High-frequency digital infrastructure, hardware architecture, and enterprise software.",
    type: "Websites",
    keywords: ["enterprise", "software", "infrastructure", "dev"],
    url: "https://celtec-tech.github.io"
  },
  { 
    name: "Ma Networld Hub", 
    category: "Ecosystem Builder", 
    img: "network",
    desc: "A central gateway for African creators, developers, and founders to connect, build, and earn.",
    type: "Communities",
    keywords: ["ecosystem", "network", "earning", "creators"],
    url: "/manetworld"
  },
  { 
    name: "Elwatt Designs", 
    category: "Architecture & Tech", 
    img: "design",
    desc: "Blending physical electrical & interior architecture with digital-first client portals.",
    type: "Websites",
    keywords: ["architecture", "design", "tech", "innovation"],
    url: "https://elwattelectrical-interiordesign.github.io"
  },
];

const testimonials = [
  { 
    name: "Alex J.", 
    role: "CEO, TechHive Africa", 
    text: "Ma Creatives Studio transformed our entire digital identity. Their speed, bold design language, and technical execution are unmatched in the region." 
  },
  { 
    name: "Sarah M.", 
    role: "Digital Creator", 
    text: "Joining the Ma Networld ecosystem unlocked real commercial collaborations. It is more than an agency; it is a movement." 
  },
  { 
    name: "David K.", 
    role: "Startup Founder", 
    text: "The Innovation Lab helped us prototype our SaaS concept in two weeks. Stephen and the team have true global vision." 
  }
];

export default function Home() {
  const [activeFilter, setActiveFilter] = React.useState('All');
  const [projectSearch, setProjectSearch] = React.useState('');
  const [visibleCount, setVisibleCount] = React.useState(3);

  // Interactive Website Estimator State
  const [selectedPlan, setSelectedPlan] = React.useState<'starter' | 'growth' | 'custom'>('growth');
  const [includeMpesa, setIncludeMpesa] = React.useState(true);
  const [includeSEO, setIncludeSEO] = React.useState(true);
  const [includeWhatsApp, setIncludeWhatsApp] = React.useState(true);
  const [includeHosting, setIncludeHosting] = React.useState(false);

  // Calculation
  const basePrices = {
    starter: 18500,
    growth: 45000,
    custom: 95000
  };

  const estimatedTotal = React.useMemo(() => {
    let total = basePrices[selectedPlan];
    if (includeMpesa) total += 8000;
    if (includeSEO) total += 6000;
    if (includeWhatsApp) total += 3500;
    if (includeHosting) total += 5000;
    return total;
  }, [selectedPlan, includeMpesa, includeSEO, includeWhatsApp, includeHosting]);

  const whatsappMessage = encodeURIComponent(
    `Hi Stephen! I used the Ma Creatives website estimator:\n- Tier: ${selectedPlan.toUpperCase()}\n- Features: ${includeMpesa ? 'M-Pesa Integration, ' : ''}${includeSEO ? 'SEO & Copywriting, ' : ''}${includeWhatsApp ? 'WhatsApp Automation, ' : ''}${includeHosting ? 'Hosting Setup' : ''}\n- Estimated Quote: KSh ${estimatedTotal.toLocaleString()}\n\nLet's discuss my project!`
  );

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
    <div className="space-y-24 md:space-y-32 pb-24 overflow-hidden">
      {/* 1) HERO BILLBOARD SECTION */}
      <Billboard />

      {/* 2) VERIFIED MILESTONE & TRUST STRIP */}
      <section className="px-2">
        <div className="bg-zinc-950/80 backdrop-blur-xl rounded-[2.5rem] md:rounded-full py-8 px-6 md:px-14 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 border border-white/10 shadow-2xl">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-2.5 md:space-y-0 md:space-x-4 group cursor-default">
              <div className={cn(
                "w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg",
                stat.highlight 
                  ? "bg-gradient-brand text-white border border-white/20 shadow-[0_0_20px_rgba(219,39,119,0.4)]"
                  : "bg-white/5 border border-white/10 text-brand-pink group-hover:bg-white/10 group-hover:scale-105"
              )}>
                 <stat.icon size={22} />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-2xl md:text-3xl font-black text-white tracking-tight">{stat.value}</div>
                <div className="text-[11px] text-zinc-400 font-bold uppercase tracking-wider">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3) FEATURED CORE SERVICES */}
      <section id="services-section" className="space-y-12 px-2">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-brand-pink">
            <span>Engineering & Creative</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
            Flagship <span className="text-gradient">Services</span>
          </h2>
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
            High-converting digital architecture built to turn visitors into long-term paying clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { 
              title: "Web & Mobile Dev", 
              desc: "Fast, responsive web apps and business sites engineered for speed, high SEO ranking, and effortless conversion.", 
              icon: Rocket,
              features: ["Next.js & Vite SPAs", "M-Pesa STK Push", "Mobile-First UX", "Sub-Second Loading"]
            },
            { 
              title: "Brand Architecture", 
              desc: "Unforgettable visual storytelling, bold logos, typography systems, and packaging that demand prestige and trust.", 
              icon: ShieldCheck,
              features: ["Visual Identity", "Design Systems", "Marketing Collateral", "Premium Positioning"]
            },
            { 
              title: "Growth Engines", 
              desc: "Automated sales funnels, WhatsApp client onboarding bots, and lead capture systems that compound revenue.", 
              icon: Zap,
              features: ["WhatsApp Automation", "Conversion Copy", "Funnels & Analytics", "Client Retention"]
            },
          ].map((s) => (
            <motion.div 
              key={s.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-zinc-950/85 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white/10 hover:border-brand-pink/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-pink group-hover:bg-gradient-brand group-hover:text-white transition-all shadow-md">
                  <s.icon size={30} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3">{s.title}</h3>
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed">{s.desc}</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  {s.features.map(f => (
                    <div key={f} className="flex items-center space-x-2 text-xs font-semibold text-zinc-400">
                      <Check size={14} className="text-green-400 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <Link 
                  to="/services" 
                  className="inline-flex items-center space-x-2 text-brand-pink hover:text-white font-extrabold uppercase text-xs tracking-wider transition-colors"
                >
                  <span>Explore Service Division</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4) INTERACTIVE WEBSITE COST ESTIMATOR (HIGH CONVERSION) */}
      <section className="px-2">
        <div className="bg-zinc-950 border border-white/15 rounded-[3rem] p-8 md:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-pink/15 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-purple/15 blur-[120px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left explanation */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-brand-pink">
                <Calculator size={13} />
                <span>Instant Estimator</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                Calculate Your <br/><span className="text-gradient">Project Investment</span>
              </h2>
              <p className="text-zinc-300 text-base leading-relaxed">
                Transparency builds trust. Select your desired scope below to calculate an immediate baseline estimate and lock in a consultation with Stephen.
              </p>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-xs font-extrabold uppercase tracking-wider text-white flex items-center space-x-2">
                  <Sparkles size={14} className="text-amber-400" />
                  <span>The Ma Creatives Guarantee</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Every website we build is 100% responsive, optimized for Kenyan & international mobile speeds, and accompanied by 30 days of complimentary technical support.
                </p>
              </div>
            </div>

            {/* Right Calculator Card */}
            <div className="lg:col-span-7 bg-zinc-900/90 border border-white/15 p-6 md:p-8 rounded-3xl space-y-6">
              {/* Step 1: Base Tier Selection */}
              <div className="space-y-2.5">
                <label className="text-xs font-black uppercase tracking-wider text-zinc-400">1. Select Package Level</label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: 'starter', label: 'Starter', price: 'KES 18.5K' },
                    { id: 'growth', label: 'Growth Suite', price: 'KES 45K' },
                    { id: 'custom', label: 'Custom App', price: 'KES 95K' },
                  ].map(t => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedPlan(t.id as any)}
                      className={cn(
                        "p-3.5 rounded-2xl text-left border transition-all",
                        selectedPlan === t.id 
                          ? "bg-white text-black border-white shadow-xl scale-[1.02]" 
                          : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                      )}
                    >
                      <div className="text-xs font-black uppercase tracking-tight">{t.label}</div>
                      <div className={cn("text-xs font-bold mt-1", selectedPlan === t.id ? "text-zinc-800" : "text-brand-pink")}>
                        {t.price}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Add-on checkboxes */}
              <div className="space-y-2.5">
                <label className="text-xs font-black uppercase tracking-wider text-zinc-400">2. Include Power Features</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { label: "M-Pesa STK Integration", cost: "+ KES 8,000", state: includeMpesa, set: setIncludeMpesa },
                    { label: "Full SEO & Copywriting", cost: "+ KES 6,000", state: includeSEO, set: setIncludeSEO },
                    { label: "WhatsApp Automation Bot", cost: "+ KES 3,500", state: includeWhatsApp, set: setIncludeWhatsApp },
                    { label: "1-Yr Domain & Cloud Hosting", cost: "+ KES 5,000", state: includeHosting, set: setIncludeHosting },
                  ].map(addon => (
                    <button
                      key={addon.label}
                      type="button"
                      onClick={() => addon.set(!addon.state)}
                      className={cn(
                        "p-3 rounded-xl border flex items-center justify-between text-left transition-all",
                        addon.state 
                          ? "bg-brand-pink/15 border-brand-pink/50 text-white" 
                          : "bg-white/5 border-white/10 text-zinc-400 hover:text-white"
                      )}
                    >
                      <div>
                        <div className="text-xs font-bold">{addon.label}</div>
                        <div className="text-[10px] text-brand-pink font-semibold">{addon.cost}</div>
                      </div>
                      <div className={cn(
                        "w-5 h-5 rounded-md flex items-center justify-center border",
                        addon.state ? "bg-brand-pink border-brand-pink text-white" : "border-white/20"
                      )}>
                        {addon.state && <Check size={12} strokeWidth={3} />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Total Summary Strip */}
              <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Estimated Project Total</div>
                  <div className="text-3xl md:text-4xl font-black text-white tracking-tight">
                    KES {estimatedTotal.toLocaleString()}
                  </div>
                </div>

                <a
                  href={`https://wa.me/254798691594?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-black uppercase text-xs tracking-wider flex items-center justify-center space-x-2 transition-all shadow-[0_0_25px_rgba(37,211,102,0.4)]"
                >
                  <MessageCircle size={16} />
                  <span>Lock In Quote on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5) FEATURED WORK / BENTO PORTFOLIO */}
      <section id="projects-section" className="space-y-12 px-2">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-brand-pink">
              <LayoutGrid size={13} />
              <span>Proven Ecosystem</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
              Architects of <span className="text-gradient">Innovation</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input 
                type="text"
                placeholder="Search projects..."
                value={projectSearch}
                onChange={(e) => setProjectSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-zinc-950 border border-white/15 focus:border-brand-pink text-xs text-white outline-none"
              />
            </div>
            <div className="flex space-x-1.5 bg-zinc-950 border border-white/15 p-1 rounded-2xl overflow-x-auto no-scrollbar">
              {['All', 'Websites', 'Communities', 'Startups'].map(f => (
                <button 
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap",
                    activeFilter === f ? "bg-gradient-brand text-white shadow-md" : "text-zinc-400 hover:text-white"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {displayedProjects.map((p, i) => (
            <motion.div 
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                "group relative rounded-[2.5rem] overflow-hidden border border-white/15 bg-zinc-950 p-8 md:p-12 flex flex-col justify-end min-h-[420px] transition-all duration-500 hover:border-brand-pink/50 shadow-2xl",
                i === 0 ? "md:col-span-8" : "md:col-span-4",
                i === 2 && "md:col-span-12"
              )}
            >
              <img 
                src={`https://picsum.photos/seed/${p.img}/1200/800`} 
                alt={p.name}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 group-hover:opacity-45 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
              
              <div className="relative z-10 space-y-4">
                <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-brand-pink text-[11px] font-extrabold uppercase tracking-wider backdrop-blur-md">
                  {p.category}
                </span>
                <h3 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
                  {p.name}
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base max-w-xl leading-relaxed">
                  {p.desc}
                </p>

                <div className="pt-2 flex items-center space-x-4">
                  {p.url.startsWith('http') ? (
                    <a 
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-white text-black font-extrabold uppercase text-xs tracking-wider hover:bg-brand-pink hover:text-white transition-all inline-flex items-center space-x-2"
                    >
                      <span>Visit Live Project</span>
                      <ArrowRight size={13} />
                    </a>
                  ) : (
                    <Link 
                      to={p.url}
                      className="px-6 py-3 rounded-full bg-white text-black font-extrabold uppercase text-xs tracking-wider hover:bg-brand-pink hover:text-white transition-all inline-flex items-center space-x-2"
                    >
                      <span>Explore In Ecosystem</span>
                      <ArrowRight size={13} />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center pt-4">
            <button 
              onClick={() => setVisibleCount(prev => prev + 3)}
              className="px-8 py-3.5 rounded-full bg-zinc-900 border border-white/20 text-white font-bold uppercase text-xs tracking-wider hover:bg-zinc-800 transition-all flex items-center space-x-2"
            >
              <span>Load More Projects</span>
              <Rocket size={14} className="text-brand-pink" />
            </button>
          </div>
        )}
      </section>

      {/* 6) LIFESTYLE & REAL-WORLD VENTURES PREVIEW */}
      <section id="ventures-section" className="space-y-12 px-2">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-brand-orange">
              <MapPin size={13} />
              <span>Physical-to-Digital Ventures</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
              Lifestyle & <span className="text-gradient">Holdings</span>
            </h2>
          </div>
          <Link to="/ventures" className="text-brand-orange font-bold text-xs uppercase tracking-wider flex items-center space-x-2 hover:underline">
            <span>View All Active Ventures</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { 
              name: "Cyber Donuts", 
              type: "Food & Confectionery Tech", 
              icon: Coffee, 
              desc: "A futuristic confectionery brand merging tech-forward pastry design with instant digital ordering." 
            },
            { 
              name: "Fit-Creative", 
              type: "Wellness & Skating", 
              icon: Zap, 
              desc: "A lifestyle movement integrating physical conditioning and skating culture for ambitious digital creators." 
            }
          ].map((v) => (
            <Link 
              key={v.name} 
              to="/ventures" 
              className="bg-zinc-950/80 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white/15 hover:border-brand-orange/50 transition-all flex items-center justify-between group shadow-xl"
            >
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 rounded-2xl bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center text-brand-orange group-hover:scale-105 transition-transform">
                  <v.icon size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">{v.name}</h3>
                  <p className="text-xs text-brand-orange font-bold uppercase tracking-wider mt-0.5">{v.type}</p>
                  <p className="text-zinc-400 text-xs mt-2 max-w-sm line-clamp-2">{v.desc}</p>
                </div>
              </div>
              <ArrowRight size={20} className="text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 ml-4" />
            </Link>
          ))}
        </div>
      </section>

      {/* 7) TESTIMONIALS */}
      <section className="bg-zinc-950 border border-white/15 rounded-[3rem] p-8 md:p-14 relative px-2 shadow-2xl">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-1.5 text-brand-pink text-xs font-bold uppercase tracking-widest">
            <Star size={13} fill="currentColor" />
            <span>Reputation & Trust</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
            Client Voices & <span className="text-gradient">Impact</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-7 rounded-2xl flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <div className="flex text-amber-400 space-x-1">
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                </div>
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <div className="text-white font-bold text-sm">{t.name}</div>
                <div className="text-brand-pink text-xs uppercase font-extrabold tracking-wider">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8) FINAL ACTION HERO */}
      <section className="px-2">
        <div className="bg-gradient-to-r from-purple-950/60 via-zinc-950 to-pink-950/60 border border-white/20 rounded-[3rem] p-10 md:p-20 text-center text-white space-y-8 relative overflow-hidden shadow-2xl">
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-brand-pink">
              <span>Ready for Growth</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-none">
              Build Something <br/><span className="text-gradient">Legendary.</span>
            </h2>
            <p className="text-zinc-300 text-base md:text-xl leading-relaxed max-w-xl mx-auto">
              Your vision deserves world-class execution. Let's design, engineer, and scale your website together today.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link 
              to="/contact" 
              className="px-9 py-4 rounded-full bg-gradient-brand text-white font-black text-sm uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-xl"
            >
              Start Project Brief
            </Link>
            <a 
              href="https://wa.me/254798691594?text=Hi%20Stephen,%20I'm%20ready%20to%20build%20a%20project%20with%20Ma%20Creatives"
              target="_blank"
              rel="noopener noreferrer"
              className="px-9 py-4 rounded-full bg-zinc-900 border border-white/20 text-white font-bold text-sm uppercase tracking-wider hover:bg-zinc-800 transition-all flex items-center space-x-2"
            >
              <MessageCircle size={16} className="text-green-400" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
