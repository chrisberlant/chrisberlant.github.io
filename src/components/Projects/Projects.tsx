import GithubLogo from '../../assets/github-logo.svg';
import LinkButton from '../LinkButton/LinkButton';
import ProjectCard, { ProjectCardProps } from './ProjectCard/ProjectCard';

const gestionSmac: ProjectCardProps['project'] = {
	title: 'Gestion SMAC',
	slidesUrl: [
		'/img/gestion-smac1.png',
		'/img/gestion-smac2.png',
		'/img/gestion-smac3.png',
	],
	badges: {
		React: 'front',
		Mantine: 'front',
		'Tanstack Table': 'front',
		'Tanstack Query': 'front',
		Express: 'back',
		PostgreSQL: 'back',
		JWT: 'back',
		Zod: 'both',
	},
	description: {
		title: 'Mobile devices management',
		content:
			'Allows a team to manage a stock of various mobile devices (basic phones, smartphones, 4G modems)',
	},
};

const jobMemo: ProjectCardProps['project'] = {
	title: 'Jobmémo',
	slidesUrl: [
		'/img/jobmemo1.png',
		'/img/jobmemo2.png',
		'/img/jobmemo3.png',
		'/img/jobmemo4.png',
		'/img/jobmemo5.png',
		'/img/jobmemo6.png',
	],
	badges: {
		React: 'front',
		Redux: 'front',
		'React Beautiful DnD': 'front',
		Express: 'back',
		PostgreSQL: 'back',
		JWT: 'back',
		Joi: 'both',
	},
	description: {
		title: 'Job finding helper',
		content:
			'Allows a user to manage his various job applications and their associated contacts',
	},
};

function Projects() {
	return (
		<div className='flex flex-col gap-10 mt-12'>
			<h2 className='pb-0 mt-10 text-4xl font-bold text-center animate-fade-in font-montserrat'>
				Projects
			</h2>
			<div className='flex flex-wrap justify-center gap-10 '>
				<ProjectCard
					project={gestionSmac}
					className='animate-slide-from-left'
				>
					<LinkButton
						size='sm'
						variant='githubProject'
						text='Front-end'
						logo={GithubLogo}
						aria-label='Open the Gestion SMAC front-end repository'
						onClick={() =>
							window.open(
								'https://github.com/chrisberlant/gestion-SMAC-front'
							)
						}
					/>
					<LinkButton
						size='sm'
						variant='githubProject'
						text='Back-end'
						logo={GithubLogo}
						aria-label='Open the Gestion SMAC back-end repository'
						onClick={() =>
							window.open(
								'https://github.com/chrisberlant/gestion-SMAC-back'
							)
						}
					/>
				</ProjectCard>
				<ProjectCard
					project={jobMemo}
					className='animate-slide-from-right'
				>
					<LinkButton
						size='sm'
						variant='githubProject'
						text='Front-end'
						logo={GithubLogo}
						aria-label='Open the JobMemo front-end repository'
						onClick={() =>
							window.open(
								'https://github.com/chrisberlant/jobmemo-front'
							)
						}
					/>
					<LinkButton
						size='sm'
						variant='githubProject'
						text='Back-end'
						logo={GithubLogo}
						aria-label='Open the JobMemo back-end repository'
						onClick={() =>
							window.open(
								'https://github.com/chrisberlant/jobmemo-back'
							)
						}
					/>
				</ProjectCard>
			</div>
		</div>
	);
}

export default Projects;
