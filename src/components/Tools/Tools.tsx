import { useContext } from 'react';
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
import Whimsical from '@assets/whimsical-logo.svg';

export type SoftType = {
	vscode?: boolean;
	windows?: boolean;
	insomnia?: boolean;
	linux?: boolean;
	docker?: boolean;
};

export default function Tools() {
	const { theme } = useContext(ThemeProviderContext);
	return (
		<section className='flex flex-col gap-8 2xl:gap-10 xl:mx-20 2xl:mx-44'>
			<h2 className='text-3xl font-bold text-center font-montserrat'>
				My Tools
			</h2>
			<div className='flex flex-col items-center gap-4 px-4 pb-6 border shadow-md lg:px-4 lg:pb-0 rounded-3xl border-border dark:shadow-none justify-evenly lg:flex-row bg-card'>
				<OrbitingCirclesTools />
				<ul className='flex-1 text-center'>
					<li>
						<span className='font-bold'>Visual Studio Code</span> is
						my IDE
					</li>
					<li className='mt-2'>
						<span className='font-bold'>Windows</span> is my main
						operating system, as I've been using and debugging it
						for years
					</li>
					<li className='mt-2'>
						<span className='font-bold'>Insomnia</span> is my API
						testing tool, so I can try and debug my server-side code
						without the front-end constraints
					</li>
					<li className='mt-2'>
						Sometimes I also use{' '}
						<span className='font-bold'>Linux</span> (Arch & Debian
						based distributions) and{' '}
						<span className='font-bold'>WSL</span>
					</li>
					<li className='mt-2'>
						<span className='font-bold'>Docker</span> allows me to
						run my apps in a containerized environment, therefore
						not depending on my own system specs
					</li>
				</ul>
			</div>

			<div className='flex flex-col items-center px-4 pb-6 border shadow-md md:gap-4 lg:px-4 lg:pb-0 justify-evenly lg:flex-row-reverse bg-card rounded-3xl border-border dark:shadow-none'>
				<img src={OperatingSystemAnimate} alt='' className='max-w-md' />
				<div className='text-center'>
					<h3 className='mb-8 text-3xl font-bold font-montserrat'>
						Online tools
					</h3>
					<ul>
						<li>
							<a
								className='font-bold'
								href='https://www.notion.so'
								target='_blank'
							>
								<img
									src={NotionLogo}
									className='inline-block mr-1 size-6'
									alt='Notion logo'
								/>
								Notion
							</a>{' '}
							allows me to keep tracks of my discoveries and
							notes, and create my own documentations
						</li>
						<li className='mt-2'>
							<a
								className='font-bold'
								href='https://excalidraw.com/'
								target='_blank'
							>
								<img
									src={ExcalidrawLogo}
									className='inline-block mr-1 size-5'
									alt='Excalidraw logo'
								/>
								Excalidraw
							</a>{' '}
							is the place where I can draw diagrams to organize
							my ideas
						</li>
						<li className='mt-2.5'>
							<a
								className='font-bold'
								href='https://whimsical.com/'
								target='_blank'
							>
								<img
									src={Whimsical}
									className='inline-block size-8'
									alt='Whimsical logo'
								/>
								Whimsical
							</a>{' '}
							is the perfect tool to build my responsive
							wireframes
						</li>
						<li className='mt-1'>
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
									className='inline-block ml-2 mr-1.5 size-5'
									alt='GitHub logo'
								/>
								GitHub
							</a>{' '}
							to host the source code of my projects
						</li>
						<li className='mt-2.5'>
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
									className='inline-block ml-2 mr-1 size-5'
									alt='Vercel logo'
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
									className='inline-block mx-2 size-5'
									alt='Netlify logo'
								/>
								Netlify
							</a>{' '}
							to host my projects using Continuous Integration and
							Continuous Deployments (CI/CD)
						</li>
					</ul>
				</div>
			</div>

			<div className='flex flex-col items-center px-4 pb-6 border shadow-md md:gap-4 lg:px-4 justify-evenly lg:flex-row bg-card rounded-3xl border-border dark:shadow-none'>
				<img
					src={BuildingAnimate}
					alt=''
					className='max-w-md mb-2 lg:mb-0'
				/>
				<div>
					<h3 className='mt-8 mb-8 text-3xl font-bold text-center font-montserrat'>
						Libraries
					</h3>
					Using{' '}
					<a
						className='font-bold'
						href='https://npmjs.com'
						target='_blank'
					>
						Node Package Manager
					</a>
					, I can install my favorite libraries :
					<ul className='flex flex-col gap-2 mt-2 ml-4 list-disc'>
						<li>
							<a
								className='font-bold'
								href='https://react.dev'
								target='_blank'
							>
								React
							</a>
						</li>
						<li>
							<a
								className='font-bold'
								href='https://vitejs.dev'
								target='_blank'
							>
								Vite
							</a>
						</li>
						<li>
							<a
								className='font-bold'
								href='https://tanstack.com/query/latest'
								target='_blank'
							>
								TanStack Query
							</a>
						</li>
						<li>
							<a
								className='font-bold'
								href='https://redux-toolkit.js.org'
								target='_blank'
							>
								Redux Toolkit
							</a>
						</li>
						<li>
							<a
								className='font-bold'
								href='https://tailwindcss.com'
								target='_blank'
							>
								Tailwind
							</a>{' '}
						</li>
						<li>
							<a
								className='font-bold'
								href='https://ui.shadcn.com'
								target='_blank'
							>
								Shadcn/ui
							</a>
						</li>
						<li>
							<a
								className='font-bold'
								href='https://mantine.dev'
								target='_blank'
							>
								Mantine
							</a>{' '}
						</li>
						<li>
							<a
								className='font-bold'
								href='https://expressjs.com'
								target='_blank'
							>
								Express
							</a>
						</li>
						<li>
							<a
								className='font-bold'
								href='https://zod.dev'
								target='_blank'
							>
								Zod
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
