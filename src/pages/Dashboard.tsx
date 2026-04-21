import React from 'react';
import { motion } from 'motion/react';
import { 
  User, Package, Rocket, Users, Heart, Settings, 
  LogOut, Bell, Shield, ChevronRight, LayoutGrid,
  Activity, Zap, PieChart
} from 'lucide-react';
import { cn } from '@/src/lib/utils.ts';

const tabs = [
  { id: 'profile', label: 'Identity', icon: User },
  { id: 'analytics', label: 'Ecosystem Analytics', icon: PieChart },
  { id: 'orders', label: 'Transaction Ledger', icon: Package },
  { id: 'contributions', label: 'Expansion Units', icon: Rocket },
  { id: 'communities', label: 'Node Memberships', icon: Users },
  { id: 'wishlist', label: 'Watchlist', icon: Heart },
  { id: 'settings', label: 'Protocol Config', icon: Settings },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = React.useState('profile');
  
  const user = {
    name: "Stephen Kimaru",
    email: "macreatives.global@gmail.com",
    avatar: "https://picsum.photos/seed/founder/100/100",
    joinDate: "April 2024",
    status: "Ecosystem Architect",
    level: "Tier 02 Operator"
  };

  return (
    <div className="pt-32 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-8">
        {/* SIDEBAR: NAVIGATION PANEL */}
        <div className="lg:col-span-1 space-y-4">
          <div className="glass p-10 rounded-[3rem] text-center border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-brand-pink opacity-50" />
            <div className="relative w-28 h-28 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full border border-brand-pink/30 animate-ping opacity-20" />
              <img src={user.avatar} className="w-full h-full rounded-full object-cover border-4 border-black shadow-[0_0_40px_-10px_rgba(219,39,119,0.5)]" />
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-black" />
            </div>
            <h2 className="text-2xl font-black text-white uppercase tracking-tighter leading-none">{user.name}</h2>
            <div className="meta-label text-brand-pink mt-3">{user.status}</div>
            <div className="mt-6 flex justify-center space-x-2">
               <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[8px] font-black uppercase text-gray-400">{user.level}</span>
               <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[8px] font-black uppercase text-gray-400">ID_7721</span>
            </div>
          </div>

          <nav className="glass rounded-[3rem] p-6 flex flex-col space-y-2 border-white/5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center justify-between px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all",
                  activeTab === tab.id 
                    ? "bg-white text-black shadow-2xl" 
                    : "text-gray-500 hover:bg-white/5 hover:text-white"
                )}
              >
                <div className="flex items-center space-x-4">
                  <tab.icon size={16} />
                  <span>{tab.label}</span>
                </div>
                {activeTab === tab.id && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
              </button>
            ))}
            <div className="pt-4 mt-4 border-t border-white/5">
              <button className="flex items-center space-x-4 px-6 py-4 rounded-2xl text-red-500/60 hover:bg-red-500/10 hover:text-red-500 transition-all text-[10px] font-black uppercase tracking-widest w-full text-left">
                <LogOut size={16} />
                <span>Deactivate Session</span>
              </button>
            </div>
          </nav>
        </div>

        {/* MAIN: PERFORMANCE AREA */}
        <div className="lg:col-span-3 space-y-8">
          <header className="flex justify-between items-center glass p-8 rounded-[3rem] border-white/5">
            <div className="flex items-center space-x-6">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white shadow-xl">
                 <LayoutGrid size={24} />
              </div>
              <div className="space-y-1">
                 <div className="meta-label text-gray-500">Operation Center</div>
                 <h1 className="text-4xl font-black text-white uppercase tracking-tighter">
                   {tabs.find(t => t.id === activeTab)?.label}
                 </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
               <div className="text-right hidden sm:block">
                  <div className="text-white font-black text-sm uppercase">Protocol_V5</div>
                  <div className="text-[10px] text-green-500 font-bold tracking-widest uppercase">System Optimal</div>
               </div>
               <button className="w-14 h-14 rounded-2xl glass text-gray-400 hover:text-white transition-colors relative flex items-center justify-center border-white/10 hover:bg-white/5">
                 <Bell size={20} />
                 <span className="absolute top-4 right-4 w-2 h-2 bg-brand-pink rounded-full ring-4 ring-black" />
               </button>
            </div>
          </header>

          <main className="min-h-[600px] animate-in fade-in slide-in-from-bottom-4 duration-700">
            {activeTab === 'profile' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass p-12 rounded-[4rem] space-y-10 border-white/5">
                  <div className="flex justify-between items-center">
                     <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Security Matrix</h3>
                     <Shield size={24} className="text-brand-pink opacity-50" />
                  </div>
                  <div className="space-y-4">
                    {[
                      { l: "Biometric Authentication", s: "Active", c: "text-green-500" },
                      { l: "Identity Proxy", s: "Encrypted", c: "text-brand-purple" },
                      { l: "Network Shielding", s: "Hardened", c: "text-brand-orange" },
                    ].map(st => (
                      <div key={st.l} className="p-6 rounded-3xl bg-white/5 border border-white/5 flex justify-between items-center group hover:bg-white/10 transition-colors">
                        <span className="text-gray-400 font-medium uppercase text-[10px] tracking-widest">{st.l}</span>
                        <span className={cn("text-[10px] font-black uppercase tracking-widest", st.c)}>{st.s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass p-12 rounded-[4rem] flex flex-col justify-between border-white/5">
                   <div className="space-y-2">
                     <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Ecosystem Flow</h3>
                     <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Real-time Node Activity</p>
                   </div>
                   <div className="grid grid-cols-2 gap-6 pt-10">
                      {[
                        { l: "Transactions", v: "142", i: Activity },
                        { l: "Sync Rate", v: "99.8%", i: Zap },
                        { l: "Memberships", v: "04", i: Users },
                        { l: "Gigs Completed", v: "28", i: Rocket },
                      ].map(stat => (
                        <div key={stat.l} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/5 space-y-2 group hover:border-brand-pink/30 transition-all">
                          <stat.i size={16} className="text-gray-500 group-hover:text-brand-pink transition-colors" />
                          <div className="text-4xl font-light text-white tracking-tighter">{stat.v}</div>
                          <div className="meta-label text-gray-600">{stat.l}</div>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            )}
            {/* Generic State for Demo */}
            {activeTab !== 'profile' && (
               <div className="glass p-20 rounded-[4rem] text-center border-white/5 space-y-10">
                 <div className="w-24 h-24 rounded-full bg-white/5 border-2 border-dashed border-white/10 flex items-center justify-center mx-auto animate-pulse">
                    <Activity size={40} className="text-gray-700" />
                 </div>
                 <div className="space-y-4">
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Module Not Initialized</h3>
                    <p className="text-gray-500 text-lg font-light">This specific ecosystem sector is awaiting operator synchronization.</p>
                 </div>
                 <button className="meta-label text-brand-pink hover:text-white transition-colors" onClick={() => setActiveTab('profile')}>&larr; Return to Central Core</button>
               </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
