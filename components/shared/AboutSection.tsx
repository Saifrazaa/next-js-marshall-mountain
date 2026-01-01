import Image from "next/image";
import FadeInSection from "./FadeInSection";

export default function AboutSection() {
  return (
    <FadeInSection>
      <section className="bg-white w-full flex gap-15 items-start overflow-hidden pb-25 pt-12.5 px-25">
      {/* Left Side - Images */}
      <div className="flex-1 flex flex-col items-start justify-center min-h-0 min-w-0 pl-30 relative self-stretch">
        <div className="flex-1 min-h-0 min-w-0 w-full relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bg-[#c4c4c4] inset-0" />
            <Image 
              src="/assets/images/about-main.jpg"
              alt="Mountain view"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="absolute border-12 border-solid border-white h-99.5 left-0 shadow-[0px_10px_25px_0px_rgba(0,0,0,0.07)] top-1/2 -translate-y-1/2 w-70">
          <Image
            src="/assets/images/about-small.jpg"
            alt="Resort activities"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="flex-1 flex flex-col items-start justify-center min-h-0 min-w-0 overflow-hidden pb-3.75 pt-0.5">
        <div className="flex flex-col gap-5 items-start">
          <h2 className="font-oswald font-bold text-[45px] leading-14.75 text-[#333] capitalize w-147.5 whitespace-pre-wrap">
            A Mountain Playground Built for Moments.
          </h2>
          <div className="font-archivo font-normal text-[17px] leading-6.5 text-[#6e6e6e] w-147.25 whitespace-pre-wrap">
            <p className="mb-3">At Marshall Mountain Resort, you don't just visit — you charge up. Perched on 275 acres of glacial drumlins, this is where:</p>
            <p className="mb-3">• ceremonies overlook rolling valleys,</p>
            <p className="mb-3">• reunions turn into adventures,</p>
            <p className="mb-3">• bachelor parties become legends,</p>
            <p className="mb-3">• corporate retreats break barriers,</p>
            <p className="mb-3">• and every guest finds their own trail.</p>
            <p className="mb-3">You're not in Upstate New York anymore.</p>
            <p>You're in the center of the universe.</p>
          </div>
        </div>
      </div>
    </section>
    </FadeInSection>
  );
}
