import dynamic from 'next/dynamic';
import PlayfulHeader from '../components/Navbar';

const ContactPageContent = dynamic(() => import('../components/pages/contact'));
const Footer2 = dynamic(() => import('../components/Footer2'));

export default function ContactUsPage() {
  return (
    <main className="min-h-screen">
      <PlayfulHeader />
      <ContactPageContent />
      <Footer2 />
    </main>
  );
}
