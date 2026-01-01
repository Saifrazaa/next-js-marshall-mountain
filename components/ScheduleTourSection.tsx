import Image from "next/image";
import Link from "next/link";

export default function ScheduleTourSection() {
  return (
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
      <h2 className="absolute font-oswald font-bold text-[45px] leading-[59px] text-white text-center capitalize left-1/2 -translate-x-1/2 top-[44px]">
        Schedule a Tour
      </h2>
      <div className="absolute left-[491px] top-[123px] flex gap-0">
        <Link 
          href="/wedding" 
          className="bg-[#ebebeb] px-[38px] py-[15px] flex items-center justify-center overflow-hidden"
        >
          <span className="font-oswald font-semibold text-sm text-[#a4a4a4] uppercase tracking-[0.84px] leading-6">
            Plan a Wedding or Event
          </span>
        </Link>
        <Link 
          href="/lodging" 
          className="bg-[#5e8591] px-[38px] py-[15px] flex items-center justify-center overflow-hidden"
        >
          <span className="font-oswald font-semibold text-sm text-white uppercase tracking-[0.84px] leading-6">
            Book Lodging
          </span>
        </Link>
      </div>
    </section>
  );
}
