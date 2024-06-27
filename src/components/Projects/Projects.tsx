import { useContext } from 'react';
import GithubLogoWhite from '@assets/github-logo-white.svg';
import GithubLogoBlack from '@assets/github-logo-black.svg';
import MainProjectCard from './MainProjectCard/MainProjectCard';
import ProjectCard, { ProjectType } from './ProjectCard/ProjectCard';
import { ThemeProviderContext } from '../ThemeProvider/ThemeProvider';
import { Globe } from 'lucide-react';
import ExternalLink from '../ExternalLink/ExternalLink';
import PageTitle from '../PageTitle/PageTitle';

const gestionSmac: ProjectType = {
	title: 'Gestion SMAC',
	slidesUrl: [
		'/img/gestion-smac0.png',
		'/img/gestion-smac1.png',
		'/img/gestion-smac2.png',
		'/img/gestion-smac3.png',
		'/img/gestion-smac4.png',
		'/img/gestion-smac5.png',
	],
	badges: {
		front: ['React', 'Mantine', 'Tanstack Table', 'Tanstack Query'],
		back: ['Express', 'PostgreSQL', 'JWT'],
		fullStack: ['Zod'],
		appType: ['Desktop only'],
	},
	description: {
		title: 'A mobile devices management application',
		content: (
			<div>
				<p>
					This internal webapp allows a team to manage a stock of
					various mobile devices (basic phones, smartphones, 4G
					modems).
				</p>
				<p>
					It includes authentication,
					creating/reading/updating/deleting multiple elements, and
					CSV files import/export.
				</p>
				<p>
					An admin dashboard allows users with the required role to do
					things like see the actions history and create new users
					allowed to access the app.
				</p>
				<p>You can find the full documentation on the repositories.</p>
			</div>
		),
	},
};

const jobMemo: ProjectType = {
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
		front: ['React', 'Redux', 'React Beautiful DnD'],
		back: ['Express', 'PostgreSQL', 'JWT'],
		fullStack: ['Joi'],
		appType: ['Responsive'],
	},
	description: {
		title: 'Job finding helper',
		content: (
			<div>
				<p>
					Help users track their various job applications and their
					associated contacts.
				</p>
				<p> The main feature is the job cards drag and drop.</p>
			</div>
		),
	},
};

export default function Projects() {
	const { theme } = useContext(ThemeProviderContext);
	const gitHubLogo = theme == 'light' ? GithubLogoBlack : GithubLogoWhite;

	return (
		<section className='flex flex-col xl:mx-20 2xl:mx-44'>
			<PageTitle>My projects</PageTitle>
			<div className='flex flex-col flex-wrap items-center justify-center gap-10 sm:gap-14'>
				<MainProjectCard project={gestionSmac}>
					<div className='flex flex-col items-center justify-between flex-1'>
						{gestionSmac.description.content}
						<div className='flex flex-row flex-wrap justify-center gap-6 mt-4'>
							<ExternalLink
								size='sm'
								variant='project'
								text='Front-end'
								logo={gitHubLogo}
								aria-label='Open the Gestion SMAC front-end repository'
								link='https://github.com/chrisberlant/gestion-SMAC-front'
							/>
							<ExternalLink
								size='sm'
								variant='project'
								text='Back-end'
								logo={gitHubLogo}
								aria-label='Open the Gestion SMAC back-end repository'
								link='https://github.com/chrisberlant/gestion-SMAC-back'
							/>
							<ExternalLink
								size='sm'
								variant='project'
								icon={<Globe className='mr-2' size={18} />}
								text='Try the demo version'
								aria-label='Try the demo version'
								link='https://demo--gestion-smac.netlify.app'
							/>
						</div>
					</div>
				</MainProjectCard>
				<div className='flex flex-wrap justify-center gap-10 sm:gap-14'>
					<ProjectCard project={jobMemo}>
						<ExternalLink
							size='sm'
							variant='project'
							text='Front-end'
							logo={gitHubLogo}
							aria-label='Open the JobMemo front-end repository'
							link='https://github.com/chrisberlant/jobmemo-front'
						/>
						<ExternalLink
							size='sm'
							variant='project'
							text='Back-end'
							logo={gitHubLogo}
							aria-label='Open the JobMemo back-end repository'
							link='https://github.com/chrisberlant/jobmemo-back'
						/>
					</ProjectCard>
				</div>
			</div>
		</section>
	);
}
