import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface SkillElementProps {
	title: string;
	className?: string;
	children?: React.ReactNode;
	onAnimation?: () => void;
}

export function SkillElement({
	title,
	className,
	children,
	onAnimation = undefined,
}: SkillElementProps) {
	return (
		<div
			onAnimationIteration={onAnimation}
			className={cn(
				'flex flex-col select-none sm:flex-row text-center items-center border-2 bg-background border-border rounded-2xl py-2 sm:px-3 justify-center hover:bg-accent',
				className
			)}
		>
			{children}
			<span>{title}</span>
		</div>
	);
}

interface GlitchingSkillElementProps extends SkillElementProps {
	secondTitle: string;
	logo: string;
	secondLogo: string;
}

export function GlitchingSkillElement({
	title,
	secondTitle,
	logo,
	secondLogo,
	className,
}: GlitchingSkillElementProps) {
	const [element, setElement] = useState(true);

	return (
		<SkillElement
			title={element ? title : secondTitle}
			className={className}
			onAnimation={() => setElement((prev) => !prev)}
		>
			<img
				src={element ? logo : secondLogo}
				alt=''
				className='mb-1 sm:mb-0 sm:mr-3 size-8'
			/>
		</SkillElement>
	);
}
