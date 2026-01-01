import Image from "next/image";
import FadeInSection from "./FadeInSection";

export default function LocationSection() {
  return (
    <>
      {/* Location Title */}
      <FadeInSection>
        <div className="w-full h-14.75 flex flex-col gap-5 items-start overflow-hidden">
        <h2 className="font-oswald font-bold text-[45px] leading-14.75 text-black text-center capitalize w-full whitespace-pre-wrap">
          LOCATION MAP
        </h2>
      </div>
      </FadeInSection>

      {/* Map Section */}
      <FadeInSection>
        <section className="relative w-full flex gap-[60px] items-center justify-center overflow-hidden px-[170px] py-[60px]">
        <div className="flex-1 h-[300px] flex items-start overflow-hidden px-0 py-1">
          <div className="bg-black/5 flex-1 h-full rounded-md relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[1100px] h-[1100px]">
              <Image 
                src="/assets/images/location-map.jpg"
                alt="Location map"
                fill
                className="object-contain"
              />
            </div>
            <p className="absolute font-medium text-base leading-[22px] text-black text-center left-4 right-4 top-[calc(50%+8px)] whitespace-pre-wrap">
              Centered map illustrating various points of interest.
            </p>
            <div className="absolute left-1/2 -translate-x-1/2 top-[calc(50%-12px)] -translate-y-1/2 w-6 h-6">
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
