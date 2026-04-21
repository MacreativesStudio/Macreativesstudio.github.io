import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Store, Package, TrendingUp, Banknote, Plus, 
  Edit3, Trash2, LayoutDashboard, Settings, Bell, 
  ChevronRight, Search, Filter, Image as ImageIcon,
  DollarSign, Briefcase, Star, ShieldCheck, ShoppingBag
} from 'lucide-react';
import { cn } from '@/src/lib/utils.ts';

const tabs = [
  { id: 'overview', label: 'Ecosystem Overview', icon: LayoutDashboard },
  { id: 'inventory', label: 'Product Inventory', icon: Package },
  { id: 'sales', label: 'Sales & Analytics', icon: TrendingUp },
  { id: 'payouts', label: 'Payout Management', icon: Banknote },
  { id: 'settings', label: 'Store Settings', icon: Settings },
];

export default function VendorDashboard() {
  const [activeTab, setActiveTab] = React.useState('overview');
  const [isAddingProduct, setIsAddingProduct] = React.useState(false);

  // Mock Vendor Data
  const vendorData = {
    name: "Cyber Donuts Store",
    balance: "KSh 45,200",
    payoutSchedule: "Every Friday",
    nextPayout: "April 24, 2026",
    rating: 4.8,
    reviewCount: 124
  };

  const products = [
    { id: 1, name: "Neon Glaze Donut Pack", price: "KSh 1,200", sales: 42, stock: 15 },
    { id: 2, name: "Cyberpunk Apparel Kit", price: "KSh 3,500", sales: 12, stock: 5 },
    { id: 3, name: "Digital Asset Pack v1", price: "KSh 800", sales: 85, stock: '∞' },
  ];

  const [searchQuery, setSearchQuery] = React.useState('');
  const [dateRange, setDateRange] = React.useState('last7days');

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const payoutHistory = [
    { date: "April 17, 2026", amount: "KSh 12,400", status: "Paid" },
    { date: "April 10, 2026", amount: "KSh 8,200", status: "Paid" },
    { date: "April 3, 2026", amount: "KSh 15,600", status: "Paid" },
  ];

  const salesData = {
    'last7days': { total: "KSh 42,000", orders: 15, items: 32 },
    'thismonth': { total: "KSh 128,400", orders: 48, items: 112 },
    'custom': { total: "KSh 0", orders: 0, items: 0 },
  };

  return (
    <div className="pt-32 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="glass p-8 rounded-[2.5rem] border-b-4 border-brand-orange relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
               <Store size={80} />
            </div>
            <div className="flex items-center space-x-2">
               <h2 className="text-xl font-bold text-white uppercase tracking-tighter truncate">{vendorData.name}</h2>
               <div className="flex items-center justify-center p-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30" title="Verified Vendor">
                 <ShieldCheck size={12} />
               </div>
            </div>
            <div className="flex items-center space-x-2 mt-2">
               <div className="flex text-brand-orange">
                  <Star size={12} fill="currentColor" />
                  <span className="text-xs font-bold ml-1">{vendorData.rating}</span>
               </div>
               <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">({vendorData.reviewCount} Reviews)</span>
            </div>
            <div className="mt-8 p-4 rounded-2xl bg-brand-orange/10 border border-brand-orange/20">
               <div className="text-[10px] text-brand-orange font-bold uppercase tracking-widest">Available Balance</div>
               <div className="text-2xl font-black text-white mt-1">{vendorData.balance}</div>
            </div>
          </div>

          <nav className="glass rounded-[2rem] p-3 flex flex-col space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center justify-between px-5 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all",
                  activeTab === tab.id 
                    ? "bg-gradient-brand text-white shadow-xl" 
                    : "text-gray-500 hover:bg-white/5 hover:text-white"
                )}
              >
                <div className="flex items-center space-x-3">
                  <tab.icon size={18} />
                  <span>{tab.label}</span>
                </div>
                {activeTab === tab.id && <ChevronRight size={14} />}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
          <header className="flex justify-between items-center bg-white/5 backdrop-blur-md p-6 rounded-[2.5rem] border border-white/10">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-2xl bg-brand-pink/20 text-brand-pink">
                 <Store size={24} />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white uppercase tracking-tighter shrink-0 line-clamp-1">
                  {tabs.find(t => t.id === activeTab)?.label}
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
               <button className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-all">
                  <Search size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Search Data</span>
               </button>
               <button className="p-3 rounded-2xl glass text-gray-400 hover:text-white transition-colors relative">
                 <Bell size={20} />
                 <span className="absolute top-3 right-3 w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
               </button>
            </div>
          </header>

          <main className="min-h-[500px]">
            {activeTab === 'overview' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  {[
                    { label: "Total Sales", value: "KSh 128,400", sub: "+12% this month", icon: Briefcase },
                    { label: "Active Products", value: "12", sub: "3 Out of stock", icon: Package },
                    { label: "Orders Pending", value: "8", sub: "Requires Dispatch", icon: Bell },
                  ].map((card, i) => (
                    <div key={i} className="glass p-10 rounded-[3rem] border-b-2 border-white/5 space-y-4">
                       <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-pink mx-auto">
                         <card.icon size={20} />
                       </div>
                       <div>
                         <div className="text-3xl font-black text-white">{card.value}</div>
                         <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">{card.label}</div>
                       </div>
                       <div className="text-[10px] text-green-500 font-bold uppercase tracking-widest bg-green-500/10 inline-block px-3 py-1 rounded-full">{card.sub}</div>
                    </div>
                  ))}
                </div>

                <div className="glass p-10 rounded-[3.5rem] space-y-8">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">Recent Ecosystem Sales</h3>
                    <button className="text-brand-pink text-xs font-bold uppercase tracking-widest hover:underline">View All Sales</button>
                  </div>
                  <div className="overflow-x-auto no-scrollbar">
                     <table className="w-full text-left">
                        <thead>
                           <tr className="border-b border-white/5 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                              <th className="pb-4 px-4 font-bold">Product</th>
                              <th className="pb-4 px-4 font-bold text-center">Price</th>
                              <th className="pb-4 px-4 font-bold text-center">Status</th>
                              <th className="pb-4 px-4 font-bold text-right">Revenue</th>
                           </tr>
                        </thead>
                        <tbody className="text-sm">
                           {[1,2,3].map(i => (
                             <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                                <td className="py-4 px-4 font-bold text-white uppercase tracking-tighter">Sale Transaction #{i}482</td>
                                <td className="py-4 px-4 text-center text-gray-400">KSh 1,200</td>
                                <td className="py-4 px-4 text-center">
                                   <span className="text-[10px] font-bold uppercase tracking-widest bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full">Processing</span>
                                </td>
                                <td className="py-4 px-4 text-right font-bold text-white">KSh 1,104</td>
                             </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'inventory' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-8"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                   <div className="space-y-1">
                      <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Product Inventory</h2>
                      <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Manage your digital and physical assets</p>
                   </div>
                   <div className="flex w-full md:w-auto space-x-2">
                     <div className="relative flex-1 md:w-64">
                       <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
                       <input 
                         type="text" 
                         placeholder="Search inventory..."
                         value={searchQuery}
                         onChange={(e) => setSearchQuery(e.target.value)}
                         className="w-full pl-10 pr-4 py-2.5 rounded-xl glass border border-white/5 text-xs text-white focus:border-brand-pink outline-none"
                       />
                     </div>
                     <button 
                       onClick={() => setIsAddingProduct(true)}
                       className="px-6 py-2.5 rounded-xl bg-gradient-brand text-white font-black text-[10px] uppercase tracking-widest flex items-center space-x-2"
                     >
                       <Plus size={14} />
                       <span className="hidden sm:inline">Add Product</span>
                     </button>
                   </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((p) => (
                    <div key={p.id} className="glass group rounded-[2rem] overflow-hidden border border-white/5">
                       <div className="h-32 bg-white/5 relative flex items-center justify-center">
                          <ImageIcon size={32} className="text-gray-800" />
                          <div className="absolute top-3 right-3 flex space-x-1">
                             <button className="p-1.5 rounded-lg glass text-gray-400 hover:text-white hover:bg-brand-pink transition-all"><Edit3 size={12} /></button>
                             <button className="p-1.5 rounded-lg glass text-gray-400 hover:text-red-500 hover:bg-red-500/10 transition-all"><Trash2 size={12} /></button>
                          </div>
                       </div>
                       <div className="p-5 space-y-4">
                          <h4 className="text-white font-bold uppercase text-sm tracking-tighter line-clamp-1">{p.name}</h4>
                          <div className="flex justify-between items-end">
                             <div className="space-y-1">
                                <div className="text-[9px] text-gray-500 uppercase font-bold tracking-widest">Price</div>
                                <div className="text-sm font-black text-white">{p.price}</div>
                             </div>
                             <div className="text-right space-y-2">
                                <div className="text-[9px] text-gray-500 uppercase font-bold tracking-widest">Stock</div>
                                <div className="flex items-center space-x-2 bg-white/5 rounded-lg p-1 border border-white/5">
                                   <button className="w-5 h-5 flex items-center justify-center rounded-md hover:bg-white/10 text-gray-400 font-bold">-</button>
                                   <span className="text-[10px] text-white font-bold w-4 text-center">{p.stock}</span>
                                   <button className="w-5 h-5 flex items-center justify-center rounded-md hover:bg-white/10 text-gray-400 font-bold">+</button>
                                </div>
                             </div>
                          </div>
                          <div className="pt-3 border-t border-white/5 flex justify-between items-center">
                             <span className="text-[9px] text-gray-400 uppercase font-bold tracking-widest">{p.sales} Sold</span>
                             <span className="text-[9px] text-green-500 font-bold uppercase tracking-widest">Live</span>
                          </div>
                       </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'sales' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-8"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                   <div className="space-y-1">
                      <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Sales & Analytics</h2>
                      <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Performance tracking for {vendorData.name}</p>
                   </div>
                   <div className="flex space-x-2 glass p-1.5 rounded-xl">
                      {[
                        { id: 'last7days', label: '7 Days' },
                        { id: 'thismonth', label: 'This Month' },
                        { id: 'custom', label: 'Custom' }
                      ].map(range => (
                        <button
                          key={range.id}
                          onClick={() => setDateRange(range.id)}
                          className={cn(
                            "px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all",
                            dateRange === range.id ? "bg-white/10 text-white" : "text-gray-500 hover:text-white"
                          )}
                        >
                          {range.label}
                        </button>
                      ))}
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   {[
                     { label: "Net Revenue", value: salesData[dateRange as keyof typeof salesData].total, icon: DollarSign },
                     { label: "Total Orders", value: salesData[dateRange as keyof typeof salesData].orders, icon: ShoppingBag },
                     { label: "Items Sold", value: salesData[dateRange as keyof typeof salesData].items, icon: Package },
                   ].map((stat, i) => (
                     <div key={i} className="glass p-8 rounded-[2.5rem] space-y-4">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-pink">
                           <stat.icon size={18} />
                        </div>
                        <div>
                           <div className="text-2xl font-black text-white">{stat.value}</div>
                           <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">{stat.label}</div>
                        </div>
                     </div>
                   ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'payouts' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="p-10 glass rounded-[3rem] space-y-6">
                      <div className="flex items-center space-x-3 text-brand-orange">
                         <Banknote size={24} />
                         <h3 className="text-xl font-bold uppercase tracking-tight">Payout Schedule</h3>
                      </div>
                      <div className="space-y-4">
                         <div className="flex justify-between items-center p-4 rounded-2xl bg-white/5 border border-white/5">
                            <span className="text-gray-400">Frequency</span>
                            <span className="text-white font-bold">{vendorData.payoutSchedule}</span>
                         </div>
                         <div className="flex justify-between items-center p-4 rounded-2xl bg-white/5 border border-white/5">
                            <span className="text-gray-400">Next Payout</span>
                            <span className="text-white font-bold underline underline-offset-4">{vendorData.nextPayout}</span>
                         </div>
                      </div>
                      <button className="w-full py-4 rounded-xl glass text-gray-400 font-bold text-xs uppercase tracking-widest cursor-not-allowed">
                        Instant Payout (Minimum KSh 100,000)
                      </button>
                   </div>

                   <div className="p-10 glass rounded-[3rem] space-y-6">
                      <div className="flex items-center space-x-3 text-brand-pink">
                         <DollarSign size={24} />
                         <h3 className="text-xl font-bold uppercase tracking-tight">Fee Transparency</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">
                         Ma Creatives Studio marketplace fees are strictly used for network growth and system maintenance.
                      </p>
                      <div className="space-y-2">
                         <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-400">Marketplace Commission (8%)</span>
                            <span className="text-red-500 font-bold">- KSh 3,616</span>
                         </div>
                         <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-400">Platform Handling (1%)</span>
                            <span className="text-red-500 font-bold">- KSh 452</span>
                         </div>
                         <hr className="border-white/10 my-2" />
                         <div className="flex justify-between items-center">
                            <span className="text-white font-bold">Estimated Net Payout</span>
                            <span className="text-green-500 font-black">KSh 41,132</span>
                         </div>
                      </div>
                   </div>

                   <div className="p-10 glass rounded-[3rem] space-y-6 md:col-span-2">
                       <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 text-brand-pink">
                             <TrendingUp size={24} />
                             <h3 className="text-xl font-bold uppercase tracking-tight">Payout History</h3>
                          </div>
                          <button className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em] hover:text-white transition-colors">Export CSV</button>
                       </div>
                       
                       <div className="overflow-x-auto no-scrollbar">
                          <table className="w-full text-left">
                             <thead>
                                <tr className="border-b border-white/5 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                                   <th className="pb-4 px-4 font-bold">Date</th>
                                   <th className="pb-4 px-4 font-bold text-center">Reference</th>
                                   <th className="pb-4 px-4 font-bold text-center">Status</th>
                                   <th className="pb-4 px-4 font-bold text-right">Amount</th>
                                </tr>
                             </thead>
                             <tbody className="text-sm">
                                {payoutHistory.map((p, i) => (
                                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                                     <td className="py-4 px-4 font-bold text-white text-[12px] uppercase">{p.date}</td>
                                     <td className="py-4 px-4 text-center text-gray-400 text-[10px] font-mono whitespace-nowrap">MSC-PAY-{1000 + i}</td>
                                     <td className="py-4 px-4 text-center">
                                        <span className="text-[9px] font-bold uppercase tracking-widest bg-green-500/10 text-green-500 px-3 py-1 rounded-full">{p.status}</span>
                                     </td>
                                     <td className="py-4 px-4 text-right font-bold text-white">{p.amount}</td>
                                  </tr>
                                ))}
                             </tbody>
                          </table>
                       </div>
                   </div>
                </div>
              </motion.div>
            )}
          </main>
        </div>
      </div>

      {/* Add Product Modal Overlay */}
      <AnimatePresence>
        {isAddingProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
             <motion.div 
               initial={{ scale: 0.9, y: 20 }}
               animate={{ scale: 1, y: 0 }}
               className="w-full max-w-2xl glass p-10 rounded-[3rem] border border-white/10 space-y-8 max-h-[90vh] overflow-y-auto no-scrollbar"
             >
                <div className="flex justify-between items-center">
                   <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">Add New <span className="text-gradient">Ecosystem Product</span></h2>
                   <button onClick={() => setIsAddingProduct(false)} className="p-2 rounded-xl hover:bg-white/5 text-gray-500 transition-colors">
                      <LayoutDashboard size={24} />
                   </button>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={e => { e.preventDefault(); setIsAddingProduct(false); }}>
                   <div className="md:col-span-2 space-y-2">
                      <label className="text-[10px] font-bold text-gray-500 uppercase ml-2 tracking-widest">Product Name</label>
                      <input required type="text" className="w-full p-4 rounded-2xl glass border border-white/5 focus:border-brand-pink outline-none transition-all text-white font-medium" placeholder="Creative Asset Name" />
                   </div>
                   <div className="md:col-span-2 space-y-2">
                      <label className="text-[10px] font-bold text-gray-500 uppercase ml-2 tracking-widest">Description</label>
                      <textarea required className="w-full p-4 rounded-2xl glass border border-white/5 focus:border-brand-pink outline-none transition-all text-white font-medium min-h-[100px]" placeholder="Tell your customer what makes this unique..." />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-500 uppercase ml-2 tracking-widest">Price (KSh)</label>
                      <input required type="text" className="w-full p-4 rounded-2xl glass border border-white/5 focus:border-brand-pink outline-none transition-all text-white font-black" placeholder="0.00" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-500 uppercase ml-2 tracking-widest">Category</label>
                      <select className="w-full p-4 rounded-2xl glass border border-white/5 focus:border-brand-pink outline-none transition-all text-white appearance-none cursor-pointer">
                         <option>Digital Assets</option>
                         <option>Creative Design</option>
                         <option>Electronics</option>
                         <option>Community Perk</option>
                      </select>
                   </div>
                   <div className="md:col-span-2 space-y-4 pt-4">
                      <div className="w-full h-40 rounded-3xl border-2 border-dashed border-white/10 bg-white/5 flex flex-col items-center justify-center space-y-2 hover:border-brand-pink transition-all cursor-pointer">
                         <Plus size={32} className="text-gray-700" />
                         <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Upload Product Images</span>
                      </div>
                   </div>
                   <div className="md:col-span-2 flex space-x-4 pt-4">
                      <button type="button" onClick={() => setIsAddingProduct(false)} className="flex-1 py-5 rounded-2xl glass text-gray-400 font-black uppercase tracking-tighter hover:text-white transition-all">Cancel</button>
                      <button type="submit" className="flex-[2] py-5 rounded-2xl bg-gradient-brand text-white font-black uppercase tracking-widest shadow-2xl hover:scale-105 transition-transform">List Product</button>
                   </div>
                </form>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
