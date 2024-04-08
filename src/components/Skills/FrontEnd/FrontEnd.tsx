import SkillsCard from '../SkillsCard/SkillsCard';
import SkillElement from '../SkillsCard/SkillElement/SkillElement';
import ReactLogo from '@assets/react-logo.svg';
import ReduxLogo from '@assets/redux-logo.svg';
import TailwindLogo from '@assets/tailwind-logo.svg';
import SassLogo from '@assets/sass-logo.svg';

export default function FrontEnd() {
	return (
		<SkillsCard
			title='Front-end'
			className='animate-slide-from-right md:animate-slide-from-top'
		>
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
		</SkillsCard>
	);
}
