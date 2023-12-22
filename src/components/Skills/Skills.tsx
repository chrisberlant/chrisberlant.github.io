import BackEnd from './BackEnd/BackEnd';
import FrontEnd from './FrontEnd/FrontEnd';
import Languages from './Languages/Languages';

function Skills() {
	return (
		<div className='flex flex-col'>
			<h2 className='self-center p-8 text-4xl font-bold'>Skills</h2>
			<div className='flex flex-wrap items-start justify-around gap-10'>
				<Languages />
				<FrontEnd />
				<BackEnd />
			</div>
		</div>
	);
}

export default Skills;
