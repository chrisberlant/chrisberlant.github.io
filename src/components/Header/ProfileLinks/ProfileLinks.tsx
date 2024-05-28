import LinkButton from '../../LinkButton/LinkButton';
import GithubLogoBlack from '@assets/github-logo-black.svg';
import GithubLogoWhite from '@assets/github-logo-white.svg';
import LinkedinLogo from '@assets/linkedin-logo.svg';
import EmailLogo from '@assets/email-logo.svg';
import PdfLogo from '@assets/pdf-logo.svg';
import CV from '@assets/cv/CV_ChrisBerlant_ReactDev.pdf';
import { useContext } from 'react';
import { ThemeProviderContext } from '../../ThemeProvider/ThemeProvider';

export default function ProfileLinks() {
	const { theme } = useContext(ThemeProviderContext);
	const gitHubLogo = theme == 'light' ? GithubLogoBlack : GithubLogoWhite;

	return (
		<div className='flex flex-wrap justify-center gap-4 md:gap-6'>
			<LinkButton
				variant='github'
				text='GitHub'
				logo={gitHubLogo}
				link='https://github.com/chrisberlant'
			/>
			<LinkButton
				variant='linkedin'
				text='LinkedIn'
				logo={LinkedinLogo}
				link='https://www.linkedin.com/in/chris-berlant/'
			/>
			<LinkButton
				text='chris.berlant@gmail.com'
				logo={EmailLogo}
				variant='default'
				onClick={() =>
					(window.location.href = 'mailto:chris.berlant@gmail.com')
				}
			/>
			<a href={CV} download='CV_ChrisBerlant_ReactDev' target='_blank'>
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
