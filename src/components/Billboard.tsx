import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Rocket, ShoppingCart, Users, Coffee, FlaskConical, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils.ts';

const billboardItems = [
  {
    id: 'intro',
    badge: 'Flagship Agency & Studio',
    title: "Build. Brand. Scale.",
    subtitle: "High-Performance Agency",
    description: "We design, engineer, and deploy high-converting websites, visual brand identities, and modern software systems for forward-thinking businesses.",
    icon: Rocket,
    color: "from-purple-900/40 via-indigo-900/30 to-black",
    link: "/services",
    primaryLabel: "Start a Project",
    secondaryLabel: "Explore Work"
  },
  {
    id: 'shop',
    badge: 'Digital Assets & Generators',
    title: "Launch In Minutes.",
    subtitle: "Creative Store",
    description: "Turnkey website templates, bespoke UI kits, and digital tools tailored to get African businesses online with instant conversion power.",
    icon: ShoppingCart,
    color: "from-pink-900/40 via-rose-900/30 to-black",
    link: "/shop",
    primaryLabel: "Browse Store",
    secondaryLabel: "Sell Assets"
  },
  {
    id: 'ventures',
    badge: 'Physical & Lifestyle Expansion',
    title: "Cyber Donuts & Co.",
    subtitle: "Real-World Ventures",
    description: "Fusing digital technology with real-world businesses. From futuristic food concepts to wellness & apparel architecture.",
    icon: Coffee,
    color: "from-orange-900/40 via-amber-900/30 to-black",
    link: "/ventures",
    primaryLabel: "View Ventures",
    secondaryLabel: "Incubate Idea"
  },
  {
    id: 'communities',
    badge: 'Decentralized Connection',
    title: "The Global Network.",
    subtitle: "Ma Networld",
    description: "Where creators, developers, founders, and students converge to build, learn, and capture economic opportunities together.",
    icon: Users,
    color: "from-blue-900/40 via-cyan-900/30 to-black",
    link: "/communities",
    primaryLabel: "Join Network",
    secondaryLabel: "Community Perks"
  },
  {
    id: 'innovation',
    badge: 'Frontier Prototyping',
    title: "The Innovation Lab.",
    subtitle: "Future Technology",
    description: "Prototyping tomorrow’s solutions with generative AI, Web3 protocols, and rapid venture experimentation.",
    icon: FlaskConical,
    color: "from-emerald-900/40 via-teal-900/30 to-black",
    link: "/innovation",
    primaryLabel: "Explore Lab",
    secondaryLabel: "Apply to Sprint"
  }
];

export function Billboard() {
  const [index, setIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % billboardItems.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const current = billboardItems[index];

  return (
    <div 
      className="relative w-full min-h-[580px] md:h-[620px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/15 bg-zinc-950 mt-28 md:mt-32 shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Ambience */}
      <div className={cn(
        "absolute inset-0 transition-all duration-1000 opacity-60 bg-gradient-to-br",
        current.color
      )} />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      <div className="absolute inset-0 atmosphere opacity-30 mix-blend-screen pointer-events-none" />

      {/* Floating Ambient Orb */}
      <motion.div 
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-brand-pink/15 blur-[120px] pointer-events-none"
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative h-full w-full flex flex-col lg:flex-row items-center justify-between p-8 md:p-16 lg:p-20 z-10"
        >
          {/* Left Text Content */}
          <div className="max-w-3xl space-y-6 pt-4 lg:pt-0">
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
              <Sparkles size={12} className="text-brand-pink" />
              <span>{current.badge}</span>
            </div>

            {/* Main Headline with high contrast */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white uppercase tracking-tight leading-[0.95]">
              {current.title.split(' ').map((word, i, arr) => (
                <span 
                  key={i} 
                  className={cn(
                    "inline-block mr-[0.25em]",
                    i === arr.length - 1 ? "text-gradient" : "text-white"
                  )}
                >
                  {word}
                </span>
              ))}
            </h1>

            {/* Description Paragraph */}
            <p className="text-zinc-300 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed font-normal">
              {current.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link 
                to={current.link}
                className="px-8 py-4 rounded-full bg-gradient-brand text-white font-extrabold uppercase text-xs tracking-wider hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(219,39,119,0.4)] border border-white/20 flex items-center space-x-2"
              >
                <span>{current.primaryLabel}</span>
                <ArrowRight size={14} />
              </Link>
              <Link 
                to="/contact"
                className="px-8 py-4 rounded-full bg-zinc-900/90 border border-white/20 text-zinc-200 hover:text-white hover:bg-zinc-800 font-extrabold uppercase text-xs tracking-wider transition-all"
              >
                {current.secondaryLabel}
              </Link>
            </div>
          </div>

          {/* Right Floating Visual Anchor */}
          <div className="hidden lg:flex w-72 h-72 xl:w-80 xl:h-80 items-center justify-center relative">
            <div className="absolute inset-0 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl animate-pulse" />
            <div className="w-56 h-56 rounded-full bg-gradient-to-tr from-brand-purple/20 to-brand-pink/20 border border-white/20 flex items-center justify-center shadow-2xl">
              <current.icon size={110} className="text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.4)]" strokeWidth={1.2} />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Interactive Bottom Control Strip */}
      <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-8 md:right-8 flex items-center justify-between z-20 pt-4 border-t border-white/10">
        {/* Clickable Section Tabs */}
        <div className="flex items-center space-x-1.5 md:space-x-3 overflow-x-auto no-scrollbar py-1">
          {billboardItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setIndex(i)}
              className={cn(
                "px-3 md:px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all whitespace-nowrap flex items-center space-x-1.5",
                index === i 
                  ? "bg-white text-black shadow-lg scale-105" 
                  : "bg-black/50 text-zinc-400 hover:text-white border border-white/10 hover:border-white/20"
              )}
            >
              <item.icon size={12} className={index === i ? "text-brand-pink" : "text-zinc-500"} />
              <span className="hidden sm:inline">{item.subtitle}</span>
              <span className="sm:hidden">{i + 1}</span>
            </button>
          ))}
        </div>

        {/* Status indicator */}
        <div className="hidden md:flex items-center space-x-2 text-[10px] font-mono text-zinc-400 uppercase tracking-widest pl-4">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span>Ecosystem Active</span>
        </div>
      </div>
    </div>
  );
}
