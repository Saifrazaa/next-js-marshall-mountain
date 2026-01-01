import Image from "next/image";
import FadeInSection from "./FadeInSection";

export default function MissionSection() {
  return (
    <FadeInSection>
      <section className="bg-white w-full flex gap-[60px] items-start overflow-hidden pb-[100px] pt-[50px] px-[100px]">
      {/* Left Side - Content */}
      <div className="flex-1 flex flex-col items-start justify-center min-h-0 min-w-0 overflow-hidden pb-[15px] pt-[2px]">
        <div className="flex flex-col gap-5 items-start">
          <h2 className="font-oswald font-bold text-[45px] leading-[59px] text-[#333] capitalize">
            A Mountain with a Mission.
          </h2>
          <div className="font-archivo font-normal text-[17px] leading-[26px] text-[#6e6e6e] w-[589px] whitespace-pre-wrap">
            <p className="mb-3">
              Marshall Mountain Resort is becoming something bold  a destination where nature, movement, and connection collide.
            </p>
            <p className="font-bold mb-3">A place powered by:</p>
            <p className="mb-3">* E-bikes and trail culture</p>
            <p className="mb-3">* Big skies and mountain sunsets</p>
            <p>* Experiences built for connection</p>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-[614px] self-stretch flex flex-col items-start justify-center">
        <div className="flex-1 min-h-0 min-w-0 w-full relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bg-[#d9d9d9] inset-0" />
            <div className="absolute inset-0 overflow-hidden">
              <Image 
                src="/assets/images/mission.jpg"
                alt="Mountain mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </FadeInSection>
  );
}
