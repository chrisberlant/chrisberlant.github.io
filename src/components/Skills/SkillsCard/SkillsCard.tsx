import * as React from 'react';

import { cn } from '../../../lib/utils';

interface SkillsCardProps {
	title: string;
	children: React.ReactNode;
	className: string;
}

function SkillsCard({ title, children, className }: SkillsCardProps) {
	return (
		<div
			className={cn(
				'flex flex-col items-center rounded-lg border-2 shadow-sm',
				className
			)}
		>
			<h3 className='p-4 text-2xl font-bold leading-none'>{title}</h3>

			<div className='p-4 pt-0'>{children}</div>
		</div>
	);
}

export default SkillsCard;
