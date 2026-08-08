import dynamic from 'next/dynamic';
import PlayfulHeader from '../components/Navbar';

const WhoWeAreContent = dynamic(() => import('../components/pages/whoweare'));
const Footer2 = dynamic(() => import('../components/Footer2'));

export default function WhoWeArePage() {
  return (
    <main className="min-h-screen">
      <PlayfulHeader />
      <WhoWeAreContent />
      <Footer2 />
    </main>
  );
}
