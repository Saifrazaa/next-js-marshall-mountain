import Image from "next/image";
import Button from "../ui/Button";

export default function Footer() {
  return (
    <footer className="bg-black w-full flex flex-col gap-4 md:gap-[18px] items-start overflow-hidden pb-6 md:pb-8 lg:pb-[30px] pt-8 md:pt-12 lg:pt-20 xl:pt-25 px-5 md:px-8 lg:px-16 xl:px-25">
      {/* Top Section */}
      <div className="w-full flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 xl:flex xl:flex-row gap-8 md:gap-8 lg:gap-6 xl:gap-[30px] items-start overflow-hidden">
        {/* First Column - Contact Info */}
        <div className="w-full lg:w-full xl:w-[342px] flex flex-col gap-4 md:gap-6 lg:gap-[25px] items-start overflow-hidden">
          <div className="font-archivo font-normal text-sm md:text-base lg:text-[17px] leading-relaxed md:leading-6 lg:leading-6.5 text-white/75 w-full">
            <p>
              This is from the house looking down We are in the foothills
              between the Adirondacks and the Catskills The mountains need to be
              more reflective of green covered rolling hills Not Rocky Mountains
            </p>
          </div>
          <div className="w-full flex flex-col gap-3 md:gap-[15px] items-start">
            <div className="w-full flex gap-3 md:gap-[15px] items-center px-0 py-px">
              <span className="text-white text-base md:text-[20px] flex-shrink-0">
                <Image
                  src="/assets/icons/envelope.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                />
              </span>
              <div className="font-archivo font-normal text-sm md:text-base lg:text-[17px] leading-relaxed md:leading-6 lg:leading-6.5 text-white/75 flex-1 break-all">
                <p>dan@blueberrybrookfarmresort.com</p>
              </div>
            </div>
            <div className="w-full flex gap-3 md:gap-[15px] items-center px-0 py-px">
              <span className="text-white text-base md:text-[20px] flex-shrink-0">
                <Image
                  src="/assets/icons/phone-square.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                />
              </span>
              <div className="flex-1 font-archivo font-normal text-sm md:text-base lg:text-[17px] leading-relaxed md:leading-6 lg:leading-6.5 text-white/75">
                <p>‪+1 (315) 725-7934</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="w-full lg:w-full xl:flex-1 flex flex-col gap-4 md:gap-6 lg:gap-[25px] items-start overflow-hidden">
          <h3 className="font-oswald font-bold text-xl md:text-2xl lg:text-[25px] leading-tight md:leading-8 lg:leading-[35px] text-white w-full">
            Quick Links
          </h3>
          <div className="w-full flex flex-col gap-3 md:gap-[15px] items-start">
            <Button
              href="/mountain-experience"
              variant="text"
              className="w-full flex gap-3 md:gap-[15px] items-center px-0 py-px justify-start text-white/75 font-archivo text-sm md:text-base lg:text-[17px] leading-relaxed md:leading-6 lg:leading-6.5"
            >
              <span className="text-white text-base md:text-[20px]">▸</span>
              <span>Mountain Experience</span>
            </Button>
            <Button
              href="/ceremony-locations"
              variant="text"
              className="w-full flex gap-3 md:gap-[15px] items-center px-0 py-px justify-start text-white/75 font-archivo text-sm md:text-base lg:text-[17px] leading-relaxed md:leading-6 lg:leading-6.5"
            >
              <span className="text-white text-base md:text-[20px]">▸</span>
              <span>Ceremony Locations</span>
            </Button>
            <Button
              href="/reception"
              variant="text"
              className="w-full flex gap-3 md:gap-[15px] items-center px-0 py-px justify-start text-white/75 font-archivo text-sm md:text-base lg:text-[17px] leading-relaxed md:leading-6 lg:leading-6.5"
            >
              <span className="text-white text-base md:text-[20px]">▸</span>
              <span>Our Reception</span>
            </Button>
            <Button
              href="/pricing"
              variant="text"
              className="w-full flex gap-3 md:gap-[15px] items-center px-0 py-px justify-start text-white/75 font-archivo text-sm md:text-base lg:text-[17px] leading-relaxed md:leading-6 lg:leading-6.5"
            >
              <span className="text-white text-base md:text-[20px]">▸</span>
              <span>Our Pricing</span>
            </Button>
            <Button
              href="/real-moments"
              variant="text"
              className="w-full flex gap-3 md:gap-[15px] items-center px-0 py-px justify-start text-white/75 font-archivo text-sm md:text-base lg:text-[17px] leading-relaxed md:leading-6 lg:leading-6.5"
            >
              <span className="text-white text-base md:text-[20px]">▸</span>
              <span>Real Moments</span>
            </Button>
          </div>
        </div>

        {/* Useful Links Column */}
        <div className="w-full lg:w-full xl:flex-1 flex flex-col gap-4 md:gap-6 lg:gap-[25px] items-start overflow-hidden">
          <h3 className="font-oswald font-bold text-xl md:text-2xl lg:text-[25px] leading-tight md:leading-8 lg:leading-[35px] text-white w-full">
            Usefull Links
          </h3>
          <div className="w-full flex flex-col gap-3 md:gap-[15px] items-start">
            <Button
              href="/privacy"
              variant="text"
              className="w-full flex gap-3 md:gap-[15px] items-center px-0 py-px justify-start text-white/75 font-archivo text-sm md:text-base lg:text-[17px] leading-relaxed md:leading-6 lg:leading-6.5"
            >
              <span className="text-white text-base md:text-[20px]">▸</span>
              <span>Privacy Policy</span>
            </Button>
            <Button
              href="/disclaimer"
              variant="text"
              className="w-full flex gap-3 md:gap-[15px] items-center px-0 py-px justify-start text-white/75 font-archivo text-sm md:text-base lg:text-[17px] leading-relaxed md:leading-6 lg:leading-6.5"
            >
              <span className="text-white text-base md:text-[20px]">▸</span>
              <span>Disclaimer</span>
            </Button>
            <Button
              href="/terms"
              variant="text"
              className="w-full flex gap-3 md:gap-[15px] items-center px-0 py-px justify-start text-white/75 font-archivo text-sm md:text-base lg:text-[17px] leading-relaxed md:leading-6 lg:leading-6.5"
            >
              <span className="text-white text-base md:text-[20px]">▸</span>
              <span>Terms & Condition</span>
            </Button>
          </div>
        </div>

        {/* Newsletter/Follow Us Column */}
        <div className="w-full lg:w-full xl:w-[286px] flex flex-col gap-4 md:gap-6 lg:gap-[25px] items-start overflow-hidden md:col-span-2 lg:col-span-1">
          <h3 className="font-oswald font-bold text-xl md:text-2xl lg:text-[25px] leading-tight md:leading-8 lg:leading-[35px] text-white">
            Follow Us
          </h3>
          <p className="font-archivo font-normal text-sm md:text-base lg:text-[17px] leading-relaxed md:leading-6 lg:leading-6.5 text-white/75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex gap-3 md:gap-4 items-center text-white text-base md:text-[20px]">
            <Button
              href="#"
              ariaLabel="Facebook"
              variant="text"
              className="text-white hover:text-white/75"
            >
              <Image
                src="/assets/icons/facebook.svg"
                alt="arrow"
                width={20}
                height={20}
              />
            </Button>
            <Button
              href="#"
              ariaLabel="Twitter"
              variant="text"
              className="text-white hover:text-white/75"
            >
              <Image
                src="/assets/icons/twitter.svg"
                alt="arrow"
                width={20}
                height={20}
              />
            </Button>
            <Button
              href="#"
              ariaLabel="Instagram"
              variant="text"
              className="text-white hover:text-white/75"
            >
              <Image
                src="/assets/icons/instagram.svg"
                alt="arrow"
                width={20}
                height={20}
              />
            </Button>
            <Button
              href="#"
              ariaLabel="Pinterest"
              variant="text"
              className="text-white hover:text-white/75"
            >
              <Image
                src="/assets/icons/pinterest.svg"
                alt="arrow"
                width={20}
                height={20}
              />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/25 w-full flex items-start overflow-hidden pb-0 pt-6 md:pt-8 lg:pt-[30px] px-0">
        <div className="flex-1 font-oswald font-semibold text-xs md:text-sm text-center text-white uppercase tracking-[0.84px] leading-6">
          <p>Allright Reserved - MARSHALL MOUNTAIN RESORT</p>
        </div>
      </div>
    </footer>
  );
}
