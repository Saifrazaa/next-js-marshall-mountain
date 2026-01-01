"use client";
import Image from "next/image";
import FadeInSection from "./FadeInSection";
import Button from "../ui/Button";
import { useState } from "react";

const activityImages = [
  "/assets/images/activities/bike-trailing.jpg",
  "/assets/images/activities/moto-zone.jpeg",
  "/assets/images/activities/activities.jpg",
  "/assets/images/activities/mud-running.jpg",
  "/assets/images/activities/hoh-gym.webp",
  "/assets/images/activities/trails.jpg",
];

export default function ActivitiesSection() {
  const [activityImage, setActivityImage] = useState<number>(0);

  const handleActivityClick = (index: number) => {
    setActivityImage(index);
  };

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
                src={activityImages[activityImage]}
                alt={"Activity Image"}
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
                currnetlyActive={activityImage === 0}
                onClick={() => handleActivityClick(0)}
              />
              <ActivityBox
                title="E-Moto Zone (coming)"
                desc="Electric motocross hidden behind the farmhouse."
                currnetlyActive={activityImage === 1}
                onClick={() => handleActivityClick(1)}
              />
            </div>

            {/* Row 2 */}
            <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-[30px] items-start">
              <ActivityBox
                title="UTV Mountain Tours"
                desc="Bring your own or ride with us — we'll get you to the best
                  views (and to town for snacks)."
                currnetlyActive={activityImage === 2}
                onClick={() => handleActivityClick(2)}
              />
              <ActivityBox
                title="Mud Run & Obstacle Course"
                desc="Home of the legendary Barden Mudfest. Perfect for bachelor
                  squads, bridal parties, and team building."
                currnetlyActive={activityImage === 3}
                onClick={() => handleActivityClick(3)}
              />
            </div>

            {/* Row 3 */}
            <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-[30px] items-start">
              <ActivityBox
                title="HOH Gym (Kid Zone + Adult Playground)"
                desc="A movement arena for kids, athletes, CEOs, and everyone in
                  between."
                currnetlyActive={activityImage === 4}
                onClick={() => handleActivityClick(4)}
              />
              <ActivityBox
                title="Trails That Connect Two Worlds"
                desc="MMR's trail system links directly to Blueberry Brook Farm
                  Resort via the Marshall Towpath."
                currnetlyActive={activityImage === 5}
                onClick={() => handleActivityClick(5)}
              />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          href="/experiences"
          variant="primary"
          className="px-4 py-2 md:px-5 md:py-2.5 lg:px-3 lg:py-[7px] text-sm md:text-base"
        >
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
  currnetlyActive,
  onClick,
}: {
  title: string;
  desc: string;
  currnetlyActive: boolean;
  onClick: () => void;
}) => (
  <Button
    onClick={onClick}
    className={
      "hover:bg-[#5e8591] cursor-pointer w-full md:flex-1 min-h-37.5 md:h-42.5 flex flex-col gap-2.5 items-start p-5 md:p-7 lg:p-8.75 whitespace-normal group transition-all " +
      (currnetlyActive ? "bg-[#5e8591] text-white" : "bg-[#f9f9f9]")
    }
  >
    <h3
      className={
        "font-oswald font-bold text-lg md:text-[20px] leading-tight md:leading-7.25 text-[#333] group-hover:text-white w-full " +
        (currnetlyActive && "text-white")
      }
    >
      {title}
    </h3>
    <p
      className={
        "font-archivo font-normal text-sm md:text-base lg:text-[17px] leading-relaxed md:leading-6 lg:leading-6.5 text-[#6e6e6e] group-hover:text-white/75 w-full " +
        (currnetlyActive && "text-white/75")
      }
    >
      {desc}
    </p>
  </Button>
);
