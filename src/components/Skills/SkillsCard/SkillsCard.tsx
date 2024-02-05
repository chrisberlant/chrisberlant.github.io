import * as React from 'react';
import { cn } from '../../../lib/utils';
import { BackgroundGradient } from '../../ui/BackgroundRadient';

interface SkillsCardProps {
	title: string;
	children: React.ReactNode;
	className?: string;
	containerClassName?: string;
	delay?: number;
}

function SkillsCard({
	title,
	children,
	className,
	containerClassName,
	delay = 0,
}: SkillsCardProps) {
	return (
		<BackgroundGradient
			containerClassName={containerClassName}
			delay={delay}
		>
			<div
				className={cn(
					'font-robotoMono bg-card flex flex-col items-center rounded-xl shadow-lg px-8 pt-5',
					className
				)}
			>
				<h3 className='px-4 pb-5 text-2xl font-bold leading-none'>
					{title}
				</h3>
				<div>{children}</div>
			</div>
		</BackgroundGradient>
	);
}

export default SkillsCard;
