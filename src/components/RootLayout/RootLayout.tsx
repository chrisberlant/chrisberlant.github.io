import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu';

export default function RootLayout() {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<MobileMenu />
			<Footer />
		</>
	);
}
