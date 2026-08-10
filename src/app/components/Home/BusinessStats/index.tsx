import React from 'react';
import { Award, PackageCheck, Building2, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { id: 1, value: "15+", label: "Years B2B Excellence", icon: Award },
  { id: 2, value: "500+", label: "Toy & Furniture Models", icon: PackageCheck },
  { id: 3, value: "1,200+", label: "Wholesale Clients", icon: Building2 },
  { id: 4, value: "100%", label: "Safety Certified Products", icon: ShieldCheck },
];

const b2bSchedules = [
  { id: 1, name: "Start Small, Scale Smart", time: "Wholesale orders from just 50 units" },
  { id: 2, name: "Make It Yours", time: "OEM & private-label branding available" },
  { id: 3, name: "Real People. Real Support.", time: "Mon – Sat | 9 AM – 7 PM" },
];
 
const BusinessStats = () => {
  return (
    <section className="w-full relative bg-white py-16 font-quicksand overflow-hidden">
      {/* CYAN BLUE SECTION */}
      <div className="relative max-w-7xl mx-auto bg-[#00C4B5] rounded-3xl sm:rounded-[3rem] px-6 sm:px-12 py-16 lg:py-24 mb-16 lg:mb-32 shadow-lg">
        
        {/* Animated Floating Sun Icon */}
        <motion.div 
          animate={{ 
            y: [0, -12, 0],
            rotate: [0, 6, -6, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-10 right-10 sm:right-20 text-yellow-400 pointer-events-none z-10 hidden sm:block drop-shadow-md"
        >
          <svg width="120" height="120" viewBox="0 0 100 100" fill="currentColor">
            <circle cx="50" cy="50" r="22" />
            <path d="M50 15 L50 5 M85 50 L95 50 M50 85 L50 95 M15 50 L5 50 M75 25 L82 18 M75 75 L82 82 M25 75 L18 82 M25 25 L18 18" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            <circle cx="43" cy="45" r="3" fill="#1e1e1e" />
            <circle cx="57" cy="45" r="3" fill="#1e1e1e" />
            <path d="M43 55 Q50 63 57 55" stroke="#1e1e1e" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </svg>
        </motion.div>
 
        {/* Stats Grid */}
        <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.id} className={`flex flex-col items-center text-center text-white ${index !== stats.length - 1 ? 'lg:border-r lg:border-white/30 lg:border-dashed' : ''} px-4`}>
                <div className="mb-4 text-white/90">
                  <Icon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-4xl sm:text-5xl font-black mb-2 tracking-tight">{stat.value}</h3>
                <p className="text-sm sm:text-base font-semibold text-white/90 tracking-wide">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
 
      {/* YELLOW SECTION */}
      <div className="relative z-30 max-w-6xl mx-auto -mt-24 sm:-mt-32 lg:-mt-48 px-4 sm:px-6">
        <div className="bg-[#FFD400] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl flex flex-col lg:flex-row gap-12 lg:gap-16 relative overflow-hidden">
          
          {/* Arrow up circle (bottom right) */}
          <div className="absolute bottom-6 right-6 w-12 h-12 bg-[#FF6B6B] rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-105 transition-transform">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </div>
 
          {/* Left: Text */}
          <div className="flex-1 lg:border-r lg:border-black/10 lg:border-dashed lg:pr-12">
            <div className="inline-block bg-[#00C4B5] text-white px-5 py-2 rounded-full text-sm font-bold tracking-wide mb-6">
              B2B Trade &amp; Wholesale
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0B1A30] leading-tight mb-6 relative inline-block">
              Stock What Kids Love.
              {/* Squiggly red underline */}
              <svg className="absolute -bottom-3 left-0 w-full h-4 text-[#FF6B6B]" viewBox="0 0 200 20" preserveAspectRatio="none">
                <path d="M0 10 Q 50 20, 100 10 T 200 10" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </h2>
            <p className="text-[#0B1A30]/80 font-semibold leading-relaxed text-base mt-4 max-w-md">
              Why settle for ordinary products when you can stock toys and kids’ furniture designed to catch attention, deliver quality, and keep customers coming back? Get direct wholesale access, flexible order quantities, and customization options—all backed by a team that understands what growing businesses need.
            </p>
          </div>
 
          {/* Right: Time list */}
          <div className="flex-1 flex flex-col justify-center gap-4">
            {b2bSchedules.map((item) => (
              <div key={item.id} className="bg-white rounded-3xl px-6 sm:px-8 py-4 sm:py-5 grid grid-cols-1 sm:grid-cols-12 items-center shadow-sm hover:shadow-md transition-shadow gap-2 sm:gap-4">
                <span className="font-bold text-[#0B1A30] text-base sm:text-lg col-span-1 sm:col-span-5">{item.name}</span>
                <div className="hidden sm:flex col-span-1 justify-center">
                  <div className="h-6 w-px bg-gray-200 border-r border-dashed border-gray-300"></div>
                </div>
                <span className="font-bold text-gray-600 sm:text-right col-span-1 sm:col-span-6 text-sm sm:text-base">{item.time}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessStats;
