import Button from "../ui/Button";

export default function Footer() {
  return (
    <footer className="bg-black w-full flex flex-col gap-[18px] items-start overflow-hidden pb-[30px] pt-[100px] px-[100px]">
      {/* Top Section */}
      <div className="w-full flex gap-[30px] items-start overflow-hidden">
        {/* First Column - Contact Info */}
        <div className="w-[342px] flex flex-col gap-[25px] items-start overflow-hidden">
          <div className="font-archivo font-normal text-[17px] leading-[26px] text-white/75 w-full">
            <p>This is from the house looking down We are in the foothills between the Adirondacks and the Catskills The mountains need to be more reflective of green covered rolling hills Not Rocky Mountains</p>
          </div>
          <div className="w-full flex flex-col gap-[15px] items-start">
            <div className="w-full flex gap-[15px] items-center px-0 py-px">
              <span className="text-white text-[20px]">✉</span>
              <div className="font-archivo font-normal text-[17px] leading-[26px] text-white/75 w-[347px]">
                <p>dan@blueberrybrookfarmresort.com</p>
              </div>
            </div>
            <div className="w-full flex gap-[15px] items-center px-0 py-px">
              <span className="text-white text-[20px]">📞</span>
              <div className="flex-1 font-archivo font-normal text-[17px] leading-[26px] text-white/75">
                <p>‪+1 (315) 725-7934</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="flex-1 flex flex-col gap-[25px] items-start overflow-hidden self-stretch">
          <h3 className="font-oswald font-bold text-[25px] leading-[35px] text-white w-full">
            Quick Links
          </h3>
          <div className="w-full flex flex-col gap-[15px] items-start">
            <Button href="/mountain-experience" variant="text" className="w-full flex gap-[15px] items-center px-0 py-px justify-start text-white/75 font-archivo text-[17px] leading-[26px]">
              <span className="text-white text-[20px]">▸</span>
              <span>Mountain Experience</span>
            </Button>
            <Button href="/ceremony-locations" variant="text" className="w-full flex gap-[15px] items-center px-0 py-px justify-start text-white/75 font-archivo text-[17px] leading-[26px]">
              <span className="text-white text-[20px]">▸</span>
              <span>Ceremony Locations</span>
            </Button>
            <Button href="/reception" variant="text" className="w-full flex gap-[15px] items-center px-0 py-px justify-start text-white/75 font-archivo text-[17px] leading-[26px]">
              <span className="text-white text-[20px]">▸</span>
              <span>Our Reception</span>
            </Button>
            <Button href="/pricing" variant="text" className="w-full flex gap-[15px] items-center px-0 py-px justify-start text-white/75 font-archivo text-[17px] leading-[26px]">
              <span className="text-white text-[20px]">▸</span>
              <span>Our Pricing</span>
            </Button>
            <Button href="/real-moments" variant="text" className="w-full flex gap-[15px] items-center px-0 py-px justify-start text-white/75 font-archivo text-[17px] leading-[26px]">
              <span className="text-white text-[20px]">▸</span>
              <span>Real Moments</span>
            </Button>
          </div>
        </div>

        {/* Useful Links Column */}
        <div className="flex-1 flex flex-col gap-[25px] items-start overflow-hidden self-stretch">
          <h3 className="font-oswald font-bold text-[25px] leading-[35px] text-white w-full">
            Usefull Links
          </h3>
          <div className="w-full flex flex-col gap-[15px] items-start">
            <Button href="/privacy" variant="text" className="w-full flex gap-[15px] items-center px-0 py-px justify-start text-white/75 font-archivo text-[17px] leading-[26px]">
              <span className="text-white text-[20px]">▸</span>
              <span>Privacy Policy</span>
            </Button>
            <Button href="/disclaimer" variant="text" className="w-full flex gap-[15px] items-center px-0 py-px justify-start text-white/75 font-archivo text-[17px] leading-[26px]">
              <span className="text-white text-[20px]">▸</span>
              <span>Disclaimer</span>
            </Button>
            <Button href="/terms" variant="text" className="w-full flex gap-[15px] items-center px-0 py-px justify-start text-white/75 font-archivo text-[17px] leading-[26px]">
              <span className="text-white text-[20px]">▸</span>
              <span>Terms & Condition</span>
            </Button>
          </div>
        </div>

        {/* Newsletter/Follow Us Column */}
        <div className="w-[286px] flex flex-col gap-[25px] items-start overflow-hidden">
          <h3 className="font-oswald font-bold text-[25px] leading-[35px] text-white">
            Follow Us
          </h3>
          <p className="font-archivo font-normal text-[17px] leading-[26px] text-white/75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex gap-3 items-start text-white text-[20px]">
            <Button href="#" ariaLabel="Facebook" variant="text" className="text-white hover:text-white/75">
              f
            </Button>
            <Button href="#" ariaLabel="Twitter" variant="text" className="text-white hover:text-white/75">
              𝕏
            </Button>
            <Button href="#" ariaLabel="Instagram" variant="text" className="text-white hover:text-white/75">
              📷
            </Button>
            <Button href="#" ariaLabel="Pinterest" variant="text" className="text-white hover:text-white/75">
              P
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/25 w-full flex items-start overflow-hidden pb-0 pt-[30px] px-0">
        <div className="flex-1 font-oswald font-semibold text-sm text-center text-white uppercase tracking-[0.84px] leading-6">
          <p>Allright Reserved - MARSHALL MOUNTAIN RESORT</p>
        </div>
      </div>
    </footer>
  );
}
