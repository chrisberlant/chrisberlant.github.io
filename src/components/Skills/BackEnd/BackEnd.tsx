import SkillsCard from '../SkillsCard/SkillsCard';
import SkillElement from '../SkillsCard/SkillElement/SkillElement';
import NodeJsLogo from '../../../assets/nodejs-logo.svg';
import PostgresLogo from '../../../assets/postgresql-logo.svg';
import SequelizeLogo from '../../../assets/sequelize-logo.svg';

function BackEnd() {
	return (
		<SkillsCard title='Back-end' className='w-64 min-w-64'>
			<SkillElement
				title='Node.js'
				logo={NodeJsLogo}
				alt='Logo Node.js'
			/>
			<SkillElement
				title='Sequelize'
				logo={SequelizeLogo}
				alt='Logo Sequelize'
			/>
			<SkillElement
				title='PostgreSQL'
				logo={PostgresLogo}
				alt='Logo PostgreSQL'
			/>
		</SkillsCard>
	);
}

export default BackEnd;
