import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../Carousel/Carousel';
import Badge from '../../Badge/Badge';
import { cn } from '@lib/utils';
import { ReactNode } from 'react';

export type BadgesType = {
	front: string[];
	back: string[];
	fullStack: string[];
	appType: string[];
};
export type ProjectType = {
	title: string;
	slidesUrl: string[];
	badges: BadgesType;
	description: {
		title: string;
		content: ReactNode;
	};
};

export interface ProjectCardProps {
	project: ProjectType;
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
				'bg-card/80 flex flex-col items-center rounded-3xl shadow-md dark:shadow-none px-5 md:px-12 py-5 border border-border',
				className
			)}
		>
			<h2 className='mb-4 text-2xl font-bold leading-none text-center'>
				{title}
			</h2>
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
					badges[spec as keyof BadgesType].map((tech) => (
						<Badge variant={spec as keyof BadgesType} key={tech}>
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
