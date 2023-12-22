interface SkillElementProps {
	title: string;
	logo: string;
	alt: string;
	size?: number;
}

function SkillElement({ title, logo, alt, size = 8 }: SkillElementProps) {
	return (
		<div className='flex flex-col items-center p-1'>
			<img src={logo} className={`size-${size}`} alt={alt} />
			<span>{title}</span>
		</div>
	);
}

export default SkillElement;
