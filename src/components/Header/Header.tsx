import ProfileLinks from './ProfileLinks/ProfileLinks';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import Description from './Description/Description';

function Header() {
	return (
		<header className='flex flex-col gap-16 md:gap-8'>
			<div className='flex'>
				{/* <h1 className='mb-8 ml-auto text-5xl font-bold text-center font-montserrat'>
					Chris Berlant's Webpage
				</h1> */}
				<Description />
				<ThemeToggler />
			</div>
			<ProfileLinks />
		</header>
	);
}

export default Header;
