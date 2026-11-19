import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Rocket, Users, Globe, ShieldCheck, Zap, ShoppingCart, Award, Sparkles, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-32 pb-24 space-y-24 px-4">
      {/* 1) HERO & FOUNDER SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-brand-pink">
            <Sparkles size={12} />
            <span>The Ma Creatives Blueprint</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase leading-none">
            Architect of <br/><span className="text-gradient">Ecosystems</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg md:text-xl leading-relaxed">
            Ma Creatives Studio was founded on a singular conviction: that African creativity and engineering, when structured into a disciplined ecosystem, can build world-class brands and generate generational wealth.
          </p>

          <div className="p-6 rounded-3xl bg-zinc-950 border border-white/15 space-y-3 shadow-xl">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-0.5 bg-brand-pink" />
              <p className="text-zinc-400 font-extrabold uppercase tracking-widest text-[11px]">Founder & CEO</p>
            </div>
            <p className="text-white text-2xl sm:text-3xl font-black tracking-tight uppercase">Stephen Kimaru Kung’u</p>
            <p className="text-zinc-400 text-xs leading-relaxed italic">
              "Ma means 'My'. Ma Creatives Studio is your studio. We build the digital infrastructure and real-world ventures that empower people to learn, build, and earn."
            </p>
          </div>
        </div>

        {/* Right Visual Frame */}
        <div className="lg:col-span-5 h-[480px] rounded-[3rem] overflow-hidden relative border border-white/15 bg-zinc-950 shadow-2xl">
          <img 
            src="https://picsum.photos/seed/founder-stephen/800/1000" 
            alt="Stephen Kimaru Kung'u - Founder of Ma Creatives Studio"
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-8 flex flex-col justify-end">
            <span className="text-xs font-mono text-zinc-400 tracking-wider">OFFICE OF THE CEO // NAIROBI, KENYA</span>
            <span className="text-white font-extrabold text-lg mt-1">Driving the African Tech & Creative Renaissance</span>
          </div>
        </div>
      </section>

      {/* 2) MISSION & VISION CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <div className="bg-zinc-950/90 border border-white/15 p-10 md:p-14 rounded-[3rem] space-y-6 shadow-xl relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-brand-purple/20 border border-brand-purple/40 flex items-center justify-center text-brand-purple shadow-lg">
            <Target size={32} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">Our Mission</h2>
          <p className="text-zinc-300 text-base leading-relaxed">
            To design, engineer, and scale innovative digital platforms and real-world ventures by combining modern technology, creative direction, and entrepreneurship — empowering individuals and businesses to capture value in the global economy.
          </p>
        </div>

        <div className="bg-zinc-950/90 border border-white/15 p-10 md:p-14 rounded-[3rem] space-y-6 shadow-xl relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-brand-pink/20 border border-brand-pink/40 flex items-center justify-center text-brand-pink shadow-lg">
            <Eye size={32} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">Our Vision</h2>
          <p className="text-zinc-300 text-base leading-relaxed">
            To build a globally recognized, multi-industry African innovation powerhouse that scales digital solutions, lifestyle holdings (food, wellness, tech retail), and creator networks from Nairobi to the world.
          </p>
        </div>
      </div>

      {/* 3) CORE DESIGN & BUSINESS PHILOSOPHY */}
      <section className="bg-zinc-950 border border-white/15 rounded-[3rem] p-10 md:p-16 max-w-7xl mx-auto shadow-2xl">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 text-brand-pink text-xs font-bold uppercase tracking-widest">
            <span>Core Standards</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            The Three <span className="text-gradient">Principles</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              num: "01",
              title: "Make Hard Things Simple",
              desc: "We turn complex technologies (code, payments, software, business funnels) into effortless, intuitive experiences for our clients."
            },
            {
              num: "02",
              title: "Make Simple Things Beautiful",
              desc: "Even a basic single-page website deserves elite typography, razor-sharp responsiveness, and memorable visual polish."
            },
            {
              num: "03",
              title: "Make Beautiful Things Unforgettable",
              desc: "We don't settle for ordinary. We craft brands that customers remember, recommend, and return to repeatedly."
            }
          ].map(p => (
            <div key={p.num} className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4">
              <span className="text-4xl font-black text-brand-pink font-mono">{p.num}</span>
              <h3 className="text-xl font-black text-white uppercase tracking-tight">{p.title}</h3>
              <p className="text-zinc-300 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4) THE 4 ECOSYSTEM PILLARS */}
      <section className="space-y-12 max-w-7xl mx-auto">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            The 4 Engine <br/><span className="text-gradient">Pillars</span>
          </h2>
          <p className="text-zinc-400 text-sm">How Ma Creatives Studio operates as a complete business engine.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "1. Digital Agency", desc: "Client websites, mobile apps, branding, and conversion funnels.", icon: Rocket },
            { label: "2. Startup Incubator", desc: "Spinning off internal ventures like Cyber Donuts and tech tools.", icon: Zap },
            { label: "3. Creator Marketplace", desc: "Turnkey website generators, digital assets, and physical goods.", icon: ShoppingCart },
            { label: "4. Ma Networld", desc: "Decentralized community of creators, developers, and founders.", icon: Users },
          ].map(pillar => (
            <div key={pillar.label} className="p-7 rounded-3xl bg-zinc-950 border border-white/15 space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-pink">
                <pillar.icon size={22} />
              </div>
              <h3 className="text-lg font-black text-white uppercase tracking-tight">{pillar.label}</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5) CALL TO ACTION */}
      <div className="bg-zinc-950 border border-white/15 rounded-[3rem] p-10 md:p-16 max-w-7xl mx-auto text-center space-y-6 shadow-2xl">
        <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
          Join the Movement
        </h2>
        <p className="text-zinc-300 text-base max-w-xl mx-auto leading-relaxed">
          Whether you need a high-converting website built or want to join the Ma Networld creator network, we’re ready.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link 
            to="/contact"
            className="px-8 py-4 rounded-full bg-gradient-brand text-white font-extrabold uppercase text-xs tracking-wider shadow-xl hover:scale-105 transition-all"
          >
            Start a Project with Us
          </Link>
          <Link 
            to="/communities"
            className="px-8 py-4 rounded-full bg-zinc-900 border border-white/20 text-zinc-200 hover:text-white font-extrabold uppercase text-xs tracking-wider hover:bg-zinc-800 transition-all"
          >
            Explore Communities
          </Link>
        </div>
      </div>
    </div>
  );
}
