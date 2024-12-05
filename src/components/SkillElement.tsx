import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface SkillElementProps {
	title: string;
	logo: string;
	logoDark?: string;
	alt: string;
	className?: string;
	onAnimation?: () => void;
}

export function SkillElement({
	title,
	logo,
	logoDark,
	alt,
	className,
	onAnimation = undefined,
}: SkillElementProps) {
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	useEffect(() => {
		const updateTheme = () => {
			setIsDarkTheme(document.documentElement.classList.contains('dark'));
		};

		const observer = new MutationObserver(updateTheme);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class'],
		});

		return () => observer.disconnect();
	}, []);

	return (
		<div
			onAnimationIteration={onAnimation}
			className={cn(
				'flex flex-col select-none sm:flex-row text-center items-center border-2 bg-background border-border rounded-2xl py-2 sm:px-3 justify-center hover:bg-accent',
				className
			)}
		>
			<img
				src={logoDark && isDarkTheme ? logoDark : logo}
				className='mb-1 sm:mb-0 sm:mr-3 size-8'
				alt={alt}
			/>
			<span>{title}</span>
		</div>
	);
}

interface GlitchingSkillElementProps extends SkillElementProps {
	secondTitle: string;
	secondLogo: string;
}

export function GlitchingSkillElement({
	title,
	secondTitle,
	logo,
	secondLogo,
	alt,
	className,
}: GlitchingSkillElementProps) {
	const [element, setElement] = useState(true);

	return (
		<SkillElement
			title={element ? title : secondTitle}
			logo={element ? logo : secondLogo}
			alt={alt}
			className={className}
			onAnimation={() => setElement((prev) => !prev)}
		/>
	);
}
