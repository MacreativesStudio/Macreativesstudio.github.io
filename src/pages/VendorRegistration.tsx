import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Store, ShieldCheck, Zap, ArrowRight, Upload, Briefcase, Mail, Phone, Sparkles, MessageCircle, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VendorRegistration() {
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    businessName: '',
    category: 'Digital Products & Code',
    description: '',
    email: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      setIsSubmitted(true);
      const msg = encodeURIComponent(
        `*VENDOR APPLICATION — MA CREATIVES MARKETPLACE*\n\n` +
        `*Business:* ${formData.businessName}\n` +
        `*Category:* ${formData.category}\n` +
        `*Description:* ${formData.description}\n` +
        `*Email:* ${formData.email}\n` +
        `*WhatsApp:* ${formData.phone}`
      );
      setTimeout(() => {
        window.open(`https://wa.me/254798691594?text=${msg}`, '_blank');
      }, 600);
    }
  };

  return (
    <div className="pt-32 pb-24 space-y-20 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-brand-pink">
          <Store size={13} />
           <span>Ecosystem Marketplace Expansion</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase leading-none">
          Launch Your <br/><span className="text-gradient">Vendor Store</span>
        </h1>
        <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
           Join the Ma Creatives marketplace as a verified seller and offer your digital tools, templates, or physical goods to our network.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Benefits Column */}
        <div className="md:col-span-5 space-y-8">
          <h3 className="text-2xl font-black text-white uppercase tracking-tight">Why Sell With Us?</h3>
          <div className="space-y-6">
            {[
              { title: "Pan-African & Global Reach", desc: "Gain instant distribution to our growing developer and founder community across Africa.", icon: Zap },
              { title: "Automated M-Pesa Payouts", desc: "Weekly scheduled revenue disbursements directly to your Safaricom M-Pesa or Bank.", icon: ShieldCheck },
              { title: "Zero Setup Cost", desc: "Keep 92% of all your sales. Flat 8% marketplace handling fee reinvested in community growth.", icon: Store },
            ].map((b, i) => (
              <div key={i} className="flex items-start space-x-4">
                 <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-pink shrink-0">
                    <b.icon size={22} />
                 </div>
                 <div className="space-y-1">
                    <h4 className="text-white font-bold text-sm uppercase tracking-tight">{b.title}</h4>
                    <p className="text-zinc-400 text-xs leading-relaxed">{b.desc}</p>
                 </div>
              </div>
            ))}
          </div>
          
          <div className="p-6 rounded-2xl bg-zinc-950 border border-white/15 space-y-2">
             <div className="text-xs font-black uppercase text-brand-pink tracking-wider">Verified Seller Badge</div>
             <p className="text-zinc-300 text-xs leading-relaxed">
               All approved partners receive a cryptographic verified vendor credential on their product listings.
             </p>
          </div>
        </div>

        {/* Application Form */}
        <div className="md:col-span-7 bg-zinc-950 border border-white/15 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden shadow-2xl">
           <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
              <h3 className="text-xl font-black text-white uppercase tracking-tight">Apply for Vendor Access</h3>
              <span className="text-xs font-bold text-brand-pink uppercase tracking-wider">Step {step} of 2</span>
           </div>

           <AnimatePresence>
             {isSubmitted && (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="p-6 rounded-2xl bg-green-500/10 border border-green-500/30 text-center mb-6 space-y-3"
               >
                 <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto">
                   <CheckCircle2 size={26} />
                 </div>
                 <h4 className="text-lg font-black text-white uppercase">Application Sent!</h4>
                 <p className="text-zinc-300 text-xs leading-relaxed">
                   Connecting with Stephen on WhatsApp to complete your vendor verification review...
                 </p>
               </motion.div>
             )}
           </AnimatePresence>

           <form className="space-y-5" onSubmit={handleSubmit}>
              {step === 1 ? (
                <div className="space-y-5">
                   <div className="space-y-1.5">
                     <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">Business / Brand Name *</label>
                     <input 
                       required 
                       type="text" 
                       value={formData.businessName}
                       onChange={e => setFormData({...formData, businessName: e.target.value})}
                       className="w-full p-4 rounded-xl bg-zinc-900 border border-white/15 text-white text-xs outline-none focus:border-brand-pink" 
                       placeholder="e.g. Creative Forge Studio" 
                     />
                   </div>

                   <div className="space-y-1.5">
                     <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">Primary Product Category</label>
                     <select 
                       value={formData.category}
                       onChange={e => setFormData({...formData, category: e.target.value})}
                       className="w-full p-4 rounded-xl bg-zinc-900 border border-white/15 text-white text-xs outline-none focus:border-brand-pink cursor-pointer"
                     >
                       <option>Digital Products & Code</option>
                       <option>UI Kits & Graphic Assets</option>
                       <option>Physical Lifestyle & Apparel</option>
                       <option>Hardware & Electronics</option>
                       <option>Educational Courses & Books</option>
                     </select>
                   </div>

                   <div className="space-y-1.5">
                     <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">Product Line Description *</label>
                     <textarea 
                       required 
                       value={formData.description}
                       onChange={e => setFormData({...formData, description: e.target.value})}
                       rows={4}
                       className="w-full p-4 rounded-xl bg-zinc-900 border border-white/15 text-white text-xs outline-none focus:border-brand-pink" 
                       placeholder="What products or digital tools do you want to list on the marketplace?" 
                     />
                   </div>

                   <button 
                     type="submit" 
                     className="w-full py-4 rounded-xl bg-gradient-brand text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-xl hover:scale-[1.01] transition-all"
                   >
                     <span>Continue to Contact Step</span>
                     <ArrowRight size={14} />
                   </button>
                </div>
              ) : (
                <div className="space-y-5">
                   <div className="space-y-1.5">
                     <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">Contact Email *</label>
                     <input 
                       required 
                       type="email" 
                       value={formData.email}
                       onChange={e => setFormData({...formData, email: e.target.value})}
                       className="w-full p-4 rounded-xl bg-zinc-900 border border-white/15 text-white text-xs outline-none focus:border-brand-pink" 
                       placeholder="store@business.com" 
                     />
                   </div>

                   <div className="space-y-1.5">
                     <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">WhatsApp / Phone Number *</label>
                     <input 
                       required 
                       type="text" 
                       value={formData.phone}
                       onChange={e => setFormData({...formData, phone: e.target.value})}
                       className="w-full p-4 rounded-xl bg-zinc-900 border border-white/15 text-white text-xs outline-none focus:border-brand-pink" 
                       placeholder="+254 700 000000" 
                     />
                   </div>

                   <div className="flex space-x-3 pt-2">
                      <button 
                        type="button" 
                        onClick={() => setStep(1)} 
                        className="px-6 py-4 rounded-xl bg-zinc-900 border border-white/15 text-zinc-300 font-bold text-xs uppercase tracking-wider"
                      >
                        Back
                      </button>
                      <button 
                        type="submit" 
                        className="flex-1 py-4 rounded-xl bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-brand-pink hover:text-white transition-all flex items-center justify-center space-x-2"
                      >
                        <MessageCircle size={15} />
                        <span>Submit & Verify on WhatsApp</span>
                      </button>
                   </div>
                </div>
              )}
           </form>
        </div>
      </div>
    </div>
  );
}
