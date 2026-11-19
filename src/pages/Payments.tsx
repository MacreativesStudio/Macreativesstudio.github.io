import React from 'react';
import { CreditCard, Wallet, Landmark, QrCode, ShieldCheck, Globe, Check, MessageCircle, FileText, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Payments() {
  const methods = [
    { 
      name: "M-Pesa (Kenya & East Africa)", 
      desc: "Instant mobile money via STK Push, Paybill, or Buy Goods Till.", 
      icon: QrCode, 
      status: "Instant Settlement",
      details: "Compatible with all Safaricom lines across Kenya, Uganda, Tanzania & Rwanda."
    },
    { 
      name: "Debit & Credit Cards", 
      desc: "Visa, Mastercard, and American Express processed globally.", 
      icon: CreditCard, 
      status: "Secure 256-Bit SSL",
      details: "International clients can pay with any major credit or debit card without currency friction."
    },
    { 
      name: "Direct Bank Transfer (RTGS / EFT)", 
      desc: "Direct wire transfers for enterprise invoices and corporate milestones.", 
      icon: Landmark, 
      status: "Corporate Verified",
      details: "Official Kenyan and USD international bank accounts provided on company invoices."
    },
    { 
      name: "Cryptocurrency & Stablecoins", 
      desc: "USDT (TRC-20 & ERC-20), Bitcoin, Ethereum, and TON network.", 
      icon: Wallet, 
      status: "Border-Free",
      details: "Fast settlement for international and decentralized web3 partners."
    },
  ];

  return (
    <div className="pt-32 pb-24 space-y-20 px-4">
      {/* Header */}
      <div className="max-w-4xl space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-brand-pink">
          <Lock size={12} />
          <span>Financial Architecture</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase leading-none">
          Global <br/><span className="text-gradient">Payments & Terms</span>
        </h1>
        <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-2xl">
          Ma Creatives Studio operates multi-channel payment rails. Whether you are paying locally via M-Pesa or internationally via Card and Crypto, transactions are seamless.
        </p>
      </div>

      {/* Methods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {methods.map((m) => (
          <div key={m.name} className="p-8 rounded-[2.5rem] bg-zinc-950 border border-white/15 space-y-5 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-pink">
                <m.icon size={26} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                {m.status}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-black text-white uppercase tracking-tight">{m.name}</h3>
              <p className="text-zinc-300 text-sm mt-1">{m.desc}</p>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed border-t border-white/5 pt-3">
              {m.details}
            </p>
          </div>
        ))}
      </div>

      {/* Milestone Terms */}
      <div className="bg-zinc-950 border border-white/15 rounded-[3rem] p-8 md:p-14 space-y-8 shadow-2xl">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
            Transparent Milestone Structure
          </h2>
          <p className="text-zinc-400 text-sm">We protect both the client and the studio with clear, structured project stages.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              phase: "Stage 01",
              percent: "50% Initial Deposit",
              desc: "Secures your development sprint on the studio schedule. We conduct strategic brief research, UI/UX wireframes, and design approvals."
            },
            {
              phase: "Stage 02",
              percent: "Engineering & Demo",
              desc: "Full code development, mobile responsiveness optimization, M-Pesa/payment integrations, and staging environment review."
            },
            {
              phase: "Stage 03",
              percent: "50% Final Handover",
              desc: "Paid upon final client satisfaction prior to pointing to the live domain. Source code, credentials, and 30-day warranty transfer."
            }
          ].map(p => (
            <div key={p.phase} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <span className="text-xs font-black uppercase text-brand-pink tracking-wider">{p.phase}</span>
              <h3 className="text-lg font-black text-white">{p.percent}</h3>
              <p className="text-zinc-300 text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Finance Connect CTA */}
      <div className="bg-zinc-950 border border-white/15 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-2xl font-black text-white uppercase tracking-tight">Need an Official Tax Invoice or Custom Billing?</h3>
          <p className="text-zinc-300 text-sm max-w-xl">
            For corporate contracts or bespoke purchase orders, connect directly with our studio operations desk.
          </p>
        </div>
        <a 
          href="https://wa.me/254798691594?text=Hi%20Stephen,%20I'm%20requesting%20an%20official%20invoice%20and%20payment%20details%20for%20my%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-full bg-white text-black font-extrabold uppercase text-xs tracking-wider hover:bg-brand-pink hover:text-white transition-all flex items-center space-x-2 whitespace-nowrap"
        >
          <MessageCircle size={15} />
          <span>Request Official Invoice</span>
        </a>
      </div>
    </div>
  );
}
