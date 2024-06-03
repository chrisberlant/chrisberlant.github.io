import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import HomePage from './components/HomePage/HomePage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MobileMenu from './components/MobileMenu/MobileMenu';
import Tools from './components/Tools/Tools';
import Footer from './components/Footer/Footer';

const AppRoutes = () => (
	<Routes>
		<Route element={<HomePage />} path='/' />
		<Route element={<Projects />} path='/projects' />
		<Route element={<Tools />} path='/tools' />
	</Routes>
);

export default function App() {
	return (
		<Router>
			<div
				className={`app pt-8 pb-4 bg-background text-foreground lg:px-8 px-4`}
			>
				<Header />
				<main>
					<AppRoutes />
					{/* <Footer
					currentPosition='Footer'
					refs={[headerRef, skillsRef, projectsRef]}
				/> */}
				</main>
				<Footer />
			</div>
		</Router>
	);
}
