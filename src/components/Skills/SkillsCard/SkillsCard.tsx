import * as React from 'react';
import { cn } from '../../../lib/utils';

interface SkillsCardProps {
	title: string;
	children: React.ReactNode;
	className?: string;
}

export default function SkillsCard({
	title,
	children,
	className,
}: SkillsCardProps) {
	return (
		<div
			className={cn(
				'font-robotoMono bg-card flex flex-col items-center rounded-xl shadow-lg px-8 pt-5 border-2 border-border',
				className
			)}
		>
			<h3 className='px-4 pb-5 text-2xl font-bold leading-none'>
				{title}
			</h3>
			<div>{children}</div>
		</div>
	);
}
