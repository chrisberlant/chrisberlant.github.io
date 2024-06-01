import Typewriter from 'typewriter-effect';

const descriptionString =
	"I'm a <span class='text-full-stack'>Full-stack</span>, more <span class='text-front-end'>Front-end</span> oriented <span class='text-front-end'>React</span> developer.";

export default function Description() {
	return (
		<div className='font-robotoMono flex flex-col h-48 min-[482px]:h-40 sm:h-44 min-[1183px]:h-36 text-2xl sm:text-3xl font-bold text-center'>
			<div className='flex justify-center'>
				<h1 className='mb-4'>Hi I'm Chris!</h1>
			</div>
			<Typewriter
				options={{
					delay: 50,
				}}
				onInit={(typewriter) => {
					typewriter.typeString(descriptionString).start();
				}}
			/>
		</div>
	);
}
