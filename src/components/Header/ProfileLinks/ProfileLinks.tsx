import LinkButton from '../../LinkButton/LinkButton';
import GithubLogo from '@assets/github-logo.svg';
import LinkedinLogo from '@assets/linkedin-logo.svg';
import EmailLogo from '@assets/email-logo.svg';
import PdfLogo from '@assets/pdf-logo.svg';
import CV from '@assets/cv/CV_Chris_Berlant.pdf';

function ProfileLinks() {
	return (
		<div className='flex flex-wrap justify-center gap-4'>
			<LinkButton
				variant='github'
				text='GitHub'
				logo={GithubLogo}
				onClick={() => window.open('https://github.com/chrisberlant')}
			/>
			<LinkButton
				variant='linkedin'
				text='LinkedIn'
				logo={LinkedinLogo}
				onClick={() =>
					window.open('https://www.linkedin.com/in/chris-berlant/')
				}
			/>
			<LinkButton
				text='chris.berlant@gmail.com'
				logo={EmailLogo}
				variant='default'
				onClick={() =>
					(window.location.href = 'mailto:chris.berlant@gmail.com')
				}
			/>
			<a href={CV} download='Berlant Chris CV' target='_blank'>
				<LinkButton
					text='Download CV'
					logo={PdfLogo}
					variant='default'
					logoAlt='PDF logo'
				/>
			</a>
		</div>
	);
}

export default ProfileLinks;
