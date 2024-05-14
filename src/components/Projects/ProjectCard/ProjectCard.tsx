import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../Carousel/Carousel';
import Badge from '../../Badge/Badge';
import { cn } from '@lib/utils';
import { PropsWithChildren, ReactNode } from 'react';

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
			content: ReactNode;
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
				'bg-card flex flex-col items-center rounded-xl shadow-md px-5 md:px-12 py-5 max-w-none border-2 border-border',
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
									className='h-20 rounded-md'
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

			<div className='mt-2 font-bold text-center'>
				{description.title}
			</div>
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
			<div className='text-center'>{description.content}</div>
			<div className='flex items-end h-full gap-6 mt-4'>{children}</div>
		</div>
	);
}
