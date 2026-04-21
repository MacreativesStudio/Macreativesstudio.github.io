import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Users, Zap, Shield, Globe, MessageSquare } from 'lucide-react';

export default function CommunityDetail() {
  const { id } = useParams();

  return (
    <div className="pt-32 pb-20 space-y-16">
      <Link to="/communities" className="inline-flex items-center space-x-2 text-gray-500 hover:text-white transition-colors group">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-xs font-bold uppercase tracking-widest">Back to Communities</span>
      </Link>

      <div className="glass rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-pink/10 blur-[120px] rounded-full" />
        
        <div className="relative z-10 space-y-12">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-4">
               {id?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} <br/>
               <span className="text-gradient">Ecosystem</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
              This is a specialized division within the Ma Creatives Studio network. 
              Here, high-performance individuals come together to share, build, and scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Weekly Sessions', val: 'Wednesdays @ 6PM', icon: Zap },
              { label: 'Network Level', val: 'Elite / Global', icon: Globe },
              { label: 'Verified Access', val: 'Ma ID Required', icon: Shield },
            ].map(item => (
              <div key={item.label} className="p-8 glass rounded-[2.5rem] border border-white/5 space-y-4">
                 <item.icon size={24} className="text-brand-pink" />
                 <div className="space-y-1">
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{item.label}</div>
                    <div className="text-white font-bold">{item.val}</div>
                 </div>
              </div>
            ))}
          </div>

          <div className="pt-12 flex flex-col md:flex-row gap-6">
             <button className="px-12 py-6 rounded-2xl bg-gradient-brand text-white font-black text-xl hover:scale-105 transition-transform shadow-2xl">
               Apply to Join Ecosystem
             </button>
             <button className="px-12 py-6 rounded-2xl glass text-white font-bold text-xl hover:bg-white/10 transition-colors flex items-center justify-center space-x-3">
               <MessageSquare size={20} />
               <span>Talk to Facilitator</span>
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
