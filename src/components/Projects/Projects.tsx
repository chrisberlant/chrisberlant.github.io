import { useContext } from 'react';
import LinkButton from '../LinkButton/LinkButton';
import GithubLogoWhite from '@assets/github-logo-white.svg';
import GithubLogoBlack from '@assets/github-logo-black.svg';
import MainProjectCard from './MainProjectCard/MainProjectCard';
import ProjectCard, { ProjectType } from './ProjectCard/ProjectCard';
import { ThemeProviderContext } from '../ThemeProvider/ThemeProvider';
import { Globe } from 'lucide-react';

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
					This webapp allows a team to manage a stock of various
					mobile devices (basic phones, smartphones, 4G modems).
				</p>
				<p>
					It includes authentication,
					creating/reading/updating/deleting multiple elements
					including other users, and CSV files import/export.
				</p>
				<p>You can find more details on the repositories.</p>
				{/* Main features :
		<ul>
			<li>A</li>
			<li>B</li>
			<li>C</li>
			<li>D</li>
		</ul> */}
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
		<section className='flex flex-col mb-4 2xl:px-28'>
			<h2 className='mb-10 text-4xl font-bold text-center animate-fade-in font-montserrat'>
				My Projects
			</h2>
			<div className='flex flex-col flex-wrap items-center justify-center gap-10 sm:gap-14'>
				<MainProjectCard project={gestionSmac}>
					<div className='flex flex-col items-center justify-between flex-1'>
						{gestionSmac.description.content}
						<div className='flex flex-row flex-wrap justify-around gap-6 mt-4'>
							<LinkButton
								size='sm'
								variant='githubProject'
								text='Front-end'
								logo={gitHubLogo}
								aria-label='Open the Gestion SMAC front-end repository'
								link='https://github.com/chrisberlant/gestion-SMAC-front'
							/>
							<LinkButton
								size='sm'
								variant='githubProject'
								text='Back-end'
								logo={gitHubLogo}
								aria-label='Open the Gestion SMAC back-end repository'
								link='https://github.com/chrisberlant/gestion-SMAC-back'
							/>
							<LinkButton
								size='sm'
								icon={<Globe className='mr-2' size={18} />}
								text='Try the demo version !'
								aria-label='Try the demo app'
								link='https://demo--gestion-smac.netlify.app'
							/>
						</div>
					</div>
				</MainProjectCard>
				<div className='flex flex-wrap justify-center gap-10 sm:gap-14'>
					<ProjectCard project={jobMemo}>
						<LinkButton
							size='sm'
							variant='githubProject'
							text='Front-end'
							logo={gitHubLogo}
							aria-label='Open the JobMemo front-end repository'
							link='https://github.com/chrisberlant/jobmemo-front'
						/>
						<LinkButton
							size='sm'
							variant='githubProject'
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
