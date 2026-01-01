import Image from "next/image";
import FadeInSection from "./FadeInSection";

export default function MissionSection() {
  return (
    <FadeInSection>
      <section className="bg-white w-full flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-10 xl:gap-[60px] items-start overflow-hidden pb-12 md:pb-16 lg:pb-20 xl:pb-25 pt-8 md:pt-10 lg:pt-12.5 px-5 md:px-8 lg:px-16 xl:px-25">
      {/* Left Side - Content */}
      <div className="w-full lg:flex-1 flex flex-col items-start justify-center min-h-0 min-w-0 overflow-hidden">
        <div className="flex flex-col gap-4 md:gap-5 items-start">
          <h2 className="font-oswald font-bold text-2xl md:text-3xl lg:text-[45px] leading-tight md:leading-snug lg:leading-14.75 text-[#333] capitalize">
            A Mountain with a Mission.
          </h2>
          <div className="font-archivo font-normal text-sm md:text-base lg:text-[17px] leading-relaxed md:leading-6 lg:leading-6.5 text-[#6e6e6e] w-full xl:w-[589px] whitespace-normal xl:whitespace-pre-wrap">
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
      <div className="w-full lg:flex-1 xl:w-[614px] h-64 md:h-96 lg:h-auto lg:self-stretch flex flex-col items-start justify-center">
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
