import { Moon, Sun } from 'lucide-react';
import { ThemeProviderContext } from '../ThemeProvider/ThemeProvider';
import { useContext } from 'react';

function ThemeToggler() {
	const { theme, toggleTheme } = useContext(ThemeProviderContext);

	return (
		<button
			onClick={toggleTheme}
			className='absolute inline-block ml-auto cursor-pointer top-6 xl:top-10 right-4 animate-slide-from-top hover:scale-110 md:right-8 lg:right-20'
			aria-label='Toggle color theme'
		>
			{theme === 'light' ? <Sun /> : <Moon />}
		</button>
	);
}

export default ThemeToggler;
