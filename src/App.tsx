import './App.css';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import ThemeProvider from './components/ThemeProvider/ThemeProvider';

function App() {
	return (
		<ThemeProvider>
			<main className='app'>
				<Header />
				<Skills />
			</main>
		</ThemeProvider>
	);
}

export default App;
