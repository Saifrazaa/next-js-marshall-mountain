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
      <section className="bg-white w-full flex flex-col gap-8 md:gap-10 lg:gap-[45px] items-center overflow-hidden pt-0 px-5 md:px-8 lg:pl-25 lg:pr-0">
        <div className="bg-white w-full flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-[60px] items-center overflow-hidden pb-8 md:pb-10 lg:pb-12.5 lg:pr-0 pt-8 md:pt-12 lg:pt-25">
          {/* Left Side - Heading */}
          <div className="w-full lg:w-auto flex flex-row items-center lg:self-stretch">
            <div className="bg-white w-full lg:w-auto xl:w-[423px] h-full flex flex-col gap-4 md:gap-6 lg:gap-[25px] items-start justify-center overflow-hidden">
              <p className="font-oswald font-semibold text-xs md:text-sm text-[#dadada] uppercase tracking-[0.84px] leading-6 w-full whitespace-normal lg:whitespace-pre-wrap">
                Testimonials carousel
              </p>
              <h2 className="font-oswald font-bold text-2xl md:text-3xl lg:text-[45px] leading-tight md:leading-snug lg:leading-14.75 text-[#333] capitalize w-full whitespace-normal lg:whitespace-pre-wrap">
                Guests Love Their Time on the Mountain
              </h2>
              <p className="flex gap-2.5 items-center text-[#5e8591] leading-6 font-oswald font-semibold text-xs md:text-sm uppercase tracking-[0.84px]">
                <span>See Guest Reviews</span>
                <Image
                  src="/assets/icons/long-arrow-right.svg"
                  alt="arrow"
                  width={16}
                  height={16}
                />
              </p>
            </div>
          </div>

          {/* Right Side - Testimonial Slider */}
          <div className="w-full lg:flex-1 flex flex-col items-start justify-center overflow-hidden pl-0">
            <div className="overflow-hidden w-full" ref={emblaRef}>
              <div className="flex gap-4 md:gap-5">
                {testimonials.map((testimonial, index) => {
                  const isActive = index === selectedIndex;
                  return (
                    <div key={index} className="flex-[0_0_auto] min-w-0">
                      <div
                        className={`w-[280px] md:w-[320px] lg:w-[363.5px] min-h-[180px] md:h-50 flex flex-col gap-4 md:gap-5 items-start overflow-hidden p-6 md:p-7 lg:p-8.75 ${
                          isActive ? "bg-[#5e8591]" : "bg-[#f9f9f9]"
                        }`}
                      >
                        <p
                          className={`font-archivo font-medium italic text-base md:text-lg lg:text-[20px] leading-relaxed md:leading-6 lg:leading-6.5 w-full whitespace-normal lg:whitespace-pre-wrap ${
                            isActive ? "text-white/75" : "text-[#6e6e6e]"
                          }`}
                        >
                          {testimonial.quote}
                        </p>
                        <div className="w-full flex gap-4 md:gap-6 lg:gap-[25px] items-center">
                          <div className="w-12 h-12 md:w-16 md:h-16 lg:w-[65px] lg:h-[65px] relative flex-shrink-0">
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
                          <div className="flex-1 flex flex-col gap-1 md:gap-2.5 items-start justify-center whitespace-normal lg:whitespace-pre-wrap">
                            <h3
                              className={`font-oswald font-bold text-base md:text-lg lg:text-[20px] leading-tight md:leading-7 lg:leading-[29px] w-full ${
                                isActive ? "text-white" : "text-[#868686]"
                              }`}
                            >
                              {testimonial.name}
                            </h3>
                            <p
                              className={`font-oswald font-semibold text-xs md:text-sm uppercase tracking-[0.84px] leading-6 w-full ${
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
      <div className="mb-12 md:mb-16 lg:mb-25">
        <Pagination
          totalSlides={testimonials.length}
          currentIndex={selectedIndex}
          onSlideChange={scrollTo}
        />
      </div>
    </FadeInSection>
  );
}
