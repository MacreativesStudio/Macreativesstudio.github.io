import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter, Instagram, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import { cn } from '@/src/lib/utils.ts';

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    budget: 'KES 30,000 – 75,000',
    subject: 'Custom Web & Mobile Development',
    message: ''
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.message.trim()) newErrors.message = 'Project description cannot be empty';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formattedWhatsAppMessage = encodeURIComponent(
    `*NEW PROJECT BRIEF — MA CREATIVES STUDIO*\n\n` +
    `*Client Name:* ${formData.name}\n` +
    `*Email:* ${formData.email}\n` +
    `*Phone:* ${formData.phone || 'Not provided'}\n` +
    `*Service:* ${formData.subject}\n` +
    `*Budget Tier:* ${formData.budget}\n\n` +
    `*Project Brief:* ${formData.message}`
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      // Automatically redirect to WhatsApp with the formatted brief
      setTimeout(() => {
        window.open(`https://wa.me/254798691594?text=${formattedWhatsAppMessage}`, '_blank');
      }, 800);
    }
  };

  return (
    <div className="pt-32 pb-24 space-y-20 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
        {/* Left Column: Contact Channels & Founder Connect */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-brand-pink mb-4">
              <Sparkles size={12} />
              <span>Direct Client Onboarding</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-none">
              Let's Build <br/><span className="text-gradient">The Future.</span>
            </h1>
            <p className="text-zinc-300 text-base md:text-lg mt-4 leading-relaxed">
              Have an ambitious vision? We turn ideas into commercial digital products with speed, precision, and world-class craft.
            </p>
          </div>
          
          <div className="space-y-4" role="complementary" aria-label="Contact Channels">
            {/* Direct WhatsApp Channel */}
            <a 
              href="https://wa.me/254798691594?text=Hi%20Stephen,%20I'm%20reaching%20out%20to%20start%20a%20project%20with%20Ma%20Creatives%20Studio" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-5 p-5 rounded-3xl bg-zinc-950 border border-white/15 hover:border-green-500/50 hover:bg-zinc-900 transition-all group shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-500/15 border border-green-500/30 flex items-center justify-center text-green-400 group-hover:scale-105 transition-transform">
                <MessageSquare size={26} aria-hidden="true" />
              </div>
              <div>
                <p className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-0.5">Instant WhatsApp / Call</p>
                <p className="text-white text-lg font-bold tracking-tight">+254 798 691594</p>
                <p className="text-[11px] text-green-400 font-semibold">Stephen Kimaru (Founder & CEO)</p>
              </div>
            </a>

            {/* Email Channel */}
            <a 
              href="mailto:macreatives.global@gmail.com" 
              className="flex items-center space-x-5 p-5 rounded-3xl bg-zinc-950 border border-white/15 hover:border-brand-pink/50 hover:bg-zinc-900 transition-all group shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                <Mail size={24} aria-hidden="true" />
              </div>
              <div className="overflow-hidden">
                <p className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-0.5">Official Studio Inbox</p>
                <p className="text-white text-base md:text-lg font-bold tracking-tight truncate">macreatives.global@gmail.com</p>
                <p className="text-[11px] text-zinc-400">Response within 24 hours guaranteed</p>
              </div>
            </a>
          </div>

          <div className="pt-2">
            <p className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-4">Follow the Studio Expansion</p>
            <div className="flex space-x-3">
              {[
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' }
              ].map((social) => (
                <a 
                  key={social.label} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-zinc-950 border border-white/15 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                >
                  <social.icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Project Brief Form */}
        <div className="lg:col-span-7 bg-zinc-950 border border-white/15 rounded-[3rem] p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/15 blur-[100px] pointer-events-none" />
          
          <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
            Launch Your Project Brief
          </h3>
          <p className="text-zinc-400 text-sm mb-8">
            Tell us about your brand, requirements, and timeline.
          </p>

          <AnimatePresence>
            {isSubmitted && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-6 rounded-2xl bg-green-500/10 border border-green-500/30 text-center mb-6 space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={28} />
                </div>
                <h4 className="text-xl font-black text-white uppercase tracking-tight">Brief Dispatched!</h4>
                <p className="text-zinc-300 text-xs leading-relaxed max-w-md mx-auto">
                  Your project details have been formatted. Opening WhatsApp to connect directly with Stephen...
                </p>
                <a 
                  href={`https://wa.me/254798691594?text=${formattedWhatsAppMessage}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2.5 rounded-full bg-[#25D366] text-black font-extrabold text-xs uppercase tracking-wider"
                >
                  Click Here if WhatsApp Did Not Open
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex justify-between">
                  <span>Your Full Name *</span>
                  {errors.name && <span className="text-brand-pink text-[10px] lowercase">{errors.name}</span>}
                </label>
                <input 
                  id="name"
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={cn(
                    "w-full p-4 rounded-2xl bg-zinc-900 border text-white text-sm outline-none transition-colors",
                    errors.name ? "border-brand-pink" : "border-white/10 focus:border-brand-pink"
                  )} 
                  placeholder="e.g. Stephen Kung'u" 
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex justify-between">
                  <span>Email Address *</span>
                  {errors.email && <span className="text-brand-pink text-[10px] lowercase">{errors.email}</span>}
                </label>
                <input 
                  id="email"
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={cn(
                    "w-full p-4 rounded-2xl bg-zinc-900 border text-white text-sm outline-none transition-colors",
                    errors.email ? "border-brand-pink" : "border-white/10 focus:border-brand-pink"
                  )} 
                  placeholder="name@business.com" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                  Phone / WhatsApp Number
                </label>
                <input 
                  id="phone"
                  type="text" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full p-4 rounded-2xl bg-zinc-900 border border-white/10 focus:border-brand-pink text-white text-sm outline-none transition-colors"
                  placeholder="+254 700 000000" 
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="budget" className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                  Estimated Budget
                </label>
                <select 
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="w-full p-4 rounded-2xl bg-zinc-900 border border-white/10 focus:border-brand-pink text-white text-sm outline-none transition-colors cursor-pointer"
                >
                  <option>KES 15,000 – 30,000 (Launchpad)</option>
                  <option>KES 30,000 – 75,000 (Growth Suite)</option>
                  <option>KES 75,000 – 150,000 (Enterprise)</option>
                  <option>KES 150,000+ (Custom Ecosystem)</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                Primary Service Needed
              </label>
              <select 
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="w-full p-4 rounded-2xl bg-zinc-900 border border-white/10 focus:border-brand-pink text-white text-sm outline-none transition-colors cursor-pointer"
              >
                <option>Custom Web & Mobile Development</option>
                <option>M-Pesa E-Commerce Store</option>
                <option>Brand Identity & Creative Direction</option>
                <option>Growth Funnel & WhatsApp Automation</option>
                <option>Enterprise Software & Web3</option>
                <option>Incubation / Partnership Inquiry</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex justify-between">
                <span>Tell Us About Your Project *</span>
                {errors.message && <span className="text-brand-pink text-[10px] lowercase">{errors.message}</span>}
              </label>
              <textarea 
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={4}
                className={cn(
                  "w-full p-4 rounded-2xl bg-zinc-900 border text-white text-sm outline-none transition-colors",
                  errors.message ? "border-brand-pink" : "border-white/10 focus:border-brand-pink"
                )} 
                placeholder="Describe what you want to build, any inspirations, and your target launch date..." 
              />
            </div>

            <button 
              type="submit" 
              className="w-full py-4.5 rounded-2xl bg-gradient-brand text-white font-black text-sm uppercase tracking-wider hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center space-x-2 shadow-xl"
            >
              <span>Submit & Open In WhatsApp</span>
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
