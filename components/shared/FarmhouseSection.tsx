import Image from "next/image";
import FadeInSection from "./FadeInSection";
import Button from "../ui/Button";

export default function FarmhouseSection() {
  return (
    <FadeInSection>
      <section className="bg-white w-full flex gap-[60px] items-start overflow-hidden pb-[100px] pt-[50px] px-[100px]">
      {/* Left Side - Content */}
      <div className="flex-1 flex flex-col gap-[35px] items-start justify-center min-h-0 min-w-0 overflow-hidden pb-[15px] pt-[2px]">
        <div className="flex flex-col gap-5 items-start">
          <h2 className="font-oswald font-bold text-[45px] leading-[59px] text-[#333] capitalize w-[590px] whitespace-pre-wrap">
            Stay Together. Play Together. Recharge Together.
          </h2>
          <div className="font-archivo font-normal text-[17px] leading-[26px] text-[#6e6e6e] w-[589px] whitespace-pre-wrap">
            <p className="font-bold mb-3">Our newly updated Farmhouse sleeps up to 23 guests with:</p>
            <p className="mb-3">• Game room (pool + bar)</p>
            <p className="mb-3">• Full kitchen & gathering spaces</p>
            <p className="mb-3">• Coming soon: The Dude Den — the ultimate hangout zone</p>
            <p className="mb-3">• Outdoor fire pit</p>
            <p className="mb-3">• Mountain views</p>
            <p className="mb-3">• Dog-friendly accommodations</p>
            <p className="font-bold mb-3">Perfect for:</p>
            <p className="mb-3">• wedding parties,</p>
            <p className="mb-3">• corporate retreats,</p>
            <p className="mb-3">• family gatherings,</p>
            <p>• bachelor/bachelorette groups.</p>
          </div>
        </div>
        <Button 
          href="/farmhouse" 
          variant="primary"
          className="px-3 py-[7px]"
        >
          Explore the Farmhouse
        </Button>
      </div>

      {/* Right Side - Images */}
      <div className="flex-1 flex flex-col items-start justify-center min-h-0 min-w-0 pl-[120px] relative self-stretch">
        <div className="flex-1 min-h-0 min-w-0 w-full relative">
          <Image 
            src="/assets/images/farmhouse-main.jpg"
            alt="Farmhouse exterior"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute border-[12px] border-solid border-white h-[398px] left-0 shadow-[0px_10px_25px_0px_rgba(0,0,0,0.07)] top-1/2 -translate-y-1/2 w-[280px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image 
              src="/assets/images/farmhouse-small.jpg"
              alt="Farmhouse interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
    </FadeInSection>
  );
}
