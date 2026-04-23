import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Rocket, Users, Globe, ShieldCheck, Zap, ShoppingCart } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-20 space-y-32">
      {/* Header */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
          <div className="inline-flex items-center space-x-2 text-brand-pink text-[10px] font-black uppercase tracking-[0.4em]">
            <span>The Identity</span>
          </div>
          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter text-white uppercase leading-none">The <span className="text-gradient">Architect</span> <br/> of Ecosystems</h1>
          <p className="text-gray-300 text-xl leading-relaxed max-w-xl">
            Ma Creatives Studio was founded on a singular, disruptive conviction: 
            that creativity and technology, when fused with 
            structured systemic architecture, can build the future of the global economy.
          </p>
          <div className="flex flex-col space-y-4 pt-8">
             <div className="flex items-center space-x-3">
                <div className="w-10 h-[1px] bg-brand-pink" />
                <p className="text-gray-500 font-black uppercase tracking-[0.3em] text-[10px]">Founder & CEO</p>
             </div>
             <p className="text-white text-4xl font-bold tracking-tighter uppercase shrink-0">Stephen Kimaru Kung’u</p>
          </div>
        </div>
        <div className="h-[500px] glass rounded-[4rem] overflow-hidden relative border-r-4 border-brand-pink/50">
           <img 
              src="https://picsum.photos/seed/founder/1200/800" 
              alt="Stephen Kimaru Kung'u"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-12 flex items-end">
              <p className="text-white text-lg font-medium italic opacity-80">"Ma Creatives is not just a company. It is an ecosystem builder."</p>
           </div>
        </div>
      </section>

      {/* Mission/Vision Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass p-16 rounded-[4rem] space-y-8 relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-purple/20 blur-3xl rounded-full group-hover:bg-brand-purple/40 transition-colors" />
          <Target size={64} className="text-brand-purple" />
          <h2 className="text-5xl font-bold text-white uppercase tracking-tighter">Mission</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            To design, build, and scale innovative digital and real-world solutions by combining 
            technology, creativity, and entrepreneurship — empowering individuals, businesses, 
            and communities to grow, earn, and thrive in the modern economy.
          </p>
        </div>

        <div className="glass p-16 rounded-[4rem] space-y-8 relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-pink/20 blur-3xl rounded-full group-hover:bg-brand-pink/40 transition-colors" />
          <Eye size={64} className="text-brand-pink" />
          <h2 className="text-5xl font-bold text-white uppercase tracking-tighter">Vision</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            To build a globally recognized African innovation ecosystem that creates powerful digital 
            platforms, real-world businesses, and economic opportunities across industries including 
            technology, media, commerce, and immersive experiences.
          </p>
        </div>
      </div>

      {/* Ecosystem Mission Statement */}
      <section className="relative px-4">
        <div className="max-w-4xl mx-auto glass rounded-[4rem] p-12 md:p-24 space-y-10 border-brand-pink/20">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-brand flex items-center justify-center text-white">
              <Rocket size={24} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter">Our Ecosystem <span className="text-gradient">Mission</span></h2>
          </div>
          <p className="text-gray-300 text-xl md:text-2xl leading-relaxed italic">
            "Ma Creatives Studio exists to defy the boundaries between physical assets and digital innovation. 
            We are committed to building an infrastructure where African creativity is not just a service, 
            but a globally scalable engine of wealth and community impact."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-white/10">
            <div className="space-y-4">
              <h4 className="text-brand-pink font-bold uppercase tracking-widest text-sm">Strategic Goal 01</h4>
              <p className="text-gray-400">To transition 1,000+ local businesses into the digital-first economy through elite branding and tech integration.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-brand-pink font-bold uppercase tracking-widest text-sm">Strategic Goal 02</h4>
              <p className="text-gray-400">To cultivate a network of 50,000+ creators within Ma Networld, fostering cross-border collaboration and earning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Concept */}
      <section className="glass rounded-[4rem] p-12 md:p-24 bg-gradient-to-br from-black to-white/5 overflow-hidden">
        <div className="text-center space-y-12 mb-20">
          <div className="inline-flex items-center space-x-3 px-4 py-1 rounded-full glass border border-white/10 text-brand-pink text-[10px] font-black uppercase tracking-widest">
            <span>Core Concept</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">The Big <br/><span className="text-gradient">Picture</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">We are an ecosystem architect. We don't just build products; we build the infrastructure that allows businesses to connect, support, and thrive in unison.</p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Agency", icon: Rocket },
            { label: "Startup Studio", icon: Zap },
            { label: "Marketplace", icon: ShoppingCart },
            { label: "Community", icon: Users },
          ].map((item, i) => (
            <div key={item.label} className="text-center space-y-4">
              <div className="w-20 h-20 rounded-3xl glass flex items-center justify-center mx-auto text-brand-pink hover:bg-gradient-brand hover:text-white transition-all cursor-default">
                 <item.icon size={32} />
              </div>
              <p className="text-white font-bold uppercase text-sm tracking-widest">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="space-y-16">
        <h2 className="text-5xl font-bold text-white tracking-tighter text-center">Competitive <span className="text-gradient">Advantage</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { title: "Multi-Skill Integration", desc: "Tech, marketing, and design in one house." },
             { title: "Community-Driven", desc: "Our growth is powered by our network." },
             { title: "Scalable Internal Projects", desc: "We build and scale our own ventures." },
             { title: "Emerging Tech Focus", desc: "Always leading in AI, Web3, and VR." }
           ].map(a => (
             <div key={a.title} className="p-8 glass rounded-[2.5rem] space-y-4">
                <div className="w-12 h-1 px-1 bg-brand-pink rounded-full" />
                <h3 className="text-xl font-bold text-white uppercase tracking-tighter">{a.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
}
