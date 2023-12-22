interface SkillElementProps {
	title: string;
	logo: string;
	alt: string;
}

function SkillElement({ title, logo, alt }: SkillElementProps) {
	return (
		<div className='flex flex-col items-center p-1'>
			<img src={logo} className='size-8' alt={alt} />
			<span>{title}</span>
		</div>
	);
}

export default SkillElement;
