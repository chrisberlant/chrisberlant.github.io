import OrbitingCircles from './ui/OrbitingCircles';
import VSCodeLogo from '@/assets/vscode-logo.svg';
import InsomniaLogo from '@/assets/insomnia-logo.svg';
import DockerLogo from '@/assets/docker-logo.svg';
import WindowsLogo from '@/assets/windows-logo.svg';
import LinuxLogo from '@/assets/linux-logo.svg';
import LaptopAnimate from '@/assets/laptop-animate.svg';
import useIsSmallScreen from '../hooks/useIsSmallScreen';

export default function OrbitingCirclesTools() {
	const isSmallScreen = useIsSmallScreen(768);
	const innerCircleRadius = isSmallScreen ? 70 : 85;
	const outerCircleRadius = isSmallScreen ? 125 : 145;

	return (
		<div className='flex min-h-[19rem] flex-1 items-center justify-center overflow-hidden md:min-h-[23rem]'>
			<img
				src={LaptopAnimate.src}
				alt=''
				className='absolute max-w-36 md:max-w-44'
			/>

			{/* Inner Circles */}
			<OrbitingCircles
				className='bg-transparent border-none size-8'
				duration={20}
				delay={20}
				radius={innerCircleRadius}
			>
				<img src={DockerLogo.src} alt='' />
			</OrbitingCircles>
			<OrbitingCircles
				className='bg-transparent border-none size-8'
				duration={20}
				delay={10}
				radius={innerCircleRadius}
			>
				<img src={InsomniaLogo.src} alt='' />
			</OrbitingCircles>
			<OrbitingCircles
				className='bg-transparent border-none size-8'
				duration={20}
				delay={55}
				radius={innerCircleRadius}
			>
				<img src={LinuxLogo.src} alt='' />
			</OrbitingCircles>

			{/* Outer Circles (reverse) */}
			<OrbitingCircles
				className='bg-transparent border-none size-9 md:size-12'
				reverse
				radius={outerCircleRadius}
				duration={20}
			>
				<img src={VSCodeLogo.src} alt='' />
			</OrbitingCircles>
			<OrbitingCircles
				className='bg-transparent border-none size-9 md:size-12'
				reverse
				radius={outerCircleRadius}
				duration={20}
				delay={20}
			>
				<img src={WindowsLogo.src} alt='' />
			</OrbitingCircles>
		</div>
	);
}
