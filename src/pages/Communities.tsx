import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Users, Code, Lightbulb, MessageSquare, Briefcase, GraduationCap, Heart, Globe, ArrowRight, Sparkles } from 'lucide-react';

const communityList = [
  { 
    name: "Creators Community", 
    slug: "creators-community",
    icon: Lightbulb, 
    members: "450+ Active", 
    desc: "A collaborative hub for visual designers, 3D artists, video editors, and brand strategists sharing client leads and feedback." 
  },
  { 
    name: "Developers Community", 
    slug: "developers-community",
    icon: Code, 
    members: "320+ Active", 
    desc: "Software engineers, mobile app developers, and tech founders building scalable African software systems and web apps." 
  },
  { 
    name: "Entrepreneurs & Founders", 
    slug: "entrepreneurs",
    icon: Briefcase, 
    members: "180+ Active", 
    desc: "Business owners and venture builders sharing commercial growth strategies, supplier networks, and capital opportunities." 
  },
  { 
    name: "Students Network", 
    slug: "students-network",
    icon: GraduationCap, 
    members: "600+ Active", 
    desc: "Connecting university and tertiary learners with practical digital skills, project apprenticeships, and career pathways." 
  },
  { 
    name: "Innovation & Web3", 
    slug: "innovation-community",
    icon: Globe, 
    members: "140+ Active", 
    desc: "Experimenting with generative AI agentic systems, decentralized protocols, and frontier digital architectures." 
  },
  { 
    name: "Faith Community", 
    slug: "faith-community",
    icon: Heart, 
    members: "210+ Active", 
    desc: "Centered around the 'Read Your Bible' initiative, cultivating spiritual discipline and ethical entrepreneurship." 
  },
];

export default function Communities() {
  return (
    <div className="pt-32 pb-24 space-y-20 px-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 max-w-7xl mx-auto">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-brand-pink">
            <Sparkles size={12} />
            <span>The Ma Network</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase leading-none">
            Dynamic <br/><span className="text-gradient">Communities</span>
          </h1>
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-xl">
            Join thousands of decentralized creators, developers, and founders across specialized industry hubs.
          </p>
        </div>

        <a 
          href="https://wa.me/254798691594?text=Hi%20Stephen,%20I'd%20like%20to%20join%20or%20partner%20with%20a%20Ma%20Community"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3.5 rounded-full bg-gradient-brand text-white font-extrabold uppercase text-xs tracking-wider shadow-lg hover:scale-105 transition-all whitespace-nowrap"
        >
          Join Central Community Hub
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {communityList.map((c) => (
          <div
            key={c.name}
            className="p-8 md:p-10 rounded-[2.5rem] bg-zinc-950 border border-white/15 hover:border-brand-pink/50 transition-all flex flex-col justify-between space-y-6 shadow-xl group"
          >
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-pink group-hover:scale-105 transition-transform">
                <c.icon size={28} />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">{c.name}</h3>
              <p className="text-zinc-300 text-sm leading-relaxed">{c.desc}</p>
              
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-zinc-400">
                {c.members}
              </div>
            </div>
            
            <div className="pt-4 border-t border-white/10 flex items-center space-x-3">
              <Link 
                to={`/communities/${c.slug}`}
                className="flex-1 py-3 rounded-xl bg-white text-black font-extrabold text-xs uppercase tracking-wider text-center hover:bg-brand-pink hover:text-white transition-all"
              >
                Community Details
              </Link>
              <a 
                href={`https://wa.me/254798691594?text=Hi%20Stephen,%20I'm%20joining%20the%20${encodeURIComponent(c.name)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-green-400 hover:bg-white/10 transition-colors"
                title="Connect via WhatsApp"
              >
                <MessageSquare size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
