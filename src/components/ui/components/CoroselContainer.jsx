import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

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
            caption: "STAY HOME STAY SAFE"
        },
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1598386867671-2f46bd1f68b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9jayUyMHN0YXJ8ZW58MHx8MHx8fDI%3D",
            alt: "Photo 1",
            caption: "STAY HOME STAY SAFE"
        },
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1598386867671-2f46bd1f68b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9jayUyMHN0YXJ8ZW58MHx8MHx8fDI%3D",
            alt: "Photo 1",
            caption: "STAY HOME STAY SAFE"
        },
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1598386867671-2f46bd1f68b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9jayUyMHN0YXJ8ZW58MHx8MHx8fDI%3D",
            alt: "Photo 1",
            caption: "STAY HOME STAY SAFE"
        },
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1598386867671-2f46bd1f68b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9jayUyMHN0YXJ8ZW58MHx8MHx8fDI%3D",
            alt: "Photo 1",
            caption: "STAY HOME STAY SAFE"
        },
        // Add more image objects here
    ];

    return (
        <div>
            <Carousel
                plugins={[
                    Autoplay({
                      delay: 500,
                    }),
                  ]}
                className="w-full max-w-xs"
                onSlideChange={handleSlideChange} 
            >
                <CarouselContent className="">
                    {images.map((image, index) => (
                        <CarouselItem key={index} className={`flex basis-1/3`}>
                            <div className="relative">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-32 h-32 object-cover rounded-lg"
                                />
                                <div className="absolute inset-0 bg-white bg-opacity-20 flex justify-center items-center">
                                    <span className="text-white text-xl font-bold">{image.caption}</span>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <div className="py-2 text-center text-sm text-muted-foreground">
                Slide {current} of {count} {/* Display the current item index */}
            </div>
        </div>
    );
};
