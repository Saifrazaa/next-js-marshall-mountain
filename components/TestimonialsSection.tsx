import Image from "next/image";
import Link from "next/link";

export default function TestimonialsSection() {
  return (
    <section className="bg-white w-full flex flex-col gap-[45px] items-center overflow-hidden pb-[100px] pt-0 px-[100px]">
      <div className="bg-white w-full flex gap-[60px] items-center overflow-hidden pb-[50px] pl-[100px] pr-0 pt-[100px]">
        {/* Left Side - Heading */}
        <div className="flex flex-row items-center self-stretch">
          <div className="bg-white w-[423px] h-full flex flex-col gap-[25px] items-start justify-center overflow-hidden">
            <p className="font-oswald font-semibold text-sm text-[#dadada] uppercase tracking-[0.84px] leading-6 min-w-full whitespace-pre-wrap">
              Testimonials carousel
            </p>
            <h2 className="font-oswald font-bold text-[45px] leading-[59px] text-[#333] capitalize min-w-full whitespace-pre-wrap">
              Guests Love Their Time on the Mountain
            </h2>
            <Link href="/reviews" className="flex gap-2.5 items-start text-[#5e8591] leading-6">
              <span className="font-oswald font-semibold text-sm uppercase tracking-[0.84px]">
                See Guest Reviews
              </span>
              <span className="text-base">→</span>
            </Link>
          </div>
        </div>

        {/* Right Side - Testimonial Boxes */}
        <div className="flex-1 flex flex-col items-start justify-center overflow-hidden pl-0 pr-[100px]">
          <div className="w-full flex gap-[30px] items-center">
            {/* Box 1 - Active */}
            <div className="bg-[#5e8591] w-[363.5px] flex flex-col gap-5 items-start overflow-hidden p-[35px]">
              <p className="font-archivo font-medium italic text-[20px] leading-[26px] text-white/75 w-full whitespace-pre-wrap">
                Best wedding weekend ever
              </p>
              <div className="w-full flex gap-[25px] items-center">
                <div className="bg-[#d9d9d9] w-[65px] h-[65px]" />
                <div className="flex-1 flex flex-col gap-2.5 items-start justify-center whitespace-pre-wrap">
                  <h3 className="font-oswald font-bold text-[20px] leading-[29px] text-white w-full">
                    Mr. John Doe
                  </h3>
                  <p className="font-oswald font-semibold text-sm text-[#ebebeb] uppercase tracking-[0.84px] leading-6 w-full">
                    Clients
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-[#f9f9f9] w-[363.5px] flex flex-col gap-5 items-start overflow-hidden p-[35px]">
              <p className="font-archivo font-medium italic text-[20px] leading-[26px] text-[#6e6e6e] w-full whitespace-pre-wrap">
                Our company came back more connected
              </p>
              <div className="w-full flex gap-[25px] items-center">
                <div className="bg-black/20 w-[65px] h-[65px]" />
                <div className="flex-1 flex flex-col gap-2.5 items-start justify-center whitespace-pre-wrap">
                  <h3 className="font-oswald font-bold text-[20px] leading-[29px] text-[#868686] w-full">
                    Mr. John Doe
                  </h3>
                  <p className="font-oswald font-semibold text-sm text-[#bebebe] uppercase tracking-[0.84px] leading-6 w-full">
                    Clients
                  </p>
                </div>
              </div>
            </div>

            {/* Box 3 - Faded */}
            <div className="bg-[#f9f9f9] w-[363.5px] flex flex-col gap-5 items-start opacity-35 overflow-hidden p-[35px]">
              <p className="font-archivo font-medium italic text-[20px] leading-[26px] text-[#6e6e6e] w-full whitespace-pre-wrap">
                The farmhouse was perfect for our friends
              </p>
              <div className="w-full flex gap-[25px] items-center">
                <div className="w-[65px] h-[65px] relative">
                  <Image 
                    src="/assets/images/testimonial.jpg"
                    alt="Client"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2.5 items-start justify-center whitespace-pre-wrap">
                  <h3 className="font-oswald font-bold text-[25px] leading-[35px] text-[#868686] w-full">
                    Mr. John Doe
                  </h3>
                  <p className="font-oswald font-semibold text-sm text-[#bebebe] uppercase tracking-[0.84px] leading-6 w-full">
                    Clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex gap-3 items-start">
        <div className="bg-[#bebebe] h-3 w-[50px]" />
        <div className="bg-[#dadada] w-3 h-3" />
        <div className="bg-[#dadada] w-3 h-3" />
      </div>
    </section>
  );
}
