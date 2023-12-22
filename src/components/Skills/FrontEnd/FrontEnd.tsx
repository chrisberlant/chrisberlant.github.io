import SkillsCard from '../SkillsCard/SkillsCard';
import SkillElement from '../SkillsCard/SkillElement/SkillElement';
import ReactLogo from '../../../assets/react-logo.svg';
import ReduxLogo from '../../../assets/redux-logo.svg';
import TailwindLogo from '../../../assets/tailwind-logo.svg';
import TypeScriptLogo from '../../../assets/typescript-logo.svg';

function FrontEnd() {
	return (
		<SkillsCard title='Front-end' className='w-64 min-w-64'>
			<SkillElement
				title='TypeScript'
				logo={TypeScriptLogo}
				alt='Logo TypeScript'
			/>
			<SkillElement title='React' logo={ReactLogo} alt='Logo React' />
			<SkillElement
				title='Redux Toolkit'
				logo={ReduxLogo}
				alt='Logo Redux'
			/>
			<SkillElement
				title='Tailwind'
				logo={TailwindLogo}
				alt='Logo Tailwind'
			/>
		</SkillsCard>
	);
}

export default FrontEnd;
