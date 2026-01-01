import Image from "next/image";
import FadeInSection from "./FadeInSection";
import Button from "../ui/Button";
import Link from "next/link";

export default function ActivitiesSection() {
  return (
    <FadeInSection>
      <section className="bg-white w-full flex flex-col gap-12.5 items-center overflow-hidden pb-25 pt-12.5 px-25">
        {/* Title */}
        <div className="w-180 flex flex-col gap-5 items-start overflow-hidden text-center whitespace-pre-wrap">
          <h2 className="font-oswald font-bold text-[45px] leading-14.75 text-[#333] capitalize w-full">
            Where the Mountain Moves You Literally.
          </h2>
          <p className="font-archivo font-normal text-[17px] leading-6.5 text-[#6e6e6e] w-full">
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
              <ActivityBox
                title="E-Bike Trails (4 miles built — 10 coming)"
                desc="Ride through forest, valleys, and drumlins."
                link="/experience"
              />
              <ActivityBox
                title="E-Moto Zone (coming)"
                desc="Electric motocross hidden behind the farmhouse."
                link="/experience"
              />
            </div>

            {/* Row 2 */}
            <div className="w-full flex gap-[30px] items-start">
              <ActivityBox
                title="UTV Mountain Tours"
                desc="Bring your own or ride with us — we'll get you to the best
                  views (and to town for snacks)."
                link="/experience"
              />
              <ActivityBox
                title="Mud Run & Obstacle Course"
                desc="Home of the legendary Barden Mudfest. Perfect for bachelor
                  squads, bridal parties, and team building."
                link="/experience"
              />
            </div>

            {/* Row 3 */}
            <div className="w-full flex gap-[30px] items-start">
              <ActivityBox
                title="HOH Gym (Kid Zone + Adult Playground)"
                desc="A movement arena for kids, athletes, CEOs, and everyone in
                  between."
                link="/experience"
              />
              <ActivityBox
                title="Trails That Connect Two Worlds"
                desc="MMR's trail system links directly to Blueberry Brook Farm
                  Resort via the Marshall Towpath."
                link="/experience"
              />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Button href="/experiences" variant="primary" className="px-3 py-[7px]">
          Explore Experiences
        </Button>

        {/* Corporate Title */}
        <div className="w-180 h-[190px] flex flex-col gap-5 items-start overflow-hidden text-center whitespace-pre-wrap">
          <h2 className="font-oswald font-bold text-[45px] leading-14.75 text-[#333] capitalize w-full">
            Corporate Retreats Don't Have to Be Boring.
          </h2>
          <p className="font-archivo font-normal text-[17px] leading-6.5 text-[#6e6e6e] h-[52px] w-full">
            At Marshall Mountain, teams reconnect by moving together — on
            trails, around fire pits, and away from conference rooms.
          </p>
        </div>
      </section>
    </FadeInSection>
  );
}

const ActivityBox = ({
  title,
  desc,
  link,
}: {
  title: string;
  desc: string;
  link: string;
}) => (
  <Link
    href={link}
    className="bg-[#f9f9f9] hover:bg-[#5e8591] flex-1 h-42.5 flex flex-col gap-2.5 items-start p-8.75 whitespace-pre-wrap group transition-all"
  >
    <h3 className="font-oswald font-bold text-[20px] leading-7.25 text-[#333] group-hover:text-white w-full">
      {title}
    </h3>
    <p className="font-archivo font-normal text-[17px] leading-6.5 text-[#6e6e6e] group-hover:text-white/75 w-full">
      {desc}
    </p>
  </Link>
);
