import Image from "next/image";
import FadeInSection from "./FadeInSection";
import Button from "../ui/Button";

export default function FarmhouseSection() {
  return (
    <FadeInSection>
      <section className="bg-white w-full flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-10 xl:gap-[60px] items-start overflow-hidden pb-12 md:pb-16 lg:pb-20 xl:pb-25 pt-8 md:pt-10 lg:pt-12.5 px-5 md:px-8 lg:px-16 xl:px-25">
      {/* Left Side - Content */}
      <div className="w-full lg:flex-1 flex flex-col gap-6 md:gap-8 lg:gap-[35px] items-start justify-center min-h-0 min-w-0 overflow-hidden">
        <div className="flex flex-col gap-4 md:gap-5 items-start">
          <h2 className="font-oswald font-bold text-2xl md:text-3xl lg:text-[45px] leading-tight md:leading-snug lg:leading-14.75 text-[#333] capitalize w-full xl:w-[590px] whitespace-normal xl:whitespace-pre-wrap">
            Stay Together. Play Together. Recharge Together.
          </h2>
          <div className="font-archivo font-normal text-sm md:text-base lg:text-[17px] leading-relaxed md:leading-6 lg:leading-6.5 text-[#6e6e6e] w-full xl:w-[589px] whitespace-normal xl:whitespace-pre-wrap">
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
          className="px-4 py-2 md:px-5 md:py-2.5 lg:px-3 lg:py-[7px] text-sm md:text-base"
        >
          Explore the Farmhouse
        </Button>
      </div>

      {/* Right Side - Images */}
      <div className="w-full lg:flex-1 flex flex-col items-start justify-center min-h-0 min-w-0 lg:pl-[120px] relative h-96 md:h-[500px] lg:h-auto lg:self-stretch">
        <div className="flex-1 min-h-0 min-w-0 w-full relative">
          <Image 
            src="/assets/images/farmhouse-main.jpg"
            alt="Farmhouse exterior"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute border-4 md:border-8 lg:border-[12px] border-solid border-white h-48 md:h-72 lg:h-[398px] left-0 shadow-[0px_10px_25px_0px_rgba(0,0,0,0.07)] top-1/2 -translate-y-1/2 w-40 md:w-56 lg:w-[280px]">
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
