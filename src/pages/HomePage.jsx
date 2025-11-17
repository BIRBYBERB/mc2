// src/pages/HomePage.jsx
import { Buildings } from '../data/buildings';
import { Mobfarms } from '../data/mobfarms';
import HeroSection from '../components/home/HeroSection';
import FeaturedMakananSection from '../components/home/FeaturedBuildingSection';
import FeaturedMinumanSection from '../components/home/FeaturedMobfarmSection';

export default function HomePage() {
  const featuredMakanan = Object.values(Buildings.builds).slice(0, 3);
  const featuredMinuman = Object.values(Mobfarms.Farms).slice(0, 2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pb-20 md:pb-8">
      <HeroSection />
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 space-y-12 md:space-y-16">
        <FeaturedMakananSection featuredMakanan={featuredMakanan} />
        <FeaturedMinumanSection featuredMinuman={featuredMinuman} />
      </main>
    </div>
  );
}
