import ProfileLinks from './ProfileLinks/ProfileLinks';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import Description from './Description/Description';

function Header() {
	return (
		<header className='flex flex-col gap-16 md:gap-8'>
			<div className='flex h-40 md:h-24'>
				<div className='flex flex-col items-center flex-1 text-3xl font-bold font-robotoMono'>
					<h1 className='mb-4'>Hi I'm Chris!</h1>
					<Description />
				</div>
				<ThemeToggler />
			</div>
			<ProfileLinks />
		</header>
	);
}

export default Header;
