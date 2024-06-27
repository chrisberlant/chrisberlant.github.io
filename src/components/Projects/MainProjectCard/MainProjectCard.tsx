import Badge from '../../Badge/Badge';
import { cn } from '@lib/utils';
import { BadgesType, ProjectCardProps } from '../ProjectCard/ProjectCard';

// Card used for the biggest project
export default function MainProjectCard({
	project,
	children,
	className,
}: ProjectCardProps) {
	const { badges, slidesUrl, title, description } = project;
	return (
		<div
			className={cn(
				'bg-card flex flex-col items-center text-center rounded-3xl shadow-md dark:shadow-none px-5 md:px-12 py-5 border border-border',
				className
			)}
		>
			<h3 className='mb-2 text-2xl font-bold leading-none'>
				Main Project : {title}
			</h3>

			<h4 className='mb-4 font-bold text-center'>{description.title}</h4>
			<div className='flex flex-wrap justify-center gap-2 mb-3'>
				{Object.keys(badges).map((spec) =>
					badges[spec as keyof BadgesType].map((tech) => (
						<Badge variant={spec as keyof BadgesType} key={tech}>
							{tech}
						</Badge>
					))
				)}
			</div>

			<h4 className='mb-2 font-bold text-center'>Screenshots</h4>
			<div className='flex flex-wrap justify-center gap-2 xl:max-w-80%'>
				{slidesUrl.map((slide, index) => (
					<a href={slide} key={slide} target='_blank'>
						<img
							src={slide}
							className='h-40 rounded-md'
							alt={
								'Screenshot ' +
								`${title}` +
								' ' +
								`${index + 1}`
							}
						/>
					</a>
				))}
			</div>

			<div className='flex h-full mt-4'>{children}</div>
		</div>
	);
}
