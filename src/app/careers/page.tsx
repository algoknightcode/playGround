import React from 'react';
import KidzaNavbar from '../components/Navbar';
import CareersPageContent from '../components/pages/careers';
import Footer2 from '../components/Footer2';

export const metadata = {
  title: 'Careers | ToyPark',
  description: 'Join our playful team at ToyPark and help us build the biggest playground in the world.',
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#e0f7fa]">
      <KidzaNavbar />
      <CareersPageContent />
      <Footer2 />
    </main>
  );
}
