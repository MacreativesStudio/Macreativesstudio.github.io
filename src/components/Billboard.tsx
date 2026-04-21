import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Rocket, Layers, Megaphone, Palette, Users, ShoppingCart, Info, Zap, Globe, Coffee, FlaskConical } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils.ts';

const billboardItems = [
  {
    id: 'intro',
    title: "Build. Brand. Grow.",
    subtitle: "Agency & Studio",
    description: "Multi-skill integration. We design, build, and scale your digital and real-world solutions.",
    icon: Rocket,
    color: "from-purple-500 to-indigo-600",
    link: "/services",
    primaryLabel: "Start a Project",
    secondaryLabel: "View Portfolio"
  },
  {
    id: 'shop',
    title: "Website Generators & Tools",
    subtitle: "Digital Store",
    description: "Launch your presence in minutes. Sell templates, courses, and premium digital assets.",
    icon: ShoppingCart,
    color: "from-pink-500 to-rose-600",
    link: "/shop",
    primaryLabel: "Browse Store",
    secondaryLabel: "Create Account"
  },
  {
    id: 'ventures',
    title: "Cyber Donuts & Ventures",
    subtitle: "Lifestyle Expansion",
    description: "Fresh ideas. Fresh business. Exploring real-world ventures from food to fitness.",
    icon: Coffee,
    color: "from-orange-500 to-amber-600",
    link: "/ventures",
    primaryLabel: "Explore Ventures",
    secondaryLabel: "Incubate Your Idea"
  },
  {
    id: 'communities',
    title: "Join the Global Ecosystem",
    subtitle: "Ma Community",
    description: "Learn. Build. Earn. Thousands of creators and innovators connecting for growth.",
    icon: Users,
    color: "from-blue-500 to-cyan-600",
    link: "/communities",
    primaryLabel: "Join Network",
    secondaryLabel: "Benefits"
  },
  {
    id: 'innovation',
    title: "The Innovation Lab",
    subtitle: "Future Tech",
    description: "Exploring the frontier of AI, Web3, and Quantum computing. Prototyping tomorrow.",
    icon: FlaskConical,
    color: "from-green-500 to-emerald-600",
    link: "/innovation",
    primaryLabel: "Explore Lab",
    secondaryLabel: "Experimentation"
  }
];

export function Billboard() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % billboardItems.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string, i: number) => {
    setIndex(i);
    const element = document.getElementById(`${id}-section`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (id === 'intro') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const current = billboardItems[index];

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-[2.5rem] mt-24">
      {/* Background Atmosphere - Layered Gradients */}
      <div className={cn(
        "absolute inset-0 transition-all duration-1000 opacity-30",
        "bg-gradient-to-br",
        current.color
      )} />
      <div className="absolute inset-0 bg-[#050505]/80" />
      <div className="absolute inset-0 atmosphere opacity-40 mix-blend-screen" />

      {/* Parallax Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 40, 0],
            y: [0, -30, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-pink/5 blur-[140px]"
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-24"
        >
          <div className="max-w-3xl relative z-10 pt-12 md:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="meta-label text-brand-pink mb-4"
            >
              {current.subtitle}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl lg:text-[clamp(3rem,8vw,9rem)] font-light tracking-tight leading-[0.85] mb-10 uppercase font-sans"
            >
              {current.title.split(' ').map((word, i) => (
                <span key={i} className={cn(
                  "inline-block mr-[0.2em] transform transition-transform hover:skew-x-[-12deg] cursor-default whitespace-nowrap",
                  i === current.title.split(' ').length - 1 ? 'text-gradient font-bold' : 'text-white'
                )}>
                  {word}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg md:text-2xl max-w-xl mb-12 leading-relaxed font-light"
            >
              {current.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <Link 
                to={current.link}
                className="group relative px-10 py-5 rounded-full bg-white text-black font-black uppercase text-xs tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
              >
                <span className="relative z-10">{current.primaryLabel}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-pink to-brand-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
              <Link 
                to="/contact"
                className="px-10 py-5 rounded-full border border-white/20 text-white font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all"
              >
                {current.secondaryLabel}
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 15 }}
            animate={{ opacity: 1, x: 0, rotate: -5 }}
            transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden xl:flex w-[30vw] h-[40vh] items-center justify-center relative group"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[4rem] border border-white/10 backdrop-blur-sm group-hover:scale-110 transition-transform duration-1000" />
             <current.icon size={200} className="text-white opacity-40 group-hover:opacity-100 transition-opacity duration-700" strokeWidth={0.5} />
             
             {/* Micro-tech details */}
             <div className="absolute top-8 left-8 text-[10px] text-white/20 font-mono rotate-90">ID_{current.id.toUpperCase()}</div>
             <div className="absolute bottom-8 right-8 text-[10px] text-white/20 font-mono tracking-widest whitespace-nowrap overflow-hidden w-0 group-hover:w-full transition-all duration-1000 uppercase">System Active // Ecosystem Verified</div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {billboardItems.map((item, i) => (
          <button
            key={i}
            onClick={() => scrollToSection(item.id, i)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === i ? "bg-white w-8" : "bg-white/20"
            )}
          />
        ))}
      </div>
    </div>
  );
}
