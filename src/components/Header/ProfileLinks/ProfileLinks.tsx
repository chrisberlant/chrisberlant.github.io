import Button from '../../Button/Button';
import GithubLogo from '../../../assets/github-logo.svg';
import LinkedinLogo from '../../../assets/linkedin-logo.svg';

function ProfileLinks() {
	return (
		<div className='flex justify-center gap-4'>
			{' '}
			<Button
				text='GitHub'
				logo={GithubLogo}
				variant='github'
				onClick={() =>
					window.open('https://github.com/chrisberlant', '_blank')
				}
			></Button>
			<Button
				text='LinkedIn'
				logo={LinkedinLogo}
				logoSize={5}
				variant='linkedin'
				onClick={() =>
					window.open(
						'https://www.linkedin.com/in/chris-berlant/',
						'_blank'
					)
				}
			/>
		</div>
	);
}

export default ProfileLinks;
