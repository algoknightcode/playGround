import React from 'react';
import { Phone, Ruler, FileText, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  iconBg: string;
  badgeText: string;
  hoverBg: string;
  hoverText: string;
  hoverDesc: string;
  hoverNumber: string;
}

const STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Free Consultation',
    description: 'Call, WhatsApp, or fill our enquiry form. Our expert will understand your space, budget, and requirements within 24 hours.',
    icon: <Phone className="w-6 h-6 stroke-[2.5]" />,
    bgColor: 'bg-[#FDF6ED]',
    iconBg: 'bg-[#FF6B6B]',
    badgeText: 'Step 1',
    hoverBg: 'hover:bg-[#FF6B6B]',
    hoverText: 'group-hover:text-white',
    hoverDesc: 'group-hover:text-white/90',
    hoverNumber: 'group-hover:text-white/25'
  },
  {
    number: '02',
    title: 'Site Visit + Design',
    description: 'We visit your site free of charge, take measurements, and create a 2D/3D layout design showing exactly what will fit and where.',
    icon: <Ruler className="w-6 h-6 stroke-[2.5]" />,
    bgColor: 'bg-[#EAF8F9]',
    iconBg: 'bg-[#4ECDC4]',
    badgeText: 'Step 2',
    hoverBg: 'hover:bg-[#4ECDC4]',
    hoverText: 'group-hover:text-white',
    hoverDesc: 'group-hover:text-white/90',
    hoverNumber: 'group-hover:text-white/25'
  },
  {
    number: '03',
    title: 'Quote + Approval',
    description: 'Receive an itemised, GST-inclusive quotation. No hidden costs. Compare it with any other supplier — our pricing is always transparent.',
    icon: <FileText className="w-6 h-6 stroke-[2.5]" />,
    bgColor: 'bg-[#FFFBEB]',
    iconBg: 'bg-[#FFE66D]',
    badgeText: 'Step 3',
    hoverBg: 'hover:bg-[#FFE66D]',
    hoverText: 'group-hover:text-[#2D3436]',
    hoverDesc: 'group-hover:text-[#2D3436]/80',
    hoverNumber: 'group-hover:text-[#2D3436]/20'
  },
  {
    number: '04',
    title: 'Installation',
    description: 'Our trained installation team handles everything — foundation, assembly, anchoring, and finishing. Typical installation: 1–3 days.',
    icon: <Wrench className="w-6 h-6 stroke-[2.5]" />,
    bgColor: 'bg-[#F5EFFB]',
    iconBg: 'bg-[#9B59B6]',
    badgeText: 'Step 4',
    hoverBg: 'hover:bg-[#9B59B6]',
    hoverText: 'group-hover:text-white',
    hoverDesc: 'group-hover:text-white/90',
    hoverNumber: 'group-hover:text-white/25'
  },
  {
    number: '05',
    title: 'AMC + Support',
    description: 'Annual Maintenance Contract keeps your equipment in perfect condition. Prompt spare parts supply from our ready inventory.',
    icon: <ShieldCheck className="w-6 h-6 stroke-[2.5]" />,
    bgColor: 'bg-[#EBF5FF]',
    iconBg: 'bg-[#3B82F6]',
    badgeText: 'Step 5',
    hoverBg: 'hover:bg-[#3B82F6]',
    hoverText: 'group-hover:text-white',
    hoverDesc: 'group-hover:text-white/90',
    hoverNumber: 'group-hover:text-white/25'
  },
];

export default function HowItWorksProcess() {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden font-quicksand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 max-w-3xl">
          <span className="bg-[#FFE66D] text-[#2D3436] text-xs font-black tracking-widest uppercase px-4 py-1.5 rounded-full border-2 border-[#2D3436] shadow-[2px_2px_0px_0px_#2D3436] inline-block mb-3">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2D3436] tracking-tight leading-tight">
            From First Call to <span className="text-[#FF6B6B] relative inline-block">Installation<span className="absolute left-0 bottom-1 w-full h-3 bg-[#4ECDC4]/30 -z-10 rounded-sm"></span></span>
          </h2>
          <p className="text-gray-600 font-semibold text-base md:text-lg mt-3 leading-relaxed">
            Our proven 5-step process makes ordering playground equipment simple, transparent, and completely risk-free for institutional buyers.
          </p>
        </div>

        {/* 📱 MOBILE VIEW: AUTO-SWIPE ONE CARD AT A TIME (< sm) */}
        <div className="block sm:hidden w-full relative pb-9">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            autoplay={false}
            pagination={{
              clickable: true,
            }}
            className="w-full how-it-works-swiper !pb-8"
          >
            {STEPS.map((step, idx) => (
              <SwiperSlide key={step.number}>
                <StepCard step={step} idx={idx} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 🖥️ DESKTOP VIEW: 5-COLUMN GRID (>= sm) */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {STEPS.map((step, idx) => (
            <StepCard key={step.number} step={step} idx={idx} />
          ))}
        </div>

      </div>

      {/* Custom Swiper Pagination Styling */}
      <style dangerouslySetInnerHTML={{ __html: `
        .how-it-works-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #FF6B6B;
          opacity: 0.35;
          transition: all 0.3s ease;
        }
        .how-it-works-swiper .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 4px;
          background: #FF6B6B;
          opacity: 1;
        }
        .how-it-works-swiper .swiper-pagination {
          bottom: 0px !important;
        }
      ` }} />
    </section>
  );
}

// Reusable Step Card Component
const StepCard: React.FC<{ step: ProcessStep; idx: number }> = ({ step }) => {
  return (
    <div
      className={`${step.bgColor} ${step.hoverBg} border-2 border-[#2D3436]/20 hover:border-[#2D3436] rounded-[2.2rem] p-6 shadow-sm hover:shadow-lg hover:-translate-y-2 flex flex-col justify-between transition-all duration-300 relative group cursor-pointer overflow-hidden h-full min-h-[320px]`}
    >
      {/* Subtle Card Glow / Shine on Hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div>
        {/* Step Number & Floating Icon Header */}
        <div className="flex items-center justify-between mb-6">
          <span 
            className={`text-4xl font-black text-[#2D3436]/25 transition-colors ${step.hoverNumber}`}
          >
            {step.number}
          </span>

          <div 
            className={`w-12 h-12 ${step.iconBg} text-white rounded-2xl border-2 border-[#2D3436] shadow-[3px_3px_0px_0px_#2D3436] flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-200`}
          >
            {step.icon}
          </div>
        </div>

        {/* Title & Description */}
        <h3 className={`text-xl font-black text-[#2D3436] mb-3 leading-snug transition-colors ${step.hoverText}`}>
          {step.title}
        </h3>
        <p className={`text-gray-600 text-sm leading-relaxed font-medium transition-colors ${step.hoverDesc}`}>
          {step.description}
        </p>
      </div>

      {/* Bottom Badge Accent with Arrow */}
      <div className="mt-6 pt-4 border-t-2 border-dashed border-[#2D3436]/15 flex items-center justify-between">
        <span className={`text-xs font-black text-[#2D3436] uppercase tracking-wider transition-colors ${step.hoverText}`}>
          {step.badgeText}
        </span>
        <div>
          <ArrowRight className={`w-4 h-4 text-[#2D3436] group-hover:translate-x-1 transition-all ${step.hoverText}`} />
        </div>
      </div>
    </div>
  );
};
