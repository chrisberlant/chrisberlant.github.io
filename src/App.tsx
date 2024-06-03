import { useContext } from 'react';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import HomePage from './components/HomePage/HomePage';
import { ThemeProviderContext } from './components/ThemeProvider/ThemeProvider';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MobileMenu from './components/MobileMenu/MobileMenu';
import Tools from './components/Tools/Tools';

const AppRoutes = () => (
	<Routes>
		<Route element={<HomePage />} path='/' />
		<Route element={<Projects />} path='/projects' />
		<Route element={<Tools />} path='/tools' />
	</Routes>
);

export default function App() {
	const { theme } = useContext(ThemeProviderContext);

	return (
		<Router>
			<div
				className={`app ${theme} py-8 bg-background text-foreground lg:px-8 px-4`}
			>
				<Header />
				<main>
					<AppRoutes />
					{/* <Footer
					currentPosition='Footer'
					refs={[headerRef, skillsRef, projectsRef]}
				/> */}
				</main>
				<MobileMenu />
			</div>
		</Router>
	);
}
