import PlayfulHeader from "./components/Navbar";
import HeroBanner from "./components/Home/HeroBanner";
import HeroSubBanner from "./components/Home/HeroSubBanner";
import EducationalBanner from "./components/Banner1";
import SplitVantage from "./components/Home/splitVantage/inde";
import Parralex from "./components/Home/Parralex";
import ParallaxStats from "./components/Home/ParallaxStats";
import NovaLandingPage from "./components/Home/animate_video_scroll";
import ToyWindmillScroll from "./components/Home/ToyWindmillScroll";
import ExpandableVideoMarquee from "./components/Home/ExpandableVideoMarquee";
import WhoWeAre from "./components/Home/WhoWeAre";
import CloudStatsBanner from "./components/Home/CloudStatsBanner";
import UpperFooter from "./components/Home/UpperFooter";
import Footer2 from "./components/Footer2";
import ToysForEveryNeed from "./components/Home/ToysEveryNeed";
import AgeBestsellers from "./components/Home/BestSeller";
import HeroTextSection from "./components/Home/HeroText";
import AtestMarqueeWall from "./components/Home/Testimotinal";
import GalleryLightboxZoom from "./components/GalleryLightboxZoom";
import ClientTestimonials from "./components/Home/ClientTestimonials";
import KidsNewsSection from "./components/Home/newletter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FEF9F0] text-[#2D3436]">
      <PlayfulHeader />

     
      <EducationalBanner />
       <HeroSubBanner />
      <ToyWindmillScroll />
      <ToysForEveryNeed />
      <SplitVantage />
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

