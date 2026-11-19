import React from 'react';
import { motion } from 'motion/react';
import { 
  Laptop, Megaphone, Palette, Users, Coffee, 
  Code, Search, Share2, PenTool, GraduationCap,
  Cpu, Database, Shield, Zap, FlaskConical, 
  ShoppingBag, Rocket, Globe, Monitor, Film, Box,
  ArrowRight, Check, Sparkles, MessageCircle
} from 'lucide-react';
import { cn } from '@/src/lib/utils.ts';
import { Link } from 'react-router-dom';

const flagshipServices = [
  { 
    title: "Web & Mobile Infrastructure", 
    desc: "Custom-built, ultra-fast web applications, e-commerce storefronts, and mobile-first portals built to convert traffic into revenue.",
    icon: Laptop,
    deliverables: ["React / Vite / Next.js", "M-Pesa STK Integration", "Sub-Second Page Speeds", "SEO & Analytics"],
    startingPrice: "From KES 18,500"
  },
  { 
    title: "Brand Architecture & Identity", 
    desc: "Premium creative direction that positions your business at the very top of the market. Distinct logos, typography, and design systems.",
    icon: Palette,
    deliverables: ["Brand Identity Books", "UI/UX Figma Systems", "Social Media Packages", "Marketing Collateral"],
    startingPrice: "From KES 15,000"
  },
  { 
    title: "Automated Growth Engines", 
    desc: "Sales funnels, WhatsApp lead capture bots, and high-converting marketing pipelines engineered to compound your cash flow.",
    icon: Zap,
    deliverables: ["WhatsApp Auto-Responders", "Landing Page Funnels", "Conversion Copywriting", "Lead Magnet Systems"],
    startingPrice: "From KES 20,000"
  },
];

const serviceGroups = [
  {
    title: "1. Technology & Engineering",
    icon: Code,
    desc: "High-frequency code, software development, and web infrastructure.",
    items: [
      "Custom Web & App Development",
      "Software Systems Engineering",
      "M-Pesa / Card Gateway Integration",
      "AI Tools & Workflow Automation",
      "Cloud Database Architecture"
    ]
  },
  {
    title: "2. Marketing & Growth Funnels",
    icon: Megaphone,
    desc: "Lead generation, search optimization, and automated conversion systems.",
    items: [
      "Search Engine Optimization (SEO)",
      "WhatsApp & Social Media Funnels",
      "High-Converting Sales Copywriting",
      "Targeted Digital Ad Strategy",
      "Affiliate & Referral Network Setup"
    ]
  },
  {
    title: "3. Creative Direction & Branding",
    icon: Palette,
    desc: "Prestige visual design that separates you from ordinary competitors.",
    items: [
      "Brand Identity & Logo Architecture",
      "Modern UI/UX User Journey Design",
      "Motion Graphics & Visual Assets",
      "Product Packaging & Merch Graphics",
      "High-Fidelity 3D Brand Renders"
    ]
  },
  {
    title: "4. E-Commerce & Commercial Products",
    icon: ShoppingBag,
    desc: "Stores and checkout flows that collect payments automatically 24/7.",
    items: [
      "Digital Product Storefronts",
      "Physical Inventory E-Commerce",
      "Website Template Generators",
      "Subscription / Course Gateways",
      "Automated Invoice Systems"
    ]
  },
  {
    title: "5. Lifestyle & Physical Ventures",
    icon: Coffee,
    desc: "Translating digital concepts into profitable real-world storefronts.",
    items: [
      "Cyber Donuts F&B Experience",
      "Fit-Creative Wellness Movement",
      "Ma Living Decor & Furniture",
      "Tech Retail & Hardware Repair",
      "Dropshipping Network Logistics"
    ]
  },
  {
    title: "6. Innovation Lab & Frontier Tech",
    icon: FlaskConical,
    desc: "Incubating next-generation technologies and startup moonshots.",
    items: [
      "Rapid Prototype Sprints",
      "Startup Incubation & MVPs",
      "Generative AI Tool Integration",
      "Web3 & Decentralized Ownership",
      "Cross-Border Venture Architecture"
    ]
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 space-y-24 px-4">
      {/* 1) HERO */}
      <div className="max-w-4xl space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-brand-pink">
          <Sparkles size={12} />
          <span>Ecosystem Divisions</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase leading-none">
          Elite Multi-Industry <br/><span className="text-gradient">Services & Systems</span>
        </h1>
        <p className="text-zinc-300 text-base md:text-xl leading-relaxed max-w-2xl">
          Ma Creatives Studio does not provide generic gig work. We engineer comprehensive digital and physical engines that drive commercial revenue.
        </p>
      </div>

      {/* 2) FLAGSHIP SERVICE TIERS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {flagshipServices.map((s) => (
          <div 
            key={s.title}
            className="bg-zinc-950 border border-white/15 hover:border-brand-pink/50 rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between space-y-6 shadow-xl transition-all duration-300"
          >
            <div className="space-y-5">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-pink shadow-md">
                <s.icon size={30} />
              </div>
              <div>
                <span className="text-xs font-bold text-brand-pink uppercase tracking-widest block mb-1">{s.startingPrice}</span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">{s.title}</h3>
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed">{s.desc}</p>

              <div className="space-y-2 pt-2 border-t border-white/10">
                {s.deliverables.map(d => (
                  <div key={d} className="flex items-center space-x-2 text-xs font-semibold text-zinc-300">
                    <Check size={14} className="text-green-400 shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a 
                href={`https://wa.me/254798691594?text=${encodeURIComponent(`Hi Stephen, I want to discuss a ${s.title} project with Ma Creatives Studio.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-brand-pink hover:text-white transition-all flex items-center justify-center space-x-2"
              >
                <MessageCircle size={14} />
                <span>Book Service on WhatsApp</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* 3) DETAILED SERVICE DIVISIONS */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-black text-white uppercase tracking-tight">Full Capabilities Matrix</h2>
          <p className="text-zinc-400 text-sm">Explore everything our studio engineering teams handle in-house.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceGroups.map((group) => (
            <div 
              key={group.title}
              className="bg-zinc-950/80 border border-white/10 hover:border-white/20 p-8 rounded-[2rem] space-y-4 shadow-xl"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-pink">
                  <group.icon size={20} />
                </div>
                <h3 className="text-lg font-black text-white uppercase tracking-tight">{group.title}</h3>
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed">{group.desc}</p>
              
              <div className="space-y-2 pt-2 border-t border-white/5">
                {group.items.map((item) => (
                  <div key={item} className="flex items-center space-x-2 text-xs text-zinc-300 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-pink shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4) HOW WE WORK SPRINT PROCESS */}
      <section className="bg-zinc-950 border border-white/15 rounded-[3rem] p-10 md:p-16 space-y-10 shadow-2xl">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Our 4-Step <span className="text-gradient">Sprint Model</span>
          </h2>
          <p className="text-zinc-400 text-sm">From initial brief to live conversion in record time.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Strategic Brief", desc: "We clarify your customer target, offer, and commercial conversion goals." },
            { step: "02", title: "High-Fidelity UI", desc: "We design modern, unforgettable interfaces with signature aesthetics." },
            { step: "03", title: "Clean Engineering", desc: "We code mobile-first, connect M-Pesa/gateways, and optimize speed." },
            { step: "04", title: "Launch & Handover", desc: "We deploy live, connect your domain, and hand over 100% of the source code." }
          ].map((s) => (
            <div key={s.step} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <span className="text-3xl font-black text-brand-pink font-mono">{s.step}</span>
              <h3 className="text-lg font-black text-white uppercase tracking-tight">{s.title}</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5) BOTTOM CTA */}
      <div className="bg-gradient-brand rounded-[2.5rem] p-10 md:p-16 text-center text-white space-y-6 shadow-2xl">
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
          Ready to Elevate Your Business?
        </h2>
        <p className="text-zinc-100 text-base max-w-lg mx-auto">
          Contact Stephen Kimaru Kung’u directly to map out your architecture and get started.
        </p>
        <div className="pt-2">
          <Link 
            to="/contact" 
            className="px-9 py-4 rounded-full bg-black text-white font-black text-xs uppercase tracking-wider hover:bg-zinc-900 transition-all inline-block shadow-2xl"
          >
            Launch Project Brief Now
          </Link>
        </div>
      </div>
    </div>
  );
}
