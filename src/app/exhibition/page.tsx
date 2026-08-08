import dynamic from 'next/dynamic';
import PlayfulHeader from '../components/Navbar';

const ExhibitionPageContent = dynamic(() => import('../components/pages/exhibition'));
const Footer2 = dynamic(() => import('../components/Footer2'));

export default function ExhibitionPage() {
  return (
    <main className="min-h-screen">
      <PlayfulHeader />
      <ExhibitionPageContent />
      <Footer2 />
    </main>
  );
}
