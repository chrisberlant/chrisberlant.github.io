import NodeJsLogo from '@assets/nodejs-logo.svg';
import PostgresLogo from '@assets/postgresql-logo.svg';
import SequelizeLogo from '@assets/sequelize-logo.svg';
import ReactLogo from '@assets/react-logo.svg';
import ReduxLogo from '@assets/redux-logo.svg';
import TailwindLogo from '@assets/tailwind-logo.svg';
import SassLogo from '@assets/sass-logo.svg';
import Description from '../Header/Description/Description';
import TypeScriptLogo from '@assets/typescript-logo.svg';
import JavaScriptLogo from '@assets/javascript-logo.svg';
import SkillElement from '../SkillsCard/SkillElement/SkillElement';
import { useState } from 'react';

export default function HomePage() {
	const [lang, setLang] = useState(true);
	return (
		<section className='flex flex-col items-center'>
			<Description />
			<h2 className='mb-10 text-3xl font-bold text-center font-montserrat animate-fade-in'>
				My Stack
			</h2>
			<div className='flex flex-wrap items-start justify-around max-w-4xl gap-10 font-robotoMono sm:gap-14'>
				<SkillElement
					className='animate-glitch'
					onAnimation={() => setLang((prev) => !prev)}
					title={lang ? 'JavaScript' : 'TypeScript'}
					logo={lang ? JavaScriptLogo : TypeScriptLogo}
					alt='Logo JavaScript/TypeScript'
				/>
				<SkillElement title='React' logo={ReactLogo} alt='React logo' />
				<SkillElement
					title='Redux Toolkit'
					logo={ReduxLogo}
					alt='Redux logo'
				/>
				<SkillElement
					title='Tailwind'
					logo={TailwindLogo}
					alt='Tailwind logo'
				/>
				<SkillElement title='Sass' logo={SassLogo} alt='Sass logo' />
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
			</div>
		</section>
	);
}
