import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Laptop, Rocket, Briefcase, ShoppingBag, 
  Users, Globe, FlaskConical, CreditCard, Info, Mail,
  LayoutDashboard, Layers, User, Search, Command,
  Twitter, Linkedin, Github, Instagram, ArrowRight,
  ExternalLink, Sparkles, MessageCircle, DollarSign
} from 'lucide-react';
import { cn } from '@/src/lib/utils.ts';

interface SearchItem {
  name: string;
  category: string;
  path: string;
  desc: string;
}

const searchableEcosystem: SearchItem[] = [
  { name: 'Services & Development', category: 'Agency', path: '/services', desc: 'Web & mobile app development, branding, growth systems' },
  { name: 'Portfolio & Case Studies', category: 'Showcase', path: '/portfolio', desc: 'Live client work, websites, enterprise infrastructure' },
  { name: 'Ecosystem Projects', category: 'Ventures', path: '/projects', desc: 'Internal builds including Cyber Donuts, Amaru, Read Your Bible' },
  { name: 'Creative Marketplace', category: 'Commerce', path: '/marketplace', desc: 'Digital assets, web generators, physical merchandise' },
  { name: 'Creative Store', category: 'Shop', path: '/shop', desc: 'Physical and digital lifestyle goods' },
  { name: 'Strategic Pricing', category: 'Packages', path: '/pricing', desc: 'Transparent website tiers, custom quotes, cost calculator' },
  { name: 'Ma Networld', category: 'Network', path: '/manetworld', desc: 'Decentralized creator network and global collaboration layer' },
  { name: 'Innovation Lab', category: 'Future Tech', path: '/innovation', desc: 'AI experiments, Web3 prototypes, rapid incubation' },
  { name: 'Ventures & Holdings', category: 'Investments', path: '/ventures', desc: 'Cyber Donuts, Fit-Creative, Ma Living, Ma Tech Retail' },
  { name: 'Communities', category: 'Network', path: '/communities', desc: 'Creators, developers, founders, and students hubs' },
  { name: 'Events & Workshops', category: 'Gatherings', path: '/events', desc: 'Tech demo days, creative masterclasses, summits' },
  { name: 'Global Payments', category: 'Billing', path: '/payments', desc: 'M-Pesa, card checkout, crypto, and invoice settlement' },
  { name: 'About Ma Creatives', category: 'Story', path: '/about', desc: 'Mission, vision, founder Stephen Kimaru Kung’u story' },
  { name: 'Contact & Project Brief', category: 'Inquiry', path: '/contact', desc: 'Submit brief or connect directly on WhatsApp' },
  { name: 'Project Funding', category: 'Crowdfunding', path: '/funding', desc: 'Back ecosystem ventures and expansion initiatives' },
  { name: 'Operator Dashboard', category: 'Account', path: '/dashboard', desc: 'User profile, order ledger, active memberships' },
];

const primaryNavItems = [
  { name: 'Home', path: '/', icon: LayoutDashboard },
  { name: 'Services', path: '/services', icon: Rocket },
  { name: 'Portfolio', path: '/portfolio', icon: Briefcase },
  { name: 'Pricing', path: '/pricing', icon: DollarSign },
  { name: 'Market', path: '/marketplace', icon: ShoppingBag },
  { name: 'Networld', path: '/manetworld', icon: Globe },
  { name: 'Ventures', path: '/ventures', icon: Sparkles },
  { name: 'About', path: '/about', icon: Info },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut Cmd+K / Ctrl+K
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter search results
  const searchResults = React.useMemo(() => {
    if (!searchQuery.trim()) return searchableEcosystem.slice(0, 6);
    const q = searchQuery.toLowerCase();
    return searchableEcosystem.filter(item => 
      item.name.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const handleSelectSearchResult = (path: string) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    navigate(path);
  };

  return (
    <>
      <nav 
        role="navigation"
        aria-label="Main Navigation"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "py-3 bg-black/90 backdrop-blur-2xl border-b border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.85)]" 
            : "py-5 bg-gradient-to-b from-black/95 via-black/80 to-transparent backdrop-blur-md border-b border-white/10"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo with High Contrast */}
            <Link 
              to="/" 
              aria-label="Ma Creatives Studio Home"
              className="flex items-center space-x-3 group relative"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center group-hover:scale-105 group-hover:rotate-6 transition-all duration-300 shadow-[0_0_20px_rgba(219,39,119,0.5)] border border-white/20">
                <span className="text-white font-black italic text-lg tracking-tighter">MA</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-tight uppercase text-white text-base leading-none group-hover:text-pink-400 transition-colors">
                  CREATIVES
                </span>
                <span className="text-[9px] font-black uppercase tracking-[0.35em] text-gradient mt-0.5">STUDIO</span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1" role="menubar">
              {primaryNavItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    role="menuitem"
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "px-3.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center space-x-1.5",
                      isActive 
                        ? "bg-white/20 text-white shadow-[0_0_15px_rgba(255,255,255,0.15)] border border-white/25" 
                        : "text-zinc-200 hover:text-white hover:bg-white/10"
                    )}
                  >
                    <item.icon size={13} className={cn("transition-colors", isActive ? "text-brand-pink" : "text-zinc-400")} aria-hidden="true" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Right Action Island */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Search Trigger Button */}
              <button 
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search Ecosystem (Cmd+K)"
                className="flex items-center space-x-2 px-3.5 py-2 rounded-full bg-zinc-900/90 border border-white/15 text-zinc-300 hover:text-white hover:border-white/30 hover:bg-zinc-800 transition-all shadow-sm"
              >
                <Search size={14} className="text-brand-pink" aria-hidden="true" />
                <span className="text-xs font-semibold">Search</span>
                <span className="flex items-center space-x-0.5 text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-zinc-400 border border-white/10">
                   <Command size={10} /> <span>K</span>
                </span>
              </button>

              {/* Start Project CTA Button */}
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-full bg-gradient-brand text-white text-xs font-black uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-[0_0_25px_rgba(219,39,119,0.4)] border border-white/20 flex items-center space-x-1.5"
              >
                <span>Start Project</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="lg:hidden flex items-center space-x-2">
              <button 
                onClick={() => setIsSearchOpen(true)}
                aria-label="Open search"
                className="p-2.5 rounded-xl bg-zinc-900 border border-white/15 text-zinc-200 hover:text-white"
              >
                <Search size={18} aria-hidden="true" />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
                className="p-2.5 rounded-xl bg-zinc-900 border border-white/15 text-zinc-200 hover:text-white"
              >
                {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden bg-zinc-950/95 backdrop-blur-2xl border-t border-b border-white/15 px-4 py-6 mt-3 shadow-2xl"
              role="menu"
            >
              <div className="grid grid-cols-2 gap-2 mb-6">
                {[...primaryNavItems, 
                  { name: 'Innovation', path: '/innovation', icon: FlaskConical },
                  { name: 'Communities', path: '/communities', icon: Users },
                  { name: 'Events', path: '/events', icon: Rocket },
                  { name: 'Funding', path: '/funding', icon: CreditCard },
                ].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center space-x-2.5 px-3 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors border",
                      location.pathname === item.path
                        ? "bg-gradient-brand text-white border-transparent"
                        : "bg-white/5 text-zinc-200 border-white/10 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    <item.icon size={15} className="text-brand-pink shrink-0" />
                    <span className="truncate">{item.name}</span>
                  </Link>
                ))}
              </div>

              <div className="flex flex-col space-y-2.5 pt-2 border-t border-white/10">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center space-x-2 w-full py-3.5 rounded-xl bg-gradient-brand text-white font-black uppercase text-xs tracking-wider shadow-lg"
                >
                  <span>Launch Project Brief</span>
                  <ArrowRight size={14} />
                </Link>
                <a
                  href="https://wa.me/254798691594?text=Hi%20Stephen,%20I'm%20reaching%20out%20from%20macreatives.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-zinc-900 border border-white/15 text-green-400 font-bold uppercase text-xs tracking-wider hover:bg-zinc-800"
                >
                  <MessageCircle size={15} />
                  <span>Chat on WhatsApp (0798 691594)</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Global Interactive Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-start justify-center pt-24 md:pt-32 px-4 bg-black/80 backdrop-blur-2xl"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: -20 }}
              className="w-full max-w-2xl bg-zinc-950 border border-white/20 rounded-3xl p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.9)] space-y-6"
              onClick={e => e.stopPropagation()}
            >
              {/* Search Bar Input */}
              <div className="flex items-center space-x-3 pb-4 border-b border-white/15">
                <Search className="text-brand-pink shrink-0" size={22} />
                <input 
                  autoFocus
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services, portfolio, marketplace, ventures..."
                  className="w-full bg-transparent text-lg md:text-xl font-bold text-white placeholder-zinc-500 focus:outline-none"
                />
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Search Results List */}
              <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1 no-scrollbar">
                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest px-2 mb-2">
                  {searchQuery ? `Matching Results (${searchResults.length})` : 'Popular Destinations'}
                </div>

                {searchResults.length === 0 ? (
                  <div className="p-8 text-center text-zinc-500 text-sm">
                    No matching ecosystem items found for "{searchQuery}".
                  </div>
                ) : (
                  searchResults.map(item => (
                    <button
                      key={item.path}
                      onClick={() => handleSelectSearchResult(item.path)}
                      className="w-full text-left p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-brand-pink/40 transition-all flex items-center justify-between group"
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-bold text-white group-hover:text-brand-pink transition-colors">
                            {item.name}
                          </span>
                          <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-white/10 text-zinc-300">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400 line-clamp-1">{item.desc}</p>
                      </div>
                      <ArrowRight size={14} className="text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                    </button>
                  ))
                )}
              </div>

              <div className="flex justify-between items-center pt-2 text-[11px] text-zinc-500 border-t border-white/10 px-1">
                <span>Tip: Use <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-zinc-300">ESC</kbd> to exit</span>
                <span className="text-brand-pink font-semibold">Ma Creatives Studio Ecosystem</span>
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
    <footer className="bg-zinc-950 border-t border-white/15 py-16 px-4 mt-28 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-pink/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 relative z-10">
        {/* Brand identity column */}
        <div className="md:col-span-2 space-y-6">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-brand flex items-center justify-center shadow-lg border border-white/20">
              <span className="text-white font-black italic text-xl">MA</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-lg font-black uppercase tracking-tight">CREATIVES</span>
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-gradient">STUDIO</span>
            </div>
          </Link>

          <p className="text-zinc-300 text-sm leading-relaxed max-w-sm">
            <strong className="text-white">Ma (My) Creatives Studio.</strong> An African-rooted, globally recognized innovation ecosystem building high-converting websites, digital products, and real-world ventures.
          </p>

          <div className="flex items-center space-x-3 text-xs text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Open for new client briefs & enterprise partnerships</span>
          </div>
        </div>

        {/* Column 1: Core Divisions */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-xs uppercase tracking-wider">Ecosystem</h4>
          <ul className="space-y-2.5 text-sm text-zinc-400 font-medium">
            <li><Link to="/services" className="hover:text-white transition-colors">Services & Dev</Link></li>
            <li><Link to="/portfolio" className="hover:text-white transition-colors">Proven Portfolio</Link></li>
            <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing & Packages</Link></li>
            <li><Link to="/marketplace" className="hover:text-white transition-colors">Marketplace</Link></li>
            <li><Link to="/shop" className="hover:text-white transition-colors">Creative Store</Link></li>
          </ul>
        </div>

        {/* Column 2: Innovation & Community */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-xs uppercase tracking-wider">Network</h4>
          <ul className="space-y-2.5 text-sm text-zinc-400 font-medium">
            <li><Link to="/manetworld" className="hover:text-white transition-colors">Ma Networld</Link></li>
            <li><Link to="/innovation" className="hover:text-white transition-colors">Innovation Lab</Link></li>
            <li><Link to="/ventures" className="hover:text-white transition-colors">Lifestyle Ventures</Link></li>
            <li><Link to="/communities" className="hover:text-white transition-colors">Communities</Link></li>
            <li><Link to="/events" className="hover:text-white transition-colors">Events & Summits</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact & Direct Connect */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-xs uppercase tracking-wider">Connect</h4>
          <div className="space-y-3 text-sm text-zinc-300">
            <a 
              href="mailto:macreatives.global@gmail.com" 
              className="flex items-center space-x-2 hover:text-white transition-colors"
            >
              <Mail size={15} className="text-brand-pink shrink-0" />
              <span className="truncate">macreatives.global@gmail.com</span>
            </a>
            <a 
              href="https://wa.me/254798691594" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
            >
              <MessageCircle size={15} className="shrink-0" />
              <span>+254 798 691594 (WhatsApp)</span>
            </a>
          </div>

          <div className="flex space-x-2 pt-2">
            {[
              { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
            ].map((s) => (
              <a 
                key={s.label}
                href={s.href} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <s.icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar with Mandatory Signature */}
      <div className="max-w-7xl mx-auto pt-10 mt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-zinc-400">
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
          <p>© {new Date().getFullYear()} Ma Creatives Studio. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <Link to="/about" className="hover:text-white transition-colors">Our Story</Link>
            <span>•</span>
            <Link to="/payments" className="hover:text-white transition-colors">Payments & Terms</Link>
          </div>
        </div>

        {/* Mandatory Signature Footer Box */}
        <div className="p-3.5 px-6 rounded-2xl bg-zinc-900/90 border border-brand-pink/30 hover:border-brand-pink shadow-[0_0_20px_rgba(219,39,119,0.2)] transition-all">
          <a 
            href="https://macreatives.studio" 
            className="flex items-center space-x-2 text-zinc-200 hover:text-white transition-colors"
          >
            <span>Need a website like this?</span>
            <span className="text-brand-pink font-black uppercase text-xs tracking-wider flex items-center hover:underline">
              Talk to Ma Creatives
              <Rocket size={13} className="ml-1" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
