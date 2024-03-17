import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../Carousel/Carousel';
import Badge from '../../Badge/Badge';
import { cn } from '../../../lib/utils';
import { ProjectCardProps } from '../ProjectCard/ProjectCard';

// Card used for the biggest project
export default function MainProjectCard({
	project,
	children,
	className,
}: ProjectCardProps) {
	return (
		<div
			className={cn(
				'bg-card flex flex-col items-center rounded-xl shadow-lg px-5 md:px-12 pt-4 pb-5 w-auto h-auto',
				className
			)}
		>
			<h3 className='p-4 text-xl font-bold leading-none text-center'>
				Main Project : {project.title}
			</h3>
			<div className='flex flex-wrap justify-center gap-2 mb-3'>
				{Object.entries(project.badges).map(([key, value]) => (
					<Badge variant={value} key={key}>
						{key}
					</Badge>
				))}
			</div>
			<Carousel
				opts={{
					loop: 'true',
				}}
				className='w-32'
			>
				<CarouselContent>
					{project.slidesUrl.map((slide, index) => (
						<CarouselItem
							key={slide}
							className='flex justify-center'
						>
							<a href={slide} target='blank'>
								<img
									src={slide}
									className='h-20'
									alt={
										'Screenshot ' +
										`${project.title}` +
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

			<div className='font-bold text-center'>
				{project.description.title}
			</div>
			<div className='flex h-full mt-4'>{children}</div>
		</div>
	);
}
