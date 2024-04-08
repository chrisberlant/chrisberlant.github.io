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
		badges: {
			front: string[];
			back: string[];
			both: string[];
		};
		description: {
			title: string;
			content: string;
		};
	};
	children: ReactNode;
	className?: string;
}

export default function ProjectCard({
	project,
	children,
	className,
}: ProjectCardProps) {
	const { title, slidesUrl, badges, description } = project;
	return (
		<div
			className={cn(
				'bg-card flex flex-col items-center rounded-xl shadow-lg px-5 md:px-12 py-5 w-96 border-2 border-border',
				className
			)}
		>
			<h3 className='mb-4 text-2xl font-bold leading-none text-center'>
				{title}
			</h3>
			<Carousel
				opts={{
					loop: true,
				}}
				className='w-32'
			>
				<CarouselContent>
					{slidesUrl.map((slide, index) => (
						<CarouselItem
							key={slide}
							className='flex justify-center'
						>
							<a href={slide} target='_blank'>
								<img
									src={slide}
									className='h-20'
									alt={
										'Screenshot ' +
										`${title}` +
										' ' +
										`${index + 1}`
									}
								/>
							</a>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>

			<div className='flex flex-wrap justify-center gap-2 my-4'>
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
			<div className='font-bold text-center'>{description.title}</div>
			<div className='text-center'>{description.content}</div>
			<div className='flex items-end h-full gap-6 mt-4'>{children}</div>
		</div>
	);
}
