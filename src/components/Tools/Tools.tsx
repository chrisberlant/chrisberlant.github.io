import OrbitingCirclesTools from './OrbitingCirclesTools/OrbitingCirclesTools';
import Animation from '@assets/operating-system-animate.svg';

export default function Tools() {
	return (
		<section className='flex flex-wrap justify-center gap-28 lg:mx-32'>
			<OrbitingCirclesTools />
			<img src={Animation} className='max-w-lg lg:block' />
		</section>
	);
}
