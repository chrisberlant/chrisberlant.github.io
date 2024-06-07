import BackEnd from './BackEnd/BackEnd';
import FrontEnd from './FrontEnd/FrontEnd';
import ISpeak from './ISpeak/ISpeak';
import Languages from './Languages/Languages';
import Others from './Others/Others';
import Description from '../Header/Description/Description';

export default function HomePage() {
	return (
		<section className='flex flex-col items-center'>
			<Description />
			<h2 className='mt-4 mb-10 text-3xl font-bold text-center font-montserrat animate-fade-in'>
				My Skills
			</h2>
			<div className='flex flex-wrap items-start justify-around max-w-4xl gap-10 sm:gap-14'>
				<Languages />
				<FrontEnd />
				<BackEnd />
				<ISpeak />
				<Others />
			</div>
		</section>
	);
}
