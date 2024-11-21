import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "./ui/carousel";

interface ImagesCarouselProps {
    images: string[];
    title: string;
}

export default function ImagesCarousel({ images, title }: ImagesCarouselProps) {
    return (
        <Carousel
            opts={{
                loop: true,
            }}
            className="max-w-52 sm:max-w-96 md:max-w-xl min-[840px]:max-w-2xl lg:max-w-3xl"
        >
            <CarouselContent>
                {images.map((slide, index) => (
                    <CarouselItem
                        key={slide}
                        className="flex justify-center basis-full sm:basis-1/2 md:basis-1/3"
                    >
                        <a href={slide} target="_blank">
                            <img
                                src={slide}
                                className="h-28 rounded-md min-[840px]:h-32 lg:h-36"
                                alt={
                                    "Screenshot " +
                                    `${title}` +
                                    " " +
                                    `${index + 1}`
                                }
                            />
                        </a>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
