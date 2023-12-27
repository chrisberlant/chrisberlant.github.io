import ProfileButton from '../../ProfileButton/ProfileButton';
import GithubLogo from '../../../assets/github-logo.svg';
import LinkedinLogo from '../../../assets/linkedin-logo.svg';
import EmailLogo from '../../../assets/email-logo.svg';

function ProfileLinks() {
	return (
		<div className='flex flex-wrap justify-center gap-4'>
			<ProfileButton
				variant='github'
				text='GitHub'
				logo={GithubLogo}
				logoAlt='Logo GitHub'
				aria-label='Ouvrir le profil GitHub'
				onClick={() => window.open('https://github.com/chrisberlant')}
			/>
			<ProfileButton
				variant='linkedin'
				text='LinkedIn'
				logo={LinkedinLogo}
				logoAlt='Logo LinkedIn'
				aria-label='Ouvrir le profil LinkedIn'
				onClick={() =>
					window.open('https://www.linkedin.com/in/chris-berlant/')
				}
			/>
			<ProfileButton
				text='chris.berlant@gmail.com'
				logo={EmailLogo}
				variant='default'
				aria-label='Envoyer un email à chris.berlant@gmail.com'
				logoAlt='Logo Email'
				onClick={() =>
					(window.location.href = 'mailto:chris.berlant@gmail.com')
				}
			/>
		</div>
	);
}

export default ProfileLinks;
