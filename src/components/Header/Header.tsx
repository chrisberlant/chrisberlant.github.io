import ProfileLinks from './ProfileLinks/ProfileLinks';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import NavBar from '../NavBar/NavBar';

export default function Header() {
	return (
		<header>
			<ThemeToggler />
			<div className='flex flex-col justify-between gap-2 mt-2 mb-8 sm:gap-0 items-startsm:items-end sm:mt-4 sm:flex-row md:mt-6'>
				<ProfileLinks />
				<NavBar />
			</div>
			<h1 className='pb-8 text-4xl font-bold text-center animate-slide-from-top font-montserrat'>
				Chris Berlant's Webpage
			</h1>
		</header>
	);
}
