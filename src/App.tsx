import './App.css';
import Header from './components/Header/Header';
import ThemeProvider from './components/ThemeProvider/ThemeProvider';

function App() {
	return (
		<ThemeProvider>
			<div className='app'>
				<Header />
			</div>
		</ThemeProvider>
	);
}

export default App;
