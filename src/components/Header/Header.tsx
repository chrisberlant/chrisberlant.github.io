import ProfileLinks from './ProfileLinks/ProfileLinks';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import Description from './Description/Description';

function Header() {
	return (
		<header className='flex flex-col'>
			<div className='flex flex-col h-60 min-[305px]:h-52 min-[369px]:h-44 min-[529px]:h-36 sm:h-48 min-[661px]:h-40 min-[1166px]:h-32 text-2xl sm:text-3xl font-bold '>
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
