import Image from "next/image";
import FadeInSection from "./FadeInSection";
import Button from "../ui/Button";

export default function ScheduleTourSection() {
  return (
    <FadeInSection>
      <section className="relative min-h-[300px] md:min-h-[250px] lg:h-[223px] w-full py-8 md:py-12 lg:py-0 px-5 md:px-8 lg:px-0">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#434343] inset-0" />
          <div className="absolute inset-0 opacity-20 overflow-hidden">
            <Image
              src="/assets/images/schedule-tour-bg.jpg"
              alt="Schedule a tour"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-0">
          <h2 className="font-oswald font-bold text-2xl md:text-3xl lg:text-[45px] leading-tight md:leading-snug lg:leading-14.75 text-white text-center capitalize lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-11">
            Schedule a Tour
          </h2>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 w-full max-w-md md:max-w-none lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-[123px] lg:w-auto">
            <Button
              href="/wedding"
              className="bg-[#ebebeb] px-6 md:px-8 lg:px-[38px] py-3 md:py-4 lg:py-[15px] !text-[#a4a4a4] font-oswald font-semibold text-xs md:text-sm uppercase tracking-[0.84px] leading-6 w-full md:w-auto"
            >
              Plan a Wedding or Event
            </Button>
            <Button href="/lodging" variant="primary" className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 lg:py-[15px]">
              Book Lodging
            </Button>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
