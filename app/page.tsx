import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SkoolSection from '@/components/SkoolSection';
import VideoSection from '@/components/VideoSection';
import DownloadsSection from '@/components/DownloadsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <SkoolSection />
      <VideoSection />
      <DownloadsSection />
      <Footer />
    </main>
  );
}
