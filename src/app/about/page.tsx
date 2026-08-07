import React from 'react';
import PlayfulHeader from '../components/Navbar';
import Footer2 from '../components/Footer2';
import AboutUsScrollAnimation from '../components/pages/about';
import ShopElementsSection from '../components/Home/ShopElementsSection';
import WhoWeAre from '../components/Home/WhoWeAre';
import ToyParkScrollVideo from '../components/Home/ToyParkScrollVideo';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#E0F7F6]">
      <PlayfulHeader />
      <AboutUsScrollAnimation />
      <ShopElementsSection bgColor="bg-[#E0F7F6]" />
      <WhoWeAre />
      {/* <ToyParkScrollVideo /> */}
      <Footer2 />
    </main>
  );
}
