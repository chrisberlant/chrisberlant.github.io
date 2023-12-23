import SkillsCard from '../SkillsCard/SkillsCard';
import SkillElement from '../SkillsCard/SkillElement/SkillElement';
import VSCodeLogo from '../../../assets/vscode-logo.svg';
import WindowsLogo from '../../../assets/windows-logo.svg';
import LinuxLogo from '../../../assets/linux-logo.svg';
import GitLogo from '../../../assets/git-logo.svg';

function Others() {
	return (
		<SkillsCard title='Others' className='min-w-64'>
			<SkillElement
				title='Visual Studio Code'
				logo={VSCodeLogo}
				alt='Logo Visual Studio Code'
			/>
			<SkillElement
				title='Windows'
				logo={WindowsLogo}
				alt='Logo Windows'
			/>
			<SkillElement title='Linux' logo={LinuxLogo} alt='Logo Linux' />
			<SkillElement title='Git' logo={GitLogo} alt='Logo Git' />
		</SkillsCard>
	);
}

export default Others;
