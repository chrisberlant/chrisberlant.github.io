import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from './Carousel/Carousel';

function Projects() {
	return (
		<div className='flex flex-col gap-10'>
			<h2 className='pb-0 mt-16 text-4xl font-bold text-center'>
				Projects
			</h2>
			<div className='flex flex-wrap justify-center'>
				<Carousel
					opts={{
						align: 'start',
						loop: 'true',
					}}
				>
					<CarouselContent className='mr-0'>
						<CarouselItem className='basis-1/6'>
							<img src='/img/image1.png' />
						</CarouselItem>
						<CarouselItem className='basis-1/6'>
							<img src='/img/image2.png' />
						</CarouselItem>
						<CarouselItem className='basis-1/6'>
							<img src='/img/image3.png' />
						</CarouselItem>
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</div>
	);
}

export default Projects;
