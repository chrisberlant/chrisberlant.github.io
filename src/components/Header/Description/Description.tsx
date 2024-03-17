import TypewriterEffect from '../../ui/Typewriter';

export default function Description() {
	const words = [
		{
			text: "I'm a ",
		},
		{
			text: 'Full-stack',
			className: 'text-violet-600 dark:text-violet-500',
		},
		{
			text: ', more ',
		},
		{
			text: 'Front-end ',
			className: 'text-blue-600 dark:text-blue-500',
		},
		{
			text: 'oriented ',
		},
		{
			text: 'React ',
			className: 'text-blue-500 dark:text-blue-400',
		},
		{
			text: 'developer.',
		},
	];

	return (
		<TypewriterEffect
			words={words}
			className='font-robotoMono'
			cursorClassName='relative md:bottom-1 right-4'
		/>
	);
}
