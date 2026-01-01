import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WeddingSection from "@/components/WeddingSection";
import FarmhouseSection from "@/components/FarmhouseSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import CorporateSection from "@/components/CorporateSection";
import FamilySection from "@/components/FamilySection";
import LocationSection from "@/components/LocationSection";
import MissionSection from "@/components/MissionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ScheduleTourSection from "@/components/ScheduleTourSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white flex flex-col items-start w-full">
      <Hero />
      
      {/* Pagination */}
      <div className="w-full flex gap-3 h-[22px] items-end justify-center">
        <div className="bg-[#bebebe] h-3 w-[50px]" />
        <div className="bg-[#dadada] w-3 h-3" />
        <div className="bg-[#dadada] w-3 h-3" />
      </div>

      <AboutSection />
      <WeddingSection />
      <FarmhouseSection />
      <ActivitiesSection />
      <CorporateSection />
      <FamilySection />
      <LocationSection />
      <MissionSection />
      <TestimonialsSection />
      <ScheduleTourSection />
      <Footer />
    </main>
  );
}
