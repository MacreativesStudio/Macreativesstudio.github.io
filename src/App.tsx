/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from '@/src/components/Navigation.tsx';
import Home from '@/src/pages/Home.tsx';
import Services from '@/src/pages/Services.tsx';
import Portfolio from '@/src/pages/Portfolio.tsx';
import Projects from '@/src/pages/Projects.tsx';
import Shop from '@/src/pages/Shop.tsx';
import Communities from '@/src/pages/Communities.tsx';
import MaNetworld from '@/src/pages/MaNetworld.tsx';
import InnovationLab from '@/src/pages/InnovationLab.tsx';
import Ventures from '@/src/pages/Ventures.tsx';
import Pricing from '@/src/pages/Pricing.tsx';
import Payments from '@/src/pages/Payments.tsx';
import About from '@/src/pages/About.tsx';
import Contact from '@/src/pages/Contact.tsx';
import Dashboard from '@/src/pages/Dashboard.tsx';
import Events from '@/src/pages/Events.tsx';
import Marketplace from '@/src/pages/Marketplace.tsx';
import Funding from '@/src/pages/Funding.tsx';
import VendorDashboard from '@/src/pages/VendorDashboard.tsx';
import VendorRegistration from '@/src/pages/VendorRegistration.tsx';
import CommunityDetail from '@/src/pages/CommunityDetail.tsx';
import { MessageCircle } from 'lucide-react';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black overflow-x-hidden selection:bg-brand-pink/30 relative">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/communities" element={<Communities />} />
            <Route path="/communities/:id" element={<CommunityDetail />} />
            <Route path="/manetworld" element={<MaNetworld />} />
            <Route path="/innovation" element={<InnovationLab />} />
            <Route path="/ventures" element={<Ventures />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/events" element={<Events />} />
            <Route path="/funding" element={<Funding />} />
            <Route path="/vendor/dashboard" element={<VendorDashboard />} />
            <Route path="/vendor/register" element={<VendorRegistration />} />
          </Routes>
        </main>
        <Footer />

        {/* WhatsApp Float Button */}
        <a 
          href="https://wa.me/254798691594" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95"
        >
          <MessageCircle size={32} />
          <span className="absolute -top-2 -right-2 w-4 h-4 bg-brand-pink rounded-full border-2 border-white animate-pulse" />
        </a>
      </div>
    </Router>
  );
}
