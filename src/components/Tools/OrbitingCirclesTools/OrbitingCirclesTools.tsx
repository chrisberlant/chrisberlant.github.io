import OrbitingCircles from '../../ui/OrbitingCircles';
import VSCodeLogo from '@assets/vscode-logo.svg';
import InsomniaLogo from '@assets/insomnia-logo.svg';
import DockerLogo from '@assets/docker-logo.svg';
import WindowsLogo from '@assets/windows-logo.svg';
import LinuxLogo from '@assets/linux-logo.svg';
import { useState, useEffect, useRef } from 'react';
import LaptopAnimate from '@assets/laptop-animate.svg';

export default function OrbitingCirclesTools() {
	const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 434);
	const prevWidth = useRef(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			const currWidth = window.innerWidth;
			if (currWidth < 434 && prevWidth.current >= 434)
				setIsSmallScreen(true);
			else if (currWidth >= 434 && prevWidth.current < 434)
				setIsSmallScreen(false);

			prevWidth.current = currWidth;
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const innerCircleRadius = isSmallScreen ? 70 : 85;
	const outerCircleRadius = isSmallScreen ? 140 : 175;

	return (
		<div className='flex flex-1 max-[433px]:min-h-[22rem] min-h-[28rem] items-center justify-center overflow-hidden'>
			<img src={LaptopAnimate} alt='' className='absolute max-w-40' />

			{/* Inner Circles */}
			<OrbitingCircles
				className='bg-transparent border-none size-8'
				duration={20}
				delay={20}
				radius={innerCircleRadius}
			>
				<img src={DockerLogo} alt='' />
			</OrbitingCircles>
			<OrbitingCircles
				className='bg-transparent border-none size-8'
				duration={20}
				delay={10}
				radius={innerCircleRadius}
			>
				<img src={InsomniaLogo} alt='' />
			</OrbitingCircles>
			<OrbitingCircles
				className='bg-transparent border-none size-8'
				duration={20}
				delay={55}
				radius={innerCircleRadius}
			>
				<img src={LinuxLogo} alt='' />
			</OrbitingCircles>

			{/* Outer Circles (reverse) */}
			<OrbitingCircles
				className='bg-transparent border-none size-9 sm:size-12'
				reverse
				radius={outerCircleRadius}
				duration={20}
			>
				<img src={VSCodeLogo} alt='' />
			</OrbitingCircles>
			<OrbitingCircles
				className='bg-transparent border-none size-9 sm:size-12'
				reverse
				radius={outerCircleRadius}
				duration={20}
				delay={20}
			>
				<img src={WindowsLogo} alt='' />
			</OrbitingCircles>
		</div>
	);
}
