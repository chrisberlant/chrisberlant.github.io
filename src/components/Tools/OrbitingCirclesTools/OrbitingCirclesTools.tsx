import OrbitingCircles from '../../ui/OrbitingCircles';
import VSCodeLogo from '@assets/vscode-logo.svg';
import InsomniaLogo from '@assets/insomnia-logo.svg';
import DockerLogo from '@assets/docker-logo.svg';
import WindowsLogo from '@assets/windows-logo.svg';
import LinuxLogo from '@assets/linux-logo.svg';
import { SoftType } from '../Tools';

interface OrbitingCirclesToolsProps {
	hoveredSoft: SoftType | null;
	setHoveredSoft: React.Dispatch<React.SetStateAction<SoftType | null>>;
}

export default function OrbitingCirclesTools({
	hoveredSoft,
	setHoveredSoft,
}: OrbitingCirclesToolsProps) {
	return (
		<div className='flex min-w-fit flex-1 h-[500px] w-full max-w-[32rem] items-center justify-center overflow-hidden'>
			<span className='font-semibold leading-none text-center text-transparent whitespace-pre-wrap pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-8xl dark:from-white dark:to-slate-900/10'>
				Softwares
			</span>

			{/* Inner Circles */}
			<OrbitingCircles
				className={`h-[34px] w-[34px] bg-transparent border-none ${
					hoveredSoft?.docker ? ' scale-150' : ''
				}`}
				duration={20}
				delay={20}
				radius={80}
			>
				<img src={DockerLogo} />
			</OrbitingCircles>
			<OrbitingCircles
				className='h-[34px] w-[34px] border-none bg-transparent'
				duration={20}
				delay={10}
				radius={80}
			>
				<img src={InsomniaLogo} />
			</OrbitingCircles>
			<OrbitingCircles
				className='h-[34px] w-[34px] border-none bg-transparent'
				duration={20}
				delay={55}
				radius={80}
			>
				<img src={LinuxLogo} />
			</OrbitingCircles>

			{/* Outer Circles (reverse) */}
			<OrbitingCircles
				className='h-[50px] w-[50px] border-none bg-transparent'
				reverse
				radius={190}
				duration={20}
			>
				<img src={VSCodeLogo} />
			</OrbitingCircles>
			<OrbitingCircles
				className='h-[50px] w-[50px] border-none bg-transparent'
				reverse
				radius={190}
				duration={20}
				delay={20}
			>
				<img src={WindowsLogo} />
			</OrbitingCircles>
			{/* <OrbitingCircles
					className='h-[50px] w-[50px] border-none bg-transparent'
					reverse
					radius={190}
					duration={20}
					delay={75}
				>
					<img src={LinuxLogo} />
				</OrbitingCircles> */}
		</div>
	);
}
