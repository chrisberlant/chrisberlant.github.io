import SkillsCard from '../SkillsCard/SkillsCard';
import SkillElement from '../SkillsCard/SkillElement/SkillElement';
import WireframeLogo from '@assets/wireframe-logo.svg';
import GitLogo from '@assets/git-logo.svg';
import AgileLogo from '@assets/agile-logo.png';
import AccessibilityLogo from '@assets/accessibility-logo.svg';

export default function Others() {
	return (
		<SkillsCard title='Others' className='animate-slide-from-bottom'>
			<SkillElement title='Git' logo={GitLogo} alt='Git logo' />
			<SkillElement
				title='Wireframes conception'
				logo={WireframeLogo}
				alt='Wireframe logo'
			/>
			<SkillElement
				title='Agile methodology'
				logo={AgileLogo}
				alt='Agile logo'
			/>
			<SkillElement
				title='Accessibility'
				logo={AccessibilityLogo}
				alt='Accessibility logo'
			/>
		</SkillsCard>
	);
}
