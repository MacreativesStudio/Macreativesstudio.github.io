import React from 'react';
import { motion } from 'motion/react';
import { FlaskConical, Rocket, Zap, Globe, Sparkles, Terminal, Activity, Database, Cpu, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils.ts';

const labProjects = [
  { 
    title: "Startup Incubation", 
    icon: Rocket, 
    color: "text-brand-purple",
    id: "01",
    desc: "We provide the branding, technology, and strategic foundation to turn raw ideas into market-ready businesses."
  },
  { 
    title: "AI & Automation", 
    icon: Zap, 
    color: "text-brand-pink",
    id: "02",
    desc: "Deploying generative AI and machine learning models to automate complex workflows and creative processes."
  },
  { 
    title: "Quantum Solutions", 
    icon: FlaskConical, 
    color: "text-brand-orange",
    id: "03",
    desc: "Exploring high-performance computing and future-proof algorithms for global data scaling."
  },
  { 
    title: "Web3 Ecosystems", 
    icon: Globe, 
    color: "text-brand-blue",
    id: "04",
    desc: "Building decentralized platforms and blockchain integrations that empower community ownership."
  }
];

export default function InnovationLab() {
  const [terminalLines, setTerminalLines] = React.useState<string[]>([
    "MA_ECOSYSTEM_BOOT_V5.0",
    "INITIALIZING_QUANTUM_CORE...",
    "SYNCING_DECENTRALIZED_NODES [OK]",
    "LOADING_AI_MODELS [78%]",
    "CONNECTED_TO_MA_NETWORLD",
    "AWAITING_INPUT_"
  ]);

  React.useEffect(() => {
    const lines = [
      "EXTRACTING_DATA_PATTERNS...",
      "OPTIMIZING_REVENUE_PIPELINES...",
      "SCALING_CREATIVE_VERTICLES...",
      "SHIELD_ACTIVE [ENCRYPTED]",
      "NEW_VENTURE_DETECTED..."
    ];
    const interval = setInterval(() => {
      setTerminalLines(prev => [...prev.slice(-10), lines[Math.floor(Math.random() * lines.length)]]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-32 pb-20 space-y-32">
      {/* 1) HERO: TECHNICAL HEADER */}
      <div className="relative">
        <div className="absolute inset-0 atmosphere opacity-20 pointer-events-none" />
        <div className="text-center space-y-8 relative z-10 px-4">
          <div className="meta-label text-brand-orange inline-block">Future Expansion Engine</div>
          <h1 className="text-5xl sm:text-7xl lg:text-[clamp(4rem,10vw,10rem)] font-light tracking-[0.1em] text-white uppercase leading-none break-words">
            Ma <span className="font-black text-gradient italic">Lab</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
            Where wild experimentation meets disciplined execution. 
            We build the mission-critical infrastructure for the next generation of African ventures.
          </p>
        </div>
      </div>

      {/* 2) MISSION CONTROL TERMINAL */}
      <section className="mx-4">
        <div className="glass rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl">
           <div className="bg-white/5 px-8 py-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex space-x-2">
                 <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                 <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                 <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              </div>
              <div className="flex items-center space-x-2 text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">
                 <Terminal size={12} />
                 <span>Ma_Ecosystem_Terminal.log</span>
              </div>
              <div className="text-[10px] font-mono text-brand-orange animate-pulse">LIVE_COMPUTE_ACTIVE</div>
           </div>
           <div className="p-10 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="font-mono text-sm space-y-2 text-green-500/80">
                 {terminalLines.map((line, i) => (
                   <div key={i} className="flex space-x-4">
                      <span className="opacity-30">[{1024 + i}]</span>
                      <span className={i === terminalLines.length - 1 ? "text-green-400 font-bold animate-pulse" : ""}>
                        {line}
                      </span>
                   </div>
                 ))}
              </div>
              <div className="space-y-12">
                 <div className="grid grid-cols-2 gap-8">
                    {[
                      { label: "Active Nodes", val: "1,240", icon: Globe },
                      { label: "Compute Power", val: "8.4 PFLOPS", icon: Cpu },
                      { label: "Data Throughput", val: "54 GB/s", icon: Activity },
                      { label: "Secured Assets", val: "KSh 420M+", icon: Database },
                    ].map(stat => (
                      <div key={stat.label} className="p-6 glass rounded-3xl border-white/5 hover:border-brand-pink/30 transition-all">
                         <stat.icon size={20} className="text-brand-pink mb-4" />
                         <div className="text-2xl font-black text-white">{stat.val}</div>
                         <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">{stat.label}</div>
                      </div>
                    ))}
                 </div>
                 <div className="relative h-40 glass rounded-3xl overflow-hidden p-8 flex items-center justify-between border-dashed border-white/10 border-2">
                    <div className="space-y-2 relative z-10">
                       <h4 className="text-white font-bold uppercase tracking-widest text-xs">Innovation Sprints</h4>
                       <p className="text-gray-500 text-[10px] uppercase font-bold">Next Sprint Starts in: 04h 12m 55s</p>
                    </div>
                    <button className="px-8 py-3 rounded-xl bg-white text-black font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-transform shadow-xl">
                       Apply to Sprint
                    </button>
                    <div className="absolute right-0 bottom-0 opacity-10 animate-pulse">
                       <Zap size={100} className="text-brand-orange" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3) RESEARCH GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {labProjects.map((item, i) => (
          <motion.div 
            key={item.title} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative h-[450px] p-10 glass rounded-[3rem] flex flex-col justify-between border-b-4 border-brand-pink/20 hover:border-brand-pink transition-all duration-700 overflow-hidden"
          >
             <div className="absolute top-8 right-10 text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors pointer-events-none">{item.id}</div>
             <div className="space-y-6 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gradient-brand group-hover:text-white transition-all duration-500 shadow-xl">
                   <item.icon size={28} className={cn("group-hover:text-white", item.color)} />
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tighter shrink-0">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
             </div>
             
             <div className="relative z-10">
                <div className="h-[2px] w-12 bg-brand-pink mb-6 group-hover:w-full transition-all duration-700" />
                <button className="text-[10px] text-white font-bold uppercase tracking-[0.3em] flex items-center space-x-2 group/btn">
                   <span>Explore Research</span>
                   <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
             </div>
          </motion.div>
        ))}
      </div>


      <section className="glass rounded-[4rem] p-12 md:p-24 overflow-hidden relative">
         <div className="flex flex-col md:flex-row items-center gap-20 relative z-10">
            <div className="flex-1 space-y-8">
              <Sparkles size={64} className="text-brand-orange" />
              <h3 className="text-5xl font-bold text-white uppercase tracking-tighter leading-tight">Experimenting with the <span className="text-gradient">impossible.</span></h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                The Innovation Lab is our playground. We build prototypes, test market fits, and launch internal "moonshots". 
                Most of our successful projects started as a single experiment right here.
              </p>
              <div className="flex space-x-6">
                 <div className="p-4 rounded-2xl glass">
                    <p className="text-2xl font-bold text-white">15+</p>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Prototypes</p>
                 </div>
                 <div className="p-4 rounded-2xl glass">
                    <p className="text-2xl font-bold text-white">4</p>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Active Spin-offs</p>
                 </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-80 glass rounded-[3rem] border border-white/10 flex items-center justify-center overflow-hidden">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="relative w-40 h-40"
               >
                 <FlaskConical size={100} className="text-brand-pink opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                 <div className="absolute inset-0 border-4 border-dashed border-brand-purple rounded-full opacity-30" />
               </motion.div>
            </div>
         </div>
      </section>
    </div>
  );
}
