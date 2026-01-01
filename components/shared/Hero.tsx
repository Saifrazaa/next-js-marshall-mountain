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
    title: "Adventure Lives at\nthe Center of New York",
    description:
      "Where the mountain is alive — and everything runs on pure electric fun.",
    cta: "Explore the Mountain",
    ctaLink: "/explore",
    bgImage: "/assets/images/hero.jpg",
  },
  {
    title: "Adventure Lives at\nthe Center of New York",
    description:
      "Where the mountain is alive — and everything runs on pure electric fun.",
    cta: "Explore the Mountain",
    ctaLink: "/explore",
    bgImage: "/assets/images/hero.jpg",
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
      <section className="relative w-full flex flex-col gap-[100px] items-start pb-[100px] pt-[200px] overflow-hidden">
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
        <div className="relative w-full flex items-center overflow-hidden z-10">
          <div className="flex-1 flex flex-row items-center self-stretch">
            <div className="flex-1 flex flex-col h-full items-start justify-center min-h-0 min-w-0">
              <div className="w-full relative">
                <div className="overflow-hidden h-full" ref={emblaRef}>
                  <div className="flex h-full">
                    {slides.map((slide, index) => (
                      <div
                        key={index}
                        className="flex-[0_0_100%] min-w-0 flex flex-col items-center justify-center"
                      >
                        <div className="whitespace-pre-wrap">
                          <h1 className="font-oswald font-bold text-[60px] leading-[78px] text-white text-center capitalize mb-0">
                            {slide.title.split("\n")[0]}
                          </h1>
                          <h1 className="font-oswald font-bold text-[60px] leading-[78px] text-white text-center capitalize">
                            {slide.title.split("\n")[1]}
                          </h1>
                        </div>
                        <p className="font-archivo font-normal text-[17px] leading-[26px] my-6 text-white/75 text-center whitespace-pre-wrap">
                          {slide.description}
                        </p>
                        <Button
                          href={slide.ctaLink}
                          variant="primary"
                          className="px-3 py-[7px]"
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
