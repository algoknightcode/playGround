'use client';

import React from 'react';
import dynamic from 'next/dynamic';

import PlayfulHeader from './components/Navbar';
import MainBanner from './components/MainBanner';
import HeroBanner from './components/Home/HeroBanner';
import { FeaturesGrid } from './components/FeaturesGrid';

// Dynamic lazy loading for heavy below-the-fold components to make page load & scroll instantly smooth
const ToyWindmillScroll = dynamic(() => import('./components/Home/ToyWindmillScroll').then((m) => m.ToyWindmillScroll), { ssr: true });
const Marquee2 = dynamic(() => import('./components/Home/Marquee2'), { ssr: true });
const ToysForEveryNeed = dynamic(() => import('./components/Home/ToysEveryNeed'), { ssr: true });
const ShopByCategories = dynamic(() => import('./components/Home/ShopByCategories'), { ssr: true });
const ShopByAge = dynamic(() => import('./components/Home/ShopByAge'), { ssr: true });
const SplitVantage = dynamic(() => import('./components/Home/splitVantage'), { ssr: true });
const ShopElementsSection = dynamic(() => import('./components/Home/ShopElementsSection'), { ssr: true });
const WhoWeAre = dynamic(() => import('./components/Home/WhoWeAre'), { ssr: true });
const CloudStatsBanner = dynamic(() => import('./components/Home/CloudStatsBanner'), { ssr: true });
const ExpandableVideoMarquee = dynamic(() => import('./components/Home/ExpandableVideoMarquee').then((m) => m.ExpandableVideoMarquee), { ssr: true });
const HeroSubBanner = dynamic(() => import('./components/Home/HeroSubBanner'), { ssr: true });
const BusinessStats = dynamic(() => import('./components/Home/BusinessStats'), { ssr: true });
const HowItWorksProcess = dynamic(() => import('./components/Home/HowItWorksProcess'), { ssr: true });
const DealsSection = dynamic(() => import('./components/Home/BestDeals'), { ssr: true });
const HeroTextSection = dynamic(() => import('./components/Home/HeroText'), { ssr: true });
const KidsStackingCards = dynamic(() => import('./components/Home/KidsStackingCards'), { ssr: true });
const ClientTestimonials = dynamic(() => import('./components/Home/ClientTestimonials').then((m) => m.ClientTestimonials), { ssr: true });
const FaqInteractivePreview = dynamic(() => import('./components/Home/Faq'), { ssr: true });
const KidsNewsSection = dynamic(() => import('./components/Home/newletter'), { ssr: true });
const AnyProSection = dynamic(() => import('./components/Home/AnyProSection').then(m => m.AnyProSection), { ssr: true });
const UpperFooter = dynamic(() => import('./components/Home/UpperFooter'), { ssr: true });
const Footer2 = dynamic(() => import('./components/Footer2'), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#2D3436]">
      <PlayfulHeader />
      <MainBanner />
      {/* <HeroBanner /> */}
   
      <FeaturesGrid />
      
  
      <ToyWindmillScroll />
         <Marquee2 />

      <ToysForEveryNeed />
      <ShopByCategories />
      
      <SplitVantage />
      <ShopElementsSection />
      <WhoWeAre />
      <CloudStatsBanner />
        <HeroSubBanner />
      <ExpandableVideoMarquee />
     
      <ShopByAge />
      <DealsSection />
     
      <BusinessStats />
      <HowItWorksProcess />
      
      <HeroTextSection />
      <AnyProSection />
      <KidsStackingCards />
      <div className="h-16 md:h-24 bg-white" />
   
    
      {/* <KidsNewsSection /> */}
        <FaqInteractivePreview />
           <ClientTestimonials />
      <UpperFooter />
      <Footer2 />
    </main>
  );
}
