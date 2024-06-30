import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu';

export default function RootLayout() {
	return (
		<div className='relative'>
			<div className='fixed rounded-full top-36 -z-10 opacity-30 bg-full-stack animate-blob left-4 size-64 blur-2xl' />
			<div className='fixed rounded-full bottom-4 bg-front-end -z-10 opacity-30 animate-blob2 -right-4 size-96 blur-3xl animation-delay-1000' />
			<Header />
			<main>
				<Outlet />
			</main>
			<MobileMenu />
			<Footer />
		</div>
	);
}
