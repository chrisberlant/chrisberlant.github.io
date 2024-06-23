import ExternalLink from '../../ExternalLink/ExternalLink';
import GithubLogoBlack from '@assets/github-logo-black.svg';
import GithubLogoWhite from '@assets/github-logo-white.svg';
import LinkedinLogoBlack from '@assets/linkedin-logo-black.svg';
import LinkedinLogoWhite from '@assets/linkedin-logo-white.svg';
import MailLogoBlack from '@assets/mail-logo-black.svg';
import MailLogoWhite from '@assets/mail-logo-white.svg';
import PdfLogoBlack from '@assets/pdf-logo-black.svg';
import PdfLogoWhite from '@assets/pdf-logo-white.svg';
import CV from '@assets/cv/CV_ChrisBerlant_ReactDev.pdf';
import { useContext } from 'react';
import { ThemeProviderContext } from '../../ThemeProvider/ThemeProvider';

export default function ProfileLinks() {
	const { theme } = useContext(ThemeProviderContext);

	return (
		<div className='flex flex-wrap gap-2 sm:justify-center sm:ml-8 lg:ml-12 animate-fade-in'>
			<ExternalLink
				variant='profile'
				title='My GitHub profile'
				logo={theme === 'light' ? GithubLogoBlack : GithubLogoWhite}
				link='https://github.com/chrisberlant'
			/>
			<ExternalLink
				variant='profile'
				title='My LinkedIn profile'
				logo={theme === 'light' ? LinkedinLogoBlack : LinkedinLogoWhite}
				link='https://www.linkedin.com/in/chris-berlant/'
			/>
			<ExternalLink
				variant='profile'
				title='Send me an email'
				logo={theme === 'light' ? MailLogoBlack : MailLogoWhite}
				link='mailto:chris.berlant@gmail.com'
			/>
			<ExternalLink
				variant='profile'
				title='Download my CV'
				logo={theme === 'light' ? PdfLogoBlack : PdfLogoWhite}
				link={CV}
				download='CV_ChrisBerlant_ReactDev.pdf'
			/>
		</div>
	);
}
