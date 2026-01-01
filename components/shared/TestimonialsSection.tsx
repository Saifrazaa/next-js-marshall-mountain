"use client";
import Image from "next/image";
import FadeInSection from "./FadeInSection";
import Pagination from "./Pagination";
import Button from "../ui/Button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

const testimonials = [
  {
    quote: "Best wedding weekend ever",
    name: "Mr. John Doe",
    role: "Clients",
    image: "/assets/images/testimonial.jpg",
    hasImage: false,
  },
  {
    quote: "Our company came back more connected",
    name: "Mr. John Doe",
    role: "Clients",
    image: null,
    hasImage: false,
  },
  {
    quote: "The farmhouse was perfect for our friends",
    name: "Mr. John Doe",
    role: "Clients",
    image: "/assets/images/testimonial.jpg",
    hasImage: true,
  },
];

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 30,
      align: "start",
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <FadeInSection>
      <section className="bg-white w-full flex flex-col gap-[45px] items-center overflow-hidden pt-0 pl-[100px]">
        <div className="bg-white w-full flex gap-[60px] items-center overflow-hidden pb-[50px] pr-0 pt-[100px]">
          {/* Left Side - Heading */}
          <div className="flex flex-row items-center self-stretch">
            <div className="bg-white w-[423px] h-full flex flex-col gap-[25px] items-start justify-center overflow-hidden">
              <p className="font-oswald font-semibold text-sm text-[#dadada] uppercase tracking-[0.84px] leading-6 min-w-full whitespace-pre-wrap">
                Testimonials carousel
              </p>
              <h2 className="font-oswald font-bold text-[45px] leading-[59px] text-[#333] capitalize min-w-full whitespace-pre-wrap">
                Guests Love Their Time on the Mountain
              </h2>
              <p className="flex gap-2.5 items-center text-[#5e8591] leading-6 font-oswald font-semibold text-sm uppercase tracking-[0.84px]">
                <span>See Guest Reviews</span>
                <Image
                  src="/assets/long-arrow-right.svg"
                  alt="arrow"
                  width={16}
                  height={16}
                />
              </p>
            </div>
          </div>

          {/* Right Side - Testimonial Slider */}
          <div className="flex-1 flex flex-col items-start justify-center overflow-hidden pl-0">
            <div className="overflow-hidden w-full" ref={emblaRef}>
              <div className="flex gap-5">
                {testimonials.map((testimonial, index) => {
                  const isActive = index === selectedIndex;
                  return (
                    <div key={index} className="flex-[0_0_auto] min-w-0">
                      <div
                        className={`w-[363.5px] h-50 flex flex-col gap-5 items-start overflow-hidden p-8.75 ${
                          isActive ? "bg-[#5e8591]" : "bg-[#f9f9f9]"
                        }`}
                      >
                        <p
                          className={`font-archivo font-medium italic text-[20px] leading-[26px] w-full whitespace-pre-wrap ${
                            isActive ? "text-white/75" : "text-[#6e6e6e]"
                          }`}
                        >
                          {testimonial.quote}
                        </p>
                        <div className="w-full flex gap-[25px] items-center">
                          <div className="w-[65px] h-[65px] relative">
                            {testimonial.hasImage ? (
                              <Image
                                src={testimonial.image!}
                                alt={testimonial.name}
                                fill
                                className="object-cover"
                              />
                            ) : (
                              <div className="bg-[#d9d9d9] w-full h-full" />
                            )}
                          </div>
                          <div className="flex-1 flex flex-col gap-2.5 items-start justify-center whitespace-pre-wrap">
                            <h3
                              className={`font-oswald font-bold text-[20px] leading-[29px] w-full ${
                                isActive ? "text-white" : "text-[#868686]"
                              }`}
                            >
                              {testimonial.name}
                            </h3>
                            <p
                              className={`font-oswald font-semibold text-sm uppercase tracking-[0.84px] leading-6 w-full ${
                                isActive ? "text-[#ebebeb]" : "text-[#bebebe]"
                              }`}
                            >
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
      </section>
      <div className="mb-[100px]">
        <Pagination
          totalSlides={testimonials.length}
          currentIndex={selectedIndex}
          onSlideChange={scrollTo}
        />
      </div>
    </FadeInSection>
  );
}
