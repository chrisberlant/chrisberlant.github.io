import BackEnd from './BackEnd/BackEnd';
import FrontEnd from './FrontEnd/FrontEnd';
import ISpeak from './ISpeak/ISpeak';
import Languages from './Languages/Languages';
import OperatingSystems from './OperatingSystems/OperatingSystems';
import Others from './Others/Others';
import Tools from './Tools/Tools';

function Skills() {
	return (
		<div className='flex flex-col items-center mt-16'>
			<h2 className='mb-10 text-4xl font-bold text-center font-montserrat animate-fade-in'>
				My Skills
			</h2>
			<div className='flex flex-wrap items-center justify-center max-w-4xl gap-10 sm:gap-14'>
				<Languages />
				<FrontEnd />
				<BackEnd />
				<Tools />
				<OperatingSystems />
				<ISpeak />
				<Others />
			</div>
		</div>
	);
}

export default Skills;
