import { cn } from '@lib/utils';

interface SkillElementProps {
	title: string;
	logo: string;
	alt: string;
	className?: string;
	onAnimation?: () => void;
}

export default function SkillElement({
	title,
	logo,
	alt,
	className,
	onAnimation,
}: SkillElementProps) {
	return (
		<div
			onAnimationIteration={onAnimation}
			className={cn('flex items-center', className)}
		>
			<img src={logo} className='mr-3 size-8' alt={alt} />
			<span>{title}</span>
		</div>
	);
}
