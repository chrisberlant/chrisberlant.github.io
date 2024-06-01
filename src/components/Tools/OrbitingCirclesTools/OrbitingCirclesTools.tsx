import OrbitingCircles from '../../ui/orbiting-circles';
import VSCodeLogo from '@assets/vscode-logo.svg';
import InsomniaLogo from '@assets/insomnia-logo.svg';
import DockerLogo from '@assets/docker-logo.svg';
import WindowsLogo from '@assets/windows-logo.svg';
import LinuxLogo from '@assets/linux-logo.svg';

export default function OrbitingCirclesTools() {
	return (
		<div className='flex justify-center flex-1'>
			<div className='relative flex h-[500px] w-full max-w-[32rem] items-center justify-center overflow-hidden bg-background '>
				<span className='font-semibold leading-none text-center text-transparent whitespace-pre-wrap pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-8xl dark:from-white dark:to-slate-900/10'>
					Tools
				</span>

				{/* Inner Circles */}
				<OrbitingCircles
					className='h-[34px] w-[34px] border-none bg-transparent'
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
				<OrbitingCircles
					className='h-[50px] w-[50px] border-none bg-transparent'
					reverse
					radius={190}
					duration={20}
					delay={75}
				>
					<img src={LinuxLogo} />
				</OrbitingCircles>
			</div>
		</div>
	);
}
