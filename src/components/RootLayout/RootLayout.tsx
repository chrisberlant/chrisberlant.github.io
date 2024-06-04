import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet, ScrollRestoration } from 'react-router-dom';

export default function RootLayout() {
	return (
		<div
			className={`app pt-8 pb-4 bg-background text-foreground lg:px-8 px-4 min-h-screen`}
		>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
			<ScrollRestoration />
		</div>
	);
}
