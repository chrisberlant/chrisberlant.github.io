import ProfileLinks from './ProfileLinks/ProfileLinks';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import NavBar from '../NavBar/NavBar';

export default function Header() {
	return (
		<header>
			<ThemeToggler />
			<NavBar />
			<h1 className='pt-4 pb-2 text-4xl font-bold text-center lg:pt-2 animate-slide-from-top font-montserrat'>
				Chris Berlant's Webpage
			</h1>
			<ProfileLinks />
		</header>
	);
}
