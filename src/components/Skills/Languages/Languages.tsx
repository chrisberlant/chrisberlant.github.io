import SkillsCard from '../SkillsCard/SkillsCard';
import SkillElement from '../SkillsCard/SkillElement/SkillElement';
import TypeScriptLogo from '@assets/typescript-logo.svg';
import HtmlLogo from '@assets/html-logo.svg';
import CssLogo from '@assets/css-logo.svg';
import SqlLogo from '@assets/sql-logo.svg';
import JavaScriptLogo from '@assets/javascript-logo.svg';
import { useState } from 'react';

export default function Languages() {
	const [lang, setLang] = useState(true);

	return (
		<SkillsCard title='Languages'>
			<SkillElement
				className='animate-glitch'
				onAnimation={() => setLang((prev) => !prev)}
				title={lang ? 'JavaScript' : 'TypeScript'}
				logo={lang ? JavaScriptLogo : TypeScriptLogo}
				alt='Logo JavaScript/TypeScript'
			/>
			<SkillElement title='SQL' logo={SqlLogo} alt='Logo SQL' />
			<SkillElement title='HTML' logo={HtmlLogo} alt='Logo HTML' />
			<SkillElement title='CSS' logo={CssLogo} alt='Logo CSS' />
		</SkillsCard>
	);
}
