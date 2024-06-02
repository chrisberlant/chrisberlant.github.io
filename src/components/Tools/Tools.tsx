import { useState } from 'react';
import OrbitingCirclesTools from './OrbitingCirclesTools/OrbitingCirclesTools';
import Animation from '@assets/operating-system-animate.svg';

export type SoftType = {
	vscode?: boolean;
	windows?: boolean;
	insomnia?: boolean;
	linux?: boolean;
	docker?: boolean;
};

export default function Tools() {
	const [hoveredSoft, setHoveredSoft] = useState<SoftType | null>(null);
	return (
		<section className='flex flex-col items-stretch lg:gap-4 gap-14'>
			<div className='flex flex-wrap justify-center gap-4'>
				<OrbitingCirclesTools
					hoveredSoft={hoveredSoft}
					setHoveredSoft={setHoveredSoft}
				/>
				<ul className='content-center px-4 text-center'>
					<li>
						<span
							className='font-bold'
							onMouseOver={() =>
								setHoveredSoft((prev) => ({
									...prev,
									vscode: true,
								}))
							}
							onMouseLeave={() => setHoveredSoft(() => null)}
						>
							Visual Studio Code
						</span>{' '}
						is my IDE
					</li>
					<li className='mt-2'>
						<span
							className='font-bold'
							onMouseOver={() =>
								setHoveredSoft((prev) => ({
									...prev,
									windows: true,
								}))
							}
							onMouseLeave={() => setHoveredSoft(() => null)}
						>
							Windows
						</span>{' '}
						is my main operating system, as I've been using and
						debugging it for years
					</li>
					<li className='mt-2'>
						<span
							className='font-bold'
							onMouseOver={() =>
								setHoveredSoft((prev) => ({
									...prev,
									insomnia: true,
								}))
							}
							onMouseLeave={() => setHoveredSoft(() => null)}
						>
							Insomnia
						</span>{' '}
						is my API testing tool, so I can try and debug my
						server-side code without the front-end constraints
					</li>
					<li className='mt-2'>
						Sometimes I also use{' '}
						<span
							className='font-bold'
							onMouseOver={() =>
								setHoveredSoft((prev) => ({
									...prev,
									linux: true,
								}))
							}
							onMouseLeave={() => setHoveredSoft(() => null)}
						>
							Linux
						</span>{' '}
						(Arch & Debian based distributions) and WSL
					</li>
					<li className='mt-2'>
						<span
							className='font-bold'
							onMouseOver={() =>
								setHoveredSoft((prev) => ({
									...prev,
									docker: true,
								}))
							}
							onMouseLeave={() => setHoveredSoft(() => null)}
						>
							Docker
						</span>{' '}
						allows me to try my apps in a containerized environment,
						therefore not depending on my own system specs
					</li>
				</ul>
			</div>
			<div className='flex flex-wrap justify-center flex-1 gap-4'>
				<ul className='content-center px-4 text-center'>
					<li>
						I use <span className='font-bold'>Vercel</span> and{' '}
						<span className='font-bold'>Netlify</span> for free
						hosting using Continuous Integration and Continuous
						Deployments (CI/CD)
					</li>
					<li className='mt-2'>
						I use <span className='font-bold'>Notion</span> to keep
						tracks of my discoveries and create my own
						documentations
					</li>
				</ul>
				<img src={Animation} className='flex-1 max-w-md' />
			</div>
		</section>
	);
}
