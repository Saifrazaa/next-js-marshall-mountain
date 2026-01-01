import Image from "next/image";
import FadeInSection from "./FadeInSection";
import Button from "../ui/Button";

export default function ScheduleTourSection() {
  return (
    <FadeInSection>
      <section className="relative h-[223px] w-full">
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
        <h2 className="absolute font-oswald font-bold text-[45px] leading-14.75 text-white text-center capitalize left-1/2 -translate-x-1/2 top-11">
          Schedule a Tour
        </h2>
        <div className="absolute left-[491px] top-[123px] flex gap-8">
          <Button
            href="/wedding"
            className="bg-[#ebebeb] px-[38px] py-[15px] !text-[#a4a4a4] font-oswald font-semibold text-sm uppercase tracking-[0.84px] leading-6"
          >
            Plan a Wedding or Event
          </Button>
          <Button href="/lodging" variant="primary">
            Book Lodging
          </Button>
        </div>
      </section>
    </FadeInSection>
  );
}
