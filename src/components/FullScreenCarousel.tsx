import { CrossIcon, SquareXIcon } from 'lucide-react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from './ui/carousel';
import Button from './ui/button';

interface FullScreenCarouselProps {
	images: string[];
	title: string;
	setFullScreen: React.Dispatch<
		React.SetStateAction<{
			view: boolean;
			initialIndex: number | null;
		}>
	>;
	initialIndex: number | null;
}

export default function FullScreenCarousel({
	images,
	title,
	setFullScreen,
	initialIndex,
}: FullScreenCarouselProps) {
	return (
		<Carousel
			opts={{
				loop: true,
				startIndex: initialIndex ?? 0,
			}}
			className='absolute z-20 w-full px-10 py-4 border-2 sm:px-20 border-border blur-none'
		>
			<Button
				size='icon'
				variant='ghost'
				onClick={() =>
					setFullScreen({ view: false, initialIndex: null })
				}
				className='absolute z-20 right-2 top-2'
			>
				<SquareXIcon />
			</Button>

			<CarouselContent>
				{images.map((slide, index) => (
					<CarouselItem key={slide} className='flex justify-center'>
						<a href={slide} target='_blank'>
							<img
								src={slide}
								title='Click to open in a separate tab'
								className='max-h-full rounded-xl'
								alt={
									'Screenshot ' +
									`${title}` +
									' ' +
									`${index + 1}`
								}
							/>
						</a>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className='left-9' />
			<CarouselNext className='right-4' />
		</Carousel>
	);
}
