import React from 'react';
import { motion } from 'motion/react';
import { Store, ShieldCheck, Zap, ArrowRight, Upload, Briefcase, Mail, Phone } from 'lucide-react';

export default function VendorRegistration() {
  const [step, setStep] = React.useState(1);

  return (
    <div className="pt-32 pb-20 space-y-20">
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-pink text-xs font-bold uppercase tracking-widest">
           Ecosystem Expansion
        </div>
        <h1 className="text-6xl font-bold tracking-tighter text-white uppercase leading-none">
          Launch Your <br/><span className="text-gradient">Ecosystem Store</span>
        </h1>
        <p className="text-gray-400 text-lg">
           Join the "Ma Creatives" marketplace as a verified vendor and reach 
           a global audience of innovative creators and businesses.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Benefits */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Why sell with us?</h3>
            <div className="space-y-6">
              {[
                { title: "Global Reach", desc: "Access the entire Ma Networld network instantly.", icon: Zap },
                { title: "Automated Payouts", desc: "Scheduled earnings directly to your preferred method.", icon: ShieldCheck },
                { title: "Ecosystem Tools", desc: "Advanced analytics and CRM for your customers.", icon: Store },
              ].map((b, i) => (
                <div key={i} className="flex items-start space-x-6 group">
                   <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-pink group-hover:bg-gradient-brand group-hover:text-white transition-all">
                      <b.icon size={20} />
                   </div>
                   <div className="space-y-1">
                      <h4 className="text-white font-bold uppercase text-sm tracking-tight">{b.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
                   </div>
                </div>
              ))}
            </div>
            
            <div className="glass p-8 rounded-[2rem] border-t-2 border-brand-purple">
               <p className="text-gray-300 italic text-sm">
                 "Our marketplace fee is a flat 8% which goes directly into powering 
                 innovation and supporting community initiatives."
               </p>
            </div>
          </div>

          {/* Registration Form */}
          <div className="glass p-10 rounded-[3rem] border border-white/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/10 blur-3xl pointer-events-none" />
             <div className="relative z-10 space-y-8">
                <div className="flex justify-between items-center">
                   <h3 className="text-xl font-bold text-white uppercase tracking-widest">Apply Now</h3>
                   <span className="text-xs font-bold text-gray-500">Step {step} of 2</span>
                </div>

                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); if(step < 2) setStep(2); }}>
                   {step === 1 ? (
                     <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                     >
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-gray-400 uppercase ml-2 tracking-widest">Business Name</label>
                          <input required type="text" className="w-full p-4 rounded-xl glass focus:outline-none focus:border-brand-pink transition-all text-white text-sm" placeholder="e.g. Creative Forge" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-gray-400 uppercase ml-2 tracking-widest">Store Category</label>
                          <select className="w-full p-4 rounded-xl glass focus:outline-none focus:border-brand-pink transition-all text-white text-sm appearance-none">
                            <option>Digital Products</option>
                            <option>Physical Crafts</option>
                            <option>Electronics & Tech</option>
                            <option>Lifestyle & Fashion</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-gray-400 uppercase ml-2 tracking-widest">Brief Description</label>
                          <textarea required className="w-full p-4 rounded-xl glass focus:outline-none focus:border-brand-pink transition-all text-white text-sm min-h-[100px]" placeholder="What makes your store unique?" />
                        </div>
                        <button type="submit" className="w-full py-5 rounded-xl bg-gradient-brand text-white font-black text-sm uppercase tracking-widest hover:scale-[1.02] transition-all flex items-center justify-center space-x-2">
                          <span>Continue Application</span>
                          <ArrowRight size={16} />
                        </button>
                     </motion.div>
                   ) : (
                     <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                     >
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-gray-400 uppercase ml-2 tracking-widest">Contact Email</label>
                          <input required type="email" className="w-full p-4 rounded-xl glass focus:outline-none focus:border-brand-pink transition-all text-white text-sm" placeholder="vendor@example.com" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-gray-400 uppercase ml-2 tracking-widest">Phone Number (WhatsApp)</label>
                          <input required type="text" className="w-full p-4 rounded-xl glass focus:outline-none focus:border-brand-pink transition-all text-white text-sm" placeholder="+254..." />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-gray-400 uppercase ml-2 tracking-widest">Identity Verification (ID/Passport)</label>
                          <div className="w-full p-8 rounded-xl border-2 border-dashed border-white/10 hover:border-brand-pink/50 transition-colors flex flex-col items-center justify-center space-y-2 cursor-pointer bg-white/5">
                             <Upload size={24} className="text-gray-500" />
                             <span className="text-xs text-gray-400">Click to upload document</span>
                          </div>
                        </div>
                        <div className="flex space-x-4 pt-4">
                           <button onClick={() => setStep(1)} className="flex-1 py-4 rounded-xl glass text-white font-bold text-xs uppercase tracking-widest">Back</button>
                           <button onClick={() => alert('Application Submitted!')} className="flex-[2] py-4 rounded-xl bg-white text-black font-black text-xs uppercase tracking-widest hover:bg-brand-pink hover:text-white transition-all">Submit Brief</button>
                        </div>
                     </motion.div>
                   )}
                </form>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
