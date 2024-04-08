import SkillsCard from '../SkillsCard/SkillsCard';
import SkillElement from '../SkillsCard/SkillElement/SkillElement';
import VSCodeLogo from '@assets/vscode-logo.svg';
import InsomniaLogo from '@assets/insomnia-logo.svg';

export default function Tools() {
	return (
		<SkillsCard
			title='Tools'
			className='md:animate-slide-from-left animate-slide-from-right'
		>
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
		</SkillsCard>
	);
}
