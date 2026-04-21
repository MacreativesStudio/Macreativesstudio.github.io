import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Users, Ticket, Share2, Search, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils.ts';

const events = [
  { id: 1, title: "Innovation Lab Demo Day", date: "May 15, 2026", type: "Offline", location: "Nairobi, KE", price: "KSh 2,500", img: "event1" },
  { id: 2, title: "Web3 Mastery Workshop", date: "June 2, 2026", type: "Online", location: "Zoom Interactive", price: "KSh 1,200", img: "event2" },
  { id: 3, title: "Entrepreneurs Summit", date: "July 20, 2026", type: "Offline", location: "Innovation Hub", price: "KSh 5,000", img: "event3" },
];

export default function Events() {
  const [activeType, setActiveType] = React.useState('All');
  const [dateFilter, setDateFilter] = React.useState('All');

  const filteredEvents = events.filter(e => {
    const typeMatch = activeType === 'All' || e.type === activeType;
    // Simple date filtering logic
    const dateMatch = dateFilter === 'All' || (
      dateFilter === 'Upcoming' ? new Date(e.date) > new Date() : true
    );
    return typeMatch && dateMatch;
  });

  return (
    <div className="pt-32 pb-20 space-y-16">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold tracking-tighter text-white uppercase leading-none">Ecosystem <br/><span className="text-gradient">Events</span></h1>
          <p className="text-gray-400 mt-6 text-lg">
            Create, promote, and attend innovative gatherings. From tech demo days to creative workshops.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/5">
             {['All', 'Online', 'Offline'].map(t => (
               <button
                 key={t}
                 onClick={() => setActiveType(t)}
                 className={cn(
                   "px-6 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all",
                   activeType === t ? "bg-gradient-brand text-white shadow-lg" : "text-gray-500 hover:text-white"
                 )}
               >
                 {t}
               </button>
             ))}
          </div>
          <button className="px-8 py-3 rounded-2xl bg-gradient-brand text-white font-bold hover:scale-105 transition-transform flex items-center justify-center space-x-3 text-xs uppercase tracking-widest">
            <Calendar size={18} />
            <span>Create Event</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((e, i) => (
          <motion.div
            key={e.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group glass rounded-[2.5rem] overflow-hidden hover:border-brand-pink/50 transition-all duration-500"
          >
            <div className="relative h-56">
               <img src={`https://picsum.photos/seed/${e.img}/800/600`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute top-4 left-4 px-4 py-1 rounded-full glass text-brand-pink text-xs font-bold uppercase tracking-widest">{e.type}</div>
            </div>
            <div className="p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white uppercase tracking-tighter leading-tight">{e.title}</h3>
                <div className="flex items-center space-x-4 text-gray-500 text-sm font-medium">
                   <span className="flex items-center space-x-1"><Calendar size={14} /> <span>{e.date}</span></span>
                   <span className="flex items-center space-x-1"><MapPin size={14} /> <span>{e.location}</span></span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="text-2xl font-black text-gradient">{e.price}</div>
                <button className="px-6 py-3 rounded-xl bg-white text-black font-bold hover:bg-brand-pink hover:text-white transition-colors flex items-center space-x-2">
                   <Ticket size={18} />
                   <span>Buy Ticket</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="glass rounded-[3rem] p-12 text-center space-y-8 bg-gradient-to-br from-brand-purple/10 to-transparent">
         <h2 className="text-4xl font-bold text-white tracking-tighter">Become a Host</h2>
         <p className="text-gray-400 max-w-xl mx-auto">
           Want to organize your own event in our ecosystem? We provide the ticketing infrastructure 
           and promotional reach to help you succeed.
         </p>
         <button className="px-10 py-5 rounded-2xl border border-white/10 text-white font-bold hover:bg-white/5 transition-colors">
            Event Hosting Guide &rarr;
         </button>
      </section>
    </div>
  );
}
