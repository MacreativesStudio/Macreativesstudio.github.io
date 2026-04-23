import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Laptop, Rocket, Briefcase, ShoppingBag, 
  Users, Globe, FlaskConical, CreditCard, Info, Mail,
  LayoutDashboard, Layers, User, Search, Command,
  Twitter, Linkedin, Github, Instagram, Loader2
} from 'lucide-react';
import { cn } from '@/src/lib/utils.ts';

const navItems = [
  { name: 'Home', path: '/', icon: LayoutDashboard },
  { name: 'Services', path: '/services', icon: Rocket },
  { name: 'Portfolio', path: '/portfolio', icon: Briefcase },
  { name: 'Projects', path: '/projects', icon: Layers },
  { name: 'Market', path: '/marketplace', icon: ShoppingBag },
  { name: 'Dashboard', path: '/dashboard', icon: User },
  { name: 'Events', path: '/events', icon: Rocket },
  { name: 'Funding', path: '/funding', icon: Rocket },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isSearching, setIsSearching] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    if (searchQuery) {
      setIsSearching(true);
      const timer = setTimeout(() => {
        setIsSearching(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [searchQuery]);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        role="navigation"
        aria-label="Main Navigation"
        className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "h-16 bg-black/80 backdrop-blur-xl border-b border-white/5" 
          : "h-24 bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="flex items-center justify-between w-full">
            <Link 
              to="/" 
              aria-label="Ma Creatives Studio Home"
              className="flex items-center space-x-3 group relative"
            >
              <div className={cn(
                "rounded-[0.9rem] bg-gradient-brand flex items-center justify-center group-hover:rotate-[15deg] transition-all duration-700 shadow-xl relative z-10",
                isScrolled ? "w-9 h-9" : "w-11 h-11"
              )}>
                <span className={cn("text-white font-black italic", isScrolled ? "text-lg" : "text-2xl")}>MA</span>
                <div className="absolute -inset-1 rounded-2xl bg-gradient-brand opacity-0 group-hover:opacity-30 blur transition-opacity" />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className={cn(
                  "font-black tracking-tighter uppercase transition-all duration-500 text-white",
                  isScrolled ? "text-sm" : "text-lg"
                )}>
                  CREATIVES
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gradient">STUDIO</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1" role="menubar">
              <button 
                onClick={() => setIsSearchOpen(true)}
                aria-label="Open global search (Press Cmd+K to open)"
                className="group flex items-center space-x-2 px-4 py-2 mr-4 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white transition-all overflow-hidden"
              >
                <Search size={16} className="group-hover:scale-110 transition-transform" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-widest opacity-60">Search Project</span>
                <span className="ml-4 flex items-center space-x-1 text-[10px] bg-white/10 px-1.5 py-0.5 rounded border border-white/10">
                   <Command size={10} /> <span>K</span>
                </span>
              </button>

              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  role="menuitem"
                  aria-current={location.pathname === item.path ? "page" : undefined}
                  className={cn(
                    "px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 hover:text-white flex items-center space-x-2 group/nav",
                    location.pathname === item.path 
                      ? "bg-white/10 text-white shadow-xl" 
                      : "text-gray-500"
                  )}
                >
                  <item.icon size={12} className={cn("transition-transform group-hover/nav:scale-110", location.pathname === item.path ? "text-brand-pink" : "text-gray-600")} aria-hidden="true" />
                  <span>{item.name}</span>
                </Link>
              ))}
              <Link
                to="/contact"
                role="menuitem"
                className="ml-4 px-6 py-2 rounded-full bg-gradient-brand text-white text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_30px_-5px_rgba(147,51,234,0.4)]"
              >
                Join Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              <button 
                onClick={() => setIsSearchOpen(true)}
                aria-label="Open search"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-white"
              >
                <Search size={20} aria-hidden="true" />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-white"
              >
                {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              className="lg:hidden glass border-t border-white/5 absolute top-20 left-0 right-0"
              role="menu"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-colors",
                      location.pathname === item.path
                        ? "bg-gradient-brand text-white"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    <item.icon size={18} />
                    <span>{item.name}</span>
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center space-x-3 px-4 py-3 rounded-xl bg-white text-black font-black uppercase tracking-widest mt-4"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Global Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-start justify-center pt-32 px-4 bg-black/60 backdrop-blur-xl"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: -20 }}
              className="w-full max-w-2xl glass rounded-[2.5rem] p-8 shadow-2xl border border-white/10"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center space-x-4 mb-8">
                <Search className="text-brand-pink" size={24} />
                <input 
                  autoFocus
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search the ecosystem..."
                  className="w-full bg-transparent text-2xl font-bold text-white placeholder-gray-600 focus:outline-none"
                />
                <div className="flex items-center space-x-4">
                  {isSearching && <Loader2 size={24} className="text-brand-pink animate-spin" />}
                  <button 
                    onClick={() => setIsSearchOpen(false)}
                    className="p-2 rounded-xl hover:bg-white/5 text-gray-500"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 px-2">Quick Access</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {['Services', 'Portfolio', 'Shop', 'Communities'].map(item => (
                      <button key={item} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/5 transition-all group">
                         <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-brand-pink"><Command size={14} /></div>
                         <span className="text-gray-300 font-medium">{item}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Footer() {
  return (
    <footer className="glass border-t border-white/5 py-12 px-4 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center space-x-2 mb-6 text-2xl font-bold">
            <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center">
              <span className="text-white">MA</span>
            </div>
            <span>CREATIVES <span className="text-gradient">STUDIO</span></span>
          </Link>
          <div className="mb-6">
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.3em] block mb-2">The Philosophy</span>
            <p className="text-gray-400 max-w-md leading-relaxed">
              <span className="text-white font-bold italic">Ma (My)</span> Creatives Studio. A globally decentralized 
              ecosystem for elite designers, builders, and entrepreneurs.
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Explore</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/services" className="hover:text-brand-pink transition-colors">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-brand-pink transition-colors">Portfolio</Link></li>
            <li><Link to="/marketplace" className="hover:text-brand-pink transition-colors">Marketplace</Link></li>
            <li><Link to="/communities" className="hover:text-brand-pink transition-colors">Communities</Link></li>
          </ul>
        </div>

        <div>
           <h4 className="text-white font-bold mb-6">Connect</h4>
           <div className="text-gray-400 space-y-4">
              <p className="flex items-center space-x-3 group cursor-pointer hover:text-white transition-colors">
                <Mail size={18} className="text-brand-purple group-hover:scale-110 transition-transform" />
                <span>macreatives.global@gmail.com</span>
              </p>
              <div className="flex space-x-4 pt-4">
                {[
                  { icon: Twitter, color: 'hover:text-sky-400' },
                  { icon: Linkedin, color: 'hover:text-blue-500' },
                  { icon: Github, color: 'hover:text-white' },
                  { icon: Instagram, color: 'hover:text-pink-500' }
                ].map((social, i) => (
                  <button key={i} className={cn("p-2 rounded-lg bg-white/5 transition-all hover:bg-white/10 hover:scale-110 group/social", social.color)}>
                    <social.icon size={20} className="transition-transform group-hover/social:rotate-6" />
                  </button>
                ))}
              </div>
           </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
        <div className="space-y-4 md:space-y-0 md:flex md:items-center md:space-x-8">
          <p>© {new Date().getFullYear()} Ma Creatives Studio. All Rights Reserved.</p>
          <div className="flex space-x-6 font-bold uppercase tracking-widest">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
        
        {/* Ma Creatives Signature Footer System (MANDATORY) */}
        <div className="mt-8 md:mt-0 p-4 rounded-2xl glass border-brand-purple/20 group hover:border-brand-pink/50 transition-all duration-500">
          <a 
            href="https://macreativesstudio.github.io" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-3 group"
          >
            <span className="text-gray-400 font-medium">Need a website like this?</span>
            <span className="text-brand-pink font-black uppercase tracking-tighter text-sm group-hover:text-white transition-colors flex items-center">
              Talk to Ma Creatives
              <Rocket size={14} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
