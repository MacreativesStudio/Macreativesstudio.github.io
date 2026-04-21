import React from 'react';
import { motion } from 'motion/react';
import { Globe, Users, Zap, Briefcase, Share2, Rocket, Map, Layers, Network } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MaNetworld() {
  return (
    <div className="pt-32 pb-20 space-y-32">
      {/* 1) HERO: ATMOSPHERIC PORTAL */}
      <section className="relative text-center max-w-5xl mx-auto py-20 px-8">
        <div className="absolute inset-0 atmosphere opacity-30 pointer-events-none" />
        <div className="relative z-10 space-y-12">
          <div className="meta-label text-brand-pink">The Ultimate Connection Layer</div>
          <h1 className="text-5xl sm:text-8xl lg:text-[clamp(4rem,10vw,10rem)] font-light tracking-tighter text-white leading-[0.8] uppercase break-words">
            MA <br/><span className="text-gradient font-black italic">NETWORLD</span>
          </h1>
          <p className="text-gray-400 text-xl md:text-3xl leading-relaxed max-w-3xl mx-auto font-light">
            A hyper-connected network of niche communities, specialized ventures, and global opportunities. 
            <span className="text-white"> ORIGINATING FROM AFRICA. SCALING THE WORLD.</span>
          </p>
          <div className="pt-8">
            <button className="px-16 py-8 rounded-full bg-white text-black font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-[0_30px_60px_-15px_rgba(255,255,255,0.2)]">
              Join the Network
            </button>
          </div>
        </div>
      </section>

      {/* 2) SYSTEM MAP VISUALIZATION */}
      <section className="relative glass rounded-[4rem] p-12 md:p-24 overflow-hidden group">
         <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-transparent pointer-events-none" />
         <div className="absolute top-0 right-0 p-12 text-white/5 font-mono text-[10vw] font-black leading-none uppercase select-none pointer-events-none">MAP_03</div>
         
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10 relative z-10">
               <div className="inline-flex glass p-2 rounded-2xl">
                  <Map className="text-brand-pink" size={24} />
               </div>
               <h2 className="text-4xl sm:text-7xl font-bold text-white uppercase tracking-tighter leading-tight break-words">The Ecosystem <br/><span className="text-gradient">Topology</span></h2>
               <p className="text-gray-400 text-xl leading-relaxed font-light">
                 Our network isn't just a list—it's a living topology. Every community, venture, and creator is a node capable of massive resonance. 
                 By connecting to Ma Networld, you gain access to the collective intelligence of thousands.
               </p>
               <div className="grid grid-cols-2 gap-8">
                  {[
                    { label: "Active Nodes", val: "4.2k", icon: Network },
                    { label: "Cross-Pollination", val: "88%", icon: Layers },
                  ].map(stat => (
                    <div key={stat.label} className="space-y-2">
                       <div className="flex items-center space-x-2 text-brand-pink">
                          <stat.icon size={16} />
                          <span className="text-[10px] font-black uppercase tracking-widest">{stat.label}</span>
                       </div>
                       <div className="text-4xl font-black text-white">{stat.val}</div>
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="relative aspect-square">
               <div className="absolute inset-0 bg-brand-pink/5 animate-pulse blur-3xl opacity-30 rounded-full" />
               <div className="absolute inset-10 border-2 border-dashed border-white/5 rounded-full animate-spin-slow" />
               <div className="absolute inset-24 border border-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Globe size={200} className="text-white opacity-20" strokeWidth={0.5} />
                  {/* Orbiting nodes */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                     <div className="w-4 h-4 bg-brand-pink rounded-full absolute -top-2 left-1/2 -translate-x-1/2 shadow-glow animate-pulse" />
                     <div className="w-3 h-3 bg-brand-purple rounded-full absolute top-1/2 -right-1.5 -translate-y-1/2" />
                  </motion.div>
               </div>
            </div>
         </div>
      </section>

      {/* 3) CORE PILLARS OVERVIEW */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
        <motion.div 
          whileHover={{ y: -10 }}
          className="glass p-14 rounded-[3.5rem] relative overflow-hidden group border-white/5"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-purple/5 blur-[100px] rounded-full" />
          <div className="flex items-center justify-between mb-8">
             <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-purple">
                <Globe size={32} />
             </div>
             <div className="text-[10px] font-black text-white/20 uppercase tracking-widest">Pillar_01</div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6 uppercase tracking-tighter">Hyper-Scale Mission</h2>
          <p className="text-gray-400 text-xl leading-relaxed font-light">
            To create a hyper-connected network that empowers individuals to grow, 
            earn, and thrive in the modern economy through 
            collaboration and shared resources.
          </p>
        </motion.div>
        
        <motion.div 
          whileHover={{ y: -10 }}
          className="glass p-14 rounded-[3.5rem] relative overflow-hidden group border-white/5"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-pink/5 blur-[100px] rounded-full" />
          <div className="flex items-center justify-between mb-8">
             <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-pink">
                <Rocket size={32} />
             </div>
             <div className="text-[10px] font-black text-white/20 uppercase tracking-widest">Pillar_02</div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6 uppercase tracking-tighter">Global Vision</h2>
          <p className="text-gray-400 text-xl leading-relaxed font-light">
             A globally recognized innovation network originating from Africa, 
             creating powerful platforms and economic opportunities that 
             bridge industries from tech to entertainment.
          </p>
        </motion.div>
      </div>

      {/* Benefits */}
      <section className="space-y-16">
        <h2 className="text-5xl font-bold text-white text-center tracking-tighter">Why join <span className="text-gradient">Ma Networld?</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Opportunity Hub", desc: "Access exclusive projects, gigs, and partnerships.", icon: Briefcase },
            { title: "Shared Growth", desc: "Learn from mentors and industry leaders in the network.", icon: Zap },
            { title: "Dynamic Networking", desc: "Connect with like-minded creators and developers.", icon: Share2 },
          ].map((b, i) => (
            <div key={b.title} className="text-center space-y-6 flex flex-col items-center p-8">
              <div className="w-20 h-20 rounded-3xl glass flex items-center justify-center text-brand-pink">
                <b.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white underline decoration-brand-purple decoration-4 underline-offset-8">{b.title}</h3>
              <p className="text-gray-400 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ready */}
      <section className="relative h-[500px] rounded-[4rem] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-brand opacity-80" />
        <img 
          src="https://picsum.photos/seed/network/1920/1080?blur=5" 
          alt="Network"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center space-y-8 p-8">
          <h2 className="text-5xl sm:text-8xl font-black text-white uppercase tracking-tighter leading-none break-words">Ready to Explore<br/>Opportunities?</h2>
          <div className="flex flex-wrap justify-center gap-6">
             <button className="px-10 py-5 rounded-2xl bg-white text-black font-bold text-xl hover:scale-110 transition-transform">Get Started</button>
             <Link to="/communities" className="px-10 py-5 rounded-2xl bg-black/30 backdrop-blur-md border border-white/20 text-white font-bold text-xl hover:bg-black/50 transition-colors">Meet Developers</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
