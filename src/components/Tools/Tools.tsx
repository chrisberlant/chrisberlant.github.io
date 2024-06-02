import { useContext, useState } from 'react';
import { ThemeProviderContext } from '../ThemeProvider/ThemeProvider';
import OrbitingCirclesTools from './OrbitingCirclesTools/OrbitingCirclesTools';
import Animation from '@assets/operating-system-animate.svg';
import NotionLogo from '@assets/notion-logo.svg';
import VercelLogoWhite from '@assets/vercel-logo-white.svg';
import VercelLogoBlack from '@assets/vercel-logo-black.svg';
import NetlifyLogo from '@assets/netlify-logo.svg';
import GithubLogoBlack from '@assets/github-logo-black.svg';
import GithubLogoWhite from '@assets/github-logo-white.svg';

export type SoftType = {
	vscode?: boolean;
	windows?: boolean;
	insomnia?: boolean;
	linux?: boolean;
	docker?: boolean;
};

export default function Tools() {
	const { theme } = useContext(ThemeProviderContext);
	const [hoveredSoft, setHoveredSoft] = useState<SoftType | null>(null);
	return (
		<section className='flex flex-col items-stretch lg:gap-4 gap-14 '>
			<div className='flex flex-wrap justify-center gap-4'>
				<OrbitingCirclesTools
					hoveredSoft={hoveredSoft}
					setHoveredSoft={setHoveredSoft}
				/>
				<ul className='content-center flex-1 px-4 text-center min-w-80'>
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
			<div className='flex flex-wrap items-center justify-center flex-1 gap-4 max-[835px]:flex-col-reverse'>
				<ul className='content-center flex-1 px-4 text-center min-w-72'>
					<li className='align-middle'>
						<span>
							I use
							<img
								src={`${
									theme === 'dark'
										? VercelLogoWhite
										: VercelLogoBlack
								}`}
								className='inline-block mx-2 size-6'
								alt={'Vercel logo'}
							/>
							<span className='font-bold'>Vercel</span> and{' '}
							<img
								src={NetlifyLogo}
								className='inline-block ml-1 mr-2 size-6'
								alt={'Netlify logo'}
							/>
							<span className='font-bold'>Netlify</span> to host
							my projects using Continuous Integration and
							Continuous Deployments (CI/CD)
						</span>
					</li>
					<li className='mt-2'>
						<span>
							I use
							<img
								src={NotionLogo}
								className='inline-block mx-2 size-6'
								alt={'Notion logo'}
							/>
							<span className='font-bold'>Notion</span> to keep
							tracks of my discoveries and notes, and create my
							own documentations
						</span>
					</li>
					<li className='mt-2'>
						<span>
							I use
							<img
								src={`${
									theme === 'dark'
										? GithubLogoWhite
										: GithubLogoBlack
								}`}
								className='inline-block mx-2 size-6'
								alt={'GitHub logo'}
							/>
							<span className='font-bold'>GitHub</span> to host
							the source code of my projects
						</span>
					</li>
				</ul>
				<img src={Animation} className='flex-1 max-w-md' />
			</div>
		</section>
	);
}
