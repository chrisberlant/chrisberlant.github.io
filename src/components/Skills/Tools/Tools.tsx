import SkillsCard from '../SkillsCard/SkillsCard';
import SkillElement from '../SkillsCard/SkillElement/SkillElement';
import VSCodeLogo from '@assets/vscode-logo.svg';
import InsomniaLogo from '@assets/insomnia-logo.svg';
import DockerLogo from '@assets/docker-logo.svg';

export default function Tools() {
	return (
		<SkillsCard title='Tools'>
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
			<SkillElement title='Docker' logo={DockerLogo} alt='Docker logo' />
		</SkillsCard>
	);
}
