'use client';

import React from 'react';
import PlayfulHeader from './components/Navbar';
import { FeaturesGrid } from './components/FeaturesGrid';
import HeroBanner from './components/Home/HeroBanner';
import HeroSubBanner from './components/Home/HeroSubBanner';
import ToyWindmillScroll from './components/Home/ToyWindmillScroll';
import ToysForEveryNeed from './components/Home/ToysEveryNeed';
import SplitVantage from './components/Home/splitVantage';
import ExpandableVideoMarquee from './components/Home/ExpandableVideoMarquee';
import WhoWeAre from './components/Home/WhoWeAre';
import CloudStatsBanner from './components/Home/CloudStatsBanner';
import AgeBestsellers from './components/Home/BestSeller';
import HeroTextSection from './components/Home/HeroText';
import AtestMarqueeWall from './components/Home/Testimotinal';
import ClientTestimonials from './components/Home/ClientTestimonials';
import GalleryLightboxZoom from './components/GalleryLightboxZoom';
import KidsNewsSection from './components/Home/newletter';
import UpperFooter from './components/Home/UpperFooter';
import Footer2 from './components/Footer2';
import Marquee2 from './components/Home/Marquee2';
import ShopByCategories from './components/Home/ShopByCategories';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#2D3436]">
      <PlayfulHeader />
    
     
      <HeroBanner />
      <FeaturesGrid />
      <HeroSubBanner />
      <ToyWindmillScroll />
      <ToysForEveryNeed />
      <ShopByCategories />
      <SplitVantage />
        <Marquee2 />
      <ExpandableVideoMarquee />
      <WhoWeAre />
      <CloudStatsBanner />
      <AgeBestsellers />
      <HeroTextSection />
      <AtestMarqueeWall />
      <ClientTestimonials />
      <GalleryLightboxZoom />
      <KidsNewsSection />
      <UpperFooter />
      <Footer2 />
    </main>
  );
}
