import { useEffect, useState } from 'react';
import ThumbnailsCarousel from './ThumbnailsCarousel';
import FullScreenCarousel from './FullScreenCarousel';

interface CarouselComponentProps {
	images: string[];
	title: string;
}

export default function CarouselComponent({
	images,
	title,
}: CarouselComponentProps) {
	const [fullScreen, setFullScreen] = useState<{
		view: boolean;
		initialIndex: number | null;
	}>({
		view: false,
		initialIndex: null,
	});

	return (
		<>
			<ThumbnailsCarousel
				images={images}
				title={title}
				setFullScreen={setFullScreen}
			/>
			{fullScreen.view ? (
				<>
					<div className='fixed inset-0 z-20 pointer-events-none backdrop-blur-md'></div>
					<FullScreenCarousel
						images={images}
						title={title}
						initialIndex={fullScreen.initialIndex}
						setFullScreen={setFullScreen}
					/>
				</>
			) : null}
		</>
	);
}
