import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const CoroselContainer = () => {
  const [current, setCurrent] = React.useState(0); // Local state to store the index of the current item
  const [count, setCount] = React.useState(0);

  // Update the current item index when the carousel changes
  const handleSlideChange = (index) => {
    setCurrent(index + 1);
  };

  React.useEffect(() => {
    setCount(5); // Set the count of total items
  }, []);

  // Sample images object
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1598386867671-2f46bd1f68b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9jayUyMHN0YXJ8ZW58MHx8MHx8fDI%3D",
      alt: "Photo 1",
      caption: "STAY HOME STAY SAFE",
    },
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1598387993211-5c4c0fda4248?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cm9jayUyMHN0YXJ8ZW58MHx8MHx8fDI%3D",
      alt: "Photo 1",
      caption: "STAY HOME ",
    },
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9jayUyMHN0YXJ8ZW58MHx8MHx8fDI%3D",
      alt: "Photo 1",
      caption: "STAY SAFE",
    },
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1577297568245-d4e5bef64f3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG11c2ljYWwlMjBpbnN0cnVtZW50fGVufDB8fDB8fHwy",
      alt: "Photo 1",
      caption: "STAY HOME STAY SAFE",
    },
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1598387993211-5c4c0fda4248?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cm9jayUyMHN0YXJ8ZW58MHx8MHx8fDI%3Dhttps://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9jayUyMHN0YXJ8ZW58MHx8MHx8fDI%3D",
      alt: "Photo 1",
      caption: "HOME STAY",
    },
    // Add more image objects here
  ];
  return (
    <>
      <Carousel
  plugins={[
    Autoplay({
      delay: 1500,
    }),
  ]}
  opts={{
    align: "start",
    loop: true,
  }}
  className="w-full max-w-3xl"
  style={{ maxWidth: '100%' }}
  onSlideChange={handleSlideChange}
>
  <CarouselContent className="">
    {images.map((image, index) => (
      <CarouselItem key={index} className="flex basis-full sm:basis-2/3 md:basis-1/3">
        <div className="relative">
          <img
            src={image.src}
            alt={image.alt}
            className="h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-lg w-full"
          />
          <div className="absolute inset-0 rounded-lg bg-white bg-opacity-10 flex flex-col justify-end items-start gap-5 p-4 sm:p-6 md:p-8 pb-6 md:pb-10">
            <span className="text-white text-lg sm:text-xl md:text-2xl font-bold">
              {image.caption}
            </span>
            <span className="text-white text-sm sm:text-base">Location</span>
          </div>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>

    </>
  );
};
