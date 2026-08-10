import React from 'react';
import KidzaNavbar from '../components/Navbar';
import WhyChooseUsPageContent from '../components/pages/why-choose-us';
import Footer2 from '../components/Footer2';

export const metadata = {
  title: 'Why Choose Us | ToyPark',
  description: 'Discover why ToyPark is the premier choice for children furniture and creative play space designs.',
};

export default function WhyChooseUsPage() {
  return (
    <main className="min-h-screen bg-[#e0f7fa]">
      <KidzaNavbar />
      <WhyChooseUsPageContent />
      <Footer2 />
    </main>
  );
}
