import TypewriterEffect from '../../ui/Typewriter';

function Description() {
	const words = [
		{
			text: 'Hi',
		},
		{
			text: "I'm",
		},
		{
			text: 'Chris!',
		},
		{
			text: "I'm",
		},
		{
			text: 'a',
		},
		{
			text: 'Full-stack',
			className: 'text-red-500',
		},
		{
			text: 'although',
		},
		{
			text: 'more',
		},
		{
			text: 'Front-end',
			className: 'text-blue-500',
		},
		{
			text: 'oriented',
		},
		{
			text: 'React',
		},
		{
			text: 'developer.',
		},
	];
	return (
		<TypewriterEffect
			words={words}
			className='h-50 w-96 font-robotoMono'
			cursorClassName='relative top-1 right-3 md:right-4'
		/>
	);
}

export default Description;
