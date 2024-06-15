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

	return (
		<div className='flex flex-wrap gap-2 sm:justify-center sm:ml-8 lg:ml-12 animate-fade-in sm:gap-4'>
			<LinkButton
				variant='profile'
				title='My GitHub profile'
				logo={theme == 'light' ? GithubLogoBlack : GithubLogoWhite}
				link='https://github.com/chrisberlant'
			/>
			<LinkButton
				variant='profile'
				title='My LinkedIn profile'
				logo={LinkedinLogo}
				link='https://www.linkedin.com/in/chris-berlant/'
			/>
			<LinkButton
				title='Send me an email'
				logo={EmailLogo}
				link='mailto:chris.berlant@gmail.com'
			/>
			<LinkButton
				variant='default'
				title='Download my CV'
				logo={PdfLogo}
				link={CV}
				download='CV_ChrisBerlant_ReactDev.pdf'
			/>
		</div>
	);
}
