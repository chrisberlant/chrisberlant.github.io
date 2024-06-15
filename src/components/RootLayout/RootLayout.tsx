import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu';

export default function RootLayout() {
	return (
		<div className='min-h-screen px-2 pt-8 pb-4 app bg-background text-foreground lg:px-8 sm:px-4'>
			<Header />
			<main>
				<Outlet />
			</main>
			<MobileMenu />
			<Footer />
		</div>
	);
}
