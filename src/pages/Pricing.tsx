import React from 'react';
import { Check, Zap, Rocket, ShieldCheck } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "Custom",
    desc: "Perfect for emerging creators and small brands.",
    features: ["Basic Web Design", "Social Media Setup", "Community Access", "Affiliate Portal"],
    btnText: "Get Started",
    popular: false
  },
  {
    name: "Growth",
    price: "Custom",
    desc: "Designed for scaling startups and businesses.",
    features: ["Advanced Web/App Build", "Comprehensive SEO", "E-commerce System", "Priority Support", "Innovation Lab Access"],
    btnText: "Start Growth Phase",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Quote",
    desc: "Full ecosystem support for large-scale operations.",
    features: ["Custom Software Suite", "Marketplace Infrastructure", "Multi-Industry Scaling", "Full Studio Retainer", "Strategic Partnership"],
    btnText: "Build Ecosystem",
    popular: false
  }
];

export default function Pricing() {
  return (
    <div className="pt-32 pb-20 space-y-20">
      <div className="text-center max-w-2xl mx-auto space-y-6">
        <h1 className="text-6xl font-bold tracking-tighter text-white">Strategic <span className="text-gradient">Pricing</span></h1>
        <p className="text-gray-400 text-lg">
          We believe in flexible, value-based partnerships. Choose a level that matches your current growth stage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div 
            key={plan.name}
            className={`p-1 flex flex-col rounded-[3rem] ${plan.popular ? 'bg-gradient-brand' : 'bg-white/5 border border-white/10'}`}
          >
            <div className="bg-black rounded-[2.9rem] p-10 flex-1 flex flex-col">
              <div className="mb-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">{plan.name}</h3>
                  {plan.popular && <div className="px-3 py-1 rounded-full bg-brand-pink text-[10px] font-black uppercase text-white tracking-widest">Most Popular</div>}
                </div>
                <div className="text-6xl font-black text-white tracking-tighter mb-4">{plan.price}</div>
                <p className="text-gray-400 text-sm">{plan.desc}</p>
              </div>

              <div className="space-y-4 mb-12 flex-1">
                {plan.features.map(f => (
                  <div key={f} className="flex items-center space-x-3 text-gray-300">
                    <div className="p-1 rounded-full bg-white/5 border border-white/10"><Check size={14} className="text-brand-pink" /></div>
                    <span className="text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-gradient-brand text-white hover:scale-105 shadow-xl' : 'bg-white text-black hover:bg-brand-pink hover:text-white'}`}>
                {plan.btnText}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="glass rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">
         <div className="w-24 h-24 rounded-3xl bg-gradient-brand flex items-center justify-center text-white flex-shrink-0">
            <ShieldCheck size={48} />
         </div>
         <div className="flex-1 space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">Value-Based Partnerships</h3>
            <p className="text-gray-400 leading-relaxed">
              We don't just charge for hours; we charge for outcomes. Every partnership starts with a 
              Strategic Brief to ensure your investment drives maximum growth for your ecosystem.
            </p>
         </div>
         <button className="px-10 py-5 rounded-2xl border border-white/10 text-white font-bold hover:bg-white/5 transition-colors whitespace-nowrap">
            Download Pricing Model
         </button>
      </div>
    </div>
  );
}
