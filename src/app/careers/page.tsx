import React from 'react';
import KidzaNavbar from '../components/Navbar';
import CareersPageContent from '../components/pages/careers';
import Footer2 from '../components/Footer2';

export const metadata = {
  title: 'Join the Playground - Careers | ToyPark',
  description: 'Explore open roles and discover what it is like to work at ToyPark. We are looking for passionate people to build the future of play.',
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      <KidzaNavbar />
      <CareersPageContent />
      <Footer2 />
    </main>
  );
}
