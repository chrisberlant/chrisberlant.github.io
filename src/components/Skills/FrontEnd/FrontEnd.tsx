import SkillsCard from '../SkillsCard/SkillsCard';
import SkillElement from '../SkillsCard/SkillElement/SkillElement';
import ReactLogo from '../../../assets/react-logo.svg';
import ReduxLogo from '../../../assets/redux-logo.svg';
import TailwindLogo from '../../../assets/tailwind-logo.svg';

import SassLogo from '../../../assets/sass-logo.svg';

function FrontEnd() {
	return (
		<SkillsCard title='Front-end' className='min-w-64'>
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
			<SkillElement title='Sass' logo={SassLogo} alt='Logo Sass' />
		</SkillsCard>
	);
}

export default FrontEnd;
