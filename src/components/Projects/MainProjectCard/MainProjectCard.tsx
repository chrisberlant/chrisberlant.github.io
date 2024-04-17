import Badge from '../../Badge/Badge';
import { cn } from '@lib/utils';
import { ProjectCardProps } from '../ProjectCard/ProjectCard';

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
				'bg-card flex flex-col items-center rounded-xl shadow-md px-5 md:px-12 py-5 border-2 border-border',
				className
			)}
		>
			<h3 className='mb-2 text-xl font-bold leading-none text-center'>
				Main Project : {title}
			</h3>
			<h4 className='mb-4 font-bold text-center'>{description.title}</h4>
			<div className='flex flex-wrap justify-center gap-2 mb-3'>
				{Object.keys(badges).map((spec) =>
					badges[
						spec as keyof ProjectCardProps['project']['badges']
					].map((tech) => (
						<Badge
							variant={
								spec as keyof ProjectCardProps['project']['badges']
							}
							key={tech}
						>
							{tech}
						</Badge>
					))
				)}
			</div>

			<h4 className='mb-2 font-bold text-center'>Example screenshots</h4>
			<div className='flex flex-wrap justify-center gap-2'>
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
