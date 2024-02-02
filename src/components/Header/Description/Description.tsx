import TypewriterEffect from '../../ui/Typewriter';

function Description() {
	const words = [
		{
			text: "I'm",
		},
		{
			text: 'a',
		},
		{
			text: 'Full-stack',
			className: 'text-ghPurple',
		},
		{
			text: 'although',
		},
		{
			text: 'more',
		},
		{
			text: 'Front-end',
			className: 'text-ghBlue',
		},
		{
			text: 'oriented',
		},
		{
			text: 'React',
			className: 'text-ghLightBlue',
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

export default Description;
