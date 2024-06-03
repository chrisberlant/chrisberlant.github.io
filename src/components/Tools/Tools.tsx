import { useContext, useState } from 'react';
import { ThemeProviderContext } from '../ThemeProvider/ThemeProvider';
import OrbitingCirclesTools from './OrbitingCirclesTools/OrbitingCirclesTools';
import OperatingSystemAnimate from '@assets/operating-system-animate.svg';
import BuildingAnimate from '@assets/building-animate.svg';
import NotionLogo from '@assets/notion-logo.svg';
import VercelLogoWhite from '@assets/vercel-logo-white.svg';
import VercelLogoBlack from '@assets/vercel-logo-black.svg';
import NetlifyLogo from '@assets/netlify-logo.svg';
import GithubLogoBlack from '@assets/github-logo-black.svg';
import GithubLogoWhite from '@assets/github-logo-white.svg';
import ExcalidrawLogo from '@assets/excalidraw-logo.svg';

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
		<section className='flex flex-col gap-8 lg:gap-2'>
			<div className='flex flex-col gap-4 justify-evenly lg:flex-row'>
				<div className='flex justify-center'>
					<OrbitingCirclesTools
						hoveredSoft={hoveredSoft}
						setHoveredSoft={setHoveredSoft}
					/>
				</div>
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
			<div className='flex flex-col items-center gap-4 justify-evenly lg:flex-row-reverse'>
				<img src={OperatingSystemAnimate} className='max-w-md' />
				<ul className='px-4 text-center '>
					<li>
						I use
						<a
							className='font-bold'
							href='https://vercel.com'
							target='_blank'
						>
							<img
								src={`${
									theme === 'dark'
										? VercelLogoWhite
										: VercelLogoBlack
								}`}
								className='inline-block ml-2 mr-1 size-6'
								alt={'Vercel logo'}
							/>
							Vercel
						</a>{' '}
						and{' '}
						<a
							className='font-bold'
							href='https://www.netlify.com'
							target='_blank'
						>
							<img
								src={NetlifyLogo}
								className='inline-block mx-2 size-6'
								alt={'Netlify logo'}
							/>
							Netlify
						</a>{' '}
						to host my projects using Continuous Integration and
						Continuous Deployments (CI/CD)
					</li>
					<li className='mt-2'>
						<a
							className='font-bold'
							href='https://www.notion.so'
							target='_blank'
						>
							<img
								src={NotionLogo}
								className='inline-block ml-2 mr-1 size-6'
								alt={'Notion logo'}
							/>
							Notion
						</a>{' '}
						allows me to keep tracks of my discoveries and notes,
						and create my own documentations
					</li>
					<li className='mt-2'>
						<a
							className='font-bold'
							href='https://www.notion.so'
							target='_blank'
						>
							<img
								src={ExcalidrawLogo}
								className='inline-block ml-2 mr-1 size-6'
								alt={'Excalidraw logo'}
							/>
							Excalidraw
						</a>{' '}
						is the place where I can draw diagrams to organize my
						ideas when building an app
					</li>
					<li className='mt-2'>
						I use
						<a
							className='font-bold'
							href='https://www.github.com/'
							target='_blank'
						>
							<img
								src={`${
									theme === 'dark'
										? GithubLogoWhite
										: GithubLogoBlack
								}`}
								className='inline-block ml-2 mr-1 size-5'
								alt={'GitHub logo'}
							/>
							GitHub
						</a>{' '}
						to host the source code of my projects
					</li>
					Mocodo..
				</ul>
			</div>
			<div className='flex flex-col items-center gap-4 lg:mx-8 justify-evenly lg:flex-row'>
				<img src={BuildingAnimate} className='max-w-md mb-8 lg:mb-0' />
				<ul className='px-4 text-center'>
					<li className='mt-2'>
						<a
							className='font-bold'
							href='https://vitejs.dev'
							target='_blank'
						>
							Vite
						</a>{' '}
						is my go-to{' '}
						<a
							className='font-bold'
							href='https://react.dev'
							target='_blank'
						>
							React
						</a>{' '}
						tool to build applications quickly
					</li>
					<li className='mt-2'>
						Using{' '}
						<a
							className='font-bold'
							href='https://npmjs.com'
							target='_blank'
						>
							Node Package Manager
						</a>
						, I can install my favorite libraries
					</li>
					<li className='mt-2'>
						My favorite queries library is{' '}
						<a
							className='font-bold'
							href='https://tanstack.com/query/latest'
							target='_blank'
						>
							TanStack Query
						</a>
						, it allows me to fetch data using custom React hooks,
						and to use a local server cache to avoid unnecessary
						requests to the API endpoints when I already received
						the needed data
					</li>
					<li className='mt-2'>
						If I need an additional state manager to handle some
						data not being server-dependent, I use{' '}
						<a
							className='font-bold'
							href='https://redux-toolkit.js.org/'
							target='_blank'
						>
							Redux Toolkit
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
}