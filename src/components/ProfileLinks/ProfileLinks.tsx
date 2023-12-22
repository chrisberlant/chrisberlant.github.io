import Button from '../Button/Button';

function ProfileLinks() {
	return (
		<div className='flex justify-center gap-4'>
			{' '}
			<Button
				variant='github'
				onClick={() =>
					window.open('https://github.com/chrisberlant', '_blank')
				}
			>
				GitHub
			</Button>
			<Button
				variant='linkedin'
				onClick={() =>
					window.open(
						'https://www.linkedin.com/in/chris-berlant/',
						'_blank'
					)
				}
			>
				LinkedIn
			</Button>
		</div>
	);
}

export default ProfileLinks;
