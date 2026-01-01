import Image from "next/image";
import FadeInSection from "./FadeInSection";

export default function LocationSection() {
  return (
    <>
      {/* Location Title */}
      <FadeInSection>
        <div className="w-full py-8 md:py-10 lg:py-0 lg:h-14.75 flex flex-col gap-5 items-start overflow-hidden px-5 md:px-8 lg:px-0">
        <h2 className="font-oswald font-bold text-2xl md:text-3xl lg:text-[45px] leading-tight md:leading-snug lg:leading-14.75 text-black text-center capitalize w-full whitespace-normal lg:whitespace-pre-wrap">
          LOCATION MAP
        </h2>
      </div>
      </FadeInSection>

      {/* Map Section */}
      <FadeInSection>
        <section className="relative w-full flex gap-8 md:gap-12 lg:gap-[60px] items-center justify-center overflow-hidden px-5 md:px-12 lg:px-[170px] py-8 md:py-12 lg:py-[60px]">
        <div className="flex-1 h-64 md:h-80 lg:h-[300px] flex items-start overflow-hidden px-0 py-1">
          <div className="bg-black/5 flex-1 h-full rounded-md relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1100px] lg:h-[1100px]">
              <Image 
                src="/assets/images/location-map.jpg"
                alt="Location map"
                fill
                className="object-contain"
              />
            </div>
            <p className="absolute font-medium text-xs md:text-sm lg:text-base leading-tight md:leading-[22px] text-black text-center left-4 right-4 top-[calc(50%+8px)] whitespace-normal lg:whitespace-pre-wrap">
              Centered map illustrating various points of interest.
            </p>
            <div className="absolute left-1/2 -translate-x-1/2 top-[calc(50%-12px)] -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
              <Image 
                src="/assets/images/location-marker.svg"
                alt="Location marker"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-0">
          <div className="absolute inset-x-0 -inset-y-px">
            <Image 
              src="/assets/images/wave-divider-1.svg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      </FadeInSection>
    </>
  );
}
