import Image from "next/image";
import Link from "next/link";

export default function WeddingSection() {
  return (
    <section className="bg-[#f9f9f9] w-full flex flex-col gap-[45px] items-center overflow-hidden p-[100px]">
      {/* Top - Title */}
      <div className="w-full flex items-center justify-between">
        <div className="w-[1240px] flex flex-col items-center overflow-hidden">
          <div className="font-oswald font-bold text-[45px] leading-[59px] text-[#333] text-center capitalize w-full whitespace-pre-wrap">
            <p className="mb-0">Epic Weddings for Couples</p>
            <p>Who Want MORE</p>
          </div>
        </div>
      </div>

      <p className="font-archivo font-normal text-[17px] leading-[26px] text-[#868686] text-center min-w-full whitespace-pre-wrap">
        If you want a quiet ballroom, this isn't your spot.
      </p>

      {/* Boxes */}
      <div className="w-[1106px] flex flex-col items-start justify-center">
        <div className="flex gap-[30px] items-start">
          {/* Box 1 - With Background Image */}
          <div className="relative w-[350px] h-[433px] flex flex-col items-start justify-center overflow-hidden p-[35px]">
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
            <div className="relative flex flex-col gap-2.5 items-center w-full whitespace-pre-wrap z-10">
              <h3 className="font-oswald font-bold text-[25px] leading-[35px] text-white w-full">
                Ceremony on the Mountain Lawn
              </h3>
              <p className="font-archivo font-normal text-[17px] leading-[26px] text-white/75 w-full">
                Big sky. Rolling hills. Elevated vibes.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white w-[350px] h-[433px] flex flex-col items-start justify-center overflow-hidden p-[35px]">
            <div className="flex flex-col gap-2.5 items-center w-full whitespace-pre-wrap">
              <h3 className="font-oswald font-bold text-[25px] leading-[35px] text-[#333] w-full">
                Receptions in The Marshall Barn
              </h3>
              <p className="font-archivo font-normal text-[17px] leading-[26px] text-[#6e6e6e] w-full">
                Warm wood, glowing lights, and brand-new patio for cocktail hours and rehearsal dinners.
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white w-[350px] flex flex-col items-start justify-center overflow-hidden p-[35px]">
            <div className="flex flex-col gap-2.5 items-center w-full">
              <h3 className="font-oswald font-bold text-[25px] leading-[35px] text-[#333] w-full whitespace-pre-wrap">
                Total Takeover Experience
              </h3>
              <div className="font-archivo font-normal text-[17px] leading-[26px] text-[#6e6e6e] w-full whitespace-pre-wrap">
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
      <Link 
        href="/schedule-tour" 
        className="bg-[#5e8591] flex flex-col items-center justify-center overflow-hidden px-3 py-[7px]"
      >
        <span className="font-oswald font-semibold text-sm text-center text-white tracking-[0.84px] uppercase leading-6">
          Schedule a Tour
        </span>
      </Link>
    </section>
  );
}
