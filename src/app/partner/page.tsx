import dynamic from 'next/dynamic';
import PlayfulHeader from '../components/Navbar';

const PartnerPageContent = dynamic(() => import('../components/pages/partnerpage'));
const Footer2 = dynamic(() => import('../components/Footer2'));

export default function PartnerPage() {
  return (
    <main className="min-h-screen">
      <PlayfulHeader />
      <PartnerPageContent />
      <Footer2 />
    </main>
  );
}
