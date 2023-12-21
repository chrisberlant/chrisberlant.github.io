import Button from '../Button/Button';
import ProfileLinks from '../ProfileLinks/ProfileLinks';
import ThemeToggler from '../ThemeToggler/ThemeToggler';

function Header() {
	return (
		<div className='flex flex-col w-full header'>
			<div className='flex alig'>
				<h1 className='mb-8 ml-auto text-5xl font-bold'>
					Portfolio de Chris Berlant
				</h1>
				<ThemeToggler />
			</div>
			<ProfileLinks>
				<Button
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
			</ProfileLinks>
		</div>
	);
}

export default Header;
