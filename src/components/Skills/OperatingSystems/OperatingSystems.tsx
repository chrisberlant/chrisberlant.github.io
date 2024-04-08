import SkillsCard from '../SkillsCard/SkillsCard';
import SkillElement from '../SkillsCard/SkillElement/SkillElement';
import WindowsLogo from '@assets/windows-logo.svg';
import LinuxLogo from '@assets/linux-logo.svg';

export default function OperatingSystems() {
	return (
		<SkillsCard
			title='OS'
			className='md:animate-slide-from-bottom animate-slide-from-left'
		>
			<SkillElement
				title='Windows'
				logo={WindowsLogo}
				alt='Windows logo'
			/>
			<SkillElement title='Linux' logo={LinuxLogo} alt='Linux logo' />
		</SkillsCard>
	);
}
