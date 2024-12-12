import { useEffect, useRef, useState } from 'react';
import ThumbnailsCarousel from './ThumbnailsCarousel';
import FullScreenCarousel from './FullScreenCarousel';
import useIsSmallScreen from '../hooks/useIsSmallScreen';

interface CarouselComponentProps {
	images: string[];
	title: string;
}

export default function CarouselComponent({
	images,
	title,
}: CarouselComponentProps) {
	const [fullScreen, setFullScreen] = useState<{
		active: boolean;
		initialIndex: number | null;
	}>({
		active: false,
		initialIndex: null,
	});
	const isSmallScreen = useIsSmallScreen(1024);

	return isSmallScreen ? (
		<ThumbnailsCarousel images={images} title={title} />
	) : (
		<>
			<ThumbnailsCarousel
				images={images}
				title={title}
				setFullScreen={setFullScreen}
			/>
			{fullScreen.active && (
				<>
					<div className='fixed inset-0 z-10 backdrop-blur-md'></div>
					<FullScreenCarousel
						images={images}
						title={title}
						initialIndex={fullScreen.initialIndex}
						setFullScreen={setFullScreen}
					/>
				</>
			)}
		</>
	);
}
