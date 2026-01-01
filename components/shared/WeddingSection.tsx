import Image from "next/image";
import FadeInSection from "./FadeInSection";
import Button from "../ui/Button";

export default function WeddingSection() {
  return (
    <FadeInSection>
      <section className="bg-[#f9f9f9] w-full flex flex-col gap-8 md:gap-10 lg:gap-9 xl:gap-[45px] items-center overflow-hidden p-5 md:p-12 lg:p-16 xl:p-25">
      {/* Top - Title */}
      <div className="w-full flex items-center justify-center px-4 md:px-8 lg:px-0">
        <div className="max-w-[1240px] w-full flex flex-col items-center overflow-hidden">
          <div className="font-oswald font-bold text-2xl md:text-3xl lg:text-[45px] leading-tight md:leading-snug lg:leading-14.75 text-[#333] text-center capitalize w-full whitespace-normal lg:whitespace-pre-wrap">
            <p className="mb-0">Epic Weddings for Couples</p>
            <p>Who Want MORE</p>
          </div>
        </div>
      </div>

      <p className="font-archivo font-normal text-sm md:text-base lg:text-[17px] leading-relaxed md:leading-6 lg:leading-6.5 text-[#868686] text-center w-full px-4 md:px-8 lg:px-0 whitespace-normal lg:whitespace-pre-wrap">
        If you want a quiet ballroom, this isn't your spot.
      </p>

      {/* Boxes */}
      <div className="w-full max-w-[1106px] flex flex-col items-center justify-center px-4 md:px-8 lg:px-0">
        <div className="flex flex-col md:flex-row gap-6 md:gap-6 lg:gap-[30px] items-stretch w-full">
          {/* Box 1 - With Background Image */}
          <div className="relative w-full md:w-1/3 h-[350px] md:h-[433px] flex flex-col items-start justify-center overflow-hidden p-6 md:p-[35px]">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 overflow-hidden">
                <Image 
                  src="/assets/images/wedding-ceremony.jpg"
                  alt="Mountain Lawn Ceremony"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="relative flex flex-col gap-2.5 items-center w-full whitespace-normal z-10">
              <h3 className="font-oswald font-bold text-xl md:text-[25px] leading-tight md:leading-[35px] text-white w-full">
                Ceremony on the Mountain Lawn
              </h3>
              <p className="font-archivo font-normal text-sm md:text-[17px] leading-relaxed md:leading-6.5 text-white/75 w-full">
                Big sky. Rolling hills. Elevated vibes.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white w-full md:w-1/3 min-h-[300px] md:h-[433px] flex flex-col items-start justify-center overflow-hidden p-6 md:p-[35px]">
            <div className="flex flex-col gap-2.5 items-center w-full whitespace-normal">
              <h3 className="font-oswald font-bold text-xl md:text-[25px] leading-tight md:leading-[35px] text-[#333] w-full">
                Receptions in The Marshall Barn
              </h3>
              <p className="font-archivo font-normal text-sm md:text-[17px] leading-relaxed md:leading-6.5 text-[#6e6e6e] w-full">
                Warm wood, glowing lights, and brand-new patio for cocktail hours and rehearsal dinners.
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white w-full md:w-1/3 min-h-[300px] md:h-auto flex flex-col items-start justify-center overflow-hidden p-6 md:p-[35px]">
            <div className="flex flex-col gap-2.5 items-center w-full">
              <h3 className="font-oswald font-bold text-xl md:text-[25px] leading-tight md:leading-[35px] text-[#333] w-full whitespace-normal">
                Total Takeover Experience
              </h3>
              <div className="font-archivo font-normal text-sm md:text-[17px] leading-relaxed md:leading-6.5 text-[#6e6e6e] w-full whitespace-normal">
                <p className="mb-3">Your wedding party can:</p>
                <p className="mb-3">• stay on-site (23-person farmhouse),</p>
                <p className="mb-3">• explore trails,</p>
                <p className="mb-3">• use the Dude Den,</p>
                <p className="mb-3">• hit the HOH gym,</p>
                <p className="mb-3">• do a mud-run obstacle challenge,</p>
                <p className="mb-3">• take sunset UTV tours,</p>
                <p>• enjoy fire pits under stars.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <Button 
        href="/schedule-tour" 
        variant="primary"
        className="px-4 py-2 md:px-5 md:py-2.5 lg:px-3 lg:py-[7px] text-sm md:text-base"
      >
        Schedule a Tour
      </Button>
    </section>
    </FadeInSection>
  );
}
