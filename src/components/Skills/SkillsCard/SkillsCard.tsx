import * as React from 'react';

import { cn } from '../../../lib/utils';

interface SkillsCardProps {
	title: string;
	children: React.ReactNode;
	className?: string;
}

function SkillsCard({ title, children, className }: SkillsCardProps) {
	return (
		<div
			className={cn(
				'bg-card flex flex-col items-center rounded-xl shadow-lg px-10 pb-2 md:backdrop-blur-sm',
				className
			)}
		>
			<h3 className='p-4 text-2xl font-bold leading-none'>{title}</h3>
			<div>{children}</div>
		</div>
	);
}

export default SkillsCard;
