import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu';

export default function RootLayout() {
	return (
		<div className='flex flex-col min-h-screen px-3 pt-8 pb-4 app bg-background text-foreground lg:px-8 sm:px-4'>
			<Header />
			<main>
				<Outlet />
			</main>
			<MobileMenu />
			<Footer />
		</div>
	);
}
