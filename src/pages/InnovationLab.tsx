import React from 'react';
import { motion } from 'motion/react';
import { FlaskConical, Rocket, Zap, Globe, Sparkles, Terminal, Activity, Database, Cpu, ArrowRight, Bot, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const labTracks = [
  { 
    title: "Startup Incubation & MVPs", 
    icon: Rocket, 
    id: "01",
    desc: "Taking raw concepts from whiteboards to revenue-generating MVPs in rapid 14-day development sprints."
  },
  { 
    title: "AI Tools & Automation", 
    icon: Bot, 
    id: "02",
    desc: "Integrating cutting-edge generative AI models, agentic workflows, and automated client intelligence systems."
  },
  { 
    title: "Web3 & Decentralized Nodes", 
    icon: Globe, 
    id: "03",
    desc: "Building token-gated community access, micro-transaction layers, and borderless digital ownership architectures."
  },
  { 
    title: "High-Frequency Infrastructure", 
    icon: Cpu, 
    id: "04",
    desc: "Optimizing sub-second edge computing, robust distributed APIs, and scalable African cloud architectures."
  }
];

export default function InnovationLab() {
  const [terminalLines, setTerminalLines] = React.useState<string[]>([
    "MA_ECOSYSTEM_BOOT_V5.4",
    "INITIALIZING_AI_CREATIVE_SUITE... [OK]",
    "SYNCING_DECENTRALIZED_NODES... [12 ACTIVE]",
    "M-PESA_STK_GATEWAY_ONLINE [LATENCY: 42ms]",
    "MA_NETWORLD_HEARTBEAT_VERIFIED",
    "AWAITING_OPERATOR_INPUT_"
  ]);

  const [aiIdea, setAiIdea] = React.useState('');
  const [generatedConcept, setGeneratedConcept] = React.useState<string | null>(null);

  const handleGenerateIdea = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiIdea.trim()) return;

    const concepts = [
      `Deploy a localized mobile-first portal with WhatsApp checkout and automated M-Pesa payouts. Add community referral incentives to drive 3x viral growth.`,
      `Structure a tiered membership system with digital asset generators and an exclusive creator community inside Ma Networld.`,
      `Build a rapid prototype using Vite + Tailwind + Gemini AI assistants to automate customer discovery and generate initial KES 100K+ in pre-orders.`
    ];

    setGeneratedConcept(concepts[Math.floor(Math.random() * concepts.length)]);
  };

  return (
    <div className="pt-32 pb-24 space-y-24 px-4">
      {/* 1) HERO */}
      <div className="max-w-4xl space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-brand-orange">
          <FlaskConical size={13} />
          <span>Frontier Technology Prototyping</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase leading-none">
          The Innovation <br/><span className="text-gradient">Lab</span>
        </h1>
        <p className="text-zinc-300 text-base md:text-xl leading-relaxed max-w-2xl">
          Where bold experimentation meets commercial discipline. We test future-facing tech, build internal moonshots, and incubate next-generation ventures.
        </p>
      </div>

      {/* 2) LIVE MISSION CONTROL TERMINAL */}
      <section className="bg-zinc-950 border border-white/15 rounded-[3rem] overflow-hidden shadow-2xl">
        <div className="bg-zinc-900/90 px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/40 border border-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/40 border border-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500/40 border border-green-500" />
            <span className="text-xs font-mono text-zinc-400 ml-2">lab_terminal_v5.4.sh</span>
          </div>
          <div className="text-[10px] font-mono text-green-400 font-bold tracking-widest flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>NODE_LIVE</span>
          </div>
        </div>

        <div className="p-8 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Terminal stream */}
          <div className="lg:col-span-6 font-mono text-xs space-y-2.5 text-green-400 bg-black/60 p-6 rounded-2xl border border-white/10">
            {terminalLines.map((line, i) => (
              <div key={i} className="flex space-x-3">
                <span className="text-zinc-600 select-none">[{i + 1}]</span>
                <span className={i === terminalLines.length - 1 ? "text-green-300 font-bold animate-pulse" : ""}>
                  {line}
                </span>
              </div>
            ))}
          </div>

          {/* Interactive Lab Sandbox */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-black text-white uppercase tracking-tight flex items-center space-x-2">
                <Sparkles size={18} className="text-brand-orange" />
                <span>Creative Idea Incubator</span>
              </h3>
              <p className="text-zinc-300 text-xs leading-relaxed">
                Type an industry or business idea to generate an ecosystem execution strategy:
              </p>
            </div>

            <form onSubmit={handleGenerateIdea} className="space-y-3">
              <input 
                type="text" 
                value={aiIdea}
                onChange={e => setAiIdea(e.target.value)}
                placeholder="e.g. AI coffee delivery, Solar micro-grid app, Fashion brand..."
                className="w-full p-4 rounded-xl bg-zinc-900 border border-white/15 text-white text-xs outline-none focus:border-brand-orange"
              />
              <button 
                type="submit"
                className="w-full py-3.5 rounded-xl bg-brand-orange hover:bg-orange-600 text-black font-extrabold text-xs uppercase tracking-wider transition-all"
              >
                Synthesize Execution Architecture
              </button>
            </form>

            {generatedConcept && (
              <div className="p-5 rounded-xl bg-white/5 border border-brand-orange/30 space-y-2">
                <div className="text-[10px] font-bold text-brand-orange uppercase tracking-wider">Generated Architecture:</div>
                <p className="text-zinc-200 text-xs leading-relaxed italic">
                  "{generatedConcept}"
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3) RESEARCH & PROTOTYPING TRACKS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {labTracks.map((item) => (
          <div 
            key={item.title} 
            className="p-8 rounded-[2.5rem] bg-zinc-950 border border-white/15 hover:border-brand-pink/50 transition-all space-y-5 flex flex-col justify-between shadow-xl"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-pink">
                  <item.icon size={22} />
                </div>
                <span className="text-2xl font-black text-zinc-700 font-mono">{item.id}</span>
              </div>
              <h3 className="text-lg font-black text-white uppercase tracking-tight">{item.title}</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">{item.desc}</p>
            </div>

            <Link 
              to="/contact" 
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-pink hover:text-white uppercase tracking-wider"
            >
              <span>Partner on Track</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        ))}
      </div>

      {/* 4) LAB APPLICATION CTA */}
      <div className="bg-zinc-950 border border-white/15 rounded-[3rem] p-10 md:p-16 text-center space-y-6 shadow-2xl">
        <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
          Have an Idea for the Lab?
        </h2>
        <p className="text-zinc-300 text-base max-w-xl mx-auto leading-relaxed">
          We invite founders and engineers to collaborate with us on rapid prototyping sprints and venture incubation.
        </p>
        <div className="pt-2">
          <Link 
            to="/contact" 
            className="px-8 py-4 rounded-full bg-gradient-brand text-white font-extrabold text-xs uppercase tracking-wider hover:scale-105 transition-all inline-block shadow-xl"
          >
            Submit an Incubation Brief
          </Link>
        </div>
      </div>
    </div>
  );
}
