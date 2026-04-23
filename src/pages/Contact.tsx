import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MessageSquare, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: 'Custom Web/App Development',
    message: ''
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      // Success logic here
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <div className="pt-32 pb-20 space-y-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div>
            <h2 id="contact-heading" className="text-sm font-bold text-brand-pink uppercase tracking-widest mb-4">Connect With Us</h2>
            <h1 className="text-7xl font-bold tracking-tighter text-white uppercase leading-none">Let's build<br/><span className="text-gradient">the future.</span></h1>
          </div>
          
          <div className="space-y-8" role="complementary" aria-label="Contact Information">
            <a href="mailto:macreatives.global@gmail.com" className="flex items-center space-x-6 p-6 glass rounded-[2rem] hover:border-brand-pink/50 transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Mail size={24} aria-hidden="true" />
              </div>
              <div>
                <p className="text-gray-400 text-sm font-bold uppercase mb-1">Email Us</p>
                <p className="text-white text-xl font-medium tracking-tight">macreatives.global@gmail.com</p>
              </div>
            </a>

            <a href="https://wa.me/254798691594" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-6 p-6 glass rounded-[2rem] hover:border-brand-pink/50 transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <MessageSquare size={24} aria-hidden="true" />
              </div>
              <div>
                <p className="text-gray-400 text-sm font-bold uppercase mb-1">WhatsApp / Telegram</p>
                <p className="text-white text-xl font-medium tracking-tight">0798 691594</p>
              </div>
            </a>
          </div>

          <div className="pt-8">
            <p className="text-gray-100 font-bold mb-6 text-xl">Follow our expansion</p>
            <div className="flex flex-wrap gap-4" role="list">
              {[
                { icon: Github, label: 'GitHub' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' }
              ].map((social, i) => (
                <button 
                  key={i} 
                  aria-label={`Follow us on ${social.label}`}
                  className="p-4 rounded-xl glass hover:bg-gradient-brand hover:text-white transition-all transform active:scale-95"
                >
                  <social.icon size={24} aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="glass rounded-[3rem] p-10 md:p-16 relative overflow-hidden" role="form" aria-labelledby="form-heading">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/10 blur-[100px] rounded-full" />
          <h3 id="form-heading" className="text-3xl font-bold text-white mb-10 uppercase tracking-tighter">Send a project brief</h3>
          
          <AnimatePresence>
            {isSubmitted && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 z-20 glass flex flex-col items-center justify-center p-8 bg-black/60 backdrop-blur-strong text-center"
              >
                <div className="w-20 h-20 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-6">
                  <Send size={40} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2 uppercase">Brief Launched!</h4>
                <p className="text-gray-400">We've received your vision. Our strategists will review and reach out within 24 hours.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 px-8 py-3 rounded-xl glass border-white/20 text-white font-bold"
                >
                  Close
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-gray-400 uppercase ml-2 flex justify-between">
                  Full Name
                  {errors.name && <span className="text-brand-pink text-[10px] animate-pulse">{errors.name}</span>}
                </label>
                <input 
                  id="name"
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  className={cn(
                    "w-full p-5 rounded-2xl glass focus:outline-none focus:border-brand-pink transition-all text-white",
                    errors.name && "border-brand-pink/50 bg-brand-pink/5"
                  )} 
                  placeholder="Stephen Kung'u" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-gray-400 uppercase ml-2 flex justify-between">
                  Email Address
                  {errors.email && <span className="text-brand-pink text-[10px] animate-pulse">{errors.email}</span>}
                </label>
                <input 
                  id="email"
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  className={cn(
                    "w-full p-5 rounded-2xl glass focus:outline-none focus:border-brand-pink transition-all text-white",
                    errors.email && "border-brand-pink/50 bg-brand-pink/5"
                  )} 
                  placeholder="you@company.com" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-bold text-gray-400 uppercase ml-2">Project Subject</label>
              <div className="relative">
                <select 
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full p-5 rounded-2xl glass focus:outline-none focus:border-brand-pink transition-all text-white appearance-none cursor-pointer"
                >
                  <option>Custom Web/App Development</option>
                  <option>Marketing & Growth System</option>
                  <option>Branding & Creative Design</option>
                  <option>Partnership Inquiry</option>
                  <option>Ma Networld Inquiry</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 font-bold">↓</div>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-gray-400 uppercase ml-2 flex justify-between">
                Message
                {errors.message && <span className="text-brand-pink text-[10px] animate-pulse">{errors.message}</span>}
              </label>
              <textarea 
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                aria-required="true"
                aria-invalid={!!errors.message}
                className={cn(
                  "w-full p-5 rounded-2xl glass focus:outline-none focus:border-brand-pink transition-all min-h-[150px] text-white",
                  errors.message && "border-brand-pink/50 bg-brand-pink/5"
                )} 
                placeholder="Describe your vision..." 
              />
            </div>
            <button 
              type="submit" 
              className="w-full py-6 rounded-2xl bg-gradient-brand text-white font-black text-xl hover:scale-[1.02] transition-all flex items-center justify-center space-x-3 shadow-xl active:scale-95 disabled:opacity-50"
              aria-label="Send project brief"
            >
              <span>Launch Brief</span>
              <Send size={24} aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
