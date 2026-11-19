import React from 'react';
import { motion } from 'motion/react';
import { 
  User, Package, Rocket, Users, Heart, Settings, 
  LogOut, Bell, Shield, ChevronRight, LayoutGrid,
  Activity, Zap, PieChart, DollarSign, CheckCircle2, ArrowRight
} from 'lucide-react';
import { cn } from '@/src/lib/utils.ts';
import { Link } from 'react-router-dom';

const tabs = [
  { id: 'profile', label: 'Founder Identity', icon: User },
  { id: 'analytics', label: 'Revenue Analytics', icon: PieChart },
  { id: 'orders', label: 'Transaction Ledger', icon: Package },
  { id: 'communities', label: 'Ecosystem Nodes', icon: Users },
  { id: 'settings', label: 'Studio Config', icon: Settings },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = React.useState('profile');
  
  const user = {
    name: "Stephen Kimaru Kung’u",
    email: "macreatives.global@gmail.com",
    avatar: "https://picsum.photos/seed/founder/200/200",
    joinDate: "April 2024",
    status: "Founder & CEO // Ecosystem Architect",
    level: "Tier 01 Master Operator",
    id: "MCS-CEO-001"
  };

  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* SIDEBAR PANEL */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-zinc-950 border border-white/15 p-8 rounded-[2.5rem] text-center relative overflow-hidden shadow-2xl">
            <div className="w-24 h-24 mx-auto mb-4 relative">
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-full h-full rounded-2xl object-cover border-2 border-white/20 shadow-xl"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-black" title="Live System Verified" />
            </div>

            <h2 className="text-xl font-black text-white uppercase tracking-tight">{user.name}</h2>
            <div className="text-xs font-bold text-brand-pink mt-1">{user.status}</div>
            
            <div className="mt-4 flex justify-center space-x-2">
               <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-extrabold uppercase text-zinc-300">
                 {user.level}
               </span>
               <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400">
                 {user.id}
               </span>
            </div>
          </div>

          {/* Tab Navigation */}
          <nav className="bg-zinc-950 border border-white/15 rounded-[2rem] p-3 space-y-1 shadow-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center justify-between px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all w-full text-left",
                  activeTab === tab.id 
                    ? "bg-gradient-brand text-white shadow-lg" 
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                )}
              >
                <div className="flex items-center space-x-3">
                  <tab.icon size={16} />
                  <span>{tab.label}</span>
                </div>
                {activeTab === tab.id && <ChevronRight size={14} />}
              </button>
            ))}
          </nav>
        </div>

        {/* MAIN DISPLAY AREA */}
        <div className="lg:col-span-8 space-y-6">
          <header className="flex justify-between items-center bg-zinc-950 border border-white/15 p-6 rounded-[2rem] shadow-xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-pink">
                <LayoutGrid size={20} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Operator Console</span>
                <h1 className="text-xl font-black text-white uppercase tracking-tight">
                  {tabs.find(t => t.id === activeTab)?.label}
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-xs font-mono text-green-400 bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/20">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>NODES SYNCHRONIZED</span>
            </div>
          </header>

          <main className="min-h-[460px]">
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: "Milestone Revenue", val: "KES 58,000+", icon: DollarSign, color: "text-green-400" },
                    { label: "Total Projects", val: "150+", icon: Rocket, color: "text-brand-pink" },
                    { label: "Ecosystem Nodes", val: "12 Hubs", icon: Users, color: "text-brand-purple" },
                  ].map(stat => (
                    <div key={stat.label} className="p-6 rounded-2xl bg-zinc-950 border border-white/15 space-y-2 shadow-xl">
                      <stat.icon size={20} className={stat.color} />
                      <div className="text-2xl font-black text-white tracking-tight">{stat.val}</div>
                      <div className="text-[11px] text-zinc-400 font-bold uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="p-8 rounded-[2rem] bg-zinc-950 border border-white/15 space-y-5 shadow-xl">
                  <h3 className="text-lg font-black text-white uppercase tracking-tight">Security & Governance Matrix</h3>
                  <div className="space-y-3">
                    {[
                      { l: "Biometric & 2FA Layer", s: "Active & Hardened", c: "text-green-400" },
                      { l: "Safaricom M-Pesa STK Webhooks", s: "Live & Listening", c: "text-green-400" },
                      { l: "GitHub Pages CDN & SSL", s: "Enforced TLS 1.3", c: "text-green-400" },
                      { l: "Custom Domain Mapping (macreatives.studio)", s: "DNS Verified & Active", c: "text-brand-pink" },
                    ].map(st => (
                      <div key={st.l} className="p-4 rounded-xl bg-white/5 border border-white/5 flex justify-between items-center text-xs">
                        <span className="text-zinc-300 font-medium">{st.l}</span>
                        <span className={cn("font-bold uppercase tracking-wider", st.c)}>{st.s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="p-8 rounded-[2rem] bg-zinc-950 border border-white/15 space-y-6 shadow-xl">
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-white uppercase tracking-tight">Commercial Analytics</h3>
                  <p className="text-zinc-400 text-xs">Verified growth metrics across client builds and venture holdings.</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                  {[
                    { l: "Gross Revenue", v: "KES 58,000", s: "100% Growth" },
                    { l: "Active Contracts", v: "4 Active", s: "In Progress" },
                    { l: "Avg Deal Value", v: "KES 24,000", s: "Up 35%" },
                    { l: "Repeat Rate", v: "65%", s: "High Trust" }
                  ].map(item => (
                    <div key={item.l} className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                      <div className="text-xs text-zinc-400 font-bold uppercase tracking-wider">{item.l}</div>
                      <div className="text-xl font-black text-white tracking-tight">{item.v}</div>
                      <div className="text-[10px] text-green-400 font-semibold">{item.s}</div>
                    </div>
                  ))}
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-xs font-bold text-white uppercase tracking-wider">Next Revenue Milestone: KES 250,000</div>
                  <div className="h-2.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/10">
                    <div className="h-full bg-gradient-brand rounded-full" style={{ width: '23.2%' }} />
                  </div>
                  <div className="text-[11px] text-zinc-400 flex justify-between">
                    <span>Current: KES 58,000</span>
                    <span>Target: KES 250,000 (23.2% achieved)</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="p-8 rounded-[2rem] bg-zinc-950 border border-white/15 space-y-6 shadow-xl">
                <h3 className="text-xl font-black text-white uppercase tracking-tight">Recent Studio Invoices & Settlements</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-white/10 text-zinc-400 uppercase tracking-wider pb-3">
                        <th className="pb-3 font-bold">Transaction Reference</th>
                        <th className="pb-3 font-bold">Client / Venture</th>
                        <th className="pb-3 font-bold">Status</th>
                        <th className="pb-3 font-bold text-right">Amount (KES)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {[
                        { ref: "MCS-2026-081", client: "Launchpad Web Build", status: "Completed", amt: "KES 18,500" },
                        { ref: "MCS-2026-082", client: "Cyber Donuts Retail Deposit", status: "Completed", amt: "KES 25,000" },
                        { ref: "MCS-2026-083", client: "Brand Architecture Suite", status: "Completed", amt: "KES 14,500" },
                      ].map(row => (
                        <tr key={row.ref} className="hover:bg-white/5">
                          <td className="py-3.5 font-mono text-zinc-300">{row.ref}</td>
                          <td className="py-3.5 font-bold text-white">{row.client}</td>
                          <td className="py-3.5">
                            <span className="px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 font-bold uppercase text-[10px]">
                              {row.status}
                            </span>
                          </td>
                          <td className="py-3.5 text-right font-black text-white">{row.amt}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'communities' && (
              <div className="p-8 rounded-[2rem] bg-zinc-950 border border-white/15 space-y-6 shadow-xl">
                <h3 className="text-xl font-black text-white uppercase tracking-tight">Your Active Node Memberships</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: "Creators Community", role: "Founding Facilitator", members: "450 Members" },
                    { name: "Developers Community", role: "Core Engineer", members: "320 Members" },
                    { name: "Entrepreneurs Hub", role: "Venture Architect", members: "180 Members" },
                    { name: "Faith Initiative", role: "Active Builder", members: "210 Members" },
                  ].map(c => (
                    <div key={c.name} className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                      <div className="text-white font-bold text-sm">{c.name}</div>
                      <div className="text-brand-pink text-xs font-semibold">{c.role}</div>
                      <div className="text-[10px] text-zinc-400 uppercase tracking-wider">{c.members}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="p-8 rounded-[2rem] bg-zinc-950 border border-white/15 space-y-5 shadow-xl">
                <h3 className="text-xl font-black text-white uppercase tracking-tight">Studio Configuration</h3>
                <p className="text-zinc-300 text-xs">Manage public studio details and notification webhooks.</p>
                <div className="space-y-3 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center text-xs">
                    <div>
                      <div className="text-white font-bold">Studio Primary WhatsApp</div>
                      <div className="text-zinc-400">+254 798 691594</div>
                    </div>
                    <span className="text-green-400 font-bold">Verified</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center text-xs">
                    <div>
                      <div className="text-white font-bold">Official Inbound Email</div>
                      <div className="text-zinc-400">macreatives.global@gmail.com</div>
                    </div>
                    <span className="text-green-400 font-bold">Connected</span>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
