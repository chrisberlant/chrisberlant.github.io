import LinkButton from '../../LinkButton/LinkButton';
import GithubLogo from '../../../assets/github-logo.svg';
import LinkedinLogo from '../../../assets/linkedin-logo.svg';
import EmailLogo from '../../../assets/email-logo.svg';

function ProfileLinks() {
	return (
		<div className='flex flex-wrap justify-center gap-4'>
			<LinkButton
				variant='github'
				text='GitHub'
				logo={GithubLogo}
				logoAlt='GitHub logo'
				aria-label='Open the GitHub profile'
				onClick={() => window.open('https://github.com/chrisberlant')}
			/>
			<LinkButton
				variant='linkedin'
				text='LinkedIn'
				logo={LinkedinLogo}
				logoAlt='LinkedIn logo'
				aria-label='Open the LinkedIn profile'
				onClick={() =>
					window.open('https://www.linkedin.com/in/chris-berlant/')
				}
			/>
			<LinkButton
				text='chris.berlant@gmail.com'
				logo={EmailLogo}
				variant='default'
				aria-label='Send an email to chris.berlant@gmail.com'
				logoAlt='Email logo'
				onClick={() =>
					(window.location.href = 'mailto:chris.berlant@gmail.com')
				}
			/>
		</div>
	);
}

export default ProfileLinks;
