"use client";

import React from "react";
import { ArrowRight, Dumbbell, Gamepad2, Droplets, Trophy, Activity, Target } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Outdoor Gym Equipment",
    desc: "Parks, societies, municipal areas",
    icon: <Dumbbell className="w-6 h-6 text-[#00C4B5]" />,
  },
  {
    title: "Sports Equipment",
    desc: "Badminton, table tennis, sports goods",
    icon: <Trophy className="w-6 h-6 text-[#FF6B6B]" />,
  },
  {
    title: "Game Tables",
    desc: "Foosball, air hockey, carrom, pool",
    icon: <Gamepad2 className="w-6 h-6 text-amber-500" />,
  },
  {
    title: "Exercise Balls & Gym",
    desc: "Indoor fitness accessories",
    icon: <Activity className="w-6 h-6 text-indigo-500" />,
  },
  {
    title: "Swimming Pools",
    desc: "Kids pools & accessories",
    icon: <Droplets className="w-6 h-6 text-cyan-500" />,
  },
  {
    title: "Activity Toys",
    desc: "Active play for all ages",
    icon: <Target className="w-6 h-6 text-rose-500" />,
  }
];

export const AnyProSection = () => {
  return (
    <section className="bg-white w-full py-24 px-6 sm:px-10 lg:px-16 font-quicksand overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="bg-amber-400 rounded-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col xl:flex-row items-center gap-12 lg:gap-16 relative shadow-2xl border-4 border-white">
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
          
          {/* Left Side Content */}
          <div className="xl:w-5/12 flex flex-col items-start text-left relative z-10">
            <div className="bg-[#00C4B5] text-white text-xs sm:text-sm font-black px-4 py-1.5 uppercase tracking-widest rounded-full mb-6 shadow-sm">
              Introducing Sub-Brand
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-tight text-slate-900">
              Meet <span className="text-white drop-shadow-sm">ANY PRO</span>
            </h2>
            
            <p className="text-slate-800 text-base sm:text-lg leading-relaxed mb-10 max-w-lg font-bold">
              Toy Park's sports and fitness sub-brand — covering outdoor gym equipment, sports goods, game tables, and active lifestyle products for parks, societies, schools, and fitness centres.
            </p>
            
            <a href="/anypro" className="inline-flex items-center gap-2 bg-[#FF6B6B] hover:bg-[#ff5252] text-white font-black py-4 px-8 rounded-full transition-transform hover:-translate-y-1 text-base sm:text-lg shadow-[0_4px_0_rgb(220,38,38)] hover:shadow-[0_2px_0_rgb(220,38,38)] active:translate-y-0 active:shadow-none">
              Explore ANY PRO <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Right Side Grid */}
          <div className="xl:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-4 w-full relative z-10">
            {categories.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="bg-white hover:bg-slate-50 rounded-2xl p-6 flex items-center gap-5 transition-colors cursor-pointer shadow-sm border-2 border-transparent hover:border-[#00C4B5]/20 group"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-lg mb-1 group-hover:text-[#00C4B5] transition-colors">{item.title}</h3>
                  <p className="text-slate-500 text-sm font-semibold">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};
