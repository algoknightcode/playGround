'use client';

import React from 'react';
import dynamic from 'next/dynamic';

import PlayfulHeader from './components/Navbar';
import MainBanner from './components/MainBanner';
import HeroBanner from './components/Home/HeroBanner';
import { FeaturesGrid } from './components/FeaturesGrid';

// Dynamic lazy loading for heavy below-the-fold components to make page load & scroll instantly smooth
const ToyWindmillScroll = dynamic(() => import('./components/Home/ToyWindmillScroll').then((m) => m.ToyWindmillScroll));
const Marquee2 = dynamic(() => import('./components/Home/Marquee2'));
const ToysForEveryNeed = dynamic(() => import('./components/Home/ToysEveryNeed'));
const ShopByCategories = dynamic(() => import('./components/Home/ShopByCategories'));
const ShopByAge = dynamic(() => import('./components/Home/ShopByAge'));
const SplitVantage = dynamic(() => import('./components/Home/splitVantage'));
const ShopElementsSection = dynamic(() => import('./components/Home/ShopElementsSection'));
const WhoWeAre = dynamic(() => import('./components/Home/WhoWeAre'));
const CloudStatsBanner = dynamic(() => import('./components/Home/CloudStatsBanner'));
const ExpandableVideoMarquee = dynamic(() => import('./components/Home/ExpandableVideoMarquee').then((m) => m.ExpandableVideoMarquee));
const HeroSubBanner = dynamic(() => import('./components/Home/HeroSubBanner'));
const BusinessStats = dynamic(() => import('./components/Home/BusinessStats'));
const HowItWorksProcess = dynamic(() => import('./components/Home/HowItWorksProcess'));
const DealsSection = dynamic(() => import('./components/Home/BestDeals'));
const HeroTextSection = dynamic(() => import('./components/Home/HeroText'));
const KidsStackingCards = dynamic(() => import('./components/Home/KidsStackingCards'));
const ClientTestimonials = dynamic(() => import('./components/Home/ClientTestimonials').then((m) => m.ClientTestimonials));
const FaqInteractivePreview = dynamic(() => import('./components/Home/Faq'));
const KidsNewsSection = dynamic(() => import('./components/Home/newletter'));
const AnyProSection = dynamic(() => import('./components/Home/AnyProSection').then(m => m.AnyProSection));
const UpperFooter = dynamic(() => import('./components/Home/UpperFooter'));
const Footer2 = dynamic(() => import('./components/Footer2'));

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
