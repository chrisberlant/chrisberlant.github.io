import GithubLogo from '../../assets/github-logo.svg';
import YoutubeLogo from '../../assets/youtube-logo.svg';
import LinkButton from '../LinkButton/LinkButton';
import MainProjectCard from './MainProjectCard/MainProjectCard';
import ProjectCard, { ProjectCardProps } from './ProjectCard/ProjectCard';

const gestionSmac: ProjectCardProps['project'] = {
	title: 'Gestion SMAC',
	slidesUrl: [
		'/img/gestion-smac1.png',
		'/img/gestion-smac2.png',
		'/img/gestion-smac3.png',
	],
	badges: {
		front: ['React', 'Mantine', 'Tanstack Table', 'Tanstack Query'],
		back: ['Express', 'PostgreSQL', 'JWT'],
		both: ['Zod'],
	},
	description: {
		title: 'A mobile devices management application',
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
		front: ['React', 'Redux', 'React Beautiful DnD'],
		back: ['Express', 'PostgreSQL', 'JWT'],
		both: ['Joi'],
	},
	description: {
		title: 'Job finding helper',
		content:
			'Allows a user to manage his various job applications and their associated contacts',
	},
};

export default function Projects() {
	return (
		<div className='flex flex-col gap-10 mt-20'>
			<h2 className='text-4xl font-bold text-center animate-fade-in font-montserrat'>
				My Projects
			</h2>
			<div className='flex flex-col flex-wrap items-center justify-center gap-10'>
				<MainProjectCard
					project={gestionSmac}
					className='animate-slide-from-left'
				>
					<div className='flex flex-col items-center justify-between flex-1'>
						<div>
							<p>
								This webapp allows a team to manage a stock of
								various mobile devices (basic phones,
								smartphones, 4G modems).
							</p>
							{/* Main features :
							<ul>
								<li>A</li>
								<li>B</li>
								<li>C</li>
								<li>D</li>
							</ul> */}
						</div>
						<div className='flex flex-row flex-wrap justify-around gap-6 mt-4'>
							<LinkButton
								size='sm'
								variant='githubProject'
								text='Front-end repository'
								logo={GithubLogo}
								aria-label='Open the Gestion SMAC front-end repository'
								link='https://github.com/chrisberlant/gestion-SMAC-front'
							/>
							<LinkButton
								size='sm'
								variant='githubProject'
								text='Back-end repository'
								logo={GithubLogo}
								aria-label='Open the Gestion SMAC back-end repository'
								link='https://github.com/chrisberlant/gestion-SMAC-back'
							/>
							<LinkButton
								size='sm'
								variant='youtube'
								text='YouTube Demo'
								logo={YoutubeLogo}
								link='https://github.com/chrisberlant/gestion-SMAC-front'
							/>
						</div>
					</div>
				</MainProjectCard>
				<div className='flex flex-wrap justify-center gap-10'>
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
							link='https://github.com/chrisberlant/jobmemo-front'
						/>
						<LinkButton
							size='sm'
							variant='githubProject'
							text='Back-end'
							logo={GithubLogo}
							aria-label='Open the JobMemo back-end repository'
							link='https://github.com/chrisberlant/jobmemo-back'
						/>
					</ProjectCard>
					{/* <ProjectCard
						project={jobMemo}
						className='animate-slide-from-right'
					>
						<LinkButton
							size='sm'
							variant='githubProject'
							text='Front-end'
							logo={GithubLogo}
							aria-label='Open the JobMemo front-end repository'
							link='https://github.com/chrisberlant/jobmemo-front'
						/>
						<LinkButton
							size='sm'
							variant='githubProject'
							text='Back-end'
							logo={GithubLogo}
							aria-label='Open the JobMemo back-end repository'
							link='https://github.com/chrisberlant/jobmemo-back'
						/>
					</ProjectCard> */}
				</div>
			</div>
		</div>
	);
}
