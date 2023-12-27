import ProfileLinks from './ProfileLinks/ProfileLinks';
import ThemeToggler from '../ThemeToggler/ThemeToggler';

function Header() {
	return (
		<header className='flex flex-col'>
			<div className='flex'>
				<h1 className='mb-8 ml-auto text-5xl font-bold text-center'>
					Chris Berlant's Webpage
				</h1>
				<ThemeToggler />
			</div>
			<ProfileLinks />
		</header>
	);
}

export default Header;
