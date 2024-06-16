import NavButton from './NavButton/NavButton';

export default function NavBar() {
	return (
		<nav className='flex justify-end gap-4 mr-4 md:mr-10 lg:gap-8 xl:mr-32 animate-slide-from-top'>
			<NavButton link='/' text='About me' />
			<NavButton link='/tools' text='My tools' />
			<NavButton link='/projects' text='My projects' />
		</nav>
	);
}
