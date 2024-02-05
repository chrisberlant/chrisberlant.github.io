import BackEnd from './BackEnd/BackEnd';
import FrontEnd from './FrontEnd/FrontEnd';
import Languages from './Languages/Languages';
import Others from './Others/Others';

function Skills() {
	return (
		<div className='flex flex-col gap-10 mt-16 font-montserrat'>
			<h2 className='text-4xl font-bold text-center animate-fade-in'>
				My Skills
			</h2>
			<div className='flex flex-wrap items-start justify-center gap-10'>
				<Languages />
				<FrontEnd />
				<BackEnd />
			</div>
			<div className='flex justify-center'>
				<Others />
			</div>
		</div>
	);
}

export default Skills;
