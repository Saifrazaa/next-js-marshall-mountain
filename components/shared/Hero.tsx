"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Button from "../ui/Button";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import Pagination from "./Pagination";

const slides = [
  {
    title: "Adventure Lives at\nthe Center of New York",
    description:
      "Where the mountain is alive — and everything runs on pure electric fun.",
    cta: "Explore the Mountain",
    ctaLink: "/explore",
    bgImage: "/assets/images/hero.jpg",
  },
  {
    title: "UM Wildland and Recreation \nManagement conducting use survey",
    description:
      "Where the mountain is alive — and everything runs on pure electric fun.",
    cta: "Explore the Mountain",
    ctaLink: "/explore",
    bgImage: "/assets/images/hero-slider-2.jpg",
  },
  {
    title: "Public Comment Open for Analysis of \nBrownfields Cleanup Alternatives",
    description:
      "Where the mountain is alive — and everything runs on pure electric fun.",
    cta: "Explore the Mountain",
    ctaLink: "/explore",
    bgImage: "/assets/images/hero-slider-3.jpg",
  },
];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 30,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const [emblaRef2, emblaApi2] = useEmblaCarousel({
    loop: true,
    duration: 30,
    watchDrag: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
      if (emblaApi2) emblaApi2.scrollTo(index);
    },
    [emblaApi, emblaApi2]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    setSelectedIndex(index);
    if (emblaApi2) emblaApi2.scrollTo(index);
  }, [emblaApi, emblaApi2]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <>
      <section className="relative w-full h-screen lg:h-auto flex flex-col items-center lg:items-start justify-center overflow-hidden px-5 md:px-8 lg:px-0 lg:gap-25 lg:pb-25 lg:pt-[200px]">
        {/* Hero Slider with Background Images */}
        <div className="absolute inset-0 z-0">
          <div className="overflow-hidden h-full" ref={emblaRef2}>
            <div className="flex h-full">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 relative h-full"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={slide.bgImage}
                      alt={`Marshall Mountain Resort - Slide ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Slider */}
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden z-10">
          <div className="flex-1 flex flex-row items-center justify-center self-stretch">
            <div className="flex-1 flex flex-col h-full items-center justify-center min-h-0 min-w-0">
              <div className="w-full relative">
                <div className="overflow-hidden h-full" ref={emblaRef}>
                  <div className="flex h-full">
                    {slides.map((slide, index) => (
                      <div
                        key={index}
                        className="flex-[0_0_100%] min-w-0 flex flex-col items-center justify-center"
                      >
                        <div className="whitespace-pre-wrap w-full">
                          <h1 className="font-oswald font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight md:leading-[1.3] lg:leading-[78px] text-white text-center capitalize mb-0">
                            {slide.title.split("\n")[0]}
                          </h1>
                          <h1 className="font-oswald font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight md:leading-[1.3] lg:leading-[78px] text-white text-center capitalize">
                            {slide.title.split("\n")[1]}
                          </h1>
                        </div>
                        <p className="font-archivo font-normal text-sm sm:text-base md:text-[17px] leading-relaxed md:leading-6.5 my-4 md:my-6 text-white/75 text-center whitespace-pre-wrap max-w-xl md:max-w-2xl lg:max-w-3xl">
                          {slide.description}
                        </p>
                        <Button
                          href={slide.ctaLink}
                          variant="primary"
                          className="px-4 py-2 md:px-5 md:py-2.5 lg:px-3 lg:py-[7px] text-sm md:text-base"
                        >
                          {slide.cta}
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pagination */}
      <Pagination
        totalSlides={slides.length}
        currentIndex={selectedIndex}
        onSlideChange={scrollTo}
      />
    </>
  );
}
