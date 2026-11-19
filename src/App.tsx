/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from '@/src/components/Navigation.tsx';
import Home from '@/src/pages/Home.tsx';
import { MessageCircle, Loader2 } from 'lucide-react';

// Code-split other pages for ultra-fast initial load times
const Services = lazy(() => import('@/src/pages/Services.tsx'));
const Portfolio = lazy(() => import('@/src/pages/Portfolio.tsx'));
const Projects = lazy(() => import('@/src/pages/Projects.tsx'));
const Shop = lazy(() => import('@/src/pages/Shop.tsx'));
const Marketplace = lazy(() => import('@/src/pages/Marketplace.tsx'));
const Communities = lazy(() => import('@/src/pages/Communities.tsx'));
const CommunityDetail = lazy(() => import('@/src/pages/CommunityDetail.tsx'));
const MaNetworld = lazy(() => import('@/src/pages/MaNetworld.tsx'));
const InnovationLab = lazy(() => import('@/src/pages/InnovationLab.tsx'));
const Ventures = lazy(() => import('@/src/pages/Ventures.tsx'));
const Pricing = lazy(() => import('@/src/pages/Pricing.tsx'));
const Payments = lazy(() => import('@/src/pages/Payments.tsx'));
const About = lazy(() => import('@/src/pages/About.tsx'));
const Contact = lazy(() => import('@/src/pages/Contact.tsx'));
const Dashboard = lazy(() => import('@/src/pages/Dashboard.tsx'));
const Events = lazy(() => import('@/src/pages/Events.tsx'));
const Funding = lazy(() => import('@/src/pages/Funding.tsx'));
const VendorDashboard = lazy(() => import('@/src/pages/VendorDashboard.tsx'));
const VendorRegistration = lazy(() => import('@/src/pages/VendorRegistration.tsx'));

function PageLoader() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4">
      <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center text-white shadow-xl animate-pulse">
        <span className="font-black italic text-xl">MA</span>
      </div>
      <div className="flex items-center space-x-2 text-xs font-mono tracking-widest uppercase text-gray-500">
        <Loader2 size={14} className="animate-spin text-brand-pink" />
        <span>Loading Node...</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black overflow-x-hidden selection:bg-brand-pink/30 relative">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<PageLoader />}>
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
          </Suspense>
        </main>
        <Footer />

        {/* WhatsApp Float Button with Context */}
        <a 
          href="https://wa.me/254798691594?text=Hi%20Stephen,%20I'm%20exploring%20Ma%20Creatives%20Studio%20and%20want%20to%20build%20with%20you!" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Chat with Stephen on WhatsApp"
          className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95"
        >
          <MessageCircle size={32} />
          <span className="absolute -top-2 -right-2 w-4 h-4 bg-brand-pink rounded-full border-2 border-white animate-pulse" />
        </a>
      </div>
    </Router>
  );
}
