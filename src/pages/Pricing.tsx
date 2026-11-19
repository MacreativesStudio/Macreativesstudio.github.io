import React from 'react';
import { motion } from 'motion/react';
import { Check, ShieldCheck, ArrowRight, MessageCircle, HelpCircle, Sparkles, DollarSign } from 'lucide-react';

const plans = [
  {
    name: "Launchpad",
    price: "KES 18,500",
    period: "one-time",
    badge: "Fastest Delivery (48h - 72h)",
    desc: "Engineered for emerging entrepreneurs, personal brands, and local businesses wanting a high-converting digital storefront.",
    features: [
      "Custom 1–3 Page Responsive Build",
      "Mobile-First Speed & Performance",
      "Direct WhatsApp Conversion System",
      "Google Business & Maps Setup",
      "Domain & Cloud Hosting Configuration",
      "30-Day Technical Warranty & Support"
    ],
    btnText: "Order Launchpad",
    popular: false,
    whatsappMsg: "Hi Stephen, I want to order the Launchpad Package (KES 18,500)."
  },
  {
    name: "Growth Suite",
    price: "KES 45,000",
    period: "one-time",
    badge: "Most Popular",
    desc: "Our flagship comprehensive package for scaling businesses that need automated leads, M-Pesa payments, and search engine dominance.",
    features: [
      "Full Multi-Page Website Architecture (Up to 8 Pages)",
      "Automated M-Pesa STK Push Integration",
      "Complete Search Engine Optimization (SEO)",
      "Lead Capture Funnels & Contact Dashboard",
      "Interactive Product / Portfolio Showcase",
      "WhatsApp & Social Media Funnel Integration",
      "60-Day Dedicated Support & Analytics Report"
    ],
    btnText: "Start Growth Phase",
    popular: true,
    whatsappMsg: "Hi Stephen, I want to order the Growth Suite Package (KES 45,000)."
  },
  {
    name: "Enterprise Ecosystem",
    price: "KES 110,000+",
    period: "custom scope",
    badge: "Full Ecosystem Architecture",
    desc: "Complete digital infrastructure for corporations, fintech, marketplace platforms, and multi-industry ventures.",
    features: [
      "Custom Web App & Software Engineering",
      "Marketplace & Multi-Vendor Capability",
      "Database & Custom API Architecture",
      "Multi-Currency & Global Crypto Payment Gateways",
      "Advanced Admin / Operator Analytics Portal",
      "Innovation Lab Prototyping Priority",
      "Ongoing Monthly Engineering Retainer"
    ],
    btnText: "Build Enterprise Suite",
    popular: false,
    whatsappMsg: "Hi Stephen, I want to discuss an Enterprise Ecosystem Project (KES 110,000+)."
  }
];

const faqs = [
  {
    q: "How fast will my website be live?",
    a: "Launchpad websites are delivered in 48 to 72 hours. Growth Suite projects typically take 7 to 14 business days depending on content readiness. Enterprise software timelines are scoped per milestone."
  },
  {
    q: "How does the payment schedule work?",
    a: "We work on a transparent milestone structure: 50% deposit to initiate architecture and design sprints, and the remaining 50% upon final client sign-off before official domain launch."
  },
  {
    q: "Do you integrate M-Pesa and local Kenyan payment methods?",
    a: "Yes! We specialize in seamless M-Pesa STK push, Till/Paybill integrations, Card checkouts (Visa/Mastercard), and international gateways like PayPal, Stripe, and Crypto."
  },
  {
    q: "Do I own 100% of my website code and assets?",
    a: "Absolutely. Upon project completion, you retain 100% intellectual property, full GitHub source code access, and domain ownership. No vendor lock-in."
  }
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="pt-32 pb-24 space-y-24">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 px-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-brand-pink">
          <DollarSign size={13} />
          <span>Strategic Investment</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase leading-none">
          Transparent <br/><span className="text-gradient">Pricing & Packages</span>
        </h1>
        <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
          High-performance engineering designed for maximum ROI. Choose a package tailored for your current growth phase.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
        {plans.map((plan) => (
          <div 
            key={plan.name}
            className={`rounded-[2.5rem] p-1 flex flex-col transition-all duration-300 ${
              plan.popular 
                ? 'bg-gradient-brand shadow-[0_0_40px_rgba(219,39,119,0.3)] scale-[1.02]' 
                : 'bg-white/10 hover:border-white/30'
            }`}
          >
            <div className="bg-zinc-950 rounded-[2.4rem] p-8 md:p-10 flex-1 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-pink block mb-1">
                      {plan.badge}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">{plan.name}</h3>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-4xl md:text-5xl font-black text-white tracking-tight">{plan.price}</div>
                  <span className="text-xs text-zinc-400 uppercase font-semibold">{plan.period}</span>
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed border-t border-white/10 pt-4">
                  {plan.desc}
                </p>

                <div className="space-y-3 pt-2">
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-zinc-400">Included Deliverables:</div>
                  {plan.features.map(f => (
                    <div key={f} className="flex items-start space-x-2.5 text-zinc-300 text-xs">
                      <div className="p-0.5 rounded-full bg-white/10 text-brand-pink shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="leading-snug">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <a
                  href={`https://wa.me/254798691594?text=${encodeURIComponent(plan.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-2xl font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all ${
                    plan.popular 
                      ? 'bg-gradient-brand text-white hover:scale-105 shadow-xl' 
                      : 'bg-white text-black hover:bg-brand-pink hover:text-white'
                  }`}
                >
                  <MessageCircle size={15} />
                  <span>{plan.btnText}</span>
                </a>
                <div className="text-center text-[10px] text-zinc-400 uppercase font-bold tracking-wider">
                  Deposit via M-Pesa / Bank
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust & Guarantee Banner */}
      <div className="mx-4 bg-zinc-950 border border-white/15 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
        <div className="w-20 h-20 rounded-2xl bg-gradient-brand flex items-center justify-center text-white shrink-0 shadow-xl">
          <ShieldCheck size={40} />
        </div>
        <div className="flex-1 space-y-2 text-center md:text-left">
          <h3 className="text-2xl font-black text-white uppercase tracking-tight">The Value-First Commitment</h3>
          <p className="text-zinc-300 text-sm md:text-base leading-relaxed max-w-2xl">
            We don’t just deliver lines of code; we deliver digital engines that generate revenue. Every project includes a Strategic Intake Brief to ensure your investment drives measurable results.
          </p>
        </div>
        <a 
          href="https://wa.me/254798691594?text=Hi%20Stephen,%20I'd%20like%20a%20custom%20pricing%20consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-brand-pink hover:text-white transition-all whitespace-nowrap"
        >
          Custom Quote Consultation
        </a>
      </div>

      {/* FAQ Accordion */}
      <section className="max-w-4xl mx-auto space-y-6 px-4">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-3xl font-black text-white uppercase tracking-tight">Frequently Asked Questions</h2>
          <p className="text-zinc-400 text-sm">Everything you need to know about working with Ma Creatives Studio.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex justify-between items-center text-white font-bold text-sm md:text-base hover:text-brand-pink transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-brand-pink font-extrabold text-lg ml-4">
                  {openFaq === idx ? '−' : '+'}
                </span>
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-zinc-300 text-sm leading-relaxed border-t border-white/5 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
