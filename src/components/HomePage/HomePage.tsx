import NodeJsLogo from '@assets/nodejs-logo.svg';
import PostgresLogo from '@assets/postgresql-logo.svg';
import SequelizeLogo from '@assets/sequelize-logo.svg';
import ReactLogo from '@assets/react-logo.svg';
import TanstackQueryLogo from '@assets/tanstack-query-logo.svg';
import TailwindLogo from '@assets/tailwind-logo.svg';
import Description from '../Header/Description/Description';
import TypeScriptLogo from '@assets/typescript-logo.svg';
import JavaScriptLogo from '@assets/javascript-logo.svg';
import {
	GlitchingSkillElement,
	SkillElement,
} from '../SkillsCard/SkillElement/SkillElement';
import { useEffect, useRef, useState } from 'react';
import Marquee from '../ui/Marquee';
import PageTitle from '../PageTitle/PageTitle';

export default function HomePage() {
	const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);
	const prevWidth = useRef(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			const currWidth = window.innerWidth;
			if (currWidth < 640 && prevWidth.current >= 640)
				setIsSmallScreen(true);
			else if (currWidth >= 640 && prevWidth.current < 640)
				setIsSmallScreen(false);
			prevWidth.current = currWidth;
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<section className='flex flex-col items-center gap-8'>
			<PageTitle>About me</PageTitle>
			<Description />

			<div className='px-4 py-8 border border-border rounded-3xl bg-card/80'>
				<h2 className='mb-8 text-3xl font-bold text-center font-montserrat animate-fade-in'>
					My stack
				</h2>
				<div className='relative flex max-w-md rounded-md sm:max-w-lg md:max-w-xl font-robotoMono sm:flex-col max-h-52'>
					<Marquee className='flex-1' vertical={isSmallScreen}>
						<GlitchingSkillElement
							className='animate-glitch'
							title='TypeScript'
							secondTitle='JavaScript'
							logo={TypeScriptLogo}
							secondLogo={JavaScriptLogo}
							alt='JavaScript/TypeScript logos'
						/>
						<SkillElement
							title='React'
							logo={ReactLogo}
							alt='React logo'
						/>
						<SkillElement
							title='TanStack Query'
							logo={TanstackQueryLogo}
							alt='Tanstack query logo'
						/>
						<SkillElement
							title='Tailwind'
							logo={TailwindLogo}
							alt='Tailwind logo'
						/>
					</Marquee>
					<Marquee
						className='flex-1'
						reverse
						vertical={isSmallScreen}
					>
						<SkillElement
							title='Node.js'
							logo={NodeJsLogo}
							alt='Node.js logo'
						/>
						<SkillElement
							title='PostgreSQL'
							logo={PostgresLogo}
							alt='PostgreSQL logo'
						/>
						<SkillElement
							title='Sequelize'
							logo={SequelizeLogo}
							alt='Sequelize logo'
						/>
					</Marquee>
					<div className='absolute inset-x-0 top-0 sm:inset-x-auto h-1/4 sm:h-auto bg-gradient-to-b sm:w-1/4 sm:inset-y-0 sm:left-0 sm:bg-gradient-to-r from-card'></div>
					<div className='absolute inset-x-0 bottom-0 sm:inset-x-auto h-1/4 sm:h-auto bg-gradient-to-t sm:w-1/4 sm:inset-y-0 sm:right-0 sm:bg-gradient-to-l from-card'></div>
				</div>
			</div>
			{/* <Timeline /> */}
			{/* 
				<div className='flex flex-col flex-wrap p-4 border border-border rounded-3xl bg-card'>
					<h2 className='mt-2 mb-10 text-3xl font-bold text-center font-montserrat animate-fade-in'>
						My career
					</h2>

					<span>
						After working for 10 years in IT as a VIP support, I
						decided to get back into the development world, which I
						firstly started diving into during my free time in 2004,
						then during my studies in 2010.
					</span>
				</div> */}
		</section>
	);
}
