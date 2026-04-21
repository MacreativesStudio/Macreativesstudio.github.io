import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Users, Code, Lightbulb, MessageSquare, Briefcase, GraduationCap, Heart, Globe } from 'lucide-react';

const communityList = [
  { name: "Creators Community", icon: Lightbulb, members: "450+", desc: "A space for graphic designers, video editors, and digital artists to collaborate." },
  { name: "Developers Community", icon: Code, members: "320+", desc: "Software engineers and tech enthusiasts building the next generation of African apps." },
  { name: "Entrepreneurs", icon: Briefcase, members: "180+", desc: "Business owners and startup founders sharing growth strategies and opportunities." },
  { name: "Students Network", icon: GraduationCap, members: "600+", desc: "Connecting learners with resources, mentorship, and career paths." },
  { name: "Innovation Community", icon: Globe, members: "120+", desc: "Experimenting with Web3, AI, and emerging technologies." },
  { name: "Faith Community", icon: Heart, members: "200+", desc: "Structured around the 'Read Your Bible' initiative and community values." },
];

export default function Communities() {
  return (
    <div className="pt-32 pb-20 space-y-24">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 text-brand-pink text-[10px] font-black uppercase tracking-[0.4em]">
            <span>The Ma Network</span>
          </div>
          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter text-white uppercase leading-none">Dynamic <br/><span className="text-gradient">Communities</span></h1>
          <p className="text-gray-400 text-xl leading-relaxed max-w-xl pt-4">
            Join thousands of decentralized creators in our niche networks. 
            Connect with others who share your high-performance professional goals.
          </p>
        </div>
        <div className="flex pt-8 md:pt-0">
          <button className="px-10 py-5 rounded-3xl bg-gradient-brand text-white font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform shadow-[0_0_30px_-5px_rgba(147,51,234,0.4)]">
            Suggest a Community
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {communityList.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-10 rounded-[3.5rem] glass hover:border-brand-pink/50 transition-all duration-700 flex flex-col justify-between h-[520px] border-b-2 border-white/5"
          >
            <div className="space-y-6">
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-pink group-hover:bg-gradient-brand group-hover:text-white transition-all duration-500 shadow-xl">
                <c.icon size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white uppercase tracking-tighter shrink-0">{c.name}</h3>
              <p className="text-gray-400 leading-relaxed line-clamp-3">{c.desc}</p>
              <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] bg-white/5 w-fit px-5 py-2 rounded-full border border-white/5">
                {c.members} Global Members
              </div>
            </div>
            
            <div className="pt-8 flex flex-col space-y-4">
               <button className="w-full py-4 rounded-2xl bg-gradient-brand text-white font-black uppercase text-[10px] tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_-5px_rgba(147,51,234,0.4)]">
                 Join Ecosystem
               </button>
               <div className="flex space-x-4">
                 <Link 
                   to={`/communities/${c.name.toLowerCase().replace(/ /g, '-')}`}
                   className="flex-1 py-4 rounded-2xl glass hover:bg-white/10 text-white font-bold text-center text-[10px] uppercase tracking-widest transition-colors flex items-center justify-center space-x-2"
                 >
                   <span>Learn More</span>
                 </Link>
                 <button className="p-4 rounded-2xl glass hover:bg-white/10 text-white transition-colors group/msg">
                    <MessageSquare size={20} className="group-hover/msg:text-brand-pink transition-colors" />
                 </button>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
