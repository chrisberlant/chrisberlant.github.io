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
			active: boolean;
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
			className='fixed z-30 flex items-center inset-4'
		>
			<Button
				size='icon'
				variant='outline'
				onClick={() =>
					setFullScreen({ active: false, initialIndex: null })
				}
				className='absolute z-30 right-2 top-2'
				title='Close the carousel'
			>
				<SquareXIcon color='#dc2626' />
			</Button>

			<CarouselContent>
				{images.map((slide, index) => (
					<CarouselItem
						key={slide}
						className='flex items-center justify-center'
					>
						<a
							href={slide}
							target='_blank'
							rel='noopener noreferrer'
						>
							<img
								src={slide}
								title='Click to open in a new tab'
								className='max-h-[97vh] rounded-xl'
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
			<CarouselPrevious className='size-12 left-4' />
			<CarouselNext className='size-12 right-4' />
		</Carousel>
	);
}
