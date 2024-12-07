import { useState } from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from './ui/carousel';

interface ThumbnailsCarouselProps {
	images: string[];
	title: string;
	setFullScreen: React.Dispatch<
		React.SetStateAction<{
			view: boolean;
			initialIndex: number | null;
		}>
	>;
}

export default function ThumbnailsCarousel({
	images,
	title,
	setFullScreen,
}: ThumbnailsCarouselProps) {
	return (
		<Carousel
			opts={{
				loop: true,
			}}
			className='max-w-52 mt-4 sm:max-w-96 md:max-w-xl min-[840px]:max-w-2xl lg:max-w-3xl'
		>
			<CarouselContent>
				{images.map((slide, index) => (
					<CarouselItem
						key={slide}
						className='flex justify-center basis-full sm:basis-1/2 md:basis-1/3'
					>
						<img
							src={slide}
							className='h-28 rounded-md min-[840px]:h-32 lg:h-36 cursor-pointer'
							title='Click to zoom in'
							onClick={() =>
								setFullScreen({
									view: true,
									initialIndex: index,
								})
							}
							alt={
								'Screenshot ' +
								`${title}` +
								' ' +
								`${index + 1}`
							}
						/>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
