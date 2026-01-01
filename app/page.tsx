import Hero from "@/components/shared/Hero";
import AboutSection from "@/components/shared/AboutSection";
import WeddingSection from "@/components/shared/WeddingSection";
import FarmhouseSection from "@/components/shared/FarmhouseSection";
import ActivitiesSection from "@/components/shared/ActivitiesSection";
import CorporateSection from "@/components/shared/CorporateSection";
import FamilySection from "@/components/shared/FamilySection";
import LocationSection from "@/components/shared/LocationSection";
import MissionSection from "@/components/shared/MissionSection";
import TestimonialsSection from "@/components/shared/TestimonialsSection";
import ScheduleTourSection from "@/components/shared/ScheduleTourSection";

export default function Home() {
  return (
    <main className="bg-white flex flex-col items-start w-full">
      <Hero />
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
    </main>
  );
}
