import { useContext, useRef } from 'react';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import { ThemeProviderContext } from './components/ThemeProvider/ThemeProvider';
import Footer from './components/Footer/Footer';

export default function App() {
	const { theme } = useContext(ThemeProviderContext);
	const headerRef = useRef<HTMLDivElement | null>(null);
	const skillsRef = useRef<HTMLDivElement | null>(null);
	const projectsRef = useRef<HTMLDivElement | null>(null);

	return (
		<div className={`app ${theme}`}>
			<Header ref={headerRef} />
			<main>
				<Skills ref={skillsRef} />
				<Projects ref={projectsRef} />
				<Footer
					currentPosition='Footer'
					refs={[headerRef, skillsRef, projectsRef]}
				/>
			</main>
		</div>
	);
}
