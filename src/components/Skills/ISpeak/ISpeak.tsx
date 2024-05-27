import SkillsCard from '../SkillsCard/SkillsCard';
import SkillElement from '../SkillsCard/SkillElement/SkillElement';
import FrenchFlag from '@assets/french-flag.svg';
import UKFlag from '@assets/uk-flag.svg';

export default function ISpeak() {
	return (
		<SkillsCard title='I speak'>
			<SkillElement title='French' logo={FrenchFlag} alt='French flag' />
			<SkillElement
				title='English'
				logo={UKFlag}
				alt='United Kingdom flag'
			/>
		</SkillsCard>
	);
}
