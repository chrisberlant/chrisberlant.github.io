import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../Carousel/Carousel';
import Badge from '../../Badge/Badge';
import { cn } from '../../../lib/utils';
import { ReactNode } from 'react';

export interface ProjectCardProps {
	project: {
		title: string;
		slidesUrl: string[];
		className?: string;
		badges: Record<string, 'default' | 'front' | 'back'>;
		description: {
			title: string;
			content: string;
		};
	};
	children: ReactNode;
}

function ProjectCard({ project, children }: ProjectCardProps) {
	return (
		<div
			className={cn(
				'bg-card flex flex-col items-center rounded-lg shadow-lg px-5 md:px-12 pt-4 pb-5 w-96 md:backdrop-blur-sm',
				project.className
			)}
		>
			<Carousel
				opts={{
					loop: 'true',
				}}
				className='w-32'
			>
				<CarouselContent>
					{project.slidesUrl.map((slide) => (
						<CarouselItem key={slide}>
							<a href={slide}>
								<img src={slide} />
							</a>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
			<h4 className='p-3 text-xl font-bold leading-none text-center'>
				{project.title}
			</h4>
			<div className='flex flex-wrap justify-center gap-2 mb-2'>
				{Object.entries(project.badges).map(([key, value]) => (
					<Badge variant={value} key={key}>
						{key}
					</Badge>
				))}
			</div>
			<div className='font-bold text-center'>
				{project.description.title}
			</div>
			<div className='text-center'>{project.description.content}</div>
			<div className='flex items-end h-full gap-5 mt-4'>{children}</div>
		</div>
	);
}

export default ProjectCard;
