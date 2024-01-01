import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className='app'>
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
