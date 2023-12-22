import SkillsCard from '../SkillsCard/SkillsCard';
import SkillElement from '../SkillsCard/SkillElement/SkillElement';
import JavaScriptLogo from '../../../assets/javascript-logo.svg';
import TypeScriptLogo from '../../../assets/typescript-logo.svg';
import HtmlLogo from '../../../assets/html-logo.svg';
import CssLogo from '../../../assets/css-logo.svg';
import SqlLogo from '../../../assets/sql-logo.svg';

function Languages() {
	return (
		<SkillsCard title='Languages' className='w-64 min-w-64'>
			<SkillElement
				title='JavaScript'
				logo={JavaScriptLogo}
				alt='Logo JavaScript'
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
