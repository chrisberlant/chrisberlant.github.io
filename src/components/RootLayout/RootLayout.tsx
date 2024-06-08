import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu';

export default function RootLayout() {
	return (
		<div
			className={`app pt-8 pb-4 bg-background text-foreground lg:px-8 px-4 min-h-screen`}
		>
			<Header />
			<main>
				<Outlet />
			</main>
			<MobileMenu />
			<Footer />
		</div>
	);
}
