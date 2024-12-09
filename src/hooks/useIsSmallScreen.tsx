import { useState, useEffect } from 'react';

export default function useIsSmallScreen(width: number) {
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		setIsSmallScreen(window.innerWidth < width);
		const handleResize = () => setIsSmallScreen(window.innerWidth < width);

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return isSmallScreen;
}
