import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Ticket, MessageCircle, Sparkles } from 'lucide-react';
import { cn } from '@/src/lib/utils.ts';
import { Link } from 'react-router-dom';

const events = [
  { id: 1, title: "Innovation Lab Demo Day", date: "May 15, 2026", type: "In-Person", location: "Nairobi, KE", price: "KES 2,500", img: "event1", desc: "Live showcase of internal studio prototypes, AI agent workflows, and venture pitches to African angel backers." },
  { id: 2, title: "Web & Mobile Conversion Masterclass", date: "June 2, 2026", type: "Online", location: "Live Zoom Stream", price: "KES 1,200", img: "event2", desc: "Hands-on technical sprint on how to build fast websites, integrate M-Pesa STK, and acquire paying clients." },
  { id: 3, title: "African Founders & Builders Summit", date: "July 20, 2026", type: "In-Person", location: "Westlands, Nairobi", price: "KES 4,500", img: "event3", desc: "Full-day strategic gathering of designers, developers, and entrepreneurs uniting across the Ma Networld topology." },
];

export default function Events() {
  const [activeType, setActiveType] = React.useState('All');

  const filteredEvents = events.filter(e => activeType === 'All' || e.type === activeType);

  return (
    <div className="pt-32 pb-24 space-y-20 px-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 max-w-7xl mx-auto">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-brand-pink">
            <Sparkles size={12} />
            <span>Summits & Gatherings</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase leading-none">
            Ecosystem <br/><span className="text-gradient">Events</span>
          </h1>
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
            Attend high-impact tech masterclasses, demo days, and founder summits hosted by Ma Creatives Studio.
          </p>
        </div>

        <div className="flex bg-zinc-950 border border-white/15 p-1 rounded-2xl">
          {['All', 'Online', 'In-Person'].map(t => (
            <button
              key={t}
              onClick={() => setActiveType(t)}
              className={cn(
                "px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all",
                activeType === t ? "bg-gradient-brand text-white shadow-md" : "text-zinc-400 hover:text-white"
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredEvents.map((e) => (
          <div
            key={e.id}
            className="rounded-[2.5rem] bg-zinc-950 border border-white/15 hover:border-brand-pink/50 overflow-hidden flex flex-col justify-between shadow-xl transition-all group"
          >
            <div className="relative h-56 bg-zinc-900">
               <img 
                 src={`https://picsum.photos/seed/${e.img}/800/600`} 
                 alt={e.title}
                 loading="lazy"
                 referrerPolicy="no-referrer"
                 className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" 
               />
               <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 border border-white/20 text-brand-pink text-[10px] font-black uppercase tracking-wider backdrop-blur-md">
                 {e.type}
               </div>
            </div>

            <div className="p-7 space-y-5 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">{e.title}</h3>
                <div className="flex items-center space-x-4 text-zinc-400 text-xs font-semibold">
                   <span className="flex items-center space-x-1"><Calendar size={13} className="text-brand-pink" /> <span>{e.date}</span></span>
                   <span className="flex items-center space-x-1"><MapPin size={13} className="text-brand-orange" /> <span>{e.location}</span></span>
                </div>
                <p className="text-zinc-300 text-xs md:text-sm leading-relaxed">{e.desc}</p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="text-2xl font-black text-white tracking-tight">{e.price}</div>
                <a
                  href={`https://wa.me/254798691594?text=${encodeURIComponent(`Hi Stephen, I want to reserve a ticket for the "${e.title}" (${e.price}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-brand-pink hover:text-white transition-all flex items-center space-x-1.5"
                >
                   <Ticket size={14} />
                   <span>Reserve Seat</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Host with Us Banner */}
      <div className="bg-zinc-950 border border-white/15 rounded-[3rem] p-8 md:p-14 max-w-7xl mx-auto text-center space-y-4 shadow-2xl">
        <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">Want to Host or Sponsor an Event?</h2>
        <p className="text-zinc-300 text-sm max-w-xl mx-auto leading-relaxed">
          Partner with Ma Creatives Studio to tap into our creator and developer audience for product launches and hackathons.
        </p>
        <div className="pt-2">
          <Link 
            to="/contact" 
            className="px-8 py-3.5 rounded-full bg-gradient-brand text-white font-extrabold text-xs uppercase tracking-wider hover:scale-105 transition-all inline-block shadow-xl"
          >
            Connect with Events Team
          </Link>
        </div>
      </div>
    </div>
  );
}
