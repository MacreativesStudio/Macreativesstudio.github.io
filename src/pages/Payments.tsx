import React from 'react';
import { CreditCard, Wallet, Landmark, QrCode, ShieldCheck, Globe } from 'lucide-react';

export default function Payments() {
  const methods = [
    { name: "M-Pesa", desc: "Mobile Money (Kenya)", icon: QrCode, logo: "S" },
    { name: "Bank Transfer", desc: "Local & International", icon: Landmark, logo: "B" },
    { name: "Card Payments", desc: "Visa, Mastercard, Amex", icon: CreditCard, logo: "C" },
    { name: "Cryptocurrency", desc: "USDT, ETH, BTC", icon: Wallet, logo: "W" },
  ];

  return (
    <div className="pt-32 pb-20 space-y-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 glass p-12 md:p-20 rounded-[4rem]">
        <div className="max-w-xl space-y-8">
           <h1 className="text-6xl font-bold tracking-tighter text-white uppercase leading-none">Global <span className="text-gradient">Payments</span></h1>
           <p className="text-gray-400 text-lg">
             We support a wide variety of payment gateways to make ecosystem transactions seamless, 
             no matter where you are in the world.
           </p>
           <div className="flex items-center space-x-4 text-brand-pink font-bold">
              <ShieldCheck size={24} />
              <span className="uppercase tracking-widest text-sm">Secure 256-bit Transactions</span>
           </div>
        </div>
        <div className="w-full md:w-96 p-8 glass rounded-[3rem] border-t-4 border-brand-purple space-y-6">
           <div className="flex justify-between items-center pb-4 border-b border-white/10">
              <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Payment Summary</span>
              <Globe size={20} className="text-brand-purple" />
           </div>
           <div className="text-gray-500 text-sm text-center py-10 italic">
              Your pending transactions will appear here. Build something tomorrow!
           </div>
           <button className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold opacity-50 cursor-not-allowed">
              Proceed to checkout
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {methods.map((m) => (
          <div key={m.name} className="p-8 glass rounded-[2.5rem] group hover:border-brand-pink/50 transition-all cursor-pointer">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-gradient-brand transition-all mb-6">
              <m.icon size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{m.name}</h3>
            <p className="text-gray-500 text-sm font-medium">{m.desc}</p>
          </div>
        ))}
      </div>

      <section className="text-center space-y-8">
         <h2 className="text-4xl font-bold text-white uppercase tracking-tighter">Need a custom billing solution?</h2>
         <p className="text-gray-400 max-w-xl mx-auto">
           For enterprise projects, we can set up custom invoicing and flexible 
           payment schedules based on your project milestones.
         </p>
         <button className="px-12 py-5 rounded-2xl bg-white text-black font-bold hover:scale-105 transition-transform uppercase tracking-tighter">
           Talk to Finance Dept
         </button>
      </section>
    </div>
  );
}
