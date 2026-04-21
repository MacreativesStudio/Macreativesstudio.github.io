import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MessageSquare, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-20 space-y-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div>
            <h2 className="text-sm font-bold text-brand-pink uppercase tracking-widest mb-4">Connect With Us</h2>
            <h1 className="text-7xl font-bold tracking-tighter text-white uppercase leading-none">Let's build<br/><span className="text-gradient">the future.</span></h1>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center space-x-6 p-6 glass rounded-[2rem] hover:border-brand-pink/50 transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm font-bold uppercase mb-1">Email Us</p>
                <p className="text-white text-xl font-medium tracking-tight">macreatives.global@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-6 p-6 glass rounded-[2rem] hover:border-brand-pink/50 transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <MessageSquare size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm font-bold uppercase mb-1">WhatsApp / Telegram</p>
                <p className="text-white text-xl font-medium tracking-tight">0798 691594</p>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <p className="text-gray-100 font-bold mb-6 text-xl">Follow our expansion</p>
            <div className="flex flex-wrap gap-4">
              {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
                <button key={i} className="p-4 rounded-xl glass hover:bg-gradient-brand hover:text-white transition-all">
                  <Icon size={24} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="glass rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/10 blur-[100px] rounded-full" />
          <h3 className="text-3xl font-bold text-white mb-10 uppercase tracking-tighter">Send a project brief</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase ml-2">Full Name</label>
                <input type="text" className="w-full p-5 rounded-2xl glass focus:outline-none focus:border-brand-pink transition-all text-white" placeholder="Stephen Kung'u" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase ml-2">Email Address</label>
                <input type="email" className="w-full p-5 rounded-2xl glass focus:outline-none focus:border-brand-pink transition-all text-white" placeholder="you@company.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 uppercase ml-2">Project Subject</label>
              <select className="w-full p-5 rounded-2xl glass focus:outline-none focus:border-brand-pink transition-all text-white appearance-none">
                <option>Custom Web/App Development</option>
                <option>Marketing & Growth System</option>
                <option>Branding & Creative Design</option>
                <option>Partnership Inquiry</option>
                <option>Ma Networld Inquiry</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 uppercase ml-2">Message</label>
              <textarea className="w-full p-5 rounded-2xl glass focus:outline-none focus:border-brand-pink transition-all min-h-[150px] text-white" placeholder="Describe your vision..." />
            </div>
            <button type="submit" className="w-full py-6 rounded-2xl bg-gradient-brand text-white font-black text-xl hover:scale-[1.02] transition-all flex items-center justify-center space-x-3 shadow-xl">
              <span>Launch Brief</span>
              <Send size={24} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
