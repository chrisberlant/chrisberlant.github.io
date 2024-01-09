import SkillsCard from '../SkillsCard/SkillsCard';
import SkillElement from '../SkillsCard/SkillElement/SkillElement';
import VSCodeLogo from '@assets/vscode-logo.svg';
import InsomniaLogo from '@assets/insomnia-logo.svg';
import WireframeLogo from '@assets/wireframe-logo.svg';
import WindowsLogo from '@assets/windows-logo.svg';
import LinuxLogo from '@assets/linux-logo.svg';
import GitLogo from '@assets/git-logo.svg';
import AgileLogo from '@assets/agile-logo.png';
import AccessibilityLogo from '@assets/accessibility-logo.svg';
import FrenchFlag from '@assets/french-flag.svg';
import UKFlag from '@assets/uk-flag.svg';

function Others() {
	return (
		<SkillsCard title='Others'>
			<div className='flex flex-col flex-wrap md:flex-row md:gap-10'>
				<div className='mb-2 md:mb-0'>
					<SkillElement
						title='Visual Studio Code'
						logo={VSCodeLogo}
						alt='Visual Studio Code logo'
					/>
					<SkillElement
						title='Insomnia'
						logo={InsomniaLogo}
						alt='Insomnia logo'
					/>
					<SkillElement
						title='Windows'
						logo={WindowsLogo}
						alt='Windows logo'
					/>
					<SkillElement
						title='Linux'
						logo={LinuxLogo}
						alt='Linux logo'
					/>
				</div>

				<div className='mb-2 md:mb-0'>
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
				</div>

				<div>
					<SkillElement
						title='French'
						logo={FrenchFlag}
						alt='French flag'
					/>
					<SkillElement
						title='English'
						logo={UKFlag}
						alt='United Kingdom flag'
					/>
				</div>
			</div>
		</SkillsCard>
	);
}

export default Others;
