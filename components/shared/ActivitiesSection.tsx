import Image from "next/image";
import FadeInSection from "./FadeInSection";
import Button from "../ui/Button";
import Link from "next/link";

export default function ActivitiesSection() {
  return (
    <FadeInSection>
      <section className="bg-white w-full flex flex-col gap-8 md:gap-10 lg:gap-10 xl:gap-12.5 items-center overflow-hidden pb-12 md:pb-16 lg:pb-20 xl:pb-25 pt-8 md:pt-10 lg:pt-12.5 px-5 md:px-8 lg:px-16 xl:px-25">
        {/* Title */}
        <div className="w-full max-w-[720px] flex flex-col gap-4 md:gap-5 items-start overflow-hidden text-center whitespace-normal lg:whitespace-pre-wrap">
          <h2 className="font-oswald font-bold text-2xl md:text-3xl lg:text-[45px] leading-tight md:leading-snug lg:leading-14.75 text-[#333] capitalize w-full">
            Where the Mountain Moves You Literally.
          </h2>
          <p className="font-archivo font-normal text-sm md:text-base lg:text-[17px] leading-relaxed md:leading-6 lg:leading-6.5 text-[#6e6e6e] w-full">
            This is an E-Powered playground designed for motion, adrenaline, and
            big smiles.
          </p>
        </div>

        {/* Content Grid */}
        <div className="w-full flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-[30px] items-start">
          {/* Left Image */}
          <div className="w-full lg:w-[280px] xl:w-[320px] h-64 md:h-80 lg:h-auto lg:self-stretch relative">
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
          <div className="flex-1 flex flex-col gap-4 md:gap-6 lg:gap-[30px] items-start w-full">
            {/* Row 1 */}
            <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-[30px] items-start">
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
            <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-[30px] items-start">
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
            <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-[30px] items-start">
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
        <Button href="/experiences" variant="primary" className="px-4 py-2 md:px-5 md:py-2.5 lg:px-3 lg:py-[7px] text-sm md:text-base">
          Explore Experiences
        </Button>

        {/* Corporate Title */}
        <div className="w-full max-w-[720px] flex flex-col gap-4 md:gap-5 items-start overflow-hidden text-center whitespace-normal lg:whitespace-pre-wrap">
          <h2 className="font-oswald font-bold text-2xl md:text-3xl lg:text-[45px] leading-tight md:leading-snug lg:leading-14.75 text-[#333] capitalize w-full">
            Corporate Retreats Don't Have to Be Boring.
          </h2>
          <p className="font-archivo font-normal text-sm md:text-base lg:text-[17px] leading-relaxed md:leading-6 lg:leading-6.5 text-[#6e6e6e] w-full">
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
    className="bg-[#f9f9f9] hover:bg-[#5e8591] w-full md:flex-1 min-h-[150px] md:h-42.5 flex flex-col gap-2.5 items-start p-5 md:p-7 lg:p-8.75 whitespace-normal group transition-all"
  >
    <h3 className="font-oswald font-bold text-lg md:text-[20px] leading-tight md:leading-7.25 text-[#333] group-hover:text-white w-full">
      {title}
    </h3>
    <p className="font-archivo font-normal text-sm md:text-base lg:text-[17px] leading-relaxed md:leading-6 lg:leading-6.5 text-[#6e6e6e] group-hover:text-white/75 w-full">
      {desc}
    </p>
  </Link>
);
