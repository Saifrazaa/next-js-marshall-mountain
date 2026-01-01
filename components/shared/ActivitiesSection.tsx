import Image from "next/image";
import FadeInSection from "./FadeInSection";
import Button from "../ui/Button";

export default function ActivitiesSection() {
  return (
    <FadeInSection>
      <section className="bg-white w-full flex flex-col gap-[50px] items-center overflow-hidden pb-[100px] pt-[50px] px-[100px]">
        {/* Title */}
        <div className="w-[720px] flex flex-col gap-5 items-start overflow-hidden text-center whitespace-pre-wrap">
          <h2 className="font-oswald font-bold text-[45px] leading-[59px] text-[#333] capitalize w-full">
            Where the Mountain Moves You Literally.
          </h2>
          <p className="font-archivo font-normal text-[17px] leading-[26px] text-[#6e6e6e] w-full">
            This is an E-Powered playground designed for motion, adrenaline, and
            big smiles.
          </p>
        </div>

        {/* Content Grid */}
        <div className="w-full flex gap-[30px] items-start">
          {/* Left Image */}
          <div className="w-[320px] self-stretch relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image
                src="/assets/images/activities.jpg"
                alt="Mountain activities"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Grid */}
          <div className="flex-1 flex flex-col gap-[30px] items-start rounded-[30px]">
            {/* Row 1 */}
            <div className="w-full flex gap-[30px] items-start">
              <div className="bg-[#5e8591] flex-1 h-[170px] flex flex-col gap-2.5 items-start p-[35px] whitespace-pre-wrap">
                <h3 className="font-oswald font-bold text-[20px] leading-[29px] text-white w-full">
                  E-Bike Trails (4 miles built — 10 coming)
                </h3>
                <p className="font-archivo font-normal text-[17px] leading-[26px] text-white/75 w-full">
                  Ride through forest, valleys, and drumlins.
                </p>
              </div>
              <div className="bg-[#f9f9f9] flex-1 h-[170px] flex flex-col gap-2.5 items-start p-[35px] whitespace-pre-wrap">
                <h3 className="font-oswald font-bold text-[20px] leading-[29px] text-[#333] w-full">
                  E-Moto Zone (coming)
                </h3>
                <p className="font-archivo font-normal text-[17px] leading-[26px] text-[#6e6e6e] w-full">
                  Electric motocross hidden behind the farmhouse.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="w-full flex gap-[30px] items-start">
              <div className="bg-[#f9f9f9] flex-1 h-[170px] flex flex-col gap-2.5 items-start p-[35px] whitespace-pre-wrap">
                <h3 className="font-oswald font-bold text-[20px] leading-[29px] text-[#333] w-full">
                  UTV Mountain Tours
                </h3>
                <p className="font-archivo font-normal text-[17px] leading-[26px] text-[#6e6e6e] w-full">
                  Bring your own or ride with us — we'll get you to the best
                  views (and to town for snacks).
                </p>
              </div>
              <div className="bg-[#f9f9f9] flex-1 h-[170px] flex flex-col gap-2.5 items-start p-[35px] whitespace-pre-wrap">
                <h3 className="font-oswald font-bold text-[20px] leading-[29px] text-[#333] w-full">
                  Mud Run & Obstacle Course
                </h3>
                <p className="font-archivo font-normal text-[17px] leading-[26px] text-[#6e6e6e] w-full">
                  Home of the legendary Barden Mudfest. Perfect for bachelor
                  squads, bridal parties, and team building.
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="w-full flex gap-[30px] items-start">
              <div className="bg-[#f9f9f9] flex-1 h-[170px] flex flex-col gap-2.5 items-start p-[35px] whitespace-pre-wrap">
                <h3 className="font-oswald font-bold text-[20px] leading-[29px] text-[#333] w-full">
                  HOH Gym (Kid Zone + Adult Playground)
                </h3>
                <p className="font-archivo font-normal text-[17px] leading-[26px] text-[#6e6e6e] w-full">
                  A movement arena for kids, athletes, CEOs, and everyone in
                  between.
                </p>
              </div>
              <div className="bg-[#f9f9f9] flex-1 h-[170px] flex flex-col gap-2.5 items-start p-[35px] whitespace-pre-wrap">
                <h3 className="font-oswald font-bold text-[20px] leading-[29px] text-[#333] w-full">
                  Trails That Connect Two Worlds
                </h3>
                <p className="font-archivo font-normal text-[17px] leading-[26px] text-[#6e6e6e] w-full">
                  MMR's trail system links directly to Blueberry Brook Farm
                  Resort via the Marshall Towpath.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          href="/experiences"
          variant="primary"
          className="px-3 py-[7px]"
        >
          Explore Experiences
        </Button>

        {/* Corporate Title */}
        <div className="w-[720px] h-[190px] flex flex-col gap-5 items-start overflow-hidden text-center whitespace-pre-wrap">
          <h2 className="font-oswald font-bold text-[45px] leading-[59px] text-[#333] capitalize w-full">
            Corporate Retreats Don't Have to Be Boring.
          </h2>
          <p className="font-archivo font-normal text-[17px] leading-[26px] text-[#6e6e6e] h-[52px] w-full">
            At Marshall Mountain, teams reconnect by moving together — on
            trails, around fire pits, and away from conference rooms.
          </p>
        </div>
      </section>
    </FadeInSection>
  );
}
