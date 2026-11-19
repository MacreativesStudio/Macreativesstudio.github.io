import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Users, Zap, Shield, Globe, MessageCircle, Sparkles } from 'lucide-react';

export default function CommunityDetail() {
  const { id } = useParams();
  const communityName = id ? id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'Community';

  return (
    <div className="pt-32 pb-24 space-y-12 px-4 max-w-5xl mx-auto">
      <Link to="/communities" className="inline-flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors group text-xs font-bold uppercase tracking-wider">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span>Back to All Communities</span>
      </Link>

      <div className="bg-zinc-950 border border-white/15 rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-pink/15 blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 space-y-10">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-brand-pink">
              <Sparkles size={12} />
              <span>Verified Ecosystem Hub</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight leading-none">
               {communityName} <br/>
               <span className="text-gradient">Ecosystem</span>
            </h1>
            <p className="text-zinc-300 text-base md:text-lg max-w-2xl leading-relaxed">
              This is a specialized division within the Ma Creatives Studio network. Here, ambitious creators and operators collaborate on commercial projects and venture building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Network Sprints', val: 'Wednesdays @ 6PM EAT', icon: Zap },
              { label: 'Ecosystem Level', val: 'African & Global Reach', icon: Globe },
              { label: 'Access Tier', val: 'Founder Verified', icon: Shield },
            ].map(item => (
              <div key={item.label} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                 <item.icon size={22} className="text-brand-pink" />
                 <div>
                    <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">{item.label}</div>
                    <div className="text-white font-extrabold text-sm md:text-base mt-0.5">{item.val}</div>
                 </div>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 border-t border-white/10">
             <a 
               href={`https://wa.me/254798691594?text=${encodeURIComponent(`Hi Stephen, I want to join the ${communityName} hub in Ma Networld.`)}`}
               target="_blank"
               rel="noopener noreferrer"
               className="px-8 py-4 rounded-full bg-gradient-brand text-white font-extrabold text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-xl flex items-center justify-center space-x-2"
             >
               <MessageCircle size={15} />
               <span>Join {communityName} on WhatsApp</span>
             </a>
             <Link 
               to="/contact"
               className="px-8 py-4 rounded-full bg-zinc-900 border border-white/20 text-zinc-200 hover:text-white font-extrabold text-xs uppercase tracking-wider hover:bg-zinc-800 transition-all text-center"
             >
               Propose Collaboration
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
