import ProfileLinks from './ProfileLinks/ProfileLinks';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import Description from './Description/Description';

function Header() {
	return (
		<header className='flex flex-col'>
			<div className='flex flex-col h-68 min-[305px]:h-52 min-[420px]:h-44 min-[581px]:h-36 sm:h-48 min-[726px]:h-40 min-[1346px]:h-32 text-2xl font-bold sm:text-3xl'>
				<div className='flex justify-center font-bold font-robotoMono'>
					<h1 className='mb-4'>Hi I'm Chris!</h1>
					<ThemeToggler />
				</div>
				<Description />
			</div>
			<ProfileLinks />
		</header>
	);
}

export default Header;
