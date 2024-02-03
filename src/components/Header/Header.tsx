import ProfileLinks from './ProfileLinks/ProfileLinks';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import Description from './Description/Description';

function Header() {
	return (
		<header className='flex flex-col gap-4 2xl:gap-0'>
			<div className='flex flex-col h-44 min-[581px]:h-32 sm:h-44 min-[726px]:h-36 min-[1346px]:h-32 text-2xl font-bold sm:text-3xl'>
				<div className='flex items-center justify-center font-bold font-robotoMono'>
					<h1 className='mb-4 text-center'>Hi I'm Chris!</h1>
					<ThemeToggler />
				</div>
				<Description />
			</div>
			<ProfileLinks />
		</header>
	);
}

export default Header;
