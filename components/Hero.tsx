import Image from "next/image";
import Link from "next/link";
import Header from "./Header";

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col gap-[100px] items-start pb-[100px] pt-0 px-[100px]">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <Image 
            src="/assets/images/hero.jpg"
            alt="Marshall Mountain Resort"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Header */}
      <Header />

      {/* Hero Content */}
      <div className="relative w-full flex items-center overflow-hidden z-10">
        <div className="flex-1 flex flex-row items-center self-stretch">
          <div className="flex-1 flex flex-col h-full items-start justify-center min-h-0 min-w-0">
            <div className="h-[260px] w-full relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1240px] whitespace-pre-wrap">
                <h1 className="font-oswald font-bold text-[60px] leading-[78px] text-white text-center capitalize mb-0">
                  Adventure Lives at
                </h1>
                <h1 className="font-oswald font-bold text-[60px] leading-[78px] text-white text-center capitalize">
                  the Center of New York
                </h1>
              </div>
              <p className="absolute font-archivo font-normal text-[17px] leading-[26px] text-white/75 text-center left-[620px] -translate-x-1/2 top-[176px] w-[1240px] whitespace-pre-wrap">
                Where the mountain is alive — and everything runs on pure electric fun.
              </p>
              <Link 
                href="/explore" 
                className="absolute bg-[#5e8591] h-[38px] left-1/2 -translate-x-1/2 top-[222px] w-[180px] overflow-hidden"
              >
                <span className="absolute font-oswald font-semibold text-sm text-center text-white leading-6 tracking-[0.84px] uppercase left-[90px] -translate-x-1/2 top-[7px]">
                  Explore the Mountain
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
