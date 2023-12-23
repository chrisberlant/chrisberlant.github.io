interface SkillElementProps {
	title: string;
	logo: string;
	alt: string;
}

function SkillElement({ title, logo, alt }: SkillElementProps) {
	return (
		<div className='flex items-center p-1 pb-3'>
			<img src={logo} className='mr-2 size-8' alt={alt} />
			<span>{title}</span>
		</div>
	);
}

export default SkillElement;
