import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SkoolSection from '@/components/SkoolSection';
import VideoSection from '@/components/VideoSection';
import DownloadsSection from '@/components/DownloadsSection';
import Footer from '@/components/Footer';
import MouseTrail from '@/components/MouseTrail';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <MouseTrail />
      <Navbar />
      <Hero />
      <SkoolSection />
      <VideoSection />
      <DownloadsSection />
      <Footer />
    </main>
  );
}
