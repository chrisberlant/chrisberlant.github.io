import SkillsCard from '@/components/SkillsCard/SkillsCard';
import SkillElement from '@/components/SkillsCard/SkillElement/SkillElement';
import NodeJsLogo from '@assets/nodejs-logo.svg';
import PostgresLogo from '@assets/postgresql-logo.svg';
import ExpressLogo from '@assets/express-logo.png';
import SequelizeLogo from '@assets/sequelize-logo.svg';

export default function BackEnd() {
	return (
		<SkillsCard title='Back-end'>
			<SkillElement
				title='Node.js'
				logo={NodeJsLogo}
				alt='Node.js logo'
			/>
			<SkillElement
				title='PostgreSQL'
				logo={PostgresLogo}
				alt='PostgreSQL logo'
			/>
			<SkillElement
				title='Sequelize'
				logo={SequelizeLogo}
				alt='Sequelize logo'
			/>
		</SkillsCard>
	);
}
