import Image from "next/image";
import FadeInSection from "./FadeInSection";
import Button from "../ui/Button";

export default function CorporateSection() {
  return (
    <FadeInSection>
      <section className="bg-white w-full flex gap-15 h-133.75 items-start overflow-hidden pb-25 pt-[31px] px-25">
      {/* Left Side - Image */}
      <div className="w-[557px] h-full flex flex-col items-start justify-center">
        <div className="flex-1 min-h-0 min-w-0 w-full relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image 
              src="/assets/images/corporate.jpg"
              alt="Corporate retreat activities"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Middle - Content */}
      <div className="w-[283px] flex flex-col gap-[35px] items-start justify-center overflow-hidden pb-[15px] pt-0.5">
        <div className="w-[319px] flex flex-col items-start">
          <div className="font-archivo font-normal text-[17px] leading-6.5 text-[#6e6e6e] h-[306px] w-[272px] whitespace-pre-wrap">
            <p className="mb-3">
              Here, teams actually connect, because they move, sweat, laugh, and push limits together.
            </p>
            <p className="font-bold mb-3">Perfect for:</p>
            <p className="mb-3">• small & mid-size teams</p>
            <p className="mb-3">• leadership groups</p>
            <p className="mb-3">• alumni gatherings</p>
            <p className="mb-3">• sports teams</p>
            <p>• family corporate visits</p>
          </div>
        </div>
        <Button 
          href="/corporate" 
          variant="primary"
          className="px-3 py-[7px]"
        >
          Plan a Corporate Retreat
        </Button>
      </div>

      {/* Right Side - Activities List */}
      <div className="font-archivo font-normal text-[17px] leading-6.5 text-[#6e6e6e] w-[272px] whitespace-pre-wrap">
        <p className="font-bold mb-3">Activities include:</p>
        <p className="mb-3">• HOH trust-building games</p>
        <p className="mb-3">• Mud-run challenges</p>
        <p className="mb-3">• UTV hill climbs</p>
        <p className="mb-3">• Mountain bike flow lines</p>
        <p className="mb-3">• Barn workshops</p>
        <p className="mb-3">• Dude Den breakouts</p>
        <p>• Firepit strategy nights</p>
      </div>
    </section>
    </FadeInSection>
  );
}
