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
				'font-robotoMono bg-card flex flex-col items-center rounded-xl shadow-md px-8 py-5 border-2 border-border',
				className
			)}
		>
			<h3 className='px-4 pb-5 text-2xl font-bold leading-none'>
				{title}
			</h3>
			<div className='flex flex-col gap-5'>{children}</div>
		</div>
	);
}
