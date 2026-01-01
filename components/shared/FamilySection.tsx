import Image from "next/image";
import FadeInSection from "./FadeInSection";
import Button from "../ui/Button";

export default function FamilySection() {
  return (
    <>
      {/* First Family Section - Memory Section */}
      <FadeInSection>
        <section className="relative bg-[#5e8591] w-full flex gap-[60px] items-center justify-center overflow-hidden px-[170px] py-[60px]">
        <div className="flex-1 flex flex-col gap-6 items-start">
          <h2 className="font-bold text-[40px] leading-[48px] text-white min-w-full whitespace-pre-wrap">
            A Mountain Full of Shared Memories
          </h2>
          <p className="font-normal text-base leading-6 text-white min-w-full whitespace-pre-wrap">
            Birthdays. Kids camps. Teen adventures. Weddings with kid zones. Family weekends powered by motion and imagination.
          </p>
          <Button href="/family" variant="secondary" className="rounded-lg w-[240px]">
            Explore Family Experiences
          </Button>
        </div>
        <div className="flex-1 h-[400px] flex items-start overflow-hidden">
          <div className="flex-1 h-full relative">
            <Image 
              src="/assets/images/family-memories.jpg"
              alt="Family memories"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-0">
          <div className="absolute inset-x-0 -inset-y-px">
            <Image 
              src="/assets/images/wave-divider-1.svg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* Second Family Section - Generational Play */}
      <FadeInSection>
        <section className="relative w-full flex gap-[60px] h-[575px] items-center justify-center overflow-hidden px-[170px]">
        <div className="flex-1 flex flex-col gap-6 items-start whitespace-pre-wrap">
          <h2 className="font-bold text-[40px] leading-[48px] text-[#333] w-full">
            Designed for Generational Play — From Kids to Grandparents
          </h2>
          <p className="font-normal text-base leading-6 text-black w-full">
            Explore a range of activities perfect for all ages.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-10 items-center justify-center px-0 py-5">
          {/* Row 1 */}
          <div className="w-full flex items-center">
            <div className="flex-1 border border-black/10 flex gap-4 items-start justify-center p-4 rounded-md">
              <div className="w-[100px] h-[100px] flex items-start overflow-hidden">
                <div className="flex-1 h-full relative">
                  <Image 
                    src="/assets/images/family-adventures.jpg"
                    alt="Family Adventures"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-2 items-start text-black whitespace-pre-wrap">
                <h3 className="font-medium text-[20px] leading-7 w-full">
                  Family Adventures
                </h3>
                <p className="font-normal text-base leading-6 w-full">
                  Enjoy a variety of activities that engage the entire family.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="w-full flex items-center">
            <div className="flex-1 border border-black/10 flex gap-4 items-start justify-center p-4 rounded-md">
              <div className="w-[100px] h-[100px] flex items-start overflow-hidden">
                <div className="flex-1 h-full relative">
                  <Image 
                    src="/assets/images/kids-camps.jpg"
                    alt="Kids Camps"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-2 items-start text-black whitespace-pre-wrap">
                <h3 className="font-medium text-[20px] leading-7 w-full">
                  Kids Camps
                </h3>
                <p className="font-normal text-base leading-6 w-full">
                  Safe exploration and learning opportunities for your little ones.
                </p>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="w-full flex items-center">
            <div className="flex-1 border border-black/10 flex gap-4 items-start justify-center p-4 rounded-md">
              <div className="w-[100px] h-[100px] flex items-start overflow-hidden">
                <div className="flex-1 h-full relative">
                  <Image 
                    src="/assets/images/vibrant-events.jpg"
                    alt="Vibrant Events"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-2 items-start text-black whitespace-pre-wrap">
                <h3 className="font-medium text-[20px] leading-7 w-full">
                  Vibrant Events
                </h3>
                <p className="font-normal text-base leading-6 w-full">
                  Engaging community events throughout the year.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-0">
          <Image 
            src="/assets/images/wave-divider-2.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </section>
      </FadeInSection>
    </>
  );
}
