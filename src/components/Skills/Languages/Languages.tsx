import SkillsCard from '../SkillsCard/SkillsCard';
import SkillElement from '../SkillsCard/SkillElement/SkillElement';
import TypeScriptLogo from '@assets/typescript-logo.svg';
import HtmlLogo from '@assets/html-logo.svg';
import CssLogo from '@assets/css-logo.svg';
import SqlLogo from '@assets/sql-logo.svg';
import JavaScriptLogo from '@assets/javascript-logo.svg';

function Languages() {
	return (
		<SkillsCard
			title='Languages'
			containerClassName='md:animate-slide-from-left animate-slide-from-top'
			delay={1}
		>
			<SkillElement
				title='JavaScript'
				logo={JavaScriptLogo}
				alt='Logo TypeScript'
			/>
			<SkillElement
				title='TypeScript'
				logo={TypeScriptLogo}
				alt='Logo TypeScript'
			/>
			<SkillElement title='SQL' logo={SqlLogo} alt='Logo SQL' />
			<SkillElement title='HTML' logo={HtmlLogo} alt='Logo HTML' />
			<SkillElement title='CSS' logo={CssLogo} alt='Logo CSS' />
		</SkillsCard>
	);
}

export default Languages;
