import { useContext } from 'react';
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
		</div>
	);
}

export default App;
