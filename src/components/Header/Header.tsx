import ProfileLinks from './ProfileLinks/ProfileLinks';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import Description from './Description/Description';

function Header() {
	return (
		<header className='flex flex-col gap-4 2xl:gap-0'>
			<div className='flex mb-2 min-h-48 sm:min-h-40 lg:min-h-32 2xl:min-h-28'>
				<div className='flex flex-col items-center flex-1 text-3xl font-bold font-robotoMono'>
					<h1 className='mb-4 text-center'>Hi I'm Chris!</h1>
					<Description />
				</div>
				<ThemeToggler />
			</div>
			<ProfileLinks />
		</header>
	);
}

export default Header;
