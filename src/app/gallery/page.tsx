import dynamic from 'next/dynamic';
import PlayfulHeader from '../components/Navbar';

const GalleryLightboxZoom = dynamic(() => import('../components/GalleryLightboxZoom'));
const Footer2 = dynamic(() => import('../components/Footer2'));

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <PlayfulHeader />
      <div className="pt-8 pb-12">
        <GalleryLightboxZoom />
      </div>
      <Footer2 />
    </main>
  );
}
