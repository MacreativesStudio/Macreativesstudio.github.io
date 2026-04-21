import React from 'react';
import { motion } from 'motion/react';
import { 
  Laptop, Megaphone, Palette, Users, Coffee, 
  Code, Search, Share2, PenTool, GraduationCap,
  Cpu, Database, Shield, Zap, FlaskConical, 
  ShoppingBag, Rocket, Globe, Monitor, Film, Box
} from 'lucide-react';
import { cn } from '@/src/lib/utils.ts';

const serviceGroups = [
  {
    title: "1. Technology & Development",
    icon: Laptop,
    items: [
      { name: "Web & App Development", icon: Code },
      { name: "Software Engineering", icon: Zap },
      { name: "Web3 & Blockchain", icon: Shield },
      { name: "AI Tools & Automation", icon: Cpu },
      { name: "Data Science & Analytics", icon: Database },
    ]
  },
  {
    title: "2. Marketing & Growth",
    icon: Megaphone,
    items: [
      { name: "Digital Marketing (SEO/PPC)", icon: Search },
      { name: "Social Media Management", icon: Share2 },
      { name: "Content Strategy", icon: PenTool },
      { name: "Sales Funnels", icon: Zap },
      { name: "Affiliate Systems", icon: Users },
    ]
  },
  {
    title: "3. Creative & Branding",
    icon: Palette,
    items: [
      { name: "Brand Identity", icon: Palette },
      { name: "UI/UX Design", icon: Monitor },
      { name: "Motion Graphics", icon: Film },
      { name: "3D Modeling", icon: Box },
      { name: "Graphic Design", icon: PenTool },
      { name: "Media Production", icon: Laptop },
      { name: "Advertising Campaigns", icon: Megaphone },
      { name: "Creative Strategy", icon: PenTool },
    ]
  },
  {
    title: "4. Immersive & Entertainment",
    icon: FlaskConical,
    items: [
      { name: "Web2/Web3 Gaming", icon: Code },
      { name: "Virtual Reality (VR)", icon: Laptop },
      { name: "Esports Ecosystems", icon: Users },
      { name: "Interactive Content", icon: Share2 },
    ]
  },
  {
    title: "5. Networking & Community",
    icon: Users,
    items: [
      { name: "Membership Systems", icon: Shield },
      { name: "Referral Networks", icon: Share2 },
      { name: "Events & Workshops", icon: GraduationCap },
      { name: "Online Education", icon: GraduationCap },
    ]
  },
  {
    title: "6. Commerce & Products",
    icon: ShoppingBag,
    items: [
      { name: "E-commerce Platforms", icon: ShoppingBag },
      { name: "Digital Product Sales", icon: Database },
      { name: "Product Distribution", icon: Share2 },
      { name: "Course Platforms", icon: GraduationCap },
    ]
  },
  {
    title: "7. Lifestyle & Ventures",
    icon: Coffee,
    items: [
      { name: "Cyber Donuts Hub", icon: Coffee },
      { name: "Fitness & Skating", icon: Zap },
      { name: "Art & Decor", icon: Palette },
      { name: "Electronics Repair", icon: Cpu },
      { name: "Dropshipping", icon: ShoppingBag },
    ]
  },
  {
    title: "8. Innovation Lab",
    icon: Cpu,
    items: [
      { name: "Rapid Prototyping", icon: Zap },
      { name: "Startup Incubation", icon: Rocket },
      { name: "Future Tech Research", icon: Search },
      { name: "Global Innovation", icon: Globe },
    ]
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-20 space-y-24">
      <div className="max-w-4xl space-y-8 px-4">
        <div className="inline-flex items-center space-x-2 text-brand-pink text-[10px] font-black uppercase tracking-[0.4em]">
          <span>Ecosystem Divisions</span>
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-[clamp(3.5rem,8vw,8rem)] font-bold tracking-tighter mb-8 leading-none uppercase break-words">
          Elite <br/>
          <span className="text-gradient">Multi-Industry</span> Ecosystem
        </h1>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
          Ma Creatives Studio is not a service provider — we are a structural innovation engine 
          building the future of digital and physical commerce across 8 core divisions.
        </p>
      </div>

      {/* Flagship Services Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {[
          { 
            title: "Tech Infrastructure", 
            desc: "Custom-built software ecosystems and high-performance applications designed to scale with your ambition.",
            icon: Cpu,
            color: "text-brand-purple"
          },
          { 
            title: "Strategic Growth", 
            desc: "Beyond marketing — we build automated sales engines and conversion funnels that drive real, measurable revenue.",
            icon: Zap,
            color: "text-brand-pink"
          },
          { 
            title: "Brand Architecture", 
            desc: "Premium visual identities and creative direction that position your business at the top of the global market.",
            icon: Palette,
            color: "text-brand-orange"
          },
        ].map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] group hover:border-brand-pink/50 transition-all duration-500"
          >
            <s.icon size={40} className={cn("mb-6 md:mb-8 group-hover:scale-110 transition-transform", s.color)} />
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 uppercase tracking-tighter">{s.title}</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
        {serviceGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 group hover:border-brand-pink/30 transition-all duration-700"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-10">
              <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-brand text-white flex items-center justify-center shadow-2xl">
                <group.icon size={28} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tighter break-words">{group.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {group.items.map((item) => (
                <div key={item.name} className="flex items-center space-x-3 p-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/5 hover:border-brand-pink/50 hover:bg-white/10 transition-all duration-500 group/item">
                  <item.icon size={16} className="text-brand-pink group-hover/item:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover/item:text-white line-clamp-2 md:line-clamp-none">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <section className="glass rounded-[3rem] p-12 md:p-20 text-center">
        <h2 className="text-4xl font-bold text-white mb-6 uppercase tracking-tighter">Ready to Build?</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Our team is ready to help you design, build, and scale your next big idea. 
          Contact us today for a strategic consultation.
        </p>
        <button className="px-12 py-5 rounded-2xl bg-gradient-brand text-white font-bold text-lg hover:scale-105 transition-transform">
          Contact Sales Team
        </button>
      </section>
    </div>
  );
}
