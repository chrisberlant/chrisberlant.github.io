import { useContext } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import { ThemeProviderContext } from './components/ThemeProvider/ThemeProvider';

function App() {
	const { theme } = useContext(ThemeProviderContext);
	return (
		<div className={`app ${theme}`}>
			<Header />
			<main>
				<Skills />
				<Projects />
			</main>
			<Footer />
		</div>
	);
}

export default App;
