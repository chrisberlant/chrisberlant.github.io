import Typewriter from 'typewriter-effect';

export default function Description() {
	return (
		<Typewriter
			options={{
				delay: 50,
			}}
			onInit={(typewriter) => {
				typewriter
					.typeString(
						"I'm a <span class='text-violet-600 dark:text-violet-500'>Full-stack</span>, more <span class='text-blue-600 dark:text-blue-500'>Front-end</span> oriented <span class='text-blue-500 dark:text-blue-400'>React</span> developer."
					)
					.start();
			}}
		/>
	);
}
