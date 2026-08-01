import PlayfulHeader from "./components/Navbar";
import HeroBanner from "./components/Home/HeroBanner";
import SplitVantage from "./components/Home/splitVantage/inde";
import Parralex from "./components/Home/Parralex";
import ParallaxStats from "./components/Home/ParallaxStats";
import NovaLandingPage from "./components/Home/animate_video_scroll";
import ToyWindmillScroll from "./components/Home/ToyWindmillScroll";
import ExpandableVideoMarquee from "./components/Home/ExpandableVideoMarquee";
import PastelB2BFooter from "./components/Footer";
import ToysForEveryNeed from "./components/Home/ToysEveryNeed";
import AgeBestsellers from "./components/Home/BestSeller";
import TrustBannerSection from "./components/Home/Trusted";
import AtestMarqueeWall from "./components/Home/Testimotinal";
import GalleryLightboxZoom from "./components/GalleryLightboxZoom";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d0d]">
      <PlayfulHeader />
      <HeroBanner />
       <ToyWindmillScroll />
      <ToysForEveryNeed/>
      <SplitVantage />
      <ExpandableVideoMarquee />
        <AgeBestsellers/>
      <TrustBannerSection />
     
    
      <AtestMarqueeWall/>
      <GalleryLightboxZoom />
      <PastelB2BFooter />

   
    </main>
  );
}

