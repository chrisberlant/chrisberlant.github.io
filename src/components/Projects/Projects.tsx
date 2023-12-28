import GithubLogo from '../../assets/github-logo.svg';
import ProjectCard from './ProjectCard/ProjectCard';
import LinkButton from '../LinkButton/LinkButton';
import { ProjectCardProps } from './ProjectCard/ProjectCard';

const gestionSmac: ProjectCardProps['project'] = {
	title: 'Gestion SMAC',
	slidesUrl: ['/img/image1.png', '/img/image2.png', '/img/image3.png'],
	badges: {
		React: 'front',
		'Mantine UI': 'front',
		Express: 'back',
		PostgreSQL: 'back',
		Zod: 'default',
	},
	description: {
		title: 'Mobile devices management app',
		content:
			'This app allows a team to manage a stock of various mobile devices (basic phones, smartphones, 4G modems)',
	},
};

const jobMemo: ProjectCardProps['project'] = {
	title: 'Jobmémo',
	slidesUrl: ['/img/image1.png', '/img/image2.png', '/img/image3.png'],
	badges: {
		React: 'front',
		Express: 'back',
		PostgreSQL: 'back',
		Joi: 'back',
	},
	description: {
		title: 'Job finding helper app',
		content:
			'This app allows a user to manage his various job applications and their associated contacts',
	},
};

function Projects() {
	return (
		<div className='flex flex-col gap-10'>
			<h2 className='pb-0 mt-10 text-4xl font-bold text-center'>
				Projects
			</h2>
			<div className='flex flex-wrap items-start justify-center gap-10'>
				<ProjectCard project={gestionSmac}>
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
				<ProjectCard project={jobMemo}>
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
